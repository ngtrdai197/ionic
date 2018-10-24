import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { Http } from '@angular/http';
import { Product } from '../../interface/product.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  urlServer = 'http://localhost:8088/api/product/getproducts';
  products: Product[] = [];

  constructor(public navCtrl: NavController, public http: Http) {

  }
  ngOnInit() {
    this.http.get(this.urlServer).map(data => data.json())
      .subscribe((data: Product[]) => this.products = data);
  }
  goToProductDetail() {
    this.navCtrl.push(ProductDetailPage);
  }

}
