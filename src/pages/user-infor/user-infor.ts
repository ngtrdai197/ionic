import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'page-user-infor',
  templateUrl: 'user-infor.html',
})
export class UserInforPage implements OnInit {
  fullname = '';
  email = '';
  photoUrl = '';
  accountSignIn = '';
  isLogin = true;

  constructor(public navCtrl: NavController, private afsAuth: AngularFireAuth) {

  }
  ngOnInit() {
    this.afsAuth.authState.subscribe(user => {
      if (!user) {
        this.isLogin = false;
        return;
      } else {
        this.isLogin = true;
        this.fullname = user.displayName;
        this.photoUrl = user.photoURL;
        this.email = user.email;
      }
    });
  }
  signIn(username, password) {
    this.afsAuth.auth.signInWithEmailAndPassword(username, password)
      .then(() => this.accountSignIn = 'Email')
      .catch(err => console.log(err.message));
  }
  signInWithFacebook() {
    this.afsAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        this.isLogin = true;
        this.accountSignIn = 'Facebook';
      });
  }

  signInWithGoogle() {
    this.afsAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.isLogin = true;
        this.accountSignIn = 'Google';
      });
  }

  signInWithGithub() {
    this.afsAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(() => {
        this.isLogin = true;
        this.accountSignIn = 'Github';
      });
  }

  signOut() {
    this.afsAuth.auth.signOut();
    this.isLogin = false;
  }

}
