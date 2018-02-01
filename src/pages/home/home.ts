import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private platform: Platform,
              private adMobFree: AdMobFree
              ) {
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova')) {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-9418566122843936/2035594494',
        isTesting: false,
        autoShow: true
      }

      this.adMobFree.banner.config(bannerConfig);

      this.adMobFree.banner.prepare().then(() => {

      }).catch(e => console.log(e));
    }
  }

  showInterstitialAd() {
  }

}
