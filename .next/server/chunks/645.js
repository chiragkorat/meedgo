"use strict";
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 3645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Default)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/navigation.ts
var navigation = __webpack_require__(663);
;// CONCATENATED MODULE: ./src/components/fixedPlugin/FixedPlugin.tsx
// Chakra Imports


// Custom Icons



function FixedPlugin(props) {
    const { ...rest } = props;
    const { colorMode , toggleColorMode  } = (0,react_.useColorMode)();
    let bgButton = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
    let left = "";
    let right = "35px";
    (0,external_react_.useEffect)(()=>{
        if ((0,navigation/* isWindowAvailable */.GJ)() || window.document.documentElement.dir !== "rtl") return;
        [left, right] = [
            right,
            left
        ];
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        ...rest,
        h: "60px",
        w: "60px",
        bg: bgButton,
        zIndex: "99",
        position: "fixed",
        variant: "no-effects",
        left: left,
        right: right,
        bottom: "30px",
        border: "1px solid",
        borderColor: "#6A53FF",
        borderRadius: "50px",
        onClick: toggleColorMode,
        display: "flex",
        p: "0px",
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
            h: "24px",
            w: "24px",
            color: "white",
            as: colorMode === "light" ? io_.IoMdMoon : io_.IoMdSunny
        })
    });
}

;// CONCATENATED MODULE: ./src/layouts/auth/Default.tsx
// Chakra imports



function AuthIllustration(props) {
    const authBg = (0,react_.useColorModeValue)("white", "navy.900");
    const { children , illustrationBackground  } = props;
    // Chakra color mode
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        minW: "100vh",
        bg: authBg,
        position: "relative",
        h: "max-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                h: {
                    sm: "initial",
                    md: "unset",
                    lg: "100%",
                    xl: "100%"
                },
                w: "100%",
                maxW: {
                    md: "100%",
                    lg: "1313px"
                },
                mx: "auto",
                pt: {
                    sm: "50px",
                    md: "0px"
                },
                px: {
                    lg: "30px",
                    xl: "0px"
                },
                ps: {
                    xl: "70px"
                },
                justifyContent: "start",
                direction: "column",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FixedPlugin, {})
        ]
    });
}
/* harmony default export */ const Default = (AuthIllustration);


/***/ })

};
;