import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TableModule } from 'primeng/table';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule, } from 'primeng/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { HomeComponent } from './home/home.component';
import { MessageService } from 'primeng/api';
// import { SignupComponent } from './signup/signup.component';
import { AppServiceService } from './app.service.service';
import { HttpClientModule } from '@angular/common/http';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodService } from './food-details/food.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    DashboardComponent,
    HomeComponent,
    // SignupComponent,
    FoodDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    TableModule,
    DropdownModule,
    CardModule,
    TabMenuModule,
    MenuModule,
    HttpClientModule
  
  
  ],
  providers: [MessageService,AppServiceService,FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
