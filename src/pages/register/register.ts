import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  signInEmail(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => console.log('Đăng ký thành công')).catch(err => console.log(err.message));
  }
}
