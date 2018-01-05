import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AllprofilesPage } from '../allprofiles/allprofiles';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addprofile',
  templateUrl: 'addprofile.html',
})
export class AddprofilePage {
  name:any;
  phone:number;
  address:any;
  residence:any;
  relation:any;
  detail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprofilePage');
  }

  showMenu(){
    this.navCtrl.push(HomePage);
  }

  allProfiles() {
    this.navCtrl.push("AllprofilesPage");
  }

  save() {
    let member = {
      name: this.name,
      phone: this.phone,
      address: this.address,
      residence: this.residence,
      relation: this.relation,
      detail: this.detail
    }
    let id = this.magicNumbers();
    this.storage.set('sandwich' + id, member).then(() => {
      alert("Datasaved");
    }).catch((error) => {
      console.log(error);
    });
     this.name = "Michael";
     this.phone = 123456789;
     this.address = "Box 50";
     this.residence = "Asikuma"
     this.relation = "brother";
     this.detail="nothing to display";
  }

  magicNumbers() {
    return Math.floor(Math.random() * 9999);
  }

  
}
