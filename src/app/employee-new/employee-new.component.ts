import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Department } from './Department';
import { UsernameValidator } from '../validators';
import { AppServiceService } from '../app.service.service';
import { Employee } from '../employee-list/employee.model';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent {


  departments!: Department[];
  employeeNew!: FormGroup;
  submitted = false;
  selectedDepartment!: Department;
  items!: SelectItem[];
  item!: string;
  employeeId: any;




  constructor(public formBuilder: FormBuilder,
    public appServiceService: AppServiceService, public router: Router, public route: ActivatedRoute,) { }

  ngOnInit() {

    let eid = this.route.snapshot.params['id'];
    this.employeeId = eid > 0 ? eid : 0;
    this.editEmployee(eid)
    if (this.employeeId > 0) {
      this.appServiceService.getById(this.employeeId);
    }


    this.departments = [];


    this.departments.push(
      { department: 'Restaurant Manager', value: '1' },
      { department: 'Server', value: '2' },
      { department: 'Head Chef', value: '3' },
      { department: 'Dishwasher', value: '4' },
      { department: 'Maintenance and cleaning staff', value: '5' }
    );
    console.log('value', this.departments);

    this.employeeNew = this.formBuilder.group({
      Id: new FormControl(0),
      Name: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace]),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      Phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]),
      Salary: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required])
    });

    


  }

  editEmployee(eid: number) {
    if (eid > 0) {
      this.appServiceService.getById(eid).subscribe(employeeNew => {
        this.employeeId = eid;
        let employee = {
          Id: employeeNew.id,
          Name: employeeNew.name,
          Email: employeeNew.email,
          Phone: employeeNew.phone,
          Salary: employeeNew.salary,
          Department: employeeNew.department

        };
        (<FormGroup>this.employeeNew).setValue(employee, { onlySelf: true });
      });
    }

    
  }

  get f() { return this.employeeNew.controls; }

  // bindData(employeeId: any) {
  //   this.employeeNew.value.Id();
  //   console.log("EditorId", this.employeeNew);
  // }

  onSubmit() {
    this.submitted = true;
    // if (this.employeeNew) {
    //   console.log('value',this.employeeNew.value)
    //   sessionStorage.setItem('employee',JSON.stringify(this.employeeNew.value));
    let data = new Employee();
    data.department = this.employeeNew.value.Department.department;
    data.id = this.employeeNew.value.id;
    data.phone = this.employeeNew.value.Phone;
    data.name = this.employeeNew.value.Name;
    data.email = this.employeeNew.value.Email;
    data.salary = this.employeeNew.value.Salary;
    console.log('Id',data.id, this.employeeId);
    if (this.employeeId == 0) {
     
      this.appServiceService.postMethod(data)
        .subscribe(res => {
          if (res) {
            this.editEmployee
            this.router.navigate(['/employeelist']);
          }
        });
    }
    else {
      if (this.employeeNew.valid)
       {
        data.id = this.employeeId;
          this.appServiceService.putMethod(data)
            .subscribe(res => {
              if (res) {
                this.router.navigate(['/employeelist']);
              }
            });
          
      }
    }
  }
}


