import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
  {
     path: '', 
     component: SellerComponent,
    children : [
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path: 'home', component: HomeComponent },
      { path:'addproduct', component:AddProductComponent },
      { path:'changepassword', component:ChangePasswordComponent },
      { path:'profile', component:ProfileComponent },
      { path: 'updatestock', component:UpdateStockComponent },
      { path: 'vieworders', component:ViewOrdersComponent },
      { path:'viewproduct', component:ViewProductComponent }

    ]
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
