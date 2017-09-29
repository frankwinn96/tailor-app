import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TailorDetailPage } from '../tailor-detail/tailor-detail'
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

shops: any

  constructor(public navCtrl: NavController, public httpprovider:HttpProvider, public navParams:NavParams) {

  }

  itemTapped(shop){
  	this.navCtrl.push(TailorDetailPage,{shop:shop})
  }
  ionViewDidLoad(){
  this.httpprovider.getShop().subscribe(
      data => {
        console.log(data)
        this.shops = data;
        console.log(this.shops)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('everything is ok!')
    }
    );
}

}
