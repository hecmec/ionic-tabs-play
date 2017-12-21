import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  // lazy
  tab2Root = 'MapletPage';
  tab3Root = ContactPage;
  tab4Root = 'SlidesPage';
  
  constructor(public navCtrl: NavController) {

  }

  showSlides(){
    this.navCtrl.push('SlidesPage');
  }
}
