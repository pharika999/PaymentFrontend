import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 

  private customer:any;
  constructor(private http:HttpClient) {
    this.customer={};
   }
   getDataFromApi(url:string){
    return this.http.get(url);
  }
  getCustomer(){
    return this.customer;
  }
}