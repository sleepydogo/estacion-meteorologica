"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/ui/dashboard/trips/tabla-datos.jsx":
/*!************************************************!*\
  !*** ./app/ui/dashboard/trips/tabla-datos.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabla-datos.module.css */ \"(app-pages-browser)/./app/ui/dashboard/trips/tabla-datos.module.css\");\n/* harmony import */ var _tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst TablaDatos = (param)=>{\n    let { data } = param;\n    const formatFecha = (fecha)=>{\n        const fechaObj = new Date(fecha);\n        const opciones = {\n            year: \"numeric\",\n            month: \"2-digit\",\n            day: \"2-digit\"\n        };\n        return fechaObj.toLocaleDateString(\"es-ES\", opciones);\n    };\n    const formatHora = (fecha)=>{\n        const fechaObj = new Date(fecha);\n        const horas = fechaObj.getHours().toString().padStart(2, \"0\"); // Asegura que siempre tenga dos dígitos\n        const minutos = fechaObj.getMinutes().toString().padStart(2, \"0\"); // Asegura que siempre tenga dos dígitos\n        return \"\".concat(horas, \":\").concat(minutos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),\n                children: \"Ultimos viajes\"\n            }, void 0, false, {\n                fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().table),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Id Medici\\xf3n\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Fecha\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Hora\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Temperatura\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Humedad\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Temperatura del suelo\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Humedad del suelo\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: data && data.map((dato)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: dato.id\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: formatFecha(dato.fecha)\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: formatHora(dato.fecha)\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"\".concat((_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().status), \" \").concat(dato.temperatura >= 30 ? (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().hot) : 30 >= dato.temperatura >= 10 ? (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().middle) : 10 >= dato.temperatura >= 0 ? (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().cold) : (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().reallycold)),\n                                            children: [\n                                                dato.temperatura,\n                                                \" \\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            dato.humedad,\n                                            \" %\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"\".concat((_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().status), \" \").concat(dato.temperatura >= 30 ? (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().hot) : 30 >= dato.temperatura >= 10 ? (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().middle) : 10 >= dato.temperatura >= 0 ? (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().cold) : (_tabla_datos_module_css__WEBPACK_IMPORTED_MODULE_1___default().reallycold)),\n                                                children: [\n                                                    dato.temp_suelo,\n                                                    \" \\xb0C\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            \"$\",\n                                            dato.hum_suelo,\n                                            \" %\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, dato.id, true, {\n                                fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/ui/dashboard/trips/tabla-datos.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TablaDatos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablaDatos);\nvar _c;\n$RefreshReg$(_c, \"TablaDatos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvdHJpcHMvdGFibGEtZGF0b3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQzhDO0FBRTlDLE1BQU1DLGFBQWE7UUFBQyxFQUFFQyxJQUFJLEVBQUU7SUFDMUIsTUFBTUMsY0FBYyxDQUFDQztRQUNuQixNQUFNQyxXQUFXLElBQUlDLEtBQUtGO1FBQzFCLE1BQU1HLFdBQVc7WUFBRUMsTUFBTTtZQUFXQyxPQUFPO1lBQVdDLEtBQUs7UUFBVTtRQUNyRSxPQUFPTCxTQUFTTSxrQkFBa0IsQ0FBQyxTQUFTSjtJQUM5QztJQUVBLE1BQU1LLGFBQWEsQ0FBQ1I7UUFDbEIsTUFBTUMsV0FBVyxJQUFJQyxLQUFLRjtRQUMxQixNQUFNUyxRQUFRUixTQUFTUyxRQUFRLEdBQUdDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUcsTUFBTSx3Q0FBd0M7UUFDdkcsTUFBTUMsVUFBVVosU0FBU2EsVUFBVSxHQUFHSCxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sd0NBQXdDO1FBQzNHLE9BQU8sR0FBWUMsT0FBVEosT0FBTSxLQUFXLE9BQVJJO0lBQ3JCO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdwQiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ3NCO2dCQUFHRixXQUFXcEIsc0VBQVk7MEJBQUU7Ozs7OzswQkFDN0IsOERBQUN3QjtnQkFBTUosV0FBV3BCLHNFQUFZOztrQ0FDNUIsOERBQUN5QjtrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FDQyw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDRDs4Q0FDQyw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDRDs4Q0FDQyw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDRDs4Q0FDQyw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDRDs4Q0FDQyw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDRDs4Q0FDQyw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7OzhDQUVWLDhEQUFDRDs4Q0FDQyw0RUFBQ0M7a0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWQsOERBQUNDO2tDQUNFM0IsUUFDQ0EsS0FBSzRCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDUiw4REFBQ0w7O2tEQUNDLDhEQUFDQztrREFBSUksS0FBS0MsRUFBRTs7Ozs7O2tEQUNaLDhEQUFDTDtrREFBSXhCLFlBQVk0QixLQUFLM0IsS0FBSzs7Ozs7O2tEQUMzQiw4REFBQ3VCO2tEQUFJZixXQUFXbUIsS0FBSzNCLEtBQUs7Ozs7OztrREFDMUIsOERBQUN1QjtrREFDQyw0RUFBQ007NENBQ0NiLFdBQVcsR0FDVFcsT0FEWS9CLHVFQUFhLEVBQUMsS0FRM0IsT0FQQytCLEtBQUtJLFdBQVcsSUFBSSxLQUNoQm5DLG9FQUFVLEdBQ1YsTUFBTStCLEtBQUtJLFdBQVcsSUFBSSxLQUMxQm5DLHVFQUFhLEdBQ2IsTUFBTStCLEtBQUtJLFdBQVcsSUFBSSxJQUMxQm5DLHFFQUFXLEdBQ1hBLDJFQUFpQjs7Z0RBR3RCK0IsS0FBS0ksV0FBVztnREFBQzs7Ozs7Ozs7Ozs7O2tEQUd0Qiw4REFBQ1I7OzRDQUFJSSxLQUFLUyxPQUFPOzRDQUFDOzs7Ozs7O2tEQUNsQiw4REFBQ2I7OzRDQUNFOzBEQUNELDhEQUFDTTtnREFDQ2IsV0FBVyxHQUNUVyxPQURZL0IsdUVBQWEsRUFBQyxLQVEzQixPQVBDK0IsS0FBS0ksV0FBVyxJQUFJLEtBQ2hCbkMsb0VBQVUsR0FDVixNQUFNK0IsS0FBS0ksV0FBVyxJQUFJLEtBQzFCbkMsdUVBQWEsR0FDYixNQUFNK0IsS0FBS0ksV0FBVyxJQUFJLElBQzFCbkMscUVBQVcsR0FDWEEsMkVBQWlCOztvREFHdEIrQixLQUFLVSxVQUFVO29EQUFDOzs7Ozs7Ozs7Ozs7O2tEQUdyQiw4REFBQ2Q7OzRDQUFHOzRDQUFFSSxLQUFLVyxTQUFTOzRDQUFDOzs7Ozs7OzsrQkFwQ2RYLEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQzlCO0tBekZNL0I7QUEyRk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2Rhc2hib2FyZC90cmlwcy90YWJsYS1kYXRvcy5qc3g/YjY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFibGEtZGF0b3MubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBUYWJsYURhdG9zID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IGZvcm1hdEZlY2hhID0gKGZlY2hhKSA9PiB7XG4gICAgY29uc3QgZmVjaGFPYmogPSBuZXcgRGF0ZShmZWNoYSk7XG4gICAgY29uc3Qgb3BjaW9uZXMgPSB7IHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCIyLWRpZ2l0XCIgfTtcbiAgICByZXR1cm4gZmVjaGFPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZXMtRVNcIiwgb3BjaW9uZXMpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdEhvcmEgPSAoZmVjaGEpID0+IHtcbiAgICBjb25zdCBmZWNoYU9iaiA9IG5ldyBEYXRlKGZlY2hhKTtcbiAgICBjb25zdCBob3JhcyA9IGZlY2hhT2JqLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vIEFzZWd1cmEgcXVlIHNpZW1wcmUgdGVuZ2EgZG9zIGTDrWdpdG9zXG4gICAgY29uc3QgbWludXRvcyA9IGZlY2hhT2JqLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy8gQXNlZ3VyYSBxdWUgc2llbXByZSB0ZW5nYSBkb3MgZMOtZ2l0b3NcbiAgICByZXR1cm4gYCR7aG9yYXN9OiR7bWludXRvc31gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5VbHRpbW9zIHZpYWplczwvaDI+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8c3Ryb25nPklkIE1lZGljacOzbjwvc3Ryb25nPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5GZWNoYTwvc3Ryb25nPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5Ib3JhPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8c3Ryb25nPlRlbXBlcmF0dXJhPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8c3Ryb25nPkh1bWVkYWQ8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+VGVtcGVyYXR1cmEgZGVsIHN1ZWxvPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8c3Ryb25nPkh1bWVkYWQgZGVsIHN1ZWxvPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgZGF0YS5tYXAoKGRhdG8pID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17ZGF0by5pZH0+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRvLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntmb3JtYXRGZWNoYShkYXRvLmZlY2hhKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57Zm9ybWF0SG9yYShkYXRvLmZlY2hhKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN0YXR1c30gJHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRvLnRlbXBlcmF0dXJhID49IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5ob3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMzAgPj0gZGF0by50ZW1wZXJhdHVyYSA+PSAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMubWlkZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDEwID49IGRhdG8udGVtcGVyYXR1cmEgPj0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuY29sZFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMucmVhbGx5Y29sZFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RhdG8udGVtcGVyYXR1cmF9IMKwQ1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntkYXRvLmh1bWVkYWR9ICU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN0YXR1c30gJHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRvLnRlbXBlcmF0dXJhID49IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5ob3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMzAgPj0gZGF0by50ZW1wZXJhdHVyYSA+PSAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMubWlkZGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDEwID49IGRhdG8udGVtcGVyYXR1cmEgPj0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuY29sZFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMucmVhbGx5Y29sZFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RhdG8udGVtcF9zdWVsb30gwrBDXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtkYXRvLmh1bV9zdWVsb30gJTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsYURhdG9zO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlRhYmxhRGF0b3MiLCJkYXRhIiwiZm9ybWF0RmVjaGEiLCJmZWNoYSIsImZlY2hhT2JqIiwiRGF0ZSIsIm9wY2lvbmVzIiwieWVhciIsIm1vbnRoIiwiZGF5IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0SG9yYSIsImhvcmFzIiwiZ2V0SG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRvcyIsImdldE1pbnV0ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMiIsInRpdGxlIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGQiLCJzdHJvbmciLCJ0Ym9keSIsIm1hcCIsImRhdG8iLCJpZCIsInNwYW4iLCJzdGF0dXMiLCJ0ZW1wZXJhdHVyYSIsImhvdCIsIm1pZGRsZSIsImNvbGQiLCJyZWFsbHljb2xkIiwiaHVtZWRhZCIsInRlbXBfc3VlbG8iLCJodW1fc3VlbG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/trips/tabla-datos.jsx\n"));

/***/ })

});