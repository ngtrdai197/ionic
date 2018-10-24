import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Movie } from '../../interface/movie.model';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  urlServer = 'https://ngtrdai-api.herokuapp.com/movies/api';
  movies: Movie[] = [];
  constructor(
    public navCtrl: NavController,
    public http: Http,
    public navPrams: NavParams
  ) { }
  ngOnInit() {
    this.http.get(this.urlServer).map(data => data.json())
      .subscribe((data: Movie[]) => this.movies = data);
  }
  goToProductDetail(movie: Movie) {
    this.navCtrl.push(ProductDetailPage, { isProduct: movie}, {duration: 1000, easing:'ease-out'});
  }

}
