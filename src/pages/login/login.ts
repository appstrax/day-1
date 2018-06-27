import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  public email: string;
  public password: string;

  public names: Array<string>;
  public names2: string[];

  public complexObject: any;

  public flag: boolean = true;

  constructor(public navCtrl: NavController) {
    this.email = "miki@ixperience.co.za";

    this.names = [];

    this.names = [
      "miki",
      "perry",
      "sabreena"
    ];

    this.names.push("Erich");

    this.complexObject = {
      property1: "Some value",
      property2: "Another value"
    };
  }

  pressMe(argument1: string, argument2: number) {
    console.log("The email is: " + this.email);

    console.log("Argument 1:", argument1);
    console.log("Argument 2:", argument2);
  }

  loopOne() {

    for (var i = 0; i < this.names.length; i++) {
      console.log("Element: ", this.names[i]);
    }

    console.log("First element: ", this.names[0]);

  }

  loopTwo() {

    this.names.forEach((item) => {
      console.log("Element: ", item);
    });

  }

  login() {

    var age = "1";

    // if (age === 1) {
    //   // False
    // }

    if (this.password === "my-secure-password") {
      // Navigate
    } else {
      // Stay here...
    }

    // if (this.age < 21) {
    //   // No drinking allowed
    // } else {
    //   // Party
    // }
  }
}