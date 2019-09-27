import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router'
import { NzResultComponent } from 'ng-zorro-antd';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public list:any[] =[];
  
  public time:any =2*60*60*1000;// cookie过期时间两个小时 2*60*60*1000

  

  constructor(public http:HttpClient,private cookieService:CookieService,private myRouter:Router) { }

  userList = {
    'user':"",
    'pass':""
  }
  ngOnInit() {
    console.log(this.cookieService.get("userName"))
    this.userList.user = this.cookieService.get("userName")
  } 

  VerifyLogin(){
    const  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    var api = "http://localhost:8000/todo/Login";
    this.http.post(api, {"username":this.userList.user,'password':this.userList.pass},httpOptions).subscribe((response:any)=>{
      if(response.error != undefined)
      {
        alert(response.error.answer)
        console.log(response.error.content)
      }
      else if (response.success != undefined)
      {
        alert(response.success.answer)
        console.log(response.success.content)
        this.myRouter.navigateByUrl("common");

      }
    })
  }

  VerifyRegister(){
      this.myRouter.navigateByUrl('/register').finally();
  }
  //加密
  Encrypt(word){  
    var key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");   

    var srcs = CryptoJS.enc.Utf8.parse();  
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});  
    return encrypted.toString();  
  }  
  //解密
  Decrypt(word){  
    var key = CryptoJS.enc.Utf8.parse("abcdefgabcdefg12");   

    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});  
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();  
  }  

  rem_User(){
    
    this.cookieService.set( "userName", this.userList.user,new Date(new Date().getTime() + this.time) );
  }


}

