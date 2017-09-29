import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
measures: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public httpprovider:HttpProvider) {

  }

editTapped() {
    let modal = this.modalCtrl.create(EditPage);
    modal.present();
  }

   ionViewDidLoad(){

  this.httpprovider.getMeasurement().subscribe(
      data => {
        console.log("data" + data)
        this.measures = data;
        console.log(this.measures)

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
