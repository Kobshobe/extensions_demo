/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/plugins/background.js ***!
  \***********************************/

let index = 1

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(async function(msg) {
        console.log("get msg: ", msg)
        port.postMessage({"msg": "resp", index})
        index++
    })
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0EsS0FBSztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVuc2lvbnNfZGVtby8uL3NyYy9wbHVnaW5zL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgaW5kZXggPSAxXG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihwb3J0KSB7XG4gICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgZnVuY3Rpb24obXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IG1zZzogXCIsIG1zZylcbiAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7XCJtc2dcIjogXCJyZXNwXCIsIGluZGV4fSlcbiAgICAgICAgaW5kZXgrK1xuICAgIH0pXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==