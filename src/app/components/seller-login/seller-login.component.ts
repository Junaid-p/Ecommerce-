import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {

  constructor(private service:CommonService, private router:Router){}

  submit(formData : any){
    // const sellerLoginData = new FormData()

    // sellerLoginData.append('user_name',formData['username'])
    // sellerLoginData.append('password',formData['password'])

    this.service.sellerLogin(formData).subscribe((res:{statusCode:number,token:string,sname:string}) =>{

      if(res.statusCode == 200){
        localStorage.setItem('sellerTocken',res.token)
        localStorage.setItem('sellerName',res.sname)


        this.router.navigate(['/seller/home'])
      }




    })
  }

}
