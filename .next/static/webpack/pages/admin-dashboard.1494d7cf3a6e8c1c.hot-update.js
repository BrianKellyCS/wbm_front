"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin-dashboard",{

/***/ "./comps/Data.js":
/*!***********************!*\
  !*** ./comps/Data.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var _styles_Data_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Data.module.css */ \"./styles/Data.module.css\");\n/* harmony import */ var _styles_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Data_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// Data.js\n\nvar _s = $RefreshSig$();\n\n\n // Import Chart.js so it can be used by react-chartjs-2\n\nfunction Data() {\n    _s();\n    // State to hold selected date range for analytics\n    const [dateRange, setDateRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        startDate: \"\",\n        endDate: \"\"\n    });\n    // Dummy data for the charts\n    const fillLevelsOverTime = {\n        labels: [\n            \"Week 1\",\n            \"Week 2\",\n            \"Week 3\",\n            \"Week 4\"\n        ],\n        datasets: [\n            {\n                data: [\n                    65,\n                    59,\n                    80,\n                    81\n                ]\n            }\n        ]\n    };\n    const mostFrequentlyFilledBins = {\n        labels: [\n            \"Bin 1\",\n            \"Bin 2\",\n            \"Bin 3\",\n            \"Bin 4\"\n        ],\n        datasets: [\n            {\n                data: [\n                    20,\n                    45,\n                    76,\n                    20\n                ]\n            }\n        ]\n    };\n    // Dummy data for the fill levels over time chart\n    const fillLevelsData = {\n        labels: fillLevelsOverTime.labels,\n        datasets: [\n            {\n                label: \"Fill Level %\",\n                data: fillLevelsOverTime.datasets[0].data,\n                backgroundColor: \"rgba(54, 162, 235, 0.2)\",\n                borderColor: \"rgba(54, 162, 235, 1)\",\n                borderWidth: 1\n            }\n        ]\n    };\n    // Options for the fill levels over time chart\n    const fillLevelsOptions = {\n        scales: {\n            y: {\n                beginAtZero: true\n            }\n        }\n    };\n    // Dummy data for the most frequently filled bins chart\n    const mostFrequentBinsData = {\n        labels: mostFrequentlyFilledBins.labels,\n        datasets: [\n            {\n                label: \"Number of Times Filled\",\n                data: mostFrequentlyFilledBins.datasets[0].data,\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.2)\",\n                    \"rgba(255, 159, 64, 0.2)\",\n                    \"rgba(255, 205, 86, 0.2)\",\n                    \"rgba(75, 192, 192, 0.2)\"\n                ],\n                borderColor: [\n                    \"rgba(255, 99, 132, 1)\",\n                    \"rgba(255, 159, 64, 1)\",\n                    \"rgba(255, 205, 86, 1)\",\n                    \"rgba(75, 192, 192, 1)\"\n                ],\n                borderWidth: 1\n            }\n        ]\n    };\n    // Options for the most frequently filled bins chart\n    const mostFrequentBinsOptions = {\n        indexAxis: \"y\",\n        scales: {\n            x: {\n                beginAtZero: true\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().analytics_container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().chart_container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().chart),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Avg Fill Levels Over Time\"\n                        }, void 0, false, {\n                            fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                            data: fillLevelsData,\n                            options: fillLevelsOptions\n                        }, void 0, false, {\n                            fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Data_module_css__WEBPACK_IMPORTED_MODULE_3___default().chart),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Most Frequently Filled Bins\"\n                        }, void 0, false, {\n                            fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n                            data: mostFrequentBinsData,\n                            options: mostFrequentBinsOptions\n                        }, void 0, false, {\n                            fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/x-0901/test/wbm_front/comps/Data.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(Data, \"MX1Hjlso/iXN8NiX6X6sXJ16WVQ=\");\n_c = Data;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Data);\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVU7OztBQUM4QjtBQUNJO0FBQ1YsQ0FBQyx1REFBdUQ7QUFDM0M7QUFFL0MsU0FBU007O0lBQ1Asa0RBQWtEO0lBQ2xELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUN6Q1EsV0FBVztRQUNYQyxTQUFTO0lBQ1g7SUFFQSw0QkFBNEI7SUFDNUIsTUFBTUMscUJBQXFCO1FBQ3pCQyxRQUFRO1lBQUM7WUFBVTtZQUFVO1lBQVU7U0FBUztRQUNoREMsVUFBVTtZQUFDO2dCQUFFQyxNQUFNO29CQUFDO29CQUFJO29CQUFJO29CQUFJO2lCQUFHO1lBQUM7U0FBRTtJQUN4QztJQUVBLE1BQU1DLDJCQUEyQjtRQUMvQkgsUUFBUTtZQUFDO1lBQVM7WUFBUztZQUFTO1NBQVE7UUFDNUNDLFVBQVU7WUFBQztnQkFBRUMsTUFBTTtvQkFBQztvQkFBSTtvQkFBSTtvQkFBSTtpQkFBRztZQUFDO1NBQUU7SUFDeEM7SUFFQSxpREFBaUQ7SUFDakQsTUFBTUUsaUJBQWlCO1FBQ3JCSixRQUFRRCxtQkFBbUJDLE1BQU07UUFDakNDLFVBQVU7WUFDUjtnQkFDRUksT0FBTztnQkFDUEgsTUFBTUgsbUJBQW1CRSxRQUFRLENBQUMsRUFBRSxDQUFDQyxJQUFJO2dCQUN6Q0ksaUJBQWlCO2dCQUNqQkMsYUFBYTtnQkFDYkMsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtJQUVBLDhDQUE4QztJQUM5QyxNQUFNQyxvQkFBb0I7UUFDeEJDLFFBQVE7WUFDTkMsR0FBRztnQkFDREMsYUFBYTtZQUNmO1FBQ0Y7SUFDRjtJQUVBLHVEQUF1RDtJQUN2RCxNQUFNQyx1QkFBdUI7UUFDM0JiLFFBQVFHLHlCQUF5QkgsTUFBTTtRQUN2Q0MsVUFBVTtZQUNSO2dCQUNFSSxPQUFPO2dCQUNQSCxNQUFNQyx5QkFBeUJGLFFBQVEsQ0FBQyxFQUFFLENBQUNDLElBQUk7Z0JBQy9DSSxpQkFBaUI7b0JBQ2Y7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7Z0JBQ0RDLGFBQWE7b0JBQ1g7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7Z0JBQ0RDLGFBQWE7WUFDZjtTQUNEO0lBQ0g7SUFFQSxvREFBb0Q7SUFDcEQsTUFBTU0sMEJBQTBCO1FBQzlCQyxXQUFXO1FBQ1hMLFFBQVE7WUFDTk0sR0FBRztnQkFDREosYUFBYTtZQUNmO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXekIsb0ZBQTBCO2tCQUl4Qyw0RUFBQ3dCO1lBQUlDLFdBQVd6QixnRkFBc0I7OzhCQUVwQyw4REFBQ3dCO29CQUFJQyxXQUFXekIsc0VBQVk7O3NDQUMxQiw4REFBQzZCO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUMvQixpREFBSUE7NEJBQUNXLE1BQU1FOzRCQUFnQm1CLFNBQVNkOzs7Ozs7Ozs7Ozs7OEJBSXZDLDhEQUFDUTtvQkFBSUMsV0FBV3pCLHNFQUFZOztzQ0FDMUIsOERBQUM2QjtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDaEMsZ0RBQUdBOzRCQUFDWSxNQUFNVzs0QkFBc0JVLFNBQVNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNwRDtHQW5HU3BCO0tBQUFBO0FBcUdULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL0RhdGEuanM/ZTg5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEYXRhLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXIsIExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nOyAvLyBJbXBvcnQgQ2hhcnQuanMgc28gaXQgY2FuIGJlIHVzZWQgYnkgcmVhY3QtY2hhcnRqcy0yXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9EYXRhLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBEYXRhKCkge1xuICAvLyBTdGF0ZSB0byBob2xkIHNlbGVjdGVkIGRhdGUgcmFuZ2UgZm9yIGFuYWx5dGljc1xuICBjb25zdCBbZGF0ZVJhbmdlLCBzZXREYXRlUmFuZ2VdID0gdXNlU3RhdGUoe1xuICAgIHN0YXJ0RGF0ZTogXCJcIixcbiAgICBlbmREYXRlOiBcIlwiXG4gIH0pO1xuXG4gIC8vIER1bW15IGRhdGEgZm9yIHRoZSBjaGFydHNcbiAgY29uc3QgZmlsbExldmVsc092ZXJUaW1lID0ge1xuICAgIGxhYmVsczogW1wiV2VlayAxXCIsIFwiV2VlayAyXCIsIFwiV2VlayAzXCIsIFwiV2VlayA0XCJdLFxuICAgIGRhdGFzZXRzOiBbeyBkYXRhOiBbNjUsIDU5LCA4MCwgODFdIH1dXG4gIH07XG5cbiAgY29uc3QgbW9zdEZyZXF1ZW50bHlGaWxsZWRCaW5zID0ge1xuICAgIGxhYmVsczogW1wiQmluIDFcIiwgXCJCaW4gMlwiLCBcIkJpbiAzXCIsIFwiQmluIDRcIl0sXG4gICAgZGF0YXNldHM6IFt7IGRhdGE6IFsyMCwgNDUsIDc2LCAyMF0gfV1cbiAgfTtcblxuICAvLyBEdW1teSBkYXRhIGZvciB0aGUgZmlsbCBsZXZlbHMgb3ZlciB0aW1lIGNoYXJ0XG4gIGNvbnN0IGZpbGxMZXZlbHNEYXRhID0ge1xuICAgIGxhYmVsczogZmlsbExldmVsc092ZXJUaW1lLmxhYmVscyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0ZpbGwgTGV2ZWwgJScsXG4gICAgICAgIGRhdGE6IGZpbGxMZXZlbHNPdmVyVGltZS5kYXRhc2V0c1swXS5kYXRhLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKScsXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgLy8gT3B0aW9ucyBmb3IgdGhlIGZpbGwgbGV2ZWxzIG92ZXIgdGltZSBjaGFydFxuICBjb25zdCBmaWxsTGV2ZWxzT3B0aW9ucyA9IHtcbiAgICBzY2FsZXM6IHtcbiAgICAgIHk6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgLy8gRHVtbXkgZGF0YSBmb3IgdGhlIG1vc3QgZnJlcXVlbnRseSBmaWxsZWQgYmlucyBjaGFydFxuICBjb25zdCBtb3N0RnJlcXVlbnRCaW5zRGF0YSA9IHtcbiAgICBsYWJlbHM6IG1vc3RGcmVxdWVudGx5RmlsbGVkQmlucy5sYWJlbHMsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdOdW1iZXIgb2YgVGltZXMgRmlsbGVkJyxcbiAgICAgICAgZGF0YTogbW9zdEZyZXF1ZW50bHlGaWxsZWRCaW5zLmRhdGFzZXRzWzBdLmRhdGEsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDIwNSwgODYsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBbXG4gICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAyMDUsIDg2LCAxKScsXG4gICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIC8vIE9wdGlvbnMgZm9yIHRoZSBtb3N0IGZyZXF1ZW50bHkgZmlsbGVkIGJpbnMgY2hhcnRcbiAgY29uc3QgbW9zdEZyZXF1ZW50Qmluc09wdGlvbnMgPSB7XG4gICAgaW5kZXhBeGlzOiAneScsIC8vIFVzZSB0aGUgeS1heGlzIGFzIHRoZSBpbmRleCBheGlzIChob3Jpem9udGFsIGJhciBjaGFydClcbiAgICBzY2FsZXM6IHtcbiAgICAgIHg6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuYWx5dGljc19jb250YWluZXJ9PlxuICAgICAgey8qIC4uLiBleGlzdGluZyBjb2RlIGZvciBkYXRlIHJhbmdlIHNlbGVjdG9ycyAuLi4gKi99XG5cbiAgICAgIHsvKiBQbGFjZWhvbGRlciBmb3IgR3JhcGhzIGFuZCBDaGFydHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0X2NvbnRhaW5lcn0+XG4gICAgICAgIHsvKiBDaGFydCBmb3IgZmlsbCBsZXZlbHMgb3ZlciB0aW1lICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0fT5cbiAgICAgICAgICA8aDI+QXZnIEZpbGwgTGV2ZWxzIE92ZXIgVGltZTwvaDI+XG4gICAgICAgICAgPExpbmUgZGF0YT17ZmlsbExldmVsc0RhdGF9IG9wdGlvbnM9e2ZpbGxMZXZlbHNPcHRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2hhcnQgZm9yIG1vc3QgZnJlcXVlbnRseSBmaWxsZWQgYmlucyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydH0+XG4gICAgICAgICAgPGgyPk1vc3QgRnJlcXVlbnRseSBGaWxsZWQgQmluczwvaDI+XG4gICAgICAgICAgPEJhciBkYXRhPXttb3N0RnJlcXVlbnRCaW5zRGF0YX0gb3B0aW9ucz17bW9zdEZyZXF1ZW50Qmluc09wdGlvbnN9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBBZGRpdGlvbmFsIGNoYXJ0cyBhcyBuZWVkZWQgKi99XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIC4uLiBleGlzdGluZyBjb2RlIGZvciBwcmVkaWN0aXZlIGluc2lnaHRzIC4uLiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJhciIsIkxpbmUiLCJDaGFydCIsInN0eWxlcyIsIkRhdGEiLCJkYXRlUmFuZ2UiLCJzZXREYXRlUmFuZ2UiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZmlsbExldmVsc092ZXJUaW1lIiwibGFiZWxzIiwiZGF0YXNldHMiLCJkYXRhIiwibW9zdEZyZXF1ZW50bHlGaWxsZWRCaW5zIiwiZmlsbExldmVsc0RhdGEiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJmaWxsTGV2ZWxzT3B0aW9ucyIsInNjYWxlcyIsInkiLCJiZWdpbkF0WmVybyIsIm1vc3RGcmVxdWVudEJpbnNEYXRhIiwibW9zdEZyZXF1ZW50Qmluc09wdGlvbnMiLCJpbmRleEF4aXMiLCJ4IiwiZGl2IiwiY2xhc3NOYW1lIiwiYW5hbHl0aWNzX2NvbnRhaW5lciIsImNoYXJ0X2NvbnRhaW5lciIsImNoYXJ0IiwiaDIiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Data.js\n"));

/***/ })

});