import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProductsPage } from '../products/products';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public buttons: Array<string>;
  
  constructor(public navCtrl: NavController) {



  }

  navigateToLogin() {
    console.log("Navigating...");

    this.navCtrl.push(LoginPage);

    
  }

  navigateToProducts() {
    this.navCtrl.push(ProductsPage);
  }

  navigateToPage2() {

  }

}
