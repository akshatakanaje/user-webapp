import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { WhishListComponent } from './whish-list/whish-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import {  HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  { path: '', component: ProductsComponent},
  { path: 'whishlist', component: WhishListComponent},
  { path: 'cartlist', component: CartListComponent},
  { path: 'viewproduct', component: ViewproductComponent},
  { path: 'checkout', component: CheckoutComponent}
]

@NgModule({
  declarations: [
    ProductsComponent,
    CartListComponent,
    WhishListComponent,
    CheckoutComponent,
    ViewproductComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), 
  ],
  exports: [RouterModule],
  providers: []
})
export class ProductsModule { }
