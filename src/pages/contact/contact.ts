import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

editTapped() {
    let modal = this.modalCtrl.create(EditPage);
    modal.present();
  }

}
