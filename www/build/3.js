webpackJsonp([3],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPageModule", function() { return SelectAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_address__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectAddressPageModule = /** @class */ (function () {
    function SelectAddressPageModule() {
    }
    SelectAddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_address__["a" /* SelectAddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_address__["a" /* SelectAddressPage */]),
            ],
        })
    ], SelectAddressPageModule);
    return SelectAddressPageModule;
}());

//# sourceMappingURL=select-address.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_module_util__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SelectAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectAddressPage = /** @class */ (function () {
    function SelectAddressPage(mViewController, navCtrl, navParams) {
        this.mViewController = mViewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = "Chon";
        this.items = [];
        this.selected = "";
        this.itemsFilter = [];
        this.searchQuery = "";
        this.onLoadParams();
    }
    SelectAddressPage.prototype.onInput = function () {
        var _this = this;
        if (this.searchQuery.trim() != '') {
            this.items = this.itemsFilter.filter(function (ele) {
                return __WEBPACK_IMPORTED_MODULE_2__providers_app_module_util__["a" /* Utils */].bodauTiengViet(ele.name).toLowerCase().includes(__WEBPACK_IMPORTED_MODULE_2__providers_app_module_util__["a" /* Utils */].bodauTiengViet(_this.searchQuery).toLowerCase());
            });
        }
        else {
            this.items = this.itemsFilter;
        }
    };
    SelectAddressPage.prototype.onLoadParams = function () {
        if (this.navParams.data["params"]) {
            var params = this.navParams.get("params");
            if ("title" in params) {
                this.title = params.title;
            }
            if ("items" in params) {
                this.items = params.items;
                this.itemsFilter = this.items;
            }
            if ("selected" in params) {
                this.selected = params.selected;
            }
        }
    };
    SelectAddressPage.prototype.ionViewDidLoad = function () {
    };
    SelectAddressPage.prototype.onClickItem = function (item) {
        this.mViewController.dismiss(item.id);
    };
    SelectAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-address',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/select-address/select-address.html"*/'<!--\n  Generated template for the SelectAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n  <div class="backdrop" tappable navPop></div>\n  <div class="f-maxwidth-container">\n    <div class="btn-close">\n      <button ion-button clear icon-only navPop>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </div>\n    \n    <div class="f-title" text-center>\n      {{title}}\n    </div>\n\n    <div class="f-content">\n      <ion-searchbar mode="ios" placeholder="Tìm kiếm" (ionInput)="onInput()" [(ngModel)]="searchQuery"></ion-searchbar>\n      <div class="select-item" [class.selected]="item.id == selected" *ngFor="let item of items" (click)="onClickItem(item)">{{item.name}}</div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/select-address/select-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SelectAddressPage);
    return SelectAddressPage;
}());

//# sourceMappingURL=select-address.js.map

/***/ })

});
//# sourceMappingURL=3.js.map