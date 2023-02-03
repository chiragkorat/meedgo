(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7674:
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
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./src/theme/additions/card/card.ts

const Card = {
    baseStyle: (props)=>({
            p: "20px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            position: "relative",
            borderRadius: "20px",
            minWidth: "0px",
            wordWrap: "break-word",
            bg: (0,theme_tools_namespaceObject.mode)("#ffffff", "navy.800")(props),
            backgroundClip: "border-box"
        })
};
const CardComponent = {
    components: {
        Card
    }
};

;// CONCATENATED MODULE: ./src/theme/components/button.ts

const buttonStyles = {
    components: {
        Button: {
            baseStyle: {
                borderRadius: "16px",
                boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
                transition: ".25s all ease",
                boxSizing: "border-box",
                _focus: {
                    boxShadow: "none"
                },
                _active: {
                    boxShadow: "none"
                }
            },
            variants: {
                outline: ()=>({
                        borderRadius: "16px"
                    }),
                brand: (props)=>({
                        bg: (0,theme_tools_namespaceObject.mode)("brand.500", "brand.400")(props),
                        color: "white",
                        _focus: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.500", "brand.400")(props)
                        },
                        _active: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.500", "brand.400")(props)
                        },
                        _hover: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.600", "brand.400")(props)
                        }
                    }),
                darkBrand: (props)=>({
                        bg: (0,theme_tools_namespaceObject.mode)("brand.900", "brand.400")(props),
                        color: "white",
                        _focus: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.900", "brand.400")(props)
                        },
                        _active: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.900", "brand.400")(props)
                        },
                        _hover: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.800", "brand.400")(props)
                        }
                    }),
                lightBrand: (props)=>({
                        bg: (0,theme_tools_namespaceObject.mode)("#F2EFFF", "whiteAlpha.100")(props),
                        color: (0,theme_tools_namespaceObject.mode)("brand.500", "white")(props),
                        _focus: {
                            bg: (0,theme_tools_namespaceObject.mode)("#F2EFFF", "whiteAlpha.100")(props)
                        },
                        _active: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "whiteAlpha.100")(props)
                        },
                        _hover: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.400", "whiteAlpha.200")(props)
                        }
                    }),
                light: (props)=>({
                        bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "whiteAlpha.100")(props),
                        color: (0,theme_tools_namespaceObject.mode)("secondaryGray.900", "white")(props),
                        _focus: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "whiteAlpha.100")(props)
                        },
                        _active: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "whiteAlpha.100")(props)
                        },
                        _hover: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.400", "whiteAlpha.200")(props)
                        }
                    }),
                action: (props)=>({
                        fontWeight: "500",
                        borderRadius: "50px",
                        bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "brand.400")(props),
                        color: (0,theme_tools_namespaceObject.mode)("brand.500", "white")(props),
                        _focus: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "brand.400")(props)
                        },
                        _active: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "brand.400")(props)
                        },
                        _hover: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.200", "brand.400")(props)
                        }
                    }),
                setup: (props)=>({
                        fontWeight: "500",
                        borderRadius: "50px",
                        bg: (0,theme_tools_namespaceObject.mode)("transparent", "brand.400")(props),
                        border: (0,theme_tools_namespaceObject.mode)("1px solid", "0px solid")(props),
                        borderColor: (0,theme_tools_namespaceObject.mode)("secondaryGray.400", "transparent")(props),
                        color: (0,theme_tools_namespaceObject.mode)("secondaryGray.900", "white")(props),
                        _focus: {
                            bg: (0,theme_tools_namespaceObject.mode)("transparent", "brand.400")(props)
                        },
                        _active: {
                            bg: (0,theme_tools_namespaceObject.mode)("transparent", "brand.400")(props)
                        },
                        _hover: {
                            bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.100", "brand.400")(props)
                        }
                    })
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/badge.ts

const badgeStyles = {
    components: {
        Badge: {
            baseStyle: {
                borderRadius: "10px",
                lineHeight: "100%",
                padding: "7px",
                paddingLeft: "12px",
                paddingRight: "12px"
            },
            variants: {
                outline: ()=>({
                        borderRadius: "16px"
                    }),
                brand: (props)=>({
                        bg: (0,theme_tools_namespaceObject.mode)("brand.500", "brand.400")(props),
                        color: "white",
                        _focus: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.500", "brand.400")(props)
                        },
                        _active: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.500", "brand.400")(props)
                        },
                        _hover: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.600", "brand.400")(props)
                        }
                    })
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/input.ts

const inputStyles = {
    components: {
        Input: {
            baseStyle: {
                field: {
                    fontWeight: 400,
                    borderRadius: "8px"
                }
            },
            variants: {
                main: (props)=>({
                        field: {
                            bg: (0,theme_tools_namespaceObject.mode)("transparent", "navy.800")(props),
                            border: "1px solid",
                            color: (0,theme_tools_namespaceObject.mode)("secondaryGray.900", "white")(props),
                            borderColor: (0,theme_tools_namespaceObject.mode)("secondaryGray.100", "whiteAlpha.100")(props),
                            borderRadius: "16px",
                            fontSize: "sm",
                            p: "20px",
                            _placeholder: {
                                color: "secondaryGray.400"
                            }
                        }
                    }),
                auth: (props)=>({
                        field: {
                            fontWeight: "500",
                            color: (0,theme_tools_namespaceObject.mode)("navy.700", "white")(props),
                            bg: (0,theme_tools_namespaceObject.mode)("transparent", "transparent")(props),
                            border: "1px solid",
                            borderColor: (0,theme_tools_namespaceObject.mode)("secondaryGray.100", "rgba(135, 140, 189, 0.3)")(props),
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600",
                                fontWeight: "400"
                            }
                        }
                    }),
                authSecondary: ()=>({
                        field: {
                            bg: "transparent",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                search: ()=>({
                        field: {
                            border: "none",
                            py: "11px",
                            borderRadius: "inherit",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    })
            }
        },
        NumberInput: {
            baseStyle: {
                field: {
                    fontWeight: 400
                }
            },
            variants: {
                main: ()=>({
                        field: {
                            bg: "transparent",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                auth: ()=>({
                        field: {
                            bg: "transparent",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                authSecondary: ()=>({
                        field: {
                            bg: "transparent",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                search: ()=>({
                        field: {
                            border: "none",
                            py: "11px",
                            borderRadius: "inherit",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    })
            }
        },
        Select: {
            baseStyle: {
                field: {
                    fontWeight: 400
                }
            },
            variants: {
                main: (props)=>({
                        field: {
                            bg: (0,theme_tools_namespaceObject.mode)("transparent", "navy.800")(props),
                            border: "1px solid",
                            color: "secondaryGray.600",
                            borderColor: (0,theme_tools_namespaceObject.mode)("secondaryGray.100", "whiteAlpha.100")(props),
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        },
                        icon: {
                            color: "secondaryGray.600"
                        }
                    }),
                mini: (props)=>({
                        field: {
                            bg: (0,theme_tools_namespaceObject.mode)("transparent", "navy.800")(props),
                            border: "0px solid transparent",
                            fontSize: "0px",
                            p: "10px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        },
                        icon: {
                            color: "secondaryGray.600"
                        }
                    }),
                subtle: ()=>({
                        box: {
                            width: "unset"
                        },
                        field: {
                            bg: "transparent",
                            border: "0px solid",
                            color: "secondaryGray.600",
                            borderColor: "transparent",
                            width: "max-content",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        },
                        icon: {
                            color: "secondaryGray.600"
                        }
                    }),
                transparent: (props)=>({
                        field: {
                            bg: "transparent",
                            border: "0px solid",
                            width: "min-content",
                            color: (0,theme_tools_namespaceObject.mode)("secondaryGray.600", "secondaryGray.600")(props),
                            borderColor: "transparent",
                            padding: "0px",
                            paddingLeft: "8px",
                            paddingRight: "20px",
                            fontWeight: "700",
                            fontSize: "14px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        },
                        icon: {
                            transform: "none !important",
                            position: "unset !important",
                            width: "unset",
                            color: "secondaryGray.600",
                            right: "0px"
                        }
                    }),
                auth: ()=>({
                        field: {
                            bg: "transparent",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                authSecondary: (props)=>({
                        field: {
                            bg: "transparent",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                search: (props)=>({
                        field: {
                            border: "none",
                            py: "11px",
                            borderRadius: "inherit",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    })
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/progress.ts

const progressStyles = {
    components: {
        Progress: {
            baseStyle: {
                field: {
                    fontWeight: 400,
                    w: "16px",
                    h: "16px",
                    borderRadius: "20px",
                    _checked: {
                        transform: "translate(20px, 0px)"
                    }
                },
                track: {
                    w: "40px",
                    h: "20px",
                    borderRadius: "20px",
                    _focus: {
                        boxShadow: "none"
                    }
                }
            },
            variants: {
                table: (props)=>({
                        field: {
                            bg: "brand.500",
                            borderRadius: "16px",
                            fontSize: "sm"
                        },
                        track: {
                            borderRadius: "20px",
                            bg: (0,theme_tools_namespaceObject.mode)("blue.50", "whiteAlpha.50")(props),
                            h: "8px",
                            w: "54px"
                        },
                        thumb: {
                            w: "250px"
                        }
                    })
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/slider.ts

const sliderStyles = {
    components: {
        RangeSlider: {
            variants: {
                main: (props)=>({
                        thumb: {
                            bg: (0,theme_tools_namespaceObject.mode)("brand.500", "brand.400")(props)
                        }
                    })
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/textarea.ts

const textareaStyles = {
    components: {
        Textarea: {
            baseStyle: {
                field: {
                    fontWeight: 400,
                    borderRadius: "8px"
                }
            },
            variants: {
                main: (props)=>({
                        field: {
                            bg: (0,theme_tools_namespaceObject.mode)("transparent", "navy.800")(props),
                            border: "1px solid !important",
                            color: (0,theme_tools_namespaceObject.mode)("secondaryGray.900", "white")(props),
                            borderColor: (0,theme_tools_namespaceObject.mode)("secondaryGray.100", "whiteAlpha.100")(props),
                            borderRadius: "16px",
                            fontSize: "sm",
                            p: "20px",
                            _placeholder: {
                                color: "secondaryGray.400"
                            }
                        }
                    }),
                auth: ()=>({
                        field: {
                            bg: "white",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                authSecondary: ()=>({
                        field: {
                            bg: "white",
                            border: "1px solid",
                            borderColor: "secondaryGray.100",
                            borderRadius: "16px",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    }),
                search: ()=>({
                        field: {
                            border: "none",
                            py: "11px",
                            borderRadius: "inherit",
                            _placeholder: {
                                color: "secondaryGray.600"
                            }
                        }
                    })
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/switch.ts

const switchStyles = {
    components: {
        Switch: {
            baseStyle: {
                thumb: {
                    fontWeight: 400,
                    borderRadius: "50%",
                    w: "16px",
                    h: "16px",
                    _checked: {
                        transform: "translate(20px, 0px)"
                    }
                },
                track: {
                    display: "flex",
                    alignItems: "center",
                    boxSizing: "border-box",
                    w: "40px",
                    h: "20px",
                    p: "2px",
                    ps: "2px",
                    _focus: {
                        boxShadow: "none"
                    }
                }
            },
            variants: {
                main: (props)=>({
                        track: {
                            bg: (0,theme_tools_namespaceObject.mode)("gray.300", "navy.700")(props)
                        }
                    })
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/components/link.ts
const linkStyles = {
    components: {
        Link: {
            baseStyle: {
                textDecoration: "none",
                boxShadow: "none",
                _focus: {
                    boxShadow: "none"
                },
                _active: {
                    boxShadow: "none"
                },
                _hover: {
                    textDecoration: "none",
                    border: "none"
                }
            },
            _hover: {
                textDecoration: "none",
                border: "none"
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/theme/foundations/breakpoints.ts

const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: "320px",
    "2sm": "380px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1600px",
    "3xl": "1920px"
});

;// CONCATENATED MODULE: ./src/theme/styles.ts

const globalStyles = {
    colors: {
        brand: {
            100: "#E9E3FF",
            200: "#422AFB",
            300: "#422AFB",
            400: "#7551FF",
            500: "#422AFB",
            600: "#3311DB",
            700: "#02044A",
            800: "#190793",
            900: "#11047A"
        },
        brandScheme: {
            100: "#E9E3FF",
            200: "#7551FF",
            300: "#7551FF",
            400: "#7551FF",
            500: "#422AFB",
            600: "#3311DB",
            700: "#02044A",
            800: "#190793",
            900: "#02044A"
        },
        brandTabs: {
            100: "#E9E3FF",
            200: "#422AFB",
            300: "#422AFB",
            400: "#422AFB",
            500: "#422AFB",
            600: "#3311DB",
            700: "#02044A",
            800: "#190793",
            900: "#02044A"
        },
        secondaryGray: {
            100: "#E0E5F2",
            200: "#E1E9F8",
            300: "#F4F7FE",
            400: "#E9EDF7",
            500: "#8F9BBA",
            600: "#A3AED0",
            700: "#707EAE",
            800: "#707EAE",
            900: "#1B2559"
        },
        red: {
            100: "#FEEFEE",
            500: "#EE5D50",
            600: "#E31A1A"
        },
        blue: {
            50: "#EFF4FB",
            500: "#3965FF"
        },
        orange: {
            100: "#FFF6DA",
            500: "#FFB547"
        },
        green: {
            100: "#E6FAF5",
            500: "#01B574"
        },
        navy: {
            50: "#d0dcfb",
            100: "#aac0fe",
            200: "#a3b9f8",
            300: "#728fea",
            400: "#3652ba",
            500: "#1b3bbb",
            600: "#24388a",
            700: "#1B254B",
            800: "#111c44",
            900: "#0b1437"
        },
        gray: {
            100: "#FAFCFE"
        }
    },
    styles: {
        global: (props)=>({
                body: {
                    overflowX: "hidden",
                    bg: (0,theme_tools_namespaceObject.mode)("secondaryGray.300", "navy.900")(props),
                    fontFamily: "DM Sans",
                    letterSpacing: "-0.5px"
                },
                input: {
                    color: "gray.700"
                },
                html: {
                    fontFamily: "DM Sans"
                }
            })
    }
};

;// CONCATENATED MODULE: ./src/theme/theme.tsx












/* harmony default export */ const theme = ((0,react_.extendTheme)({
    breakpoints: breakpoints
}, globalStyles, badgeStyles, buttonStyles, linkStyles, progressStyles, sliderStyles, inputStyles, textareaStyles, switchStyles, CardComponent // card component
));

// EXTERNAL MODULE: ./node_modules/react-calendar/dist/Calendar.css
var Calendar = __webpack_require__(8434);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx










function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Meedgo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#000000"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).StrictMode, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8434:
/***/ (() => {



/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(7674));
module.exports = __webpack_exports__;

})();