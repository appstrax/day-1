import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ProductService {

    private products: Array<Product>;

    constructor(private http: Http) {
        this.products = [];
    }

    /*
        callback = function(err, data) { ... }
    */
    getAllProducts(callback) {
        this.products = [];

        // var product1: Product = new Product();
        // product1.id = 1;
        // product1.name = "Nike shoes";
        // product1.description = "Cool shoes";
        // product1.price = 500;
    
        // var product2: Product = new Product();
        // product2.id = 2;
        // product2.name = "Nike shoes 2";
        // product2.description = "Cool shoes 2 ";
        // product2.price = 600;

        // var product3: Product = new Product();
        // product3.id = 3;
        // product3.name = "Nike shoes 3";
        // product3.description = "Cool shoes 3";
        // product3.price = 700;
    
        // this.products.push(product1);
        // this.products.push(product2);
        // this.products.push(product3);

        // return this.products;

        // var url = "http://localhost:3000/pizzas";

        // if (topping1 != null) {
        //     url = url + "?toppings=" + topping1
        // }

        // "http://localhost:3000/pizzas?toppings=" + toppings + "&param2=" + param2
        this.http.get("http://localhost:3000/pizzas")
            .subscribe(
                result => {
                    console.log("Result: ", result);

                    callback(null, result.json());
                },

                err => {
                    console.log("Err: ", err);

                    callback(err, null);
                }
            );

        // this.http.get("url", {
        //     url: {
        //         toppings: "Pineapple"
        //     }
        // })
    }

    createProduct(productData: Product, callback: Function) {

        this.http.post("http://localhost:3000/pizzas", productData)
            .subscribe(
                result => {
                    callback(null, result.json());
                },

                err => {
                    callback(err, null);
                }
            );

    }
}