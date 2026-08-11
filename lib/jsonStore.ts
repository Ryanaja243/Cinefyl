import fs from "fs";
import path from "path";
import mongoose from "mongoose";

// -----------------------------------------------------------------------
// Cinefyl JSON Fallback Database
// -----------------------------------------------------------------------
// When the real MongoDB connection fails (bad credentials, offline, etc.)
// lib/mongodb.ts monkey-patches the Mongoose models to read/write from a
// single db.json file at the project root instead. This module implements
// that lightweight file-backed "database".
// -----------------------------------------------------------------------

const DB_PATH = path.join(process.cwd(), "db.json");

export interface JsonDB {
  users: Record<string, any>[];
  watchlists: Record<string, any>[];
}

function ensureFile() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: [], watchlists: [] }, null, 2));
  }
}

export function readDB(): JsonDB {
  ensureFile();
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    const parsed = JSON.parse(raw || "{}");
    return {
      users: Array.isArray(parsed.users) ? parsed.users : [],
      watchlists: Array.isArray(parsed.watchlists) ? parsed.watchlists : [],
    };
  } catch {
    return { users: [], watchlists: [] };
  }
}

export function writeDB(db: JsonDB) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export function genId(): string {
  return new mongoose.Types.ObjectId().toString();
}

// -- Filtering ------------------------------------------------------------

function normalize(val: any): any {
  if (val && typeof val === "object" && typeof val.toString === "function" && val._bsontype) {
    return val.toString();
  }
  return val;
}

function matchesValue(itemVal: any, cond: any): boolean {
  if (cond instanceof RegExp) {
    return typeof itemVal === "string" && cond.test(itemVal);
  }
  const condNorm = normalize(cond);
  return itemVal === cond || itemVal === condNorm || String(itemVal) === String(condNorm);
}

export function matchFilter(item: Record<string, any>, filter: Record<string, any> = {}): boolean {
  const keys = Object.keys(filter || {});
  if (keys.length === 0) return true;
  return keys.every((key) => {
    const cond = filter[key];
    if (key === "$or" && Array.isArray(cond)) {
      return cond.some((sub) => matchFilter(item, sub));
    }
    if (key === "$in" || key === "$and") return true; // not needed for this app
    return matchesValue(item[key], cond);
  });
}

export function applySort(items: Record<string, any>[], sortObj: Record<string, 1 | -1> = {}) {
  const entries = Object.entries(sortObj);
  if (entries.length === 0) return items;
  return [...items].sort((a, b) => {
    for (const [key, dir] of entries) {
      const av = a[key];
      const bv = b[key];
      if (av === bv) continue;
      if (av === undefined) return 1;
      if (bv === undefined) return -1;
      return av < bv ? (dir === -1 ? 1 : -1) : dir === -1 ? -1 : 1;
    }
    return 0;
  });
}

export function applySelect(item: Record<string, any>, selectStr: string) {
  const fields = selectStr.trim().split(/\s+/).filter(Boolean);
  if (fields.length === 0) return item;
  const exclude = fields.every((f) => f.startsWith("-"));
  if (exclude) {
    const clone = { ...item };
    fields.forEach((f) => delete clone[f.slice(1)]);
    return clone;
  }
  const clone: Record<string, any> = { _id: item._id };
  fields.forEach((f) => {
    if (item[f] !== undefined) clone[f] = item[f];
  });
  return clone;
}

// -- Defaults per collection -----------------------------------------------

export function applyDefaults(collection: "users" | "watchlists", doc: Record<string, any>) {
  if (collection === "users") {
    if (doc.isAdmin === undefined) doc.isAdmin = false;
  }
  if (collection === "watchlists") {
    if (doc.createdAt === undefined) doc.createdAt = new Date().toISOString();
  }
  return doc;
}

// -- Hydration (attach a .save() to mimic a Mongoose document) ------------

export function attachSave(collection: "users" | "watchlists", obj: Record<string, any>) {
  Object.defineProperty(obj, "save", {
    enumerable: false,
    configurable: true,
    value: async function save() {
      const db = readDB();
      const idx = db[collection].findIndex((i) => i._id === obj._id);
      const plain = JSON.parse(JSON.stringify(obj));
      if (idx >= 0) db[collection][idx] = plain;
      else db[collection].push(plain);
      writeDB(db);
      return obj;
    },
  });
  return obj;
}
