import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  url = 'http://localhost:8088/api/user/getusers';
  users: any[] = [];
  constructor(public navCtrl: NavController, public http: Http) {

  }

  ngOnInit() {
    this.http.get(this.url).map(data => data.json()).subscribe(data => this.users = data);
  }

  signIn(username, password) {
    this.users.forEach(e => {
      if (e.username === username && e.password === password) {
        console.log('thanh cong');
      }
    });
  }
}
