import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/providers/http/http.service';
import { CommonService } from 'src/app/providers/common/common.service';
import Swal from 'sweetalert2';
declare var $ : any;

@Component({
  selector: 'app-shared-side-nav',
  templateUrl: './shared-side-nav.component.html',
  styleUrls: ['./shared-side-nav.component.scss']
})
export class SharedSideNavComponent implements OnInit {
  selectedUrl: string;

  constructor(public router : Router, public httpService : HttpService, public commonService : CommonService) { }

  ngOnInit(): void {
    this.selectedUrl = this.router.url;
    console.log(this.router.url);
  }

  navigationFunc(url) {
    if(localStorage.getItem('isLoggedIn')){
      // $('.collapse-2').toggleClass('newClass');
      this.router.navigateByUrl(url);
      this.selectedUrl = url;
    }else{
      Swal.fire({
        title: 'Wedding App',
        text: 'Please login to access these features!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Okay',
        cancelButtonText: 'Leave'
      }).then((result) => {
        if (result.value) {
          // Swal.fire(
          //   'Thankyou!',
          //   '',
          //   'success'
          // )
          // $('.collapse-2').toggleClass('newClass');
          this.router.navigateByUrl('visitor/login');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          $('.collapse-2').toggleClass('newClass');
          Swal.fire(
            'Thankyou!',
            '',
            'success'
          )
        }
      });
    }    
  }

  logoutFunc(){
    localStorage.clear();
    // $('.collapse-2').toggleClass('newClass');
    // this.commonService.changeLoginSub(false);  
    this.commonService.showSuccessToast('Logged out Successfully!',false, 'center');
    this.router.navigateByUrl('visitor/home');
  }

}
