import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapletPage } from './maplet';

@NgModule({
  declarations: [
    MapletPage,
  ],
  imports: [
    IonicPageModule.forChild(MapletPage),
  ],
})
export class MapletPageModule {}
