import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  customerLogin(customerLoginData: FormData) {
    throw new Error('Method not implemented.');
  }

  baseUrl = "http://127.0.0.1:8000/ang_eco_admin/"

  constructor(private http: HttpClient) { }

  addCategory(formdata : any ): Observable <any>{

    return this.http.post(this.baseUrl + 'add_category',formdata)

  }

  getcatagory(){
    return this.http.get(this.baseUrl + 'view_category')
  }

  getSeller(){
    return this.http.get(this.baseUrl +'view_seller')
  }

  getCustomer(){
    return this.http.get(this.baseUrl + 'view_customer')
  }

}
