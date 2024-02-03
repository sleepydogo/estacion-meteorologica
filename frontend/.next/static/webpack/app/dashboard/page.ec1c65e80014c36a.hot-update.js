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

/***/ "(app-pages-browser)/./app/dashboard/page.jsx":
/*!********************************!*\
  !*** ./app/dashboard/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_dashboard_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/dashboard/card/card */ \"(app-pages-browser)/./app/ui/dashboard/card/card.jsx\");\n/* harmony import */ var _ui_dashboard_trips_tabla_datos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/dashboard/trips/tabla-datos */ \"(app-pages-browser)/./app/ui/dashboard/trips/tabla-datos.jsx\");\n/* harmony import */ var _ui_dashboard_chart_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/dashboard/chart/chart */ \"(app-pages-browser)/./app/ui/dashboard/chart/chart.jsx\");\n/* harmony import */ var _ui_dashboard_dashboard_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/dashboard/dashboard.module.css */ \"(app-pages-browser)/./app/ui/dashboard/dashboard.module.css\");\n/* harmony import */ var _ui_dashboard_dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ui_dashboard_dashboard_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/data */ \"(app-pages-browser)/./app/lib/data.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [card_data, setCardData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [table_data, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const obtenerDatos = async ()=>{\n            try {\n                const responseCards = await (0,_lib_data__WEBPACK_IMPORTED_MODULE_5__.fetchWithGet)(\"api/datos/1\");\n                const responseTrips = await (0,_lib_data__WEBPACK_IMPORTED_MODULE_5__.fetchWithGet)(\"api/datos/\");\n                setCardData(responseCards);\n                setTableData(responseTrips);\n                console.log(responseCards);\n                console.log(responseTrips);\n            } catch (error) {\n                setError(error.message);\n            }\n        };\n        // Llama a la función para obtener los datos cuando el componente se monta\n        obtenerDatos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ui_dashboard_dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ui_dashboard_dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ui_dashboard_dashboard_module_css__WEBPACK_IMPORTED_MODULE_6___default().cards),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dashboard_card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            title: \"Temperatura\",\n                            number: card_data.temperatura,\n                            porcentaje: \"12%\",\n                            description: \"mas que la semana pasada\"\n                        }, void 0, false, {\n                            fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dashboard_card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            title: \"Humedad\",\n                            number: card_data.humedad,\n                            porcentaje: \"33%\",\n                            description: \"menos que la semana pasada\"\n                        }, void 0, false, {\n                            fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dashboard_card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            title: \"Humedad del suelo\",\n                            number: card_data.hum_suelo,\n                            porcentaje: \"25%\",\n                            description: \"mas que la semana pasada\"\n                        }, void 0, false, {\n                            fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dashboard_trips_tabla_datos__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    data: table_data\n                }, void 0, false, {\n                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dashboard_chart_chart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/tom/universidad/estacion-meteorologica/frontend/app/dashboard/page.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"sOvxMn61xXuZMNSPHSiZFbXg8EY=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ2M7QUFDWDtBQUNVO0FBQ2Q7QUFDVztBQUV2RCxNQUFNUSxZQUFZOztJQUNoQixNQUFNLENBQUNDLFdBQVdDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUM1QyxNQUFNLENBQUNNLFlBQVlDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUM5QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU1DLGdCQUFnQixNQUFNVCx1REFBWUEsQ0FBQztnQkFDekMsTUFBTVUsZ0JBQWdCLE1BQU1WLHVEQUFZQSxDQUFDO2dCQUV6Q0csWUFBWU07Z0JBQ1pKLGFBQWFLO2dCQUNiQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaRSxRQUFRQyxHQUFHLENBQUNGO1lBQ2QsRUFBRSxPQUFPSixPQUFPO2dCQUNkQyxTQUFTRCxNQUFNTyxPQUFPO1lBQ3hCO1FBQ0Y7UUFFQSwwRUFBMEU7UUFDMUVMO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVduQixtRkFBYztrQkFDNUIsNEVBQUNrQjtZQUFJQyxXQUFXbkIsZ0ZBQVc7OzhCQUN6Qiw4REFBQ2tCO29CQUFJQyxXQUFXbkIsaUZBQVk7O3NDQUMxQiw4REFBQ0gsK0RBQUlBOzRCQUFDMEIsT0FBTTs0QkFBY0MsUUFBUWxCLFVBQVVtQixXQUFXOzRCQUFFQyxZQUFXOzRCQUFNQyxhQUFZOzs7Ozs7c0NBQ3RGLDhEQUFDOUIsK0RBQUlBOzRCQUFDMEIsT0FBTTs0QkFBVUMsUUFBUWxCLFVBQVVzQixPQUFPOzRCQUFHRixZQUFXOzRCQUFNQyxhQUFZOzs7Ozs7c0NBQy9FLDhEQUFDOUIsK0RBQUlBOzRCQUFDMEIsT0FBTTs0QkFBb0JDLFFBQVFsQixVQUFVdUIsU0FBUzs0QkFBRUgsWUFBVzs0QkFBTUMsYUFBWTs7Ozs7Ozs7Ozs7OzhCQUU1Riw4REFBQzdCLHVFQUFVQTtvQkFBQ2dDLE1BQU10Qjs7Ozs7OzhCQUNsQiw4REFBQ1QsaUVBQUtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7R0FyQ01NO0tBQUFBO0FBdUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3g/MzhkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi91aS9kYXNoYm9hcmQvY2FyZC9jYXJkXCI7XG5pbXBvcnQgVGFibGFEYXRvcyBmcm9tIFwiLi4vdWkvZGFzaGJvYXJkL3RyaXBzL3RhYmxhLWRhdG9zXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL3VpL2Rhc2hib2FyZC9jaGFydC9jaGFydFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vdWkvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmZXRjaENhcmRzLCBmZXRjaFdpdGhHZXQgfSBmcm9tIFwiLi4vbGliL2RhdGFcIjtcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBbY2FyZF9kYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0YWJsZV9kYXRhLCBzZXRUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2J0ZW5lckRhdG9zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VDYXJkcyA9IGF3YWl0IGZldGNoV2l0aEdldCgnYXBpL2RhdG9zLzEnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VUcmlwcyA9IGF3YWl0IGZldGNoV2l0aEdldCgnYXBpL2RhdG9zLycpO1xuICAgICAgICBcbiAgICAgICAgc2V0Q2FyZERhdGEocmVzcG9uc2VDYXJkcyk7XG4gICAgICAgIHNldFRhYmxlRGF0YShyZXNwb25zZVRyaXBzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VDYXJkcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlVHJpcHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIExsYW1hIGEgbGEgZnVuY2nDs24gcGFyYSBvYnRlbmVyIGxvcyBkYXRvcyBjdWFuZG8gZWwgY29tcG9uZW50ZSBzZSBtb250YVxuICAgIG9idGVuZXJEYXRvcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+XG4gICAgICAgICAgPENhcmQgdGl0bGU9XCJUZW1wZXJhdHVyYVwiIG51bWJlcj17Y2FyZF9kYXRhLnRlbXBlcmF0dXJhfSBwb3JjZW50YWplPScxMiUnIGRlc2NyaXB0aW9uPSdtYXMgcXVlIGxhIHNlbWFuYSBwYXNhZGEnLz5cbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIkh1bWVkYWRcIiBudW1iZXI9e2NhcmRfZGF0YS5odW1lZGFkfSAgcG9yY2VudGFqZT0nMzMlJyBkZXNjcmlwdGlvbj0nbWVub3MgcXVlIGxhIHNlbWFuYSBwYXNhZGEnLz5cbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIkh1bWVkYWQgZGVsIHN1ZWxvXCIgbnVtYmVyPXtjYXJkX2RhdGEuaHVtX3N1ZWxvfSBwb3JjZW50YWplPScyNSUnIGRlc2NyaXB0aW9uPSdtYXMgcXVlIGxhIHNlbWFuYSBwYXNhZGEnLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWJsYURhdG9zIGRhdGE9e3RhYmxlX2RhdGF9Lz5cbiAgICAgICAgPENoYXJ0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJDYXJkIiwiVGFibGFEYXRvcyIsIkNoYXJ0Iiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaENhcmRzIiwiZmV0Y2hXaXRoR2V0IiwiRGFzaGJvYXJkIiwiY2FyZF9kYXRhIiwic2V0Q2FyZERhdGEiLCJ0YWJsZV9kYXRhIiwic2V0VGFibGVEYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9idGVuZXJEYXRvcyIsInJlc3BvbnNlQ2FyZHMiLCJyZXNwb25zZVRyaXBzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwibWFpbiIsImNhcmRzIiwidGl0bGUiLCJudW1iZXIiLCJ0ZW1wZXJhdHVyYSIsInBvcmNlbnRhamUiLCJkZXNjcmlwdGlvbiIsImh1bWVkYWQiLCJodW1fc3VlbG8iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.jsx\n"));

/***/ })

});