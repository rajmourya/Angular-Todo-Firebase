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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-menu\">\n  <div class=\"text-center\">\n    TODO APPLICATION\n  </div>\n</div>\n<span id=\"s-time\"></span> <span id=\"c-time\"></span> <span id=\"d-time\"></span> \n          \n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"todoPanel\">\n          <form [formGroup]=\"this.productService.form\" (ngSubmit)=\"onSubmit()\" novalidate>\n            <input type=\"hidden\" formControlName=\"$key\">\n            <input type=\"text\" formControlName=\"title\" id=\"title\" placeholder=\"todo title\" style=\"width:340px;\">\n            <select  formControlName=\"time\" name=\"time\" id=\"time\" class=\"form-control\">\n              <option value=\"\" hidden>set time</option>\n              <option value=\"12:00:AM\">12:00 AM</option>\n              <option value=\"01:00 AM\">01:00 AM</option>\n              <option value=\"02:00 AM\">02:00 AM</option>\n              <option value=\"03:00 AM\">03:00 AM</option>\n              <option value=\"04:00 AM\">04:00 AM</option>\n              <option value=\"05:00 AM\">05:00 AM</option>\n              <option value=\"06:00 AM\">06:00 AM</option>\n              <option value=\"07:00 AM\">07:00 AM</option>\n              <option value=\"08:00 AM\">08:00 AM</option>\n              <option value=\"09:00 AM\">09:00 AM</option>\n              <option value=\"10:00 AM\">10:00 AM</option>\n              <option value=\"11:00 AM\">11:00 AM</option>\n              <option value=\"12:00 PM\">12:00 PM</option>\n              <option value=\"01:00 PM\">01:00 PM</option>\n              <option value=\"02:00 PM\">02:00 PM</option>\n              <option value=\"03:00 PM\">03:00 PM</option>\n              <option value=\"04:00 PM\">04:00 PM</option>\n              <option value=\"05:00 PM\">05:00 PM</option>\n              <option value=\"06:00 PM\">06:00 PM</option>\n              <option value=\"07:00 PM\">07:00 PM</option>\n              <option value=\"08:00 PM\">08:00 PM</option>\n              <option value=\"09:00 PM\">09:00 PM</option>\n              <option value=\"10:00 PM\">10:00 PM</option>\n              <option value=\"12:00 PM\">11:00 PM</option>\n            </select>            \n            <button id=\"todoBtn\" type=\"submit\" class=\"btn btn-primary\" >ADD</button>\n            <!-- [disabled]=\"this.productService.form.pristine || this.productService.form.invalid\" -->\n        \n          </form>\n          <hr/>\n          <table class=\"table table-bordered\">\n            <tr style=\"background-color:#e5e5e5;\">\n              <th style=\"width:40px;\" class=\"text-center\">SN</th>\n              <th>Title</th>\n              <th style=\"width:90px;\" class=\"text-center\">Time</th>\n              <th style=\"width:80px;\" class=\"text-center\">Action</th>\n            </tr>\n            <tr *ngFor=\"let product of products; let i = index;\">\n              <!-- <td>{{product.$key}}</td> -->\n              <td class=\"text-center\">{{i+1}}</td>\n              <td id=\"title\">{{product.title}}</td>\n              <td class=\"text-center\">{{product.time}}</td>\n              <td class=\"text-center\">\n                <a class=\" text-warning btn-sm\" (click)=\"productService.editProduct(product)\"><i class=\"fa fa-edit\"></i></a>\n                <a class=\" text-danger btn-sm\" (click)=\"onDelete(product.$key)\"><i class=\"fa fa-trash\"></i></a>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<footer class=\"main-footer\">\n  &copy; 2018 ShoesShop | All Rights Reserved\n</footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(productService) {
        this.productService = productService;
        this.pager = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    AppComponent.prototype.onSubmit = function () {
        if (this.productService.form.get('$key').value == null)
            this.productService.createProduct(this.productService.form.value);
        else
            this.productService.updateProduct(this.productService.form.value);
        this.productService.form.reset();
    };
    AppComponent.prototype.onDelete = function ($key) {
        this.productService.deleteProduct($key);
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig), angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"]
            ],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(formBuilder, firebase) {
        this.formBuilder = formBuilder;
        this.firebase = firebase;
        this.form = this.formBuilder.group({
            $key: [null],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        //this.form.time = todoTime;
    }
    ProductService.prototype.getProducts = function () {
        this.productList = this.firebase.list('products');
        return this.productList.snapshotChanges();
    };
    ProductService.prototype.createProduct = function (product) {
        this.productList.push({
            time: product.time,
            title: product.title
        });
    };
    ProductService.prototype.editProduct = function (product) {
        this.form.setValue(product);
    };
    ProductService.prototype.updateProduct = function (product) {
        this.productList.update(product.$key, {
            time: product.time,
            title: product.title
        });
    };
    ProductService.prototype.deleteProduct = function ($key) {
        this.productList.remove($key);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC-xx_Ddl4wyvvsmHSlgCXSbYHGBKDV3C4",
        authDomain: "simpletodo-b92ae.firebaseapp.com",
        databaseURL: "https://simpletodo-b92ae.firebaseio.com",
        projectId: "simpletodo-b92ae",
        storageBucket: "simpletodo-b92ae.appspot.com",
        messagingSenderId: "1004784120090"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular-5\UPLOAD\Todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map