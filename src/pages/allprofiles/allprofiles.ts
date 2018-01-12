import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AllprofilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allprofiles',
  templateUrl: 'allprofiles.html',
})
export class AllprofilesPage {
  profiles: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {

    this.allMembers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllprofilesPage');
  }
  showMenu() {
    this.navCtrl.push(HomePage);
  }

  allMembers() {
    this.storage.ready().then(() =>{
      this.storage.forEach((value)=>{
        this.profiles.push(value);

        alert("Fetch done");
      })
    }).catch();
    console.log(this.profiles);
  }
}
