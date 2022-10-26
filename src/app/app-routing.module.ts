import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent }  from './employee-new/employee-new.component';
import { EmployeeComponent } from './employee/employee.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
   component: HomeComponent},
  {
    path: 'emp',
    component: EmployeeComponent
  },
  {
    path: 'employeelist',
    component: EmployeeListComponent
  },
  {
    path: 'employee/new',
    component: EmployeeNewComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeNewComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'fooddetails',
    component: FoodDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
