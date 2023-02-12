"use strict";
exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 9465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ "src": "/_next/static/media/Logo2.ecc5daa7.png", "height": 473, "width": 528, "blurDataURL": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAxElEQVR42mOAAbmco0d4c4/8Fcw9+l8l60grSIwr9ygLWDJfZzeLWNK6/QKZmzp40zfOF49fNxEskbwWqCCSgXE5w20mqYD+a7yBXTf5A7ofyPtNmAKS5wzqYWOAAT3XDkd5t9ZkJfe2dDPXbg2E3fELPCVjF0RJxUxV1ItsFNTMXiMrlrTcWsa/RV0htFeVQSmgyUXKpyFezq8hTjGgMVw1sNlN0b8pXtq3oVopsNmdAR3c+v+f0adwhpxL5kTl2Kbl/AAnDD17b2zDXQAAAABJRU5ErkJggg==", "blurWidth": 8, "blurHeight": 7 });

            /***/
}),

/***/ 4000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
    /* harmony export */
});
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




            const Image = (props) => {
                const { src, alt, ...rest } = props;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    overflow: "hidden",
                    position: "relative",
                    ...rest,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        objectFit: "cover",
                        layout: "fill",
                        src: src,
                        alt: alt
                    })
                });
            };


            /***/
}),

/***/ 1892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
                try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Requests)
                    /* harmony export */
});
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
                    var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
                    axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

                    class Requests {
                        signUpRequest(data) {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "POST",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/user/register/`,
                                data
                            });
                        }
                        sendOTP(phone) {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/user/time_based/${phone}`
                            });
                        }
                        verifyOTP(phone, otp) {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "POST",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/user/time_based/verify/${phone}/${otp}`
                            });
                        }
                        pharmacistList() {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/pharmacist/pharmacist_list/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                }
                            });
                        }
                        pharmacistApprove(data) {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "PUT",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/pharmacist/pharmacist_list/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                },
                                data
                            });
                        }
                        customerList() {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/user/user_Issue_admin/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                }
                            });
                        }
                        chartWeekOrder() {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/adminApp/week_order_data/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                }
                            });
                        }
                        chartMonthlySale() {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/adminApp/monthly_sale_value/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                }
                            });
                        }
                        chartMonthlyCommission() {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/adminApp/monthly_commission/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                }
                            });
                        }
                        makeOrder() {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/user/make_order/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                }
                            });
                        }
                        changeStatus(data) {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "PUT",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/user/user_Issue_admin/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                },
                                data
                            });
                        }
                        getDashboardTrack(data) {
                            return (0, axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                                method: "GET",
                                url: `http://ec2-13-235-242-127.ap-south-1.compute.amazonaws.com:8000/adminApp/transaction_count/`,
                                headers: {
                                    Authorization: `TOKEN ${localStorage.getItem("Token")}`
                                },
                                data
                            });
                        }
                    }

                    __webpack_async_result__();
                } catch (e) { __webpack_async_result__(e); }
            });

            /***/
}),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GJ": () => (/* binding */ isWindowAvailable),
/* harmony export */   "NH": () => (/* binding */ getActiveNavbar),
/* harmony export */   "r7": () => (/* binding */ getActiveRoute),
/* harmony export */   "th": () => (/* binding */ getActiveNavbarText)
                /* harmony export */
});
            /* unused harmony export findCurrentRoute */
            // NextJS Requirement
            const isWindowAvailable = () => "undefined" !== "undefined";
            const findCurrentRoute = (routes) => {
                const foundRoute = routes.find((route) => isWindowAvailable() && window.location.href.indexOf(route.layout + route.path) !== -1 && route);
                if (foundRoute) {
                    return foundRoute;
                } else {
                    const foundSubMenuRoute = routes.find((route) => isWindowAvailable() && ("parent" in route ? route.parent.find((route) => window.location.href.indexOf(route.layout + route.path) !== -1 && route) : ""));
                    if (foundSubMenuRoute) {
                        const SubMenuRoute = foundSubMenuRoute.parent.find((item) => window.location.href.indexOf(item.layout + item.path) !== -1 && item);
                        return SubMenuRoute;
                    }
                    return foundSubMenuRoute;
                }
            };
            const getActiveRoute = (routes) => {
                const route = findCurrentRoute(routes);
                return route?.name || "Default Brand Text";
            };
            const getActiveNavbar = (routes) => {
                const route = findCurrentRoute(routes);
                return route?.secondary;
            };
            const getActiveNavbarText = (routes) => {
                return getActiveRoute(routes) || false;
            };


            /***/
})

};
;