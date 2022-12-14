import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  //added productSub observable so that i can share the data across the component, if any modification happns to my product data
  //it shoud be replicated toword the application
  public whishlistProducts:any[]=[];   
  public cartProducts:any[]=[];
  public products:any[]=[];       //these 3 variables are added to store product related data into 3 of them
  public productsRetreived:boolean = false;
    // added the smple flag to just keep a track of either product data is loaded from a server or not

  
    constructor(private httpClient:HttpClient) { }     //we need to inject the httpclient begore loading apiUrl
   
  
  //fetch the data from rest api
  public getProducts() {
    this.httpClient.get(`${environment.apiUrl}/products`).subscribe( (response)=>{
      this.productsSub.next(Object.assign([],response));
      this.productsRetreived = true;
    })
  }

  
  // add products to cart
  addProductToShoppingCart(prd:any, prdRemoveBool?: boolean, prdIdx=-1) {  //we are passing the prd=product object,
   //and prdRemoveBool=boolean flag to remove the product, and prdIdx=product index
    
   // add product into cart for multiple time.
    if(this.cartProducts.some(x=>x["id"]===prd["id"])) { 
      let idx = this.cartProducts.findIndex(x=> x["id"]===prd["id"]);
      this.cartProducts[idx]["quantity"] +=1;
      console.log(prd['title'], "Alreay Added to Cart, Quantity Updated");
    } else{
      this.cartProducts.push( {
        ...prd,
        "quantity": 1
      });
      console.log(prd['title'], "Product Added to Shoping Cart");
    }
  }

  // add products to whish 
  addProductToWhishlist(prd:any, prdRemoveBool?:boolean, prdIdx:number=-1) {
    if(!this.whishlistProducts.some(x=>x["id"]===prd["id"])) {
      this.whishlistProducts.push({
        ...prd, "quantity":1
      });
      console.log(prd['title'], "Product Added to Wishlist");
    } else {
      console.log(prd['title'], "Already Added to Wishlist");
    }
    if(prdRemoveBool) {
      this.products.splice(prdIdx, 1);
    }
  }

}
