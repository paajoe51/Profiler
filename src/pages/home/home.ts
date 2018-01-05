import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddprofilePage } from '../addprofile/addprofile';
import { AllprofilesPage } from '../allprofiles/allprofiles';
import { LoadingController } from 'ionic-angular';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addprofile:any;
  allprofiles:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

addProfile(){
  this.navCtrl.push("AddprofilePage");
  
  }
allProfiles(){
  this.navCtrl.push("AllprofilesPage");
}
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  showAbout(){
    this.navCtrl.push("AboutPage");
  }

}
