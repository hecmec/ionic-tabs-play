import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustMapSlidePage page.
 * 
 * custom navigation with standard swipe on container
 * 
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cust-map-slide',
  templateUrl: 'cust-map-slide.html',
})
export class CustMapSlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustMapSlidePage');
  }

  /**
   * standard swipe event on a container
   * (swipe)="swipeEvent($event)" 
   * @param evt 
   */
  swipeEvent(evt:any) {
    console.log(evt);
    //evt.stopPropagation();
    evt.preventDefault();

    if (evt.deltaX < 0) {
      this.navCtrl.push('SlidesPage');
    }
  }

}
