import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-sigup',
  templateUrl: './user-sigup.component.html',
  styleUrls: ['./user-sigup.component.css']
})
export class UserSigupComponent {


  constructor(private service : CommonService){}

  user_pic : any 

  onImagechange(event : any){
    this.user_pic = event.target.files[0]

  }

  backmessage : string = ''
  status : any = ""


  submit(formData:any){
    const customerData = new FormData()
    customerData.append('first_name', formData['first_name'])
    customerData.append('last_name',formData['last_name'])
    customerData.append('email',formData['email'])
    customerData.append('phone',formData['phone'])
    customerData.append('address',formData['address'])
    customerData.append('password',formData['password'])
    customerData.append('customer_pic',this.user_pic)


    this.service.addCustomer(customerData).subscribe((res : { message:string,status:any}) =>{

      console.log(res)
      this.backmessage = res.message
      this.status = res.status


    })
  }

}
