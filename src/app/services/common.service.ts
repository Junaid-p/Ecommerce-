import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = "http://127.0.0.1:8000/common/"
  adminUrl = "http://127.0.0.1:8000/ang_eco_admin/"

  constructor(private http : HttpClient) { }

  addSeller(formData : any):Observable<any>{

    return this.http.post(this.baseUrl + 'seller_reg',formData)

  }

  addCustomer(formData: any): Observable<any>{
    return this.http.post(this.baseUrl + 'customer_reg',formData)
  }

  customerLogin(formData:any): Observable<any>{
    return this.http.post(this.baseUrl + 'customer_login',formData)
  }

  sellerLogin(formData:any): Observable<any>{
    return this.http.post(this.baseUrl + 'seller_login',formData)
  }

  showCategory(){
    return this.http.get(this.adminUrl + 'view_category')
  }


}
