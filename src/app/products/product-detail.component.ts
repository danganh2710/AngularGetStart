import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Page Detail";
  languages: any[] = ["English", "Spain", "Other"];
  employee: Employee;
  hasErrorPrimaryLanguage:boolean=false;
  constructor(private _activateRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let id = +this._activateRouter.snapshot.paramMap.get('id');
    this.pageTitle = `${id}`;
    this.employee = new Employee('','Dang Hoang', true, "w2", "default");
  }

  onClick(id) {
    console.log(id);
    this._router.navigate(['/products']);
  }

  validatePrimaryLanguage(value){
    console.log(this.employee.primaryLanguage);
    if(value=="default")
      this.hasErrorPrimaryLanguage = true;
    else
      this.hasErrorPrimaryLanguage = false;
  }
}
