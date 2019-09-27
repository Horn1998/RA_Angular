import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import {Router} from '@angular/router'




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status = {"default":undefined}
  control_name = "default"
  address_list:any=[
    {"number":"+86"},
    {"number":"+87"},
    {"number":"+88"},
    {"number":"+89"}
  ];
  user_list:any = {
      username:"",
      password:"",
      valid_pass:"",
      phone:"",
      age:"",
      sex:"",
    
  }
  constructor(public http:HttpClient, public fb: FormBuilder, public Router:Router) { }
  validateForm: FormGroup;

  submitForm(): void {
    let regist_message = {}
    let validate = true
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      regist_message[i] = this.validateForm.controls[i].value;
      this.validateForm.controls[i].value;
      console.log(i,this.validateForm.controls[i].status)
      if(this.validateForm.controls[i].status =="INVALID")
      {
          validate = false
      }
    }
    if(validate)
    {
      const  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    var api = "http://localhost:8000/todo/Register";
    this.http.post(api,regist_message,httpOptions).subscribe((response:any)=>{
      alert(response.error)
    })
    }
    else 
    alert("信息填写有误！")
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  Return(){
    this.Router.navigateByUrl('login');
  }




  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      agree: [false], 
    });
  }
} 

 

