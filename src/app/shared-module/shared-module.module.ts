import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {  httpModifierInterceptor } from '../providers/http/http.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedSignupComponent } from './shared-signup/shared-signup.component';
import { SharedSideNavComponent } from './shared-side-nav/shared-side-nav.component';
import { MatchDetailsComponent } from "../modals/match-details/match-details.component";
import { MatchedModalComponent } from './matched-modal/matched-modal.component';

@NgModule({
  declarations: [
  SharedSignupComponent,
  SharedSideNavComponent,
  MatchDetailsComponent,
  MatchedModalComponent
],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    NgxSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedSignupComponent,
    SharedSideNavComponent,
    MatchDetailsComponent
  ],
  providers : [    
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: httpModifierInterceptor,
      multi: true 
    }
  ],
  entryComponents: [
    MatchDetailsComponent
  ]
})
export class SharedModuleModule { }
