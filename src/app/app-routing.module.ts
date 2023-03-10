import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { SellerLoginComponent } from './components/seller-login/seller-login.component';
import { SellerSigupComponent } from './components/seller-sigup/seller-sigup.component';
import { UserSigupComponent } from './components/user-sigup/user-sigup.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';

const routes: Routes = [
  { path: '',redirectTo:'category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  {path: 'myorder', component:MyOrdersComponent},
  { path:'zipcode', component:ZipcodeComponent },
  { path: 'product', component:ProductComponent },
  { path: 'productdetails', component:ProductDetailsComponent },
  { path: 'seller-sigup', component:SellerSigupComponent},
  { path: 'customer-sigup' , component:UserSigupComponent },
  { path: 'seller-login', component:SellerLoginComponent },
  { path: 'login', component:LoginComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'seller', loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule) },
  { path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
