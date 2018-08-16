import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {
  user = { id: '', first_name: '', last_name: '', email: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewuserPage');
  }

  saveUser() { 
    this.restProvider.saveUser(this.user).then((result) => { 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }

  
}
