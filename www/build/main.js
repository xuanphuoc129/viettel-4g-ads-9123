webpackJsonp([7],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Packages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Package; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PackageController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module_util__ = __webpack_require__(42);

var Packages = /** @class */ (function () {
    function Packages(data) {
        this.name = "";
        this.title = "";
        this.description = "";
        this.items = [];
        this.id = -1;
        this.items.push(new Package({ id: 1 }));
        this.items.push(new Package({ id: 2 }));
        this.items.push(new Package({ id: 3 }));
        this.items.push(new Package({ id: 4 }));
        if (data) {
            this.parseData(data);
        }
    }
    Packages.prototype.parseData = function (data) {
        if ("id" in data)
            this.id = parseInt(data.id);
        if ("name" in data)
            this.name = data.name;
        if ("title" in data)
            this.title = data.title;
        if ("description" in data)
            this.description = data.description;
        if ("items" in data)
            this.parseItems(data.items);
    };
    Packages.prototype.parseItems = function (data) {
        var _this = this;
        if (data) {
            this.items = [];
            data.forEach(function (element) {
                _this.items.push(new Package(element));
            });
        }
    };
    return Packages;
}());

var Package = /** @class */ (function () {
    function Package(data) {
        this.p_id = -1;
        this.id = -1;
        this.name = "Mimax 70";
        this.data = "3Gb";
        this.price = "70,000 đ";
        this.time = "30 ngày";
        this.isHot = true;
        this.description = "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G. \n Với 70.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).";
        this.url = "";
        if (data) {
            this.parseData(data);
        }
    }
    Package.prototype.parseData = function (data) {
        if (data) {
            if ("p_id" in data)
                this.p_id = parseInt(data.p_id);
            if ("id" in data)
                this.id = parseInt(data.id);
            if ("name" in data)
                this.name = data.name;
            if ("data" in data)
                this.data = data.data;
            if ("price" in data)
                this.price = data.price;
            if ("time" in data)
                this.time = data.time;
            if ("isHot" in data)
                this.isHot = data.isHot;
            if ("description" in data)
                this.description = data.description;
            if ("url" in data)
                this.url = data.url;
        }
    };
    return Package;
}());

var PackageController = /** @class */ (function () {
    function PackageController() {
        this.mDatas = [
            {
                id: "1",
                name: "Gói 3G/4G Đăng Ký Nhiều Nhất",
                title: "Trọn gói chỉ từ 70.000đ - Sử dụng trên mạng 3G/4G",
                description: "Gói data tháng  dành cho khách hàng có nhu cầu sử dụng internet thường xuyên tren di động\\nGói cước sử dụng chung các mạng 3G/4G. Gói data Mimax70 (70.000đ có 3Gb tốc độ cao sử dụng trong 30 ngày) phù hợp với nhu cầu đọc báo, nghe nhạc, nhắn tin, online, lướt facebook\\nGói data Mimax90 (90.000đ có 5GB tốc độ cao sử dụng trong 30 ngày) phù hợp với nhu cầu đọc báo, nghe nhạc, check mail, nhắn tin, online, lướt facebook, video call thoải mái với bạn bè.\\nNếu bạn thích xem video trên Youtube, facebook thì gói Mimax125 (125.000đ có 8Gb tốc độ cao sử dụng trong 30 ngày) sẽ đáp ứng nhu cầu của bạn.\\nNếu bạn là tín đồ nghiền phim Online hoặc trò chơi trên điện thoại di động thì hãy sử dụng gói data Mimax200 (200.000đ có 15 Gb tốc độ cao) và Umax (300.000đ có 30Gb tốc độ cao) sinh ra dành cho bạn rồi."
            },
            {
                id: "2",
                name: "Gói Data (Dcom)",
                title: "Chỉ dành cho sim DCOM",
                description: "Gói data Dcom phục vụ cho nhu cầu truy cập internet lớn trên các thiết bị di động/máy tính bảng và nhắn tin, không sử dụng để gọi."
            },
            {
                id: "3",
                name: "Gói Mua Thêm Data",
                title: "Gói mua thêm lưu lượng",
                description: "Quý khách có thể mua thêm lưu lượng tốc độ cao để sử dụng sau khi gói data tháng hết lưu lượng."
            },
            {
                id: "4",
                name: "Gói Thoại + Data",
                title: "Lướt web, liên lạc tẹt ga không lo về giá",
                description: "Gói data tháng  dành cho khách hàng có nhu cầu sử dụng internet thường xuyên tren di động\\nGói cước sử dụng chung các mạng 3G/4G"
            }
        ];
        this.mDatas_2 = [
            {
                p_id: "1",
                id: "1",
                name: "Mimax90",
                price: "90,000",
                description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\\n\\nVới 90.000đ Quý khách sẽ có 5GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau)",
                data: "5GB",
                isHot: "TRUE",
                time: "30 ngày",
                url: "sms:9123?&body=MIMAX90 0987762233"
            },
            {
                p_id: "1",
                id: "2",
                name: "Umax300",
                price: "300,000",
                description: "Với 300.000 đồng, Quý khách được truy cập Internet không giới hạn lưu lượng tốc độ cao. Hết 30GB đầu, tốc độ cao giới hạn về 1Mbps. Chu kỳ gói cước 30 ngày, sau 30 ngày hệ thống tự động gia hạn",
                data: "30GB",
                isHot: "TRUE",
                time: "30 ngày",
                url: "sms:9123?&body=UMAX300 0987762233"
            },
            {
                p_id: "1",
                id: "3",
                name: "Mimax70",
                price: "70,000",
                description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\\n\\nVới 70.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                data: "3GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=MIMAX70 0987762233"
            },
            {
                p_id: "1",
                id: "4",
                name: "Mimax125",
                price: "125,000",
                description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\\n\\nVới 125.000đ Quý khách sẽ có 8GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                data: "8GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=MIMAX125 0987762233"
            },
            {
                p_id: "1",
                id: "5",
                name: "Mimax200",
                price: "200,000",
                description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\\n\\nVới 200.000đ Quý khách sẽ có 15GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                data: "15GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=MIMAX200 0987762233"
            },
            {
                p_id: "2",
                id: "1",
                name: "D500",
                price: "500,000",
                description: "Với 500.000đ Quý khách có 48GB tốc độ cao trong vòng 12 tháng tính từ tháng đăng ký, hết tốc độ cao miễn phí sử dụng tốc độ thường",
                data: "48GB",
                isHot: "TRUE",
                time: "12 tháng",
                url: "sms:9123?&body=D500 0987762233"
            },
            {
                p_id: "2",
                id: "2",
                name: "D900",
                price: "900,000",
                description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 900.000đ Quý khách có 84GB trong vòng 12 tháng tính từ tháng đăng ký, hết tốc độ cao miễn phí sử dụng tốc độ thường.",
                data: "84GB",
                isHot: "TRUE",
                time: "12 tháng",
                url: "sms:9123?&body=D900 0987762233"
            },
            {
                p_id: "2",
                id: "3",
                name: "D90",
                price: "90,000",
                description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 90.000đ Quý khách có 10GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                data: "10GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=D90 0987762233"
            },
            {
                p_id: "2",
                id: "4",
                name: "D70",
                price: "70,000",
                description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 70.000đ Quý khách có 7GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                data: "7GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=D70 0987762233"
            },
            {
                p_id: "2",
                id: "5",
                name: "D120",
                price: "120,000",
                description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 120.000đ Quý khách có 12GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                data: "12GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=D120 0987762233"
            },
            {
                p_id: "2",
                id: "6",
                name: "D200",
                price: "200,000",
                description: "Là gói cước trọn gói dành cho thuê bao Dcom trả trước. Với 200.000đ Quý khách có 20GB sử dụng trong 30 ngày. Hết dung lượng miễn phí sẽ truy cập với tốc độ bình thường",
                data: "20GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=D200 0987762233"
            },
            {
                p_id: "3",
                id: "1",
                name: "ECOD50",
                price: "50,000",
                description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\\n\\nVới 50.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).",
                data: "3GB",
                isHot: "TRUE",
                time: "30 ngày",
                url: "sms:9123?&body=ECOD50 0987762233"
            },
            {
                p_id: "3",
                id: "2",
                name: "TOMD10",
                price: "10,000",
                description: "TOMD10: 10.000đ/lần có 200MB, không giới hạn thời gian sử dụng, hết 200MB ngừng truy cập. Gói TOMD10 sẽ bị hủy nếu khách hàng không sử dụng Data trong vòng 60 ngày.",
                data: "200MB",
                isHot: "FALSE",
                time: "60 ngày",
                url: "sms:9123?&body=TOMD10 0987762233"
            },
            {
                p_id: "3",
                id: "3",
                name: "TOMD30",
                price: "30,000",
                description: "TOMD30: 30.000đ/lần có 1GB, không giới hạn thời gian sử dụng, hết 1GB ngừng truy cập. Gói TOMD30 sẽ bị hủy nếu khách hàng không sử dụng Data trong vòng 60 ngày.",
                data: "1GB",
                isHot: "FALSE",
                time: "60 ngày",
                url: "sms:9123?&body=TOMD20 0987762233"
            },
            {
                p_id: "4",
                id: "1",
                name: "V90",
                price: "90,000",
                description: "Miễn phí cuộc gọi nội mạng dưới 20p/cuộc, miễn phí 50p gọi ngoại mạng/tháng và miễn phí 2GB tốc độ cao/ngày",
                data: "60GB",
                isHot: "TRUE",
                time: "30 ngày",
                url: "sms:9123?&body=V90 0987762233"
            },
            {
                p_id: "4",
                id: "2",
                name: "F90",
                price: "90,000",
                description: "Miễn phí cuộc gọi nội mạng dưới 10p/cuộc, 15 phút gọi ngoại mạng, 250 tin nhắn nội mạng, 5GB data, hết lưu lượng dừng truy cập",
                data: "5GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=F90 0987762233"
            },
            {
                p_id: "4",
                id: "3",
                name: "XL90",
                price: "90,000",
                description: "9GB data, hết lưu lượng dừng truy cập",
                data: "9GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=XL90 0987762233"
            },
            {
                p_id: "4",
                id: "4",
                name: "XL50",
                price: "50,000",
                description: "100 phút gọi ngoại mạng, 100 phút gọi nội mạng, 30 tin nhắn nội mạng, 3GB data, hết lưu lượng dừng truy cập.",
                data: "3GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=XL50 0987762233"
            },
            {
                p_id: "4",
                id: "5",
                name: "Hi90",
                price: "90,000",
                description: "3GB tốc độ cao sau đó về tốc độ thường",
                data: "3GB",
                isHot: "FALSE",
                time: "30 ngày",
                url: "sms:9123?&body=HI90 0987762233"
            }
        ];
        this.mViettelPakages = [];
        this.mAllPackages = [];
    }
    PackageController.prototype.onResponseAppConfig = function () {
        var _this = this;
        this.mDatas_2.forEach(function (e) {
            var o = new Package();
            o.parseData(e);
            _this.mViettelPakages.push(o);
        });
        this.mDatas.forEach(function (ele) {
            var o = new Packages();
            o.parseData(ele);
            o.items = _this.mViettelPakages.filter(function (element) {
                return element.p_id == o.id;
            });
            _this.mAllPackages.push(o);
        });
    };
    PackageController.prototype.getAllViettelPackages = function () {
        return this.mViettelPakages;
    };
    PackageController.prototype.getAllPackages = function () {
        return this.mAllPackages;
    };
    PackageController.prototype.getPackageByName = function (name) {
        if (this.mViettelPakages.length == 0)
            return new Package();
        for (var _i = 0, _a = this.mViettelPakages; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name.toLowerCase() == name.toLowerCase()) {
                return p;
            }
        }
        return new Package();
    };
    PackageController.prototype.getPackgeByID = function (id) {
        if (this.mViettelPakages.length == 0)
            return new Package();
        for (var _i = 0, _a = this.mViettelPakages; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == id) {
                return p;
            }
        }
        return new Package();
    };
    PackageController.prototype.getPackagesByName = function (nName) {
        if (this.mAllPackages.length == 0)
            return new Packages();
        for (var _i = 0, _a = this.mAllPackages; _i < _a.length; _i++) {
            var p = _a[_i];
            var name_1 = __WEBPACK_IMPORTED_MODULE_0__app_module_util__["a" /* Utils */].bodauTiengViet(p.name.toLowerCase());
            name_1 = __WEBPACK_IMPORTED_MODULE_0__app_module_util__["a" /* Utils */].boDauCach(name_1);
            if (name_1 == nName) {
                var p_id = p.id;
                return this.getPackagesById(p_id);
            }
        }
        return new Packages();
    };
    PackageController.prototype.getPackagesById = function (p_id) {
        var index = this.mAllPackages.findIndex(function (ele) {
            return ele.id == p_id;
        });
        if (index > -1) {
            return this.mAllPackages[index];
        }
        else {
            return new Packages();
        }
    };
    PackageController.prototype.getPackageByPID = function (id) {
        if (this.mViettelPakages.length == 0)
            return [];
        return this.mViettelPakages.filter(function (element) {
            return element.p_id == id;
        });
    };
    return PackageController;
}());

//# sourceMappingURL=month-package.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu-show-modal/menu-show-modal.module": [
		293,
		6
	],
	"../pages/package-detail/package-detail.module": [
		294,
		5
	],
	"../pages/package-info/package-info.module": [
		295,
		4
	],
	"../pages/select-address/select-address.module": [
		296,
		3
	],
	"../pages/sign-up-package/sign-up-package.module": [
		297,
		2
	],
	"../pages/viettel-d-package/viettel-d-package.module": [
		298,
		1
	],
	"../pages/viettel-package-detail/viettel-package-detail.module": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Citys; });
/* unused harmony export Districts */
/* unused harmony export Communes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DistrictManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(42);

var Citys = /** @class */ (function () {
    function Citys() {
        this.code = "";
        this.name = "";
        this.cap = "";
    }
    Citys.prototype.parse = function (data) {
        if (data) {
            if ("code" in data)
                this.code = data.code;
            if ("name" in data)
                this.name = data.name;
            if ("cap" in data)
                this.cap = data.cap;
        }
    };
    return Citys;
}());

var Districts = /** @class */ (function () {
    function Districts() {
        this.code = "";
        this.name = "";
        this.cap = "";
        this.ma_tp = "";
        this.tinh_tp = "";
    }
    Districts.prototype.parse = function (data) {
        if (data) {
            if ("code" in data)
                this.code = data.code;
            if ("name" in data)
                this.name = data.name;
            if ("cap" in data)
                this.cap = data.cap;
            if ("ma_tp" in data)
                this.ma_tp = data.ma_tp;
            if ("tinh_tp" in data)
                this.tinh_tp = data.tinh_tp;
        }
    };
    return Districts;
}());

var Communes = /** @class */ (function () {
    function Communes() {
        this.code = "";
        this.name = "";
        this.cap = "";
        this.ma_qh = "";
        this.quan_huyen = "";
        this.ma_tp = "";
        this.tinh_tp = "";
    }
    Communes.prototype.parse = function (data) {
        if (data) {
            if ("code" in data)
                this.code = data.code;
            if ("name" in data)
                this.name = data.name;
            if ("cap" in data)
                this.cap = data.cap;
            if ("ma_qh" in data)
                this.ma_qh = data.ma_qh;
            if ("quan_huyen" in data)
                this.quan_huyen = data.quan_huyen;
            if ("ma_tp" in data)
                this.ma_tp = data.ma_tp;
            if ("tinh_tp" in data)
                this.tinh_tp = data.tinh_tp;
        }
    };
    return Communes;
}());

var DistrictManager = /** @class */ (function () {
    function DistrictManager() {
        this._mCitys = [];
        this._mDistricts = [];
        this._mCommunes = [];
    }
    DistrictManager.prototype.getCitys = function () {
        return this._mCitys;
    };
    DistrictManager.prototype.getDistrictWithCityCode = function (code) {
        if (this._mDistricts.length == 0)
            return [];
        console.log(this._mDistricts);
        var res = [];
        res = this._mDistricts.filter(function (ele) {
            return ele.ma_tp == code;
        });
        return res;
    };
    DistrictManager.prototype.getDistrictWithDistrictCode = function (code) {
        if (this._mCommunes.length == 0)
            return [];
        var res = [];
        res = this._mCommunes.filter(function (ele) {
            return ele.ma_qh == code;
        });
        return res;
    };
    DistrictManager.prototype.onResponseCity = function (data) {
        var _this = this;
        this._mCitys = [];
        if (data && data.length > 0) {
            data.forEach(function (element) {
                var newEle = new Citys();
                newEle.parse(element);
                _this._mCitys.push(newEle);
            });
        }
        this._mCitys.sort(function (a, b) {
            if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(a.name) < __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(b.name)) {
                return -1;
            }
            if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(a.name) > __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(b.name)) {
                return 1;
            }
            return 0;
        });
    };
    DistrictManager.prototype.onResponseDistrict = function (data) {
        var _this = this;
        this._mDistricts = [];
        if (data && data.length > 0) {
            data.forEach(function (element) {
                var newEle = new Districts();
                newEle.parse(element);
                _this._mDistricts.push(newEle);
            });
        }
        this._mDistricts.sort(function (a, b) {
            if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(a.name) < __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(b.name)) {
                return -1;
            }
            if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(a.name) > __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(b.name)) {
                return 1;
            }
            return 0;
        });
    };
    DistrictManager.prototype.onResponseCommunes = function (data) {
        var _this = this;
        this._mCommunes = [];
        if (data && data.length > 0) {
            data.forEach(function (element) {
                var newEle = new Communes();
                newEle.parse(element);
                _this._mCommunes.push(newEle);
            });
        }
        this._mCommunes.sort(function (a, b) {
            if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(a.name) < __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(b.name)) {
                return -1;
            }
            if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(a.name) > __WEBPACK_IMPORTED_MODULE_0__util__["a" /* Utils */].bodauTiengViet(b.name)) {
                return 1;
            }
            return 0;
        });
    };
    return DistrictManager;
}());

//# sourceMappingURL=District.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viettel_package_viettel_package__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viettel_header_viettel_header__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viettel_footer_viettel_footer__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fake_customer_fake_customer__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_and_answer_question_and_answer__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__viettel_package_viettel_package__["a" /* ViettelPackageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__fake_customer_fake_customer__["a" /* FakeCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__viettel_header_viettel_header__["a" /* ViettelHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__viettel_footer_viettel_footer__["a" /* ViettelFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__question_and_answer_question_and_answer__["a" /* QuestionAndAnswerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__viettel_package_viettel_package__["a" /* ViettelPackageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__fake_customer_fake_customer__["a" /* FakeCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__question_and_answer_question_and_answer__["a" /* QuestionAndAnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__viettel_header_viettel_header__["a" /* ViettelHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__viettel_footer_viettel_footer__["a" /* ViettelFooterComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_month_package__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__District__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppModuleProvider = /** @class */ (function () {
    function AppModuleProvider(mModalController, mHttp) {
        this.mModalController = mModalController;
        this.mHttp = mHttp;
        this.mDebug = true;
        this.mDistrictManager = null;
        this.mAppConfig = new __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]();
        this.mPackageController = new __WEBPACK_IMPORTED_MODULE_5__class_month_package__["b" /* PackageController */]();
        this.mDistrictManager = new __WEBPACK_IMPORTED_MODULE_6__District__["b" /* DistrictManager */]();
    }
    AppModuleProvider.prototype.getDistrictManager = function () {
        return this.mDistrictManager;
    };
    AppModuleProvider.prototype.onLoadDistrict = function () {
        var _this = this;
        this.onReadFileJson("./assets/data/tinh_tp.json").then(function (data) {
            if (data) {
                _this.getDistrictManager().onResponseCity(data["tinh_tp"]);
                console.log(data);
            }
        });
        this.onReadFileJson("./assets/data/quan_huyen.json").then(function (data) {
            if (data) {
                _this.getDistrictManager().onResponseDistrict(data["quan_huyen"]);
            }
        });
        this.onReadFileJson("./assets/data/xa_phuong.json").then(function (data) {
            if (data) {
                _this.getDistrictManager().onResponseCommunes(data["xa_phuong"]);
            }
        });
    };
    AppModuleProvider.prototype.onLoadNameCustomerFile = function () {
        return this.onReadFileJson("./assets/data/name_customer.json");
    };
    AppModuleProvider.prototype.getPackageController = function () {
        return this.mPackageController;
    };
    AppModuleProvider.prototype.getModalController = function () {
        return this.mModalController;
    };
    AppModuleProvider.prototype.getAppConfig = function () {
        return this.mAppConfig;
    };
    // public onLoaddDsGoiCuoc(){
    //   return new Promise((resolve, reject) => {
    //     this.onReadFileJson("./assets/data/ds_goi_cuoc.json").then((data) => {
    //       if (data) {
    //         this.mPackageController.onResponseAppConfig(data);
    //         resolve(data);
    //       }
    //     }).catch(err => {
    //       reject(err);
    //     })
    //   })
    // }
    AppModuleProvider.prototype.onLoadConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.mAppConfig.hasData())
                resolve();
            _this.onReadFileJson("./assets/data.json").then(function (data) {
                if (data) {
                    _this.mAppConfig.onResponseConfig(data);
                    resolve(_this.mAppConfig);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AppModuleProvider.prototype.onReadFileJson = function (link) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newheaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            newheaders = newheaders.append('Content-type', 'application/json; charset=utf-8');
            newheaders = newheaders.append('Access-Control-Allow-Origin', '*');
            newheaders = newheaders.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            _this.mHttp.get(link, { headers: newheaders }).subscribe(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    reject();
                }
            });
        });
    };
    AppModuleProvider.prototype.showModal = function (page, params, callback) {
        var modal = this.mModalController.create(page, params ? params : null, {
            enterAnimation: 'fade-in',
            leaveAnimation: 'fade-out'
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (callback) {
                callback(data);
            }
        });
    };
    AppModuleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppModuleProvider);
    return AppModuleProvider;
}());

//# sourceMappingURL=app-module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_module_app_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_components_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transitions_fade_in_transition__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transitions_fade_out_transition__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__transitions_scale_up_enter_transition__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transitions_scale_up_leave_transition__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__transitions_replace_transition__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = /** @class */ (function () {
    function AppModule(config) {
        this.config = config;
        this.config.setTransition('fade-in', __WEBPACK_IMPORTED_MODULE_10__transitions_fade_in_transition__["a" /* FadeInTransiton */]);
        this.config.setTransition('fade-out', __WEBPACK_IMPORTED_MODULE_11__transitions_fade_out_transition__["a" /* FadeOutTransition */]);
        this.config.setTransition('scale-up', __WEBPACK_IMPORTED_MODULE_12__transitions_scale_up_enter_transition__["a" /* ModalScaleUpEnterTransition */]);
        this.config.setTransition('scale-down', __WEBPACK_IMPORTED_MODULE_13__transitions_scale_up_leave_transition__["a" /* ModalScaleUpLeaveTransition */]);
        this.config.setTransition('replace', __WEBPACK_IMPORTED_MODULE_14__transitions_replace_transition__["a" /* ReplacePageTransition */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/menu-show-modal/menu-show-modal.module#MenuShowModalPageModule', name: 'MenuShowModalPage', segment: 'menu-show-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/package-detail/package-detail.module#PackageDetailPageModule', name: 'PackageDetailPage', segment: 'goi-cuoc/:name', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/package-info/package-info.module#PackageInfoPageModule', name: 'PackageInfoPage', segment: 'package-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-address/select-address.module#SelectAddressPageModule', name: 'SelectAddressPage', segment: 'select-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up-package/sign-up-package.module#SignUpPackagePageModule', name: 'SignUpPackagePage', segment: 'sign-up-package', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viettel-d-package/viettel-d-package.module#ViettelDPackagePageModule', name: 'ViettelDPackagePage', segment: 'viettel-d-package', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viettel-package-detail/viettel-package-detail.module#ViettelPackageDetailPageModule', name: 'ViettelPackageDetailPage', segment: 'thong-tin-goi-cuoc/:name', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_app_module_app_module__["a" /* AppModuleProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.mVersion = "1.0";
        this.loadHardConfig();
    }
    AppConfig.prototype.loadHardConfig = function () {
        this.mVersion = "1.0";
    };
    /**Load config tu file */
    AppConfig.prototype.onResponseConfig = function (data) {
        if (!data)
            return;
        this.mAppData = data;
        if (data.version)
            this.mVersion = data.version;
    };
    AppConfig.prototype.hasData = function () {
        return this.mAppData != null;
    };
    AppConfig.prototype.getConfig = function (key) {
        if (this.mAppData && this.mAppData['key'])
            return this.mAppData['key'];
        return undefined;
    };
    AppConfig.prototype.getAppVersion = function () {
        return this.mVersion;
    };
    AppConfig.prototype.getViewData = function (viewName) {
        if (this.mAppData && this.mAppData[viewName])
            return this.mAppData[viewName];
        return {};
    };
    AppConfig.prototype.get = function (key) {
        if (this.mAppData && this.mAppData[key])
            return this.mAppData[key];
        return {};
    };
    return AppConfig;
}());

//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScrollItems */
/* unused harmony export ScrollDiv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_loop__ = __webpack_require__(257);

// import { AppLoop } from '../app-loop';
var ScrollItems = /** @class */ (function () {
    function ScrollItems(id) {
        this.mElement = null;
        this.mEventListenerCreated = false;
        this.mScrolling = false;
        this.mTouchStart = false;
        this.mTouchEnd = false;
        this.mIdleTime = 0;
        this.mScrollEndListener = null;
        this.mCenterChangeListener = null;
        this.mItemHeight = 40;
        this.mFocusIndex = 0;
        this.mLeftFocusIndex = 0;
        this.mNumberItems = 0;
        this.mItemWidth = 40;
        this.mElement = document.getElementById(id);
        if (this.mElement && this.mElement.childElementCount > 0) {
            var node = this.mElement.children.item(0);
            if (node) {
                this.mItemHeight = node.clientHeight;
                this.mItemWidth = node.clientWidth;
            }
            this.mNumberItems = this.mElement.childElementCount - 3;
        }
    }
    ScrollItems.prototype.setScrollEndListener = function (listener) {
        this.mScrollEndListener = listener;
    };
    ScrollItems.prototype.setCenterChangedListend = function (listener) {
        this.mCenterChangeListener = listener;
    };
    ScrollItems.prototype.isScrollingByTouch = function () {
        return this.mScrolling && this.mTouchStart;
    };
    ScrollItems.prototype.createListener = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__app_loop__["a" /* AppLoop */].getInstance().scheduleUpdate(this);
        if (!this.mElement)
            return;
        if (this.mEventListenerCreated)
            return;
        this.mEventListenerCreated = true;
        this.mElement.addEventListener("touchstart", function (event) {
            _this.mTouchStart = true;
            _this.mTouchEnd = false;
            _this.mScrolling = false;
            _this.mIdleTime = 0;
        });
        this.mElement.addEventListener("touchend", function (event) {
            _this.mTouchEnd = true;
            _this.mIdleTime = 0;
        });
        this.mElement.addEventListener("scroll", function (event) {
            _this.mScrolling = true;
            _this.mIdleTime = 0;
            if (_this.mTouchStart && !_this.mTouchEnd) {
                _this.onScroll();
            }
        });
    };
    ScrollItems.prototype.onScrollStopped = function () {
        if (this.mScrollEndListener) {
            this.mScrollEndListener([this.mElement.scrollTop, this.mElement.scrollLeft]);
        }
        this.mTouchEnd = false;
        this.mTouchStart = false;
        this.mScrolling = false;
        this.mIdleTime = 0;
    };
    ScrollItems.prototype.onUpdate = function () {
        if (this.mScrolling && this.mTouchEnd) {
            this.mIdleTime++;
            if (this.mIdleTime > 6) {
                this.onScroll();
                this.onScrollStopped();
            }
        }
    };
    ScrollItems.prototype.getScrollOfItemIndex = function (itemIndex) {
        return this.mItemHeight * itemIndex;
    };
    ScrollItems.prototype.getCurrentFocusElement = function (recalculate) {
        if (recalculate === void 0) { recalculate = false; }
        if (recalculate) {
            this.mFocusIndex = this.getElementInFocus(this.mElement.scrollTop);
        }
        return this.mFocusIndex;
    };
    ScrollItems.prototype.getCurrentScrollLeftFocusElement = function (recalculate) {
        if (recalculate === void 0) { recalculate = false; }
        if (recalculate) {
            this.mFocusIndex = this.getElementLeftFocus(this.mElement.scrollLeft);
        }
        return this.mFocusIndex;
    };
    ScrollItems.prototype.getElementInFocus = function (scrollTop) {
        var focusIndex = Math.floor((scrollTop + this.mItemHeight / 2) / this.mItemHeight);
        if (focusIndex < 0)
            focusIndex = 0;
        else if (focusIndex > this.mNumberItems)
            focusIndex = this.mNumberItems;
        return focusIndex;
    };
    ScrollItems.prototype.onScroll = function () {
        if (!this.mElement)
            return;
        var focusIndex = this.getElementInFocus(this.mElement.scrollTop);
        var leftFocusIndex = this.getElementLeftFocus(this.mElement.scrollLeft);
        if (this.mFocusIndex != focusIndex || this.mLeftFocusIndex != leftFocusIndex) {
            this.mFocusIndex = focusIndex;
            this.mLeftFocusIndex = leftFocusIndex;
            if (this.mCenterChangeListener)
                this.mCenterChangeListener([this.mFocusIndex, this.mLeftFocusIndex]);
        }
    };
    ScrollItems.prototype.getElementLeftFocus = function (scrollLeft) {
        var focusIndex = Math.floor((scrollLeft + this.mItemWidth / 2) / this.mItemWidth);
        return focusIndex;
    };
    return ScrollItems;
}());

var ScrollDiv = /** @class */ (function () {
    function ScrollDiv(id) {
        this.id = "";
        this.alpha = 0.2;
        this.epsilon = 1;
        this.done = false;
        /**1 : top, 2 : bottom, 3 : custom */
        this.direction = 1;
        this.top = 0;
        this.left = 0;
        this.mCallback = null;
        this.id = id;
        this.element = document.getElementById(id);
    }
    ScrollDiv.prototype.setOption = function (option) {
        if (option) {
            this.mCallback = option.callback;
            this.alpha = option.alpha;
            if (option.epsilon)
                this.epsilon = option.epsilon;
        }
    };
    ScrollDiv.prototype.getId = function () {
        return this.id;
    };
    ScrollDiv.prototype.onUpdate = function () {
        if (this.done)
            return;
        if (this.direction == 1) {
            var dScroll = this.alpha * (0 - this.element.scrollTop);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollTop = 0;
                this.done = true;
            }
            else {
                this.element.scrollTop += dScroll;
            }
        }
        else if (this.direction == 2) {
            var dScroll = this.alpha * (this.element.scrollHeight - this.element.clientHeight - this.element.scrollTop);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollTop = this.element.scrollHeight;
                this.done = true;
            }
            else {
                this.element.scrollTop += dScroll;
            }
        }
        else if (this.direction == 3) {
            var dScroll = this.alpha * (this.top - this.element.scrollTop);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollTop = this.top;
                this.done = true;
            }
            else {
                this.element.scrollTop += dScroll;
            }
        }
        else if (this.direction == 4) {
            var dScroll = this.alpha * (this.left - this.element.scrollLeft);
            if (Math.abs(dScroll) <= this.epsilon) {
                this.element.scrollLeft = this.left;
                this.done = true;
            }
            else {
                this.element.scrollLeft += dScroll;
            }
        }
    };
    ScrollDiv.prototype.scrollToLeft = function (left) {
        this.left = left;
        this.direction = 4;
    };
    ScrollDiv.prototype.scrollTo = function (top) {
        this.top = top;
        this.direction = 3;
        this.done = false;
    };
    ScrollDiv.prototype.scrollToTop = function () {
        this.direction = 1;
    };
    ScrollDiv.prototype.scrollToBottom = function () {
        this.direction = 2;
    };
    ScrollDiv.prototype.hasDone = function () {
        return this.done;
    };
    return ScrollDiv;
}());

var ScrollController = /** @class */ (function () {
    function ScrollController() {
        this.items = new Map();
        this.mRunning = false;
    }
    ScrollController.prototype.checkUpdate = function () {
        if (this.mRunning)
            return;
        __WEBPACK_IMPORTED_MODULE_0__app_loop__["a" /* AppLoop */].getInstance().scheduleUpdate(this);
        this.mRunning = true;
    };
    ScrollController.prototype.doScroll = function (divID, top, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollTo(top);
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.doScrollLeft = function (divID, left, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollToLeft(left);
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.doScrollTop = function (divID, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollToTop();
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.doScrollBottom = function (divID, option) {
        this.checkUpdate();
        var item = this.getItem(divID);
        if (!item) {
            item = new ScrollDiv(divID);
            item.setOption(option);
            item.scrollToBottom();
            this.items.set(divID, item);
        }
    };
    ScrollController.prototype.getItem = function (divID) {
        if (this.items.has(divID))
            return this.items.get(divID);
        return null;
    };
    ScrollController.prototype.onUpdate = function () {
        var _this = this;
        if (this.items.size > 0) {
            this.items.forEach(function (item) {
                item.onUpdate();
                if (item.hasDone()) {
                    if (item.mCallback) {
                        item.mCallback();
                        item.mCallback = null;
                    }
                    _this.items.delete(item.getId());
                    return;
                }
            });
        }
    };
    return ScrollController;
}());

//# sourceMappingURL=scroll-controller.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoop; });
var AppLoop = /** @class */ (function () {
    function AppLoop() {
        this.mAnimationFrameID = -1;
        this.mAnimationFrameRunning = false;
        this._objects = [];
        this._unique_id = 0;
        this.mRunning = false;
    }
    AppLoop.getInstance = function () {
        if (this._instance == null) {
            this._instance = new AppLoop();
            this._instance.start();
        }
        return this._instance;
    };
    AppLoop.prototype.start = function () {
        if (this.mRunning)
            return;
        this.mRunning = true;
        this.run();
    };
    AppLoop.prototype.stop = function () {
        cancelAnimationFrame(this.mAnimationFrameID);
        this.mAnimationFrameID = -1;
        this.mAnimationFrameRunning = false;
        this.mRunning = false;
    };
    AppLoop.prototype.pause = function () {
        this.mRunning = false;
    };
    AppLoop.prototype.resume = function () {
        this.mRunning = true;
    };
    AppLoop.prototype.scheduleUpdate = function (object) {
        this.unScheduleUpdate(object);
        object.uniqueID = this._unique_id++;
        this._objects.push(object);
    };
    AppLoop.prototype.unScheduleUpdate = function (object) {
        if (object.uniqueID == undefined)
            return;
        var idx = -1;
        for (var i = 0; i < this._objects.length; i++) {
            var obj = this._objects[i];
            if (obj.uniqueID !== undefined) {
                idx = i;
                break;
            }
        }
        if (idx != -1) {
            this._objects.splice(idx, 1);
        }
    };
    AppLoop.prototype.unScheduleUpdateAll = function () {
        this._objects = [];
    };
    AppLoop.prototype.run = function () {
        var _this = this;
        this.mAnimationFrameRunning = true;
        this.mAnimationFrameID = requestAnimationFrame(function () {
            _this.onUpdate();
            if (_this.mAnimationFrameRunning)
                _this.run();
        });
    };
    AppLoop.prototype.onUpdate = function () {
        if (!this.mRunning)
            return;
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onUpdate();
        }
    };
    AppLoop._instance = null;
    return AppLoop;
}());

//# sourceMappingURL=app-loop.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViettelPackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_module_app_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_class_month_package__ = __webpack_require__(103);
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
 * Generated class for the ViettelPackageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ViettelPackageComponent = /** @class */ (function () {
    function ViettelPackageComponent(mAppModule, navCtrl) {
        this.mAppModule = mAppModule;
        this.navCtrl = navCtrl;
        this.color = "";
        this.mMode = 0;
        this.no_data = false;
        console.log('Hello ViettelPackageComponent Component');
        this.text = 'Hello World';
    }
    ViettelPackageComponent.prototype.onClickDetail = function () {
        this.navCtrl.setRoot("ViettelPackageDetailPage", { name: this.mViettelPackage.name });
    };
    ViettelPackageComponent.prototype.signup = function () {
        if (screen.width > 575) {
            this.mAppModule.showModal("SignUpPackagePage", { package: this.mViettelPackage });
        }
        else {
            var aElement = document.createElement("a");
            aElement.href = this.mViettelPackage.url;
            document.body.appendChild(aElement);
            aElement.click();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("mViettelPackage"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__providers_class_month_package__["a" /* Package */])
    ], ViettelPackageComponent.prototype, "mViettelPackage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("color"),
        __metadata("design:type", String)
    ], ViettelPackageComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("mMode"),
        __metadata("design:type", Number)
    ], ViettelPackageComponent.prototype, "mMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("nodata"),
        __metadata("design:type", Boolean)
    ], ViettelPackageComponent.prototype, "no_data", void 0);
    ViettelPackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'viettel-package',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/viettel-package/viettel-package.html"*/'<!-- Generated template for the ViettelPackageComponent component -->\n<div>\n  <div class="box-container a1-relative white-bg  border-radius">\n    <div class="line-item {{color}} font-bold" style="font-size: 1.6rem">{{mViettelPackage.name}}</div>\n    <div class="line-item">\n      <span class="item-data {{color}}">{{mViettelPackage.data}}</span> \n      <span [hidden]="no_data || mViettelPackage.p_id == 5">tốc độ cao</span>\n    </div>\n    <div class="line-item font-bold">{{mViettelPackage.price}} đ</div>\n    <div class="line-item font-bold">{{mViettelPackage.time}}</div>\n    <div style="margin-top: 10px">\n      <button class="btn-sign {{color.split(\'-\')[0]}}" (click)="signup()">Đăng ký ngay</button>\n    </div>\n    <div style="margin-top: 10px">\n      <button class="btn-info {{color.split(\'-\')[0]}}" [hidden]="mMode == 1" (click)="onClickDetail()">\n        <span>Chi tiết</span>\n      </button>\n    </div>\n\n    <div class="hot a1-absolute" *ngIf="mViettelPackage.isHot">\n      <img src="./assets/imgs/viettel-4g-hot.jpg" alt="">\n    </div>\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/viettel-package/viettel-package.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app_module_app_module__["a" /* AppModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ViettelPackageComponent);
    return ViettelPackageComponent;
}());

//# sourceMappingURL=viettel-package.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViettelHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_module_app_module__ = __webpack_require__(21);
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
 * Generated class for the ViettelHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ViettelHeaderComponent = /** @class */ (function () {
    function ViettelHeaderComponent(mAppModule) {
        this.mAppModule = mAppModule;
        this.items = [];
        this.hotline = "1800 8168";
    }
    ViettelHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mAppModule.onLoadConfig().then(function () {
            _this.onLoadMenuItems();
        });
    };
    ViettelHeaderComponent.prototype.onLoadMenuItems = function () {
        var _this = this;
        var menuItems = this.mAppModule.getAppConfig().get("menu-items");
        if (menuItems) {
            menuItems.forEach(function (element) {
                _this.items.push(new __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["b" /* MenuItems */](element));
            });
        }
    };
    ViettelHeaderComponent.prototype.onClickImage = function () {
        var linkEle = document.createElement("a");
        linkEle.setAttribute("href", "https://cuahangviettel.vn");
        document.body.appendChild(linkEle);
        linkEle.click();
    };
    ViettelHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'viettel-header',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/viettel-header/viettel-header.html"*/'<!-- Generated template for the ViettelHeaderComponent component -->\n<div>\n  <div class="a3-container-center menu-container">\n    <div class="logo-viettel" (click)="onClickImage()" tappable>\n      <img src="./assets/imgs/logo-viettel-telecom.png" alt="">\n    </div>\n    <div class="menu-item-desktop a1-relative" *ngFor="let item of items">\n      <a href="{{item.url}}" [hidden]="item.url == \'#\'" style=" color: white !important;text-decoration: unset !important;">\n        {{item.name}}\n      </a>\n      <span [hidden]="item.url != \'#\'">{{item.name}}</span>\n\n      <div class="animateBar"></div>\n      <div class="a1-absolute dropbox animated fadeInRight" *ngIf="item.dropbox.length > 0">\n        <div class="dropbox-item" *ngFor="let url of item.dropbox">\n          <a href="{{url.url}}" [hidden]="url.url == \'#\'" style="color: black;text-decoration: unset !important;">\n            {{url.name}}\n          </a>\n          <span [hidden]="url.url != \'#\'">{{url.name}}</span>\n        </div>\n      </div>\n    </div>\n    <div class="circle white-bg a3-container-center primary-color">\n      <ion-icon name="call"></ion-icon>\n    </div>\n    <div class="font-bold hotline"><span>{{hotline}}</span></div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/viettel-header/viettel-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_app_module_app_module__["a" /* AppModuleProvider */]])
    ], ViettelHeaderComponent);
    return ViettelHeaderComponent;
}());

//# sourceMappingURL=viettel-header.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViettelFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_module_app_module__ = __webpack_require__(21);
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
 * Generated class for the ViettelFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ViettelFooterComponent = /** @class */ (function () {
    function ViettelFooterComponent(mAppModule) {
        this.mAppModule = mAppModule;
        this.services1 = [];
        this.services2 = [];
        this.helps = [];
        this.cuahangviettel = [];
    }
    ViettelFooterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mAppModule.onLoadConfig().then(function () {
            var data = _this.mAppModule.getAppConfig().get("service");
            _this.services1 = data.services1;
            _this.services2 = data.services2;
            _this.helps = _this.mAppModule.getAppConfig().get("helps");
            _this.cuahangviettel = _this.mAppModule.getAppConfig().get("cuahangviettel");
        });
    };
    ViettelFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'viettel-footer',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/viettel-footer/viettel-footer.html"*/'<!-- Generated template for the ViettelFooterComponent component -->\n<div>\n  <!-- <div style="height: 10px; background: white;"></div>\n  <div class="white-smoke">\n    <ion-grid>\n      <ion-row align-items-start>\n        <ion-col col-12 col-sm-4 col-md-4>\n          <div class="a3-container a3-items-center">\n            <img src="./assets/imgs/viettel-4g-car.png" alt="">\n            <div class="title-font-big">Giao hàng nhanh</div>\n          </div>\n\n          <div class="vt-des">\n            Thời gian giao hàng:\n            • Khu vực nội thành Hà Nội: 24h\n            • Khu vực ngoại thành Hà Nội: 36h\n            • Các khu vực tỉnh/thành phố còn lại: 4 - 5 ngày (không tính chủ nhật và ngày nghỉ lễ)\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-4 col-md-4>\n          <div class="a3-container a3-items-center">\n            <img src="./assets/imgs/viettel-4g-card.png" alt="">\n            <div class="title-font-big">Thanh toán tiện</div>\n          </div>\n\n          <div class="vt-des">\n            Tùy chọn thanh toán tiền mặt, chuyển khoản, thanh toán qua thẻ hoặc Internet banking\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-4 col-md-4>\n          <div class="a3-container a3-items-center">\n            <img src="./assets/imgs/viettel-4g-map.png" alt="">\n            <div class="title-font-big">Mạng lưới rộng</div>\n          </div>\n\n          <div class="vt-des">\n            Mạng lưới Viettel phủ khắp cả nước\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div> -->\n\n\n  <!-- <div class="white-bg">\n    <ion-grid>\n      <ion-row align-items-start class="a1-relative">\n\n        <div class="line-right line1 xs-hidden"></div>\n        <div class="line-right line2 xs-hidden"></div>\n        <div class="line-right line3 xs-hidden"></div>\n\n        <ion-col col-12 col-sm-3 col-md-3>\n          <div text-uppercase class="text-upper">\n            CÁCH THỨC THANH TOÁN\n          </div>\n          <div>\n            <img src="./assets/imgs/viettel-4g-card-1.png" alt="">\n            <img src="./assets/imgs/viettel-4g-visa.png" alt="">\n            <div>\n              <img src="./assets/imgs/viettel-4g-bankplus.png" alt="">\n            </div>\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-3 col-md-3 class="padding-left">\n          <div text-uppercase class="text-upper">\n            DỊCH VỤ GIAO HÀNG\n          </div>\n          <img src="./assets/imgs/viettel-4g-post.png" alt="">\n        </ion-col>\n        <ion-col col-12 col-sm-3 col-md-3 class="padding-left">\n          <div text-uppercase class="text-upper">\n            ĐỐI TÁC\n          </div>\n          <img src="./assets/imgs/viettel-4g-store.png" alt="">\n        </ion-col>\n        <ion-col col-12 col-sm-3 col-md-3 class="padding-left">\n          <div>\n            <div text-uppercase class="text-upper">\n              CHỨNG NHẬN\n            </div>\n            <img src="./assets/imgs/viettel-4g-noti.png" alt="">\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div> -->\n\n  <!-- <ion-row style="background: whitesmoke">\n    <ion-col col-12 col-md-3 col-sm3 offset-sm-9 offset-md-9>\n      <div style="padding: 0 16px">\n        <ion-icon style="font-size: 1.4em" name="call"></ion-icon>\n        <span style="font-size: 1.2em; font-weight: bold; margin-left: 8px">Hotline: 1800 8168</span>\n      </div>\n    </ion-col>\n  </ion-row> -->\n\n\n  <div class="black-bg">\n    <ion-row align-items-start style="border-bottom: 1px solid white;padding-bottom: 30px;">\n      <ion-col col-12 col-sm-8 col-md-8>\n        <div style="line-height: 1.6em">\n          <div class="text-big white-color">\n            Hà Nội\n          </div>\n\n          <div class="a3-container a3-items-center">\n            <div class="icon-container">\n              <ion-icon name="pin" class="orange-color"></ion-icon>\n            </div>\n            <span class="white-color">Tầng 3, CT2 The Light, Đường Tố Hữu, P. Trung Văn, Q. Nam Từ Liêm, TP.\n              Hà Nội</span>\n          </div>\n          <div class="a3-container a3-items-center">\n            <div class="icon-container">\n              <ion-icon name="mail" class="orange-color"></ion-icon>\n            </div>\n            <span class="white-color"> hotro@cuahangviettel.vn</span>\n          </div>\n          <div class="a3-container a3-items-center">\n            <div class="icon-container">\n              <ion-icon name="call" class="orange-color"></ion-icon>\n            </div>\n            <span class="white-color">18008119</span>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-4 col-md-4 class="md-border-left">\n        <div style="line-height: 1.6em">\n          <div class="text-big white-color">\n            Theo dõi chúng tôi\n          </div>\n          <div class="a3-container a3-items-center">\n            <div class="circle a3-container-center">\n              <a href="https://www.facebook.com/cuahangviettel.vn">\n                <ion-icon name="logo-facebook"></ion-icon>\n              </a>\n            </div>\n            <div class="circle a3-container-center">\n              <ion-icon name="logo-youtube"></ion-icon>\n            </div>\n            <div class="circle a3-container-center">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </div>\n            <div class="circle a3-container-center">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </div>\n          </div>\n\n          <div class="introduce">\n            Viettel Telecom vừa cho ra mắt trang bán hàng online chính thức tại địa chỉ CuaHangViettel.vn\n\n            Đến với CuaHangViettel.vn bạn sẽ tìm thấy những sản phẩm, dịch vụ viễn thông thiết thực nhất: Từ điện thoại\n            cơ bản đến những smartphone thế hệ mới nhất, hay chiếc đồng hồ định vị thông minh dành cho trẻ em, đăng ký\n            lắp đặt truyền hình, internet cáp quang tốc độ cao...\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row align-items-start padding-top style="border-bottom: 1px solid white;padding-bottom: 30px;">\n      <ion-col col-12 col-sm-6 col-md-6>\n        <div class="text-big white-color">\n          Dịch vụ\n        </div>\n        <ion-row align-items-start>\n          <ion-col col-6 no-padding>\n            <div class="item-service" *ngFor="let item of services1">\n              <a href="{{item.url || \'#\'}}" *ngIf="!item.noFollow">\n                {{item.name}}\n              </a>\n              <a href="{{item.url || \'#\'}}" *ngIf="item.noFollow" target="_blank" rel="nofollow">\n                {{item.name}}\n              </a>\n            </div>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <div class="item-service" *ngFor="let item of services2">\n              <a href="{{item.url || \'#\'}}" *ngIf="!item.noFollow">\n                {{item.name}}\n              </a>\n              <a href="{{item.url || \'#\'}}" *ngIf="item.noFollow" target="_blank" rel="nofollow">\n                {{item.name}}\n              </a>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-12 col-sm-3 col-md-3>\n        <div class="text-big white-color">\n          Hỗ trợ\n        </div>\n        <div class="item-service" *ngFor="let item of helps">\n          <a href="{{item.url || \'#\'}}" *ngIf="!item.noFollow">\n            {{item.name}}\n          </a>\n          <a href="{{item.url || \'#\'}}" *ngIf="item.noFollow" target="_blank" rel="nofollow">\n            {{item.name}}\n          </a>\n\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-3 col-md-3>\n        <div class="text-big white-color">\n          Cửa hàng Viettel\n        </div>\n        <div class="item-service" *ngFor="let item of cuahangviettel">\n          <a href="{{item.url || \'#\'}}" *ngIf="!item.noFollow">\n            {{item.name}}\n          </a>\n          <a href="{{item.url || \'#\'}}" *ngIf="item.noFollow" target="_blank" rel="nofollow">\n            {{item.name}}\n          </a>\n        </div>\n      </ion-col>\n    </ion-row> -->\n\n    <div class="white-color" margin-top>\n      <ion-row align-items-center>\n        <ion-col col-12 col-sm-10 col-md-10 col-xl-10>\n          © Viettel Telecom 2015. All rights reserved.<br>\n          Cơ quan chủ quản: Tập đoàn Công nghiệp - Viễn thông Quân đội. Giấy phép số: 144/GP - BC do Bộ thông tin -\n          Truyền\n          thông cấp ngày 18/04/2007\n        </ion-col>\n        <!-- <ion-col col-12 col-sm-2 col-md-2 col-xl-2>\n          <a class="dmca-badge" title="DMCA.com Protection Status" href="//www.dmca.com/Protection/Status.aspx?ID=f2a9ffdb-8af6-407a-be71-8dc329949437">\n            <img class="aligncenter" src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-07.png?ID=f2a9ffdb-8af6-407a-be71-8dc329949437"\n              alt="DMCA.com Protection Status" /></a>\n        </ion-col> -->\n      </ion-row>\n\n    </div>\n\n\n  </div>\n\n\n\n</div>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/viettel-footer/viettel-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_app_module_app_module__["a" /* AppModuleProvider */]])
    ], ViettelFooterComponent);
    return ViettelFooterComponent;
}());

//# sourceMappingURL=viettel-footer.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_module_app_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_module_District__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_module_util__ = __webpack_require__(42);
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
 * Generated class for the FakeCustomerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FakeCustomerComponent = /** @class */ (function () {
    function FakeCustomerComponent(mRender2, mAppModule) {
        var _this = this;
        this.mRender2 = mRender2;
        this.mAppModule = mAppModule;
        this.divID = "fakeId";
        this.customer = { name: "A", address: "Ha noi" };
        this.names = [];
        this.citys = [];
        this.count = 0;
        this.mAppModule.onLoadNameCustomerFile().then(function (data) {
            if (data) {
                _this.names = data["danhsach"];
            }
        }).catch(function (err) {
        });
        this.mAppModule.onReadFileJson("./assets/data/tinh_tp.json").then(function (data) {
            if (data) {
                _this.onResponseCitys(data["tinh_tp"]);
            }
        });
    }
    FakeCustomerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onLoadName();
        }, 3000);
        setInterval(function () {
            _this.onLoadName();
        }, 45000);
    };
    FakeCustomerComponent.prototype.onResponseCitys = function (data) {
        var _this = this;
        this.citys = [];
        if (data && data.length > 0) {
            data.forEach(function (element) {
                var newEle = new __WEBPACK_IMPORTED_MODULE_2__providers_app_module_District__["a" /* Citys */]();
                newEle.parse(element);
                _this.citys.push(newEle);
            });
        }
    };
    FakeCustomerComponent.prototype.onLoadName = function () {
        var _this = this;
        if (this.names.length == 0 || this.citys.length == 0)
            return;
        var nameIndex = __WEBPACK_IMPORTED_MODULE_3__providers_app_module_util__["a" /* Utils */].randInt(0, this.names.length);
        var cityIndex = __WEBPACK_IMPORTED_MODULE_3__providers_app_module_util__["a" /* Utils */].randInt(0, this.citys.length);
        this.customer.name = this.names[nameIndex];
        this.customer.address = this.citys[cityIndex].name;
        var element = document.getElementById(this.divID);
        if (element) {
            element.style.display = "flex";
        }
        setTimeout(function () {
            _this.mRender2.addClass(_this.mNativeEle.nativeElement, "slideOutLeft");
            setTimeout(function () {
                _this.mRender2.removeClass(_this.mNativeEle.nativeElement, "slideOutLeft");
                if (element) {
                    element.style.display = "none";
                }
            }, 800);
        }, 5000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("fakeCustomer"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FakeCustomerComponent.prototype, "mNativeEle", void 0);
    FakeCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fake-customer',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/fake-customer/fake-customer.html"*/'<!-- Generated template for the FakeCustomerComponent component -->\n<div>\n  <div #fakeCustomer class="a3-container a3-items-center animated slideInLeft" id="fakeId">\n    <div class="icon-image">\n      <img src="./assets/imgs/fake-customer.png" alt="Viettel CA">\n    </div>\n\n    <div class="text-show">\n      <div class="success-text"><strong>Đăng ký thành công</strong></div>\n      <div>Khách hàng <strong>{{customer.name}}</strong> ở <strong>{{customer.address}}</strong> vừa đăng ký thành công</div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/fake-customer/fake-customer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__providers_app_module_app_module__["a" /* AppModuleProvider */]])
    ], FakeCustomerComponent);
    return FakeCustomerComponent;
}());

//# sourceMappingURL=fake-customer.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Questions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAndAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_module_app_module__ = __webpack_require__(21);
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
 * Generated class for the QuestionAndAnswerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Questions = /** @class */ (function () {
    function Questions() {
        this.id = "";
        this.question = "";
        this.answer = "";
    }
    Questions.prototype.parseData = function (data) {
        if (data) {
            if ("question" in data) {
                this.question = data.question;
            }
            if ("answer" in data) {
                this.answer = data.answer;
            }
        }
    };
    return Questions;
}());

var QuestionAndAnswerComponent = /** @class */ (function () {
    function QuestionAndAnswerComponent(mAppModule) {
        var _this = this;
        this.mAppModule = mAppModule;
        this.mQuestions = [];
        this.mQuestions2 = [];
        this.mQuestionSelected = -1;
        this.mMode = 1;
        this.mCurrentIndex = 0;
        this.mAppModule.onReadFileJson("./assets/data/cau_hoi_thuong_gap.json").then(function (data) {
            _this.mQuestions = data["Sheet1"];
            _this.mQuestions2 = _this.mQuestions.filter(function (ele, index) {
                return index < 5;
            });
        });
    }
    QuestionAndAnswerComponent.prototype.onClickQuestion = function (item) {
        if (item == this.mQuestionSelected) {
            this.mQuestionSelected = -1;
        }
        else {
            this.mQuestionSelected = item;
        }
    };
    QuestionAndAnswerComponent.prototype.onChangeMode = function (number) {
        this.mMode = number;
    };
    QuestionAndAnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'question-and-answer',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/question-and-answer/question-and-answer.html"*/'<!-- Generated template for the QuestionAndAnswerComponent component -->\n<div>\n  <div class="f-question">\n    <div class="semi-title">\n      Câu hỏi thường gặp\n    </div>\n\n    <div class="list-container " *ngIf="mMode == 1">\n      <div class="question-container a1-relative" [class.selected]="i == mQuestionSelected" *ngFor="let item of mQuestions2; let i = index"\n        (click)="onClickQuestion(i)">\n        <div class="question" [innerHtml]="item.question"></div>\n        <div class="answer" [innerHtml]="item.answer" *ngIf="mQuestionSelected == i"></div>\n        <div class="icon-container a1-absolute">\n          <ion-icon name="ios-arrow-down" *ngIf="mQuestionSelected != i"></ion-icon>\n          <ion-icon name="ios-arrow-up" *ngIf="mQuestionSelected == i"></ion-icon>\n        </div>\n      </div>\n    </div>\n\n    <div class="list-container " *ngIf="mMode == 2">\n      <div class="question-container" tappable [class.selected]="i == mQuestionSelected" *ngFor="let item of mQuestions; let i = index"\n        (click)="onClickQuestion(i)">\n        <div class="question" [innerHtml]="item.question"></div>\n        <div class="answer" [innerHtml]="item.answer" *ngIf="mQuestionSelected == i"></div>\n        <div class="icon-container a1-absolute">\n          <ion-icon name="ios-arrow-down" *ngIf="mQuestionSelected != i"></ion-icon>\n          <ion-icon name="ios-arrow-up" *ngIf="mQuestionSelected == i"></ion-icon>\n        </div>\n      </div>\n    </div>\n\n    <div class="btn-more-container" [hidden]="mQuestions.length < 5" text-center>\n      <button ion-button *ngIf="mMode == 1" (click)="onChangeMode(2)">Xem thêm</button>\n      <button ion-button *ngIf="mMode == 2" (click)="onChangeMode(1)">Thu gọn</button>\n    </div>\n  </div>\n\n</div>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/components/question-and-answer/question-and-answer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_app_module_app_module__["a" /* AppModuleProvider */]])
    ], QuestionAndAnswerComponent);
    return QuestionAndAnswerComponent;
}());

//# sourceMappingURL=question-and-answer.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_module_app_module__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(mEvent, mMenuController, mAppModule, platform, statusBar, splashScreen) {
        this.mEvent = mEvent;
        this.mMenuController = mMenuController;
        this.mAppModule = mAppModule;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.items = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onOpenMenu = function () {
        this.mEvent.publish("openmenu");
    };
    MyApp.prototype.onCloseMenu = function () {
        this.mEvent.publish("closemenu");
    };
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mAppModule.onLoadConfig().then(function () {
            _this.onLoadMenuItems();
        });
    };
    MyApp.prototype.onLoadMenuItems = function () {
        var _this = this;
        var menuItems = this.mAppModule.getAppConfig().get("menu-items");
        if (menuItems) {
            menuItems.forEach(function (element) {
                _this.items.push(new __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* MenuItems */](element));
            });
        }
    };
    MyApp.prototype.onClickItem = function (item, i) {
        if (item.url != "#") {
            this.mMenuController.close();
            return;
        }
        var ele = document.getElementById("dropdown" + (i + 1));
        var icon = document.getElementById("icon" + (i + 1));
        if (ele) {
            if (ele.style.maxHeight > "0px") {
                ele.style.maxHeight = 0 + "px";
                if (icon) {
                    icon.style.transform = "rotate(0deg)";
                }
            }
            else {
                ele.style.maxHeight = ele.scrollHeight + "px";
                if (icon) {
                    icon.style.transform = "rotate(180deg)";
                }
            }
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/app/app.html"*/'<!-- <ion-menu type="push" [content]="mycontent" (ionOpen)="onOpenMenu()" (ionClose)="onCloseMenu()">\n  <ion-header>\n    <div class="logo-viettel-menu" padding-top padding-bottom>\n      <img src="./assets/imgs/viettel_logo.png" alt="">\n    </div>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <div class="menu-item" *ngFor="let item of items;let i = index">\n        <a href="{{item.url}}" (click)="onClickItem(item,i)" style=" width: 100%;color: black !important;text-decoration: unset !important;">\n          <div padding>\n            {{item.name}}\n            <ion-icon *ngIf="i < items.length - 1" name="ios-arrow-down" id="icon{{i+1}}" float-right></ion-icon>\n          </div>\n        </a>\n\n        <div class="drop-down" id="dropdown{{i+1}}">\n          <a *ngFor="let drop of item.dropbox" menuClose href="{{drop.url}}">\n             <div padding>{{drop.name}}</div>\n          </a>\n        </div>\n\n      </div>\n    </ion-list>\n  </ion-content>\n</ion-menu> -->\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_module_app_module__["a" /* AppModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeInTransiton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FadeInTransiton = /** @class */ (function (_super) {
    __extends(FadeInTransiton, _super);
    function FadeInTransiton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeInTransiton.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 0, 'transform': 'translateY(0%)' });
        wrapper.afterStyles({ 'opacity': 1, 'transform': 'translateY(0%)' });
        wrapper.fromTo('opacity', 0, 1);
        wrapper.fromTo('transform', 'translateY(0%)', 'translateY(0%)');
        this
            .element(this.enteringView.pageRef())
            .duration(100)
            .easing('cubic-bezier(0, 0, 1, 1)')
            .add(wrapper);
    };
    return FadeInTransiton;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

//# sourceMappingURL=fade-in.transition.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeOutTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FadeOutTransition = /** @class */ (function (_super) {
    __extends(FadeOutTransition, _super);
    function FadeOutTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeOutTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        // const contentWrapper = new Animation(this.plt, ele.querySelector('.wrapper'));
        wrapper.beforeStyles({ 'opacity': 1, 'transform': 'translateY(0%)' });
        wrapper.afterStyles({ 'opacity': 0, 'transform': 'translateY(0%)' });
        wrapper.fromTo('opacity', 1, 0);
        wrapper.fromTo('transform', 'translateY(0%)', 'translateY(0%)');
        // contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(100)
            .easing('cubic-bezier(0, 0, 1, 1)')
            .add(wrapper);
    };
    return FadeOutTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

//# sourceMappingURL=fade-out.transition.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalScaleUpEnterTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalScaleUpEnterTransition = /** @class */ (function (_super) {
    __extends(ModalScaleUpEnterTransition, _super);
    function ModalScaleUpEnterTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleUpEnterTransition.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(0)', 'opacity': 1 });
        wrapper.afterStyles({ 'opacity': 1, 'transform': 'scale(1)' });
        wrapper.fromTo('transform', 'scale(0)', 'scale(1.0)');
        wrapper.fromTo('opacity', 1, 1);
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleUpEnterTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

//# sourceMappingURL=scale-up-enter.transition.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalScaleUpLeaveTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalScaleUpLeaveTransition = /** @class */ (function (_super) {
    __extends(ModalScaleUpLeaveTransition, _super);
    function ModalScaleUpLeaveTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleUpLeaveTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(1)', 'opacity': 1 });
        wrapper.afterStyles({ 'opacity': 1, 'transform': 'scale(0)' });
        wrapper.fromTo('transform', 'scale(1)', 'scale(0)');
        wrapper.fromTo('opacity', 1, 1);
        // contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleUpLeaveTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

//# sourceMappingURL=scale-up-leave.transition.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePageTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DURATION = 500;
var OPACITY = 'opacity';
var TRANSPARENT = 0;
var OPAQUE = 1;
var ReplacePageTransition = /** @class */ (function (_super) {
    __extends(ReplacePageTransition, _super);
    function ReplacePageTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReplacePageTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        this.duration(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.duration) ? opts.duration : DURATION);
        var backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringPageEle = enteringView.pageRef().nativeElement;
            var enteringContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, enteringView.pageRef());
            this.add(enteringContent);
            if (backDirection) {
                enteringContent
                    .fromTo(OPACITY, OPAQUE, OPAQUE, true);
            }
            else {
                enteringContent
                    .fromTo(OPACITY, TRANSPARENT, OPAQUE, true);
            }
        }
        if (leavingView && leavingView.pageRef()) {
            var leavingPageEle = leavingView.pageRef().nativeElement;
            var leavingContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, leavingView.pageRef());
            this.add(leavingContent);
            // if (backDirection) {
            //     leavingContent
            //         .fromTo(OPACITY, OPAQUE, TRANSPARENT, false);
            // } else {
            //     leavingContent
            //         .fromTo(OPACITY, OPAQUE, OPAQUE, false);
            // }
        }
    };
    return ReplacePageTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* PageTransition */]));

//# sourceMappingURL=replace.transition.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
// import { CalendarUtils } from "../calendar/calendar-utils";
// import { Match } from "../../classes/matches";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isNumber = function (char) {
        return this.reg_number.test(char);
    };
    Utils.isValidUsername = function (username) {
        return this.reg_username.test(username);
    };
    Utils.isValidPhone = function (phone) {
        return this.reg_phone.test(phone);
    };
    Utils.isValidEmail = function (email) {
        return this.reg_email.test(email);
    };
    Utils.isValidPassword = function (password) {
        return this.reg_password.test(password);
    };
    Utils.isValidAppname = function (appName) {
        return this.reg_appName.test(appName);
    };
    Utils.isValidDescript = function (description) {
        return this.reg_appDescript.test(description);
    };
    Utils.isValidUrlImage = function (url) {
        return this.reg_urlImage.test(url);
    };
    Utils.clamp = function (value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    Utils.getStringNumber = function (val) {
        return ((val < 10) ? "0" : "") + val;
    };
    Utils.nFormatter = function (num, units) {
        var unitArray = ["G", "M", "K"];
        if (units && units != undefined && units.length >= 3)
            unitArray = units;
        var isNegative = false;
        if (num < 0) {
            isNegative = true;
        }
        num = Math.abs(num);
        var formattedNumber = '';
        if (num >= 1000000000) {
            formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + unitArray[0];
        }
        else if (num >= 1000000) {
            formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, '') + unitArray[1];
        }
        else if (num >= 1000) {
            formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, '') + unitArray[2];
        }
        else {
            formattedNumber = num + '';
        }
        if (isNegative) {
            formattedNumber = '-' + formattedNumber;
        }
        return formattedNumber;
    };
    Utils.bodauTiengViet = function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        // str = str.replace(/\W+/g, ' ');
        // str = str.replace(/\s/g, '-');
        return str;
    };
    Utils.kiemTraToanDauCach = function (str) {
        return str.trim().length == 0;
    };
    Utils.randInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Utils.getRequestDate = function (date) {
        var m = (date.getMonth() + 1);
        var d = date.getDate();
        return date.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (d < 10 ? "0" : "") + d;
    };
    Utils.getRequestDateFromDDMMYY = function (dd, mm, yy) {
        return yy + "-" + this.getStringNumber(mm) + "-" + this.getStringNumber(dd);
    };
    Utils.getViewDate = function (date) {
        var m = (date.getMonth() + 1);
        var d = date.getDate();
        return (d < 10 ? "0" : "") + d + "/" + (m < 10 ? "0" : "") + m + "/" + date.getFullYear();
    };
    Utils.getTimeBefore = function (date, days) {
        return date.getTime() - days * 86400000;
    };
    Utils.getTimeAfter = function (date, days) {
        return date.getTime() + days * 86400000;
    };
    Utils.getTopZIndex = function () {
        return this.UniqueZIndex++;
    };
    Utils.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    Utils.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    Utils.formatNumber = function (num, splitChar) {
        var arr = [];
        num = Math.round(num);
        var numStr = num.toString();
        arr = numStr.split('');
        var length = arr.length;
        for (var i = 1; i <= length; i++) {
            if (i % 3 == 0 && i < length)
                arr.splice(length - i, 0, splitChar);
        }
        return arr.join('');
    };
    Utils._FormatDateYYYYMMDDHHSS = function (date) {
        if (date) {
            return date.getFullYear() + "-" + Utils.getStringNumber(date.getMonth() + 1) + "-" + Utils.getStringNumber(date.getDate()) + " " + Utils.getStringNumber(date.getHours()) + ":" + Utils.getStringNumber(date.getMinutes()) + ":" + Utils.getStringNumber(date.getSeconds());
        }
        return "";
    };
    Utils._convertNumberTimeToString = function (time) {
        var hour = Math.floor(time / 60);
        var mins = time - hour * 60;
        return hour + "h" + (mins > 9 ? "" : "0") + mins;
    };
    Utils.getFirstDayInWeek = function () {
        var today = new Date();
        var dayinweek = today.getDay();
        var number_day_after = 0;
        if (dayinweek == 0) {
            number_day_after = 6;
        }
        else {
            number_day_after = dayinweek - 1;
        }
    };
    Utils.getTimeStamp = function (dd, mm, yy) {
        var date = new Date(yy + "-" + this.getStringNumber(mm) + "-" + this.getStringNumber(dd));
        return date.getTime();
    };
    Utils.getTimeDistance = function (date) {
        var today = new Date();
        var distance = today.getTime() - date.getTime();
        if (distance < 0)
            distance = 0;
        var hour = Math.floor(distance / (1000 * 60 * 60));
        var minutes = Math.floor(distance / (1000 * 60));
        var second = Math.floor(distance / 1000);
        if (hour == 0 && minutes == 0 && second == 0) {
            return "Vừa xong";
        }
        if (hour == 0 && minutes == 0 && second > 0) {
            return second + " giây trước";
        }
        if (hour == 0 && minutes > 0) {
            return minutes + " phút trước";
        }
        if (hour > 0) {
            return hour + " giờ trước";
        }
    };
    Utils.boDauCach = function (name) {
        name = name.replace(/\s/g, '-');
        return name;
    };
    Utils.reg_appName = /^[\sA-Za-z0-9_-]{0,100}$/;
    Utils.reg_appDescript = /^[\sA-Za-z0-9_-]{0,500}$/;
    Utils.reg_phone = /^[0-9+]{9,11}$/;
    Utils.reg_number = /^[0-9+]$/;
    Utils.reg_username = /^[A-Za-z0-9_-]{6,20}$/;
    Utils.reg_password = /^[A-Za-z0-9_-]{6,20}$/;
    Utils.reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Utils.reg_urlImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|mp4|jpeg)/;
    Utils.UniqueZIndex = 10;
    return Utils;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_module_app_module__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_module_scroll_controller__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_module_util__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuItems = /** @class */ (function () {
    function MenuItems(data) {
        this.id = -1;
        this.name = "Menu";
        this.dropbox = [];
        this.url = "#";
        if (data) {
            this.parseData(data);
        }
    }
    MenuItems.prototype.parseData = function (data) {
        if (data) {
            if ("id" in data)
                this.id = data.id;
            if ("name" in data)
                this.name = data.name;
            if ("dropbox" in data)
                this.parseDropbox(data.dropbox);
            if ("url" in data)
                this.url = data.url;
        }
    };
    MenuItems.prototype.parseDropbox = function (data) {
        var _this = this;
        if (data) {
            this.dropbox = [];
            data.forEach(function (element) {
                _this.dropbox.push({
                    name: element.name,
                    url: element.url
                });
            });
        }
    };
    return MenuItems;
}());

var HomePage = /** @class */ (function () {
    function HomePage(mEvent, mMenuController, mDectectChange, mAppModule, navCtrl) {
        this.mEvent = mEvent;
        this.mMenuController = mMenuController;
        this.mDectectChange = mDectectChange;
        this.mAppModule = mAppModule;
        this.navCtrl = navCtrl;
        this.mScrollController = null;
        this.menuIcon = "menu";
        this.mPackages = [];
        this.mColors = ["primary-color", "orange-color", "blue-color", "violet-color"];
        this.mColors2 = ["primary", "orange", "blue", "white"];
        this.mTextColors = ["primary-color", "orange-color", "blue-color", "white-color"];
        this.mTextColors2 = ["black-color", "black-color", "black-color", "white-color"];
        this.mScrollTop = 0;
        this.mScrollController = new __WEBPACK_IMPORTED_MODULE_3__providers_app_module_scroll_controller__["a" /* ScrollController */]();
    }
    HomePage.prototype.onClickInfo = function (item) {
        this.mAppModule.showModal("PackageInfoPage", { params: item });
    };
    HomePage.prototype.scrollTop = function () {
        this.myContent.scrollToTop(200);
    };
    HomePage.prototype.onClickAddFab = function () {
        this.mAppModule.showModal("MenuShowModalPage", null);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.myContent.ionScroll.asObservable().subscribe(function () {
            _this.mScrollTop = _this.myContent.scrollTop;
            _this.mDectectChange.detectChanges();
        });
        this.mAppModule.onLoadConfig().then(function () {
            _this.mAppModule.getPackageController().onResponseAppConfig();
            _this.mPackages = _this.mAppModule.getPackageController().getAllPackages();
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
    HomePage.prototype.doScrollLeft = function (e) {
        var id = e.id;
        var left = e.left;
        var option = {
            callback: null,
            alpha: 0.4,
            epsilon: 1
        };
        this.mScrollController.doScrollLeft(id, left, option);
    };
    HomePage.prototype.goToDetail = function ($event) {
        var name = __WEBPACK_IMPORTED_MODULE_4__providers_app_module_util__["a" /* Utils */].bodauTiengViet($event.name.toLowerCase());
        name = __WEBPACK_IMPORTED_MODULE_4__providers_app_module_util__["a" /* Utils */].boDauCach(name);
        this.navCtrl.setRoot("PackageDetailPage", { name: name });
    };
    HomePage.prototype.goToInfo = function ($event) {
        this.mAppModule.showModal("PackageInfoPage", { params: $event });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "myContent", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/home/home.html"*/'<ion-content>\n  <div class="img-header">\n    <img src="./assets/imgs/viettel-4g-desktop.jpg" alt="Viettel 4G">\n  </div>\n\n  <div *ngFor="let item of mPackages; let i = index" class="x-row-container background-{{i}}">\n    <div class="a1-relative">\n        <div class="package-name" [ngClass]="mColors[i]">{{item.name}}</div>\n        <div class="vt-4g-package-title">\n          <span>{{item.title}}</span>\n        </div>\n\n        <div class="sm-hidden md-hidden lg-hidden xl-hidden" text-center margin-bottom>\n          <button ion-button outline class="btn-info " [ngClass]="mColors2[i]" (click)="onClickInfo(item)">Thông tin</button>\n        </div>\n\n        <div class="btn-right a1-absolute xs-hidden">\n            <button ion-button outline class="btn-info " [ngClass]="mColors2[i]" (click)="onClickInfo(item)">Thông tin</button>\n        </div>\n    </div>\n\n    <ion-row justify-content-center>\n      <ion-col col-12 col-sm-3 col-lg-3 *ngFor="let p of item.items">\n        <div class="m-package-container">\n          <viettel-package [mViettelPackage]="p" [color]="mColors[i]"></viettel-package>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <question-and-answer></question-and-answer>\n\n  <viettel-footer></viettel-footer>\n\n  <ion-fab bottom right class="scroll-top-btn" [hidden]="mScrollTop < 20">\n    <button ion-fab color="light" (click)="scrollTop()">\n      <ion-icon name="md-arrow-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab top left>\n    <fake-customer></fake-customer>\n  </ion-fab>\n\n  <ion-fab bottom right class="btn-menu">\n    <button ion-fab (click)="onClickAddFab()">\n      <ion-icon name="add" class="animated pulse"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n</ion-content>'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads-9123/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_module_app_module__["a" /* AppModuleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map