import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { AdMobPro } from '@ionic-native/admob-pro';
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
              //private admob: AdMobPro
              ) {
    // platform.ready().then(() => {
    //   var admobid = {
    //     banner: 'ca-app-pub-9418566122843936/2035594494',
    //     interstitial: 'ca-app-pub-9418566122843936/2784697244'
    //   };
    //
    //   this.admob.createBanner({
    //     adId: admobid.banner,
    //     isTesting: true,
    //     autoShow: true,
    //     position: this.admob.AD_POSITION.BOTTOM_CENTER
    //   })
    //
    //   this.admob.prepareInterstitial({
    //     adId: admobid.interstitial,
    //     isTesting: true,
    //     autoShow: false
    //   })
    //
    // });
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
    // if (AdMobPro) {
    //   this.admob.showInterstitial();
    // }
  }

}
