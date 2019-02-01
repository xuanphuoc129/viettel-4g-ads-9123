import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Package } from '../../providers/class/month-package';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the SignUpPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-package',
  templateUrl: 'sign-up-package.html',
})
export class SignUpPackagePage {


  mPackage: Package = new Package();
  phone: string = "phone_sms_9123";
  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {

    if (this.navParams.data["package"]) {
      this.mPackage = this.navParams.get("package");
    }
    this.phone = this.mAppModule.getAppConfig().get("phone_sms_9123");
  }

  ionViewDidLoad() {

  }

  closeFrame() {
    this.navCtrl.pop();
  }

}
