import mongoose from "mongoose";
import {
  readDB,
  writeDB,
  genId,
  matchFilter,
  applySort,
  applySelect,
  applyDefaults,
  attachSave,
} from "./jsonStore";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Declare global variables to store connection cached state
declare global {
  var mongoose: MongooseCached | undefined;
  // true once we've given up on MongoDB and switched to the local db.json fallback
  var __cinefylUsingJsonFallback: boolean | undefined;
  var __cinefylPatchedModels: Set<string> | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

if (!global.__cinefylPatchedModels) {
  global.__cinefylPatchedModels = new Set<string>();
}

// ---------------------------------------------------------------------------
// JSON fallback query object — mimics the subset of the Mongoose Query API
// this app actually uses: select(), sort(), and being awaitable via then().
// ---------------------------------------------------------------------------
class JsonQuery<T = any> implements PromiseLike<T> {
  private collection: "users" | "watchlists";
  private filter: Record<string, any>;
  private single: boolean;
  private selectStr: string | null = null;
  private sortObj: Record<string, 1 | -1> | null = null;

  constructor(collection: "users" | "watchlists", filter: Record<string, any>, single: boolean) {
    this.collection = collection;
    this.filter = filter || {};
    this.single = single;
  }

  select(fields: string) {
    this.selectStr = fields;
    return this;
  }

  sort(sortObj: Record<string, 1 | -1>) {
    this.sortObj = sortObj;
    return this;
  }

  private async exec(): Promise<any> {
    const db = readDB();
    let items = db[this.collection].filter((item) => matchFilter(item, this.filter));
    if (this.sortObj) items = applySort(items, this.sortObj);
    if (this.selectStr) items = items.map((i) => applySelect(i, this.selectStr!));
    const hydrated = items.map((i) => attachSave(this.collection, { ...i }));
    return this.single ? hydrated[0] ?? null : hydrated;
  }

  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
  ): Promise<TResult1 | TResult2> {
    return this.exec().then(onfulfilled as any, onrejected as any);
  }

  catch(onrejected?: any) {
    return this.exec().catch(onrejected);
  }
}

function patchModel(Model: any, collection: "users" | "watchlists") {
  if (global.__cinefylPatchedModels!.has(collection)) return;
  global.__cinefylPatchedModels!.add(collection);

  Model.find = (filter: Record<string, any> = {}) => new JsonQuery(collection, filter, false);
  Model.findOne = (filter: Record<string, any> = {}) => new JsonQuery(collection, filter, true);
  Model.findById = (id: any) => new JsonQuery(collection, { _id: id }, true);

  Model.create = async (input: any) => {
    const db = readDB();
    const isArray = Array.isArray(input);
    const docsIn = isArray ? input : [input];
    const created = docsIn.map((d: any) => {
      const plain = JSON.parse(JSON.stringify(d));
      plain._id = plain._id || genId();
      applyDefaults(collection, plain);
      db[collection].push(plain);
      return plain;
    });
    writeDB(db);
    const hydrated = created.map((d: any) => attachSave(collection, d));
    return isArray ? hydrated : hydrated[0];
  };

  Model.insertMany = async (docs: any[]) => {
    const db = readDB();
    const created = docs.map((d) => {
      const plain = JSON.parse(JSON.stringify(d));
      plain._id = plain._id || genId();
      applyDefaults(collection, plain);
      db[collection].push(plain);
      return plain;
    });
    writeDB(db);
    return created.map((d) => attachSave(collection, d));
  };

  Model.deleteMany = async (filter: Record<string, any> = {}) => {
    const db = readDB();
    const before = db[collection].length;
    db[collection] = db[collection].filter((i) => !matchFilter(i, filter));
    writeDB(db);
    return { deletedCount: before - db[collection].length };
  };

  Model.findByIdAndDelete = async (id: any) => {
    const idStr = id?.toString ? id.toString() : id;
    const db = readDB();
    const idx = db[collection].findIndex((i) => i._id === idStr);
    if (idx === -1) return null;
    const [removed] = db[collection].splice(idx, 1);
    writeDB(db);
    return attachSave(collection, removed);
  };
}

async function ensureModelsPatched() {
  const [{ default: User }, { default: Watchlist }] = await Promise.all([
    import("@/models/User"),
    import("@/models/Watchlist"),
  ]);
  patchModel(User, "users");
  patchModel(Watchlist, "watchlists");
}

async function dbConnect() {
  // Already decided to use the local JSON fallback for this process — no need
  // to keep retrying MongoDB on every request.
  if (global.__cinefylUsingJsonFallback) {
    await ensureModelsPatched();
    return null;
  }

  if (cached!.conn) {
    return cached!.conn;
  }

  if (!MONGODB_URI) {
    console.warn(
      "[Cinefyl] MONGODB_URI is not set — using local db.json fallback database."
    );
    global.__cinefylUsingJsonFallback = true;
    await ensureModelsPatched();
    return null;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 6000,
    };

    cached!.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached!.conn = await cached!.promise;
    return cached!.conn;
  } catch (e: any) {
    cached!.promise = null;
    console.warn(
      `[Cinefyl] MongoDB connection failed (${e?.message || e}). Falling back to local db.json database.`
    );
    global.__cinefylUsingJsonFallback = true;
    await ensureModelsPatched();
    return null;
  }
}

export default dbConnect;
