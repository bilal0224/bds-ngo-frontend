(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(5144);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Nav/Nav.js





const Nav = ()=>{
    const { 0: state , 1: setState  } = (0,external_react_.useContext)(context/* NGOContext */.j);
    const router = (0,router_.useRouter)();
    const logout = ()=>{
        window.localStorage.removeItem("auth");
        setState(null);
        router.push("/");
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "nav bg-dark d-flex justify-content-between p-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg d-flex align-items-start",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "nav-link text-light",
                        children: "Home"
                    })
                })
            }),
            state === null ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex align-items-end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link text-light",
                                children: "Login"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/register",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link text-light",
                                children: "Register"
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/members",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "nav-link text-light",
                            children: "Manage"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link text-light",
                                children: state && state.ngo && state.ngo.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav-link text-light",
                                onClick: logout,
                                children: "Logout"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Nav_Nav = (Nav);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(context/* NGOProvider */.U, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/styles.css"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav_Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                position: "top-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,144], () => (__webpack_exec__(6896)));
module.exports = __webpack_exports__;

})();