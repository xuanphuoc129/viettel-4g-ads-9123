import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, Content, MenuController, Events } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { ScrollController, ScrollOption } from '../../providers/app-module/scroll-controller';
import { Utils } from '../../providers/app-module/util';
import { Packages } from '../../providers/class/month-package';


export class MenuItems {
  id: number = -1;
  name: string = "Menu";
  dropbox: Array<{ name: string, url: string }> = [];
  url: string = "#";
  constructor(data?: any) {
    if (data) {
      this.parseData(data);
    }
  }

  parseData(data) {
    if (data) {
      if ("id" in data) this.id = data.id;
      if ("name" in data) this.name = data.name;
      if ("dropbox" in data) this.parseDropbox(data.dropbox);
      if ("url" in data) this.url = data.url;
    }
  }

  parseDropbox(data) {
    if (data) {
      this.dropbox = [];
      data.forEach(element => {
        this.dropbox.push({
          name: element.name,
          url: element.url
        });
      });
    }
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Content) myContent: Content;

  mScrollController: ScrollController = null;

  menuIcon: string = "menu";
  mPackages: Array<Packages> = [];
  mColors: Array<string> = ["primary-color", "orange-color", "blue-color", "violet-color"];
  mColors2: Array<string> = ["primary", "orange", "blue", "white"];
  mTextColors: Array<string> = ["primary-color", "orange-color", "blue-color", "white-color"];
  mTextColors2: Array<string> = ["black-color", "black-color", "black-color", "white-color"];

  constructor(
    public mEvent: Events,
    public mMenuController: MenuController,
    public mDectectChange: ChangeDetectorRef,
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController) {

    this.mScrollController = new ScrollController();
  }

  mScrollTop: number = 0;


  onClickInfo(item) {
    this.mAppModule.showModal("PackageInfoPage", { params: item });
  }

  scrollTop() {
    this.myContent.scrollToTop(200);
  }

  onClickAddFab() {
    this.mAppModule.showModal("MenuShowModalPage", null);
  }

  ionViewDidLoad() {
    this.myContent.ionScroll.asObservable().subscribe(() => {
      this.mScrollTop = this.myContent.scrollTop;
      this.mDectectChange.detectChanges();
    })

    this.mAppModule.onLoadConfig().then(() => {
      this.mAppModule.getPackageController().onResponseAppConfig();
      this.mPackages = this.mAppModule.getPackageController().getAllPackages();
    })


    this.mEvent.subscribe("openmenu", () => {
      this.menuIcon = "md-close";
      this.mDectectChange.detectChanges();
    })
    this.mEvent.subscribe("closemenu", () => {
      this.menuIcon = "menu";
      this.mDectectChange.detectChanges();
    })
  }

  doScrollLeft(e) {
    let id = e.id;
    let left = e.left;

    let option: ScrollOption = {
      callback: null,
      alpha: 0.4,
      epsilon: 1
    }
    this.mScrollController.doScrollLeft(id, left, option);
  }

  goToDetail($event) {
    let name = Utils.bodauTiengViet($event.name.toLowerCase());
    name = Utils.boDauCach(name);
    this.navCtrl.setRoot("PackageDetailPage", { name: name });
  }

  goToInfo($event) {
    this.mAppModule.showModal("PackageInfoPage", { params: $event });
  }

}
