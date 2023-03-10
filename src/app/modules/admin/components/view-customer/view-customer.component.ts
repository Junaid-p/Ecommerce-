import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {

  constructor(private service:AdminService){}

  customerList:any

  ngOnInit(){
    this.service.getCustomer().subscribe(res =>{
      this.customerList =res
    })
  }

}
