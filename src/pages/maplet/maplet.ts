import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the MapletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maplet',
  templateUrl: 'maplet.html',
})
export class MapletPage {

  @ViewChild(Slides) slides: Slides;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapletPage');
  }

  /**
   * When the slide really has changed
   */
  slideChanged() {
    console.log('slideChanged MapletPage');
    if (this.slides.isEnd()){
      
    }
      // this.skipMsg = "Alright, I got it";
  }

  /**
   * As soon as a slide is dragged
   */
  slideMoved() {
    console.log('slideMoved MapletPage');
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) {
      // this.state = 'rightSwipe';
    }
    else {
      // this.state = 'leftSwipe';
    }
  }

  // swipeEvent(evt:PointerEvent){
  //   console.log(evt);
  //   //evt.stopPropagation();
  //   evt.preventDefault();
  // }

}
