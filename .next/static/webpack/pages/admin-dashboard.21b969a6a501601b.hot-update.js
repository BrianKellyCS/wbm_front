/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin-dashboard",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./styles/Dashboard.module.css":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./styles/Dashboard.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n\\n.Dashboard_dashboard_container__OReY9 {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.Dashboard_nav_container__FQper {\\n  width: 150px; /* Fixed sidebar width */\\n  height: 100vh;\\n  background-color: #021329; \\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start; /* Align items to the start (left) */\\n  position: fixed; /* Fixed position to stay in view */\\n  top: 0;\\n  left: 0;\\n  gap: 15px;\\n  justify-content: space-between;\\n}\\n\\n.Dashboard_nav_container__FQper button {\\n  width: 100%;\\n  padding: 10px;\\n  color: #fff; /* White text for buttons */\\n  background: #021329;  /* Bright color for buttons */\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  font-size: 14px;\\n}\\n\\n.Dashboard_nav_container__FQper button:hover {\\n  background: rgb(0, 8, 17);  /* Darker background on hover */\\n}\\n\\n\\n.Dashboard_nav_container__FQper .Dashboard_logout_button__dVsBL {\\n  background: #ff4136;\\n  margin-top: auto;\\n}\\n\\n.Dashboard_nav_container__FQper .Dashboard_logout_button__dVsBL:hover {\\n  background: #e82c20; /* A darker shade of red for hover */\\n}\\n\\n/* Responsive design for the sidebar and main content */\\n@media (max-width: 1307px) {\\n  .Dashboard_dashboard_container__OReY9 {\\n    flex-direction: column; /* Stack sidebar and main content */\\n  }\\n  .Dashboard_nav_container__FQper {\\n    width: 100%; /* Full width for the sidebar */\\n    height: auto; /* Adjust height to content */\\n    position: relative; /* Change position for mobile */\\n  }\\n  .Dashboard_main_content__UJqck {\\n    margin-left: 270px; /* Remove margin as sidebar is now above the content */\\n    width: 100%; /* Full width for main content */\\n  }\\n  .Dashboard_nav_container__FQper{\\n    flex-direction:row;\\n  }\\n\\n  .Dashboard_nav_container__FQper button {\\n    width: 100%;\\n    padding: 10px;\\n    color: #fff; /* White text for buttons */\\n    background-color: #021329; \\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n  }\\n\\n\\n}\\n\\n\\n\\n/* Sidebar Styling */\\n.Dashboard_sidebar__XKqWF {\\n  width: 220px; /* Width of the sidebar */\\n  position: fixed; /* Fixed position to stay in view */\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  background-color: #232629;  /* Dark background to match navbar */\\n  color: #c2c0c0; /* White text color */\\n  padding: 20px;\\n  overflow-y: auto; /* Allows scrolling of the sidebar content */\\n  z-index: 1000; /* Ensure the sidebar is above other content */\\n  top: calc(55px); /* 60px is navbar height and 1rem could be the vertical padding of the navbar */\\n}\\n\\n/* Styling for individual panels in the sidebar */\\n.Dashboard_sidebar-panel__104B1 {\\n  background-color: #232629;  /* Slightly lighter than sidebar bg */\\n  margin-bottom: 20px; /* Space between panels */\\n  padding: 15px;\\n  border-radius: 4px;\\n}\\n\\n.Dashboard_sidebar-panel__104B1 h5 {\\n  color: #f1f1f1;\\n  margin-bottom: 15px;\\n}\\n\\n/* Scrollbar styling for sidebar */\\n.Dashboard_sidebar__XKqWF::-webkit-scrollbar {\\n  width: 5px;\\n}\\n\\n.Dashboard_sidebar__XKqWF::-webkit-scrollbar-thumb {\\n  background-color: #2c3e50;\\n  border-radius: 10px;\\n}\\n\\n/* Styling for the items in the panels */\\n.Dashboard_sidebar-panel-item__cw_tQ {\\n  background-color: #232629; /* Even lighter for contrast */\\n  margin-bottom: 10px;\\n  padding: 10px;\\n  border-radius: 4px;\\n  cursor: pointer; /* Indicate items are interactive */\\n  transition: background-color 0.3s; /* Smooth transition for hover effect */\\n}\\n\\n.Dashboard_sidebar-panel-item__cw_tQ:hover {\\n  background-color: #044192; /* Highlight item on hover */\\n}\\n\\n/* Responsive adjustments */\\n@media (max-width: 1316px) {\\n  .Dashboard_sidebar__XKqWF {\\n    display: none;\\n\\n  }\\n\\n  .Dashboard_sidebar-panel__104B1 {\\n    border-radius: 0; /* Remove border radius for full-width panels */\\n  }\\n}\\n\\n.Dashboard_cardContainer__oMy8c {\\n  margin-top: 80px; /* Adjust based on the height of your fixed navbar */\\n  display:block;\\n}\\n\\n.Dashboard_dashboard__BvGi5 {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n  grid-gap: 20px;\\n  gap: 20px;\\n  padding: 20px;\\n  justify-content: center;\\n}\\n\\n.Dashboard_card__aNrPS {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  height: 200px; /* Adjust height as needed */\\n  padding: 20px;\\n  background-color: #ffffff;\\n  border-radius: 10px;\\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\\n  cursor: pointer;\\n  transition: all 0.3s ease;\\n}\\n\\n.Dashboard_card__aNrPS:hover {\\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\\n  transform: translateY(-5px);\\n  background-color: green;\\n}\\n\\n.Dashboard_card__aNrPS i {\\n  font-size: 2rem;\\n  color: #4CAF50; /* Example icon color, adjust as needed */\\n}\\n\\n.Dashboard_card__aNrPS h3 {\\n  margin-top: 10px;\\n  font-size: 1.25rem;\\n  color: #333;\\n}\\n\\n\\n.Dashboard_backButton__8__Ba {\\n  display: block; /* Or 'inline-block' if you prefer */\\n  margin: 20px auto; /* Center the button in the container */\\n  padding: 10px 20px;\\n  background-color: #007bff; /* Bootstrap primary color, change as needed */\\n  color: white;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  font-size: 1rem;\\n  text-align: center;\\n}\\n\\n.Dashboard_backButton__8__Ba:hover {\\n  background-color: #0056b3; /* Darker shade for hover state */\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Dashboard.module.css\"],\"names\":[],\"mappings\":\";;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY,EAAE,wBAAwB;EACtC,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB,EAAE,oCAAoC;EAC7D,eAAe,EAAE,mCAAmC;EACpD,MAAM;EACN,OAAO;EACP,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,WAAW,EAAE,2BAA2B;EACxC,mBAAmB,GAAG,6BAA6B;EACnD,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB,GAAG,+BAA+B;AAC7D;;;AAGA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB,EAAE,oCAAoC;AAC3D;;AAEA,uDAAuD;AACvD;EACE;IACE,sBAAsB,EAAE,mCAAmC;EAC7D;EACA;IACE,WAAW,EAAE,+BAA+B;IAC5C,YAAY,EAAE,6BAA6B;IAC3C,kBAAkB,EAAE,+BAA+B;EACrD;EACA;IACE,kBAAkB,EAAE,sDAAsD;IAC1E,WAAW,EAAE,gCAAgC;EAC/C;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,WAAW,EAAE,2BAA2B;IACxC,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,eAAe;EACjB;;;AAGF;;;;AAIA,oBAAoB;AACpB;EACE,YAAY,EAAE,yBAAyB;EACvC,eAAe,EAAE,mCAAmC;EACpD,MAAM;EACN,SAAS;EACT,OAAO;EACP,yBAAyB,GAAG,oCAAoC;EAChE,cAAc,EAAE,qBAAqB;EACrC,aAAa;EACb,gBAAgB,EAAE,4CAA4C;EAC9D,aAAa,EAAE,8CAA8C;EAC7D,eAAe,EAAE,+EAA+E;AAClG;;AAEA,iDAAiD;AACjD;EACE,yBAAyB,GAAG,qCAAqC;EACjE,mBAAmB,EAAE,yBAAyB;EAC9C,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA,kCAAkC;AAClC;EACE,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA,wCAAwC;AACxC;EACE,yBAAyB,EAAE,8BAA8B;EACzD,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,eAAe,EAAE,mCAAmC;EACpD,iCAAiC,EAAE,uCAAuC;AAC5E;;AAEA;EACE,yBAAyB,EAAE,4BAA4B;AACzD;;AAEA,2BAA2B;AAC3B;EACE;IACE,aAAa;;EAEf;;EAEA;IACE,gBAAgB,EAAE,+CAA+C;EACnE;AACF;;AAEA;EACE,gBAAgB,EAAE,oDAAoD;EACtE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,cAAS;EAAT,SAAS;EACT,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa,EAAE,4BAA4B;EAC3C,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,0CAA0C;EAC1C,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,0CAA0C;EAC1C,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,cAAc,EAAE,yCAAyC;AAC3D;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;;AAGA;EACE,cAAc,EAAE,oCAAoC;EACpD,iBAAiB,EAAE,uCAAuC;EAC1D,kBAAkB;EAClB,yBAAyB,EAAE,8CAA8C;EACzE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,iCAAiC;AAC9D\",\"sourcesContent\":[\"\\n\\n.dashboard_container {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.nav_container {\\n  width: 150px; /* Fixed sidebar width */\\n  height: 100vh;\\n  background-color: #021329; \\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start; /* Align items to the start (left) */\\n  position: fixed; /* Fixed position to stay in view */\\n  top: 0;\\n  left: 0;\\n  gap: 15px;\\n  justify-content: space-between;\\n}\\n\\n.nav_container button {\\n  width: 100%;\\n  padding: 10px;\\n  color: #fff; /* White text for buttons */\\n  background: #021329;  /* Bright color for buttons */\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  font-size: 14px;\\n}\\n\\n.nav_container button:hover {\\n  background: rgb(0, 8, 17);  /* Darker background on hover */\\n}\\n\\n\\n.nav_container .logout_button {\\n  background: #ff4136;\\n  margin-top: auto;\\n}\\n\\n.nav_container .logout_button:hover {\\n  background: #e82c20; /* A darker shade of red for hover */\\n}\\n\\n/* Responsive design for the sidebar and main content */\\n@media (max-width: 1307px) {\\n  .dashboard_container {\\n    flex-direction: column; /* Stack sidebar and main content */\\n  }\\n  .nav_container {\\n    width: 100%; /* Full width for the sidebar */\\n    height: auto; /* Adjust height to content */\\n    position: relative; /* Change position for mobile */\\n  }\\n  .main_content {\\n    margin-left: 270px; /* Remove margin as sidebar is now above the content */\\n    width: 100%; /* Full width for main content */\\n  }\\n  .nav_container{\\n    flex-direction:row;\\n  }\\n\\n  .nav_container button {\\n    width: 100%;\\n    padding: 10px;\\n    color: #fff; /* White text for buttons */\\n    background-color: #021329; \\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n  }\\n\\n\\n}\\n\\n\\n\\n/* Sidebar Styling */\\n.sidebar {\\n  width: 220px; /* Width of the sidebar */\\n  position: fixed; /* Fixed position to stay in view */\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  background-color: #232629;  /* Dark background to match navbar */\\n  color: #c2c0c0; /* White text color */\\n  padding: 20px;\\n  overflow-y: auto; /* Allows scrolling of the sidebar content */\\n  z-index: 1000; /* Ensure the sidebar is above other content */\\n  top: calc(55px); /* 60px is navbar height and 1rem could be the vertical padding of the navbar */\\n}\\n\\n/* Styling for individual panels in the sidebar */\\n.sidebar-panel {\\n  background-color: #232629;  /* Slightly lighter than sidebar bg */\\n  margin-bottom: 20px; /* Space between panels */\\n  padding: 15px;\\n  border-radius: 4px;\\n}\\n\\n.sidebar-panel h5 {\\n  color: #f1f1f1;\\n  margin-bottom: 15px;\\n}\\n\\n/* Scrollbar styling for sidebar */\\n.sidebar::-webkit-scrollbar {\\n  width: 5px;\\n}\\n\\n.sidebar::-webkit-scrollbar-thumb {\\n  background-color: #2c3e50;\\n  border-radius: 10px;\\n}\\n\\n/* Styling for the items in the panels */\\n.sidebar-panel-item {\\n  background-color: #232629; /* Even lighter for contrast */\\n  margin-bottom: 10px;\\n  padding: 10px;\\n  border-radius: 4px;\\n  cursor: pointer; /* Indicate items are interactive */\\n  transition: background-color 0.3s; /* Smooth transition for hover effect */\\n}\\n\\n.sidebar-panel-item:hover {\\n  background-color: #044192; /* Highlight item on hover */\\n}\\n\\n/* Responsive adjustments */\\n@media (max-width: 1316px) {\\n  .sidebar {\\n    display: none;\\n\\n  }\\n\\n  .sidebar-panel {\\n    border-radius: 0; /* Remove border radius for full-width panels */\\n  }\\n}\\n\\n.cardContainer {\\n  margin-top: 80px; /* Adjust based on the height of your fixed navbar */\\n  display:block;\\n}\\n\\n.dashboard {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n  gap: 20px;\\n  padding: 20px;\\n  justify-content: center;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  height: 200px; /* Adjust height as needed */\\n  padding: 20px;\\n  background-color: #ffffff;\\n  border-radius: 10px;\\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\\n  cursor: pointer;\\n  transition: all 0.3s ease;\\n}\\n\\n.card:hover {\\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\\n  transform: translateY(-5px);\\n  background-color: green;\\n}\\n\\n.card i {\\n  font-size: 2rem;\\n  color: #4CAF50; /* Example icon color, adjust as needed */\\n}\\n\\n.card h3 {\\n  margin-top: 10px;\\n  font-size: 1.25rem;\\n  color: #333;\\n}\\n\\n\\n.backButton {\\n  display: block; /* Or 'inline-block' if you prefer */\\n  margin: 20px auto; /* Center the button in the container */\\n  padding: 10px 20px;\\n  background-color: #007bff; /* Bootstrap primary color, change as needed */\\n  color: white;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  font-size: 1rem;\\n  text-align: center;\\n}\\n\\n.backButton:hover {\\n  background-color: #0056b3; /* Darker shade for hover state */\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"dashboard_container\": \"Dashboard_dashboard_container__OReY9\",\n\t\"nav_container\": \"Dashboard_nav_container__FQper\",\n\t\"logout_button\": \"Dashboard_logout_button__dVsBL\",\n\t\"main_content\": \"Dashboard_main_content__UJqck\",\n\t\"sidebar\": \"Dashboard_sidebar__XKqWF\",\n\t\"sidebar-panel\": \"Dashboard_sidebar-panel__104B1\",\n\t\"sidebar-panel-item\": \"Dashboard_sidebar-panel-item__cw_tQ\",\n\t\"cardContainer\": \"Dashboard_cardContainer__oMy8c\",\n\t\"dashboard\": \"Dashboard_dashboard__BvGi5\",\n\t\"card\": \"Dashboard_card__aNrPS\",\n\t\"backButton\": \"Dashboard_backButton__8__Ba\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxxRkFBcUYsa0JBQWtCLHdCQUF3QixHQUFHLHFDQUFxQyxrQkFBa0IsMkNBQTJDLCtCQUErQixrQkFBa0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsMERBQTBELCtDQUErQyxZQUFZLGNBQWMsbUNBQW1DLEdBQUcsNENBQTRDLGdCQUFnQixrQkFBa0IsaUJBQWlCLHNEQUFzRCwrQ0FBK0MsdUJBQXVCLG9CQUFvQixvQkFBb0IsR0FBRyxrREFBa0QsZ0NBQWdDLG1DQUFtQyx1RUFBdUUsd0JBQXdCLHFCQUFxQixHQUFHLDJFQUEyRSx5QkFBeUIsd0NBQXdDLDBGQUEwRiwyQ0FBMkMsOEJBQThCLHlDQUF5QyxxQ0FBcUMsbUJBQW1CLG9EQUFvRCx3REFBd0QscUNBQXFDLG9DQUFvQywwQkFBMEIsMEVBQTBFLHNDQUFzQyxvQ0FBb0MseUJBQXlCLEtBQUssOENBQThDLGtCQUFrQixvQkFBb0IsbUJBQW1CLDZEQUE2RCxtQkFBbUIseUJBQXlCLHNCQUFzQixLQUFLLE9BQU8sMERBQTBELGtCQUFrQiwrQ0FBK0MsK0NBQStDLGNBQWMsWUFBWSxnQ0FBZ0MseURBQXlELHdDQUF3QyxzQkFBc0IsZ0VBQWdFLG9FQUFvRSxtRkFBbUYseUZBQXlGLGdDQUFnQywrREFBK0QsNENBQTRDLHVCQUF1QixHQUFHLHdDQUF3Qyxt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cGFjazovL19OX0UvLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3M/NjAyOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLkRhc2hib2FyZF9kYXNoYm9hcmRfY29udGFpbmVyX19PUmVZOSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLkRhc2hib2FyZF9uYXZfY29udGFpbmVyX19GUXBlciB7XFxuICB3aWR0aDogMTUwcHg7IC8qIEZpeGVkIHNpZGViYXIgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxMzI5OyBcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgc3RhcnQgKGxlZnQpICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIHBvc2l0aW9uIHRvIHN0YXkgaW4gdmlldyAqL1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGdhcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLkRhc2hib2FyZF9uYXZfY29udGFpbmVyX19GUXBlciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgZm9yIGJ1dHRvbnMgKi9cXG4gIGJhY2tncm91bmQ6ICMwMjEzMjk7ICAvKiBCcmlnaHQgY29sb3IgZm9yIGJ1dHRvbnMgKi9cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLkRhc2hib2FyZF9uYXZfY29udGFpbmVyX19GUXBlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDgsIDE3KTsgIC8qIERhcmtlciBiYWNrZ3JvdW5kIG9uIGhvdmVyICovXFxufVxcblxcblxcbi5EYXNoYm9hcmRfbmF2X2NvbnRhaW5lcl9fRlFwZXIgLkRhc2hib2FyZF9sb2dvdXRfYnV0dG9uX19kVnNCTCB7XFxuICBiYWNrZ3JvdW5kOiAjZmY0MTM2O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLkRhc2hib2FyZF9uYXZfY29udGFpbmVyX19GUXBlciAuRGFzaGJvYXJkX2xvZ291dF9idXR0b25fX2RWc0JMOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlODJjMjA7IC8qIEEgZGFya2VyIHNoYWRlIG9mIHJlZCBmb3IgaG92ZXIgKi9cXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBkZXNpZ24gZm9yIHRoZSBzaWRlYmFyIGFuZCBtYWluIGNvbnRlbnQgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMTMwN3B4KSB7XFxuICAuRGFzaGJvYXJkX2Rhc2hib2FyZF9jb250YWluZXJfX09SZVk5IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgc2lkZWJhciBhbmQgbWFpbiBjb250ZW50ICovXFxuICB9XFxuICAuRGFzaGJvYXJkX25hdl9jb250YWluZXJfX0ZRcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggZm9yIHRoZSBzaWRlYmFyICovXFxuICAgIGhlaWdodDogYXV0bzsgLyogQWRqdXN0IGhlaWdodCB0byBjb250ZW50ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQ2hhbmdlIHBvc2l0aW9uIGZvciBtb2JpbGUgKi9cXG4gIH1cXG4gIC5EYXNoYm9hcmRfbWFpbl9jb250ZW50X19VSnFjayB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNzBweDsgLyogUmVtb3ZlIG1hcmdpbiBhcyBzaWRlYmFyIGlzIG5vdyBhYm92ZSB0aGUgY29udGVudCAqL1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgbWFpbiBjb250ZW50ICovXFxuICB9XFxuICAuRGFzaGJvYXJkX25hdl9jb250YWluZXJfX0ZRcGVye1xcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxuICB9XFxuXFxuICAuRGFzaGJvYXJkX25hdl9jb250YWluZXJfX0ZRcGVyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjsgLyogV2hpdGUgdGV4dCBmb3IgYnV0dG9ucyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxMzI5OyBcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG59XFxuXFxuXFxuXFxuLyogU2lkZWJhciBTdHlsaW5nICovXFxuLkRhc2hib2FyZF9zaWRlYmFyX19YS3FXRiB7XFxuICB3aWR0aDogMjIwcHg7IC8qIFdpZHRoIG9mIHRoZSBzaWRlYmFyICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIHBvc2l0aW9uIHRvIHN0YXkgaW4gdmlldyAqL1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2Mjk7ICAvKiBEYXJrIGJhY2tncm91bmQgdG8gbWF0Y2ggbmF2YmFyICovXFxuICBjb2xvcjogI2MyYzBjMDsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIEFsbG93cyBzY3JvbGxpbmcgb2YgdGhlIHNpZGViYXIgY29udGVudCAqL1xcbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoZSBzaWRlYmFyIGlzIGFib3ZlIG90aGVyIGNvbnRlbnQgKi9cXG4gIHRvcDogY2FsYyg1NXB4KTsgLyogNjBweCBpcyBuYXZiYXIgaGVpZ2h0IGFuZCAxcmVtIGNvdWxkIGJlIHRoZSB2ZXJ0aWNhbCBwYWRkaW5nIG9mIHRoZSBuYXZiYXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgaW5kaXZpZHVhbCBwYW5lbHMgaW4gdGhlIHNpZGViYXIgKi9cXG4uRGFzaGJvYXJkX3NpZGViYXItcGFuZWxfXzEwNEIxIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2Mjk7ICAvKiBTbGlnaHRseSBsaWdodGVyIHRoYW4gc2lkZWJhciBiZyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBwYW5lbHMgKi9cXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5EYXNoYm9hcmRfc2lkZWJhci1wYW5lbF9fMTA0QjEgaDUge1xcbiAgY29sb3I6ICNmMWYxZjE7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgc3R5bGluZyBmb3Igc2lkZWJhciAqL1xcbi5EYXNoYm9hcmRfc2lkZWJhcl9fWEtxV0Y6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbi5EYXNoYm9hcmRfc2lkZWJhcl9fWEtxV0Y6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgaXRlbXMgaW4gdGhlIHBhbmVscyAqL1xcbi5EYXNoYm9hcmRfc2lkZWJhci1wYW5lbC1pdGVtX19jd190USB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNjI5OyAvKiBFdmVuIGxpZ2h0ZXIgZm9yIGNvbnRyYXN0ICovXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogSW5kaWNhdGUgaXRlbXMgYXJlIGludGVyYWN0aXZlICovXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IC8qIFNtb290aCB0cmFuc2l0aW9uIGZvciBob3ZlciBlZmZlY3QgKi9cXG59XFxuXFxuLkRhc2hib2FyZF9zaWRlYmFyLXBhbmVsLWl0ZW1fX2N3X3RROmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDQxOTI7IC8qIEhpZ2hsaWdodCBpdGVtIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMTMxNnB4KSB7XFxuICAuRGFzaGJvYXJkX3NpZGViYXJfX1hLcVdGIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gIH1cXG5cXG4gIC5EYXNoYm9hcmRfc2lkZWJhci1wYW5lbF9fMTA0QjEge1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyAvKiBSZW1vdmUgYm9yZGVyIHJhZGl1cyBmb3IgZnVsbC13aWR0aCBwYW5lbHMgKi9cXG4gIH1cXG59XFxuXFxuLkRhc2hib2FyZF9jYXJkQ29udGFpbmVyX19vTXk4YyB7XFxuICBtYXJnaW4tdG9wOiA4MHB4OyAvKiBBZGp1c3QgYmFzZWQgb24gdGhlIGhlaWdodCBvZiB5b3VyIGZpeGVkIG5hdmJhciAqL1xcbiAgZGlzcGxheTpibG9jaztcXG59XFxuXFxuLkRhc2hib2FyZF9kYXNoYm9hcmRfX0J2R2k1IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uRGFzaGJvYXJkX2NhcmRfX2FOclBTIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAyMDBweDsgLyogQWRqdXN0IGhlaWdodCBhcyBuZWVkZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5EYXNoYm9hcmRfY2FyZF9fYU5yUFM6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5EYXNoYm9hcmRfY2FyZF9fYU5yUFMgaSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzRDQUY1MDsgLyogRXhhbXBsZSBpY29uIGNvbG9yLCBhZGp1c3QgYXMgbmVlZGVkICovXFxufVxcblxcbi5EYXNoYm9hcmRfY2FyZF9fYU5yUFMgaDMge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG5cXG4uRGFzaGJvYXJkX2JhY2tCdXR0b25fXzhfX0JhIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBPciAnaW5saW5lLWJsb2NrJyBpZiB5b3UgcHJlZmVyICovXFxuICBtYXJnaW46IDIwcHggYXV0bzsgLyogQ2VudGVyIHRoZSBidXR0b24gaW4gdGhlIGNvbnRhaW5lciAqL1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLyogQm9vdHN0cmFwIHByaW1hcnkgY29sb3IsIGNoYW5nZSBhcyBuZWVkZWQgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkRhc2hib2FyZF9iYWNrQnV0dG9uX184X19CYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgZm9yIGhvdmVyIHN0YXRlICovXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZLEVBQUUsd0JBQXdCO0VBQ3RDLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUUsb0NBQW9DO0VBQzdELGVBQWUsRUFBRSxtQ0FBbUM7RUFDcEQsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUUsMkJBQTJCO0VBQ3hDLG1CQUFtQixHQUFHLDZCQUE2QjtFQUNuRCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCLEdBQUcsK0JBQStCO0FBQzdEOzs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSxvQ0FBb0M7QUFDM0Q7O0FBRUEsdURBQXVEO0FBQ3ZEO0VBQ0U7SUFDRSxzQkFBc0IsRUFBRSxtQ0FBbUM7RUFDN0Q7RUFDQTtJQUNFLFdBQVcsRUFBRSwrQkFBK0I7SUFDNUMsWUFBWSxFQUFFLDZCQUE2QjtJQUMzQyxrQkFBa0IsRUFBRSwrQkFBK0I7RUFDckQ7RUFDQTtJQUNFLGtCQUFrQixFQUFFLHNEQUFzRDtJQUMxRSxXQUFXLEVBQUUsZ0NBQWdDO0VBQy9DO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVcsRUFBRSwyQkFBMkI7SUFDeEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7O0FBR0Y7Ozs7QUFJQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZLEVBQUUseUJBQXlCO0VBQ3ZDLGVBQWUsRUFBRSxtQ0FBbUM7RUFDcEQsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AseUJBQXlCLEdBQUcsb0NBQW9DO0VBQ2hFLGNBQWMsRUFBRSxxQkFBcUI7RUFDckMsYUFBYTtFQUNiLGdCQUFnQixFQUFFLDRDQUE0QztFQUM5RCxhQUFhLEVBQUUsOENBQThDO0VBQzdELGVBQWUsRUFBRSwrRUFBK0U7QUFDbEc7O0FBRUEsaURBQWlEO0FBQ2pEO0VBQ0UseUJBQXlCLEdBQUcscUNBQXFDO0VBQ2pFLG1CQUFtQixFQUFFLHlCQUF5QjtFQUM5QyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLHlCQUF5QixFQUFFLDhCQUE4QjtFQUN6RCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlLEVBQUUsbUNBQW1DO0VBQ3BELGlDQUFpQyxFQUFFLHVDQUF1QztBQUM1RTs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLDRCQUE0QjtBQUN6RDs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGFBQWE7O0VBRWY7O0VBRUE7SUFDRSxnQkFBZ0IsRUFBRSwrQ0FBK0M7RUFDbkU7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLG9EQUFvRDtFQUN0RSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELGNBQVM7RUFBVCxTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhLEVBQUUsNEJBQTRCO0VBQzNDLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFFLHlDQUF5QztBQUMzRDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOzs7QUFHQTtFQUNFLGNBQWMsRUFBRSxvQ0FBb0M7RUFDcEQsaUJBQWlCLEVBQUUsdUNBQXVDO0VBQzFELGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBRSw4Q0FBOEM7RUFDekUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxpQ0FBaUM7QUFDOURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLmRhc2hib2FyZF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5uYXZfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxNTBweDsgLyogRml4ZWQgc2lkZWJhciB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjEzMjk7IFxcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEFsaWduIGl0ZW1zIHRvIHRoZSBzdGFydCAobGVmdCkgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgcG9zaXRpb24gdG8gc3RheSBpbiB2aWV3ICovXFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZ2FwOiAxNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2X2NvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgZm9yIGJ1dHRvbnMgKi9cXG4gIGJhY2tncm91bmQ6ICMwMjEzMjk7ICAvKiBCcmlnaHQgY29sb3IgZm9yIGJ1dHRvbnMgKi9cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLm5hdl9jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCA4LCAxNyk7ICAvKiBEYXJrZXIgYmFja2dyb3VuZCBvbiBob3ZlciAqL1xcbn1cXG5cXG5cXG4ubmF2X2NvbnRhaW5lciAubG9nb3V0X2J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjZmY0MTM2O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLm5hdl9jb250YWluZXIgLmxvZ291dF9idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U4MmMyMDsgLyogQSBkYXJrZXIgc2hhZGUgb2YgcmVkIGZvciBob3ZlciAqL1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGRlc2lnbiBmb3IgdGhlIHNpZGViYXIgYW5kIG1haW4gY29udGVudCAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzA3cHgpIHtcXG4gIC5kYXNoYm9hcmRfY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgc2lkZWJhciBhbmQgbWFpbiBjb250ZW50ICovXFxuICB9XFxuICAubmF2X2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciB0aGUgc2lkZWJhciAqL1xcbiAgICBoZWlnaHQ6IGF1dG87IC8qIEFkanVzdCBoZWlnaHQgdG8gY29udGVudCAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIENoYW5nZSBwb3NpdGlvbiBmb3IgbW9iaWxlICovXFxuICB9XFxuICAubWFpbl9jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI3MHB4OyAvKiBSZW1vdmUgbWFyZ2luIGFzIHNpZGViYXIgaXMgbm93IGFib3ZlIHRoZSBjb250ZW50ICovXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBtYWluIGNvbnRlbnQgKi9cXG4gIH1cXG4gIC5uYXZfY29udGFpbmVye1xcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxuICB9XFxuXFxuICAubmF2X2NvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6ICNmZmY7IC8qIFdoaXRlIHRleHQgZm9yIGJ1dHRvbnMgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMTMyOTsgXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuXFxufVxcblxcblxcblxcbi8qIFNpZGViYXIgU3R5bGluZyAqL1xcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAyMjBweDsgLyogV2lkdGggb2YgdGhlIHNpZGViYXIgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgcG9zaXRpb24gdG8gc3RheSBpbiB2aWV3ICovXFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYyOTsgIC8qIERhcmsgYmFja2dyb3VuZCB0byBtYXRjaCBuYXZiYXIgKi9cXG4gIGNvbG9yOiAjYzJjMGMwOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogQWxsb3dzIHNjcm9sbGluZyBvZiB0aGUgc2lkZWJhciBjb250ZW50ICovXFxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhlIHNpZGViYXIgaXMgYWJvdmUgb3RoZXIgY29udGVudCAqL1xcbiAgdG9wOiBjYWxjKDU1cHgpOyAvKiA2MHB4IGlzIG5hdmJhciBoZWlnaHQgYW5kIDFyZW0gY291bGQgYmUgdGhlIHZlcnRpY2FsIHBhZGRpbmcgb2YgdGhlIG5hdmJhciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBpbmRpdmlkdWFsIHBhbmVscyBpbiB0aGUgc2lkZWJhciAqL1xcbi5zaWRlYmFyLXBhbmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2Mjk7ICAvKiBTbGlnaHRseSBsaWdodGVyIHRoYW4gc2lkZWJhciBiZyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBwYW5lbHMgKi9cXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5zaWRlYmFyLXBhbmVsIGg1IHtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLyogU2Nyb2xsYmFyIHN0eWxpbmcgZm9yIHNpZGViYXIgKi9cXG4uc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuLnNpZGViYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgaXRlbXMgaW4gdGhlIHBhbmVscyAqL1xcbi5zaWRlYmFyLXBhbmVsLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYyOTsgLyogRXZlbiBsaWdodGVyIGZvciBjb250cmFzdCAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEluZGljYXRlIGl0ZW1zIGFyZSBpbnRlcmFjdGl2ZSAqL1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyAvKiBTbW9vdGggdHJhbnNpdGlvbiBmb3IgaG92ZXIgZWZmZWN0ICovXFxufVxcblxcbi5zaWRlYmFyLXBhbmVsLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NDE5MjsgLyogSGlnaGxpZ2h0IGl0ZW0gb24gaG92ZXIgKi9cXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzE2cHgpIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gIH1cXG5cXG4gIC5zaWRlYmFyLXBhbmVsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgLyogUmVtb3ZlIGJvcmRlciByYWRpdXMgZm9yIGZ1bGwtd2lkdGggcGFuZWxzICovXFxuICB9XFxufVxcblxcbi5jYXJkQ29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDgwcHg7IC8qIEFkanVzdCBiYXNlZCBvbiB0aGUgaGVpZ2h0IG9mIHlvdXIgZml4ZWQgbmF2YmFyICovXFxuICBkaXNwbGF5OmJsb2NrO1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwMHB4OyAvKiBBZGp1c3QgaGVpZ2h0IGFzIG5lZWRlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jYXJkIGkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICM0Q0FGNTA7IC8qIEV4YW1wbGUgaWNvbiBjb2xvciwgYWRqdXN0IGFzIG5lZWRlZCAqL1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcblxcbi5iYWNrQnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBPciAnaW5saW5lLWJsb2NrJyBpZiB5b3UgcHJlZmVyICovXFxuICBtYXJnaW46IDIwcHggYXV0bzsgLyogQ2VudGVyIHRoZSBidXR0b24gaW4gdGhlIGNvbnRhaW5lciAqL1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLyogQm9vdHN0cmFwIHByaW1hcnkgY29sb3IsIGNoYW5nZSBhcyBuZWVkZWQgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJhY2tCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsgLyogRGFya2VyIHNoYWRlIGZvciBob3ZlciBzdGF0ZSAqL1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJkYXNoYm9hcmRfY29udGFpbmVyXCI6IFwiRGFzaGJvYXJkX2Rhc2hib2FyZF9jb250YWluZXJfX09SZVk5XCIsXG5cdFwibmF2X2NvbnRhaW5lclwiOiBcIkRhc2hib2FyZF9uYXZfY29udGFpbmVyX19GUXBlclwiLFxuXHRcImxvZ291dF9idXR0b25cIjogXCJEYXNoYm9hcmRfbG9nb3V0X2J1dHRvbl9fZFZzQkxcIixcblx0XCJtYWluX2NvbnRlbnRcIjogXCJEYXNoYm9hcmRfbWFpbl9jb250ZW50X19VSnFja1wiLFxuXHRcInNpZGViYXJcIjogXCJEYXNoYm9hcmRfc2lkZWJhcl9fWEtxV0ZcIixcblx0XCJzaWRlYmFyLXBhbmVsXCI6IFwiRGFzaGJvYXJkX3NpZGViYXItcGFuZWxfXzEwNEIxXCIsXG5cdFwic2lkZWJhci1wYW5lbC1pdGVtXCI6IFwiRGFzaGJvYXJkX3NpZGViYXItcGFuZWwtaXRlbV9fY3dfdFFcIixcblx0XCJjYXJkQ29udGFpbmVyXCI6IFwiRGFzaGJvYXJkX2NhcmRDb250YWluZXJfX29NeThjXCIsXG5cdFwiZGFzaGJvYXJkXCI6IFwiRGFzaGJvYXJkX2Rhc2hib2FyZF9fQnZHaTVcIixcblx0XCJjYXJkXCI6IFwiRGFzaGJvYXJkX2NhcmRfX2FOclBTXCIsXG5cdFwiYmFja0J1dHRvblwiOiBcIkRhc2hib2FyZF9iYWNrQnV0dG9uX184X19CYVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./styles/Dashboard.module.css\n"));

/***/ })

});