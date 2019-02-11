import { Utils } from "../app-module/util";

export class Packages {
    name: string = "";
    title: string = "";
    description: string = "";
    items: Array<Package> = [];
    id: number = -1;

    constructor(data?: any) {
        this.items.push(new Package({ id: 1 }));
        this.items.push(new Package({ id: 2 }));
        this.items.push(new Package({ id: 3 }));
        this.items.push(new Package({ id: 4 }));
        if (data) {
            this.parseData(data);
        }
    }

    parseData(data) {
        if ("id" in data) this.id = parseInt(data.id);
        if ("name" in data) this.name = data.name;
        if ("title" in data) this.title = data.title;
        if ("description" in data) this.description = data.description;
        if ("items" in data) this.parseItems(data.items);
    }

    parseItems(data) {
        if (data) {
            this.items = [];
            data.forEach(element => {
                this.items.push(new Package(element));
            });
        }
    }
}


export class Package {
    p_id: number = -1;
    id: number = -1;
    name: string = "Mimax 70";
    data: string = "3Gb";
    price: string = "70,000 đ";
    time: string = "30 ngày";
    isHot: boolean = true;
    description: string = "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G. \n Với 70.000đ Quý khách sẽ có 3GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau).";
    url: string = "";
    constructor(data?: any) {
        if (data) {
            this.parseData(data);
        }
    }

    parseData(data) {
        if (data) {
            if ("p_id" in data) this.p_id = parseInt(data.p_id);
            if ("id" in data) this.id = parseInt(data.id);
            if ("name" in data) this.name = data.name;
            if ("data" in data) this.data = data.data;
            if ("price" in data) this.price = data.price;
            if ("time" in data) this.time = data.time;
            if ("isHot" in data) this.isHot = data.isHot;
            if ("description" in data) this.description = data.description;
            if ("url" in data) this.url = data.url;
        }
    }
}

export class PackageController {

    mDatas = [
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


    mDatas_2 = [
        {
            p_id: "1",
            id: "1",
            name: "Mimax90",
            price: "90,000",
            description: "Gói cước data trọn gói. Sử dụng trên cả mạng 3G/4G.\\n\\nVới 90.000đ Quý khách sẽ có 5GB lưu lượng tốc độ cao, sử dụng trong 30 ngày (đối với TB trả trước) hoặc theo chu kỳ tháng (đối với TB trả sau)",
            data: "5GB",
            isHot: true,
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
            isHot: true,
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
            isHot: false,
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
            isHot: false,
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
            isHot: false,
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
            isHot: true,
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
            isHot: true,
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
            isHot: false,
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
            isHot: false,
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
            isHot: false,
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
            isHot: false,
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
            isHot: true,
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
            isHot: false,
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
            isHot: false,
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
            isHot: true,
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
            isHot: false,
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
            isHot: false,
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
            isHot: false,
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
            isHot: false,
            time: "30 ngày",
            url: "sms:9123?&body=HI90 0987762233"
        }
    ];
   
    mViettelPakages: Array<Package> = [
        
    ];

    mAllPackages: Array<Packages> = [];


    constructor() {

    }

    onResponseAppConfig(){

        this.mDatas_2.forEach(e=>{
            let o = new Package();
            o.parseData(e);
            this.mViettelPakages.push(o);
        })

        this.mDatas.forEach(ele=>{
            let o = new Packages();
            o.parseData(ele);
            o.items = this.mViettelPakages.filter(element=>{
                return element.p_id == o.id;
            })
            this.mAllPackages.push(o);
        })
    }

    public getAllViettelPackages(): Array<Package> {
        return this.mViettelPakages;
    }

    public getAllPackages(): Array<Packages> {
        return this.mAllPackages;
    }

    

    public getPackageByName(name: string) {
        if (this.mViettelPakages.length == 0) return new Package();
        for (let p of this.mViettelPakages) {
            if (p.name.toLowerCase() == name.toLowerCase()) {
                return p;
            }
        }
        return new Package();

    }
    
    getPackgeByID(id) {
        if (this.mViettelPakages.length == 0) return new Package();
        for (let p of this.mViettelPakages) {
            if (p.id == id) {
                return p;
            }
        }
        return new Package();
    }

    public getPackagesByName(nName: string) {
        if (this.mAllPackages.length == 0) return new Packages();
        for (let p of this.mAllPackages) {
            let name = Utils.bodauTiengViet(p.name.toLowerCase());
            name = Utils.boDauCach(name);
            if (name == nName) {
                let p_id = p.id;
                return this.getPackagesById(p_id);
            }
        }
        return new Packages();
    }

    getPackagesById(p_id) {
        let index = this.mAllPackages.findIndex(ele=>{
            return ele.id == p_id;
        })

        if(index > -1){
            return this.mAllPackages[index];
        }else{
            return new Packages();
        }
    }

    public getPackageByPID(id: number) {
        if (this.mViettelPakages.length == 0) return [];
        return this.mViettelPakages.filter(element => {
            return element.p_id == id;
        });
    }
}