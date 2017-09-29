import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TailorDetailPage } from './tailor-detail';

@NgModule({
  declarations: [
    TailorDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TailorDetailPage),
  ],
})
export class TailorDetailPageModule {}
