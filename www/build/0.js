webpackJsonp([0],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViettelPackageDetailPageModule", function() { return ViettelPackageDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viettel_package_detail__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViettelPackageDetailPageModule = /** @class */ (function () {
    function ViettelPackageDetailPageModule() {
    }
    ViettelPackageDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viettel_package_detail__["a" /* ViettelPackageDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viettel_package_detail__["a" /* ViettelPackageDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ViettelPackageDetailPageModule);
    return ViettelPackageDetailPageModule;
}());

//# sourceMappingURL=viettel-package-detail.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViettelPackageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_class_month_package__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_module_app_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_module_util__ = __webpack_require__(42);
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
 * Generated class for the ViettelPackageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViettelPackageDetailPage = /** @class */ (function () {
    function ViettelPackageDetailPage(mEvent, mDectectChange, mAppModule, navCtrl, navParams) {
        var _this = this;
        this.mEvent = mEvent;
        this.mDectectChange = mDectectChange;
        this.mAppModule = mAppModule;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.mName = "";
        this.menuIcon = "menu";
        this.url = "";
        this.mScrollTop = 0;
        this.mViettelPackage = new __WEBPACK_IMPORTED_MODULE_2__providers_class_month_package__["a" /* Package */]();
        this.mPackage = new __WEBPACK_IMPORTED_MODULE_2__providers_class_month_package__["c" /* Packages */]();
        this.mAppModule.onLoadConfig().then(function () {
            _this.url = _this.mAppModule.getAppConfig().get("trasau_url");
        });
        if (this.navParams.data["name"]) {
            this.mViettelPackage.name = this.navParams.get("name");
            var data = this.mAppModule.getPackageController().getPackageByName(this.mViettelPackage.name);
            if (data.id == -1) {
                this.mAppModule.getPackageController().onResponseAppConfig();
                this.onLoadDsGoiCuocSuccess();
            }
            else {
                this.mViettelPackage = data;
                this.mPackage = this.mAppModule.getPackageController().getPackagesById(this.mViettelPackage.p_id);
                this.mName = __WEBPACK_IMPORTED_MODULE_5__providers_app_module_util__["a" /* Utils */].bodauTiengViet(this.mPackage.name);
                this.mName = __WEBPACK_IMPORTED_MODULE_5__providers_app_module_util__["a" /* Utils */].boDauCach(this.mName);
                this.onLoadItems();
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    }
    ViettelPackageDetailPage.prototype.onLoadDsGoiCuocSuccess = function () {
        this.mViettelPackage = this.mAppModule.getPackageController().getPackageByName(this.mViettelPackage.name);
        if (this.mViettelPackage.id == -1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            return;
        }
        this.mPackage = this.mAppModule.getPackageController().getPackagesById(this.mViettelPackage.p_id);
        this.mName = __WEBPACK_IMPORTED_MODULE_5__providers_app_module_util__["a" /* Utils */].bodauTiengViet(this.mPackage.name);
        this.mName = __WEBPACK_IMPORTED_MODULE_5__providers_app_module_util__["a" /* Utils */].boDauCach(this.mName);
        this.onLoadItems();
    };
    ViettelPackageDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.mViettelPackage.p_id > -1)
            this.onLoadItems();
        this.myContent.ionScroll.asObservable().subscribe(function () {
            _this.mScrollTop = _this.myContent.scrollTop;
            _this.mDectectChange.detectChanges();
        });
        this.mEvent.subscribe("openmenu", function () {
            _this.menuIcon = "md-close";
            _this.mDectectChange.detectChanges();
        });
        this.mEvent.subscribe("closemenu", function () {
            _this.menuIcon = "menu";
            _this.mDectectChange.detectChanges();
        });
    };
    ViettelPackageDetailPage.prototype.onLoadItems = function () {
        var _this = this;
        this.items = this.mAppModule.getPackageController().getPackageByPID(this.mViettelPackage.p_id);
        var index = this.items.findIndex(function (element) {
            return element.id == _this.mViettelPackage.id;
        });
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    ViettelPackageDetailPage.prototype.scrollTop = function () {
        this.myContent.scrollToTop(200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ViettelPackageDetailPage.prototype, "myContent", void 0);
    ViettelPackageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viettel-package-detail',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/viettel-package-detail/viettel-package-detail.html"*/'<!--\n  Generated template for the ViettelPackageDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <div class="xs-hidden primary-bg">\n    <viettel-header></viettel-header>\n  </div>\n\n  <ion-toolbar class="sm-hidden md-hidden lg-hidden xl-hidden">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="{{menuIcon}}"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class="img-top-header" text-center>\n      <img src="./assets/imgs/logo-viettel-telecom.png" alt="">\n    </div>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content>\n  <div class="img-header">\n    <img src="./assets/imgs/viettel-4g-desktop.jpg" alt="Viettel 4G">\n  </div>\n\n  <div padding class="a3-container a3-items-center path">\n    <a href="">\n      <span padding-right tappable>Home</span>\n    </a>\n    <span>/</span>\n    <span padding-left>{{mViettelPackage.name}}</span>\n\n  </div>\n\n  <ion-grid padding>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-4 padding-top>\n        <viettel-package [mMode]="1" [mViettelPackage]="mViettelPackage" [color]="\'primary-color\'"></viettel-package>\n      </ion-col>\n      <ion-col col-12 col-sm-6 col-md-8>\n        <div text-uppercase padding-top padding-left class="font-bold">giới thiệu</div>\n        <div padding-left padding-right class="vt-vt-des" style="white-space: pre-line;" [innerHtml]="mViettelPackage.description"></div>\n\n        <div padding>\n          <a style="color: red !important;font-size: 2rem; font-weight: bold; text-decoration: none;" href="{{url}}">\n            <ion-icon class="animated infinite flash" name="md-arrow-forward"></ion-icon>\n            <span margin-left>Click để đăng ký TRẢ SAU Online tại đây</span>\n          </a>\n        </div>\n\n        <div padding-left padding-bottom padding-right>\n          <div class="vt-4g-line a1-relative">\n            <div class="cirle a1-absolute"></div>\n          </div>\n        </div>\n\n        <div text-uppercase padding-left class="font-bold">cách đăng ký</div>\n\n        <div padding class="vt-vt-des">\n          <span>Quý khách có thể đăng ký gói cước bằng cách click chọn vào "Đăng ký ngay"</span>\n\n          <div class="vt-4g-line a1-relative" margin-top>\n            <div class="cirle a1-absolute"></div>\n          </div>\n        </div>\n\n\n        <div text-uppercase padding-left class="font-bold">huỷ dịch vụ</div>\n\n        <div padding class="vt-vt-des">\n          <span>Soạn tin HUY gửi 191, đợi tin nhắn tổng đài gửi về, soạn Y gửi 191 để xác nhận</span>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <div class="vt-sp-relative">\n    <div text-uppercase class="primary-color title-big">sản phẩm liên quan</div>\n    <ion-grid class="xs-hidden">\n      <ion-row margin-bottom align-items-center justify-content-center>\n        <ion-col col-12 col-sm-4 col-md-3 *ngFor="let item of items">\n          <viettel-package [mViettelPackage]="item" [color]="\'primary-color\'"></viettel-package>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class="sm-hidden md-hidden xl-hidden lg-hidden">\n      <ion-row margin-bottom nowrap style="overflow-x: scroll" align-items-center>\n        <ion-col col-9 col-sm-4 col-md-3 *ngFor="let item of items">\n          <viettel-package [mViettelPackage]="item" [color]="\'primary-color\'"></viettel-package>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <viettel-footer></viettel-footer>\n\n  <ion-fab bottom right [hidden]="mScrollTop < 20">\n    <button ion-fab mini color="light" (click)="scrollTop()">\n      <ion-icon name="md-arrow-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/viettel-package-detail/viettel-package-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_module_app_module__["a" /* AppModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ViettelPackageDetailPage);
    return ViettelPackageDetailPage;
}());

//# sourceMappingURL=viettel-package-detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map