import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
   //public cartLength:number=0;
   //public whishlistLength:number=0;

  constructor(public productService: ProductsService, public authService:AuthService, private router:Router) { } 
  //we would be able to see the cart and whishlist number that why we are injecting the productService

  ngOnInit(): void {
    //this.cartLength = this.productService.cartProducts.length;
    //this.whishlistLength = this.productService.whishlistProducts.length;
  }

  public onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }

}
