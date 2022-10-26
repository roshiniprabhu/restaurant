import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'pi pi-fw ', routerLink:'/dashboard'},
      {label: 'Employees', icon: 'pi pi-fw ', routerLink:'/emp'},
      {label: 'Food', icon: 'pi pi-fw ', routerLink:'/fooddetails'}
  ];
  }

}
