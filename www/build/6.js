webpackJsonp([6],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuShowModalPageModule", function() { return MenuShowModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_show_modal__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuShowModalPageModule = /** @class */ (function () {
    function MenuShowModalPageModule() {
    }
    MenuShowModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_show_modal__["a" /* MenuShowModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_show_modal__["a" /* MenuShowModalPage */]),
            ],
        })
    ], MenuShowModalPageModule);
    return MenuShowModalPageModule;
}());

//# sourceMappingURL=menu-show-modal.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuShowModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the MenuShowModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuShowModalPage = /** @class */ (function () {
    function MenuShowModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuShowModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuShowModalPage');
    };
    MenuShowModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-show-modal',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/menu-show-modal/menu-show-modal.html"*/'<!--\n  Generated template for the MenuShowModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content no-bounce>\n  <div class="backdrop" navPop tappable></div>\n  <div class="f-container">\n    <div class="backdrop" navPop tappable></div>\n\n    <div class="a1-inline-block">\n      <a href="https://cuahangviettel.vn">\n        <div class="f-item a3-container a3-items-center animated slideInUp">\n          <div class="f-item-text">Trang chủ</div>\n          <div class="item-icon home">\n            <ion-icon name="home"></ion-icon>\n          </div>\n        </div>\n      </a>\n    </div>\n    <br>\n    <div class="a1-inline-block">\n      <a href="https://cuahangviettel.vn/tra-sau-viettel">\n        <div class="f-item a3-container a3-items-center animated slideInUp">\n          <div class="f-item-text">Trả sau</div>\n          <div class="item-icon giveback">\n            <ion-icon name="md-cash"></ion-icon>\n          </div>\n        </div>\n      </a>\n    </div>\n    <br>\n\n    <div class="a1-inline-block">\n      <a href="https://cuahangviettel.vn/chuyen-mang-giu-so">\n        <div class="f-item a3-container a3-items-center animated slideInUp">\n          <div class="f-item-text">Chuyển mạng giữ số</div>\n          <div class="item-icon exchange">\n            <ion-icon name="ios-repeat"></ion-icon>\n          </div>\n        </div>\n      </a>\n    </div>\n    <br>\n\n    <div class="a1-inline-block">\n      <a href="https://cuahangviettel.vn/dang-ky-4g-viettel">\n        <div class="f-item a3-container a3-items-center animated slideInUp">\n          <div class="f-item-text">Data 4G</div>\n          <div class="item-icon fg">\n            <ion-icon name="pie"></ion-icon>\n          </div>\n        </div>\n      </a>\n\n    </div>\n    <br>\n\n    <div class="a1-inline-block">\n      <a href="https://cuahangviettel.vn/lap-mang-viettel">\n        <div class="f-item a3-container a3-items-center animated slideInUp">\n          <div class="f-item-text">Internet cáp quang</div>\n          <div class="item-icon setup">\n            <ion-icon name="ios-wifi"></ion-icon>\n          </div>\n        </div>\n      </a>\n\n    </div>\n    <br>\n\n    <div class="a1-inline-block">\n      <a href="https://cuahangviettel.vn/chu-ky-so-viettel">\n        <div class="f-item a3-container a3-items-center animated slideInUp">\n          <div class="f-item-text">Chữ ký số CA</div>\n          <div class="item-icon sign-number">\n            <ion-icon name="md-lock"></ion-icon>\n          </div>\n        </div>\n      </a>\n    </div>\n    <br>\n\n    <div class="a1-inline-block">\n      <a href="https://cuahangviettel.vn/tin-tuc-viettel">\n        <div class="f-item a3-container a3-items-center animated slideInUp">\n          <div class="f-item-text">Tin tức</div>\n          <div class="item-icon news">\n            <ion-icon name="md-paper"></ion-icon>\n          </div>\n        </div>\n      </a>\n    </div>\n    <br>\n\n\n\n\n    <div class="f-item a3-container a3-items-center" tappable navPop>\n\n      <div class="item-icon close">\n        <ion-icon name="close"></ion-icon>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-fab bottom right>\n    <button ion-fab navPop>\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-fab> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/menu-show-modal/menu-show-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MenuShowModalPage);
    return MenuShowModalPage;
}());

//# sourceMappingURL=menu-show-modal.js.map

/***/ })

});
//# sourceMappingURL=6.js.map