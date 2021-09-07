import { Component } from '@angular/core';
import { CustomerService } from 'src/service/customer.service';
;

 

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  
  private customer : any;
  constructor(public custsvc:CustomerService) {

  }
  getCustomer(){
    return this.customer;
  }
  
  ngOnInit(): void {
    if (this.custsvc.getCustomer.length == 0) {
      this.custsvc.getDataFromApi('http://localhost:8080/customers/42895235807723')
        .subscribe((result: any) => {
          this. customer=result;
        },(err:any)=>{
          console.log(err);
        })
    }
  }

 

}