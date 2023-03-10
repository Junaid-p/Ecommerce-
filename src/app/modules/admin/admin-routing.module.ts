import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCatelogComponent } from './components/add-catelog/add-catelog.component';
import { ApproveSellerComponent } from './components/approve-seller/approve-seller.component';
import { HomeComponent } from './components/home/home.component';
import { ViewCatelogComponent } from './components/view-catelog/view-catelog.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { ViewSellerComponent } from './components/view-seller/view-seller.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminComponent,
        children : [
            { path: '', redirectTo:'home', pathMatch:'full'},
            { path: 'home', component:HomeComponent },
            { path:'addcatelog', component:AddCatelogComponent },
            { path : 'approveseller', component:ApproveSellerComponent},
            { path: 'viewcatelog', component:ViewCatelogComponent },
            { path: 'viewcustomer', component:ViewCustomerComponent },
            { path: 'viewseller', component:ViewSellerComponent }
        ]
      
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
