webpackJsonp([5],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailPageModule", function() { return PackageDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package_detail__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PackageDetailPageModule = /** @class */ (function () {
    function PackageDetailPageModule() {
    }
    PackageDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__package_detail__["a" /* PackageDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__package_detail__["a" /* PackageDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PackageDetailPageModule);
    return PackageDetailPageModule;
}());

//# sourceMappingURL=package-detail.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_class_month_package__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_module_app_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
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
 * Generated class for the PackageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackageDetailPage = /** @class */ (function () {
    function PackageDetailPage(mEvent, mDectectChange, mAppModule, navCtrl, navParams) {
        this.mEvent = mEvent;
        this.mDectectChange = mDectectChange;
        this.mAppModule = mAppModule;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuIcon = "menu";
        this.mScrollTop = 0;
        this.mPackage = new __WEBPACK_IMPORTED_MODULE_2__providers_class_month_package__["c" /* Packages */]();
        if (this.navParams.data["name"]) {
            var name_1 = this.navParams.get("name");
            this.mPackage.name = name_1;
            var data = this.mAppModule.getPackageController().getPackagesByName(name_1);
            if (data.id == -1) {
                this.mAppModule.getPackageController().onResponseAppConfig();
                this.onLoadDsGoiCuocSuccess();
            }
            else {
                this.mPackage = data;
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    }
    PackageDetailPage.prototype.onLoadDsGoiCuocSuccess = function () {
        this.mPackage = this.mAppModule.getPackageController().getPackagesByName(this.mPackage.name);
        if (this.mPackage.id == -1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    };
    PackageDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.myContent.ionScroll.asObservable().subscribe(function () {
            _this.mScrollTop = _this.myContent.scrollTop;
            _this.mDectectChange.detectChanges();
        });
        // if (!this.mAppModule.getAppConfig().hasData()) {
        // }
        this.mEvent.subscribe("openmenu", function () {
            _this.menuIcon = "md-close";
            _this.mDectectChange.detectChanges();
        });
        this.mEvent.subscribe("closemenu", function () {
            _this.menuIcon = "menu";
            _this.mDectectChange.detectChanges();
        });
    };
    PackageDetailPage.prototype.onClickInfo = function () {
        this.mAppModule.showModal("PackageInfoPage", { params: this.mPackage });
    };
    PackageDetailPage.prototype.scrollTop = function () {
        this.myContent.scrollToTop(200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], PackageDetailPage.prototype, "myContent", void 0);
    PackageDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-package-detail',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/package-detail/package-detail.html"*/'<!--\n  Generated template for the PackageDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n    <div class="xs-hidden primary-bg">\n        <viettel-header></viettel-header>\n    </div>\n\n  <ion-toolbar class="sm-hidden md-hidden lg-hidden xl-hidden">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="{{menuIcon}}"></ion-icon>\n      </button>\n    </ion-buttons>\n    <div class="img-top-header" text-center>\n      <img src="./assets/imgs/logo-viettel-telecom.png" alt="">\n    </div>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content>\n  <div class="img-header">\n    <img src="./assets/imgs/viettel-4g-desktop.jpg" alt="Viettel 4G">\n  </div>\n\n  <div padding class="a3-container a3-items-center path">\n    <a href="">\n      <span padding-right tappable>Home</span>\n    </a>\n    <span>/</span>\n    <span padding-left>{{mPackage.name}}</span>\n  </div>\n\n\n  <ion-grid>\n\n    <ion-row align-items-center class="vt-month-p-header">\n      <ion-col col-12 col-sm-8 offset-sm-2 offset-md-2 col-md-8 text-center>\n        <div class="vt-4g-package-name primary-color">\n          <span>{{mPackage.name}}</span>\n        </div>\n        <div class="vt-4g-package-title">\n          <span>{{mPackage.title}}</span>\n        </div>\n      </ion-col>\n\n      <ion-col col-12 col-sm-2 col-md-2 text-center class="xs-margin-top">\n        <button ion-button outline class="btn-info primary" (click)="onClickInfo()">Thông tin</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="package-list-container" justify-content-center>\n      <ion-col col-6 col-sm-4 col-md-3 *ngFor="let item of mPackage.items">\n        <viettel-package [mViettelPackage]="item" [color]="\'primary-color\'"></viettel-package>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <viettel-footer></viettel-footer>\n\n  <ion-fab bottom right [hidden]="mScrollTop < 20">\n    <button ion-fab mini color="light" (click)="scrollTop()">\n      <ion-icon name="md-arrow-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/package-detail/package-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_module_app_module__["a" /* AppModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PackageDetailPage);
    return PackageDetailPage;
}());

//# sourceMappingURL=package-detail.js.map

/***/ })

});
//# sourceMappingURL=5.js.map