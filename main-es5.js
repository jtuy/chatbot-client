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

module.exports = "<div class=\"body\">\n  <div class=\"content\"> \n     <h1>\n      Welcome to {{ title }}!\n    </h1>\n    <div id=\"main\">\n      <div class=\"chatbox\" #scrollMe>\n        <div *ngFor=\"let item of messageArray\">\n        <span>{{item.name}}: </span> {{item.message}}\n        </div>\n      </div>\n      <div><input id=\"input\" type=\"text\" placeholder=\"Please type your question\" autocomplete=\"off\" [(ngModel)]='message' (keyup.enter)=\"sendMessage()\"/></div>\n    </div>\n    \n  </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body { \n\tcolor: #421; \n\t/* font-weight: bold;  */\n\tfont-size: 18px; \n\tfont-family: \"Courier New\"; \n    /* background:rgb(223 247 229);  */\n    content: '';\n    /* background-image: url('../assets/Chatbot.png');\n    background-repeat: no-repeat;  */\n    opacity: 0.5;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    z-index: -1;\n}\n\n.content {\n\tmargin: auto;\n\twidth: 50%;\n\tpadding: 10px;\n}\n\n#main { \n\t/* position: fixed;  */\n\ttop: 30%; \n\tright: 200px; \n\twidth: 400px; \n\tborder: 0px solid #421; \n\t/* padding: 40px;  */\n}\n\n#main div { \n\tmargin: 10px; \n\twhite-space: pre-wrap;\n}\n\n#main div span { \n\tfont-weight: bold; \n}\n\n.chatbox { \n\theight: 600px; \n\twidth: 400px;\n\tborder: 1px solid #421; \n\toverflow: auto;\n}\n\n#input { \n\tborder: 0; \n\tpadding: 5px; \n\tborder: 1px solid #421; \n\twidth: 390px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsd0JBQXdCO0NBQ3hCLGVBQWU7Q0FDZiwwQkFBMEI7SUFDdkIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWDtvQ0FDZ0M7SUFDaEMsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsUUFBUTtDQUNSLFlBQVk7Q0FDWixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQjs7QUFDQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixjQUFjO0FBQ2Y7O0FBQUU7Q0FDRCxTQUFTO0NBQ1QsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHsgXG5cdGNvbG9yOiAjNDIxOyBcblx0LyogZm9udC13ZWlnaHQ6IGJvbGQ7ICAqL1xuXHRmb250LXNpemU6IDE4cHg7IFxuXHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiOyBcbiAgICAvKiBiYWNrZ3JvdW5kOnJnYigyMjMgMjQ3IDIyOSk7ICAqL1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL0NoYXRib3QucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgICovXG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5jb250ZW50IHtcblx0bWFyZ2luOiBhdXRvO1xuXHR3aWR0aDogNTAlO1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4jbWFpbiB7IFxuXHQvKiBwb3NpdGlvbjogZml4ZWQ7ICAqL1xuXHR0b3A6IDMwJTsgXG5cdHJpZ2h0OiAyMDBweDsgXG5cdHdpZHRoOiA0MDBweDsgXG5cdGJvcmRlcjogMHB4IHNvbGlkICM0MjE7IFxuXHQvKiBwYWRkaW5nOiA0MHB4OyAgKi9cbn1cbiNtYWluIGRpdiB7IFxuXHRtYXJnaW46IDEwcHg7IFxuXHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59IFxuI21haW4gZGl2IHNwYW4geyBcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7IFxufSBcbi5jaGF0Ym94IHsgXG5cdGhlaWdodDogNjAwcHg7IFxuXHR3aWR0aDogNDAwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM0MjE7IFxuXHRvdmVyZmxvdzogYXV0bztcbn0gI2lucHV0IHsgXG5cdGJvcmRlcjogMDsgXG5cdHBhZGRpbmc6IDVweDsgXG5cdGJvcmRlcjogMXB4IHNvbGlkICM0MjE7IFxuXHR3aWR0aDogMzkwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.title = 'Chatbot';
        this.messageArray = [];
        this.message = '';
        this.synth = window.speechSynthesis;
        this.voices = this.synth.getVoices();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.receivedReply().subscribe(function (data) {
            _this.messageArray.push({ name: 'Chatbot', message: data.outputMessage });
            _this.speak(data.outputMessage);
        });
        var outputMessage = "Hi Cynthia, I'm your health care spending navigator. I can provide you with information about your claims. You can ask me like... \nShow my latest claims. \nShow my claims with provider FiveLakesHealthSystem. \nShow my claim details on 2020-12-18.";
        this.messageArray.push({ name: 'Chatbot', message: outputMessage });
        this.speak(outputMessage);
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    AppComponent.prototype.sendMessage = function () {
        var data = { patientId: "3516", message: this.message };
        this.socketService.sendMessage(data);
        this.messageArray.push({ name: 'Cynthia', message: this.message });
        this.message = '';
    };
    AppComponent.prototype.speak = function (string) {
        var u = new SpeechSynthesisUtterance(string);
        u.text = string;
        u.lang = "en-US";
        u.volume = 1; //0-1 interval
        u.rate = 1;
        u.pitch = 1; //0-2 interval
        this.synth.speak(u);
    };
    AppComponent.prototype.scrollToBottom = function () {
        try {
            this.myChatBox.nativeElement.scrollTop = this.myChatBox.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { static: false })
    ], AppComponent.prototype, "myChatBox", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




var SocketService = /** @class */ (function () {
    // private socket = io('http://127.0.0.1:8000');
    function SocketService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__('https://plaid-different-danger.glitch.me');
    }
    SocketService.prototype.sendMessage = function (data) {
        this.socket.emit('message', data);
    };
    SocketService.prototype.receivedReply = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('reply', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SocketService);
    return SocketService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map