import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeNewComponent } from '../employee-new/employee-new.component';
import { AppServiceService } from '../app.service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  totalCount?: number;

  editingData!: Employee;


  // ngOnInit() {
  //   this.employees = [
  //     {
  //       Id: 1,
  //       Name: 'Roshini',
  //       Email: 'abc@gmail.com',
  //       Phone: 8978675645,
  //       Salary: 25000,
  //       Department: 'Restaurant Manager'
  //     },
  //     {
  //       Id: 2,
  //       Name: 'Babloo',
  //       Email: 'abc@gmail.com',
  //       Phone: 8978675645,
  //       Salary: 25000,
  //       Department: 'Maintenance and cleaning staff'
  //     },
  //     {
  //       Id: 3,
  //       Name: 'test',
  //       Email: 'abc@gmail.com',
  //       Phone: 8978675645,
  //       Salary: 25000,
  //       Department: 'Head Chef'
  //     },
  //     {
  //       Id: 4,
  //       Name: 'test1',
  //       Email: 'abc@gmail.com',
  //       Phone: 8978675645,
  //       Salary: 25000,
  //       Department: 'Head Chef'
  //     },
  //     {
  //       Id: 5,
  //       Name: 'test2',
  //       Email: 'abc@gmail.com',
  //       Phone: 8978675645,
  //       Salary: 25000,
  //       Department: 'Server'
  //     },
  //     {
  //       Id: 6,
  //       Name: 'testman',
  //       Email: 'abc@gmail.com',
  //       Phone: 8978675645,
  //       Salary: 25000,
  //       Department: 'Server'
  //     },
  //   ];
  //   console.log(this.employees);
  //   let data = sessionStorage.getItem('employee');
  //   if(data != null){
  //     let value = JSON.parse(data);
  //     this.employees.push(value);
  //     console.log('ff',value);
  //   }
  constructor(private appServiceService: AppServiceService, private router: Router) { }

  ngOnInit() {

    this.getEmployeelist();



  }

  edit(id: any) {

    console.log("id", id)

    // this.employees.forEach(x => {

      if (id > 0) {

        this.router.navigate(['/employee/edit/' + id]);

        this.editingData = id;
        

        console.log("editingData", this.editingData);



      }

    


    
  }




  // new(id: any) {

  //   this.router.navigate(['/employee/edit', id]);

  // }

  getEmployeelist() {

    this.appServiceService.getEmployeeList().subscribe((res: any) => {
      this.employees = res;
      console.log('data', res);
      console.log("this.employees ", this.employees);
    });
    // this.totalCount = this.employees.length;
  }

  deleteEmployeeList(id : number ){
    this.appServiceService.deleteList(id).subscribe((del : any) => {
     this.employees = del;
     this.router.navigate(['/employeelist']);
    });
}




}
