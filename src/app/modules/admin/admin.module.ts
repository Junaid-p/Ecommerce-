import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { AddCatelogComponent } from './components/add-catelog/add-catelog.component';
import { ViewCatelogComponent } from './components/view-catelog/view-catelog.component';
import { ViewSellerComponent } from './components/view-seller/view-seller.component';
import { ApproveSellerComponent } from './components/approve-seller/approve-seller.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AddCatelogComponent,
    ViewCatelogComponent,
    ViewSellerComponent,
    ApproveSellerComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
