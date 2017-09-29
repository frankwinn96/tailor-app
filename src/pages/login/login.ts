import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { ShopPage } from '../shop/shop'
import { QrScannerPage } from '../qr-scanner/qr-scanner'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController,public alertCtrl: AlertController) {
  }

  getLogin(){

    
    if(this.email == 'user@gmail.com' && this.password == '1234'){

      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.push(TabsPage);
    }
    else if(this.email == 'shop@gmail.com' && this.password == '1234'){

      this.loadCtrl.create({
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.navCtrl.push(ShopPage);
    }
    else{
      let alert = this.alertCtrl.create({
      title: 'Login Failed',
      message: 'Did you enter the right credentials?',
      buttons: ['Ok'],
      cssClass: 'alertDanger'
    });
    alert.present();
    }
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 
}
