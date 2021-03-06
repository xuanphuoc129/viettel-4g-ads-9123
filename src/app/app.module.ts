import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config, DeepLinkConfig } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppModuleProvider } from '../providers/app-module/app-module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { FadeInTransiton } from '../transitions/fade-in.transition';
import { FadeOutTransition } from '../transitions/fade-out.transition';
import { ModalScaleUpEnterTransition } from '../transitions/scale-up-enter.transition';
import { ModalScaleUpLeaveTransition } from '../transitions/scale-up-leave.transition';
import { ReplacePageTransition } from '../transitions/replace.transition';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
     
    }),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppModuleProvider
  ]
})
export class AppModule {
  constructor(public config: Config) {
    this.config.setTransition('fade-in', FadeInTransiton);
    this.config.setTransition('fade-out', FadeOutTransition);
    this.config.setTransition('scale-up', ModalScaleUpEnterTransition);
    this.config.setTransition('scale-down', ModalScaleUpLeaveTransition);
    this.config.setTransition('replace', ReplacePageTransition);
  }
}
