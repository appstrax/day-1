import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProductsPage } from '../products/products';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public buttons: Array<string>;
  
  constructor(public navCtrl: NavController, private http: Http) {

    if (localStorage.getItem("TOKEN")) {
      alert("Already logged in");
    
      this.http.get("http://localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
        result => {
          console.log(result.json());
        },
  
        err => {
          // Invalid, login!
        }
      );

    }

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
