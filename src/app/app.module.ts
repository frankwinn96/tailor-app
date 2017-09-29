import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { QRScanner } from '@ionic-native/qr-scanner';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EditPage } from '../pages/edit/edit';
import { LoginPage } from '../pages/login/login'
import { ShopPage } from '../pages/shop/shop'
import { UserMeasurementPage } from '../pages/user-measurement/user-measurement'
import { TailorDetailPage } from '../pages/tailor-detail/tailor-detail'
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner'
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPage,
    LoginPage,
    ShopPage,
    UserMeasurementPage,
    TailorDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPage,
    LoginPage,
    ShopPage,
    UserMeasurementPage,
    TailorDetailPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    QRScanner
  ]
})
export class AppModule {}
