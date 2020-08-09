import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  async addUserFunc() {
    await Swal.fire({
      title: 'Create Profile for',
      input: 'select',      
      inputOptions: {
        'MySelf': 'MySelf',
        'Son': 'Son',
        'Brother': 'Brother',
        'Daughter': 'Daughter',
        'Sister': 'Sister',
        'Others': 'Others',
      },
      inputPlaceholder: 'select',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          console.log('value ==>',value);
          if(value){                 
            Swal.fire(`you have selected ${value}`);
            localStorage.setItem('profileFor',value);
            this.router.navigateByUrl('member/addUserStep-1');
          }else{
            Swal.fire(`Please select an option.`)
          }
        })
      }
    });    
    
  }

  viewUserProfile() {
    this.router.navigateByUrl('member/profile');
  }
}
