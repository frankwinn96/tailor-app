import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ShopPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  qrScannerRoot = 'QrScannerPage'
  recentRoot = 'RecentPage'
  profileRoot = 'ProfilePage'


  constructor(public navCtrl: NavController) {}

}
