"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/employee-dashboard",{

/***/ "./comps/ManageEmployees.js":
/*!**********************************!*\
  !*** ./comps/ManageEmployees.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ManageEmployees_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/ManageEmployees.module.css */ \"./styles/ManageEmployees.module.css\");\n/* harmony import */ var _styles_ManageEmployees_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ManageEmployees_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _aaa_samples_employees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aaa_samples/employees */ \"./aaa_samples/employees.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ManageEmployees() {\n    _s();\n    // State to manage sorted data and sorting direction\n    const [sortedEmployees, setSortedEmployees] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_aaa_samples_employees__WEBPACK_IMPORTED_MODULE_2__.employees);\n    const [sortConfig, setSortConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        key: null,\n        direction: null\n    });\n    // Function to handle sorting\n    const sortData = (key)=>{\n        let direction = \"ascending\";\n        if (sortConfig.key === key && sortConfig.direction === \"ascending\") {\n            direction = \"descending\";\n        }\n        let sortedData = [\n            ..._aaa_samples_employees__WEBPACK_IMPORTED_MODULE_2__.employees\n        ]; // Copy the original array to avoid mutating state directly\n        sortedData.sort((a, b)=>{\n            if (key === \"id\") {\n                // For numeric values\n                return direction === \"ascending\" ? a[key] - b[key] : b[key] - a[key];\n            } else if (key === \"timestamp\") {\n                // For dates\n                const dateA = new Date(a[key]);\n                const dateB = new Date(b[key]);\n                return direction === \"ascending\" ? dateA - dateB : dateB - dateA;\n            } else {\n                // For strings\n                const aValue = key === \"lname\" ? a.lname.toLowerCase() : a[key].toLowerCase();\n                const bValue = key === \"lname\" ? b.lname.toLowerCase() : b[key].toLowerCase();\n                if (aValue < bValue) {\n                    return direction === \"ascending\" ? -1 : 1;\n                }\n                if (aValue > bValue) {\n                    return direction === \"ascending\" ? 1 : -1;\n                }\n            }\n            return 0;\n        });\n        setSortedEmployees(sortedData);\n        setSortConfig({\n            key,\n            direction\n        });\n    };\n    // Function to handle the Add Employee button click\n    const handleAddEmployee = ()=>{\n        //Logic for add employee\n        console.log(\"Add Employee button clicked\");\n    };\n    // Function to handle the View Logs button/link click\n    const handleViewLogs = ()=>{\n        //logic for view logs\n        console.log(\"View Logs clicked\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ManageEmployees_module_css__WEBPACK_IMPORTED_MODULE_3___default().manage_employees_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Manage Employees\"\n            }, void 0, false, {\n                fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ManageEmployees_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: handleAddEmployee,\n                children: \"Add Employee\"\n            }, void 0, false, {\n                fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ManageEmployees_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: handleViewLogs,\n                children: \"View Logs\"\n            }, void 0, false, {\n                fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: (_styles_ManageEmployees_module_css__WEBPACK_IMPORTED_MODULE_3___default().employees_table),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    onClick: ()=>sortData(\"id\"),\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    onClick: ()=>sortData(\"lname\"),\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    onClick: ()=>sortData(\"email\"),\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    onClick: ()=>sortData(\"timestamp\"),\n                                    children: \"Employee Since\"\n                                }, void 0, false, {\n                                    fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: sortedEmployees.map((employee)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.id\n                                    }, void 0, false, {\n                                        fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: \"\".concat(employee.fname, \" \").concat(employee.lname)\n                                    }, void 0, false, {\n                                        fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.email\n                                    }, void 0, false, {\n                                        fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: employee.timestamp\n                                    }, void 0, false, {\n                                        fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, employee.id, true, {\n                                fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/x-0901/test/wbm_front/comps/ManageEmployees.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(ManageEmployees, \"qC9FZbXnpDy1YcUszYO/7VZf0S0=\");\n_c = ManageEmployees;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageEmployees);\nvar _c;\n$RefreshReg$(_c, \"ManageEmployees\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx5QkFDcEIsOERBQUNKOztrREFDQyw4REFBQ0s7a0RBQUlELFNBQVNFLEVBQUU7Ozs7OztrREFDaEIsOERBQUNEO2tEQUFJLEdBQXFCRCxPQUFsQkEsU0FBU0csS0FBSyxFQUFDLEtBQWtCLE9BQWZILFNBQVNwQixLQUFLOzs7Ozs7a0RBQ3hDLDhEQUFDcUI7a0RBQUlELFNBQVNJLEtBQUs7Ozs7OztrREFDbkIsOERBQUNIO2tEQUFJRCxTQUFTSyxTQUFTOzs7Ozs7OytCQUpoQkwsU0FBU0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVloQztHQWhGU3RDO0tBQUFBO0FBa0ZULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL01hbmFnZUVtcGxveWVlcy5qcz9hODk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01hbmFnZUVtcGxveWVlcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGVtcGxveWVlcyB9IGZyb20gJy4uL2FhYV9zYW1wbGVzL2VtcGxveWVlcyc7XG5cbmZ1bmN0aW9uIE1hbmFnZUVtcGxveWVlcygpIHtcbiAgLy8gU3RhdGUgdG8gbWFuYWdlIHNvcnRlZCBkYXRhIGFuZCBzb3J0aW5nIGRpcmVjdGlvblxuICBjb25zdCBbc29ydGVkRW1wbG95ZWVzLCBzZXRTb3J0ZWRFbXBsb3llZXNdID0gdXNlU3RhdGUoZW1wbG95ZWVzKTtcbiAgY29uc3QgW3NvcnRDb25maWcsIHNldFNvcnRDb25maWddID0gdXNlU3RhdGUoeyBrZXk6IG51bGwsIGRpcmVjdGlvbjogbnVsbCB9KTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgc29ydGluZ1xuICBjb25zdCBzb3J0RGF0YSA9IChrZXkpID0+IHtcbiAgICBsZXQgZGlyZWN0aW9uID0gJ2FzY2VuZGluZyc7XG4gICAgaWYgKHNvcnRDb25maWcua2V5ID09PSBrZXkgJiYgc29ydENvbmZpZy5kaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnZGVzY2VuZGluZyc7XG4gICAgfVxuICAgIGxldCBzb3J0ZWREYXRhID0gWy4uLmVtcGxveWVlc107IC8vIENvcHkgdGhlIG9yaWdpbmFsIGFycmF5IHRvIGF2b2lkIG11dGF0aW5nIHN0YXRlIGRpcmVjdGx5XG4gICAgc29ydGVkRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaWQnKSB7XG4gICAgICAgIC8vIEZvciBudW1lcmljIHZhbHVlc1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJyA/IGFba2V5XSAtIGJba2V5XSA6IGJba2V5XSAtIGFba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndGltZXN0YW1wJykge1xuICAgICAgICAvLyBGb3IgZGF0ZXNcbiAgICAgICAgY29uc3QgZGF0ZUEgPSBuZXcgRGF0ZShhW2tleV0pO1xuICAgICAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGJba2V5XSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnID8gZGF0ZUEgLSBkYXRlQiA6IGRhdGVCIC0gZGF0ZUE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igc3RyaW5nc1xuICAgICAgICBjb25zdCBhVmFsdWUgPSBrZXkgPT09ICdsbmFtZScgPyBhLmxuYW1lLnRvTG93ZXJDYXNlKCkgOiBhW2tleV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgYlZhbHVlID0ga2V5ID09PSAnbG5hbWUnID8gYi5sbmFtZS50b0xvd2VyQ2FzZSgpIDogYltrZXldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChhVmFsdWUgPCBiVmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJyA/IC0xIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVZhbHVlID4gYlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2FzY2VuZGluZycgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIHNldFNvcnRlZEVtcGxveWVlcyhzb3J0ZWREYXRhKTtcbiAgICBzZXRTb3J0Q29uZmlnKHsga2V5LCBkaXJlY3Rpb24gfSk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBBZGQgRW1wbG95ZWUgYnV0dG9uIGNsaWNrXG4gIGNvbnN0IGhhbmRsZUFkZEVtcGxveWVlID0gKCkgPT4ge1xuICAgIC8vTG9naWMgZm9yIGFkZCBlbXBsb3llZVxuICAgIGNvbnNvbGUubG9nKCdBZGQgRW1wbG95ZWUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIFZpZXcgTG9ncyBidXR0b24vbGluayBjbGlja1xuICBjb25zdCBoYW5kbGVWaWV3TG9ncyA9ICgpID0+IHtcbiAgICAvL2xvZ2ljIGZvciB2aWV3IGxvZ3NcbiAgICBjb25zb2xlLmxvZygnVmlldyBMb2dzIGNsaWNrZWQnKTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYW5hZ2VfZW1wbG95ZWVzX2NvbnRhaW5lcn0+XG4gICAgICA8aDE+TWFuYWdlIEVtcGxveWVlczwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQWRkRW1wbG95ZWV9PkFkZCBFbXBsb3llZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZVZpZXdMb2dzfT5WaWV3IExvZ3M8L2J1dHRvbj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5lbXBsb3llZXNfdGFibGV9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIG9uQ2xpY2s9eygpID0+IHNvcnREYXRhKCdpZCcpfT5JRDwvdGg+XG4gICAgICAgICAgICA8dGggb25DbGljaz17KCkgPT4gc29ydERhdGEoJ2xuYW1lJyl9Pk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIG9uQ2xpY2s9eygpID0+IHNvcnREYXRhKCdlbWFpbCcpfT5FbWFpbDwvdGg+XG4gICAgICAgICAgICA8dGggb25DbGljaz17KCkgPT4gc29ydERhdGEoJ3RpbWVzdGFtcCcpfT5FbXBsb3llZSBTaW5jZTwvdGg+XG4gICAgICAgICAgICB7LyogQWRkIG90aGVyIGhlYWRlcnMgaGVyZSAqL31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3NvcnRlZEVtcGxveWVlcy5tYXAoKGVtcGxveWVlKSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtlbXBsb3llZS5pZH0+XG4gICAgICAgICAgICAgIDx0ZD57ZW1wbG95ZWUuaWR9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntgJHtlbXBsb3llZS5mbmFtZX0gJHtlbXBsb3llZS5sbmFtZX1gfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57ZW1wbG95ZWUuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntlbXBsb3llZS50aW1lc3RhbXB9PC90ZD5cbiAgICAgICAgICAgICAgey8qIEFkZCBvdGhlciBkYXRhIGNlbGxzIGhlcmUgKi99XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlRW1wbG95ZWVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiZW1wbG95ZWVzIiwiTWFuYWdlRW1wbG95ZWVzIiwic29ydGVkRW1wbG95ZWVzIiwic2V0U29ydGVkRW1wbG95ZWVzIiwic29ydENvbmZpZyIsInNldFNvcnRDb25maWciLCJrZXkiLCJkaXJlY3Rpb24iLCJzb3J0RGF0YSIsInNvcnRlZERhdGEiLCJzb3J0IiwiYSIsImIiLCJkYXRlQSIsIkRhdGUiLCJkYXRlQiIsImFWYWx1ZSIsImxuYW1lIiwidG9Mb3dlckNhc2UiLCJiVmFsdWUiLCJoYW5kbGVBZGRFbXBsb3llZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVWaWV3TG9ncyIsImRpdiIsImNsYXNzTmFtZSIsIm1hbmFnZV9lbXBsb3llZXNfY29udGFpbmVyIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwidGFibGUiLCJlbXBsb3llZXNfdGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImVtcGxveWVlIiwidGQiLCJpZCIsImZuYW1lIiwiZW1haWwiLCJ0aW1lc3RhbXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/ManageEmployees.js\n"));

/***/ })

});