import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/providers/http/http.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { countryArray } from '../country-list';

@Component({
  selector: 'app-shared-signup',
  templateUrl: './shared-signup.component.html',
  styleUrls: ['./shared-signup.component.scss']
})
export class SharedSignupComponent implements OnInit {

  registratioForm1 : FormGroup;
  showEye : boolean = false;
  countryArr : any; 
  constructor(public router : Router, public httpService : HttpService,public commonService : CommonService) { 
    this.registratioForm1 = new FormGroup({        
      countryCode    : new FormControl('+91'),
      creatorName    : new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      mobileNumber   : new FormControl('', [Validators.required,Validators.pattern("^[0][1-9]\\d{9}$|^[1-9]\\d{6,15}$"), Validators.minLength(7)]),
      email          : new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]), 
      userFullName   : new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      password       : new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
    this.countryArr = countryArray
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    
  }

  /** to show and hide password */
  showHidePassword() {
    this.showEye = !this.showEye;
  }


  registrationFnc() {
    let data = {
      creatorName    :  this.registratioForm1.value.creatorName,
      countryCode    :  this.registratioForm1.value.countryCode,
      mobileNumber   :  this.registratioForm1.value.mobileNumber,
      email          :  this.registratioForm1.value.email,
      createFor      :  this.registratioForm1.value.userFullName,
      password       :  this.registratioForm1.value.password
    }
    this.httpService.put('user/signup',data,1).subscribe(res => {
      console.log('RegistrationStep1_Succ ==>',res);
      if(res['responseCode'] == 200){
        this.commonService.showSuccessToast('Please check your Mobile and Email for OTP.',false,'center');
        localStorage.setItem('userID',res['result']._id);
        localStorage.setItem('userToken',res['result'].token);
        localStorage.setItem('createFor',this.registratioForm1.value.userFullName)
        this.router.navigateByUrl('visitor/verifyOTP');
      }
    },err => {
      console.log('RegistrationStep1_Err ==>',err);
    })   
  }

}
