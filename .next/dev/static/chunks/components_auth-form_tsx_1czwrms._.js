(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/auth-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthForm",
    ()=>AuthForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cinefyl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cinefyl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cinefyl$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cinefyl-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AuthForm({ mode }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cinefyl$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [callbackUrl, setCallbackUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('/');
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const register = mode === 'register';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthForm.useEffect": ()=>{
            setCallbackUrl(new URLSearchParams(window.location.search).get('callbackUrl') || '/');
        }
    }["AuthForm.useEffect"], []);
    async function submit(event) {
        event.preventDefault();
        setError('');
        if (register && form.name.trim().length < 2) return setError('Name must be at least 2 characters');
        if (register && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cinefyl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidUsername"])(form.username)) return setError('Username must be 3-15 alphanumeric characters or underscores');
        if (!form.email || !form.password) return setError(register ? 'All fields are required' : 'Email and password are required fields');
        if (register && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cinefyl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidEmail"])(form.email)) return setError('Invalid email format');
        if (register && form.password.length < 6) return setError('Password must be at least 6 characters');
        setBusy(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cinefyl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/auth/${register ? 'register' : 'login'}`, {
                method: 'POST',
                body: JSON.stringify(register ? form : {
                    email: form.email,
                    password: form.password
                })
            });
            setUser((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cinefyl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeUser"])(result));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(register ? 'Welcome to Cinefyl' : 'Welcome back');
            router.replace(callbackUrl);
        } catch (e) {
            setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cinefyl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getError"])(e));
        } finally{
            setBusy(false);
        }
    }
    const field = (key, label, type = 'text', placeholder = '')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col gap-2 font-mono text-xs font-bold",
            children: [
                label,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: key === 'email' || key === 'password',
                    type: type,
                    value: form[key],
                    onChange: (e)=>setForm({
                            ...form,
                            [key]: e.target.value
                        }),
                    placeholder: placeholder,
                    className: "min-h-12 rounded-md border-[3px] border-ink bg-surface px-3 font-mono text-base font-normal outline-none focus:ring-2 focus:ring-ink/30"
                }, void 0, false, {
                    fileName: "[project]/components/auth-form.tsx",
                    lineNumber: 10,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/auth-form.tsx",
            lineNumber: 10,
            columnNumber: 93
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: submit,
            className: "flex w-full flex-col gap-5 border-[3px] border-ink bg-surface p-6 shadow-[5px_5px_0_#222] md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/55",
                            children: "Cinefyl account"
                        }, void 0, false, {
                            fileName: "[project]/components/auth-form.tsx",
                            lineNumber: 11,
                            columnNumber: 224
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-2 font-serif text-4xl font-black",
                            children: register ? 'Join the shelf' : 'Welcome back'
                        }, void 0, false, {
                            fileName: "[project]/components/auth-form.tsx",
                            lineNumber: 11,
                            columnNumber: 325
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-ink/65",
                            children: register ? 'Create an account and keep your next watch close.' : 'Pick up where your movie night left off.'
                        }, void 0, false, {
                            fileName: "[project]/components/auth-form.tsx",
                            lineNumber: 11,
                            columnNumber: 428
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/auth-form.tsx",
                    lineNumber: 11,
                    columnNumber: 219
                }, this),
                register && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        field('name', 'Name', 'text', 'Your name'),
                        field('username', 'Username', 'text', 'cinephile_01')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/auth-form.tsx",
                    lineNumber: 11,
                    columnNumber: 592
                }, this),
                field('email', 'Email', 'email', 'you@example.com'),
                field('password', 'Password', 'password', '••••••••'),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    role: "alert",
                    className: "border-2 border-danger bg-danger/10 p-3 font-mono text-xs font-bold text-danger",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/auth-form.tsx",
                    lineNumber: 11,
                    columnNumber: 815
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: busy,
                    className: "min-h-12 rounded-md bg-ink px-5 font-mono text-sm font-bold text-surface disabled:opacity-50",
                    children: busy ? 'Please wait...' : register ? 'Create account' : 'Log in'
                }, void 0, false, {
                    fileName: "[project]/components/auth-form.tsx",
                    lineNumber: 11,
                    columnNumber: 935
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center font-mono text-xs text-ink/60",
                    children: [
                        register ? 'Already have an account? ' : 'New to Cinefyl? ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "font-bold text-ink underline",
                            href: register ? '/login' : '/register',
                            children: register ? 'Log in' : 'Register'
                        }, void 0, false, {
                            fileName: "[project]/components/auth-form.tsx",
                            lineNumber: 11,
                            columnNumber: 1257
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/auth-form.tsx",
                    lineNumber: 11,
                    columnNumber: 1139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/auth-form.tsx",
            lineNumber: 11,
            columnNumber: 86
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/auth-form.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(AuthForm, "KnL+sXrsX/qMl3O4KCdSdRYWY84=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cinefyl$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AuthForm;
var _c;
__turbopack_context__.k.register(_c, "AuthForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_auth-form_tsx_1czwrms._.js.map