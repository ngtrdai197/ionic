import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { UserInforPage } from '../pages/user-infor/user-infor';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterPage } from '../pages/register/register';

export const firebaseConfig = {
  apiKey: "AIzaSyCaRc6d4vs7J6NSK45d_i56xoWPMlUJcqI",
  authDomain: "ionic-2f58f.firebaseapp.com",
  databaseURL: "https://ionic-2f58f.firebaseio.com",
  projectId: "ionic-2f58f",
  storageBucket: "ionic-2f58f.appspot.com",
  messagingSenderId: "841133443786"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    UserInforPage,
    ProductDetailPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    UserInforPage,
    ProductDetailPage,
    RegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
