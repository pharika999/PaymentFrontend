import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataService } from './data.service';
import { CustomerComponent } from './customer/customer.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavitemsComponent,
    EmployeeComponent,
    CustomerComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"",
        component:LoginComponent
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"transaction",
        component:TransferComponent
      },
      {
        path:"customer",
        component:CustomerComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
