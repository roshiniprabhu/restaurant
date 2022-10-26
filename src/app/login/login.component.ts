import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsernameValidator } from '../validators';
import { AppServiceService } from '../app.service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm: FormGroup;
  submitted = false;




  constructor(public formBuilder: FormBuilder,public router: Router,public appServiceService: AppServiceService) { 

 
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })

  }

   getLogin(){
       
 
   }


  onSubmit() {
    // if (this.loginForm.valid) {
    //   // this.router.navigateByUrl('/home');
    // }
    this.submitted = true;
    if (this.loginForm.valid) {
      this.appServiceService.getLogin(this.loginForm.value.username,this.loginForm.value.password)
      .subscribe(res => {
        console.log('res',res)
        if (res != null) {
          alert('Login successfull!!!');
          this.router.navigate(['/home']);
          // alert('Login successfull!!!');
      console.table(this.loginForm.value);
     
      }
      else
      {
       alert('Username OR Passwork is incorrect');
     }
    });
    
  }
  // else
  //  {
  //   alert('Login error');
  // }
}
}
