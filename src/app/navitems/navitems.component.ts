import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent implements OnInit {

  navitems:any;
  companyDetails:any

  constructor() { 
    this.companyDetails={
      name:'DBS',
      logo:"https://www.dbs.com/in/iwov-resources/flp/splitter/images/dbs_logo.svg"
  }
    this.navitems = [{
      text: "Login",
      link: "login"
    },
    {
      text: "Transaction",
      link: "transaction"
    }
  ]
  }

  ngOnInit(): void {
  }

}
