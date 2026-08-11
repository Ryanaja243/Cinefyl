module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/auth/register/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
;
;
;
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await req.json();
        const { name, username, email, password } = body;
        // Simple validation
        if (!name || !username || !email || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Name, username, email, and password are required fields"
            }, {
                status: 400
            });
        }
        if (name.trim().length < 2) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Name must be at least 2 characters"
            }, {
                status: 400
            });
        }
        if (!/^[a-zA-Z0-9_]{3,15}$/.test(username)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Username must be 3-15 alphanumeric characters or underscores"
            }, {
                status: 400
            });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Invalid email format"
            }, {
                status: 400
            });
        }
        if (password.length < 6) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Password must be at least 6 characters"
            }, {
                status: 400
            });
        }
        const cleanUsername = username.toLowerCase().trim();
        const cleanEmail = email.toLowerCase().trim();
        // Check conflict
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            $or: [
                {
                    username: cleanUsername
                },
                {
                    email: cleanEmail
                }
            ]
        });
        if (existingUser) {
            const isUsernameTaken = existingUser.username === cleanUsername;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: isUsernameTaken ? "Username is already taken" : "Email is already registered"
            }, {
                status: 409
            });
        }
        // Hash password
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        // Create user
        const avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${cleanUsername}`;
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            name: name.trim(),
            username: cleanUsername,
            email: cleanEmail,
            password: hashedPassword,
            avatar
        });
        // Create session
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])(newUser._id.toString());
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            _id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            avatar: newUser.avatar,
            isAdmin: newUser.isAdmin || false
        }, {
            status: 201
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed to register user",
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
"[project]/lib/jsonStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyDefaults",
    ()=>applyDefaults,
    "applySelect",
    ()=>applySelect,
    "applySort",
    ()=>applySort,
    "attachSave",
    ()=>attachSave,
    "genId",
    ()=>genId,
    "matchFilter",
    ()=>matchFilter,
    "readDB",
    ()=>readDB,
    "writeDB",
    ()=>writeDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
;
;
// -----------------------------------------------------------------------
// Cinefyl JSON Fallback Database
// -----------------------------------------------------------------------
// When the real MongoDB connection fails (bad credentials, offline, etc.)
// lib/mongodb.ts monkey-patches the Mongoose models to read/write from a
// single db.json file at the project root instead. This module implements
// that lightweight file-backed "database".
// -----------------------------------------------------------------------
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "db.json");
function ensureFile() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DB_PATH)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DB_PATH, JSON.stringify({
            users: [],
            watchlists: []
        }, null, 2));
    }
}
function readDB() {
    ensureFile();
    try {
        const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(DB_PATH, "utf-8");
        const parsed = JSON.parse(raw || "{}");
        return {
            users: Array.isArray(parsed.users) ? parsed.users : [],
            watchlists: Array.isArray(parsed.watchlists) ? parsed.watchlists : []
        };
    } catch  {
        return {
            users: [],
            watchlists: []
        };
    }
}
function writeDB(db) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}
function genId() {
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId().toString();
}
// -- Filtering ------------------------------------------------------------
function normalize(val) {
    if (val && typeof val === "object" && typeof val.toString === "function" && val._bsontype) {
        return val.toString();
    }
    return val;
}
function matchesValue(itemVal, cond) {
    if (cond instanceof RegExp) {
        return typeof itemVal === "string" && cond.test(itemVal);
    }
    const condNorm = normalize(cond);
    return itemVal === cond || itemVal === condNorm || String(itemVal) === String(condNorm);
}
function matchFilter(item, filter = {}) {
    const keys = Object.keys(filter || {});
    if (keys.length === 0) return true;
    return keys.every((key)=>{
        const cond = filter[key];
        if (key === "$or" && Array.isArray(cond)) {
            return cond.some((sub)=>matchFilter(item, sub));
        }
        if (key === "$in" || key === "$and") return true; // not needed for this app
        return matchesValue(item[key], cond);
    });
}
function applySort(items, sortObj = {}) {
    const entries = Object.entries(sortObj);
    if (entries.length === 0) return items;
    return [
        ...items
    ].sort((a, b)=>{
        for (const [key, dir] of entries){
            const av = a[key];
            const bv = b[key];
            if (av === bv) continue;
            if (av === undefined) return 1;
            if (bv === undefined) return -1;
            return av < bv ? dir === -1 ? 1 : -1 : dir === -1 ? -1 : 1;
        }
        return 0;
    });
}
function applySelect(item, selectStr) {
    const fields = selectStr.trim().split(/\s+/).filter(Boolean);
    if (fields.length === 0) return item;
    const exclude = fields.every((f)=>f.startsWith("-"));
    if (exclude) {
        const clone = {
            ...item
        };
        fields.forEach((f)=>delete clone[f.slice(1)]);
        return clone;
    }
    const clone = {
        _id: item._id
    };
    fields.forEach((f)=>{
        if (item[f] !== undefined) clone[f] = item[f];
    });
    return clone;
}
function applyDefaults(collection, doc) {
    if (collection === "users") {
        if (doc.isAdmin === undefined) doc.isAdmin = false;
    }
    if (collection === "watchlists") {
        if (doc.createdAt === undefined) doc.createdAt = new Date().toISOString();
    }
    return doc;
}
function attachSave(collection, obj) {
    Object.defineProperty(obj, "save", {
        enumerable: false,
        configurable: true,
        value: async function save() {
            const db = readDB();
            const idx = db[collection].findIndex((i)=>i._id === obj._id);
            const plain = JSON.parse(JSON.stringify(obj));
            if (idx >= 0) db[collection][idx] = plain;
            else db[collection].push(plain);
            writeDB(db);
            return obj;
        }
    });
    return obj;
}
}),
"[project]/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/jsonStore.ts [app-route] (ecmascript)");
;
;
const MONGODB_URI = process.env.MONGODB_URI;
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.__cinefylPatchedModels) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.__cinefylPatchedModels = new Set();
}
// ---------------------------------------------------------------------------
// JSON fallback query object — mimics the subset of the Mongoose Query API
// this app actually uses: select(), sort(), and being awaitable via then().
// ---------------------------------------------------------------------------
class JsonQuery {
    collection;
    filter;
    single;
    selectStr = null;
    sortObj = null;
    constructor(collection, filter, single){
        this.collection = collection;
        this.filter = filter || {};
        this.single = single;
    }
    select(fields) {
        this.selectStr = fields;
        return this;
    }
    sort(sortObj) {
        this.sortObj = sortObj;
        return this;
    }
    async exec() {
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDB"])();
        let items = db[this.collection].filter((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchFilter"])(item, this.filter));
        if (this.sortObj) items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applySort"])(items, this.sortObj);
        if (this.selectStr) items = items.map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applySelect"])(i, this.selectStr));
        const hydrated = items.map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachSave"])(this.collection, {
                ...i
            }));
        return this.single ? hydrated[0] ?? null : hydrated;
    }
    then(onfulfilled, onrejected) {
        return this.exec().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
        return this.exec().catch(onrejected);
    }
}
function patchModel(Model, collection) {
    if (/*TURBOPACK member replacement*/ __turbopack_context__.g.__cinefylPatchedModels.has(collection)) return;
    /*TURBOPACK member replacement*/ __turbopack_context__.g.__cinefylPatchedModels.add(collection);
    Model.find = (filter = {})=>new JsonQuery(collection, filter, false);
    Model.findOne = (filter = {})=>new JsonQuery(collection, filter, true);
    Model.findById = (id)=>new JsonQuery(collection, {
            _id: id
        }, true);
    Model.create = async (input)=>{
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDB"])();
        const isArray = Array.isArray(input);
        const docsIn = isArray ? input : [
            input
        ];
        const created = docsIn.map((d)=>{
            const plain = JSON.parse(JSON.stringify(d));
            plain._id = plain._id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyDefaults"])(collection, plain);
            db[collection].push(plain);
            return plain;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeDB"])(db);
        const hydrated = created.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachSave"])(collection, d));
        return isArray ? hydrated : hydrated[0];
    };
    Model.insertMany = async (docs)=>{
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDB"])();
        const created = docs.map((d)=>{
            const plain = JSON.parse(JSON.stringify(d));
            plain._id = plain._id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genId"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyDefaults"])(collection, plain);
            db[collection].push(plain);
            return plain;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeDB"])(db);
        return created.map((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachSave"])(collection, d));
    };
    Model.deleteMany = async (filter = {})=>{
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDB"])();
        const before = db[collection].length;
        db[collection] = db[collection].filter((i)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchFilter"])(i, filter));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeDB"])(db);
        return {
            deletedCount: before - db[collection].length
        };
    };
    Model.findByIdAndDelete = async (id)=>{
        const idStr = id?.toString ? id.toString() : id;
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDB"])();
        const idx = db[collection].findIndex((i)=>i._id === idStr);
        if (idx === -1) return null;
        const [removed] = db[collection].splice(idx, 1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeDB"])(db);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jsonStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["attachSave"])(collection, removed);
    };
}
async function ensureModelsPatched() {
    const [{ default: User }, { default: Watchlist }] = await Promise.all([
        __turbopack_context__.A("[project]/models/User.ts [app-route] (ecmascript, async loader)"),
        __turbopack_context__.A("[project]/models/Watchlist.ts [app-route] (ecmascript, async loader)")
    ]);
    patchModel(User, "users");
    patchModel(Watchlist, "watchlists");
}
async function dbConnect() {
    // Already decided to use the local JSON fallback for this process — no need
    // to keep retrying MongoDB on every request.
    if (/*TURBOPACK member replacement*/ __turbopack_context__.g.__cinefylUsingJsonFallback) {
        await ensureModelsPatched();
        return null;
    }
    if (cached.conn) {
        return cached.conn;
    }
    if (!MONGODB_URI) {
        console.warn("[Cinefyl] MONGODB_URI is not set — using local db.json fallback database.");
        /*TURBOPACK member replacement*/ __turbopack_context__.g.__cinefylUsingJsonFallback = true;
        await ensureModelsPatched();
        return null;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 6000
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongooseInstance)=>{
            return mongooseInstance;
        });
    }
    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (e) {
        cached.promise = null;
        console.warn(`[Cinefyl] MongoDB connection failed (${e?.message || e}). Falling back to local db.json database.`);
        /*TURBOPACK member replacement*/ __turbopack_context__.g.__cinefylUsingJsonFallback = true;
        await ensureModelsPatched();
        return null;
    }
}
const __TURBOPACK__default__export__ = dbConnect;
}),
"[project]/lib/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "decrypt",
    ()=>decrypt,
    "deleteSession",
    ()=>deleteSession,
    "encrypt",
    ()=>encrypt,
    "getSession",
    ()=>getSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const secretKey = process.env.NEXTAUTH_SECRET || "default-secret-key-at-least-32-chars-long";
const encodedKey = new TextEncoder().encode(secretKey);
async function encrypt(payload) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime("7d").sign(encodedKey);
}
async function decrypt(session = "") {
    if (!session) return null;
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(session, encodedKey, {
            algorithms: [
                "HS256"
            ]
        });
        return payload;
    } catch (error) {
        return null;
    }
}
async function createSession(userId) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({
        userId,
        expiresAt
    });
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("session", session, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        expires: expiresAt,
        sameSite: "lax",
        path: "/"
    });
}
async function deleteSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("session");
}
async function getSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const session = cookieStore.get("session")?.value;
    return decrypt(session);
}
}),
"[project]/models/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    }
});
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("User", UserSchema);
const __TURBOPACK__default__export__ = User;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1tw2dhx._.js.map