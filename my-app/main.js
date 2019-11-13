(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<!-- <app-home></app-home> -->\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");












var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"] },
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //   path: 'heroes',
    //   component: HomeComponent,
    //   data: { title: 'Heroes List' }
    // },
    // { path: '',
    //   redirectTo: '/heroes',
    //   pathMatch: 'full'
    // },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contactus{\r\n    background-color: black;\r\n    height: -webkit-fill-available;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4Qjs7QUFFbEMiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdHVze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contactus\">\r\n  </div>"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<footer class=\"page-footer font-small mdb-color pt-4\">\r\n  <!-- <hr> -->\r\n  <div class=\"row d-flex align-items-center\">\r\n    <!-- Grid column -->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <p class=\"text-center text-md-center\">© 2018 Copyright:\r\n        <a href=\"\" class=\"footer-item\">\r\n          <strong> LABELPACK FZE</strong>\r\n        </a>\r\n      </p>\r\n    </div>\r\n    <!-- Grid column -->\r\n    <!-- <div class=\"col-md-5 col-lg-4 ml-lg-0\">\r\n      <div class=\"text-center text-md-right\">\r\n        <ul class=\"list-unstyled list-inline\">\r\n          <li class=\"list-inline-item\">\r\n            <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\r\n              <i class=\"fab fa-facebook-f\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-inline-item\">\r\n            <a class=\"btn-floating btn-sm rgba-white-slight mx-1\">\r\n              <i class=\"fab fa-linkedin-in\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-style{\r\n    height: 106px;\r\n    margin: -13px;\r\n  }\r\n\r\n  .navbar-style{\r\n    background-color: white;\r\n    /* initial; */\r\n     /* #f8f9fa70;; */\r\n}\r\n\r\n  .nav-link{\r\n  color: #007ca0;\r\n  /* font-family: Caviar; */\r\n  font-family: 'PT Sans', sans-serif;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\n\r\n  .nav-link:hover{\r\n  color:brown;\r\n}\r\n\r\n  fa{\r\n  padding:2px;\r\n  font-size:19px;\r\n}\r\n\r\n  /* fa:hover{\r\n  color:red\r\n} */\r\n\r\n  .navbar{\r\n/* background-color: initial */\r\nbackground-color: white;\r\n\r\n}\r\n\r\n  .nav{\r\n    /* background-color: initial */\r\n    background-color: white;\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0tBQ1osZ0JBQWdCO0FBQ3JCOztFQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLFdBQVc7QUFDYjs7RUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztFQUVBOztHQUVHOztFQUVIO0FBQ0EsOEJBQThCO0FBQzlCLHVCQUF1Qjs7QUFFdkI7O0VBRUE7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCOzs7QUFHM0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1zdHlsZXtcclxuICAgIGhlaWdodDogMTA2cHg7XHJcbiAgICBtYXJnaW46IC0xM3B4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLyogaW5pdGlhbDsgKi9cclxuICAgICAvKiAjZjhmOWZhNzA7OyAqL1xyXG59XHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6ICMwMDdjYTA7XHJcbiAgLyogZm9udC1mYW1pbHk6IENhdmlhcjsgKi9cclxuICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVye1xyXG4gIGNvbG9yOmJyb3duO1xyXG59XHJcblxyXG5mYXtcclxuICBwYWRkaW5nOjJweDtcclxuICBmb250LXNpemU6MTlweDtcclxufVxyXG5cclxuLyogZmE6aG92ZXJ7XHJcbiAgY29sb3I6cmVkXHJcbn0gKi9cclxuXHJcbi5uYXZiYXJ7XHJcbi8qIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWwgKi9cclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4ubmF2e1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md sticky-top navbar-style\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img class=\"logo-style\" src=\"./assets/images/newlogo.png\">\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse w-100 order-3 dual-collapse2 \" id=\"collapsibleNavbar\">\r\n    <ul class=\"navbar-nav ml-auto \">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home<fa name=\"home\" ></fa></a>\r\n      </li>\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#aboutus\">About Us</a>\r\n      </li> -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/contactus\" href=\"#\">Contact Us<fa name=\"phone\" ></fa></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/products\">Our Products(s) <fa name=\"print\" animation=\"\" ></fa></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!-- <nav class=\"nav  nav-fill\">\r\n  <a class=\"nav-item  nav-link  active\" routerLink=\"/home\" routerLinkActive=\"active\" >Home</a>\r\n  <a class=\"nav-item  nav-link \" >Who are We?</a>\r\n  <a class=\"nav-item  nav-link  disabled\" >Products</a>\r\n  <a class=\"nav-item  nav-link \" routerLink=\"/contactus\" >Contact Us</a>\r\n</nav> -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.background-first {\r\n    text-align: center;\r\n    color: white;\r\n    /* background: url(\"../assets/images/print.jpg\"); */\r\n    background: linear-gradient(#2125290d, #020202, transparent), url('home.jpg') no-repeat center; \r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /* background-image: linear-gradient(#004092, #020202, transparent); background-size: cover; box-shadow: 0px 10px 20px -5px rgba(0,0,0,.8); */\r\n  }\r\n  .background-next{\r\n    text-align: center;\r\n    color: white;\r\n    background: linear-gradient(#2125290d, #020202, transparent), url('print.jpg') no-repeat center; \r\n\r\n    /* background: url(\"../assets/images/print.jpg\"); */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  div.masthead .intro-text {\r\n    padding-top: 150px;\r\n    padding-bottom: 150px;\r\n  }\r\n  div.masthead .intro-text .intro-lead-in {\r\n    font-size: 22px;\r\n    font-style: italic;\r\n    line-height: 22px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n  div.masthead .intro-text .intro-heading {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    line-height: 50px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n  .intro-text {\r\n    padding-top: 150px;\r\n    padding-bottom: 200px;\r\n    /* font-family: Caviar; */\r\n  }\r\n  @media (min-width: 768px) {\r\n    div.masthead .intro-text {\r\n      padding-top: 150px;\r\n      padding-bottom: 200px;\r\n      /* font-family: Caviar; */\r\n    }\r\n    div.masthead .intro-text .intro-lead-in {\r\n        \r\n      font-size: 40px;\r\n      font-style: italic;\r\n      line-height: 40px;\r\n      margin-bottom: 25px;\r\n      font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    }\r\n    div.masthead .intro-text .intro-heading {\r\n      font-size: 75px;\r\n      font-weight: 700;\r\n      line-height: 75px;\r\n      margin-bottom: 50px;\r\n      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    }\r\n  }\r\n  .footer-item{\r\n    color: #007ca0;\r\n  }\r\n  .wp-caption {\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0;\r\n    }\r\n  .wp-caption img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: auto;\r\n    }\r\n  .wp-caption:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%) repeat 0 0;\r\n    z-index: 1;\r\n    }\r\n  .wp-caption-text {\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    color: #fff;\r\n    /* left: 0;\r\n    bottom: 0; */\r\n    padding: 1em;\r\n    font-weight: 700;\r\n    z-index: 2;\r\n    box-sizing: border-box;\r\n    }\r\n  .page-footer {\r\n  /* text-align: center; */\r\n  color: white;\r\n  /* background: url(\"../assets/images/print.jpg\"); */\r\n  background: linear-gradient(#2125290d, #020202, transparent), url('cubes.jpg') no-repeat center; \r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  /* background-image: linear-gradient(#004092, #020202, transparent); background-size: cover; box-shadow: 0px 10px 20px -5px rgba(0,0,0,.8); */\r\n}\r\n  .vert .carousel-item-next.carousel-item-left,\r\n.vert .carousel-item-prev.carousel-item-right {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n            transition: -webkit-transform 3s ease-out;\r\n\r\n}\r\n  .vert .carousel-item-next,\r\n.vert .active.carousel-item-right {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100% 0);\r\n            transition: -webkit-transform 3s ease-out;\r\n\r\n}\r\n  .vert .carousel-item-prev,\r\n.vert .active.carousel-item-left {\r\n-webkit-transform: translate3d(0,-100%, 0);\r\n        transform: translate3d(0,-100%, 0);\r\n        transition: -webkit-transform 3s ease-out;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtREFBbUQ7SUFDbkQsOEZBQWtIO0lBQ2xILDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2SUFBNkk7RUFDL0k7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osK0ZBQW1IOztJQUVuSCxtREFBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0VBQ3hCO0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb01BQW9NO0VBQ3RNO0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbU1BQW1NO0VBQ3JNO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLHlCQUF5QjtJQUMzQjtJQUNBOztNQUVFLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixvTUFBb007SUFDdE07SUFDQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixtTUFBbU07SUFDck07RUFDRjtFQUtBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Q7RUFDQTtJQUNBLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaO0VBQ0E7SUFDQSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUhBQWlIO0lBQ2pILFVBQVU7SUFDVjtFQUNBO0lBQ0EsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYO2dCQUNZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBRVYsc0JBQXNCO0lBQ3RCO0VBS0o7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCwrRkFBbUg7RUFDbkgsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDZJQUE2STtBQUMvSTtFQU9BOztJQUVJLHVDQUF1QztZQUMvQiwrQkFBK0I7WUFDL0IseUNBQXlDOztBQUVyRDtFQUVBOztJQUVJLDBDQUEwQztZQUNsQyxpQ0FBaUM7WUFDakMseUNBQXlDOztBQUVyRDtFQUVBOztBQUVBLDBDQUEwQztRQUNsQyxrQ0FBa0M7UUFDbEMseUNBQXlDOztBQUVqRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYWNrZ3JvdW5kLWZpcnN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvcHJpbnQuanBnXCIpOyAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMTI1MjkwZCwgIzAyMDIwMiwgdHJhbnNwYXJlbnQpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDQwOTIsICMwMjAyMDIsIHRyYW5zcGFyZW50KTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAtNXB4IHJnYmEoMCwwLDAsLjgpOyAqL1xyXG4gIH1cclxuICAuYmFja2dyb3VuZC1uZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMTI1MjkwZCwgIzAyMDIwMiwgdHJhbnNwYXJlbnQpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3ByaW50LmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyOyBcclxuXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3ByaW50LmpwZ1wiKTsgKi9cclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG5cclxuICBkaXYubWFzdGhlYWQgLmludHJvLXRleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICBkaXYubWFzdGhlYWQgLmludHJvLXRleHQgLmludHJvLWxlYWQtaW4ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcclxuICB9XHJcbiAgXHJcbiAgZGl2Lm1hc3RoZWFkIC5pbnRyby10ZXh0IC5pbnRyby1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XHJcbiAgfVxyXG5cclxuICAuaW50cm8tdGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgICAvKiBmb250LWZhbWlseTogQ2F2aWFyOyAqL1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpdi5tYXN0aGVhZCAuaW50cm8tdGV4dCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG4gICAgICAvKiBmb250LWZhbWlseTogQ2F2aWFyOyAqL1xyXG4gICAgfVxyXG4gICAgZGl2Lm1hc3RoZWFkIC5pbnRyby10ZXh0IC5pbnRyby1sZWFkLWluIHtcclxuICAgICAgICBcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1hc3RoZWFkIC5pbnRyby10ZXh0IC5pbnRyby1oZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiA3NXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogNzVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcblxyXG5cclxuICAuZm9vdGVyLWl0ZW17XHJcbiAgICBjb2xvcjogIzAwN2NhMDtcclxuICB9XHJcblxyXG4gIC53cC1jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAud3AtY2FwdGlvbiBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAud3AtY2FwdGlvbjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMHB4LCByZ2JhKDAsIDAsIDAsIDAuNikgMTAwJSkgcmVwZWF0IDAgMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAud3AtY2FwdGlvbi10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7ICovXHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICAgIFxyXG4ucGFnZS1mb290ZXIge1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLyogYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9wcmludC5qcGdcIik7ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyMTI1MjkwZCwgIzAyMDIwMiwgdHJhbnNwYXJlbnQpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2N1YmVzLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyOyBcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDQwOTIsICMwMjAyMDIsIHRyYW5zcGFyZW50KTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAtNXB4IHJnYmEoMCwwLDAsLjgpOyAqL1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi52ZXJ0IC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxyXG4udmVydCAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAzcyBlYXNlLW91dDtcclxuXHJcbn1cclxuXHJcbi52ZXJ0IC5jYXJvdXNlbC1pdGVtLW5leHQsXHJcbi52ZXJ0IC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSAwKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gM3MgZWFzZS1vdXQ7XHJcblxyXG59XHJcblxyXG4udmVydCAuY2Fyb3VzZWwtaXRlbS1wcmV2LFxyXG4udmVydCAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tbGVmdCB7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMDAlLCAwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsIDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDNzIGVhc2Utb3V0O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aboutus\" class=\"masthead background-first\" >\r\n  <div class=\"container\">\r\n    <div class=\"intro-text\">\r\n      Label Pack FZE, a company started by a well experienced professional team with experience in manufacturing all\r\n      kinds of Self-adhesive Labels since the last 20 years with commercial, technical and marketing expertise in the\r\n      UAE, GCC and Middle East market.\r\n      <br><br>\r\n      Equipped with state of the art machineries of European origin, which can print up to 10 colors and coupled with\r\n      trained and experienced manpower, we produce self-adhesive label matching the best in the industry supported with\r\n      our proven customer service.\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"container\"> -->\r\n  <div id=\"carouselExampleControls\" class=\"carousel vert slide\" data-ride=\"carousel\" data-interval=\"900\">\r\n      <ol class=\"carousel-indicators\">\r\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n            <img class=\"d-block mx-auto img-fluid\" src=\"../../assets/images/print.jpg\" alt=\"First slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img class=\"d-block mx-auto img-fluid\" src=\"../../assets/images/colors.jpg\" alt=\"Second slide\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img class=\"d-block mx-auto img-fluid\" src=\"../../assets/images/colors2.jpg\" alt=\"Third slide\">\r\n        </div>\r\n      </div>\r\n      <!-- <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon bg-dark rounded-circle\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon bg-dark rounded-circle\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n      </a> -->\r\n  </div>\r\n<!-- </div> -->\r\n<!-- Header -->\r\n\r\n\r\n<!-- \r\n<div style=\"height:200px;background-color:white;font-size:26px;color:wheat\">\r\n    <div class=\"intro-text\">\r\n\r\n    </div>\r\n  </div> -->\r\n<!-- Header -->\r\n<div class=\" masthead background-next\">\r\n  <div class=\"container\">\r\n    <div class=\"intro-text\">\r\n      <div class=\"intro-lead-in\"></div>\r\n      Lorem Ipsum\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#productspage{\r\n    background-color: black;\r\n    height: -webkit-fill-available;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7O0FBRWxDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9kdWN0c3BhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"productspage\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
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

module.exports = __webpack_require__(/*! D:\MyLabelPack\demorepnew\demorep\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map