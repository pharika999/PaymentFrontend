import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerUser:any;
  employee:any;
  flag:any;
  constructor(private dataservice:DataService, private router:Router) { 
    this.flag=true;
    this.customerUser={
      userId:'',
      password:''
    }
    this.employee={
      empId:'',
      password:''
    }
  }

  ngOnInit(): void {
  }

  onChange(value:any)
  {
    //console.log(value.name);
    if(value.name==="customerLogin")
    this.flag=true;
    else
    this.flag=false;
  }
  apiResult={
    success:false,
    error:false
  }

  handleLogin(){
      /*let url = ''
      let payLoad = {
        "UserId":this.customerUser.userId,
        "PASSWORD":this.customerUser.password
      }
      this.dataservice.postApi(url, payLoad).subscribe(result => {
        console.log(result);
        this.apiResult.success=true;
        this.apiResult.error =false;
      }, err => {
        this.apiResult.success=false;
        this.apiResult.error =true;
      })*/
      console.log("Button clicked")
      this.router.navigate(['/customer']);
  }

}
