import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SellerComponent,
    HomeComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewOrdersComponent,
    UpdateStockComponent,
    ChangePasswordComponent,
    ProfileComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
