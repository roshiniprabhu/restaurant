import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [`
      :host ::ng-deep button {
          margin-right: .25em;
      }
  `]
})
export class EmployeeComponent  {
  


  items!: MenuItem[] ;

    

  activeItem!: MenuItem;

    

    ngOnInit() {
        this.items = [
           {label: 'Employee list', icon: 'pi pi-fw ',routerLink: '/employeelist'}
        ]; 

       

        this.activeItem = this.items[0];
        console.log('result',this.items);
    
    }
}
