import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import L from 'leaflet';
/**
 * http://leafletjs.com/
 * 
 * http://tphangout.com/ionic-3-leaflet-maps-geolocation-markers/
 * 
 * http://edupala.com/how-to-add-leaflet-map-in-ionic-3/
 * 
 * geojson on tiles
 * https://github.com/glenrobertson/leaflet-tilelayer-geojson
 * 
 */

@IonicPage()
@Component({
  selector: 'page-maplet',
  templateUrl: 'maplet.html',
})
export class MapletPage {

  @ViewChild(Slides) slides: Slides;
  // @ViewChild('map') mapContainer: ElementRef;

  center: L.PointTuple;
  map: L.Map;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.center = [47.2184, -1.5536];
    console.log('ionViewDidLoad MapletPage');
    this.loadmap();
  }
  ionViewWillEnter() {
    console.debug('ionViewWillEnter');
    
  }
  ionViewDidLeave() {
    console.debug('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.debug('ionViewWillUnload');
  }

  loadmap() {
    // this.map = leaflet.map("map").fitWorld();
    
    this.map = L.map('map', {
      center: this.center,
      zoom: 13
    });

    // L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    //   attribution: 'edupala.com © ionic LeafLet'
    // }).addTo(this.map);
    
    // var tileUrl = 'http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg';
    var tileUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'

    var baseLayer = new L.TileLayer(tileUrl, {
      attribution: 'edupala.com © ionic LeafLet'
      // filter: function () {
      //   new L.CSSFilter(this, {
      //     filters: ['saturate(80%)']
      //   }).render();
      // }
    });
    baseLayer.addTo(this.map);

    // var marker = new L.Marker(this.center);
    // this.map.addLayer(marker);

    // marker.bindPopup("<p>Hello from <p>Nants</p>");

  }

  loadmapOSM() {
    var map = L.map('map').setView([51.505, -0.09], 13);
    
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
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

  swipeEvent(evt:PointerEvent) {
    console.log('swipe', evt);
    //evt.stopPropagation();
    //evt.preventDefault();
  }
  // panEvent(evt: PointerEvent) {
  //   console.log('pan', evt);
  //   //evt.stopPropagation();
  //   //evt.preventDefault();
  // }

  
}
