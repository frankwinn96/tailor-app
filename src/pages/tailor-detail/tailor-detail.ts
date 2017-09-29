import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TailorDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tailor-detail',
  templateUrl: 'tailor-detail.html',
})
export class TailorDetailPage {
tailordetail: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.tailordetail = navParams.get('shop');
  	console.log(this.tailordetail)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TailorDetailPage');
  }

}
