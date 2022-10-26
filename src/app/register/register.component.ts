import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { AppServiceService } from '../app.service.service';
import {  Router } from '@angular/router';
import { ConfirmPasswordValidator } from '../confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerNew!: FormGroup;
  submitted:boolean = false;
 


  constructor(public formBuilder: FormBuilder,private appServiceService :AppServiceService,private router: Router){}


  ngOnInit(){
    this.registerNew = this.formBuilder.group({
      EmpId: new FormControl('',[Validators.required]),
      Name: new FormControl('', [Validators.required]),
      Gender: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      Password: new FormControl('', [Validators.required]),
      Cpassword: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]),
      Users: new FormControl('', [Validators.required])
    },
    {
      validator: ConfirmPasswordValidator("Password", "Cpassword")
    }
    );

   
  }

 

  onSubmit() {
    this.submitted = true;
    if(this.registerNew.valid)
    
    {
    ;
      this.appServiceService.regpostMethod(this.registerNew.value)
        .subscribe(res => {
          console.log('res',res)
          if (res) {
            this.router.navigate(['/home']);
        }
    });
  }
}
}

