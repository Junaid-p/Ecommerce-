import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: CommonService, private router:Router){}

  submit(formData : any){

    // const customerLoginData = new FormData()

    // customerLoginData.append('email',formData['email'])
    // customerLoginData.append('password',formData['password'])

    this.service.customerLogin(formData).subscribe((res:{statusCode:number,C_token:string,cname:string,}) =>{
        console.log(res)
      if(res.statusCode == 200) {
        localStorage.setItem('customerTocken',res.C_token)
        localStorage.setItem('customerName',res.cname)
        

        this.router.navigate(['/category'])


      }

    
    
    })
    

  }

}
