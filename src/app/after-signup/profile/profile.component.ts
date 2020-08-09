import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public httpService: HttpService,
    public commonService: CommonService
  ) {}

  userImg: any;
  showUser          : boolean = true;
  showPartner       : boolean = false;

  pBasicDetails     : boolean = false;
  pPhysicalDetails  : boolean = false;
  pReligionDetails  : boolean = false;
  pEducationDetails : boolean = false;
  pHealthDetails    : boolean = false;

  uBasicDetails     : boolean = false;
  uPhysicalDetails  : boolean = false;
  uReligionDetails  : boolean = false;  
  uHealthDetails    : boolean = false;
  uGenderDetails    : boolean = false;

  ngOnInit(): void {}

  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    let data = '';
    data = 'data:application/pdf;base64,' + btoa(e.target.result);
    // console.log(data);
    if (data) {
      this.uploadImage(data);
    }
  }

  uploadImage(data) {
    this.httpService.imageUpload('user/uploadImages', data, 1).subscribe(
      (res) => {
        console.log('uploading_Succ ==>', res);
        if (res['responseCode'] == 200) {
          this.userImg = res['result'];
          this.commonService.showSuccessToast(
            res['responseMessage'],
            true,
            'top-end'
          );
        }
      },
      (err) => {
        console.log('uploading_Err ==>', err);
      }
    );
  }

  showUserDetails(){
    this.showPartner = !this.showPartner;
    this.showUser = !this.showUser;
  }

  showUserSubDetails(item) {
    switch(item){
      case 1 :
        this.uBasicDetails = !this.uBasicDetails;
        break;
      case 2 :
        this.uReligionDetails = !this.uReligionDetails;        
        break;
      case 3 :
        this.uPhysicalDetails = !this.uPhysicalDetails;
        break;
      case 4 :
        this.uHealthDetails = !this.uHealthDetails;
        break;
        case 5 :
        this.uGenderDetails = !this.uGenderDetails;
        break;
      default :
        break;
    }
  }

  showPartnerDetails() {
    this.showPartner = !this.showPartner;
    this.showUser = !this.showUser;
  }

  showPartnerSubDetails(item) {
    switch(item){
      case 1 :
        this.pBasicDetails = !this.pBasicDetails;
        break;
      case 2 :
        this.pPhysicalDetails = !this.pPhysicalDetails;
        break;
      case 3 :
        this.pReligionDetails = !this.pReligionDetails;
        break;
      case 4 :
        this.pEducationDetails = !this.pEducationDetails;
        break;
        case 5 :
        this.pHealthDetails = !this.pHealthDetails;
        break;
      default :
        break;
    }
  }
}
