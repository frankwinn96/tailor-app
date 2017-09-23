import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMeasurementPage } from './user-measurement';

@NgModule({
  declarations: [
    UserMeasurementPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMeasurementPage),
  ],
})
export class UserMeasurementPageModule {}
