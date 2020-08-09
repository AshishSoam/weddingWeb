import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterSignupRoutingModule } from './after-signup-routing.module';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CartComponent } from './cart/cart.component';
import { MySubscriptionsComponent } from './my-subscriptions/my-subscriptions.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { InterestedListComponent } from './interested-list/interested-list.component';
import { RejectionListComponent } from './rejection-list/rejection-list.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { PictureBoxesComponent } from './picture-boxes/picture-boxes.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AccountComponent } from './account/account.component';
import { AddUserStep1Component } from './add-user-step1/add-user-step1.component';
import { AddUserStep2Component } from './add-user-step2/add-user-step2.component';
import { AddUserStep3Component } from './add-user-step3/add-user-step3.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MatchListComponent, MatchDetailsComponent, NotificationsComponent, CartComponent, MySubscriptionsComponent, FavouriteListComponent, InterestedListComponent, RejectionListComponent, ProposalListComponent, PictureBoxesComponent, ProfileComponent, AddUserComponent, AccountComponent, AddUserStep1Component, AddUserStep2Component, AddUserStep3Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AfterSignupRoutingModule
  ]
})
export class AfterSignupModule { }
