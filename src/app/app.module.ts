import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Web API
import { HttpModule } from '@angular/http';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

// Page
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabsPage,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabsPage,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider
  ]
})
export class AppModule {}
