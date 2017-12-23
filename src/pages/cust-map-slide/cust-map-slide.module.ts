import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustMapSlidePage } from './cust-map-slide';

@NgModule({
  declarations: [
    CustMapSlidePage,
  ],
  imports: [
    IonicPageModule.forChild(CustMapSlidePage),
  ],
})
export class CustMapSlidePageModule {}
