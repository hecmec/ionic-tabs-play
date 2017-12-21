import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
//import { DetailPage } from '../detail/detail';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    for(let i = 0; i<10; i++){
      this.items.push({
        text:'item_' + i,
        id: i
      });
    }
  }

  itemSelected(item){
  // for lazy load we use strings, otherwise the calss
  this.navCtrl.push('DetailPage', {
      'item': item,
      'id': item.id
    });
  }
}
