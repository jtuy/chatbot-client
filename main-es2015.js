(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n<div class=\"content\"> \n   <h1>\n    Welcome {{ title }}!\n  </h1>\n  <div id=\"main\">\n    <div class=\"chatbox\">\n      <div *ngFor=\"let item of messageArray\">\n      <span>{{item.name}}: </span> {{item.message}}\n      </div>\n    </div>\n    <div><input id=\"input\" type=\"text\" placeholder=\"Please type your question\" autocomplete=\"off\" [(ngModel)]='message' (keyup.enter)=\"sendMessage()\"/></div>\n  </div>\n  \n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body { \n\tcolor: #421; \n\t/* font-weight: bold;  */\n\tfont-size: 18px; \n\tfont-family: \"Courier New\"; \n    /* background:rgb(223 247 229);  */\n    content: '';\n    /* background-image: url('../assets/Chatbot.png');\n    background-repeat: no-repeat;  */\n    opacity: 0.5;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    z-index: -1;\n}\n\n.content {\n\tmargin: auto;\n\twidth: 50%;\n\tpadding: 10px;\n}\n\n#main { \n\t/* position: fixed;  */\n\ttop: 30%; \n\tright: 200px; \n\twidth: 400px; \n\tborder: 0px solid #421; \n\t/* padding: 40px;  */\n}\n\n#main div { \n\tmargin: 10px; \n}\n\n#main div span { \n\tfont-weight: bold; \n}\n\n.chatbox { \n\theight: 600px; \n\twidth: 400px;\n\tborder: 1px solid #421; \n\toverflow:auto\n}\n\n#input { \n\tborder: 0; \n\tpadding: 5px; \n\tborder: 1px solid #421; \n\twidth: 390px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsd0JBQXdCO0NBQ3hCLGVBQWU7Q0FDZiwwQkFBMEI7SUFDdkIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWDtvQ0FDZ0M7SUFDaEMsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsUUFBUTtDQUNSLFlBQVk7Q0FDWixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCO0FBQ0Q7O0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHsgXG5cdGNvbG9yOiAjNDIxOyBcblx0LyogZm9udC13ZWlnaHQ6IGJvbGQ7ICAqL1xuXHRmb250LXNpemU6IDE4cHg7IFxuXHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiOyBcbiAgICAvKiBiYWNrZ3JvdW5kOnJnYigyMjMgMjQ3IDIyOSk7ICAqL1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL0NoYXRib3QucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgICovXG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5jb250ZW50IHtcblx0bWFyZ2luOiBhdXRvO1xuXHR3aWR0aDogNTAlO1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4jbWFpbiB7IFxuXHQvKiBwb3NpdGlvbjogZml4ZWQ7ICAqL1xuXHR0b3A6IDMwJTsgXG5cdHJpZ2h0OiAyMDBweDsgXG5cdHdpZHRoOiA0MDBweDsgXG5cdGJvcmRlcjogMHB4IHNvbGlkICM0MjE7IFxuXHQvKiBwYWRkaW5nOiA0MHB4OyAgKi9cbn1cbiNtYWluIGRpdiB7IFxuXHRtYXJnaW46IDEwcHg7IFxufSBcbiNtYWluIGRpdiBzcGFuIHsgXG5cdGZvbnQtd2VpZ2h0OiBib2xkOyBcbn0gXG4uY2hhdGJveCB7IFxuXHRoZWlnaHQ6IDYwMHB4OyBcblx0d2lkdGg6IDQwMHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjNDIxOyBcblx0b3ZlcmZsb3c6YXV0b1xufSBcbiNpbnB1dCB7IFxuXHRib3JkZXI6IDA7IFxuXHRwYWRkaW5nOiA1cHg7IFxuXHRib3JkZXI6IDFweCBzb2xpZCAjNDIxOyBcblx0d2lkdGg6IDM5MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");



let AppComponent = class AppComponent {
    constructor(socketService) {
        this.socketService = socketService;
        this.title = 'Daisy Barnes';
        this.messageArray = [];
        this.message = '';
        this.synth = window.speechSynthesis;
        this.voices = this.synth.getVoices();
    }
    ngOnInit() {
        this.socketService.receivedReply().subscribe(data => {
            this.messageArray.push({ name: 'Chatbot', message: data.outputMessage });
            this.speak(data.outputMessage);
        });
    }
    sendMessage() {
        const data = { message: this.message };
        this.socketService.sendMessage(data);
        this.messageArray.push({ name: 'Daisy', message: this.message });
        this.message = '';
    }
    speak(string) {
        let u = new SpeechSynthesisUtterance(string);
        u.text = string;
        u.lang = "en-US";
        u.volume = 1; //0-1 interval
        u.rate = 1;
        u.pitch = 1; //0-2 interval
        this.synth.speak(u);
    }
};
AppComponent.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        providers: [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




let SocketService = class SocketService {
    constructor() {
        // private socket = io('http://127.0.0.1:8000');
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__('https://plaid-different-danger.glitch.me');
    }
    sendMessage(data) {
        this.socket.emit('message', data);
    }
    receivedReply() {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.socket.on('reply', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
};
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SocketService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/a09335/CODE/FHIR/chatbot-client-code/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map