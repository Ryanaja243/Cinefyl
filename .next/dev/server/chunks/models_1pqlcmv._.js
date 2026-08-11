module.exports = [
"[project]/models/User.ts [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/models/User.ts [app-route] (ecmascript)");
    });
});
}),
"[project]/models/Watchlist.ts [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/models_Watchlist_ts_1wrh76a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/models/Watchlist.ts [app-route] (ecmascript)");
    });
});
}),
];