import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import L from 'leaflet';
/**
 * http://leafletjs.com/
 * 
 * 
 * http://tphangout.com/ionic-3-leaflet-maps-geolocation-markers/
 * 
 * http://edupala.com/how-to-add-leaflet-map-in-ionic-3/
 * 
 * geojson on tiles
 * https://github.com/glenrobertson/leaflet-tilelayer-geojson
 * 
 * 
 */

@IonicPage()
@Component({
  selector: 'page-maplet',
  templateUrl: 'maplet.html',
})
export class MapletPage {

  @ViewChild(Slides) slides: Slides;
  // you can lock Swipes on the slides using this.slides.lockSwipes(shouldLockSwipes)

  // @ViewChild('map') mapContainer: ElementRef;

  center: L.PointTuple;
  map: L.Map;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * after the ion view loaded, we load the mpap
   */
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
      attribution: 'edupala.com © ionic LeafLet',
      maxZoom: 18
      // filter: function () {
      //   new L.CSSFilter(this, {
      //     filters: ['saturate(80%)']
      //   }).render();
      // }
    });
    baseLayer.addTo(this.map);

    // try to locate and zoom add a marker
    this.map.locate({
      setView: true,
      maxZoom: 15
    }).on('locationfound', (e) => {
      let markerGroup = L.featureGroup();
      let marker: any = L.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    });
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
  slideChanged(slidesObj) {
    console.log('MapletPage slideChanged ', slidesObj);
    if (this.slides.isEnd()){
      
    }
      // this.skipMsg = "Alright, I got it";
  }

  /**
   * As soon as a slide is dragged
   * this comes from ionSlideDrag: <ion-slides pager (ionSlideDidChange)="slideChanged()" (ionSlideDrag)="slideMoved()">
   */
  slideDragged(slidesObj) {
    console.log('MapletPage slideMoved ', slidesObj);

    //
    console.debug("evt._touches.startY", slidesObj._touches.startY);

    //http://idangero.us/swiper/api/#events

    if (slidesObj._touches && slidesObj._touches.startY < 400) {
      // if (slidesObj.originalEvent.stopPropagation) slidesObj.originalEvent.stopPropagation();
    } 
    else {

    }

    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) {
      // this.state = 'rightSwipe';
    }
    else {
      // this.state = 'leftSwipe';
    }
  }

  slideAutoplay(slidesObj) {
    console.log('MapletPage slideAutoplay', slidesObj);
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
