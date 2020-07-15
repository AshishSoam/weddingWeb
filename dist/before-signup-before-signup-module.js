(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["before-signup-before-signup-module"],{

/***/ "./src/app/before-signup/about-us/about-us.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/before-signup/about-us/about-us.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class AboutUsComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.staticContentFunc();
    }
    staticContentFunc() {
        this.httpService.get('static/getStaticContent?Type=ABOUT_US', 0).subscribe(res => {
            console.log('staticContent==>', res);
            this.aboutUsContent = res.result[0].description;
        }, err => {
            console.log(err);
            // this.httpService.showError();
        });
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 30, vars: 1, consts: [[1, "common-section"], [1, "container"], [1, "about-wedding-app"], [1, "wedding_app"], [2, "font-size", "24px"], [1, "row"], [1, "col-sm-12", "col-md-7"], [1, "about_content"], [1, "col-sm-12", "col-md-5"], [1, "signup-page-1"], ["type", "text", "placeholder", "Full Name*", "name", "user-name", "required", ""], ["type", "tel", "placeholder", "Mobile Number*", "name", "user-mob", "required", ""], ["type", "text", "placeholder", "Create Profile for*", "name", "profile-for", "required", ""], ["type", "password", "placeholder", "Create New Password*", "name", "user-pass", "required", "", "id", "creat-pass"], ["id", "show-pass", "title", "view password", "aria-hidden", "true", 1, "far", "fa-eye-slash"], [1, "sr-only"], ["id", "none-pass", "title", "hide password", "aria-hidden", "true", 1, "far", "fa-eye"], ["type", "submit"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "view password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "hide password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboutUsContent, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n  margin: 15px 0px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ni#show-pass[_ngcontent-%COMP%], i#none-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  bottom: 25%;\n  z-index: 2;\n}\n\n@media screen and (max-width: 1220px) {\n  section[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 370px);\n    overflow: auto;\n  }\n}\n\n@media screen and (max-width: 660px) {\n  section[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  section[_ngcontent-%COMP%] {\n    padding: 10px 0px 30px 0px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n\n.about-wedding-app[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtBQUNKOztBQUlBOztFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsY0FBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLGlCQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJO0lBQ0ksMEJBQUE7RUFITjtBQUNGOztBQU9BO0VBQVcsK0JBQUE7QUFKWDs7QUFLQTtFQUFvQiwyQkFBQTtBQURwQiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXBhZ2UtMSB7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIG1hcmdpbjogMTVweCAwcHggMTBweDtcbn1cblxuLnNpZ251cC1wYWdlLTEgZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaWdudXAtcGFnZS0xIGg0IHtcbiAgICBtYXJnaW46IDA7XG59XG5cblxuXG5pI3Nob3ctcGFzcyxcbmkjbm9uZS1wYXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIlO1xuICAgIGJvdHRvbTogMjUlO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzcwcHgpO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMzBweCAwcHg7XG4gICAgfVxufVxuXG4vL0Fhc2hpc2ggQ3NzLi4uLi5cbi5jb250YWluZXJ7bWluLWhlaWdodDpjYWxjKDEwMHZoIC0gNTAwcHgpO31cbi5hYm91dC13ZWRkaW5nLWFwcCB7bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/before-signup-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/before-signup/before-signup-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: BeforeSignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeSignupRoutingModule", function() { return BeforeSignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/before-signup/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/before-signup/about-us/about-us.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/before-signup/faq/faq.component.ts");
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packages/packages.component */ "./src/app/before-signup/packages/packages.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store.component */ "./src/app/before-signup/store/store.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/before-signup/login/login.component.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/before-signup/blog-list/blog-list.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./career/career.component */ "./src/app/before-signup/career/career.component.ts");
/* harmony import */ var _success_stories_success_stories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./success-stories/success-stories.component */ "./src/app/before-signup/success-stories/success-stories.component.ts");
/* harmony import */ var _registration_step1_registration_step1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registration-step1/registration-step1.component */ "./src/app/before-signup/registration-step1/registration-step1.component.ts");
/* harmony import */ var _registration_step2_registration_step2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registration-step2/registration-step2.component */ "./src/app/before-signup/registration-step2/registration-step2.component.ts");
/* harmony import */ var _registration_step3_registration_step3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registration-step3/registration-step3.component */ "./src/app/before-signup/registration-step3/registration-step3.component.ts");
/* harmony import */ var _registration_step4_registration_step4_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration-step4/registration-step4.component */ "./src/app/before-signup/registration-step4/registration-step4.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/before-signup/contact-us/contact-us.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/before-signup/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/before-signup/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _after_signup_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../after-signup/cart/cart.component */ "./src/app/after-signup/cart/cart.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/before-signup/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./verify-otp/verify-otp.component */ "./src/app/before-signup/verify-otp/verify-otp.component.ts");























const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'aboutUs', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"] },
    { path: 'packages', component: _packages_packages_component__WEBPACK_IMPORTED_MODULE_5__["PackagesComponent"] },
    { path: 'store', component: _store_store_component__WEBPACK_IMPORTED_MODULE_6__["StoreComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'blogs', component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_8__["BlogListComponent"] },
    { path: 'cart', component: _after_signup_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"] },
    { path: 'careers', component: _career_career_component__WEBPACK_IMPORTED_MODULE_9__["CareerComponent"] },
    { path: 'contactUs', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"] },
    { path: 'termsOfUse', component: _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_16__["TermsOfUseComponent"] },
    { path: 'forgotPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"] },
    { path: 'verifyOTP', component: _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_20__["VerifyOTPComponent"] },
    { path: 'privacyPolicy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyPolicyComponent"] },
    { path: 'successStories', component: _success_stories_success_stories_component__WEBPACK_IMPORTED_MODULE_10__["SuccessStoriesComponent"] },
    { path: 'registrationStep-1', component: _registration_step1_registration_step1_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationStep1Component"] },
    { path: 'registrationStep-2', component: _registration_step2_registration_step2_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationStep2Component"] },
    { path: 'registrationStep-3', component: _registration_step3_registration_step3_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationStep3Component"] },
    { path: 'registrationStep-4', component: _registration_step4_registration_step4_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationStep4Component"] },
];
class BeforeSignupRoutingModule {
}
BeforeSignupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BeforeSignupRoutingModule });
BeforeSignupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BeforeSignupRoutingModule_Factory(t) { return new (t || BeforeSignupRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BeforeSignupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeforeSignupRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/before-signup/before-signup.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/before-signup/before-signup.module.ts ***!
  \*******************************************************/
/*! exports provided: BeforeSignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeSignupModule", function() { return BeforeSignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _before_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./before-signup-routing.module */ "./src/app/before-signup/before-signup-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/before-signup/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/before-signup/about-us/about-us.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/before-signup/faq/faq.component.ts");
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packages/packages.component */ "./src/app/before-signup/packages/packages.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store.component */ "./src/app/before-signup/store/store.component.ts");
/* harmony import */ var _success_stories_success_stories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./success-stories/success-stories.component */ "./src/app/before-signup/success-stories/success-stories.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/before-signup/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/before-signup/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/before-signup/contact-us/contact-us.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./career/career.component */ "./src/app/before-signup/career/career.component.ts");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/before-signup/blog-list/blog-list.component.ts");
/* harmony import */ var _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog-details/blog-details.component */ "./src/app/before-signup/blog-details/blog-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/before-signup/login/login.component.ts");
/* harmony import */ var _registration_step1_registration_step1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./registration-step1/registration-step1.component */ "./src/app/before-signup/registration-step1/registration-step1.component.ts");
/* harmony import */ var _registration_step2_registration_step2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./registration-step2/registration-step2.component */ "./src/app/before-signup/registration-step2/registration-step2.component.ts");
/* harmony import */ var _registration_step3_registration_step3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./registration-step3/registration-step3.component */ "./src/app/before-signup/registration-step3/registration-step3.component.ts");
/* harmony import */ var _registration_step4_registration_step4_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./registration-step4/registration-step4.component */ "./src/app/before-signup/registration-step4/registration-step4.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/before-signup/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./verify-otp/verify-otp.component */ "./src/app/before-signup/verify-otp/verify-otp.component.ts");
/* harmony import */ var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-mydatepicker */ "./node_modules/angular-mydatepicker/__ivy_ngcc__/fesm2015/angular-mydatepicker.js");

























class BeforeSignupModule {
}
BeforeSignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BeforeSignupModule });
BeforeSignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BeforeSignupModule_Factory(t) { return new (t || BeforeSignupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            angular_mydatepicker__WEBPACK_IMPORTED_MODULE_23__["AngularMyDatePickerModule"],
            _before_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["BeforeSignupRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BeforeSignupModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"], _packages_packages_component__WEBPACK_IMPORTED_MODULE_6__["PackagesComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_7__["StoreComponent"], _success_stories_success_stories_component__WEBPACK_IMPORTED_MODULE_8__["SuccessStoriesComponent"], _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_9__["TermsOfUseComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"], _career_career_component__WEBPACK_IMPORTED_MODULE_12__["CareerComponent"], _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_13__["BlogListComponent"], _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_14__["BlogDetailsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _registration_step1_registration_step1_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationStep1Component"], _registration_step2_registration_step2_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationStep2Component"], _registration_step3_registration_step3_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationStep3Component"], _registration_step4_registration_step4_component__WEBPACK_IMPORTED_MODULE_19__["RegistrationStep4Component"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"], _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_22__["VerifyOTPComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        angular_mydatepicker__WEBPACK_IMPORTED_MODULE_23__["AngularMyDatePickerModule"],
        _before_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["BeforeSignupRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeforeSignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"], _packages_packages_component__WEBPACK_IMPORTED_MODULE_6__["PackagesComponent"], _store_store_component__WEBPACK_IMPORTED_MODULE_7__["StoreComponent"], _success_stories_success_stories_component__WEBPACK_IMPORTED_MODULE_8__["SuccessStoriesComponent"], _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_9__["TermsOfUseComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"], _career_career_component__WEBPACK_IMPORTED_MODULE_12__["CareerComponent"], _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_13__["BlogListComponent"], _blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_14__["BlogDetailsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _registration_step1_registration_step1_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationStep1Component"], _registration_step2_registration_step2_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationStep2Component"], _registration_step3_registration_step3_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationStep3Component"], _registration_step4_registration_step4_component__WEBPACK_IMPORTED_MODULE_19__["RegistrationStep4Component"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"], _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_22__["VerifyOTPComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    angular_mydatepicker__WEBPACK_IMPORTED_MODULE_23__["AngularMyDatePickerModule"],
                    _before_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["BeforeSignupRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/before-signup/blog-details/blog-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/before-signup/blog-details/blog-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: BlogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function() { return BlogDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BlogDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogDetailsComponent.ɵfac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(); };
BlogDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 2, vars: 0, template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvYmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-details',
                templateUrl: './blog-details.component.html',
                styleUrls: ['./blog-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/blog-list/blog-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/before-signup/blog-list/blog-list.component.ts ***!
  \****************************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class BlogListComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogListComponent.ɵfac = function BlogListComponent_Factory(t) { return new (t || BlogListComponent)(); };
BlogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogListComponent, selectors: [["app-blog-list"]], decls: 112, vars: 0, consts: [[1, "blog-section"], [1, "container"], [1, "row"], [1, "col-xl-12"], [1, "col-xl-9"], [1, "blog_row"], ["href", "blog-details.html", 1, "blog_column"], [1, "blog_img"], ["src", "assets/img/matching-img-1.png", "alt", "matching image", "title", "matching image"], [1, "blog-column-content"], [1, "far", "fa-clock"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12", "col-12"], [1, "signup-page-1"], ["type", "text", "placeholder", "Full Name*", "name", "user-name", "required", ""], ["type", "tel", "placeholder", "Mobile Number*", "name", "user-mob", "required", ""], ["type", "text", "placeholder", "Create Profile for*", "name", "profile-for", "required", ""], ["type", "password", "placeholder", "Create New Password*", "name", "user-pass", "required", "", "id", "creat-pass"], ["id", "show-pass", "title", "view password", "aria-hidden", "true", 1, "far", "fa-eye-slash"], [1, "sr-only"], ["id", "none-pass", "title", "hide password", "aria-hidden", "true", 1, "far", "fa-eye"], ["type", "submit"]], template: function BlogListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wedding App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Top 5 Indian Wedding Trends To Behold In 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2019-02-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " What will your future be like? How compatible will you be with your partner? How many \u2018gunas\u2019 will match with your prospective partner? Well, marriage is a vital decision in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Top 5 Indian Wedding Trends To Behold In 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2019-02-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " What will your future be like? How compatible will you be with your partner? How many \u2018gunas\u2019 will match with your prospective partner? Well, marriage is a vital decision in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Top 5 Indian Wedding Trends To Behold In 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2019-02-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " What will your future be like? How compatible will you be with your partner? How many \u2018gunas\u2019 will match with your prospective partner? Well, marriage is a vital decision in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Top 5 Indian Wedding Trends To Behold In 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "2019-02-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " What will your future be like? How compatible will you be with your partner? How many \u2018gunas\u2019 will match with your prospective partner? Well, marriage is a vital decision in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Top 5 Indian Wedding Trends To Behold In 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "2019-02-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " What will your future be like? How compatible will you be with your partner? How many \u2018gunas\u2019 will match with your prospective partner? Well, marriage is a vital decision in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Top 5 Indian Wedding Trends To Behold In 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "2019-02-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " What will your future be like? How compatible will you be with your partner? How many \u2018gunas\u2019 will match with your prospective partner? Well, marriage is a vital decision in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "view password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "hide password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  margin: 15px 0px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 25%;\n  right: 3%;\n}\n\ni#none-pass[_ngcontent-%COMP%] {\n  bottom: 25%;\n  right: 3%;\n}\n\n@media screen and (max-width: 1220px) {\n  section[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n\n@media screen and (max-width: 660px) {\n  section[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  section[_ngcontent-%COMP%] {\n    padding: 10px 0px 30px 0px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9ibG9nLWxpc3QvYmxvZy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxpQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLDBCQUFBO0VBRE47QUFDRjs7QUFJQTtFQUFXLCtCQUFBO0FBRFgiLCJmaWxlIjoic3JjL2FwcC9iZWZvcmUtc2lnbnVwL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXBhZ2UtMSB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIG1hcmdpbjogMTVweCAwcHggMTBweDtcbn1cblxuLnNpZ251cC1wYWdlLTEgZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmkjc2hvdy1wYXNzIHtcbiAgICBib3R0b206IDI1JTtcbiAgICByaWdodDogMyU7XG59XG5cbmkjbm9uZS1wYXNzIHtcbiAgICBib3R0b206IDI1JTtcbiAgICByaWdodDogMyU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMzBweCAwcHg7XG4gICAgfVxufVxuLy9BYXNoaXNoIENzc1xuLmNvbnRhaW5lcnttaW4taGVpZ2h0OmNhbGMoMTAwdmggLSA1MDBweCk7fVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-list',
                templateUrl: './blog-list.component.html',
                styleUrls: ['./blog-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/career/career.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/before-signup/career/career.component.ts ***!
  \**********************************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class CareerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CareerComponent.ɵfac = function CareerComponent_Factory(t) { return new (t || CareerComponent)(); };
CareerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CareerComponent, selectors: [["app-career"]], decls: 57, vars: 0, consts: [[1, "common-section"], [1, "container"], [1, "row"], [1, "about-wedding-app"], [1, "wedding_app"], [1, "row", 2, "margin-right", "0", "margin-left", "0"], [1, "col-xl-9", "col-md-8", "col-sm-12", "col-12"], [1, "career"], [1, "career-column"], [1, "col-xl-7"], [1, "career-img"], ["src", "assets/img/career-image-1.jpg", "alt", "career image", "title", "career image"], [1, "col-xl-5"], ["src", "assets/img/career-image-2.jpg", "alt", "career image", "title", "career image"], ["src", "assets/img/career-image-3.jpg", "alt", "career image", "title", "career image"], [1, "col-xl-3", "col-md-4", "col-sm-12", "col-12"], [1, "signup-page-1"], ["type", "text", "placeholder", "Full Name*", "name", "user-name", "required", ""], ["type", "tel", "placeholder", "Mobile Number*", "name", "user-mob", "required", ""], ["type", "text", "placeholder", "Create Profile for*", "name", "profile-for", "required", ""], ["type", "password", "placeholder", "Create New Password*", "name", "user-pass", "required", "", "id", "creat-pass"], ["id", "show-pass", "title", "view password", "aria-hidden", "true", 1, "far", "fa-eye-slash"], [1, "sr-only"], ["id", "none-pass", "title", "hide password", "aria-hidden", "true", 1, "far", "fa-eye"], ["type", "submit"]], template: function CareerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "35 Million");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Active User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "10 Million");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "App Downloads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "6 Million");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Success Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2 Million");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Social Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "view password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "hide password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  margin: 15px 0px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 22%;\n}\n\ni#none-pass[_ngcontent-%COMP%] {\n  bottom: 22%;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3%;\n  bottom: 35%;\n  cursor: pointer;\n  z-index: 2;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 25%;\n}\n\ni#none-pass[_ngcontent-%COMP%] {\n  bottom: 25%;\n}\n\ni#none-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4%;\n  bottom: 25%;\n  cursor: pointer;\n  z-index: 2;\n  display: none;\n}\n\n@media screen and (max-width: 1220px) {\n  section[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n\n@media screen and (max-width: 660px) {\n  section[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .common-section[_ngcontent-%COMP%]   .about-wedding-app[_ngcontent-%COMP%] {\n    padding: 0px 0px 0px 10px;\n  }\n\n  section[_ngcontent-%COMP%] {\n    padding: 10px 0px 30px 0px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxpQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLHlCQUFBO0VBRE47O0VBSUU7SUFDSSwwQkFBQTtFQUROO0FBQ0Y7O0FBS0E7RUFBVywrQkFBQTtBQUZYIiwiZmlsZSI6InNyYy9hcHAvYmVmb3JlLXNpZ251cC9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1wYWdlLTEge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICBtYXJnaW46IDE1cHggMHB4IDEwcHg7XG59XG5cbi5zaWdudXAtcGFnZS0xIGZvcm0gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lnbnVwLXBhZ2UtMSBoNCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pI3Nob3ctcGFzcyB7XG4gICAgYm90dG9tOiAyMiU7XG59XG5cbmkjbm9uZS1wYXNzIHtcbiAgICBib3R0b206IDIyJTtcbn1cblxuaSNzaG93LXBhc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMyU7XG4gICAgYm90dG9tOiAzNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbmkjc2hvdy1wYXNzIHtcbiAgICBib3R0b206IDI1JTtcbn1cblxuaSNub25lLXBhc3Mge1xuICAgIGJvdHRvbTogMjUlO1xufVxuXG5pI25vbmUtcGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0JTtcbiAgICBib3R0b206IDI1JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgLmNvbW1vbi1zZWN0aW9uIC5hYm91dC13ZWRkaW5nLWFwcCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDMwcHggMHB4O1xuICAgIH1cbn1cblxuLy9BYXNoaXNoIENzc1xuLmNvbnRhaW5lcnttaW4taGVpZ2h0OmNhbGMoMTAwdmggLSA1MDBweCk7fVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CareerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-career',
                templateUrl: './career.component.html',
                styleUrls: ['./career.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/contact-us/contact-us.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/before-signup/contact-us/contact-us.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class ContactUsComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.staticContentFunc();
    }
    staticContentFunc() {
        this.httpService.get('static/getStaticContent?Type=CONTACT_US', 0).subscribe(res => {
            console.log('staticContent==>', res);
            this.contactUs = res.result[0];
        }, err => {
            console.log(err);
        });
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 45, vars: 3, consts: [[1, "common-section"], [1, "container"], [1, "row"], [1, "about-wedding-app"], [1, "wedding_app"], ["id", "row_margin", 1, "row"], [1, "col-xl-9"], [1, "contact-1"], [1, "boldClass"], [1, "col-xl-3", "col-lg-5", "col-md-12", "col-sm-3", "col-12"], [1, "signup-page-1"], ["type", "text", "placeholder", "Full Name*", "name", "user-name", "required", ""], ["type", "tel", "placeholder", "Mobile Number*", "name", "user-mob", "required", ""], ["type", "text", "placeholder", "Create Profile for*", "name", "profile-for", "required", ""], ["type", "password", "placeholder", "Create New Password*", "name", "user-pass", "required", "", "id", "creat-pass"], ["id", "show-pass", "title", "view password", "aria-hidden", "true", 1, "far", "fa-eye-slash"], [1, "sr-only"], ["id", "none-pass", "title", "hide password", "aria-hidden", "true", 1, "far", "fa-eye"], ["type", "submit"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Saudi Arabia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "H.No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " XXX, XXXXX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Telephone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "view password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "hide password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactUs == null ? null : ctx.contactUs.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactUs == null ? null : ctx.contactUs.phoneNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactUs == null ? null : ctx.contactUs.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  margin: 15px 0px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 25%;\n  right: 3%;\n}\n\ni#none-pass[_ngcontent-%COMP%] {\n  bottom: 25%;\n  right: 3%;\n}\n\n@media screen and (max-width: 460px) {\n  .common-section[_ngcontent-%COMP%]   .about-wedding-app[_ngcontent-%COMP%] {\n    padding: 10px 0px 30px 10px;\n  }\n\n  #row_margin[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n\n.boldClass[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: 600;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSwyQkFBQTtFQUNOOztFQUVFO0lBQ0ksZUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFBVywrQkFBQTtBQUNYOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1wYWdlLTEge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICBtYXJnaW46IDE1cHggMHB4IDEwcHg7XG59XG5cbi5zaWdudXAtcGFnZS0xIGZvcm0gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lnbnVwLXBhZ2UtMSBoNCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pI3Nob3ctcGFzcyB7XG4gICAgYm90dG9tOiAyNSU7XG4gICAgcmlnaHQ6IDMlO1xufVxuXG5pI25vbmUtcGFzcyB7XG4gICAgYm90dG9tOiAyNSU7XG4gICAgcmlnaHQ6IDMlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIC5jb21tb24tc2VjdGlvbiAuYWJvdXQtd2VkZGluZy1hcHAge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAzMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgI3Jvd19tYXJnaW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxufVxuLy9BYXNoaXNoIENzc1xuLmNvbnRhaW5lcnttaW4taGVpZ2h0OmNhbGMoMTAwdmggLSA1MDBweCk7fVxuLmJvbGRDbGFzcyB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDtcbn0gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/faq/faq.component.ts":
/*!****************************************************!*\
  !*** ./src/app/before-signup/faq/faq.component.ts ***!
  \****************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FaqComponent_div_5_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function FaqComponent_div_5_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function FaqComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showHideFunc(item_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FaqComponent_div_5_i_7_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FaqComponent_div_5_i_8_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q. ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1 == null ? null : item_r1.question, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(item_r1 == null ? null : item_r1.showAnswer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1 == null ? null : item_r1.showAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(item_r1 == null ? null : item_r1.showAnswer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.answer);
} }
class FaqComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.faq = [];
    }
    ngOnInit() {
        $("#Trigger").click(function () {
            if ($("#Slider").hasClass("slideup"))
                $("#Slider").removeClass("slideup").addClass("slidedown");
            else
                $("#Slider").removeClass("slidedown").addClass("slideup");
        });
        this.staticContentFunc();
    }
    showHideFunc(data, i) {
        this.faq.forEach((element, index) => {
            if (index == i) {
                element.showAnswer = !element.showAnswer;
            }
        });
    }
    staticContentFunc() {
        this.httpService.get('static/getStaticContent?Type=FAQ', 0).subscribe(res => {
            console.log('staticContent==>', res);
            this.faq = res.result[0].FAQ;
            this.faq.forEach(element => {
                element.showAnswer = false;
            });
        }, err => {
            console.log(err);
        });
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 6, vars: 1, consts: [[1, "section-faqs"], [1, "container"], [2, "text-align", "center", "font-size", "20px", "color", "#6d6d6d", "margin", "0px 0px 20px 0px"], [1, "_faq_row"], ["class", "_faq_column", 4, "ngFor", "ngForOf"], [1, "_faq_column"], [1, "_show_hide_faq", 3, "click"], ["id", "span"], ["class", "fa fa-chevron-down", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-chevron-up", "aria-hidden", "true", 4, "ngIf"], [1, "answerClass", "animate__animated", "animate__zoomIn", 3, "hidden"], [1, "mt20"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["aria-hidden", "true", 1, "fa", "fa-chevron-up"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FaqComponent_div_5_Template, 14, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faq);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 600px);\n}\n\n._show_hide_faq[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n._faq_column[_ngcontent-%COMP%] {\n  max-height: none !important;\n}\n\n.answerClass[_ngcontent-%COMP%] {\n  border-top: 1px solid #dcd8d8 !important;\n}\n\n.mt20[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsK0JBQUE7QUFFWDs7QUFEQTtFQUNJLG1CQUFBO0FBSUo7O0FBREE7RUFDSSwyQkFBQTtBQUlKOztBQUZBO0VBQ0ksd0NBQUE7QUFLSjs7QUFIQTtFQUNJLDJCQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9iZWZvcmUtc2lnbnVwL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDYwMHB4KTt9XG4uX3Nob3dfaGlkZV9mYXF7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZDhkODtcbn1cbi5fZmFxX2NvbHVtbiB7XG4gICAgbWF4LWhlaWdodDogbm9uZSFpbXBvcnRhbnQ7XG59XG4uYW5zd2VyQ2xhc3Mge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNkOGQ4ICFpbXBvcnRhbnQ7XG59XG4ubXQyMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss'],
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/forgot-password/forgot-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/before-signup/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ForgotPasswordComponent_h1_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid Email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.loginType == "mobile");
} }
const _c0 = function (a0) { return { "disableCss": a0 }; };
const _c1 = function () { return ["/visitor/login"]; };
class ForgotPasswordComponent {
    constructor(httpService, commonService, router) {
        this.httpService = httpService;
        this.commonService = commonService;
        this.router = router;
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
        });
    }
    ngOnInit() {
    }
    forgotPasswordFunc() {
        let data = {
            email: this.forgotPasswordForm.value.emailId
        };
        this.httpService.post('user/forgotPassword', data, 0).subscribe(res => {
            console.log('forgotPassword_Resp ==> ', res);
            if (res.responseCode == 200) {
                localStorage.setItem('userID', res['result']);
                this.commonService.showSuccessToast(res.responseMessage, false, 'center');
                this.router.navigateByUrl('visitor/verifyOTP');
            }
        }, err => {
            console.log('forgotPassword_Err', err);
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 57, vars: 8, consts: [[1, "forgot-password"], [1, "container"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "xs-12"], [1, "forgot-password-form"], [3, "formGroup"], [1, "form-group", "d-flex"], ["type", "email", "data-toggle", "tooltip", "data-placement", "top", "title", "Email", "formControlName", "emailId", "placeholder", "Email*", 1, "form-control"], ["style", "color:red;font-size: 13px !important;", 3, "hidden", 4, "ngIf"], ["type", "submit", 3, "disabled", "ngClass", "click"], ["href", "javascript:;", "id", "register", 3, "routerLink"], [1, "find-special-someone"], [1, "find-someone"], [1, "find-icon"], [1, "icon-1"], [1, "icon-2"], ["href", "#"], ["aria-hidden", "true", 1, "fas", "fa-edit"], [1, "find-content"], [1, "icon-3"], [1, "icon-4"], ["aria-hidden", "true", 1, "fas", "fa-users"], [1, "icon-5"], [1, "icon-6"], ["aria-hidden", "true", 1, "fas", "fa-comments"], [2, "color", "red", "font-size", "13px !important", 3, "hidden"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Provide your Email Id...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForgotPasswordComponent_h1_13_Template, 2, 1, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_14_listener() { return ctx.forgotPasswordFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "FORGOT PASSWORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Find your Special Someone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Login and complete or Update your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Select & Connect with Matches you like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Interact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Become a Premium Member & Start a Conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.get("emailId").hasError("pattern") && ctx.forgotPasswordForm.get("emailId").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.forgotPasswordForm.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.forgotPasswordForm.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  margin-top: -38px;\n}\n\n.find-special-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  text-align: center;\n  line-height: 30px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #a6a6a6;\n  position: absolute;\n  top: 22%;\n  right: -17%;\n  transform: translate(-50%, -50%);\n}\n\n@media screen and (max-width: 1220px) {\n  .container[_ngcontent-%COMP%] {\n    width: 970px;\n  }\n}\n\n@media screen and (max-width: 990px) {\n  .container[_ngcontent-%COMP%] {\n    width: 760px;\n  }\n\n  section[_ngcontent-%COMP%] {\n    margin-top: -10px;\n  }\n\n  .find-special-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    top: 22%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n\n  .forgot-password[_ngcontent-%COMP%] {\n    margin-top: 85px;\n  }\n\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n}\n\na#register[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTs7O0VBR0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksWUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFlBQUE7RUFBTjs7RUFHRTtJQUNJLGlCQUFBO0VBQU47O0VBR0U7OztJQUdJLFdBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0k7SUFDSSxXQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJO0lBQ0ksV0FBQTtFQUZOOztFQUtFOzs7SUFHSSxRQUFBO0VBRk47O0VBS0U7OztJQUdJLFdBQUE7RUFGTjs7RUFLRTtJQUNJLGdCQUFBO0VBRk47O0VBS0U7SUFDSSxZQUFBO0VBRk47QUFDRjs7QUFNQTtFQUNJLGtCQUFBO0FBSko7O0FBTUE7RUFBVywrQkFBQTtBQUZYIiwiZmlsZSI6InNyYy9hcHAvYmVmb3JlLXNpZ251cC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogLTM4cHg7XG59XG5cbi5maW5kLXNwZWNpYWwtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTEgLmljb24tMjo6YWZ0ZXIsXG4uZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMyAuaWNvbi00OjphZnRlcixcbi5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi01IC5pY29uLTY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMiU7XG4gICAgcmlnaHQ6IC0xNyU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTcwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzYwcHg7XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cblxuICAgIC5maW5kLXNwZWNpYWwtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTEgLmljb24tMjo6YWZ0ZXIsXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTMgLmljb24tNDo6YWZ0ZXIsXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTUgLmljb24tNjo6YWZ0ZXIge1xuICAgICAgICByaWdodDogLTE0JTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTEgLmljb24tMjo6YWZ0ZXIsXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTMgLmljb24tNDo6YWZ0ZXIsXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTUgLmljb24tNjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDIyJTtcbiAgICB9XG5cbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMSAuaWNvbi0yOjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMyAuaWNvbi00OjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgIHJpZ2h0OiAtMTQlO1xuICAgIH1cblxuICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiA4NXB4O1xuICAgIH1cblxuICAgIC5hcnJvd191cCB7XG4gICAgICAgIGJvdHRvbTogNTJweDtcbiAgICB9XG5cbn1cblxuYSNyZWdpc3RlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lcnttaW4taGVpZ2h0OmNhbGMoMTAwdmggLSA1MDBweCk7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/before-signup/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a0) { return { "error": a0 }; };
function HomeComponent_h1_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*First Name must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.registratioForm1.get("username").hasError("required") && ctx_r0.registratioForm1.get("username").dirty));
} }
function HomeComponent_h1_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*First Name accepts character only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r11 == null ? null : data_r11.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r11 == null ? null : data_r11.code, " ", data_r11 == null ? null : data_r11.country, " ");
} }
function HomeComponent_h1_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Mobile must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.registratioForm1.get("mobile").hasError("required") && ctx_r3.registratioForm1.get("mobile").dirty));
} }
function HomeComponent_h1_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid mobile number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_h1_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Email must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.registratioForm1.get("emailId").hasError("required") && ctx_r5.registratioForm1.get("emailId").dirty));
} }
function HomeComponent_h1_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid Email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_h1_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Profile Name must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r7.registratioForm1.get("profileFor").hasError("required") && ctx_r7.registratioForm1.get("profileFor").dirty));
} }
function HomeComponent_h1_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Profile Name accepts character only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_i_100_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_i_100_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.showHidePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_i_101_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_i_101_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showHidePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "disableCss": a0 }; };
const _c2 = function () { return ["/visitor/registrationStep-1"]; };
class HomeComponent {
    constructor(httpService, commonService, router) {
        this.httpService = httpService;
        this.commonService = commonService;
        this.router = router;
        this.showEye = false;
        this.countryArr = [
            {
                "country": "India",
                "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"],
                "code": "+91"
            },
            {
                "country": "Algeria",
                "states": ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "Muaskar", "Medea", "Mila", "Mostaganem", "M'Sila", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"],
                "code": "+213"
            },
            {
                "country": "Andorra",
                "states": ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"],
                "code": "+376"
            },
            {
                "country": "Angola",
                "states": ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uige", "Zaire"],
                "code": "+244"
            },
            {
                "country": "Anguilla",
                "states": ["Big Spring Cave", "East End Pond"],
                "code": "+1264"
            },
            {
                "country": "Antigua & Barbuda",
                "states": ["St. John's"],
                "code": "+1268"
            },
            {
                "country": "Argentina",
                "states": ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
                "code": "+54"
            },
            {
                "country": "Armenia",
                "states": ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"],
                "code": "+374"
            },
            {
                "country": "Aruba",
                "states": ["Oranjestad"],
                "code": "+297"
            },
            {
                "country": "Australia",
                "states": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria"],
                "code": "+61"
            },
            {
                "country": "Austria",
                "states": ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"],
                "code": "+43"
            },
            {
                "country": "Azerbaijan",
                "states": ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Astara Rayonu", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lerik Rayonu", "Masalli Rayonu", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Susa Rayonu", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu", "Ali Bayramli Sahari", "Baki Sahari", "Ganca Sahari", "Lankaran Sahari", "Mingacevir Sahari", "Naftalan Sahari", "Saki Sahari", "Sumqayit Sahari", "Susa Sahari", "Xankandi Sahari", "Yevlax Sahari", "Naxcivan Muxtar"],
                "code": "+994"
            },
            {
                "country": "Bahamas",
                "states": ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nichollstown and Berry Islands", "Ragged Island", "Rock Sound", "Sandy Point", "San Salvador and Rum Cay"],
                "code": "+1242"
            },
            {
                "country": "Bahrain",
                "states": ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Madinat Hamad", "Madinat 'Isa", "Juzur Hawar", "Sitrah"],
                "code": "+973"
            },
            {
                "country": "Bangladesh",
                "states": ["Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Sylhet"],
                "code": "+880"
            },
            {
                "country": "Barbados",
                "states": ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"],
                "code": "+1246"
            },
            {
                "country": "Belarus",
                "states": ["Brest", "Homyel", "Horad Minsk", "Hrodna", "Mahilyow", "Minsk", "Vitsyebsk"],
                "code": "+375"
            },
            {
                "country": "Belgium",
                "states": ["Antwerpen", "Brabant Wallon", "Brussels", "Flanders", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "Wallonia", "West-Vlaanderen"],
                "code": "+32"
            },
            {
                "country": "Belize",
                "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"],
                "code": "+501"
            },
            {
                "country": "Benin",
                "states": ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Oueme", "Plateau", "Zou"],
                "code": "+229"
            },
            {
                "country": "Bermuda",
                "states": ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint George's", "Sandys", "Smith's", "Southampton", "Warwick"],
                "code": "+1441"
            },
            {
                "country": "Bhutan",
                "states": ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"],
                "code": "+975"
            },
            {
                "country": "Bolivia",
                "states": ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"],
                "code": "+591"
            },
            {
                "country": "Bosnia Herzegovina",
                "states": ["Una-Sana [Federation]", "Posavina [Federation]", "Tuzla [Federation]", "Zenica-Doboj [Federation]", "Bosnian Podrinje [Federation]", "Central Bosnia [Federation]", "Herzegovina-Neretva [Federation]", "West Herzegovina [Federation]", "Sarajevo [Federation]", " West Bosnia [Federation]", "Banja Luka [RS]", "Bijeljina [RS]", "Doboj [RS]", "Fo?a [RS]", "Sarajevo-Romanija [RS]", "Trebinje [RS]", "Vlasenica [RS]"],
                "code": "+387"
            },
            {
                "country": "Botswana",
                "states": ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North East", "North West", "South East", "Southern"],
                "code": "+261"
            },
            {
                "country": "Brazil",
                "states": ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"],
                "code": "+55"
            },
            {
                "country": "Brunei",
                "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"],
                "code": "+673"
            },
            {
                "country": "Bulgaria",
                "states": ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"],
                "code": "+359"
            },
            {
                "country": "Burkina Faso",
                "states": ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komondjari", "Kompienga", "Kossi", "Koulpelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passore", "Poni", "Sanguie", "Sanmatenga", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundweogo"],
                "code": "+226"
            },
            {
                "country": "Burundi",
                "states": ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"],
                "code": "+257"
            },
            {
                "country": "Cambodia",
                "states": ["Banteay Mean Chey", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Koh Kong", "Kracheh", "Mondol Kiri", "Otdar Mean Chey", "Pouthisat", "Preah Vihear", "Prey Veng", "Rotanakir", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takao", "Keb", "Pailin", "Phnom Penh", "Preah Seihanu"],
                "code": "+855"
            },
            {
                "country": "Cameroon",
                "states": ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"],
                "code": "+237"
            },
            {
                "country": "Canada",
                "states": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"],
                "code": "+1"
            },
            {
                "country": "Cape Verde Islands",
                "states": ["Barlavento", "Santo Antão", "São Vicente", "Santa Luzia", "São Nicolau", "Boa Vista", "Sal"],
                "code": "+238"
            },
            {
                "country": "Central African Republic",
                "states": ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kemo", "Lobaye", "Mambere-Kadei", "Mbomou", "Nana-Grebizi", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha-Mbaere", "Vakaga"],
                "code": "+236"
            },
            {
                "country": "Chile",
                "states": ["Aysen", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "O'Higgins", "Los Lagos", "Magallanes y la Antartica Chilena", "Maule", "Santiago Region Metropolitana", "Tarapaca", "Valparaiso"],
                "code": "+56"
            },
            {
                "country": "China",
                "states": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"],
                "code": "+86"
            },
            {
                "country": "Colombia",
                "states": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota District Capital", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres & Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"],
                "code": "+57"
            },
            {
                "country": "Comoros",
                "states": ["Grande Comore (Njazidja)", "Anjouan (Nzwani)", "Moheli (Mwali)"],
                "code": "+269"
            },
            {
                "country": "Congo",
                "states": ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"],
                "code": "+242"
            },
            {
                "country": "Costa Rica",
                "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"],
                "code": "+506"
            },
            {
                "country": "Croatia",
                "states": ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozesko-Slavonska", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagreb", "Zagrebacka"],
                "code": "+385"
            },
            {
                "country": "Cuba",
                "states": ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"],
                "code": "+53"
            },
            {
                "country": "Cyprus North",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+90392"
            },
            {
                "country": "Cyprus South",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+357"
            },
            {
                "country": "Czech Republic",
                "states": ["Jihocesky Kraj", "Jihomoravsky Kraj", "Karlovarsky Kraj", "Kralovehradecky Kraj", "Liberecky Kraj", "Moravskoslezsky Kraj", "Olomoucky Kraj", "Pardubicky Kraj", "Plzensky Kraj", "Praha", "Stredocesky Kraj", "Ustecky Kraj", "Vysocina", "Zlinsky Kraj"],
                "code": "+42"
            },
            {
                "country": "Denmark",
                "states": ["Arhus", "Bornholm", "Frederiksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"],
                "code": "+45"
            },
            {
                "country": "Djibouti",
                "states": ["Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"],
                "code": "+253"
            },
            {
                "country": "Dominica",
                "states": ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"],
                "code": "+1809"
            },
            {
                "country": "Dominican Republic",
                "states": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "Elias Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "Sanchez Ramirez", "San Cristobal", "San Jose de Ocoa", "San Juan", "San Pedro de Macoris", "Santiago", "Santiago Rodriguez", "Santo Domingo", "Valverde"],
                "code": "+1809"
            },
            {
                "country": "Ecuador",
                "states": ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"],
                "code": "+593"
            },
            {
                "country": "Egypt",
                "states": ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"],
                "code": "+20"
            },
            {
                "country": "El Salvador",
                "states": ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "Santa Ana", "San Vicente", "Sonsonate", "Usulutan"],
                "code": "+503"
            },
            {
                "country": "Equatorial Guinea",
                "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"],
                "code": "+240"
            },
            {
                "country": "Eritrea",
                "states": ["Anseba", "Debub", "Debubawi K'eyih Bahri", "Gash Barka", "Ma'akel", "Semenawi Keyih Bahri"],
                "code": "+291"
            },
            {
                "country": "Estonia",
                "states": ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laanemaa (Haapsalu)", "Laane-Virumaa (Rakvere)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuressaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"],
                "code": "+372"
            },
            {
                "country": "Ethiopia",
                "states": ["Addis Ababa", "Afar", "Amhara", "Binshangul Gumuz", "Dire Dawa", "Gambela Hizboch", "Harari", "Oromia", "Somali", "Tigray", "Southern Nations, Nationalities, and Peoples Region"],
                "code": "+251"
            },
            {
                "country": "Fiji",
                "states": ["Central (Suva)", "Eastern (Levuka)", "Northern (Labasa)", "Rotuma", "Western (Lautoka)"],
                "code": "+679"
            },
            {
                "country": "Finland",
                "states": ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"],
                "code": "+358"
            },
            {
                "country": "France",
                "states": ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"],
                "code": "+33"
            },
            {
                "country": "Gabon",
                "states": ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"],
                "code": "+241"
            },
            {
                "country": "Gambia",
                "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"],
                "code": "+220"
            },
            {
                "country": "Georgia",
                "states": ["Macon–Bibb County", "Georgetown–Quitman County"],
                "code": "+7880"
            },
            {
                "country": "Germany",
                "states": ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"],
                "code": "+49"
            },
            {
                "country": "Ghana",
                "states": ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"],
                "code": "+233"
            },
            {
                "country": "Greece",
                "states": ["Agion Oros", "Achaia", "Aitolia kai Akarmania", "Argolis", "Arkadia", "Arta", "Attiki", "Chalkidiki", "Chanion", "Chios", "Dodekanisos", "Drama", "Evros", "Evrytania", "Evvoia", "Florina", "Fokidos", "Fthiotis", "Grevena", "Ileia", "Imathia", "Ioannina", "Irakleion", "Karditsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Kilkis", "Korinthia", "Kozani", "Kyklades", "Lakonia", "Larisa", "Lasithi", "Lefkas", "Lesvos", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethynnis", "Rodopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakynthos"],
                "code": "+30"
            },
            {
                "country": "Greenland",
                "states": ["Avannaa (Nordgronland)", "Tunu (Ostgronland)", "Kitaa (Vestgronland)"],
                "code": "+299"
            },
            {
                "country": "Grenada",
                "states": ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"],
                "code": "+1473"
            },
            {
                "country": "Guatemala",
                "states": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"],
                "code": "+502"
            },
            {
                "country": "Guinea",
                "states": ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"],
                "code": "+224"
            },
            {
                "country": "Guinea - Bissau",
                "states": ["Bafata", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"],
                "code": "+245"
            },
            {
                "country": "Guyana",
                "states": ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"],
                "code": "+592"
            },
            {
                "country": "Haiti",
                "states": ["Artibonite", "Centre", "Grand 'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"],
                "code": "+509"
            },
            {
                "country": "Honduras",
                "states": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"],
                "code": "+504"
            },
            {
                "country": "Hong Kong",
                "states": ["Wan Chai", "Sham Shui Po", "Kowloon City", "Kwun Tong"],
                "code": "+852"
            },
            {
                "country": "Hungary",
                "states": ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala", "Bekescsaba", "Debrecen", "Dunaujvaros", "Eger", "Gyor", "Hodmezovasarhely", "Kaposvar", "Kecskemet", "Miskolc", "Nagykanizsa", "Nyiregyhaza", "Pecs", "Sopron", "Szeged", "Szekesfehervar", "Szolnok", "Szombathely", "Tatabanya", "Veszprem", "Zalaegerszeg"],
                "code": "+36"
            },
            {
                "country": "Iceland",
                "states": ["Austurland", "Hofudhborgarsvaedhi", "Nordhurland Eystra", "Nordhurland Vestra", "Sudhurland", "Sudhurnes", "Vestfirdhir", "Vesturland"],
                "code": "+354"
            },
            {
                "country": "Indonesia",
                "states": ["Aceh", "Bali", "Banten", "Bengkulu", "Gorontalo", "Irian Jaya Barat", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"],
                "code": "+62"
            },
            {
                "country": "Iran",
                "states": ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan-e Janubi", "Khorasan-e Razavi", "Khorasan-e Shemali", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"],
                "code": "+98"
            },
            {
                "country": "Iraq",
                "states": ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"],
                "code": "+964"
            },
            {
                "country": "Ireland",
                "states": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"],
                "code": "+353"
            },
            {
                "country": "Israel",
                "states": ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"],
                "code": "+972"
            },
            {
                "country": "Italy",
                "states": ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"],
                "code": "+39"
            },
            {
                "country": "Jamaica",
                "states": ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"],
                "code": "+1876"
            },
            {
                "country": "Japan",
                "states": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
                "code": "+81"
            },
            {
                "country": "Jordan",
                "states": ["Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "'Amman", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"],
                "code": "+962"
            },
            {
                "country": "Kazakhstan",
                "states": ["Almaty Oblysy", "Almaty Qalasy", "Aqmola Oblysy", "Aqtobe Oblysy", "Astana Qalasy", "Atyrau Oblysy", "Batys Qazaqstan Oblysy", "Bayqongyr Qalasy", "Mangghystau Oblysy", "Ongtustik Qazaqstan Oblysy", "Pavlodar Oblysy", "Qaraghandy Oblysy", "Qostanay Oblysy", "Qyzylorda Oblysy", "Shyghys Qazaqstan Oblysy", "Soltustik Qazaqstan Oblysy", "Zhambyl Oblysy"],
                "code": "+7"
            },
            {
                "country": "Kenya",
                "states": ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"],
                "code": "+254"
            },
            {
                "country": "Kiribati",
                "states": ["South Tarawa", "Ocenia"],
                "code": "+686"
            },
            {
                "country": "Korea North",
                "states": ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North P'yongan", "South P'yongan", "Yanggang", "Kaesong", "Najin", "Namp'o", "Pyongyang"],
                "code": "+850"
            },
            {
                "country": "Korea South",
                "states": ["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"],
                "code": "+82"
            },
            {
                "country": "Kuwait",
                "states": ["Al Ahmadi", "Al Farwaniyah", "Al Asimah", "Al Jahra", "Hawalli", "Mubarak Al-Kabeer"],
                "code": "+965"
            },
            {
                "country": "Kyrgyzstan",
                "states": ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty"],
                "code": "+996"
            },
            {
                "country": "Laos",
                "states": ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphrabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"],
                "code": "+856"
            },
            {
                "country": "Latvia",
                "states": ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Liepaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"],
                "code": "+371"
            },
            {
                "country": "Lebanon",
                "states": ["Beyrouth", "Beqaa", "Liban-Nord", "Liban-Sud", "Mont-Liban", "Nabatiye"],
                "code": "+961"
            },
            {
                "country": "Lesotho",
                "states": ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"],
                "code": "+266"
            },
            {
                "country": "Liberia",
                "states": ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"],
                "code": "+231"
            },
            {
                "country": "Libya",
                "states": ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"],
                "code": "+218"
            },
            {
                "country": "Liechtenstein",
                "states": ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"],
                "code": "+417"
            },
            {
                "country": "Lithuania",
                "states": ["Alytaus", "Kauno", "Klaipedos", "Marijampoles", "Panevezio", "Siauliu", "Taurages", "Telsiu", "Utenos", "Vilniaus"],
                "code": "+370"
            },
            {
                "country": "Luxembourg",
                "states": ["Diekirch", "Grevenmacher", "Luxembourg"],
                "code": "+352"
            },
            {
                "country": "Macedonia",
                "states": ["Aerodrom", "Aracinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica", "Butel", "Cair", "Caska", "Centar", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Debartsa", "Delcevo", "Demir Hisar", "Demir Kapija", "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gjorce Petrov", "Gostivar", "Gradsko", "Ilinden", "Jegunovce", "Karbinci", "Karpos", "Kavadarci", "Kicevo", "Kisela Voda", "Kocani", "Konce", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kumanovo", "Lipkovo", "Lozovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovo i Rastusa", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid", "Oslomej", "Pehcevo", "Petrovec", "Plasnica", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Saraj", "Skopje", "Sopiste", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari", "Sveti Nikole", "Tearce", "Tetovo", "Valandovo", "Vasilevo", "Veles", "Vevcani", "Vinica", "Vranestica", "Vrapciste", "Zajas", "Zelenikovo", "Zelino", "Zrnovci"],
                "code": "+389"
            },
            {
                "country": "Madagascar",
                "states": ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"],
                "code": "+261"
            },
            {
                "country": "Malawi",
                "states": ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Ntcheu", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"],
                "code": "+265"
            },
            {
                "country": "Malaysia",
                "states": ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Penang", "Sabah", "Sarawak", "Selangor", "Terengganu"],
                "code": "+60"
            },
            {
                "country": "Maldives",
                "states": ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"],
                "code": "+960"
            },
            {
                "country": "Mali",
                "states": ["Bamako (Capital)", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"],
                "code": "+223"
            },
            {
                "country": "Malta",
                "states": ["Rabat", "Senglea"],
                "code": "+356"
            },
            {
                "country": "Marshall Islands",
                "states": ["Majuro"],
                "code": "+692"
            },
            {
                "country": "Mauritania",
                "states": ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"],
                "code": "+222"
            },
            {
                "country": "Mexico",
                "states": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"],
                "code": "+52"
            },
            {
                "country": "Micronesia",
                "states": ["Palau", "Nauru", "Guam"],
                "code": "+691"
            },
            {
                "country": "Moldova",
                "states": ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Cantemir", "Calarasi", "Causeni", "Cimislia", "Criuleni", "Donduseni", "Drochia", "Dubasari", "Edinet", "Falesti", "Floresti", "Glodeni", "Hincesti", "Ialoveni", "Leova", "Nisporeni", "Ocnita", "Orhei", "Rezina", "Riscani", "Singerei", "Soldanesti", "Soroca", "Stefan-Voda", "Straseni", "Taraclia", "Telenesti", "Ungheni", "Balti", "Bender", "Chisinau", "Gagauzia", "Stinga Nistrului"],
                "code": "+373"
            },
            {
                "country": "Monaco",
                "states": ["Monaco-Ville", "Monte Carlo"],
                "code": "+377"
            },
            {
                "country": "Mongolia",
                "states": ["Arhangay", "Bayanhongor", "Bayan-Olgiy", "Bulgan", "Darhan Uul", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Govi-Altay", "Govi-Sumber", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Orhon", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"],
                "code": "+976"
            },
            {
                "country": "Morocco",
                "states": ["Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Ben Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"],
                "code": "+212"
            },
            {
                "country": "Mozambique",
                "states": ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Cidade de Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"],
                "code": "+258"
            },
            {
                "country": "Namibia",
                "states": ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"],
                "code": "+264"
            },
            {
                "country": "Nauru",
                "states": ["Abab", "Abwaw", "Adibor", "Amet", "Anabar"],
                "code": "+674"
            },
            {
                "country": "Nepal",
                "states": ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"],
                "code": "+977"
            },
            {
                "country": "Netherlands",
                "states": ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"],
                "code": "+31"
            },
            {
                "country": "New Zealand",
                "states": ["Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay", "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"],
                "code": "+64"
            },
            {
                "country": "Nicaragua",
                "states": ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"],
                "code": "+505"
            },
            {
                "country": "Niger",
                "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"],
                "code": "+227"
            },
            {
                "country": "Nigeria",
                "states": ["Abia", "Abuja Federal Capital", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
                "code": "+234"
            },
            {
                "country": "Norway",
                "states": ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nordland", "Nord-Trondelag", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"],
                "code": "+47"
            },
            {
                "country": "Oman",
                "states": ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Dhofar"],
                "code": "+968"
            },
            {
                "country": "Pakistan",
                "states": ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"],
                "code": "+92"
            },
            {
                "country": "Panama",
                "states": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"],
                "code": "+507"
            },
            {
                "country": "Papua New Guinea",
                "states": ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "Western", "Western Highlands", "West New Britain"],
                "code": "+675"
            },
            {
                "country": "Paraguay",
                "states": ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"],
                "code": "+595"
            },
            {
                "country": "Peru",
                "states": ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"],
                "code": "+51"
            },
            {
                "country": "Philippines",
                "states": ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"],
                "code": "+63"
            },
            {
                "country": "Poland",
                "states": ["Greater Poland (Wielkopolskie)", "Kuyavian-Pomeranian (Kujawsko-Pomorskie)", "Lesser Poland (Malopolskie)", "Lodz (Lodzkie)", "Lower Silesian (Dolnoslaskie)", "Lublin (Lubelskie)", "Lubusz (Lubuskie)", "Masovian (Mazowieckie)", "Opole (Opolskie)", "Podlasie (Podlaskie)", "Pomeranian (Pomorskie)", "Silesian (Slaskie)", "Subcarpathian (Podkarpackie)", "Swietokrzyskie (Swietokrzyskie)", "Warmian-Masurian (Warminsko-Mazurskie)", "West Pomeranian (Zachodniopomorskie)"],
                "code": "+48"
            },
            {
                "country": "Portugal",
                "states": ["Aveiro", "Acores", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"],
                "code": "+351"
            },
            {
                "country": "Qatar",
                "states": ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Sa'id", "Umm Salal"],
                "code": "+974"
            },
            {
                "country": "Romania",
                "states": ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Gorj", "Giurgiu", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"],
                "code": "+40"
            },
            {
                "country": "Russia",
                "states": ["Amur", "Arkhangel'sk", "Astrakhan'", "Belgorod", "Bryansk", "Chelyabinsk", "Chita", "Irkutsk", "Ivanovo", "Kaliningrad", "Kaluga", "Kamchatka", "Kemerovo", "Kirov", "Kostroma", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Moscow", "Murmansk", "Nizhniy Novgorod", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orel", "Penza", "Perm'", "Pskov", "Rostov", "Ryazan'", "Sakhalin", "Samara", "Saratov", "Smolensk", "Sverdlovsk", "Tambov", "Tomsk", "Tula", "Tver'", "Tyumen'", "Ul'yanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yaroslavl'", "Adygeya", "Altay", "Bashkortostan", "Buryatiya", "Chechnya", "Chuvashiya", "Dagestan", "Ingushetiya", "Kabardino-Balkariya", "Kalmykiya", "Karachayevo-Cherkesiya", "Kareliya", "Khakasiya", "Komi", "Mariy-El", "Mordoviya", "Sakha", "North Ossetia", "Tatarstan", "Tyva", "Udmurtiya", "Aga Buryat", "Chukotka", "Evenk", "Khanty-Mansi", "Komi-Permyak", "Koryak", "Nenets", "Taymyr", "Ust'-Orda Buryat", "Yamalo-Nenets", "Altay", "Khabarovsk", "Krasnodar", "Krasnoyarsk", "Primorskiy", "Stavropol'", "Moscow", "St. Petersburg", "Yevrey"],
                "code": "+7"
            },
            {
                "country": "Rwanda",
                "states": ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Umutara", "Ruhengeri"],
                "code": "+250"
            },
            {
                "country": "San Marino",
                "states": ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino Citta", "Serravalle"],
                "code": "+378"
            },
            {
                "country": "Sao Tome Principe",
                "states": ["Santo Amaro", "Neves", "Santana"],
                "code": "+239"
            },
            {
                "country": "Saudi Arabia",
                "states": ["Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah", "'Asir", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"],
                "code": "+966"
            },
            {
                "country": "Senegal",
                "states": ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"],
                "code": "+221"
            },
            {
                "country": "Serbia",
                "states": ["Kosovo", "Montenegro", "Serbia", "Vojvodina"],
                "code": "+381"
            },
            {
                "country": "Seychelles",
                "states": ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse", "Grand' Anse", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"],
                "code": "+248"
            },
            {
                "country": "Singapore",
                "states": ["Alexandra", "Bishan", "Chinatown", "Kallang"],
                "code": "+65"
            },
            {
                "country": "Slovak Republic",
                "states": ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"],
                "code": "+421"
            },
            {
                "country": "Slovenia",
                "states": ["Ajdovscina", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica", "Bovec", "Braslovce", "Brda", "Brezice", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Cerkvenjak", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik", "Divaca", "Dobje", "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dolenjske Toplice", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje", "Hajdina", "Hoce-Slivnica", "Hodos-Hodos", "Horjul", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Komenda", "Koper-Capodistria", "Kostel", "Kozje", "Kranj", "Kranjska Gora", "Krizevci", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava-Lendva", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Lovrenc na Pohorju", "Luce", "Lukovica", "Majsperk", "Maribor", "Markovci", "Medvode", "Menges", "Metlika", "Mezica", "Miklavz na Dravskem Polju", "Miren-Kostanjevica", "Mirna Pec", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Oplotnica", "Ormoz", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podcetrtek", "Podlehnik", "Podvelka", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne na Koroskem", "Razkrizje", "Ribnica", "Ribnica na Pohorju", "Rogasovci", "Rogaska Slatina", "Rogatec", "Ruse", "Salovci", "Selnica ob Dravi", "Semic", "Sempeter-Vrtojba", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Smartno pri Litiji", "Sodrazica", "Solcava", "Sostanj", "Starse", "Store", "Sveta Ana", "Sveti Andraz v Slovenskih Goricah", "Sveti Jurij", "Tabor", "Tisina", "Tolmin", "Trbovlje", "Trebnje", "Trnovska Vas", "Trzic", "Trzin", "Turnisce", "Velenje", "Velika Polana", "Velike Lasce", "Verzej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Zetale", "Ziri", "Zirovnica", "Zuzemberk", "Zrece"],
                "code": "+386"
            },
            {
                "country": "Solomon Islands",
                "states": ["Central", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell and Bellona", "Temotu", "Western"],
                "code": "+677"
            },
            {
                "country": "Somalia",
                "states": ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"],
                "code": "+252"
            },
            {
                "country": "South Africa",
                "states": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape", "Western Cape"],
                "code": "+27"
            },
            {
                "country": "Spain",
                "states": ["Andalucia", "Aragon", "Asturias", "Baleares", "Ceuta", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y Leon", "Cataluna", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco"],
                "code": "+34"
            },
            {
                "country": "Sri Lanka",
                "states": ["Central", "North Central", "North Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"],
                "code": "+94"
            },
            {
                "country": "Sudan",
                "states": ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"],
                "code": "+249"
            },
            {
                "country": "Suriname",
                "states": ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"],
                "code": "+597"
            },
            {
                "country": "Swaziland",
                "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"],
                "code": "+268"
            },
            {
                "country": "Sweden",
                "states": ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"],
                "code": "+46"
            },
            {
                "country": "Switzerland",
                "states": ["Aargau", "Appenzell Ausser-Rhoden", "Appenzell Inner-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"],
                "code": "+41"
            },
            {
                "country": "Syria",
                "states": ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"],
                "code": "+963"
            },
            {
                "country": "Taiwan",
                "states": ["Chang-hua", "Chia-i", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kin-men", "Lien-chiang", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-nan", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin", "Chia-i", "Chi-lung", "Hsin-chu", "T'ai-chung", "T'ai-nan", "Kao-hsiung city", "T'ai-pei city"],
                "code": "+886"
            },
            {
                "country": "Tajikstan",
                "states": ["Dushanbe", "Khujand", "Qurghonteppa", "Tursunzoda"],
                "code": "+7"
            },
            {
                "country": "Thailand",
                "states": ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"],
                "code": "+66"
            },
            {
                "country": "Togo",
                "states": ["Kara", "Plateaux", "Savanes", "Centrale", "Maritime"],
                "code": "+228"
            },
            {
                "country": "Tonga",
                "states": ["Tongatapu", "Nuku'alofa", "Ha'amonga ʻa Maui"],
                "code": "+676"
            },
            {
                "country": "Trinidad & Tobago",
                "states": ["Couva", "Diego Martin", "Mayaro", "Penal", "Princes Town", "Sangre Grande", "San Juan", "Siparia", "Tunapuna", "Port-of-Spain", "San Fernando", "Arima", "Point Fortin", "Chaguanas", "Tobago"],
                "code": "+1868"
            },
            {
                "country": "Tunisia",
                "states": ["Ariana (Aryanah)", "Beja (Bajah)", "Ben Arous (Bin 'Arus)", "Bizerte (Banzart)", "Gabes (Qabis)", "Gafsa (Qafsah)", "Jendouba (Jundubah)", "Kairouan (Al Qayrawan)", "Kasserine (Al Qasrayn)", "Kebili (Qibili)", "Kef (Al Kaf)", "Mahdia (Al Mahdiyah)", "Manouba (Manubah)", "Medenine (Madanin)", "Monastir (Al Munastir)", "Nabeul (Nabul)", "Sfax (Safaqis)", "Sidi Bou Zid (Sidi Bu Zayd)", "Siliana (Silyanah)", "Sousse (Susah)", "Tataouine (Tatawin)", "Tozeur (Tawzar)", "Tunis", "Zaghouan (Zaghwan)"],
                "code": "+216"
            },
            {
                "country": "Turkey",
                "states": ["Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"],
                "code": "+90"
            },
            {
                "country": "Turkmenistan",
                "states": ["Ahal Welayaty (Ashgabat)", "Balkan Welayaty (Balkanabat)", "Dashoguz Welayaty", "Lebap Welayaty (Turkmenabat)", "Mary Welayaty"],
                "code": "+993"
            },
            {
                "country": "Uganda",
                "states": ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kampala", "Kamuli", "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Kyenjojo", "Lira", "Luwero", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakasongola", "Nebbi", "Ntungamo", "Pader", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Sironko", "Soroti", "Tororo", "Wakiso", "Yumbe"],
                "code": "+256"
            },
            {
                "country": "Ukraine",
                "states": ["Cherkasy", "Chernihiv", "Chernivtsi", "Crimea", "Dnipropetrovs'k", "Donets'k", "Ivano-Frankivs'k", "Kharkiv", "Kherson", "Khmel'nyts'kyy", "Kirovohrad", "Kiev", "Kyyiv", "Luhans'k", "L'viv", "Mykolayiv", "Odesa", "Poltava", "Rivne", "Sevastopol'", "Sumy", "Ternopil'", "Vinnytsya", "Volyn'", "Zakarpattya", "Zaporizhzhya", "Zhytomyr"],
                "code": "+380"
            },
            {
                "country": "United Arab Emirates",
                "states": ["Abu Dhabi", "'Ajman", "Al Fujayrah", "Sharjah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"],
                "code": "+971"
            },
            {
                "country": "Uruguay",
                "states": ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"],
                "code": "+598"
            },
            {
                "country": "Uzbekistan",
                "states": ["Andijon Viloyati", "Buxoro Viloyati", "Farg'ona Viloyati", "Jizzax Viloyati", "Namangan Viloyati", "Navoiy Viloyati", "Qashqadaryo Viloyati", "Qaraqalpog'iston Respublikasi", "Samarqand Viloyati", "Sirdaryo Viloyati", "Surxondaryo Viloyati", "Toshkent Shahri", "Toshkent Viloyati", "Xorazm Viloyati"],
                "code": "+7"
            },
            {
                "country": "Vanuatu",
                "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"],
                "code": "+678"
            },
            {
                "country": "Venezuela",
                "states": ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"],
                "code": "+58"
            },
            {
                "country": "Vietnam",
                "states": ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"],
                "code": "+84"
            },
            {
                "country": "Yemen (North)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+969"
            },
            {
                "country": "Yemen (South)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+967"
            },
            {
                "country": "Zambia",
                "states": ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Northern", "North-Western", "Southern", "Western"],
                "code": "+260"
            },
            {
                "country": "Zimbabwe",
                "states": ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"],
                "code": "+263"
            }
        ];
        this.registratioForm1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('+91'),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0][1-9]\\d{9}$|^[1-9]\\d{6,15}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
            profileFor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        $("#show_register_form").on('click', function (e) {
            $('.register_form').toggleClass('showSignupModal');
        });
    }
    registrationFnc() {
        let data = {
            "email": this.registratioForm1.value.emailId,
            "password": this.registratioForm1.value.password,
            "countryCode": this.registratioForm1.value.countryCode,
            "mobileNumber": this.registratioForm1.value.mobile,
            "fullName": this.registratioForm1.value.username,
            "createFor": this.registratioForm1.value.profileFor,
        };
        this.httpService.put('user/signup', data, 1).subscribe(res => {
            console.log('RegistrationStep1_Succ ==>', res);
            if (res['responseCode'] == 200) {
                this.commonService.showSuccessToast('Please check your Mobile and Email for OTP.', false, 'center');
                localStorage.setItem('userID', res['result']._id);
                this.router.navigateByUrl('visitor/verifyOTP');
            }
        }, err => {
            console.log('RegistrationStep1_Err ==>', err);
        });
    }
    /** to show and hide password */
    showHidePassword() {
        this.showEye = !this.showEye;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 309, vars: 19, consts: [[1, "slider"], [1, "img-gradient"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "5"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "6"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/bg-img-0.jpg", "alt", "slilder image", "title", "slider", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/img/bg-img-7.jpg", "alt", "slilder image", "title", "slider", 1, "d-block", "w-100"], ["src", "assets/img/bg-image-1.jpg", "alt", "slilder image", "title", "slider", 1, "d-block", "w-100"], ["src", "assets/img/slider-img-2.jpg", "alt", "slilder image", "title", "slider", 1, "d-block", "w-100"], ["src", "assets/img/slider-img-3.jpg", "alt", "slilder image", "title", "slider", 1, "d-block", "w-100"], ["src", "assets/img/slider-img-4.jpg", "alt", "slilder image", "title", "slider", 1, "d-block", "w-100"], ["src", "assets/img/slider-img-5.jpg", "alt", "slilder image", "title", "slider", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row-logo-2"], [1, "container"], [1, "row"], ["src", "assets/img/logo_2.png", "alt", "logo_2", "width", "44px", "title", "logo"], [1, "container", 2, "position", "relative"], [1, "slider-content"], [1, "mobile-position"], [1, "millions"], ["href", "javascript:;", "id", "show_register_form"], [1, "logo_3"], ["src", "assets/img/logo_3.png", "alt", "logo", "title", "logo"], [1, "search-form", "register_form"], [1, "form-bg-1", "signup-page-1"], [3, "formGroup"], [1, "form-group", "d-flex"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "User Name", "formControlName", "username", "placeholder", "Full Name*", 1, "form-control"], ["style", "color:red;font-size:13px!important", 3, "ngClass", 4, "ngIf"], ["style", "color:red;font-size:13px!important", 4, "ngIf"], [1, "not-completed"], [1, "fas", "fa-times-circle"], [1, "completed"], [1, "fas", "fa-check-circle"], ["formControlName", "countryCode", 1, "form-control", "select-custome", "max-WT-180", "select-border"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", "data-toggle", "tooltip", "data-placement", "top", "title", "Mobile Number", "formControlName", "mobile", "placeholder", "Mobile number*", 1, "form-control", 2, "margin-left", "5px"], ["style", "color:red;font-size: 13px !important;", 4, "ngIf"], [1, "not-completed-1"], [1, "completed-1"], ["type", "text", "maxlength", "255", "data-toggle", "tooltip", "data-placement", "top", "title", "Email ID", "formControlName", "emailId", "placeholder", "Email*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Create Profile for*", "formControlName", "profileFor", "placeholder", "Create Profile for*", 1, "form-control"], [1, "not-completed-2"], [1, "completed-2"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Password", "formControlName", "password", "placeholder", "Create New Password*", 1, "form-control", 3, "type"], [1, "not-completed-3"], [1, "completed-3"], ["style", "color:#818181", "id", "show-pass", "class", "far fa-eye-slash", 3, "click", 4, "ngIf"], ["style", "color:#818181", "id", "show-pass", "class", "far fa-eye", 3, "click", 4, "ngIf"], ["type", "submit", "href", "javascript:;", 3, "disabled", "ngClass", "click"], [1, "section-2"], [1, "row", "row_dir"], [1, "col-xl-7", "col-lg-7", "col-md-12", "col-sm-12", "col-12"], [1, "column-left"], ["src", "assets/img/right-icon.png", "alt", "icon image", "title", "icon"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-12"], [1, "column-right"], [1, "column-right-video"], ["width", "445", "height", "300", "src", "https://www.youtube.com/embed/IHFsIXHWnYo", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "packages-container", 2, "padding", "45px 0px 70px", "background-color", "#ded0c3"], [1, "col-xl-12"], [1, "heading"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-6", "col-12"], [1, "premium-column-1"], [2, "color", "#51505d", "font-size", "28px"], ["href", "#"], [1, "premium-column-profile"], ["id", "check", "aria-hidden", "true", 1, "fas", "fa-check"], [1, "select-time"], ["required", ""], ["selected", ""], ["type", "submit", 2, "background-color", "#a7a7a7"], ["src", "assets/img/icon-3.png", "alt", "silver-img", "title", "icon", 1, "silver"], ["type", "submit", 2, "background", "#ccaa81"], ["src", "assets/img/icon-2.png", "alt", "gold-img", "title", "icon", 1, "gold"], ["type", "submit", 2, "background", "#82b0b9"], ["src", "assets/img/icon-1.png", "alt", "diamond-img", "title", "icon", 1, "diamond"], [1, "section-3"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-6", "col-12"], [1, "section-3-column"], ["src", "assets/img/column-img-1.jpg", "alt", "image", "title", "image"], [1, "register-free"], ["href", "javascript:;", 3, "routerLink"], [1, "section-4"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-4"], [1, "trusted"], [1, "border-1"], [1, "border-2"], [1, "fas", "fa-users"], [1, "trusted-content"], ["src", "assets/img/shield-check-icon.png", "alt", "icon", "title", "icon"], [1, "fas", "fa-lock"], [2, "color", "red", "font-size", "13px!important", 3, "ngClass"], [2, "color", "red", "font-size", "13px!important"], [3, "value"], [2, "color", "red", "font-size", "13px !important"], ["id", "show-pass", 1, "far", "fa-eye-slash", 2, "color", "#818181", 3, "click"], ["id", "show-pass", 1, "far", "fa-eye", 2, "color", "#818181", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Millions found their perfect match here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "You too can find a life partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "form", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HomeComponent_h1_58_Template, 2, 3, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HomeComponent_h1_59_Template, 2, 0, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_option_67_Template, 2, 3, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HomeComponent_h1_69_Template, 2, 3, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HomeComponent_h1_70_Template, 2, 0, "h1", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, HomeComponent_h1_78_Template, 2, 3, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, HomeComponent_h1_79_Template, 2, 0, "h1", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, HomeComponent_h1_87_Template, 2, 3, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, HomeComponent_h1_88_Template, 2, 0, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, HomeComponent_i_100_Template, 1, 0, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, HomeComponent_i_101_Template, 1, 0, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_102_listener() { return ctx.registrationFnc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "REGISTER FREE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "About Wedding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Wedding APP - Saudi No. 1 and Most Trusted Matrimony service, has helped Millions like you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Why Choose Wedding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " No.1 & most trusted matrimony service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " 100% verified mobile numbers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Our largest number of profiles increases your chances of meeting the right person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Millions have found their life partner here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Trusted service for more than 5 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "iframe", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h1", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "PACKAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Silver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "40% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "SAR 1,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "SAR 8,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "SAR 800 per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " View 75 Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Get highilighted to your Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Make Contact details visible to all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "select", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Early");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "45% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "SAR 2,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h3", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "SAR 1,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "SAR 1,500 per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " View 150 Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Get highilighted to your Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Make Contact details visible to all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "select", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Early");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Diamond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "6 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "50% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "SAR 8,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h3", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "SAR 4,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "SAR 738 per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " View 300 Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Get highilighted to your Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Make Contact details visible to all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "select", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Early");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Millions have found their life partner here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "I found a companion for my adventures, on Wedding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "I found a companion for my adventures, on Wedding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "I found a companion for my adventures, on Wedding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Now it is your turn to be happily married");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Register Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Trusted by Millions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Best Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Verified Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "100% Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registratioForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("username").hasError("required") && ctx.registratioForm1.get("username").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("username").hasError("pattern") && ctx.registratioForm1.get("username").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("mobile").hasError("required") && ctx.registratioForm1.get("mobile").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("mobile").hasError("pattern") && ctx.registratioForm1.get("mobile").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("emailId").hasError("required") && ctx.registratioForm1.get("emailId").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("emailId").hasError("pattern") && ctx.registratioForm1.get("emailId").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("profileFor").hasError("required") && ctx.registratioForm1.get("profileFor").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("profileFor").hasError("pattern") && ctx.registratioForm1.get("profileFor").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.showEye ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registratioForm1.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.registratioForm1.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["img.d-block.w-100[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.showSignupModal[_ngcontent-%COMP%] {\n  height: auto !important;\n  opacity: 1 !important;\n  overflow: unset !important;\n}\n\n.select-time[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.disableCss[_ngcontent-%COMP%] {\n  background-color: #dddddd !important;\n  color: black !important;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 0px !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\n\n.select-custome[_ngcontent-%COMP%] {\n  width: 110px !important;\n  height: 50px !important;\n  padding: 0.375rem 0.75rem;\n  margin: 10px 0px 0px 0px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n\nselect[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n\n.slider[_ngcontent-%COMP%]   .form-bg-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 280px !important;\n  height: 50px !important;\n  padding: 0px 10px !important;\n  border: 1px solid #bbbbbb !important;\n}\n\n.slider[_ngcontent-%COMP%]   .form-bg-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .form-bg-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin: 8px 0px 0px 0px !important;\n}\n\n.signup-page-1[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-top: 0px !important;\n}\n\n@media screen and (max-width: 460px) {\n  .slider[_ngcontent-%COMP%]   .form-bg-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    margin: 5px 8px 0px 0px;\n    width: 146px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .slider[_ngcontent-%COMP%]   .form-bg-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 5px 0px !important;\n  }\n}\n\n.slider[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQUE7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtBQUdGOztBQUFBO0VBQWEsbUJBQUE7QUFJYjs7QUFIQTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsNkNBQUE7QUFPSjs7QUFMQTtFQUNJLHVCQUFBO0VBRUEsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBT0o7O0FBSkE7RUFDSSx1QkFBQTtFQUNBLDZDQUFBO0FBT0o7O0FBSkE7RUFDSSw2QkFBQTtBQU9KOztBQUxBO0VBQ0ksNkJBQUE7QUFRSjs7QUFOQTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBU0Y7O0FBTkE7RUFDRSxrQ0FBQTtBQVNGOztBQU5BO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQVNGOztBQU5BO0VBQ0U7SUFDQSx1QkFBQTtJQUNBLFlBQUE7RUFTQTtBQUNGOztBQU5BO0VBQ0E7SUFDRSxzQkFBQTtJQUNBLDBCQUFBO0VBUUE7QUFDRjs7QUFMQTtFQUNFLDhCQUFBO0FBT0YiLCJmaWxlIjoic3JjL2FwcC9iZWZvcmUtc2lnbnVwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5kLWJsb2NrLnctMTAwe1xuICBvYmplY3QtZml0OiBjb3ZlcjsgIFxufVxuLnNob3dTaWdudXBNb2RhbCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLnNlbGVjdC10aW1lIGJ1dHRvbiB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWdyb3VwIHttYXJnaW4tYm90dG9tOiAwcmVtOyB9XG4uZGlzYWJsZUNzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLnNpZ251cC1wYWdlLTEgZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2ZmZGZiYmM0ICFpbXBvcnRhbnQ7XG59XG4uc2VsZWN0LWN1c3RvbWUge1xuICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDogY2FsYygyLjI1cmVtICsgNHB4KTtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5zaWdudXAtcGFnZS0xIGZvcm0gc2VsZWN0OmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjZmZkZmJiYzQgIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XG59XG5zZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XG59XG4uc2xpZGVyIC5mb3JtLWJnLTEgZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAyODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NywgMTg3LCAxODcpIWltcG9ydGFudDtcbn1cblxuLnNsaWRlciAuZm9ybS1iZy0xIGZvcm0gaW5wdXQsIC5zbGlkZXIgLmZvcm0tYmctMSBmb3JtIHNlbGVjdCB7XG4gIG1hcmdpbjogOHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7O1xufVxuXG4uc2lnbnVwLXBhZ2UtMSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KXtcbiAgLnNsaWRlciAuZm9ybS1iZy0xIGZvcm0gc2VsZWN0e1xuICBtYXJnaW46IDVweCA4cHggMHB4IDBweDtcbiAgd2lkdGg6IDE0NnB4O1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCl7XG4uc2xpZGVyIC5mb3JtLWJnLTEgZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDBweCAhaW1wb3J0YW50O1xufVxufVxuXG4uc2xpZGVyIC5zZWFyY2gtZm9ybXtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/before-signup/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoginComponent_form_23_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r4 == null ? null : data_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r4 == null ? null : data_r4.code, " ", data_r4 == null ? null : data_r4.country, " ");
} }
function LoginComponent_form_23_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid mobile number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.loginType == "email");
} }
const _c0 = function (a0) { return { "disableCss": a0 }; };
const _c1 = function () { return ["/visitor/forgotPassword"]; };
const _c2 = function () { return ["/visitor/registrationStep-1"]; };
function LoginComponent_form_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_form_23_option_4_Template, 2, 3, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_form_23_h1_6_Template, 2, 1, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_23_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.loginApiFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New on wedding APP?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.mobileLoginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countryArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mobileLoginForm.get("mobile").hasError("pattern") && ctx_r0.mobileLoginForm.get("mobile").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.mobileLoginForm.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.mobileLoginForm.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
} }
function LoginComponent_form_24_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid Email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r7.loginType == "mobile");
} }
function LoginComponent_form_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_form_24_h1_4_Template, 2, 1, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_24_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.loginApiFunc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New on wedding APP?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.emailLoginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.emailLoginForm.get("emailId").hasError("pattern") && ctx_r1.emailLoginForm.get("emailId").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.emailLoginForm.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.emailLoginForm.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
} }
const _c3 = function (a0) { return { "cardToggle": a0 }; };
class LoginComponent {
    constructor(httpService, commonService, router) {
        this.httpService = httpService;
        this.commonService = commonService;
        this.router = router;
        this.loginType = 'mobile';
        this.countryArr = [
            {
                "country": "India",
                "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"],
                "code": "+91"
            },
            {
                "country": "Algeria",
                "states": ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "Muaskar", "Medea", "Mila", "Mostaganem", "M'Sila", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"],
                "code": "+213"
            },
            {
                "country": "Andorra",
                "states": ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"],
                "code": "+376"
            },
            {
                "country": "Angola",
                "states": ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uige", "Zaire"],
                "code": "+244"
            },
            {
                "country": "Anguilla",
                "states": ["Big Spring Cave", "East End Pond"],
                "code": "+1264"
            },
            {
                "country": "Antigua & Barbuda",
                "states": ["St. John's"],
                "code": "+1268"
            },
            {
                "country": "Argentina",
                "states": ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
                "code": "+54"
            },
            {
                "country": "Armenia",
                "states": ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"],
                "code": "+374"
            },
            {
                "country": "Aruba",
                "states": ["Oranjestad"],
                "code": "+297"
            },
            {
                "country": "Australia",
                "states": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria"],
                "code": "+61"
            },
            {
                "country": "Austria",
                "states": ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"],
                "code": "+43"
            },
            {
                "country": "Azerbaijan",
                "states": ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Astara Rayonu", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lerik Rayonu", "Masalli Rayonu", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Susa Rayonu", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu", "Ali Bayramli Sahari", "Baki Sahari", "Ganca Sahari", "Lankaran Sahari", "Mingacevir Sahari", "Naftalan Sahari", "Saki Sahari", "Sumqayit Sahari", "Susa Sahari", "Xankandi Sahari", "Yevlax Sahari", "Naxcivan Muxtar"],
                "code": "+994"
            },
            {
                "country": "Bahamas",
                "states": ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nichollstown and Berry Islands", "Ragged Island", "Rock Sound", "Sandy Point", "San Salvador and Rum Cay"],
                "code": "+1242"
            },
            {
                "country": "Bahrain",
                "states": ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Madinat Hamad", "Madinat 'Isa", "Juzur Hawar", "Sitrah"],
                "code": "+973"
            },
            {
                "country": "Bangladesh",
                "states": ["Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Sylhet"],
                "code": "+880"
            },
            {
                "country": "Barbados",
                "states": ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"],
                "code": "+1246"
            },
            {
                "country": "Belarus",
                "states": ["Brest", "Homyel", "Horad Minsk", "Hrodna", "Mahilyow", "Minsk", "Vitsyebsk"],
                "code": "+375"
            },
            {
                "country": "Belgium",
                "states": ["Antwerpen", "Brabant Wallon", "Brussels", "Flanders", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "Wallonia", "West-Vlaanderen"],
                "code": "+32"
            },
            {
                "country": "Belize",
                "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"],
                "code": "+501"
            },
            {
                "country": "Benin",
                "states": ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Oueme", "Plateau", "Zou"],
                "code": "+229"
            },
            {
                "country": "Bermuda",
                "states": ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint George's", "Sandys", "Smith's", "Southampton", "Warwick"],
                "code": "+1441"
            },
            {
                "country": "Bhutan",
                "states": ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"],
                "code": "+975"
            },
            {
                "country": "Bolivia",
                "states": ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"],
                "code": "+591"
            },
            {
                "country": "Bosnia Herzegovina",
                "states": ["Una-Sana [Federation]", "Posavina [Federation]", "Tuzla [Federation]", "Zenica-Doboj [Federation]", "Bosnian Podrinje [Federation]", "Central Bosnia [Federation]", "Herzegovina-Neretva [Federation]", "West Herzegovina [Federation]", "Sarajevo [Federation]", " West Bosnia [Federation]", "Banja Luka [RS]", "Bijeljina [RS]", "Doboj [RS]", "Fo?a [RS]", "Sarajevo-Romanija [RS]", "Trebinje [RS]", "Vlasenica [RS]"],
                "code": "+387"
            },
            {
                "country": "Botswana",
                "states": ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North East", "North West", "South East", "Southern"],
                "code": "+261"
            },
            {
                "country": "Brazil",
                "states": ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"],
                "code": "+55"
            },
            {
                "country": "Brunei",
                "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"],
                "code": "+673"
            },
            {
                "country": "Bulgaria",
                "states": ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"],
                "code": "+359"
            },
            {
                "country": "Burkina Faso",
                "states": ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komondjari", "Kompienga", "Kossi", "Koulpelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passore", "Poni", "Sanguie", "Sanmatenga", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundweogo"],
                "code": "+226"
            },
            {
                "country": "Burundi",
                "states": ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"],
                "code": "+257"
            },
            {
                "country": "Cambodia",
                "states": ["Banteay Mean Chey", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Koh Kong", "Kracheh", "Mondol Kiri", "Otdar Mean Chey", "Pouthisat", "Preah Vihear", "Prey Veng", "Rotanakir", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takao", "Keb", "Pailin", "Phnom Penh", "Preah Seihanu"],
                "code": "+855"
            },
            {
                "country": "Cameroon",
                "states": ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"],
                "code": "+237"
            },
            {
                "country": "Canada",
                "states": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"],
                "code": "+1"
            },
            {
                "country": "Cape Verde Islands",
                "states": ["Barlavento", "Santo Antão", "São Vicente", "Santa Luzia", "São Nicolau", "Boa Vista", "Sal"],
                "code": "+238"
            },
            {
                "country": "Central African Republic",
                "states": ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kemo", "Lobaye", "Mambere-Kadei", "Mbomou", "Nana-Grebizi", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha-Mbaere", "Vakaga"],
                "code": "+236"
            },
            {
                "country": "Chile",
                "states": ["Aysen", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "O'Higgins", "Los Lagos", "Magallanes y la Antartica Chilena", "Maule", "Santiago Region Metropolitana", "Tarapaca", "Valparaiso"],
                "code": "+56"
            },
            {
                "country": "China",
                "states": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"],
                "code": "+86"
            },
            {
                "country": "Colombia",
                "states": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota District Capital", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres & Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"],
                "code": "+57"
            },
            {
                "country": "Comoros",
                "states": ["Grande Comore (Njazidja)", "Anjouan (Nzwani)", "Moheli (Mwali)"],
                "code": "+269"
            },
            {
                "country": "Congo",
                "states": ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"],
                "code": "+242"
            },
            {
                "country": "Costa Rica",
                "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"],
                "code": "+506"
            },
            {
                "country": "Croatia",
                "states": ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozesko-Slavonska", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagreb", "Zagrebacka"],
                "code": "+385"
            },
            {
                "country": "Cuba",
                "states": ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"],
                "code": "+53"
            },
            {
                "country": "Cyprus North",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+90392"
            },
            {
                "country": "Cyprus South",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+357"
            },
            {
                "country": "Czech Republic",
                "states": ["Jihocesky Kraj", "Jihomoravsky Kraj", "Karlovarsky Kraj", "Kralovehradecky Kraj", "Liberecky Kraj", "Moravskoslezsky Kraj", "Olomoucky Kraj", "Pardubicky Kraj", "Plzensky Kraj", "Praha", "Stredocesky Kraj", "Ustecky Kraj", "Vysocina", "Zlinsky Kraj"],
                "code": "+42"
            },
            {
                "country": "Denmark",
                "states": ["Arhus", "Bornholm", "Frederiksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"],
                "code": "+45"
            },
            {
                "country": "Djibouti",
                "states": ["Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"],
                "code": "+253"
            },
            {
                "country": "Dominica",
                "states": ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"],
                "code": "+1809"
            },
            {
                "country": "Dominican Republic",
                "states": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "Elias Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "Sanchez Ramirez", "San Cristobal", "San Jose de Ocoa", "San Juan", "San Pedro de Macoris", "Santiago", "Santiago Rodriguez", "Santo Domingo", "Valverde"],
                "code": "+1809"
            },
            {
                "country": "Ecuador",
                "states": ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"],
                "code": "+593"
            },
            {
                "country": "Egypt",
                "states": ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"],
                "code": "+20"
            },
            {
                "country": "El Salvador",
                "states": ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "Santa Ana", "San Vicente", "Sonsonate", "Usulutan"],
                "code": "+503"
            },
            {
                "country": "Equatorial Guinea",
                "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"],
                "code": "+240"
            },
            {
                "country": "Eritrea",
                "states": ["Anseba", "Debub", "Debubawi K'eyih Bahri", "Gash Barka", "Ma'akel", "Semenawi Keyih Bahri"],
                "code": "+291"
            },
            {
                "country": "Estonia",
                "states": ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laanemaa (Haapsalu)", "Laane-Virumaa (Rakvere)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuressaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"],
                "code": "+372"
            },
            {
                "country": "Ethiopia",
                "states": ["Addis Ababa", "Afar", "Amhara", "Binshangul Gumuz", "Dire Dawa", "Gambela Hizboch", "Harari", "Oromia", "Somali", "Tigray", "Southern Nations, Nationalities, and Peoples Region"],
                "code": "+251"
            },
            {
                "country": "Fiji",
                "states": ["Central (Suva)", "Eastern (Levuka)", "Northern (Labasa)", "Rotuma", "Western (Lautoka)"],
                "code": "+679"
            },
            {
                "country": "Finland",
                "states": ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"],
                "code": "+358"
            },
            {
                "country": "France",
                "states": ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"],
                "code": "+33"
            },
            {
                "country": "Gabon",
                "states": ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"],
                "code": "+241"
            },
            {
                "country": "Gambia",
                "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"],
                "code": "+220"
            },
            {
                "country": "Georgia",
                "states": ["Macon–Bibb County", "Georgetown–Quitman County"],
                "code": "+7880"
            },
            {
                "country": "Germany",
                "states": ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"],
                "code": "+49"
            },
            {
                "country": "Ghana",
                "states": ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"],
                "code": "+233"
            },
            {
                "country": "Greece",
                "states": ["Agion Oros", "Achaia", "Aitolia kai Akarmania", "Argolis", "Arkadia", "Arta", "Attiki", "Chalkidiki", "Chanion", "Chios", "Dodekanisos", "Drama", "Evros", "Evrytania", "Evvoia", "Florina", "Fokidos", "Fthiotis", "Grevena", "Ileia", "Imathia", "Ioannina", "Irakleion", "Karditsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Kilkis", "Korinthia", "Kozani", "Kyklades", "Lakonia", "Larisa", "Lasithi", "Lefkas", "Lesvos", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethynnis", "Rodopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakynthos"],
                "code": "+30"
            },
            {
                "country": "Greenland",
                "states": ["Avannaa (Nordgronland)", "Tunu (Ostgronland)", "Kitaa (Vestgronland)"],
                "code": "+299"
            },
            {
                "country": "Grenada",
                "states": ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"],
                "code": "+1473"
            },
            {
                "country": "Guatemala",
                "states": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"],
                "code": "+502"
            },
            {
                "country": "Guinea",
                "states": ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"],
                "code": "+224"
            },
            {
                "country": "Guinea - Bissau",
                "states": ["Bafata", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"],
                "code": "+245"
            },
            {
                "country": "Guyana",
                "states": ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"],
                "code": "+592"
            },
            {
                "country": "Haiti",
                "states": ["Artibonite", "Centre", "Grand 'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"],
                "code": "+509"
            },
            {
                "country": "Honduras",
                "states": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"],
                "code": "+504"
            },
            {
                "country": "Hong Kong",
                "states": ["Wan Chai", "Sham Shui Po", "Kowloon City", "Kwun Tong"],
                "code": "+852"
            },
            {
                "country": "Hungary",
                "states": ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala", "Bekescsaba", "Debrecen", "Dunaujvaros", "Eger", "Gyor", "Hodmezovasarhely", "Kaposvar", "Kecskemet", "Miskolc", "Nagykanizsa", "Nyiregyhaza", "Pecs", "Sopron", "Szeged", "Szekesfehervar", "Szolnok", "Szombathely", "Tatabanya", "Veszprem", "Zalaegerszeg"],
                "code": "+36"
            },
            {
                "country": "Iceland",
                "states": ["Austurland", "Hofudhborgarsvaedhi", "Nordhurland Eystra", "Nordhurland Vestra", "Sudhurland", "Sudhurnes", "Vestfirdhir", "Vesturland"],
                "code": "+354"
            },
            {
                "country": "Indonesia",
                "states": ["Aceh", "Bali", "Banten", "Bengkulu", "Gorontalo", "Irian Jaya Barat", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"],
                "code": "+62"
            },
            {
                "country": "Iran",
                "states": ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan-e Janubi", "Khorasan-e Razavi", "Khorasan-e Shemali", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"],
                "code": "+98"
            },
            {
                "country": "Iraq",
                "states": ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"],
                "code": "+964"
            },
            {
                "country": "Ireland",
                "states": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"],
                "code": "+353"
            },
            {
                "country": "Israel",
                "states": ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"],
                "code": "+972"
            },
            {
                "country": "Italy",
                "states": ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"],
                "code": "+39"
            },
            {
                "country": "Jamaica",
                "states": ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"],
                "code": "+1876"
            },
            {
                "country": "Japan",
                "states": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
                "code": "+81"
            },
            {
                "country": "Jordan",
                "states": ["Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "'Amman", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"],
                "code": "+962"
            },
            {
                "country": "Kazakhstan",
                "states": ["Almaty Oblysy", "Almaty Qalasy", "Aqmola Oblysy", "Aqtobe Oblysy", "Astana Qalasy", "Atyrau Oblysy", "Batys Qazaqstan Oblysy", "Bayqongyr Qalasy", "Mangghystau Oblysy", "Ongtustik Qazaqstan Oblysy", "Pavlodar Oblysy", "Qaraghandy Oblysy", "Qostanay Oblysy", "Qyzylorda Oblysy", "Shyghys Qazaqstan Oblysy", "Soltustik Qazaqstan Oblysy", "Zhambyl Oblysy"],
                "code": "+7"
            },
            {
                "country": "Kenya",
                "states": ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"],
                "code": "+254"
            },
            {
                "country": "Kiribati",
                "states": ["South Tarawa", "Ocenia"],
                "code": "+686"
            },
            {
                "country": "Korea North",
                "states": ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North P'yongan", "South P'yongan", "Yanggang", "Kaesong", "Najin", "Namp'o", "Pyongyang"],
                "code": "+850"
            },
            {
                "country": "Korea South",
                "states": ["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"],
                "code": "+82"
            },
            {
                "country": "Kuwait",
                "states": ["Al Ahmadi", "Al Farwaniyah", "Al Asimah", "Al Jahra", "Hawalli", "Mubarak Al-Kabeer"],
                "code": "+965"
            },
            {
                "country": "Kyrgyzstan",
                "states": ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty"],
                "code": "+996"
            },
            {
                "country": "Laos",
                "states": ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphrabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"],
                "code": "+856"
            },
            {
                "country": "Latvia",
                "states": ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Liepaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"],
                "code": "+371"
            },
            {
                "country": "Lebanon",
                "states": ["Beyrouth", "Beqaa", "Liban-Nord", "Liban-Sud", "Mont-Liban", "Nabatiye"],
                "code": "+961"
            },
            {
                "country": "Lesotho",
                "states": ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"],
                "code": "+266"
            },
            {
                "country": "Liberia",
                "states": ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"],
                "code": "+231"
            },
            {
                "country": "Libya",
                "states": ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"],
                "code": "+218"
            },
            {
                "country": "Liechtenstein",
                "states": ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"],
                "code": "+417"
            },
            {
                "country": "Lithuania",
                "states": ["Alytaus", "Kauno", "Klaipedos", "Marijampoles", "Panevezio", "Siauliu", "Taurages", "Telsiu", "Utenos", "Vilniaus"],
                "code": "+370"
            },
            {
                "country": "Luxembourg",
                "states": ["Diekirch", "Grevenmacher", "Luxembourg"],
                "code": "+352"
            },
            {
                "country": "Macedonia",
                "states": ["Aerodrom", "Aracinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica", "Butel", "Cair", "Caska", "Centar", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Debartsa", "Delcevo", "Demir Hisar", "Demir Kapija", "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gjorce Petrov", "Gostivar", "Gradsko", "Ilinden", "Jegunovce", "Karbinci", "Karpos", "Kavadarci", "Kicevo", "Kisela Voda", "Kocani", "Konce", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kumanovo", "Lipkovo", "Lozovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovo i Rastusa", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid", "Oslomej", "Pehcevo", "Petrovec", "Plasnica", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Saraj", "Skopje", "Sopiste", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari", "Sveti Nikole", "Tearce", "Tetovo", "Valandovo", "Vasilevo", "Veles", "Vevcani", "Vinica", "Vranestica", "Vrapciste", "Zajas", "Zelenikovo", "Zelino", "Zrnovci"],
                "code": "+389"
            },
            {
                "country": "Madagascar",
                "states": ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"],
                "code": "+261"
            },
            {
                "country": "Malawi",
                "states": ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Ntcheu", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"],
                "code": "+265"
            },
            {
                "country": "Malaysia",
                "states": ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Penang", "Sabah", "Sarawak", "Selangor", "Terengganu"],
                "code": "+60"
            },
            {
                "country": "Maldives",
                "states": ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"],
                "code": "+960"
            },
            {
                "country": "Mali",
                "states": ["Bamako (Capital)", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"],
                "code": "+223"
            },
            {
                "country": "Malta",
                "states": ["Rabat", "Senglea"],
                "code": "+356"
            },
            {
                "country": "Marshall Islands",
                "states": ["Majuro"],
                "code": "+692"
            },
            {
                "country": "Mauritania",
                "states": ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"],
                "code": "+222"
            },
            {
                "country": "Mexico",
                "states": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"],
                "code": "+52"
            },
            {
                "country": "Micronesia",
                "states": ["Palau", "Nauru", "Guam"],
                "code": "+691"
            },
            {
                "country": "Moldova",
                "states": ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Cantemir", "Calarasi", "Causeni", "Cimislia", "Criuleni", "Donduseni", "Drochia", "Dubasari", "Edinet", "Falesti", "Floresti", "Glodeni", "Hincesti", "Ialoveni", "Leova", "Nisporeni", "Ocnita", "Orhei", "Rezina", "Riscani", "Singerei", "Soldanesti", "Soroca", "Stefan-Voda", "Straseni", "Taraclia", "Telenesti", "Ungheni", "Balti", "Bender", "Chisinau", "Gagauzia", "Stinga Nistrului"],
                "code": "+373"
            },
            {
                "country": "Monaco",
                "states": ["Monaco-Ville", "Monte Carlo"],
                "code": "+377"
            },
            {
                "country": "Mongolia",
                "states": ["Arhangay", "Bayanhongor", "Bayan-Olgiy", "Bulgan", "Darhan Uul", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Govi-Altay", "Govi-Sumber", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Orhon", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"],
                "code": "+976"
            },
            {
                "country": "Morocco",
                "states": ["Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Ben Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"],
                "code": "+212"
            },
            {
                "country": "Mozambique",
                "states": ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Cidade de Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"],
                "code": "+258"
            },
            {
                "country": "Namibia",
                "states": ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"],
                "code": "+264"
            },
            {
                "country": "Nauru",
                "states": ["Abab", "Abwaw", "Adibor", "Amet", "Anabar"],
                "code": "+674"
            },
            {
                "country": "Nepal",
                "states": ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"],
                "code": "+977"
            },
            {
                "country": "Netherlands",
                "states": ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"],
                "code": "+31"
            },
            {
                "country": "New Zealand",
                "states": ["Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay", "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"],
                "code": "+64"
            },
            {
                "country": "Nicaragua",
                "states": ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"],
                "code": "+505"
            },
            {
                "country": "Niger",
                "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"],
                "code": "+227"
            },
            {
                "country": "Nigeria",
                "states": ["Abia", "Abuja Federal Capital", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
                "code": "+234"
            },
            {
                "country": "Norway",
                "states": ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nordland", "Nord-Trondelag", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"],
                "code": "+47"
            },
            {
                "country": "Oman",
                "states": ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Dhofar"],
                "code": "+968"
            },
            {
                "country": "Pakistan",
                "states": ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"],
                "code": "+92"
            },
            {
                "country": "Panama",
                "states": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"],
                "code": "+507"
            },
            {
                "country": "Papua New Guinea",
                "states": ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "Western", "Western Highlands", "West New Britain"],
                "code": "+675"
            },
            {
                "country": "Paraguay",
                "states": ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"],
                "code": "+595"
            },
            {
                "country": "Peru",
                "states": ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"],
                "code": "+51"
            },
            {
                "country": "Philippines",
                "states": ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"],
                "code": "+63"
            },
            {
                "country": "Poland",
                "states": ["Greater Poland (Wielkopolskie)", "Kuyavian-Pomeranian (Kujawsko-Pomorskie)", "Lesser Poland (Malopolskie)", "Lodz (Lodzkie)", "Lower Silesian (Dolnoslaskie)", "Lublin (Lubelskie)", "Lubusz (Lubuskie)", "Masovian (Mazowieckie)", "Opole (Opolskie)", "Podlasie (Podlaskie)", "Pomeranian (Pomorskie)", "Silesian (Slaskie)", "Subcarpathian (Podkarpackie)", "Swietokrzyskie (Swietokrzyskie)", "Warmian-Masurian (Warminsko-Mazurskie)", "West Pomeranian (Zachodniopomorskie)"],
                "code": "+48"
            },
            {
                "country": "Portugal",
                "states": ["Aveiro", "Acores", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"],
                "code": "+351"
            },
            {
                "country": "Qatar",
                "states": ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Sa'id", "Umm Salal"],
                "code": "+974"
            },
            {
                "country": "Romania",
                "states": ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Gorj", "Giurgiu", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"],
                "code": "+40"
            },
            {
                "country": "Russia",
                "states": ["Amur", "Arkhangel'sk", "Astrakhan'", "Belgorod", "Bryansk", "Chelyabinsk", "Chita", "Irkutsk", "Ivanovo", "Kaliningrad", "Kaluga", "Kamchatka", "Kemerovo", "Kirov", "Kostroma", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Moscow", "Murmansk", "Nizhniy Novgorod", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orel", "Penza", "Perm'", "Pskov", "Rostov", "Ryazan'", "Sakhalin", "Samara", "Saratov", "Smolensk", "Sverdlovsk", "Tambov", "Tomsk", "Tula", "Tver'", "Tyumen'", "Ul'yanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yaroslavl'", "Adygeya", "Altay", "Bashkortostan", "Buryatiya", "Chechnya", "Chuvashiya", "Dagestan", "Ingushetiya", "Kabardino-Balkariya", "Kalmykiya", "Karachayevo-Cherkesiya", "Kareliya", "Khakasiya", "Komi", "Mariy-El", "Mordoviya", "Sakha", "North Ossetia", "Tatarstan", "Tyva", "Udmurtiya", "Aga Buryat", "Chukotka", "Evenk", "Khanty-Mansi", "Komi-Permyak", "Koryak", "Nenets", "Taymyr", "Ust'-Orda Buryat", "Yamalo-Nenets", "Altay", "Khabarovsk", "Krasnodar", "Krasnoyarsk", "Primorskiy", "Stavropol'", "Moscow", "St. Petersburg", "Yevrey"],
                "code": "+7"
            },
            {
                "country": "Rwanda",
                "states": ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Umutara", "Ruhengeri"],
                "code": "+250"
            },
            {
                "country": "San Marino",
                "states": ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino Citta", "Serravalle"],
                "code": "+378"
            },
            {
                "country": "Sao Tome Principe",
                "states": ["Santo Amaro", "Neves", "Santana"],
                "code": "+239"
            },
            {
                "country": "Saudi Arabia",
                "states": ["Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah", "'Asir", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"],
                "code": "+966"
            },
            {
                "country": "Senegal",
                "states": ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"],
                "code": "+221"
            },
            {
                "country": "Serbia",
                "states": ["Kosovo", "Montenegro", "Serbia", "Vojvodina"],
                "code": "+381"
            },
            {
                "country": "Seychelles",
                "states": ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse", "Grand' Anse", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"],
                "code": "+248"
            },
            {
                "country": "Singapore",
                "states": ["Alexandra", "Bishan", "Chinatown", "Kallang"],
                "code": "+65"
            },
            {
                "country": "Slovak Republic",
                "states": ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"],
                "code": "+421"
            },
            {
                "country": "Slovenia",
                "states": ["Ajdovscina", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica", "Bovec", "Braslovce", "Brda", "Brezice", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Cerkvenjak", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik", "Divaca", "Dobje", "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dolenjske Toplice", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje", "Hajdina", "Hoce-Slivnica", "Hodos-Hodos", "Horjul", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Komenda", "Koper-Capodistria", "Kostel", "Kozje", "Kranj", "Kranjska Gora", "Krizevci", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava-Lendva", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Lovrenc na Pohorju", "Luce", "Lukovica", "Majsperk", "Maribor", "Markovci", "Medvode", "Menges", "Metlika", "Mezica", "Miklavz na Dravskem Polju", "Miren-Kostanjevica", "Mirna Pec", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Oplotnica", "Ormoz", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podcetrtek", "Podlehnik", "Podvelka", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne na Koroskem", "Razkrizje", "Ribnica", "Ribnica na Pohorju", "Rogasovci", "Rogaska Slatina", "Rogatec", "Ruse", "Salovci", "Selnica ob Dravi", "Semic", "Sempeter-Vrtojba", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Smartno pri Litiji", "Sodrazica", "Solcava", "Sostanj", "Starse", "Store", "Sveta Ana", "Sveti Andraz v Slovenskih Goricah", "Sveti Jurij", "Tabor", "Tisina", "Tolmin", "Trbovlje", "Trebnje", "Trnovska Vas", "Trzic", "Trzin", "Turnisce", "Velenje", "Velika Polana", "Velike Lasce", "Verzej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Zetale", "Ziri", "Zirovnica", "Zuzemberk", "Zrece"],
                "code": "+386"
            },
            {
                "country": "Solomon Islands",
                "states": ["Central", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell and Bellona", "Temotu", "Western"],
                "code": "+677"
            },
            {
                "country": "Somalia",
                "states": ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"],
                "code": "+252"
            },
            {
                "country": "South Africa",
                "states": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape", "Western Cape"],
                "code": "+27"
            },
            {
                "country": "Spain",
                "states": ["Andalucia", "Aragon", "Asturias", "Baleares", "Ceuta", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y Leon", "Cataluna", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco"],
                "code": "+34"
            },
            {
                "country": "Sri Lanka",
                "states": ["Central", "North Central", "North Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"],
                "code": "+94"
            },
            {
                "country": "Sudan",
                "states": ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"],
                "code": "+249"
            },
            {
                "country": "Suriname",
                "states": ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"],
                "code": "+597"
            },
            {
                "country": "Swaziland",
                "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"],
                "code": "+268"
            },
            {
                "country": "Sweden",
                "states": ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"],
                "code": "+46"
            },
            {
                "country": "Switzerland",
                "states": ["Aargau", "Appenzell Ausser-Rhoden", "Appenzell Inner-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"],
                "code": "+41"
            },
            {
                "country": "Syria",
                "states": ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"],
                "code": "+963"
            },
            {
                "country": "Taiwan",
                "states": ["Chang-hua", "Chia-i", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kin-men", "Lien-chiang", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-nan", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin", "Chia-i", "Chi-lung", "Hsin-chu", "T'ai-chung", "T'ai-nan", "Kao-hsiung city", "T'ai-pei city"],
                "code": "+886"
            },
            {
                "country": "Tajikstan",
                "states": ["Dushanbe", "Khujand", "Qurghonteppa", "Tursunzoda"],
                "code": "+7"
            },
            {
                "country": "Thailand",
                "states": ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"],
                "code": "+66"
            },
            {
                "country": "Togo",
                "states": ["Kara", "Plateaux", "Savanes", "Centrale", "Maritime"],
                "code": "+228"
            },
            {
                "country": "Tonga",
                "states": ["Tongatapu", "Nuku'alofa", "Ha'amonga ʻa Maui"],
                "code": "+676"
            },
            {
                "country": "Trinidad & Tobago",
                "states": ["Couva", "Diego Martin", "Mayaro", "Penal", "Princes Town", "Sangre Grande", "San Juan", "Siparia", "Tunapuna", "Port-of-Spain", "San Fernando", "Arima", "Point Fortin", "Chaguanas", "Tobago"],
                "code": "+1868"
            },
            {
                "country": "Tunisia",
                "states": ["Ariana (Aryanah)", "Beja (Bajah)", "Ben Arous (Bin 'Arus)", "Bizerte (Banzart)", "Gabes (Qabis)", "Gafsa (Qafsah)", "Jendouba (Jundubah)", "Kairouan (Al Qayrawan)", "Kasserine (Al Qasrayn)", "Kebili (Qibili)", "Kef (Al Kaf)", "Mahdia (Al Mahdiyah)", "Manouba (Manubah)", "Medenine (Madanin)", "Monastir (Al Munastir)", "Nabeul (Nabul)", "Sfax (Safaqis)", "Sidi Bou Zid (Sidi Bu Zayd)", "Siliana (Silyanah)", "Sousse (Susah)", "Tataouine (Tatawin)", "Tozeur (Tawzar)", "Tunis", "Zaghouan (Zaghwan)"],
                "code": "+216"
            },
            {
                "country": "Turkey",
                "states": ["Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"],
                "code": "+90"
            },
            {
                "country": "Turkmenistan",
                "states": ["Ahal Welayaty (Ashgabat)", "Balkan Welayaty (Balkanabat)", "Dashoguz Welayaty", "Lebap Welayaty (Turkmenabat)", "Mary Welayaty"],
                "code": "+993"
            },
            {
                "country": "Uganda",
                "states": ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kampala", "Kamuli", "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Kyenjojo", "Lira", "Luwero", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakasongola", "Nebbi", "Ntungamo", "Pader", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Sironko", "Soroti", "Tororo", "Wakiso", "Yumbe"],
                "code": "+256"
            },
            {
                "country": "Ukraine",
                "states": ["Cherkasy", "Chernihiv", "Chernivtsi", "Crimea", "Dnipropetrovs'k", "Donets'k", "Ivano-Frankivs'k", "Kharkiv", "Kherson", "Khmel'nyts'kyy", "Kirovohrad", "Kiev", "Kyyiv", "Luhans'k", "L'viv", "Mykolayiv", "Odesa", "Poltava", "Rivne", "Sevastopol'", "Sumy", "Ternopil'", "Vinnytsya", "Volyn'", "Zakarpattya", "Zaporizhzhya", "Zhytomyr"],
                "code": "+380"
            },
            {
                "country": "United Arab Emirates",
                "states": ["Abu Dhabi", "'Ajman", "Al Fujayrah", "Sharjah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"],
                "code": "+971"
            },
            {
                "country": "Uruguay",
                "states": ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"],
                "code": "+598"
            },
            {
                "country": "Uzbekistan",
                "states": ["Andijon Viloyati", "Buxoro Viloyati", "Farg'ona Viloyati", "Jizzax Viloyati", "Namangan Viloyati", "Navoiy Viloyati", "Qashqadaryo Viloyati", "Qaraqalpog'iston Respublikasi", "Samarqand Viloyati", "Sirdaryo Viloyati", "Surxondaryo Viloyati", "Toshkent Shahri", "Toshkent Viloyati", "Xorazm Viloyati"],
                "code": "+7"
            },
            {
                "country": "Vanuatu",
                "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"],
                "code": "+678"
            },
            {
                "country": "Venezuela",
                "states": ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"],
                "code": "+58"
            },
            {
                "country": "Vietnam",
                "states": ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"],
                "code": "+84"
            },
            {
                "country": "Yemen (North)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+969"
            },
            {
                "country": "Yemen (South)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+967"
            },
            {
                "country": "Zambia",
                "states": ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Northern", "North-Western", "Southern", "Western"],
                "code": "+260"
            },
            {
                "country": "Zimbabwe",
                "states": ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"],
                "code": "+263"
            }
        ];
        this.countries = [];
        this.mobileLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('+91'),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0][1-9]\\d{9}$|^[1-9]\\d{6,15}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.emailLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    selectLoginType(data) {
        this.loginType = data;
        switch (data) {
            case 'email': {
                this.emailLoginForm.reset();
                break;
            }
            case 'mobile': {
                this.mobileLoginForm.reset();
                this.mobileLoginForm.patchValue({
                    countryCode: '+91',
                });
                break;
            }
            default: {
                console.log('DefaultCase..');
                break;
            }
        }
    }
    loginApiFunc() {
        switch (this.loginType) {
            case 'email': {
                let data = {
                    "email": this.emailLoginForm.value.emailId,
                    "password": this.emailLoginForm.value.password
                };
                this.login(data);
                break;
            }
            case 'mobile': {
                let data = {
                    "email": this.mobileLoginForm.value.mobile,
                    "password": this.mobileLoginForm.value.password
                };
                this.login(data);
                break;
            }
            default: {
                console.log('DefaultCase..');
                break;
            }
        }
    }
    login(data) {
        this.httpService.post('user/login', data, 0).subscribe(res => {
            console.log('Login_Succ', res);
            if (res.responseCode == 200) {
                localStorage.setItem('userToken', res['result']);
                localStorage.setItem('isLoggedIn', 'true');
                this.commonService.showSuccessToast(res['responseMessage'], false, 'center');
                this.router.navigateByUrl('member/matches');
            }
        }, err => {
            console.log('Login_err', err);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 62, vars: 8, consts: [[1, "forgot-password"], [1, "container"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "xol-12"], [1, "forgot-password-form", "login-form"], [1, "column", 3, "click"], [1, "card", 3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-mobile"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [3, "formGroup", 4, "ngIf"], [1, "find-special-someone"], [1, "find-someone"], [1, "find-icon"], [1, "icon-1"], [1, "icon-2"], ["href", "#"], ["aria-hidden", "true", 1, "fas", "fa-edit"], [1, "find-content"], [1, "icon-3"], [1, "icon-4"], ["aria-hidden", "true", 1, "fas", "fa-users"], [1, "icon-5"], [1, "icon-6"], ["aria-hidden", "true", 1, "fas", "fa-comments"], [3, "formGroup"], [1, "mt-5"], [1, "form-group", "d-flex"], ["formControlName", "countryCode", 1, "form-control", "select-custome", "max-WT-180", "select-border"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", "data-toggle", "tooltip", "data-placement", "top", "title", "Phone Number", "formControlName", "mobile", "placeholder", "Mobile number*", 1, "form-control"], ["style", "color:red;font-size: 13px !important;", 3, "hidden", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Password", "formControlName", "password", "placeholder", "Password*", 1, "form-control"], ["type", "submit", 3, "disabled", "ngClass", "click"], ["href", "javascript:;", 3, "routerLink"], ["href", "javascript:;"], ["href", "javascript:;", "id", "register", 3, "routerLink"], [3, "value"], [2, "color", "red", "font-size", "13px !important", 3, "hidden"], ["type", "text", "maxlength", "255", "data-toggle", "tooltip", "data-placement", "top", "title", "Email ID", "formControlName", "emailId", "placeholder", "Email*", 1, "form-control"], ["type", "password", "data-toggle", "tooltip", "data-placement", "top", "title", "Password", "formControlName", "password", "placeholder", "Password*", 1, "form-control"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login to continue..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_11_listener() { return ctx.selectLoginType("mobile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_17_listener() { return ctx.selectLoginType("email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_form_23_Template, 19, 11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_form_24_Template, 17, 10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Find your Special Someone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Login and complete or Update your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Select & Connect with Matches you like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Interact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Become a Premium Member & Start a Conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx.loginType == "mobile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, ctx.loginType == "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType == "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType == "email");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".find-special-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  text-align: center;\n  line-height: 30px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #a6a6a6;\n  position: absolute;\n  top: 22%;\n  right: -17%;\n  transform: translate(-50%, -50%);\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  margin-top: 97px;\n}\n\n@media screen and (max-width: 1220px) {\n  .container[_ngcontent-%COMP%] {\n    width: 970px;\n  }\n}\n\n@media screen and (max-width: 990px) {\n  .container[_ngcontent-%COMP%] {\n    width: 760px;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    top: 22%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n\n  .forgot-password[_ngcontent-%COMP%] {\n    margin-top: 72px;\n  }\n\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n\n  .forgot-password[_ngcontent-%COMP%] {\n    margin-top: 29px;\n    padding-bottom: 20px;\n  }\n\n  .forgot-password[_ngcontent-%COMP%]   .forgot-password-form[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n\n.select-custome[_ngcontent-%COMP%] {\n  width: 150px !important;\n}\n\n\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 45%;\n  padding: 0 5px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0 -5px;\n}\n\n\n\n.row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n\n\n@media screen and (max-width: 600px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n  }\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  text-align: center;\n  background-color: #283338;\n  color: white;\n  border-radius: 15px;\n}\n\n.fa[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.cardToggle[_ngcontent-%COMP%] {\n  box-shadow: 2px 1px 15px 5px #be8a50;\n  padding: 16px;\n  text-align: center;\n  background-color: #283338;\n  color: white;\n  border-color: #be8a50;\n  border-radius: 15px;\n  border: 3px solid #f8f6f4;\n  transition: box-shadow 0.2s ease-out;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(2.25rem + 4px);\n  margin-right: 10px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0rem !important;\n}\n\na#register[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.disableCss[_ngcontent-%COMP%] {\n  background-color: #dddddd !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR1ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFDWjs7QUFFUTtFQUNJLGdCQUFBO0FBQ1o7O0FBRVE7RUFDSTtJQUNJLFlBQUE7RUFDZDtBQUNGOztBQUVRO0VBQ0k7SUFDSSxZQUFBO0VBQWQ7O0VBR1U7OztJQUdJLFdBQUE7RUFBZDtBQUNGOztBQUdRO0VBQ0k7SUFDSSxXQUFBO0VBRGQ7QUFDRjs7QUFJUTtFQUNJO0lBQ0ksV0FBQTtFQUZkOztFQUtVOzs7SUFHSSxRQUFBO0VBRmQ7O0VBS1U7OztJQUdJLFdBQUE7RUFGZDs7RUFLVTtJQUNJLGdCQUFBO0VBRmQ7O0VBS1U7SUFDSSxZQUFBO0VBRmQ7O0VBTVU7SUFDSSxnQkFBQTtJQUNBLG9CQUFBO0VBSGQ7O0VBTVU7SUFDSSxrQkFBQTtFQUhkO0FBQ0Y7O0FBT0E7RUFBVywrQkFBQTtBQUpYOztBQUtBO0VBQWdCLHVCQUFBO0FBRGhCOztBQUVBLG9DQUFBOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFBTSxjQUFBO0FBRVI7O0FBQUUsbUNBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFHSjs7QUFBRSx1QkFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQUdKO0FBQ0Y7O0FBQUUsNEJBQUE7O0FBQ0E7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFBSyxlQUFBO0FBR1A7O0FBREU7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FBSUo7O0FBREU7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREU7RUFDRSw4QkFBQTtBQUlKOztBQURFO0VBQ0Usa0JBQUE7QUFJSjs7QUFGRTtFQUNFLG9DQUFBO0FBS0o7O0FBRkE7RUFDSSw2QkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvYmVmb3JlLXNpZ251cC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maW5kLXNwZWNpYWwtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTEgLmljb24tMjo6YWZ0ZXIsXG4gICAgICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0zIC5pY29uLTQ6OmFmdGVyLFxuICAgICAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIyJTtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTclO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZ290LXBhc3N3b3JkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDk3cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0xIC5pY29uLTI6OmFmdGVyLFxuICAgICAgICAgICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTMgLmljb24tNDo6YWZ0ZXIsXG4gICAgICAgICAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0xIC5pY29uLTI6OmFmdGVyLFxuICAgICAgICAgICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTMgLmljb24tNDo6YWZ0ZXIsXG4gICAgICAgICAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgICAgICAgICAgdG9wOiAyMiU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0xIC5pY29uLTI6OmFmdGVyLFxuICAgICAgICAgICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTMgLmljb24tNDo6YWZ0ZXIsXG4gICAgICAgICAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xNCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hcnJvd191cCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MnB4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3Jnb3QtcGFzc3dvcmQgLmZvcmdvdC1wYXNzd29yZC1mb3JtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0Fhc2hpc2ggQ3NzLi4uLi5cbi5jb250YWluZXJ7bWluLWhlaWdodDpjYWxjKDEwMHZoIC0gNTAwcHgpO31cbi5zZWxlY3QtY3VzdG9tZXt3aWR0aDogMTUwcHggIWltcG9ydGFudDt9XG4vKiBGbG9hdCBmb3VyIGNvbHVtbnMgc2lkZSBieSBzaWRlICovXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG4gIFxuICAucm93IHttYXJnaW46IDAgLTVweDt9XG4gIFxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLnJvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICBcbiAgLyogUmVzcG9uc2l2ZSBjb2x1bW5zICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHRoZSBjb3VudGVyIGNhcmRzICovXG4gIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzMzODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBcbiAgLmZhIHtmb250LXNpemU6NTBweDt9XG5cbiAgLmNhcmRUb2dnbGUge1xuICAgIGJveC1zaGFkb3c6IDJweCAxcHggMTVweCA1cHggI2JlOGE1MDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMzM4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICNiZThhNTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjhmNmY0O1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLW91dDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogY2FsYygyLjI1cmVtICsgNHB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgYSNyZWdpc3RlciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuICAuZGlzYWJsZUNzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXMgOiA1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/packages/packages.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/before-signup/packages/packages.component.ts ***!
  \**************************************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class PackagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PackagesComponent.ɵfac = function PackagesComponent_Factory(t) { return new (t || PackagesComponent)(); };
PackagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackagesComponent, selectors: [["app-packages"]], decls: 112, vars: 0, consts: [[1, "packages-container", 2, "background-color", "#ded0c3"], [1, "container"], [1, "row"], [1, "col-xl-12"], [1, "heading"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-6", "col-12"], [1, "premium-column-1"], ["href", "#"], [1, "premium-column-profile"], ["id", "check", "aria-hidden", "true", 1, "fas", "fa-check"], [1, "select-time"], ["required", ""], ["selected", ""], ["type", "submit", 2, "background-color", "#cccccc"], ["src", "assets/img/icon-3.png", "alt", "silver-img", "title", "icon", 1, "silver"], ["type", "submit", 2, "background", "#d1b593"], ["src", "assets/img/icon-2.png", "alt", "gold-img", "title", "icon", 1, "gold"], ["type", "submit", 2, "background", "#a0bdc3"], ["src", "assets/img/icon-1.png", "alt", "diamond-img", "title", "icon", 1, "diamond"]], template: function PackagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PACKAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Silver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "40% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SAR 1,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SAR 8,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SAR 800 per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " View 75 Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Get highilighted to your Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Make Contact details visible to all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Early");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Gold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "45% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "SAR 2,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "SAR 1,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "SAR 1,500 per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " View 150 Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Get highilighted to your Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Make Contact details visible to all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Early");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Diamond");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "6 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "50% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "SAR 8,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "SAR 4,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "SAR 738 per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " View 300 Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Get highilighted to your Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Make Contact details visible to all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Early");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".packages-container[_ngcontent-%COMP%] {\n  padding: 170px 0px 70px 0px;\n}\n\n.packages-container[_ngcontent-%COMP%]   .premium-column-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #51505d;\n  font-size: 32px;\n  margin: 10px 0px;\n  padding: 0;\n}\n\n@media screen and (max-width: 460px) {\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9wYWNrYWdlcy9wYWNrYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUVBOztBQUFBO0VBQ0k7SUFDSSxZQUFBO0VBR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvcGFja2FnZXMvcGFja2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFja2FnZXMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNzBweCAwcHggNzBweCAwcHg7XG59XG4ucGFja2FnZXMtY29udGFpbmVyIC5wcmVtaXVtLWNvbHVtbi0xIGgyIHtcbmNvbG9yOiAjNTE1MDVkO1xuZm9udC1zaXplOiAzMnB4O1xubWFyZ2luOiAxMHB4IDBweDtcbnBhZGRpbmc6IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIC5hcnJvd191cCB7XG4gICAgICAgIGJvdHRvbTogNTJweDtcbiAgICB9XG5cbiAgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-packages',
                templateUrl: './packages.component.html',
                styleUrls: ['./packages.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/privacy-policy/privacy-policy.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/before-signup/privacy-policy/privacy-policy.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class PrivacyPolicyComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.staticContentFunc();
    }
    staticContentFunc() {
        this.httpService.get('static/getStaticContent?Type=PRIVACY', 0).subscribe(res => {
            console.log('staticContent==>', res);
            this.privacyPolicy = res.result[0].description;
        }, err => {
            console.log(err);
        });
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 30, vars: 1, consts: [[1, "common-section"], [1, "container"], [1, "about-wedding-app"], [1, "wedding_app"], [2, "font-size", "24px"], [1, "row"], [1, "col-sm-12", "col-md-7"], [1, "about_content"], [1, "col-sm-12", "col-md-5"], [1, "signup-page-1"], ["type", "text", "placeholder", "Full Name*", "name", "user-name", "required", ""], ["type", "tel", "placeholder", "Mobile Number*", "name", "user-mob", "required", ""], ["type", "text", "placeholder", "Create Profile for*", "name", "profile-for", "required", ""], ["type", "password", "placeholder", "Create New Password*", "name", "user-pass", "required", "", "id", "creat-pass"], ["id", "show-pass", "title", "view password", "aria-hidden", "true", 1, "far", "fa-eye-slash"], [1, "sr-only"], ["id", "none-pass", "title", "hide password", "aria-hidden", "true", 1, "far", "fa-eye"], ["type", "submit"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "view password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "hide password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.privacyPolicy, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n  margin: 15px 0px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ni#show-pass[_ngcontent-%COMP%], i#none-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  bottom: 25%;\n  z-index: 2;\n}\n\n@media screen and (max-width: 1220px) {\n  section[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 370px);\n    overflow: auto;\n  }\n}\n\n@media screen and (max-width: 660px) {\n  section[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  section[_ngcontent-%COMP%] {\n    padding: 10px 0px 30px 0px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n\n.about-wedding-app[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtBQUNKOztBQUlBOztFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsY0FBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLGlCQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJO0lBQ0ksMEJBQUE7RUFITjtBQUNGOztBQU9BO0VBQVcsK0JBQUE7QUFKWDs7QUFLQTtFQUFvQiwyQkFBQTtBQURwQiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXBhZ2UtMSB7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIG1hcmdpbjogMTVweCAwcHggMTBweDtcbn1cblxuLnNpZ251cC1wYWdlLTEgZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaWdudXAtcGFnZS0xIGg0IHtcbiAgICBtYXJnaW46IDA7XG59XG5cblxuXG5pI3Nob3ctcGFzcyxcbmkjbm9uZS1wYXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIlO1xuICAgIGJvdHRvbTogMjUlO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzcwcHgpO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMzBweCAwcHg7XG4gICAgfVxufVxuXG4vL0Fhc2hpc2ggQ3NzLi4uLi5cbi5jb250YWluZXJ7bWluLWhlaWdodDpjYWxjKDEwMHZoIC0gNTAwcHgpO31cbi5hYm91dC13ZWRkaW5nLWFwcCB7bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html',
                styleUrls: ['./privacy-policy.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/registration-step1/registration-step1.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/before-signup/registration-step1/registration-step1.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationStep1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStep1Component", function() { return RegistrationStep1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a0) { return { "error": a0 }; };
function RegistrationStep1Component_h1_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*First Name must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.registratioForm1.get("username").hasError("required") && ctx_r0.registratioForm1.get("username").dirty));
} }
function RegistrationStep1Component_h1_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*First Name accepts character only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep1Component_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r11 == null ? null : data_r11.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r11 == null ? null : data_r11.code, " ", data_r11 == null ? null : data_r11.country, " ");
} }
function RegistrationStep1Component_h1_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Mobile must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.registratioForm1.get("mobile").hasError("required") && ctx_r3.registratioForm1.get("mobile").dirty));
} }
function RegistrationStep1Component_h1_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid mobile number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep1Component_h1_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Email must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.registratioForm1.get("emailId").hasError("required") && ctx_r5.registratioForm1.get("emailId").dirty));
} }
function RegistrationStep1Component_h1_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid Email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep1Component_h1_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Profile Name must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r7.registratioForm1.get("profileFor").hasError("required") && ctx_r7.registratioForm1.get("profileFor").dirty));
} }
function RegistrationStep1Component_h1_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Profile Name accepts character only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep1Component_i_56_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep1Component_i_56_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.showHidePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep1Component_i_57_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep1Component_i_57_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showHidePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "disableCss": a0 }; };
class RegistrationStep1Component {
    constructor(router, httpService, commonService) {
        this.router = router;
        this.httpService = httpService;
        this.commonService = commonService;
        this.showEye = false;
        this.countryArr = [
            {
                "country": "India",
                "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"],
                "code": "+91"
            },
            {
                "country": "Algeria",
                "states": ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "Muaskar", "Medea", "Mila", "Mostaganem", "M'Sila", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"],
                "code": "+213"
            },
            {
                "country": "Andorra",
                "states": ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"],
                "code": "+376"
            },
            {
                "country": "Angola",
                "states": ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uige", "Zaire"],
                "code": "+244"
            },
            {
                "country": "Anguilla",
                "states": ["Big Spring Cave", "East End Pond"],
                "code": "+1264"
            },
            {
                "country": "Antigua & Barbuda",
                "states": ["St. John's"],
                "code": "+1268"
            },
            {
                "country": "Argentina",
                "states": ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
                "code": "+54"
            },
            {
                "country": "Armenia",
                "states": ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"],
                "code": "+374"
            },
            {
                "country": "Aruba",
                "states": ["Oranjestad"],
                "code": "+297"
            },
            {
                "country": "Australia",
                "states": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria"],
                "code": "+61"
            },
            {
                "country": "Austria",
                "states": ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"],
                "code": "+43"
            },
            {
                "country": "Azerbaijan",
                "states": ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Astara Rayonu", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lerik Rayonu", "Masalli Rayonu", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Susa Rayonu", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu", "Ali Bayramli Sahari", "Baki Sahari", "Ganca Sahari", "Lankaran Sahari", "Mingacevir Sahari", "Naftalan Sahari", "Saki Sahari", "Sumqayit Sahari", "Susa Sahari", "Xankandi Sahari", "Yevlax Sahari", "Naxcivan Muxtar"],
                "code": "+994"
            },
            {
                "country": "Bahamas",
                "states": ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nichollstown and Berry Islands", "Ragged Island", "Rock Sound", "Sandy Point", "San Salvador and Rum Cay"],
                "code": "+1242"
            },
            {
                "country": "Bahrain",
                "states": ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Madinat Hamad", "Madinat 'Isa", "Juzur Hawar", "Sitrah"],
                "code": "+973"
            },
            {
                "country": "Bangladesh",
                "states": ["Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Sylhet"],
                "code": "+880"
            },
            {
                "country": "Barbados",
                "states": ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"],
                "code": "+1246"
            },
            {
                "country": "Belarus",
                "states": ["Brest", "Homyel", "Horad Minsk", "Hrodna", "Mahilyow", "Minsk", "Vitsyebsk"],
                "code": "+375"
            },
            {
                "country": "Belgium",
                "states": ["Antwerpen", "Brabant Wallon", "Brussels", "Flanders", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "Wallonia", "West-Vlaanderen"],
                "code": "+32"
            },
            {
                "country": "Belize",
                "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"],
                "code": "+501"
            },
            {
                "country": "Benin",
                "states": ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Oueme", "Plateau", "Zou"],
                "code": "+229"
            },
            {
                "country": "Bermuda",
                "states": ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint George's", "Sandys", "Smith's", "Southampton", "Warwick"],
                "code": "+1441"
            },
            {
                "country": "Bhutan",
                "states": ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"],
                "code": "+975"
            },
            {
                "country": "Bolivia",
                "states": ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"],
                "code": "+591"
            },
            {
                "country": "Bosnia Herzegovina",
                "states": ["Una-Sana [Federation]", "Posavina [Federation]", "Tuzla [Federation]", "Zenica-Doboj [Federation]", "Bosnian Podrinje [Federation]", "Central Bosnia [Federation]", "Herzegovina-Neretva [Federation]", "West Herzegovina [Federation]", "Sarajevo [Federation]", " West Bosnia [Federation]", "Banja Luka [RS]", "Bijeljina [RS]", "Doboj [RS]", "Fo?a [RS]", "Sarajevo-Romanija [RS]", "Trebinje [RS]", "Vlasenica [RS]"],
                "code": "+387"
            },
            {
                "country": "Botswana",
                "states": ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North East", "North West", "South East", "Southern"],
                "code": "+261"
            },
            {
                "country": "Brazil",
                "states": ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"],
                "code": "+55"
            },
            {
                "country": "Brunei",
                "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"],
                "code": "+673"
            },
            {
                "country": "Bulgaria",
                "states": ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"],
                "code": "+359"
            },
            {
                "country": "Burkina Faso",
                "states": ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komondjari", "Kompienga", "Kossi", "Koulpelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passore", "Poni", "Sanguie", "Sanmatenga", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundweogo"],
                "code": "+226"
            },
            {
                "country": "Burundi",
                "states": ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"],
                "code": "+257"
            },
            {
                "country": "Cambodia",
                "states": ["Banteay Mean Chey", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Koh Kong", "Kracheh", "Mondol Kiri", "Otdar Mean Chey", "Pouthisat", "Preah Vihear", "Prey Veng", "Rotanakir", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takao", "Keb", "Pailin", "Phnom Penh", "Preah Seihanu"],
                "code": "+855"
            },
            {
                "country": "Cameroon",
                "states": ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"],
                "code": "+237"
            },
            {
                "country": "Canada",
                "states": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"],
                "code": "+1"
            },
            {
                "country": "Cape Verde Islands",
                "states": ["Barlavento", "Santo Antão", "São Vicente", "Santa Luzia", "São Nicolau", "Boa Vista", "Sal"],
                "code": "+238"
            },
            {
                "country": "Central African Republic",
                "states": ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kemo", "Lobaye", "Mambere-Kadei", "Mbomou", "Nana-Grebizi", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha-Mbaere", "Vakaga"],
                "code": "+236"
            },
            {
                "country": "Chile",
                "states": ["Aysen", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "O'Higgins", "Los Lagos", "Magallanes y la Antartica Chilena", "Maule", "Santiago Region Metropolitana", "Tarapaca", "Valparaiso"],
                "code": "+56"
            },
            {
                "country": "China",
                "states": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"],
                "code": "+86"
            },
            {
                "country": "Colombia",
                "states": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota District Capital", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres & Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"],
                "code": "+57"
            },
            {
                "country": "Comoros",
                "states": ["Grande Comore (Njazidja)", "Anjouan (Nzwani)", "Moheli (Mwali)"],
                "code": "+269"
            },
            {
                "country": "Congo",
                "states": ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"],
                "code": "+242"
            },
            {
                "country": "Costa Rica",
                "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"],
                "code": "+506"
            },
            {
                "country": "Croatia",
                "states": ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozesko-Slavonska", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagreb", "Zagrebacka"],
                "code": "+385"
            },
            {
                "country": "Cuba",
                "states": ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"],
                "code": "+53"
            },
            {
                "country": "Cyprus North",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+90392"
            },
            {
                "country": "Cyprus South",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+357"
            },
            {
                "country": "Czech Republic",
                "states": ["Jihocesky Kraj", "Jihomoravsky Kraj", "Karlovarsky Kraj", "Kralovehradecky Kraj", "Liberecky Kraj", "Moravskoslezsky Kraj", "Olomoucky Kraj", "Pardubicky Kraj", "Plzensky Kraj", "Praha", "Stredocesky Kraj", "Ustecky Kraj", "Vysocina", "Zlinsky Kraj"],
                "code": "+42"
            },
            {
                "country": "Denmark",
                "states": ["Arhus", "Bornholm", "Frederiksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"],
                "code": "+45"
            },
            {
                "country": "Djibouti",
                "states": ["Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"],
                "code": "+253"
            },
            {
                "country": "Dominica",
                "states": ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"],
                "code": "+1809"
            },
            {
                "country": "Dominican Republic",
                "states": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "Elias Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "Sanchez Ramirez", "San Cristobal", "San Jose de Ocoa", "San Juan", "San Pedro de Macoris", "Santiago", "Santiago Rodriguez", "Santo Domingo", "Valverde"],
                "code": "+1809"
            },
            {
                "country": "Ecuador",
                "states": ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"],
                "code": "+593"
            },
            {
                "country": "Egypt",
                "states": ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"],
                "code": "+20"
            },
            {
                "country": "El Salvador",
                "states": ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "Santa Ana", "San Vicente", "Sonsonate", "Usulutan"],
                "code": "+503"
            },
            {
                "country": "Equatorial Guinea",
                "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"],
                "code": "+240"
            },
            {
                "country": "Eritrea",
                "states": ["Anseba", "Debub", "Debubawi K'eyih Bahri", "Gash Barka", "Ma'akel", "Semenawi Keyih Bahri"],
                "code": "+291"
            },
            {
                "country": "Estonia",
                "states": ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laanemaa (Haapsalu)", "Laane-Virumaa (Rakvere)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuressaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"],
                "code": "+372"
            },
            {
                "country": "Ethiopia",
                "states": ["Addis Ababa", "Afar", "Amhara", "Binshangul Gumuz", "Dire Dawa", "Gambela Hizboch", "Harari", "Oromia", "Somali", "Tigray", "Southern Nations, Nationalities, and Peoples Region"],
                "code": "+251"
            },
            {
                "country": "Fiji",
                "states": ["Central (Suva)", "Eastern (Levuka)", "Northern (Labasa)", "Rotuma", "Western (Lautoka)"],
                "code": "+679"
            },
            {
                "country": "Finland",
                "states": ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"],
                "code": "+358"
            },
            {
                "country": "France",
                "states": ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"],
                "code": "+33"
            },
            {
                "country": "Gabon",
                "states": ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"],
                "code": "+241"
            },
            {
                "country": "Gambia",
                "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"],
                "code": "+220"
            },
            {
                "country": "Georgia",
                "states": ["Macon–Bibb County", "Georgetown–Quitman County"],
                "code": "+7880"
            },
            {
                "country": "Germany",
                "states": ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"],
                "code": "+49"
            },
            {
                "country": "Ghana",
                "states": ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"],
                "code": "+233"
            },
            {
                "country": "Greece",
                "states": ["Agion Oros", "Achaia", "Aitolia kai Akarmania", "Argolis", "Arkadia", "Arta", "Attiki", "Chalkidiki", "Chanion", "Chios", "Dodekanisos", "Drama", "Evros", "Evrytania", "Evvoia", "Florina", "Fokidos", "Fthiotis", "Grevena", "Ileia", "Imathia", "Ioannina", "Irakleion", "Karditsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Kilkis", "Korinthia", "Kozani", "Kyklades", "Lakonia", "Larisa", "Lasithi", "Lefkas", "Lesvos", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethynnis", "Rodopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakynthos"],
                "code": "+30"
            },
            {
                "country": "Greenland",
                "states": ["Avannaa (Nordgronland)", "Tunu (Ostgronland)", "Kitaa (Vestgronland)"],
                "code": "+299"
            },
            {
                "country": "Grenada",
                "states": ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"],
                "code": "+1473"
            },
            {
                "country": "Guatemala",
                "states": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"],
                "code": "+502"
            },
            {
                "country": "Guinea",
                "states": ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"],
                "code": "+224"
            },
            {
                "country": "Guinea - Bissau",
                "states": ["Bafata", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"],
                "code": "+245"
            },
            {
                "country": "Guyana",
                "states": ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"],
                "code": "+592"
            },
            {
                "country": "Haiti",
                "states": ["Artibonite", "Centre", "Grand 'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"],
                "code": "+509"
            },
            {
                "country": "Honduras",
                "states": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"],
                "code": "+504"
            },
            {
                "country": "Hong Kong",
                "states": ["Wan Chai", "Sham Shui Po", "Kowloon City", "Kwun Tong"],
                "code": "+852"
            },
            {
                "country": "Hungary",
                "states": ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala", "Bekescsaba", "Debrecen", "Dunaujvaros", "Eger", "Gyor", "Hodmezovasarhely", "Kaposvar", "Kecskemet", "Miskolc", "Nagykanizsa", "Nyiregyhaza", "Pecs", "Sopron", "Szeged", "Szekesfehervar", "Szolnok", "Szombathely", "Tatabanya", "Veszprem", "Zalaegerszeg"],
                "code": "+36"
            },
            {
                "country": "Iceland",
                "states": ["Austurland", "Hofudhborgarsvaedhi", "Nordhurland Eystra", "Nordhurland Vestra", "Sudhurland", "Sudhurnes", "Vestfirdhir", "Vesturland"],
                "code": "+354"
            },
            {
                "country": "Indonesia",
                "states": ["Aceh", "Bali", "Banten", "Bengkulu", "Gorontalo", "Irian Jaya Barat", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"],
                "code": "+62"
            },
            {
                "country": "Iran",
                "states": ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan-e Janubi", "Khorasan-e Razavi", "Khorasan-e Shemali", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"],
                "code": "+98"
            },
            {
                "country": "Iraq",
                "states": ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"],
                "code": "+964"
            },
            {
                "country": "Ireland",
                "states": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"],
                "code": "+353"
            },
            {
                "country": "Israel",
                "states": ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"],
                "code": "+972"
            },
            {
                "country": "Italy",
                "states": ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"],
                "code": "+39"
            },
            {
                "country": "Jamaica",
                "states": ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"],
                "code": "+1876"
            },
            {
                "country": "Japan",
                "states": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
                "code": "+81"
            },
            {
                "country": "Jordan",
                "states": ["Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "'Amman", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"],
                "code": "+962"
            },
            {
                "country": "Kazakhstan",
                "states": ["Almaty Oblysy", "Almaty Qalasy", "Aqmola Oblysy", "Aqtobe Oblysy", "Astana Qalasy", "Atyrau Oblysy", "Batys Qazaqstan Oblysy", "Bayqongyr Qalasy", "Mangghystau Oblysy", "Ongtustik Qazaqstan Oblysy", "Pavlodar Oblysy", "Qaraghandy Oblysy", "Qostanay Oblysy", "Qyzylorda Oblysy", "Shyghys Qazaqstan Oblysy", "Soltustik Qazaqstan Oblysy", "Zhambyl Oblysy"],
                "code": "+7"
            },
            {
                "country": "Kenya",
                "states": ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"],
                "code": "+254"
            },
            {
                "country": "Kiribati",
                "states": ["South Tarawa", "Ocenia"],
                "code": "+686"
            },
            {
                "country": "Korea North",
                "states": ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North P'yongan", "South P'yongan", "Yanggang", "Kaesong", "Najin", "Namp'o", "Pyongyang"],
                "code": "+850"
            },
            {
                "country": "Korea South",
                "states": ["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"],
                "code": "+82"
            },
            {
                "country": "Kuwait",
                "states": ["Al Ahmadi", "Al Farwaniyah", "Al Asimah", "Al Jahra", "Hawalli", "Mubarak Al-Kabeer"],
                "code": "+965"
            },
            {
                "country": "Kyrgyzstan",
                "states": ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty"],
                "code": "+996"
            },
            {
                "country": "Laos",
                "states": ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphrabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"],
                "code": "+856"
            },
            {
                "country": "Latvia",
                "states": ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Liepaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"],
                "code": "+371"
            },
            {
                "country": "Lebanon",
                "states": ["Beyrouth", "Beqaa", "Liban-Nord", "Liban-Sud", "Mont-Liban", "Nabatiye"],
                "code": "+961"
            },
            {
                "country": "Lesotho",
                "states": ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"],
                "code": "+266"
            },
            {
                "country": "Liberia",
                "states": ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"],
                "code": "+231"
            },
            {
                "country": "Libya",
                "states": ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"],
                "code": "+218"
            },
            {
                "country": "Liechtenstein",
                "states": ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"],
                "code": "+417"
            },
            {
                "country": "Lithuania",
                "states": ["Alytaus", "Kauno", "Klaipedos", "Marijampoles", "Panevezio", "Siauliu", "Taurages", "Telsiu", "Utenos", "Vilniaus"],
                "code": "+370"
            },
            {
                "country": "Luxembourg",
                "states": ["Diekirch", "Grevenmacher", "Luxembourg"],
                "code": "+352"
            },
            {
                "country": "Macedonia",
                "states": ["Aerodrom", "Aracinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica", "Butel", "Cair", "Caska", "Centar", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Debartsa", "Delcevo", "Demir Hisar", "Demir Kapija", "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gjorce Petrov", "Gostivar", "Gradsko", "Ilinden", "Jegunovce", "Karbinci", "Karpos", "Kavadarci", "Kicevo", "Kisela Voda", "Kocani", "Konce", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kumanovo", "Lipkovo", "Lozovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovo i Rastusa", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid", "Oslomej", "Pehcevo", "Petrovec", "Plasnica", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Saraj", "Skopje", "Sopiste", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari", "Sveti Nikole", "Tearce", "Tetovo", "Valandovo", "Vasilevo", "Veles", "Vevcani", "Vinica", "Vranestica", "Vrapciste", "Zajas", "Zelenikovo", "Zelino", "Zrnovci"],
                "code": "+389"
            },
            {
                "country": "Madagascar",
                "states": ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"],
                "code": "+261"
            },
            {
                "country": "Malawi",
                "states": ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Ntcheu", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"],
                "code": "+265"
            },
            {
                "country": "Malaysia",
                "states": ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Penang", "Sabah", "Sarawak", "Selangor", "Terengganu"],
                "code": "+60"
            },
            {
                "country": "Maldives",
                "states": ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"],
                "code": "+960"
            },
            {
                "country": "Mali",
                "states": ["Bamako (Capital)", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"],
                "code": "+223"
            },
            {
                "country": "Malta",
                "states": ["Rabat", "Senglea"],
                "code": "+356"
            },
            {
                "country": "Marshall Islands",
                "states": ["Majuro"],
                "code": "+692"
            },
            {
                "country": "Mauritania",
                "states": ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"],
                "code": "+222"
            },
            {
                "country": "Mexico",
                "states": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"],
                "code": "+52"
            },
            {
                "country": "Micronesia",
                "states": ["Palau", "Nauru", "Guam"],
                "code": "+691"
            },
            {
                "country": "Moldova",
                "states": ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Cantemir", "Calarasi", "Causeni", "Cimislia", "Criuleni", "Donduseni", "Drochia", "Dubasari", "Edinet", "Falesti", "Floresti", "Glodeni", "Hincesti", "Ialoveni", "Leova", "Nisporeni", "Ocnita", "Orhei", "Rezina", "Riscani", "Singerei", "Soldanesti", "Soroca", "Stefan-Voda", "Straseni", "Taraclia", "Telenesti", "Ungheni", "Balti", "Bender", "Chisinau", "Gagauzia", "Stinga Nistrului"],
                "code": "+373"
            },
            {
                "country": "Monaco",
                "states": ["Monaco-Ville", "Monte Carlo"],
                "code": "+377"
            },
            {
                "country": "Mongolia",
                "states": ["Arhangay", "Bayanhongor", "Bayan-Olgiy", "Bulgan", "Darhan Uul", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Govi-Altay", "Govi-Sumber", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Orhon", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"],
                "code": "+976"
            },
            {
                "country": "Morocco",
                "states": ["Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Ben Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"],
                "code": "+212"
            },
            {
                "country": "Mozambique",
                "states": ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Cidade de Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"],
                "code": "+258"
            },
            {
                "country": "Namibia",
                "states": ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"],
                "code": "+264"
            },
            {
                "country": "Nauru",
                "states": ["Abab", "Abwaw", "Adibor", "Amet", "Anabar"],
                "code": "+674"
            },
            {
                "country": "Nepal",
                "states": ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"],
                "code": "+977"
            },
            {
                "country": "Netherlands",
                "states": ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"],
                "code": "+31"
            },
            {
                "country": "New Zealand",
                "states": ["Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay", "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"],
                "code": "+64"
            },
            {
                "country": "Nicaragua",
                "states": ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"],
                "code": "+505"
            },
            {
                "country": "Niger",
                "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"],
                "code": "+227"
            },
            {
                "country": "Nigeria",
                "states": ["Abia", "Abuja Federal Capital", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
                "code": "+234"
            },
            {
                "country": "Norway",
                "states": ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nordland", "Nord-Trondelag", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"],
                "code": "+47"
            },
            {
                "country": "Oman",
                "states": ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Dhofar"],
                "code": "+968"
            },
            {
                "country": "Pakistan",
                "states": ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"],
                "code": "+92"
            },
            {
                "country": "Panama",
                "states": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"],
                "code": "+507"
            },
            {
                "country": "Papua New Guinea",
                "states": ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "Western", "Western Highlands", "West New Britain"],
                "code": "+675"
            },
            {
                "country": "Paraguay",
                "states": ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"],
                "code": "+595"
            },
            {
                "country": "Peru",
                "states": ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"],
                "code": "+51"
            },
            {
                "country": "Philippines",
                "states": ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"],
                "code": "+63"
            },
            {
                "country": "Poland",
                "states": ["Greater Poland (Wielkopolskie)", "Kuyavian-Pomeranian (Kujawsko-Pomorskie)", "Lesser Poland (Malopolskie)", "Lodz (Lodzkie)", "Lower Silesian (Dolnoslaskie)", "Lublin (Lubelskie)", "Lubusz (Lubuskie)", "Masovian (Mazowieckie)", "Opole (Opolskie)", "Podlasie (Podlaskie)", "Pomeranian (Pomorskie)", "Silesian (Slaskie)", "Subcarpathian (Podkarpackie)", "Swietokrzyskie (Swietokrzyskie)", "Warmian-Masurian (Warminsko-Mazurskie)", "West Pomeranian (Zachodniopomorskie)"],
                "code": "+48"
            },
            {
                "country": "Portugal",
                "states": ["Aveiro", "Acores", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"],
                "code": "+351"
            },
            {
                "country": "Qatar",
                "states": ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Sa'id", "Umm Salal"],
                "code": "+974"
            },
            {
                "country": "Romania",
                "states": ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Gorj", "Giurgiu", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"],
                "code": "+40"
            },
            {
                "country": "Russia",
                "states": ["Amur", "Arkhangel'sk", "Astrakhan'", "Belgorod", "Bryansk", "Chelyabinsk", "Chita", "Irkutsk", "Ivanovo", "Kaliningrad", "Kaluga", "Kamchatka", "Kemerovo", "Kirov", "Kostroma", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Moscow", "Murmansk", "Nizhniy Novgorod", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orel", "Penza", "Perm'", "Pskov", "Rostov", "Ryazan'", "Sakhalin", "Samara", "Saratov", "Smolensk", "Sverdlovsk", "Tambov", "Tomsk", "Tula", "Tver'", "Tyumen'", "Ul'yanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yaroslavl'", "Adygeya", "Altay", "Bashkortostan", "Buryatiya", "Chechnya", "Chuvashiya", "Dagestan", "Ingushetiya", "Kabardino-Balkariya", "Kalmykiya", "Karachayevo-Cherkesiya", "Kareliya", "Khakasiya", "Komi", "Mariy-El", "Mordoviya", "Sakha", "North Ossetia", "Tatarstan", "Tyva", "Udmurtiya", "Aga Buryat", "Chukotka", "Evenk", "Khanty-Mansi", "Komi-Permyak", "Koryak", "Nenets", "Taymyr", "Ust'-Orda Buryat", "Yamalo-Nenets", "Altay", "Khabarovsk", "Krasnodar", "Krasnoyarsk", "Primorskiy", "Stavropol'", "Moscow", "St. Petersburg", "Yevrey"],
                "code": "+7"
            },
            {
                "country": "Rwanda",
                "states": ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Umutara", "Ruhengeri"],
                "code": "+250"
            },
            {
                "country": "San Marino",
                "states": ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino Citta", "Serravalle"],
                "code": "+378"
            },
            {
                "country": "Sao Tome Principe",
                "states": ["Santo Amaro", "Neves", "Santana"],
                "code": "+239"
            },
            {
                "country": "Saudi Arabia",
                "states": ["Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah", "'Asir", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"],
                "code": "+966"
            },
            {
                "country": "Senegal",
                "states": ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"],
                "code": "+221"
            },
            {
                "country": "Serbia",
                "states": ["Kosovo", "Montenegro", "Serbia", "Vojvodina"],
                "code": "+381"
            },
            {
                "country": "Seychelles",
                "states": ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse", "Grand' Anse", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"],
                "code": "+248"
            },
            {
                "country": "Singapore",
                "states": ["Alexandra", "Bishan", "Chinatown", "Kallang"],
                "code": "+65"
            },
            {
                "country": "Slovak Republic",
                "states": ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"],
                "code": "+421"
            },
            {
                "country": "Slovenia",
                "states": ["Ajdovscina", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica", "Bovec", "Braslovce", "Brda", "Brezice", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Cerkvenjak", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik", "Divaca", "Dobje", "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dolenjske Toplice", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje", "Hajdina", "Hoce-Slivnica", "Hodos-Hodos", "Horjul", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Komenda", "Koper-Capodistria", "Kostel", "Kozje", "Kranj", "Kranjska Gora", "Krizevci", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava-Lendva", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Lovrenc na Pohorju", "Luce", "Lukovica", "Majsperk", "Maribor", "Markovci", "Medvode", "Menges", "Metlika", "Mezica", "Miklavz na Dravskem Polju", "Miren-Kostanjevica", "Mirna Pec", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Oplotnica", "Ormoz", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podcetrtek", "Podlehnik", "Podvelka", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne na Koroskem", "Razkrizje", "Ribnica", "Ribnica na Pohorju", "Rogasovci", "Rogaska Slatina", "Rogatec", "Ruse", "Salovci", "Selnica ob Dravi", "Semic", "Sempeter-Vrtojba", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Smartno pri Litiji", "Sodrazica", "Solcava", "Sostanj", "Starse", "Store", "Sveta Ana", "Sveti Andraz v Slovenskih Goricah", "Sveti Jurij", "Tabor", "Tisina", "Tolmin", "Trbovlje", "Trebnje", "Trnovska Vas", "Trzic", "Trzin", "Turnisce", "Velenje", "Velika Polana", "Velike Lasce", "Verzej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Zetale", "Ziri", "Zirovnica", "Zuzemberk", "Zrece"],
                "code": "+386"
            },
            {
                "country": "Solomon Islands",
                "states": ["Central", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell and Bellona", "Temotu", "Western"],
                "code": "+677"
            },
            {
                "country": "Somalia",
                "states": ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"],
                "code": "+252"
            },
            {
                "country": "South Africa",
                "states": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape", "Western Cape"],
                "code": "+27"
            },
            {
                "country": "Spain",
                "states": ["Andalucia", "Aragon", "Asturias", "Baleares", "Ceuta", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y Leon", "Cataluna", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco"],
                "code": "+34"
            },
            {
                "country": "Sri Lanka",
                "states": ["Central", "North Central", "North Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"],
                "code": "+94"
            },
            {
                "country": "Sudan",
                "states": ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"],
                "code": "+249"
            },
            {
                "country": "Suriname",
                "states": ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"],
                "code": "+597"
            },
            {
                "country": "Swaziland",
                "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"],
                "code": "+268"
            },
            {
                "country": "Sweden",
                "states": ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"],
                "code": "+46"
            },
            {
                "country": "Switzerland",
                "states": ["Aargau", "Appenzell Ausser-Rhoden", "Appenzell Inner-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"],
                "code": "+41"
            },
            {
                "country": "Syria",
                "states": ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"],
                "code": "+963"
            },
            {
                "country": "Taiwan",
                "states": ["Chang-hua", "Chia-i", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kin-men", "Lien-chiang", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-nan", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin", "Chia-i", "Chi-lung", "Hsin-chu", "T'ai-chung", "T'ai-nan", "Kao-hsiung city", "T'ai-pei city"],
                "code": "+886"
            },
            {
                "country": "Tajikstan",
                "states": ["Dushanbe", "Khujand", "Qurghonteppa", "Tursunzoda"],
                "code": "+7"
            },
            {
                "country": "Thailand",
                "states": ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"],
                "code": "+66"
            },
            {
                "country": "Togo",
                "states": ["Kara", "Plateaux", "Savanes", "Centrale", "Maritime"],
                "code": "+228"
            },
            {
                "country": "Tonga",
                "states": ["Tongatapu", "Nuku'alofa", "Ha'amonga ʻa Maui"],
                "code": "+676"
            },
            {
                "country": "Trinidad & Tobago",
                "states": ["Couva", "Diego Martin", "Mayaro", "Penal", "Princes Town", "Sangre Grande", "San Juan", "Siparia", "Tunapuna", "Port-of-Spain", "San Fernando", "Arima", "Point Fortin", "Chaguanas", "Tobago"],
                "code": "+1868"
            },
            {
                "country": "Tunisia",
                "states": ["Ariana (Aryanah)", "Beja (Bajah)", "Ben Arous (Bin 'Arus)", "Bizerte (Banzart)", "Gabes (Qabis)", "Gafsa (Qafsah)", "Jendouba (Jundubah)", "Kairouan (Al Qayrawan)", "Kasserine (Al Qasrayn)", "Kebili (Qibili)", "Kef (Al Kaf)", "Mahdia (Al Mahdiyah)", "Manouba (Manubah)", "Medenine (Madanin)", "Monastir (Al Munastir)", "Nabeul (Nabul)", "Sfax (Safaqis)", "Sidi Bou Zid (Sidi Bu Zayd)", "Siliana (Silyanah)", "Sousse (Susah)", "Tataouine (Tatawin)", "Tozeur (Tawzar)", "Tunis", "Zaghouan (Zaghwan)"],
                "code": "+216"
            },
            {
                "country": "Turkey",
                "states": ["Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"],
                "code": "+90"
            },
            {
                "country": "Turkmenistan",
                "states": ["Ahal Welayaty (Ashgabat)", "Balkan Welayaty (Balkanabat)", "Dashoguz Welayaty", "Lebap Welayaty (Turkmenabat)", "Mary Welayaty"],
                "code": "+993"
            },
            {
                "country": "Uganda",
                "states": ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kampala", "Kamuli", "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Kyenjojo", "Lira", "Luwero", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakasongola", "Nebbi", "Ntungamo", "Pader", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Sironko", "Soroti", "Tororo", "Wakiso", "Yumbe"],
                "code": "+256"
            },
            {
                "country": "Ukraine",
                "states": ["Cherkasy", "Chernihiv", "Chernivtsi", "Crimea", "Dnipropetrovs'k", "Donets'k", "Ivano-Frankivs'k", "Kharkiv", "Kherson", "Khmel'nyts'kyy", "Kirovohrad", "Kiev", "Kyyiv", "Luhans'k", "L'viv", "Mykolayiv", "Odesa", "Poltava", "Rivne", "Sevastopol'", "Sumy", "Ternopil'", "Vinnytsya", "Volyn'", "Zakarpattya", "Zaporizhzhya", "Zhytomyr"],
                "code": "+380"
            },
            {
                "country": "United Arab Emirates",
                "states": ["Abu Dhabi", "'Ajman", "Al Fujayrah", "Sharjah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"],
                "code": "+971"
            },
            {
                "country": "Uruguay",
                "states": ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"],
                "code": "+598"
            },
            {
                "country": "Uzbekistan",
                "states": ["Andijon Viloyati", "Buxoro Viloyati", "Farg'ona Viloyati", "Jizzax Viloyati", "Namangan Viloyati", "Navoiy Viloyati", "Qashqadaryo Viloyati", "Qaraqalpog'iston Respublikasi", "Samarqand Viloyati", "Sirdaryo Viloyati", "Surxondaryo Viloyati", "Toshkent Shahri", "Toshkent Viloyati", "Xorazm Viloyati"],
                "code": "+7"
            },
            {
                "country": "Vanuatu",
                "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"],
                "code": "+678"
            },
            {
                "country": "Venezuela",
                "states": ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"],
                "code": "+58"
            },
            {
                "country": "Vietnam",
                "states": ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"],
                "code": "+84"
            },
            {
                "country": "Yemen (North)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+969"
            },
            {
                "country": "Yemen (South)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+967"
            },
            {
                "country": "Zambia",
                "states": ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Northern", "North-Western", "Southern", "Western"],
                "code": "+260"
            },
            {
                "country": "Zimbabwe",
                "states": ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"],
                "code": "+263"
            }
        ];
        this.registratioForm1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('+91'),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0][1-9]\\d{9}$|^[1-9]\\d{6,15}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
            profileFor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    /** to show and hide password */
    showHidePassword() {
        this.showEye = !this.showEye;
    }
    registrationFnc() {
        let data = {
            "email": this.registratioForm1.value.emailId,
            "password": this.registratioForm1.value.password,
            "countryCode": this.registratioForm1.value.countryCode,
            "mobileNumber": this.registratioForm1.value.mobile,
            "fullName": this.registratioForm1.value.username,
            "createFor": this.registratioForm1.value.profileFor,
        };
        this.httpService.put('user/signup', data, 1).subscribe(res => {
            console.log('RegistrationStep1_Succ ==>', res);
            if (res['responseCode'] == 200) {
                this.commonService.showSuccessToast('Please check your Mobile and Email for OTP.', false, 'center');
                localStorage.setItem('userID', res['result']._id);
                this.router.navigateByUrl('visitor/verifyOTP');
            }
        }, err => {
            console.log('RegistrationStep1_Err ==>', err);
        });
    }
}
RegistrationStep1Component.ɵfac = function RegistrationStep1Component_Factory(t) { return new (t || RegistrationStep1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
RegistrationStep1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationStep1Component, selectors: [["app-registration-step1"]], decls: 107, vars: 17, consts: [[1, "forgot-password"], [1, "container"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "signup-page-1"], ["name", "mYform", 3, "formGroup"], [1, "form-group", "d-flex"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "User Name", "formControlName", "username", "placeholder", "Full Name*", 1, "form-control"], ["style", "color:red;font-size:13px!important", 3, "ngClass", 4, "ngIf"], ["style", "color:red;font-size:13px!important", 4, "ngIf"], [1, "not-completed"], [1, "fas", "fa-times-circle"], [1, "completed"], [1, "fas", "fa-check-circle"], ["formControlName", "countryCode", 1, "form-control", "select-custome", "max-WT-180", "select-border"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", "data-toggle", "tooltip", "data-placement", "top", "title", "Mobile Number", "formControlName", "mobile", "placeholder", "Mobile number*", 1, "form-control", 2, "margin-left", "5px"], ["style", "color:red;font-size: 13px !important;", 4, "ngIf"], [1, "not-completed-1"], [1, "completed-1"], ["type", "text", "maxlength", "255", "data-toggle", "tooltip", "data-placement", "top", "title", "Email ID", "formControlName", "emailId", "placeholder", "Email*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Create Profile for*", "formControlName", "profileFor", "placeholder", "Create Profile for*", 1, "form-control"], [1, "not-completed-2"], [1, "completed-2"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Password", "formControlName", "password", "placeholder", "Create New Password*", 1, "form-control", 3, "type"], [1, "not-completed-3"], [1, "completed-3"], ["style", "color:#818181", "id", "show-pass", "class", "far fa-eye-slash", 3, "click", 4, "ngIf"], ["style", "color:#818181", "id", "show-pass", "class", "far fa-eye", 3, "click", 4, "ngIf"], ["type", "submit", "href", "javascript:;", 3, "disabled", "ngClass", "click"], [1, "find-special-someone"], [1, "find-someone"], [1, "find-icon"], [1, "icon-1"], [1, "icon-2"], ["href", "#"], ["aria-hidden", "true", 1, "fas", "fa-edit"], [1, "find-content"], [1, "icon-3"], [1, "icon-4"], ["aria-hidden", "true", 1, "fas", "fa-users"], [1, "icon-5"], [1, "icon-6"], ["aria-hidden", "true", 1, "fas", "fa-comments"], [2, "color", "red", "font-size", "13px!important", 3, "ngClass"], [2, "color", "red", "font-size", "13px!important"], [3, "value"], [2, "color", "red", "font-size", "13px !important"], ["id", "show-pass", 1, "far", "fa-eye-slash", 2, "color", "#818181", 3, "click"], ["id", "show-pass", 1, "far", "fa-eye", 2, "color", "#818181", 3, "click"]], template: function RegistrationStep1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Let's start your partner search with this Sign up.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegistrationStep1Component_h1_14_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationStep1Component_h1_15_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegistrationStep1Component_option_23_Template, 2, 3, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegistrationStep1Component_h1_25_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegistrationStep1Component_h1_26_Template, 2, 0, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RegistrationStep1Component_h1_34_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistrationStep1Component_h1_35_Template, 2, 0, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegistrationStep1Component_h1_43_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RegistrationStep1Component_h1_44_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RegistrationStep1Component_i_56_Template, 1, 0, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RegistrationStep1Component_i_57_Template, 1, 0, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep1Component_Template_button_click_58_listener() { return ctx.registrationFnc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " By clicking on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "'Register'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ", you confirm that you accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Find your Special Someone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Login and complete or Update your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Select & Connect with Matches you like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Interact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Become a Premium Member & Start a Conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registratioForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("username").hasError("required") && ctx.registratioForm1.get("username").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("username").hasError("pattern") && ctx.registratioForm1.get("username").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("mobile").hasError("required") && ctx.registratioForm1.get("mobile").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("mobile").hasError("pattern") && ctx.registratioForm1.get("mobile").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("emailId").hasError("required") && ctx.registratioForm1.get("emailId").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("emailId").hasError("pattern") && ctx.registratioForm1.get("emailId").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("profileFor").hasError("required") && ctx.registratioForm1.get("profileFor").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm1.get("profileFor").hasError("pattern") && ctx.registratioForm1.get("profileFor").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.showEye ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEye);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registratioForm1.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.registratioForm1.invalid));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".find-special-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  text-align: center;\n  line-height: 30px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #a6a6a6;\n  position: absolute;\n  top: 22%;\n  right: -17%;\n  transform: translate(-50%, -50%);\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 35%;\n}\n\n@media screen and (max-width: 1220px) {\n  .container[_ngcontent-%COMP%] {\n    width: 970px;\n  }\n}\n\n@media screen and (max-width: 990px) {\n  .container[_ngcontent-%COMP%] {\n    width: 760px;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n\n  .forgot-password[_ngcontent-%COMP%] {\n    margin-top: 118px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    top: 22%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n\n  .forgot-password[_ngcontent-%COMP%] {\n    margin-top: 61px;\n  }\n\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 450px);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.disableCss[_ngcontent-%COMP%] {\n  background-color: #dddddd !important;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\n\n.select-custome[_ngcontent-%COMP%] {\n  width: 150px !important;\n  height: calc(2.25rem + 4px);\n  padding: 0.375rem 0.75rem;\n  margin: 10px 0px 0px 0px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n\nselect[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9yZWdpc3RyYXRpb24tc3RlcDEvcmVnaXN0cmF0aW9uLXN0ZXAxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksWUFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFlBQUE7RUFBTjs7RUFHRTs7O0lBR0ksV0FBQTtFQUFOOztFQUdFO0lBQ0ksaUJBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0k7SUFDSSxXQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJO0lBQ0ksV0FBQTtFQUZOOztFQUtFOzs7SUFHSSxRQUFBO0VBRk47O0VBS0U7OztJQUdJLFdBQUE7RUFGTjs7RUFLRTtJQUNJLGdCQUFBO0VBRk47O0VBS0U7SUFDSSxZQUFBO0VBRk47QUFDRjs7QUFPQTtFQUFXLCtCQUFBO0FBSlg7O0FBS0E7RUFBYSxtQkFBQTtBQURiOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsNkNBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBR0o7O0FBQUE7RUFDSSx1QkFBQTtFQUNBLDZDQUFBO0FBR0o7O0FBQUE7RUFDSSw2QkFBQTtBQUdKOztBQURBO0VBQ0ksNkJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvcmVnaXN0cmF0aW9uLXN0ZXAxL3JlZ2lzdHJhdGlvbi1zdGVwMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maW5kLXNwZWNpYWwtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTEgLmljb24tMjo6YWZ0ZXIsXG4uZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMyAuaWNvbi00OjphZnRlcixcbi5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi01IC5pY29uLTY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMiU7XG4gICAgcmlnaHQ6IC0xNyU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbmkjc2hvdy1wYXNzIHtcbiAgICBib3R0b206IDM1JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5NzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3NjBweDtcbiAgICB9XG5cbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMSAuaWNvbi0yOjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMyAuaWNvbi00OjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgIHJpZ2h0OiAtMTQlO1xuICAgIH1cblxuICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMThweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTEgLmljb24tMjo6YWZ0ZXIsXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTMgLmljb24tNDo6YWZ0ZXIsXG4gICAgLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTUgLmljb24tNjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDIyJTtcbiAgICB9XG5cbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMSAuaWNvbi0yOjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMyAuaWNvbi00OjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgIHJpZ2h0OiAtMTQlO1xuICAgIH1cblxuICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MXB4O1xuICAgIH1cblxuICAgIC5hcnJvd191cCB7XG4gICAgICAgIGJvdHRvbTogNTJweDtcbiAgICB9XG5cbn1cblxuLy9BYXNoaXNoIENTU1xuLmNvbnRhaW5lcnttaW4taGVpZ2h0OmNhbGMoMTAwdmggLSA0NTBweCk7fVxuLmZvcm0tZ3JvdXAge21hcmdpbi1ib3R0b206IDByZW07IH1cbi5kaXNhYmxlQ3NzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkICFpbXBvcnRhbnQ7XG59XG4uc2lnbnVwLXBhZ2UtMSBmb3JtIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjZmZkZmJiYzQgIWltcG9ydGFudDtcbn1cbi5zZWxlY3QtY3VzdG9tZSB7XG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyA0cHgpO1xuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuLnNpZ251cC1wYWdlLTEgZm9ybSBzZWxlY3Q6Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNmZmRmYmJjNCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcbn1cbnNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationStep1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-step1',
                templateUrl: './registration-step1.component.html',
                styleUrls: ['./registration-step1.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/registration-step2/registration-step2.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/before-signup/registration-step2/registration-step2.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationStep2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStep2Component", function() { return RegistrationStep2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-mydatepicker */ "./node_modules/angular-mydatepicker/__ivy_ngcc__/fesm2015/angular-mydatepicker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = function (a0) { return { "error": a0 }; };
function RegistrationStep2Component_h1_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Nick Name must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.registratioForm2.get("nickname").hasError("required") && ctx_r0.registratioForm2.get("nickname").dirty));
} }
function RegistrationStep2Component_h1_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Nick Name accepts character only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Full Name must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.registratioForm2.get("fullname").hasError("required") && ctx_r2.registratioForm2.get("fullname").dirty));
} }
function RegistrationStep2Component_h1_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Full Name accepts character only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Marital Status must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.registratioForm2.get("maritalstatus").hasError("required") && ctx_r5.registratioForm2.get("maritalstatus").dirty));
} }
function RegistrationStep2Component_h1_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Marital Status accepts character only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Height must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r7.registratioForm2.get("height").hasError("required") && ctx_r7.registratioForm2.get("height").dirty));
} }
function RegistrationStep2Component_h1_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Height accepts numeric digits only.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Marital Status must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r9.registratioForm2.get("pincode").hasError("required") && ctx_r9.registratioForm2.get("pincode").dirty));
} }
function RegistrationStep2Component_h1_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid pincode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Degree must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r11.registratioForm2.get("degree").hasError("required") && ctx_r11.registratioForm2.get("degree").dirty));
} }
function RegistrationStep2Component_h1_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Employed In must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r13.registratioForm2.get("employed").hasError("required") && ctx_r13.registratioForm2.get("employed").dirty));
} }
function RegistrationStep2Component_h1_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid employment details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Occupation must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r15.registratioForm2.get("occupation").hasError("required") && ctx_r15.registratioForm2.get("occupation").dirty));
} }
function RegistrationStep2Component_h1_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid occupation details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Income must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r17.registratioForm2.get("income").hasError("required") && ctx_r17.registratioForm2.get("income").dirty));
} }
function RegistrationStep2Component_h1_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid income details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationStep2Component_h1_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Email must be filled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r19.registratioForm2.get("email").hasError("required") && ctx_r19.registratioForm2.get("email").dirty));
} }
function RegistrationStep2Component_h1_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please enter valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "disableCss": a0 }; };
class RegistrationStep2Component {
    constructor(router, httpService, commonService) {
        this.router = router;
        this.httpService = httpService;
        this.commonService = commonService;
        this.myOptions = {
            dateRange: false,
            dateFormat: 'dd/mm/yyyy',
            disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
            calendarAnimation: { in: angular_mydatepicker__WEBPACK_IMPORTED_MODULE_2__["CalAnimation"].Rotate, out: angular_mydatepicker__WEBPACK_IMPORTED_MODULE_2__["CalAnimation"].Rotate }
            // other options...
        };
    }
    ngOnInit() {
        this.registratioForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            maritalstatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9][0-9]{5}$')]),
            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z ,.]+$/i)]),
            employed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            income: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
            aboutYourself: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
        });
    }
    skipFunc() {
        this.router.navigateByUrl('visitor/registrationStep-3');
    }
    registrationFnc() {
        let data = {
            nickName: this.registratioForm2.value.nickname,
            fullName: this.registratioForm2.value.fullname,
            dob: this.dob,
            MaritalStatus: this.registratioForm2.value.maritalstatus,
            heigth: this.registratioForm2.value.height,
            country: this.registratioForm2.value.country,
            state: this.registratioForm2.value.state,
            city_living_in: this.registratioForm2.value.city,
            pincode: this.registratioForm2.value.pincode,
            highest_degree: this.registratioForm2.value.degree,
            employed_in: this.registratioForm2.value.employed,
            occupation: this.registratioForm2.value.occupation,
            annualIncome: this.registratioForm2.value.income,
            emailId: this.registratioForm2.value.email,
            self_bio: this.registratioForm2.value.aboutYourself,
        };
        this.httpService.post('user/editProfile', data, 1).subscribe(res => {
            console.log('Registration_Succ =>', res);
            if (res.responseCode == 200) {
                this.commonService.showSuccessToast(res['responseMessage'], false, 'center');
                this.router.navigateByUrl('visitor/registrationStep-3');
            }
        }, err => {
            console.log('Registration_Err =>', err);
        });
    }
    clearDate() {
        // Clear the date using the patchValue function
        this.registratioForm2.patchValue({ dob: null });
    }
    onDateChanged(event) {
        console.log('onDateChanged(): ', new Date(event.singleDate.jsDate).toLocaleDateString());
    }
    onInputFieldChanged(data) {
        console.log('onInputFieldChanged', data);
        this.dob = data;
    }
}
RegistrationStep2Component.ɵfac = function RegistrationStep2Component_Factory(t) { return new (t || RegistrationStep2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
RegistrationStep2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationStep2Component, selectors: [["app-registration-step2"]], decls: 75, vars: 26, consts: [[1, "signup-2"], [3, "formGroup"], [1, "container"], [1, "row", "signup-form-2"], [1, "col-xl-12"], ["href", "#", 1, "need-help"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Nick Name", "formControlName", "nickname", "placeholder", "Nick name*", 1, "form-control"], ["style", "color:red;font-size:13px!important", 3, "ngClass", 4, "ngIf"], ["style", "color:red;font-size:13px!important", 4, "ngIf"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Full Name", "formControlName", "fullname", "placeholder", "Full name*", 1, "form-control"], [1, "input-group"], ["disabled", "disabled", "placeholder", "Select a date", "angular-mydatepicker", "", "name", "dob", "formControlName", "dob", 1, "form-control", 2, "background-color", "#fff !important", 3, "options", "dateChanged", "input"], ["dp", "angular-mydatepicker"], [1, "form-group-btn", "calendar"], ["type", "button", 1, "btn", "btn-default", "btnNew", 2, "padding-right", "inherit", 3, "click"], [1, "far", "fa-times-circle", 2, "color", "#818181"], ["type", "button", 1, "btn", "btn-default", "btnNew", 3, "click"], [1, "fa", "fa-calendar", 2, "color", "#818181"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Marital Status", "formControlName", "maritalstatus", "placeholder", "Marital Status*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Height", "formControlName", "height", "placeholder", "Height*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Country", "formControlName", "country", "placeholder", "Country*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "State", "formControlName", "state", "placeholder", "State*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "City living in", "formControlName", "city", "placeholder", "City living in*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Pincode", "formControlName", "pincode", "placeholder", "Pincode*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Degree", "formControlName", "degree", "placeholder", "Highest Degree*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Employed In", "formControlName", "employed", "placeholder", "Employed In*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Occupation", "formControlName", "occupation", "placeholder", "User Occupation*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Annual Income", "formControlName", "income", "placeholder", "Annual Income*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Email", "formControlName", "email", "placeholder", "Email*", 1, "form-control"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Express Yourself", "formControlName", "aboutYourself", "placeholder", "Express yourself*", 1, "form-control"], ["type", "submit", "id", "add-profile", "href", "javascript:;", 1, "btnClass", 3, "disabled", "ngClass", "click"], [1, "btnClass", 3, "click"], [2, "color", "red", "font-size", "13px!important", 3, "ngClass"], [2, "color", "red", "font-size", "13px!important"]], template: function RegistrationStep2Component_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hi! You are joining the Best Matchmaking Experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Need help writing?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegistrationStep2Component_h1_14_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationStep2Component_h1_15_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegistrationStep2Component_h1_18_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegistrationStep2Component_h1_19_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChanged", function RegistrationStep2Component_Template_input_dateChanged_22_listener($event) { return ctx.onDateChanged($event); })("input", function RegistrationStep2Component_Template_input_input_22_listener($event) { return ctx.onInputFieldChanged($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep2Component_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r4.clearDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep2Component_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r4.toggleCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegistrationStep2Component_h1_31_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegistrationStep2Component_h1_32_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistrationStep2Component_h1_35_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegistrationStep2Component_h1_36_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RegistrationStep2Component_h1_45_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RegistrationStep2Component_h1_46_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RegistrationStep2Component_h1_49_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RegistrationStep2Component_h1_50_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegistrationStep2Component_h1_53_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RegistrationStep2Component_h1_54_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RegistrationStep2Component_h1_57_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RegistrationStep2Component_h1_58_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, RegistrationStep2Component_h1_61_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, RegistrationStep2Component_h1_62_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RegistrationStep2Component_h1_65_Template, 2, 3, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RegistrationStep2Component_h1_66_Template, 2, 0, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Here is your chance to make your profile stand out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep2Component_Template_button_click_71_listener() { return ctx.registrationFnc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Add to my profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep2Component_Template_button_click_73_listener() { return ctx.skipFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "I will add this later");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registratioForm2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("nickname").hasError("required") && ctx.registratioForm2.get("nickname").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("nickname").hasError("pattern") && ctx.registratioForm2.get("nickname").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("fullname").hasError("required") && ctx.registratioForm2.get("fullname").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("fullname").hasError("pattern") && ctx.registratioForm2.get("fullname").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.myOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("maritalstatus").hasError("required") && ctx.registratioForm2.get("maritalstatus").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("maritalstatus").hasError("pattern") && ctx.registratioForm2.get("maritalstatus").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("height").hasError("required") && ctx.registratioForm2.get("height").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("height").hasError("pattern") && ctx.registratioForm2.get("height").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("pincode").hasError("required") && ctx.registratioForm2.get("pincode").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("pincode").hasError("pattern") && ctx.registratioForm2.get("pincode").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("degree").hasError("required") && ctx.registratioForm2.get("degree").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("degree").hasError("pattern") && ctx.registratioForm2.get("degree").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("employed").hasError("required") && ctx.registratioForm2.get("employed").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("employed").hasError("pattern") && ctx.registratioForm2.get("employed").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("occupation").hasError("required") && ctx.registratioForm2.get("occupation").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("occupation").hasError("pattern") && ctx.registratioForm2.get("occupation").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("income").hasError("required") && ctx.registratioForm2.get("income").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("income").hasError("pattern") && ctx.registratioForm2.get("income").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("email").hasError("required") && ctx.registratioForm2.get("email").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registratioForm2.get("email").hasError("pattern") && ctx.registratioForm2.get("email").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registratioForm2.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.registratioForm2.invalid));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_2__["AngularMyDatePickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["@media screen and (max-width: 460px) {\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n\n  .signup-2[_ngcontent-%COMP%] {\n    padding: 135px 0px 60px 0px;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 450px);\n}\n.signup-2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n.calendar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 11px;\n  border: 0px !important;\n}\n.btnNew[_ngcontent-%COMP%] {\n  height: 30px !important;\n  cursor: pointer;\n  margin-right: 30px;\n  text-transform: uppercase;\n  font-size: 15px !important;\n  background-color: #fff;\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9yZWdpc3RyYXRpb24tc3RlcDIvcmVnaXN0cmF0aW9uLXN0ZXAyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxZQUFBO0VBQU47O0VBS0U7SUFDSSwyQkFBQTtFQUZOO0FBQ0Y7QUFNQTtFQUFXLCtCQUFBO0FBSFg7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsNkNBQUE7QUFESjtBQUlBO0VBQ0ksNkJBQUE7QUFESjtBQUlBO0VBQ0ksMkJBQUE7QUFESjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvcmVnaXN0cmF0aW9uLXN0ZXAyL3JlZ2lzdHJhdGlvbi1zdGVwMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG5cbiAgICAuYXJyb3dfdXAge1xuICAgICAgICBib3R0b206IDUycHg7XG4gICAgfVxuXG5cblxuICAgIC5zaWdudXAtMiB7XG4gICAgICAgIHBhZGRpbmc6IDEzNXB4IDBweCA2MHB4IDBweDtcbiAgICB9XG59XG5cbi8vQWFzaGlzaCBDU1Ncbi5jb250YWluZXJ7bWluLWhlaWdodDpjYWxjKDEwMHZoIC0gNDUwcHgpO31cbi5zaWdudXAtMiBmb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1c3tcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjZmZkZmJiYzQgIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XG59XG5cbmgxIHtcbiAgICBmb250LXdlaWdodDogNTAwIWltcG9ydGFudDtcbn1cbi5jYWxlbmRhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHRvcDogMTFweDtcbiAgICBib3JkZXIgOiAwcHggIWltcG9ydGFudFxufVxuXG4uYnRuTmV3IHtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationStep2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-step2',
                templateUrl: './registration-step2.component.html',
                styleUrls: ['./registration-step2.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/registration-step3/registration-step3.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/before-signup/registration-step3/registration-step3.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationStep3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStep3Component", function() { return RegistrationStep3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function RegistrationStep3Component_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r2.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.country);
} }
function RegistrationStep3Component_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.name);
} }
class RegistrationStep3Component {
    constructor(router, httpService, commonService) {
        this.router = router;
        this.httpService = httpService;
        this.commonService = commonService;
        this.countryArr = [
            {
                "country": "India",
                "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"],
                "code": "+91"
            },
            {
                "country": "Algeria",
                "states": ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "Muaskar", "Medea", "Mila", "Mostaganem", "M'Sila", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"],
                "code": "+213"
            },
            {
                "country": "Andorra",
                "states": ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"],
                "code": "+376"
            },
            {
                "country": "Angola",
                "states": ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uige", "Zaire"],
                "code": "+244"
            },
            {
                "country": "Anguilla",
                "states": ["Big Spring Cave", "East End Pond"],
                "code": "+1264"
            },
            {
                "country": "Antigua & Barbuda",
                "states": ["St. John's"],
                "code": "+1268"
            },
            {
                "country": "Argentina",
                "states": ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
                "code": "+54"
            },
            {
                "country": "Armenia",
                "states": ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"],
                "code": "+374"
            },
            {
                "country": "Aruba",
                "states": ["Oranjestad"],
                "code": "+297"
            },
            {
                "country": "Australia",
                "states": ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria"],
                "code": "+61"
            },
            {
                "country": "Austria",
                "states": ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"],
                "code": "+43"
            },
            {
                "country": "Azerbaijan",
                "states": ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Astara Rayonu", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lerik Rayonu", "Masalli Rayonu", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Susa Rayonu", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu", "Ali Bayramli Sahari", "Baki Sahari", "Ganca Sahari", "Lankaran Sahari", "Mingacevir Sahari", "Naftalan Sahari", "Saki Sahari", "Sumqayit Sahari", "Susa Sahari", "Xankandi Sahari", "Yevlax Sahari", "Naxcivan Muxtar"],
                "code": "+994"
            },
            {
                "country": "Bahamas",
                "states": ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nichollstown and Berry Islands", "Ragged Island", "Rock Sound", "Sandy Point", "San Salvador and Rum Cay"],
                "code": "+1242"
            },
            {
                "country": "Bahrain",
                "states": ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Madinat Hamad", "Madinat 'Isa", "Juzur Hawar", "Sitrah"],
                "code": "+973"
            },
            {
                "country": "Bangladesh",
                "states": ["Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Sylhet"],
                "code": "+880"
            },
            {
                "country": "Barbados",
                "states": ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"],
                "code": "+1246"
            },
            {
                "country": "Belarus",
                "states": ["Brest", "Homyel", "Horad Minsk", "Hrodna", "Mahilyow", "Minsk", "Vitsyebsk"],
                "code": "+375"
            },
            {
                "country": "Belgium",
                "states": ["Antwerpen", "Brabant Wallon", "Brussels", "Flanders", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "Wallonia", "West-Vlaanderen"],
                "code": "+32"
            },
            {
                "country": "Belize",
                "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"],
                "code": "+501"
            },
            {
                "country": "Benin",
                "states": ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Oueme", "Plateau", "Zou"],
                "code": "+229"
            },
            {
                "country": "Bermuda",
                "states": ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint George's", "Sandys", "Smith's", "Southampton", "Warwick"],
                "code": "+1441"
            },
            {
                "country": "Bhutan",
                "states": ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"],
                "code": "+975"
            },
            {
                "country": "Bolivia",
                "states": ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"],
                "code": "+591"
            },
            {
                "country": "Bosnia Herzegovina",
                "states": ["Una-Sana [Federation]", "Posavina [Federation]", "Tuzla [Federation]", "Zenica-Doboj [Federation]", "Bosnian Podrinje [Federation]", "Central Bosnia [Federation]", "Herzegovina-Neretva [Federation]", "West Herzegovina [Federation]", "Sarajevo [Federation]", " West Bosnia [Federation]", "Banja Luka [RS]", "Bijeljina [RS]", "Doboj [RS]", "Fo?a [RS]", "Sarajevo-Romanija [RS]", "Trebinje [RS]", "Vlasenica [RS]"],
                "code": "+387"
            },
            {
                "country": "Botswana",
                "states": ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North East", "North West", "South East", "Southern"],
                "code": "+261"
            },
            {
                "country": "Brazil",
                "states": ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"],
                "code": "+55"
            },
            {
                "country": "Brunei",
                "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"],
                "code": "+673"
            },
            {
                "country": "Bulgaria",
                "states": ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"],
                "code": "+359"
            },
            {
                "country": "Burkina Faso",
                "states": ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komondjari", "Kompienga", "Kossi", "Koulpelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passore", "Poni", "Sanguie", "Sanmatenga", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundweogo"],
                "code": "+226"
            },
            {
                "country": "Burundi",
                "states": ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"],
                "code": "+257"
            },
            {
                "country": "Cambodia",
                "states": ["Banteay Mean Chey", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Koh Kong", "Kracheh", "Mondol Kiri", "Otdar Mean Chey", "Pouthisat", "Preah Vihear", "Prey Veng", "Rotanakir", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takao", "Keb", "Pailin", "Phnom Penh", "Preah Seihanu"],
                "code": "+855"
            },
            {
                "country": "Cameroon",
                "states": ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"],
                "code": "+237"
            },
            {
                "country": "Canada",
                "states": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"],
                "code": "+1"
            },
            {
                "country": "Cape Verde Islands",
                "states": ["Barlavento", "Santo Antão", "São Vicente", "Santa Luzia", "São Nicolau", "Boa Vista", "Sal"],
                "code": "+238"
            },
            {
                "country": "Central African Republic",
                "states": ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kemo", "Lobaye", "Mambere-Kadei", "Mbomou", "Nana-Grebizi", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha-Mbaere", "Vakaga"],
                "code": "+236"
            },
            {
                "country": "Chile",
                "states": ["Aysen", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "O'Higgins", "Los Lagos", "Magallanes y la Antartica Chilena", "Maule", "Santiago Region Metropolitana", "Tarapaca", "Valparaiso"],
                "code": "+56"
            },
            {
                "country": "China",
                "states": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"],
                "code": "+86"
            },
            {
                "country": "Colombia",
                "states": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota District Capital", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres & Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"],
                "code": "+57"
            },
            {
                "country": "Comoros",
                "states": ["Grande Comore (Njazidja)", "Anjouan (Nzwani)", "Moheli (Mwali)"],
                "code": "+269"
            },
            {
                "country": "Congo",
                "states": ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"],
                "code": "+242"
            },
            {
                "country": "Costa Rica",
                "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"],
                "code": "+506"
            },
            {
                "country": "Croatia",
                "states": ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozesko-Slavonska", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagreb", "Zagrebacka"],
                "code": "+385"
            },
            {
                "country": "Cuba",
                "states": ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"],
                "code": "+53"
            },
            {
                "country": "Cyprus North",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+90392"
            },
            {
                "country": "Cyprus South",
                "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"],
                "code": "+357"
            },
            {
                "country": "Czech Republic",
                "states": ["Jihocesky Kraj", "Jihomoravsky Kraj", "Karlovarsky Kraj", "Kralovehradecky Kraj", "Liberecky Kraj", "Moravskoslezsky Kraj", "Olomoucky Kraj", "Pardubicky Kraj", "Plzensky Kraj", "Praha", "Stredocesky Kraj", "Ustecky Kraj", "Vysocina", "Zlinsky Kraj"],
                "code": "+42"
            },
            {
                "country": "Denmark",
                "states": ["Arhus", "Bornholm", "Frederiksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"],
                "code": "+45"
            },
            {
                "country": "Djibouti",
                "states": ["Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"],
                "code": "+253"
            },
            {
                "country": "Dominica",
                "states": ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"],
                "code": "+1809"
            },
            {
                "country": "Dominican Republic",
                "states": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "Elias Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "Sanchez Ramirez", "San Cristobal", "San Jose de Ocoa", "San Juan", "San Pedro de Macoris", "Santiago", "Santiago Rodriguez", "Santo Domingo", "Valverde"],
                "code": "+1809"
            },
            {
                "country": "Ecuador",
                "states": ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"],
                "code": "+593"
            },
            {
                "country": "Egypt",
                "states": ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"],
                "code": "+20"
            },
            {
                "country": "El Salvador",
                "states": ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "Santa Ana", "San Vicente", "Sonsonate", "Usulutan"],
                "code": "+503"
            },
            {
                "country": "Equatorial Guinea",
                "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"],
                "code": "+240"
            },
            {
                "country": "Eritrea",
                "states": ["Anseba", "Debub", "Debubawi K'eyih Bahri", "Gash Barka", "Ma'akel", "Semenawi Keyih Bahri"],
                "code": "+291"
            },
            {
                "country": "Estonia",
                "states": ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laanemaa (Haapsalu)", "Laane-Virumaa (Rakvere)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuressaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"],
                "code": "+372"
            },
            {
                "country": "Ethiopia",
                "states": ["Addis Ababa", "Afar", "Amhara", "Binshangul Gumuz", "Dire Dawa", "Gambela Hizboch", "Harari", "Oromia", "Somali", "Tigray", "Southern Nations, Nationalities, and Peoples Region"],
                "code": "+251"
            },
            {
                "country": "Fiji",
                "states": ["Central (Suva)", "Eastern (Levuka)", "Northern (Labasa)", "Rotuma", "Western (Lautoka)"],
                "code": "+679"
            },
            {
                "country": "Finland",
                "states": ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"],
                "code": "+358"
            },
            {
                "country": "France",
                "states": ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"],
                "code": "+33"
            },
            {
                "country": "Gabon",
                "states": ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"],
                "code": "+241"
            },
            {
                "country": "Gambia",
                "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"],
                "code": "+220"
            },
            {
                "country": "Georgia",
                "states": ["Macon–Bibb County", "Georgetown–Quitman County"],
                "code": "+7880"
            },
            {
                "country": "Germany",
                "states": ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"],
                "code": "+49"
            },
            {
                "country": "Ghana",
                "states": ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"],
                "code": "+233"
            },
            {
                "country": "Greece",
                "states": ["Agion Oros", "Achaia", "Aitolia kai Akarmania", "Argolis", "Arkadia", "Arta", "Attiki", "Chalkidiki", "Chanion", "Chios", "Dodekanisos", "Drama", "Evros", "Evrytania", "Evvoia", "Florina", "Fokidos", "Fthiotis", "Grevena", "Ileia", "Imathia", "Ioannina", "Irakleion", "Karditsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Kilkis", "Korinthia", "Kozani", "Kyklades", "Lakonia", "Larisa", "Lasithi", "Lefkas", "Lesvos", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethynnis", "Rodopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakynthos"],
                "code": "+30"
            },
            {
                "country": "Greenland",
                "states": ["Avannaa (Nordgronland)", "Tunu (Ostgronland)", "Kitaa (Vestgronland)"],
                "code": "+299"
            },
            {
                "country": "Grenada",
                "states": ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"],
                "code": "+1473"
            },
            {
                "country": "Guatemala",
                "states": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"],
                "code": "+502"
            },
            {
                "country": "Guinea",
                "states": ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"],
                "code": "+224"
            },
            {
                "country": "Guinea - Bissau",
                "states": ["Bafata", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"],
                "code": "+245"
            },
            {
                "country": "Guyana",
                "states": ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"],
                "code": "+592"
            },
            {
                "country": "Haiti",
                "states": ["Artibonite", "Centre", "Grand 'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"],
                "code": "+509"
            },
            {
                "country": "Honduras",
                "states": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"],
                "code": "+504"
            },
            {
                "country": "Hong Kong",
                "states": ["Wan Chai", "Sham Shui Po", "Kowloon City", "Kwun Tong"],
                "code": "+852"
            },
            {
                "country": "Hungary",
                "states": ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala", "Bekescsaba", "Debrecen", "Dunaujvaros", "Eger", "Gyor", "Hodmezovasarhely", "Kaposvar", "Kecskemet", "Miskolc", "Nagykanizsa", "Nyiregyhaza", "Pecs", "Sopron", "Szeged", "Szekesfehervar", "Szolnok", "Szombathely", "Tatabanya", "Veszprem", "Zalaegerszeg"],
                "code": "+36"
            },
            {
                "country": "Iceland",
                "states": ["Austurland", "Hofudhborgarsvaedhi", "Nordhurland Eystra", "Nordhurland Vestra", "Sudhurland", "Sudhurnes", "Vestfirdhir", "Vesturland"],
                "code": "+354"
            },
            {
                "country": "Indonesia",
                "states": ["Aceh", "Bali", "Banten", "Bengkulu", "Gorontalo", "Irian Jaya Barat", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"],
                "code": "+62"
            },
            {
                "country": "Iran",
                "states": ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan-e Janubi", "Khorasan-e Razavi", "Khorasan-e Shemali", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"],
                "code": "+98"
            },
            {
                "country": "Iraq",
                "states": ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"],
                "code": "+964"
            },
            {
                "country": "Ireland",
                "states": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"],
                "code": "+353"
            },
            {
                "country": "Israel",
                "states": ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"],
                "code": "+972"
            },
            {
                "country": "Italy",
                "states": ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"],
                "code": "+39"
            },
            {
                "country": "Jamaica",
                "states": ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"],
                "code": "+1876"
            },
            {
                "country": "Japan",
                "states": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
                "code": "+81"
            },
            {
                "country": "Jordan",
                "states": ["Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "'Amman", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"],
                "code": "+962"
            },
            {
                "country": "Kazakhstan",
                "states": ["Almaty Oblysy", "Almaty Qalasy", "Aqmola Oblysy", "Aqtobe Oblysy", "Astana Qalasy", "Atyrau Oblysy", "Batys Qazaqstan Oblysy", "Bayqongyr Qalasy", "Mangghystau Oblysy", "Ongtustik Qazaqstan Oblysy", "Pavlodar Oblysy", "Qaraghandy Oblysy", "Qostanay Oblysy", "Qyzylorda Oblysy", "Shyghys Qazaqstan Oblysy", "Soltustik Qazaqstan Oblysy", "Zhambyl Oblysy"],
                "code": "+7"
            },
            {
                "country": "Kenya",
                "states": ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"],
                "code": "+254"
            },
            {
                "country": "Kiribati",
                "states": ["South Tarawa", "Ocenia"],
                "code": "+686"
            },
            {
                "country": "Korea North",
                "states": ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North P'yongan", "South P'yongan", "Yanggang", "Kaesong", "Najin", "Namp'o", "Pyongyang"],
                "code": "+850"
            },
            {
                "country": "Korea South",
                "states": ["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"],
                "code": "+82"
            },
            {
                "country": "Kuwait",
                "states": ["Al Ahmadi", "Al Farwaniyah", "Al Asimah", "Al Jahra", "Hawalli", "Mubarak Al-Kabeer"],
                "code": "+965"
            },
            {
                "country": "Kyrgyzstan",
                "states": ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty"],
                "code": "+996"
            },
            {
                "country": "Laos",
                "states": ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphrabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"],
                "code": "+856"
            },
            {
                "country": "Latvia",
                "states": ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Liepaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"],
                "code": "+371"
            },
            {
                "country": "Lebanon",
                "states": ["Beyrouth", "Beqaa", "Liban-Nord", "Liban-Sud", "Mont-Liban", "Nabatiye"],
                "code": "+961"
            },
            {
                "country": "Lesotho",
                "states": ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"],
                "code": "+266"
            },
            {
                "country": "Liberia",
                "states": ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"],
                "code": "+231"
            },
            {
                "country": "Libya",
                "states": ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"],
                "code": "+218"
            },
            {
                "country": "Liechtenstein",
                "states": ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"],
                "code": "+417"
            },
            {
                "country": "Lithuania",
                "states": ["Alytaus", "Kauno", "Klaipedos", "Marijampoles", "Panevezio", "Siauliu", "Taurages", "Telsiu", "Utenos", "Vilniaus"],
                "code": "+370"
            },
            {
                "country": "Luxembourg",
                "states": ["Diekirch", "Grevenmacher", "Luxembourg"],
                "code": "+352"
            },
            {
                "country": "Macedonia",
                "states": ["Aerodrom", "Aracinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica", "Butel", "Cair", "Caska", "Centar", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Debartsa", "Delcevo", "Demir Hisar", "Demir Kapija", "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gjorce Petrov", "Gostivar", "Gradsko", "Ilinden", "Jegunovce", "Karbinci", "Karpos", "Kavadarci", "Kicevo", "Kisela Voda", "Kocani", "Konce", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kumanovo", "Lipkovo", "Lozovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovo i Rastusa", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid", "Oslomej", "Pehcevo", "Petrovec", "Plasnica", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Saraj", "Skopje", "Sopiste", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari", "Sveti Nikole", "Tearce", "Tetovo", "Valandovo", "Vasilevo", "Veles", "Vevcani", "Vinica", "Vranestica", "Vrapciste", "Zajas", "Zelenikovo", "Zelino", "Zrnovci"],
                "code": "+389"
            },
            {
                "country": "Madagascar",
                "states": ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"],
                "code": "+261"
            },
            {
                "country": "Malawi",
                "states": ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Ntcheu", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"],
                "code": "+265"
            },
            {
                "country": "Malaysia",
                "states": ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Penang", "Sabah", "Sarawak", "Selangor", "Terengganu"],
                "code": "+60"
            },
            {
                "country": "Maldives",
                "states": ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"],
                "code": "+960"
            },
            {
                "country": "Mali",
                "states": ["Bamako (Capital)", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"],
                "code": "+223"
            },
            {
                "country": "Malta",
                "states": ["Rabat", "Senglea"],
                "code": "+356"
            },
            {
                "country": "Marshall Islands",
                "states": ["Majuro"],
                "code": "+692"
            },
            {
                "country": "Mauritania",
                "states": ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"],
                "code": "+222"
            },
            {
                "country": "Mexico",
                "states": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"],
                "code": "+52"
            },
            {
                "country": "Micronesia",
                "states": ["Palau", "Nauru", "Guam"],
                "code": "+691"
            },
            {
                "country": "Moldova",
                "states": ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Cantemir", "Calarasi", "Causeni", "Cimislia", "Criuleni", "Donduseni", "Drochia", "Dubasari", "Edinet", "Falesti", "Floresti", "Glodeni", "Hincesti", "Ialoveni", "Leova", "Nisporeni", "Ocnita", "Orhei", "Rezina", "Riscani", "Singerei", "Soldanesti", "Soroca", "Stefan-Voda", "Straseni", "Taraclia", "Telenesti", "Ungheni", "Balti", "Bender", "Chisinau", "Gagauzia", "Stinga Nistrului"],
                "code": "+373"
            },
            {
                "country": "Monaco",
                "states": ["Monaco-Ville", "Monte Carlo"],
                "code": "+377"
            },
            {
                "country": "Mongolia",
                "states": ["Arhangay", "Bayanhongor", "Bayan-Olgiy", "Bulgan", "Darhan Uul", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Govi-Altay", "Govi-Sumber", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Orhon", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"],
                "code": "+976"
            },
            {
                "country": "Morocco",
                "states": ["Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Ben Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"],
                "code": "+212"
            },
            {
                "country": "Mozambique",
                "states": ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Cidade de Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"],
                "code": "+258"
            },
            {
                "country": "Namibia",
                "states": ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"],
                "code": "+264"
            },
            {
                "country": "Nauru",
                "states": ["Abab", "Abwaw", "Adibor", "Amet", "Anabar"],
                "code": "+674"
            },
            {
                "country": "Nepal",
                "states": ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"],
                "code": "+977"
            },
            {
                "country": "Netherlands",
                "states": ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"],
                "code": "+31"
            },
            {
                "country": "New Zealand",
                "states": ["Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay", "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"],
                "code": "+64"
            },
            {
                "country": "Nicaragua",
                "states": ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"],
                "code": "+505"
            },
            {
                "country": "Niger",
                "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"],
                "code": "+227"
            },
            {
                "country": "Nigeria",
                "states": ["Abia", "Abuja Federal Capital", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"],
                "code": "+234"
            },
            {
                "country": "Norway",
                "states": ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nordland", "Nord-Trondelag", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"],
                "code": "+47"
            },
            {
                "country": "Oman",
                "states": ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Dhofar"],
                "code": "+968"
            },
            {
                "country": "Pakistan",
                "states": ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"],
                "code": "+92"
            },
            {
                "country": "Panama",
                "states": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"],
                "code": "+507"
            },
            {
                "country": "Papua New Guinea",
                "states": ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "Western", "Western Highlands", "West New Britain"],
                "code": "+675"
            },
            {
                "country": "Paraguay",
                "states": ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"],
                "code": "+595"
            },
            {
                "country": "Peru",
                "states": ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"],
                "code": "+51"
            },
            {
                "country": "Philippines",
                "states": ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"],
                "code": "+63"
            },
            {
                "country": "Poland",
                "states": ["Greater Poland (Wielkopolskie)", "Kuyavian-Pomeranian (Kujawsko-Pomorskie)", "Lesser Poland (Malopolskie)", "Lodz (Lodzkie)", "Lower Silesian (Dolnoslaskie)", "Lublin (Lubelskie)", "Lubusz (Lubuskie)", "Masovian (Mazowieckie)", "Opole (Opolskie)", "Podlasie (Podlaskie)", "Pomeranian (Pomorskie)", "Silesian (Slaskie)", "Subcarpathian (Podkarpackie)", "Swietokrzyskie (Swietokrzyskie)", "Warmian-Masurian (Warminsko-Mazurskie)", "West Pomeranian (Zachodniopomorskie)"],
                "code": "+48"
            },
            {
                "country": "Portugal",
                "states": ["Aveiro", "Acores", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"],
                "code": "+351"
            },
            {
                "country": "Qatar",
                "states": ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Sa'id", "Umm Salal"],
                "code": "+974"
            },
            {
                "country": "Romania",
                "states": ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Gorj", "Giurgiu", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"],
                "code": "+40"
            },
            {
                "country": "Russia",
                "states": ["Amur", "Arkhangel'sk", "Astrakhan'", "Belgorod", "Bryansk", "Chelyabinsk", "Chita", "Irkutsk", "Ivanovo", "Kaliningrad", "Kaluga", "Kamchatka", "Kemerovo", "Kirov", "Kostroma", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Moscow", "Murmansk", "Nizhniy Novgorod", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orel", "Penza", "Perm'", "Pskov", "Rostov", "Ryazan'", "Sakhalin", "Samara", "Saratov", "Smolensk", "Sverdlovsk", "Tambov", "Tomsk", "Tula", "Tver'", "Tyumen'", "Ul'yanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yaroslavl'", "Adygeya", "Altay", "Bashkortostan", "Buryatiya", "Chechnya", "Chuvashiya", "Dagestan", "Ingushetiya", "Kabardino-Balkariya", "Kalmykiya", "Karachayevo-Cherkesiya", "Kareliya", "Khakasiya", "Komi", "Mariy-El", "Mordoviya", "Sakha", "North Ossetia", "Tatarstan", "Tyva", "Udmurtiya", "Aga Buryat", "Chukotka", "Evenk", "Khanty-Mansi", "Komi-Permyak", "Koryak", "Nenets", "Taymyr", "Ust'-Orda Buryat", "Yamalo-Nenets", "Altay", "Khabarovsk", "Krasnodar", "Krasnoyarsk", "Primorskiy", "Stavropol'", "Moscow", "St. Petersburg", "Yevrey"],
                "code": "+7"
            },
            {
                "country": "Rwanda",
                "states": ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Umutara", "Ruhengeri"],
                "code": "+250"
            },
            {
                "country": "San Marino",
                "states": ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino Citta", "Serravalle"],
                "code": "+378"
            },
            {
                "country": "Sao Tome Principe",
                "states": ["Santo Amaro", "Neves", "Santana"],
                "code": "+239"
            },
            {
                "country": "Saudi Arabia",
                "states": ["Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah", "'Asir", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"],
                "code": "+966"
            },
            {
                "country": "Senegal",
                "states": ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"],
                "code": "+221"
            },
            {
                "country": "Serbia",
                "states": ["Kosovo", "Montenegro", "Serbia", "Vojvodina"],
                "code": "+381"
            },
            {
                "country": "Seychelles",
                "states": ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse", "Grand' Anse", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"],
                "code": "+248"
            },
            {
                "country": "Singapore",
                "states": ["Alexandra", "Bishan", "Chinatown", "Kallang"],
                "code": "+65"
            },
            {
                "country": "Slovak Republic",
                "states": ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"],
                "code": "+421"
            },
            {
                "country": "Slovenia",
                "states": ["Ajdovscina", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica", "Bovec", "Braslovce", "Brda", "Brezice", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Cerkvenjak", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik", "Divaca", "Dobje", "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dolenjske Toplice", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje", "Hajdina", "Hoce-Slivnica", "Hodos-Hodos", "Horjul", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Komenda", "Koper-Capodistria", "Kostel", "Kozje", "Kranj", "Kranjska Gora", "Krizevci", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava-Lendva", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Lovrenc na Pohorju", "Luce", "Lukovica", "Majsperk", "Maribor", "Markovci", "Medvode", "Menges", "Metlika", "Mezica", "Miklavz na Dravskem Polju", "Miren-Kostanjevica", "Mirna Pec", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Oplotnica", "Ormoz", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podcetrtek", "Podlehnik", "Podvelka", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne na Koroskem", "Razkrizje", "Ribnica", "Ribnica na Pohorju", "Rogasovci", "Rogaska Slatina", "Rogatec", "Ruse", "Salovci", "Selnica ob Dravi", "Semic", "Sempeter-Vrtojba", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Smartno pri Litiji", "Sodrazica", "Solcava", "Sostanj", "Starse", "Store", "Sveta Ana", "Sveti Andraz v Slovenskih Goricah", "Sveti Jurij", "Tabor", "Tisina", "Tolmin", "Trbovlje", "Trebnje", "Trnovska Vas", "Trzic", "Trzin", "Turnisce", "Velenje", "Velika Polana", "Velike Lasce", "Verzej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Zetale", "Ziri", "Zirovnica", "Zuzemberk", "Zrece"],
                "code": "+386"
            },
            {
                "country": "Solomon Islands",
                "states": ["Central", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell and Bellona", "Temotu", "Western"],
                "code": "+677"
            },
            {
                "country": "Somalia",
                "states": ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"],
                "code": "+252"
            },
            {
                "country": "South Africa",
                "states": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape", "Western Cape"],
                "code": "+27"
            },
            {
                "country": "Spain",
                "states": ["Andalucia", "Aragon", "Asturias", "Baleares", "Ceuta", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y Leon", "Cataluna", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco"],
                "code": "+34"
            },
            {
                "country": "Sri Lanka",
                "states": ["Central", "North Central", "North Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"],
                "code": "+94"
            },
            {
                "country": "Sudan",
                "states": ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"],
                "code": "+249"
            },
            {
                "country": "Suriname",
                "states": ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"],
                "code": "+597"
            },
            {
                "country": "Swaziland",
                "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"],
                "code": "+268"
            },
            {
                "country": "Sweden",
                "states": ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"],
                "code": "+46"
            },
            {
                "country": "Switzerland",
                "states": ["Aargau", "Appenzell Ausser-Rhoden", "Appenzell Inner-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"],
                "code": "+41"
            },
            {
                "country": "Syria",
                "states": ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"],
                "code": "+963"
            },
            {
                "country": "Taiwan",
                "states": ["Chang-hua", "Chia-i", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kin-men", "Lien-chiang", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-nan", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin", "Chia-i", "Chi-lung", "Hsin-chu", "T'ai-chung", "T'ai-nan", "Kao-hsiung city", "T'ai-pei city"],
                "code": "+886"
            },
            {
                "country": "Tajikstan",
                "states": ["Dushanbe", "Khujand", "Qurghonteppa", "Tursunzoda"],
                "code": "+7"
            },
            {
                "country": "Thailand",
                "states": ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"],
                "code": "+66"
            },
            {
                "country": "Togo",
                "states": ["Kara", "Plateaux", "Savanes", "Centrale", "Maritime"],
                "code": "+228"
            },
            {
                "country": "Tonga",
                "states": ["Tongatapu", "Nuku'alofa", "Ha'amonga ʻa Maui"],
                "code": "+676"
            },
            {
                "country": "Trinidad & Tobago",
                "states": ["Couva", "Diego Martin", "Mayaro", "Penal", "Princes Town", "Sangre Grande", "San Juan", "Siparia", "Tunapuna", "Port-of-Spain", "San Fernando", "Arima", "Point Fortin", "Chaguanas", "Tobago"],
                "code": "+1868"
            },
            {
                "country": "Tunisia",
                "states": ["Ariana (Aryanah)", "Beja (Bajah)", "Ben Arous (Bin 'Arus)", "Bizerte (Banzart)", "Gabes (Qabis)", "Gafsa (Qafsah)", "Jendouba (Jundubah)", "Kairouan (Al Qayrawan)", "Kasserine (Al Qasrayn)", "Kebili (Qibili)", "Kef (Al Kaf)", "Mahdia (Al Mahdiyah)", "Manouba (Manubah)", "Medenine (Madanin)", "Monastir (Al Munastir)", "Nabeul (Nabul)", "Sfax (Safaqis)", "Sidi Bou Zid (Sidi Bu Zayd)", "Siliana (Silyanah)", "Sousse (Susah)", "Tataouine (Tatawin)", "Tozeur (Tawzar)", "Tunis", "Zaghouan (Zaghwan)"],
                "code": "+216"
            },
            {
                "country": "Turkey",
                "states": ["Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"],
                "code": "+90"
            },
            {
                "country": "Turkmenistan",
                "states": ["Ahal Welayaty (Ashgabat)", "Balkan Welayaty (Balkanabat)", "Dashoguz Welayaty", "Lebap Welayaty (Turkmenabat)", "Mary Welayaty"],
                "code": "+993"
            },
            {
                "country": "Uganda",
                "states": ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kampala", "Kamuli", "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Kyenjojo", "Lira", "Luwero", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakasongola", "Nebbi", "Ntungamo", "Pader", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Sironko", "Soroti", "Tororo", "Wakiso", "Yumbe"],
                "code": "+256"
            },
            {
                "country": "Ukraine",
                "states": ["Cherkasy", "Chernihiv", "Chernivtsi", "Crimea", "Dnipropetrovs'k", "Donets'k", "Ivano-Frankivs'k", "Kharkiv", "Kherson", "Khmel'nyts'kyy", "Kirovohrad", "Kiev", "Kyyiv", "Luhans'k", "L'viv", "Mykolayiv", "Odesa", "Poltava", "Rivne", "Sevastopol'", "Sumy", "Ternopil'", "Vinnytsya", "Volyn'", "Zakarpattya", "Zaporizhzhya", "Zhytomyr"],
                "code": "+380"
            },
            {
                "country": "United Arab Emirates",
                "states": ["Abu Dhabi", "'Ajman", "Al Fujayrah", "Sharjah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"],
                "code": "+971"
            },
            {
                "country": "Uruguay",
                "states": ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"],
                "code": "+598"
            },
            {
                "country": "Uzbekistan",
                "states": ["Andijon Viloyati", "Buxoro Viloyati", "Farg'ona Viloyati", "Jizzax Viloyati", "Namangan Viloyati", "Navoiy Viloyati", "Qashqadaryo Viloyati", "Qaraqalpog'iston Respublikasi", "Samarqand Viloyati", "Sirdaryo Viloyati", "Surxondaryo Viloyati", "Toshkent Shahri", "Toshkent Viloyati", "Xorazm Viloyati"],
                "code": "+7"
            },
            {
                "country": "Vanuatu",
                "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"],
                "code": "+678"
            },
            {
                "country": "Venezuela",
                "states": ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"],
                "code": "+58"
            },
            {
                "country": "Vietnam",
                "states": ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"],
                "code": "+84"
            },
            {
                "country": "Yemen (North)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+969"
            },
            {
                "country": "Yemen (South)",
                "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"],
                "code": "+967"
            },
            {
                "country": "Zambia",
                "states": ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Northern", "North-Western", "Southern", "Western"],
                "code": "+260"
            },
            {
                "country": "Zimbabwe",
                "states": ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"],
                "code": "+263"
            }
        ];
        this.NewstatesArr = [];
        this.registratioForm3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            familyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            fathersOccuption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            mothersOccupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            brother: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            sister: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            familyLivingIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            nativeCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            FamilycityLivingIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[1-9][0-9]{5}$')]),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            tribe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            countryLivingIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            cityLivingIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            socialStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            education: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            typeOfBody: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            skinTone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            ladyHairLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            manHairStyle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            hairColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            religion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            culture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            hijab: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            smoking: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            health: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            contactAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]),
            aboutMyFamily: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
        });
    }
    ngOnInit() {
    }
    selectedCountry(countryCode) {
        console.log(countryCode);
        // this.check = 1;
        // this.code = countryCode;    
        var statesArr = this.countryArr.filter(y => y.country == countryCode);
        var SelectedStates = statesArr[0].states;
        // this.selectedCountryName = statesArr[0].country
        this.newARRFunc(SelectedStates);
    }
    newARRFunc(arr) {
        const map1 = arr.map(x => {
            let data = { 'name': x };
            return data;
        });
        this.NewstatesArr = map1;
        console.log("StatesArr" + JSON.stringify(this.NewstatesArr));
    }
    skipFunc() {
        this.router.navigateByUrl('visitor/registrationStep-4');
    }
    registrationFunc() {
        let data = {
            'familyType': this.registratioForm3.value.familyType,
            'fatherOccupation': this.registratioForm3.value.fathersOccuption,
            'motherOccupation': this.registratioForm3.value.mothersOccupation,
            'brother': this.registratioForm3.value.brother,
            'sister': this.registratioForm3.value.sister,
            'family_living_in': this.registratioForm3.value.familyLivingIn,
            'nativeCity': this.registratioForm3.value.nativeCity,
            'familyDes_city_living_in': this.registratioForm3.value.FamilycityLivingIn,
            'familyDes_pincode': this.registratioForm3.value.pincode,
            'contactNumber': this.registratioForm3.value.contactNumber,
            'cast': this.registratioForm3.value.tribe,
            'country_living_in': this.registratioForm3.value.countryLivingIn,
            'dropdown_city_living_in': this.registratioForm3.value.cityLivingIn,
            'socialStatus': this.registratioForm3.value.socialStatus,
            'familyDes_occupation': this.registratioForm3.value.occupation,
            'education': this.registratioForm3.value.education,
            'bodyType': this.registratioForm3.value.typeOfBody,
            'family_Des_heigth': this.registratioForm3.value.height,
            'skinTone': this.registratioForm3.value.skinTone,
            'ladyhairlength': this.registratioForm3.value.ladyHairLength,
            'man_hairStyle': this.registratioForm3.value.manHairStyle,
            'man_hairColor': this.registratioForm3.value.hairColor,
            'religion': this.registratioForm3.value.religion,
            'culture': this.registratioForm3.value.culture,
            'hijab': this.registratioForm3.value.hijab,
            'smoking': this.registratioForm3.value.smoking,
            'health': this.registratioForm3.value.health,
            'contactAddress': this.registratioForm3.value.contactAddress,
            'workLetter': '',
            'family_bio': this.registratioForm3.value.aboutMyFamily,
        };
        this.httpService.post('user/editProfile', data, 1).subscribe(res => {
            console.log('Registration_Succ =>', res);
            if (res.responseCode == 200) {
                this.registratioForm3.reset();
                this.commonService.showSuccessToast(res['responseMessage'], false, 'center');
                this.router.navigateByUrl('visitor/registrationStep-4');
            }
        }, err => {
            console.log('Registration_Err =>', err);
        });
    }
}
RegistrationStep3Component.ɵfac = function RegistrationStep3Component_Factory(t) { return new (t || RegistrationStep3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
RegistrationStep3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationStep3Component, selectors: [["app-registration-step3"]], decls: 260, vars: 3, consts: [[1, "signup-2"], [3, "formGroup"], [1, "container"], [1, "row", "signup-form-2"], [1, "col-xl-12"], ["href", "#", 1, "need-help"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Family Type", "formControlName", "familyType", "placeholder", "Family Type*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Father's Occupation", "formControlName", "fathersOccuption", "placeholder", "Father's Occupation*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Mother's Occupation", "formControlName", "mothersOccupation", "placeholder", "Mother's Occupation*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Brother", "formControlName", "brother", "placeholder", "Brother*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Sister", "formControlName", "sister", "placeholder", "Sister*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Family Living in", "formControlName", "familyLivingIn", "placeholder", "Family Living in*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Native City", "formControlName", "nativeCity", "placeholder", "Native City*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "City Living in", "formControlName", "FamilycityLivingIn", "placeholder", "City Living in*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Pincode", "formControlName", "pincode", "placeholder", "Pincode*", 1, "form-control"], ["type", "text", "data-toggle", "tooltip", "data-placement", "top", "title", "Contact Number", "formControlName", "contactNumber", "placeholder", "Contact Number*", 1, "form-control"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "tribe", "title", "Tribe", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], ["value", "Tribal (Beduin)"], ["value", "Triabl (\u062D\u0636\u0631)"], ["value", "Non-tribal"], ["value", "Prefer not to say"], ["value", "Other"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Country Living in", "formControlName", "countryLivingIn", 1, "form-control", 3, "change"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "cityLivingIn", "title", "City Living in", 1, "form-control"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "socialStatus", "title", "Social Status", 1, "form-control"], ["value", "Single"], ["value", "Divorced"], ["value", "Widow"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "occupation", "title", "Occupation", 1, "form-control"], ["value", "Government employee"], ["value", "Private sector employee"], ["value", "Business"], ["value", "Entrepreneur"], ["value", "Unemployed"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "education", "title", "Education", 1, "form-control"], ["value", "Intermediate"], ["value", "High school"], ["value", "Diploma"], ["value", "Bachelor"], ["value", "Higher education"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "typeOfBody", "title", "Type of body", 1, "form-control"], ["value", "Skinny"], ["value", "Slim / Fit"], ["value", "Chubby"], ["value", "Over weight"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "height", "title", "Height", 1, "form-control"], ["value", "Less than 150"], ["value", "150-160"], ["value", "161-170"], ["value", "171-180"], ["value", "181-190"], ["value", "190 and above"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "skinTone", "title", "Skin Tone", 1, "form-control"], ["value", "Fair"], ["value", "Tan"], ["value", "Dark"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "ladyHairLength", "title", "Lady Hair Length", 1, "form-control"], ["value", "Long"], ["value", "Medium length"], ["value", "Short"], ["value", "Boy cut short"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "manHairStyle", "title", "Man Hair Style", 1, "form-control"], ["value", "Full head of hair"], ["value", "Half bald"], ["value", "Bald"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "hairColor", "title", "Hair Color", 1, "form-control"], ["value", "Black"], ["value", "Brown"], ["value", "Blond"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "religion", "title", "Religion", 1, "form-control"], ["value", "Very Religious"], ["value", "Moderate"], ["value", "No religious"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "culture", "title", "Culture", 1, "form-control"], ["value", "I believe in our cultural rules and stick to them"], ["value", "I moderate about them"], ["value", "I do not like to follow cultural rules"], ["value", "I more Westernised"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "hijab", "title", "Hijab", 1, "form-control"], ["value", "Non-hijabi"], ["value", "Head scarf"], ["value", "Niqab"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "smoking", "title", "Smoking", 1, "form-control"], ["value", "Smoker"], ["value", "Non-smoker"], ["value", "Occasionally smoke"], ["data-toggle", "tooltip", "data-placement", "top", "formControlName", "health", "title", "Health", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["type", "text", "placeholder", "Contact address*", "formControlName", "contactAddress", "data-toggle", "tooltip", "data-placement", "top", "title", "Contact Address", 1, "form-control"], [1, "col-xl-12", "padding_top"], [2, "margin", "10px 0px 0px 0px", "display", "inline-block"], ["id", "file-upload", "type", "file", "name", "attach_work_letter", "required", ""], ["placeholder", "About My Family*", "formControlName", "aboutMyFamily", "data-toggle", "tooltip", "data-placement", "top", "title", "About My Family", 1, "form-control"], ["type", "submit", "id", "add-profile", "href", "javascript:;", 1, "btnClass", 3, "click"], ["type", "submit", "href", "javascript:;", 1, "btnClass", 3, "click"], [3, "value"]], template: function RegistrationStep3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We would love to know about your family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Need help writing?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tribal (Beduin)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Triabl (\u062D\u0636\u0631)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Non-tribal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Prefer not to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegistrationStep3Component_Template_select_change_47_listener($event) { return ctx.selectedCountry($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Country living in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RegistrationStep3Component_option_50_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "City living in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RegistrationStep3Component_option_55_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Social status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Single ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Divorced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Widow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Occupation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Government employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Private sector employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Business ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Entrepreneur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Unemployed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "High school");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Diploma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Bachelor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Higher education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Type of body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Skinny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Slim / Fit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Chubby ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Over weight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Height ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Less than 150 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "150-160");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "161-170 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "171-180 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "181-190");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "190 and above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Skin tone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Fair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Tan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Lady hair length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Medium length ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Short ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Boy cut short");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Man hair style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Full head of hair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Half bald");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Bald");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "select", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Hair color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Brown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Blond ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "select", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Religion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Very Religious");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Moderate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "No religious ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "select", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Culture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "I believe in our cultural rules and stick to them");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "I moderate about them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "I do not like to follow cultural rules ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "I more Westernised");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "select", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Hijab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Non-hijabi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Head scarf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Niqab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "select", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Smoking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Smoker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Non-smoker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Occasionally smoke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "select", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " Attach work letter*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Here is your chance to make your profile stand out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "textarea", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "button", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep3Component_Template_button_click_256_listener() { return ctx.registrationFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Add to my profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep3Component_Template_button_click_258_listener() { return ctx.skipFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "I will add this later");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registratioForm3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.NewstatesArr);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["#file-upload[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  margin-top: 0;\n}\n\n.signup-2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin: 10px 0px;\n  padding: 0px 10px;\n  border: 1px solid #ddd;\n  font-size: 14px;\n  outline: none;\n  color: #464646;\n}\n\n@media screen and (max-width: 460px) {\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n\n  .signup-2[_ngcontent-%COMP%] {\n    padding: 135px 0px 60px 0px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 450px);\n}\n\n.signup-2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n\nselect[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9yZWdpc3RyYXRpb24tc3RlcDMvcmVnaXN0cmF0aW9uLXN0ZXAzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBRUk7SUFDSSxZQUFBO0VBRU47O0VBRUU7SUFDSSwyQkFBQTtFQUNOO0FBQ0Y7O0FBR0E7RUFBVywrQkFBQTtBQUFYOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSw2Q0FBQTtBQUVKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFDQTtFQUNJLDZCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9iZWZvcmUtc2lnbnVwL3JlZ2lzdHJhdGlvbi1zdGVwMy9yZWdpc3RyYXRpb24tc3RlcDMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlsZS11cGxvYWQge1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbi5zaWdudXAtMiBmb3JtIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcblxuICAgIC5hcnJvd191cCB7XG4gICAgICAgIGJvdHRvbTogNTJweDtcbiAgICB9XG5cblxuICAgIC5zaWdudXAtMiB7XG4gICAgICAgIHBhZGRpbmc6IDEzNXB4IDBweCA2MHB4IDBweDtcbiAgICB9XG59XG5cbi8vQWFzaGlzaCBDU1Ncbi5jb250YWluZXJ7bWluLWhlaWdodDpjYWxjKDEwMHZoIC0gNDUwcHgpO31cbi5zaWdudXAtMiBmb3JtIGlucHV0OmZvY3VzICwgc2VsZWN0OmZvY3VzICwgdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNmZmRmYmJjNCAhaW1wb3J0YW50O1xufVxuXG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xufVxuc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationStep3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-step3',
                templateUrl: './registration-step3.component.html',
                styleUrls: ['./registration-step3.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/registration-step4/registration-step4.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/before-signup/registration-step4/registration-step4.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationStep4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStep4Component", function() { return RegistrationStep4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "filterClass": a0 }; };
class RegistrationStep4Component {
    constructor(httpService, commonService, router) {
        this.httpService = httpService;
        this.commonService = commonService;
        this.router = router;
        this.ageFilter = false;
        this.heightFilter = false;
        this.maritalStatusFilter = false;
        this.countryFilter = false;
        this.religionFilter = false;
        this.toungeFilter = false;
        this.incomeFilter = false;
    }
    ngOnInit() {
        this.getUserProfile();
    }
    getUserProfile() {
        this.httpService.get('admin/getProfile' + '?userId=' + localStorage.getItem('userID'), 1).subscribe(res => {
            console.log('getProfile_Succ ==>', res);
            if (res['responseCode'] == 200) {
                this.userDetails = res['result'];
            }
        }, err => {
            console.log('getProfile_Err ==>', err);
        });
    }
    changeAgeFilterOption() {
        this.ageFilter = !this.ageFilter;
    }
    changeHeightFilterOption() {
        this.heightFilter = !this.heightFilter;
    }
    changeMaritalStatusFilterOption() {
        this.maritalStatusFilter = !this.maritalStatusFilter;
    }
    changeCountryFilterOption() {
        this.countryFilter = !this.countryFilter;
    }
    changeReligionFilterOption() {
        this.religionFilter = !this.religionFilter;
    }
    changeToungeFilterOption() {
        this.toungeFilter = !this.toungeFilter;
    }
    changeIncomeFilterOption() {
        this.incomeFilter = !this.incomeFilter;
    }
    registrationFunc() {
        let data = {
            Desired_Partner_bio: this.desiredPartnerBio,
            maritial_Status_Filter: this.maritalStatusFilter,
            country_Filter: this.countryFilter,
            religion_Filter: this.religionFilter,
            mother_Tongue_Filter: this.toungeFilter,
            income_Filter: this.incomeFilter,
        };
        this.httpService.post('user/editProfile', data, 1).subscribe(res => {
            console.log('Registration_Succ =>', res);
            if (res.responseCode == 200) {
                this.commonService.showSuccessToast(res['responseMessage'], false, 'center');
                this.router.navigateByUrl('member/matches');
            }
        }, err => {
            console.log('Registration_Err =>', err);
        });
    }
}
RegistrationStep4Component.ɵfac = function RegistrationStep4Component_Factory(t) { return new (t || RegistrationStep4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegistrationStep4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationStep4Component, selectors: [["app-registration-step4"]], decls: 263, vars: 51, consts: [[1, "last-signup"], [1, "container"], [1, "desired-partner-profile"], [1, "row"], [1, "col-xl-12"], [1, "basic-details"], [1, "column-1"], [1, "column-2", "edit-1"], ["href", "#"], [1, "fas", "fa-pencil-alt"], [1, "column-3", "filter_1"], ["href", "javascript:;", 3, "ngClass", "click"], [1, "column-2", "edit-2"], [1, "column-3", "filter_2"], [1, "column-2", "edit-3"], [1, "column-3"], [2, "background-color", "#fff"], ["href", "javascript:;", 2, "margin-top", "60px", 3, "ngClass", "click"], [1, "column-2", "edit-4"], [1, "column-2", "edit-5"], ["href", "javascript:;", "id", "proceed", 3, "click"]], template: function RegistrationStep4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Desired Partner Profile.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Basic details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Marital Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "22-32 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_37_listener() { return ctx.changeAgeFilterOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_39_listener() { return ctx.changeHeightFilterOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_41_listener() { return ctx.changeMaritalStatusFilterOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_43_listener() { return ctx.changeCountryFilterOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Religion & Ethnicity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Religion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mother Tongue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Hindi-Delhi, Hindi-UP, Punjabi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_64_listener() { return ctx.changeReligionFilterOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_66_listener() { return ctx.changeToungeFilterOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Education & Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Highest Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Occupation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_93_listener() { return ctx.changeIncomeFilterOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Lifestyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Dietary Habits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Drinking habits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Smoking habits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Complexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Body type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Challenged");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Desired Partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "About Desired Partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Tribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Tribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "County living in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "County living in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "City living in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "City living in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Social status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Social status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Occupation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Occupation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Health ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Smoking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Hair color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Man hair style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Lady hair length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Skin tone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Type of body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationStep4Component_Template_a_click_261_listener() { return ctx.registrationFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "LOOKS GOOD, PROCEED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.family_Des_heigth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.MaritalStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.ageFilter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Filter ", ctx.ageFilter ? "ON" : "OFF", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.heightFilter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Filter ", ctx.heightFilter ? "ON" : "OFF", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx.maritalStatusFilter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Filter ", ctx.maritalStatusFilter ? "ON" : "OFF", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, ctx.countryFilter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Filter ", ctx.countryFilter ? "ON" : "OFF", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.religion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.religionFilter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Filter ", ctx.religionFilter ? "ON" : "OFF", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c0, ctx.toungeFilter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Filter ", ctx.toungeFilter ? "ON" : "OFF", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.occupation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.annualIncome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c0, ctx.incomeFilter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Filter ", ctx.incomeFilter ? "ON" : "OFF", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.smoking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.skinTone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.bodyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.self_bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.country_living_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.city_living_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.socialStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.occupation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.smoking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.man_hairColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.man_hairStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.ladyhairlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.skinTone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.heigth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.bodyType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".basic-details[_ngcontent-%COMP%]   .column-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8b8b8b;\n  margin: 0px 0px 15px 0px;\n  padding: 0;\n}\n\n.basic-details[_ngcontent-%COMP%]   .column-2[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.basic-details[_ngcontent-%COMP%]   .column-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n@media screen and (max-width: 1100px) {\n  .last-signup[_ngcontent-%COMP%] {\n    padding: 170px 0px 60px 0px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n\n  .last-signup[_ngcontent-%COMP%] {\n    padding: 140px 0px 80px 0px;\n  }\n}\n\n.filterClass[_ngcontent-%COMP%] {\n  background: #d69d5c !important;\n  color: #fff !important;\n}\n\na[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n\n.basic-details[_ngcontent-%COMP%]   .column-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0px 0px 22px 0px !important;\n}\n\n.basic-details[_ngcontent-%COMP%]   .column-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0px 0px 7px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9yZWdpc3RyYXRpb24tc3RlcDQvcmVnaXN0cmF0aW9uLXN0ZXA0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUVBLHdCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksT0FBQTtBQUFKOztBQUdBO0VBQ0ksT0FBQTtBQUFKOztBQUdBO0VBRUk7SUFDSSwyQkFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLFlBQUE7RUFGTjs7RUFLRTtJQUNJLDJCQUFBO0VBRk47QUFDRjs7QUFLQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFNQTtFQUNJLDZCQUFBO0FBSEo7O0FBT0E7RUFDSSxtQ0FBQTtBQUpKOztBQU9BO0VBQ0ksa0NBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvcmVnaXN0cmF0aW9uLXN0ZXA0L3JlZ2lzdHJhdGlvbi1zdGVwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYy1kZXRhaWxzIC5jb2x1bW4tMiBwIHtcbiAgICBjb2xvcjogcmdiKDEzOSwgMTM5LCAxMzkpO1xuICAgIC8vIG1hcmdpbjogMHB4IDBweCA3cHggMHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAxNXB4IDBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYmFzaWMtZGV0YWlscyAuY29sdW1uLTIge1xuICAgIGZsZXg6IDE7XG59XG5cbi5iYXNpYy1kZXRhaWxzIC5jb2x1bW4tMSB7XG4gICAgZmxleDogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG5cbiAgICAubGFzdC1zaWdudXAge1xuICAgICAgICBwYWRkaW5nOiAxNzBweCAwcHggNjBweCAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIC5hcnJvd191cCB7XG4gICAgICAgIGJvdHRvbTogNTJweDtcbiAgICB9XG5cbiAgICAubGFzdC1zaWdudXAge1xuICAgICAgICBwYWRkaW5nOiAxNDBweCAwcHggODBweCAwcHg7XG4gICAgfVxufVxuXG4uZmlsdGVyQ2xhc3Mge1xuICAgIGJhY2tncm91bmQ6ICNkNjlkNWMgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4vL0Fhc2hpc2ggQ1NTXG4uYmFzaWMtZGV0YWlscyAuY29sdW1uLTEgaDQge1xuICAgIG1hcmdpbjogMHB4IDBweCAyMnB4IDBweCAhaW1wb3J0YW50OyAgIFxufVxuXG4uYmFzaWMtZGV0YWlscyAuY29sdW1uLTMgYSB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDdweCAwcHggIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationStep4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-step4',
                templateUrl: './registration-step4.component.html',
                styleUrls: ['./registration-step4.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/store/store.component.ts":
/*!********************************************************!*\
  !*** ./src/app/before-signup/store/store.component.ts ***!
  \********************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(); };
StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["app-store"]], decls: 87, vars: 0, consts: [[1, "blog-section"], [1, "container"], [1, "title"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-4", "col-xl-3"], [1, "product-bg"], ["href", "product-details.html", 1, "product-li"], ["src", "assets/img/bridal-lehnga.jpg", "alt", "lehnga", "title", "lehnga"], ["href", "#!", 1, "buy-now"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "1000 SAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Ultimate Women's Lehenga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 15px 15px;\n  margin: 15px 0px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 22%;\n}\n\ni#none-pass[_ngcontent-%COMP%] {\n  bottom: 22%;\n}\n\n.product-bg[_ngcontent-%COMP%] {\n  padding: 12px;\n  box-shadow: 0px 0px 10px 0px #0000001f;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9zdG9yZS9zdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvc3RvcmUvc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXBhZ2UtMSB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIG1hcmdpbjogMTVweCAwcHggMTBweDtcbn1cblxuLnNpZ251cC1wYWdlLTEgZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmkjc2hvdy1wYXNzIHtcbiAgICBib3R0b206IDIyJTtcbn1cblxuaSNub25lLXBhc3Mge1xuICAgIGJvdHRvbTogMjIlO1xufVxuXG4ucHJvZHVjdC1iZyB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4ICMwMDAwMDAxZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-store',
                templateUrl: './store.component.html',
                styleUrls: ['./store.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/success-stories/success-stories.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/before-signup/success-stories/success-stories.component.ts ***!
  \****************************************************************************/
/*! exports provided: SuccessStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessStoriesComponent", function() { return SuccessStoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SuccessStoriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessStoriesComponent.ɵfac = function SuccessStoriesComponent_Factory(t) { return new (t || SuccessStoriesComponent)(); };
SuccessStoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessStoriesComponent, selectors: [["app-success-stories"]], decls: 55, vars: 0, consts: [[1, "section-3"], [1, "container"], [1, "row"], [1, "col-xl-12"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-sm-6", "col-12"], [1, "section-3-column"], ["src", "assets/img/column-img-1.jpg", "alt", "success storie image", "title", "success storie image"], [1, "register-free"], ["href", "signup-1.html"]], template: function SuccessStoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Millions have found their life partner here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I found a companion for my adventures, on Wdding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "I found a companion for my adventures, on Wdding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I found a companion for my adventures, on Wdding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "I found a companion for my adventures, on Wdding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "I found a companion for my adventures, on Wdding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mohammad & Fatima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "I found a companion for my adventures, on Wdding APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Now it is your turn to be happily married");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Register Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 22%;\n}\n\ni#none-pass[_ngcontent-%COMP%] {\n  bottom: 22%;\n}\n\n.section-3[_ngcontent-%COMP%]   .section-3-column[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n\n.section-3[_ngcontent-%COMP%] {\n  padding: 170px 0px 40px 0px;\n}\n\n.section-3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n  margin: 10px 0px 50px 0px;\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC9zdWNjZXNzLXN0b3JpZXMvc3VjY2Vzcy1zdG9yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUNBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRUEiLCJmaWxlIjoic3JjL2FwcC9iZWZvcmUtc2lnbnVwL3N1Y2Nlc3Mtc3Rvcmllcy9zdWNjZXNzLXN0b3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLXBhZ2UtMSB7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5zaWdudXAtcGFnZS0xIGg0IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmkjc2hvdy1wYXNzIHtcbiAgICBib3R0b206IDIyJTtcbn1cblxuaSNub25lLXBhc3Mge1xuICAgIGJvdHRvbTogMjIlO1xufVxuXG4uc2VjdGlvbi0zIC5zZWN0aW9uLTMtY29sdW1uIHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xufVxuXG4uc2VjdGlvbi0zIHtcbiAgICBwYWRkaW5nOiAxNzBweCAwcHggNDBweCAwcHg7XG59XG4uc2VjdGlvbi0zIGgxIHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtc2l6ZTogMzBweDtcbm1hcmdpbjogMTBweCAwcHggNTBweCAwcHg7XG5jb2xvcjogIzIyMjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessStoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-stories',
                templateUrl: './success-stories.component.html',
                styleUrls: ['./success-stories.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/terms-of-use/terms-of-use.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/before-signup/terms-of-use/terms-of-use.component.ts ***!
  \**********************************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class TermsOfUseComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.staticContentFunc();
    }
    staticContentFunc() {
        this.httpService.get('static/getStaticContent?Type=PRIVACY', 0).subscribe(res => {
            console.log('staticContent==>', res);
            this.termsOfUse = res.result[0].description;
        }, err => {
            console.log(err);
        });
    }
}
TermsOfUseComponent.ɵfac = function TermsOfUseComponent_Factory(t) { return new (t || TermsOfUseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
TermsOfUseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsOfUseComponent, selectors: [["app-terms-of-use"]], decls: 30, vars: 1, consts: [[1, "common-section"], [1, "container"], [1, "about-wedding-app"], [1, "wedding_app"], [2, "font-size", "24px"], [1, "row"], [1, "col-sm-12", "col-md-7"], [1, "about_content"], [1, "col-sm-12", "col-md-5"], [1, "signup-page-1"], ["type", "text", "placeholder", "Full Name*", "name", "user-name", "required", ""], ["type", "tel", "placeholder", "Mobile Number*", "name", "user-mob", "required", ""], ["type", "text", "placeholder", "Create Profile for*", "name", "profile-for", "required", ""], ["type", "password", "placeholder", "Create New Password*", "name", "user-pass", "required", "", "id", "creat-pass"], ["id", "show-pass", "title", "view password", "aria-hidden", "true", 1, "far", "fa-eye-slash"], [1, "sr-only"], ["id", "none-pass", "title", "hide password", "aria-hidden", "true", 1, "far", "fa-eye"], ["type", "submit"]], template: function TermsOfUseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Terms Of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "view password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "hide password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.termsOfUse, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".signup-page-1[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n  margin: 15px 0px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ni#show-pass[_ngcontent-%COMP%], i#none-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  bottom: 25%;\n  z-index: 2;\n}\n\n@media screen and (max-width: 1220px) {\n  section[_ngcontent-%COMP%] {\n    min-height: calc(100vh - 370px);\n    overflow: auto;\n  }\n}\n\n@media screen and (max-width: 660px) {\n  section[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  section[_ngcontent-%COMP%] {\n    padding: 10px 0px 30px 0px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 500px);\n}\n\n.about-wedding-app[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC90ZXJtcy1vZi11c2UvdGVybXMtb2YtdXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBSUE7O0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksK0JBQUE7SUFDQSxjQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJO0lBQ0ksaUJBQUE7RUFGTjtBQUNGOztBQUtBO0VBQ0k7SUFDSSwwQkFBQTtFQUhOO0FBQ0Y7O0FBT0E7RUFBVywrQkFBQTtBQUpYOztBQUtBO0VBQW9CLDJCQUFBO0FBRHBCIiwiZmlsZSI6InNyYy9hcHAvYmVmb3JlLXNpZ251cC90ZXJtcy1vZi11c2UvdGVybXMtb2YtdXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1wYWdlLTEge1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBtYXJnaW46IDE1cHggMHB4IDEwcHg7XG59XG5cbi5zaWdudXAtcGFnZS0xIGZvcm0gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lnbnVwLXBhZ2UtMSBoNCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5cblxuaSNzaG93LXBhc3MsXG5pI25vbmUtcGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICBib3R0b206IDI1JTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM3MHB4KTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDMwcHggMHB4O1xuICAgIH1cbn1cblxuLy9BYXNoaXNoIENzcy4uLi4uXG4uY29udGFpbmVye21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDUwMHB4KTt9XG4uYWJvdXQtd2VkZGluZy1hcHAge21hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsOfUseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-of-use',
                templateUrl: './terms-of-use.component.html',
                styleUrls: ['./terms-of-use.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/before-signup/verify-otp/verify-otp.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/before-signup/verify-otp/verify-otp.component.ts ***!
  \******************************************************************/
/*! exports provided: VerifyOTPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOTPComponent", function() { return VerifyOTPComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.service */ "./src/app/providers/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/common/common.service */ "./src/app/providers/common/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class VerifyOTPComponent {
    constructor(httpService, router, spinner, commonService) {
        this.httpService = httpService;
        this.router = router;
        this.spinner = spinner;
        this.commonService = commonService;
        this.otp = { one: "", two: "", three: "", four: "" };
    }
    ngOnInit() {
        this.checkPreviousURL = this.commonService.getPreviousUrl();
        console.log('checkPreviousURL ==>', this.checkPreviousURL.split('/')[2]);
        this.getUserClass = localStorage.getItem('AddClass');
        if (this.getUserClass == '2') {
            $("body").removeClass("pharmacy-section");
        }
        else if (this.getUserClass == '3') {
            $("body").addClass("pharmacy-section");
        }
        window.scrollTo(0, 0);
    }
    /** Auto focus functionality */
    onKey(event, value, type) {
        console.log(event, value, type);
        if (event.code != 'Backspace') {
            if (type == 1) {
                if (value != "") {
                    $('#otp2').focus();
                }
            }
            else if (type == 2) {
                if (value != "") {
                    $('#otp3').focus();
                }
            }
            else if (type == 3) {
                if (value != "") {
                    $('#otp4').focus();
                }
            }
            else if (type == 4) {
                if (value != "") {
                    $('#otp4').focus();
                }
            }
        }
        else {
            this.otp.one = "";
            this.otp.two = "";
            this.otp.three = "";
            this.otp.four = "";
            $('#otp1').focus();
        }
    }
    /**Function to verify OTP */
    verifyOTP() {
        let data = {
            "otp": this.otp.one + this.otp.two + this.otp.three + this.otp.four,
            "userId": localStorage.getItem('userID'),
        };
        this.httpService.post('user/verifyOtp', data, 1).subscribe(res => {
            console.log('verify_OTP ==>', res);
            if (res.responseCode == 200) {
                if (this.checkPreviousURL.split('/')[2] == 'forgotPassword') {
                    localStorage.setItem('userID', res['result']._id);
                    localStorage.setItem('userToken', res['result'].token);
                    this.commonService.showSuccessToast('OTP verified Successfully. Please login to continue', false, 'center');
                    this.router.navigateByUrl('visitor/home');
                }
                else if (this.checkPreviousURL.split('/')[2] == 'registrationStep-1') {
                    localStorage.setItem('userID', res['result']._id);
                    localStorage.setItem('userToken', res['result'].token);
                    this.commonService.showSuccessToast('OTP verified Successfully.', false, 'center');
                    this.router.navigateByUrl('visitor/registrationStep-2');
                }
                else {
                    console.log('Route_URL_ISSUE');
                }
            }
        }, err => {
            console.log('verifyOTP_Err ==>', err);
        });
    }
    /**Function to resend OTP */
    resendOTP() {
        // let data = {
        //     "mobileNo"      :   localStorage.getItem('mobileNo'),
        //     "countryCode"   :   '+91',
        // }
        // this.spinner.show();
        // this.httpService.post('user/forgotPasswordOtp', data,0).subscribe(res => {
        //     this.spinner.hide();
        //     if (res.response_code == 200)   {
        //         this.commonService.showSuccess('OTP sent successfully.')
        //     }     
        // }, err => {
        //     console.log('Error', err);
        // });  
    }
}
VerifyOTPComponent.ɵfac = function VerifyOTPComponent_Factory(t) { return new (t || VerifyOTPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"])); };
VerifyOTPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerifyOTPComponent, selectors: [["app-verify-otp"]], decls: 26, vars: 5, consts: [[1, "forgot-password"], [1, "container"], [1, "row"], [1, "col-12"], [1, "signup-page-1"], [1, "form-box", "max-WT-600", "middle-form"], [1, "form-head", "text-center"], [1, "mb-2"], [1, "pb-4", "text-center", "font-13"], [1, "main-form", "mt20", "p-4"], [1, "autotabbed", "text-center"], ["type", "text", "maxlength", "1", "name", "one", "id", "otp1", "autocomplete", "off", 1, "otpField", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "maxlength", "1", "name", "two", "id", "otp2", "autocomplete", "off", 1, "otpField", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "maxlength", "1", "name", "three", "id", "otp3", "autocomplete", "off", 1, "otpField", 3, "ngModel", "ngModelChange", "keyup"], ["type", "text", "maxlength", "1", "name", "four", "id", "otp4", "autocomplete", "off", 1, "otpField", 3, "ngModel", "ngModelChange", "keyup"], [1, "button-block", "mt-5", "mb-4", "text-center"], [1, "btn", "btn-common", "max-WT-250", 3, "disabled", "click"], [1, "font-13", "text-center"], ["href", "javascript:void(0)", 1, "link", 3, "click"]], template: function VerifyOTPComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Verify Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter the OTP sent to your registered Mobile and Email Address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VerifyOTPComponent_Template_input_ngModelChange_15_listener($event) { return ctx.otp.one = $event; })("keyup", function VerifyOTPComponent_Template_input_keyup_15_listener($event) { return ctx.onKey($event, ctx.otp.one, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VerifyOTPComponent_Template_input_ngModelChange_16_listener($event) { return ctx.otp.two = $event; })("keyup", function VerifyOTPComponent_Template_input_keyup_16_listener($event) { return ctx.onKey($event, ctx.otp.two, 2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VerifyOTPComponent_Template_input_ngModelChange_17_listener($event) { return ctx.otp.three = $event; })("keyup", function VerifyOTPComponent_Template_input_keyup_17_listener($event) { return ctx.onKey($event, ctx.otp.three, 3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VerifyOTPComponent_Template_input_ngModelChange_18_listener($event) { return ctx.otp.four = $event; })("keyup", function VerifyOTPComponent_Template_input_keyup_18_listener($event) { return ctx.onKey($event, ctx.otp.four, 4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyOTPComponent_Template_button_click_20_listener() { return ctx.verifyOTP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "VERIFY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Didn't receive an OTP? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyOTPComponent_Template_a_click_24_listener() { return ctx.resendOTP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Resend OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otp.one);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otp.two);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otp.three);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.otp.four);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.otp.one == "" || ctx.otp.two == "" || ctx.otp.three == "" || ctx.otp.four == "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".find-special-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  text-align: center;\n  line-height: 30px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #a6a6a6;\n  position: absolute;\n  top: 22%;\n  right: -17%;\n  transform: translate(-50%, -50%);\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\ni#show-pass[_ngcontent-%COMP%] {\n  bottom: 35%;\n}\n\n@media screen and (max-width: 1220px) {\n  .container[_ngcontent-%COMP%] {\n    width: 970px;\n  }\n}\n\n@media screen and (max-width: 990px) {\n  .container[_ngcontent-%COMP%] {\n    width: 760px;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n\n  .forgot-password[_ngcontent-%COMP%] {\n    margin-top: 118px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 460px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    top: 22%;\n  }\n\n  .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-1[_ngcontent-%COMP%]   .icon-2[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-3[_ngcontent-%COMP%]   .icon-4[_ngcontent-%COMP%]::after, .find-someone[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%]   .icon-5[_ngcontent-%COMP%]   .icon-6[_ngcontent-%COMP%]::after {\n    right: -14%;\n  }\n\n  .forgot-password[_ngcontent-%COMP%] {\n    margin-top: 61px;\n  }\n\n  .arrow_up[_ngcontent-%COMP%] {\n    bottom: 52px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 450px);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.disableCss[_ngcontent-%COMP%] {\n  background-color: #dddddd !important;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\n\n.select-custome[_ngcontent-%COMP%] {\n  width: 150px !important;\n  height: calc(2.25rem + 4px);\n  padding: 0.375rem 0.75rem;\n  margin: 10px 0px 0px 0px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border: none !important;\n  box-shadow: 0 0 0 0.2rem #ffdfbbc4 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n\nselect[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 10px 10px;\n}\n\n.signup-page-1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n\n.signup-page-1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVmb3JlLXNpZ251cC92ZXJpZnktb3RwL3ZlcmlmeS1vdHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxZQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksWUFBQTtFQUFOOztFQUdFOzs7SUFHSSxXQUFBO0VBQU47O0VBR0U7SUFDSSxpQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLFdBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0k7SUFDSSxXQUFBO0VBRk47O0VBS0U7OztJQUdJLFFBQUE7RUFGTjs7RUFLRTs7O0lBR0ksV0FBQTtFQUZOOztFQUtFO0lBQ0ksZ0JBQUE7RUFGTjs7RUFLRTtJQUNJLFlBQUE7RUFGTjtBQUNGOztBQU9BO0VBQVcsK0JBQUE7QUFKWDs7QUFLQTtFQUFhLG1CQUFBO0FBRGI7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSw2Q0FBQTtBQUVKOztBQUFBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0EsNkNBQUE7QUFHSjs7QUFBQTtFQUNJLDZCQUFBO0FBR0o7O0FBREE7RUFDSSw2QkFBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSwwQkFBQTtBQUtKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2JlZm9yZS1zaWdudXAvdmVyaWZ5LW90cC92ZXJpZnktb3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbmQtc3BlY2lhbC1zb21lb25lIC5maW5kLWljb24gLmljb24tMSAuaWNvbi0yOjphZnRlcixcbi5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0zIC5pY29uLTQ6OmFmdGVyLFxuLmZpbmQtc29tZW9uZSAuZmluZC1pY29uIC5pY29uLTUgLmljb24tNjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICByaWdodDogLTE3JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuaSNzaG93LXBhc3Mge1xuICAgIGJvdHRvbTogMzUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDk3MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDc2MHB4O1xuICAgIH1cblxuICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0xIC5pY29uLTI6OmFmdGVyLFxuICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0zIC5pY29uLTQ6OmFmdGVyLFxuICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi01IC5pY29uLTY6OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IC0xNCU7XG4gICAgfVxuXG4gICAgLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDExOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMSAuaWNvbi0yOjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tMyAuaWNvbi00OjphZnRlcixcbiAgICAuZmluZC1zb21lb25lIC5maW5kLWljb24gLmljb24tNSAuaWNvbi02OjphZnRlciB7XG4gICAgICAgIHRvcDogMjIlO1xuICAgIH1cblxuICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0xIC5pY29uLTI6OmFmdGVyLFxuICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi0zIC5pY29uLTQ6OmFmdGVyLFxuICAgIC5maW5kLXNvbWVvbmUgLmZpbmQtaWNvbiAuaWNvbi01IC5pY29uLTY6OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IC0xNCU7XG4gICAgfVxuXG4gICAgLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDYxcHg7XG4gICAgfVxuXG4gICAgLmFycm93X3VwIHtcbiAgICAgICAgYm90dG9tOiA1MnB4O1xuICAgIH1cblxufVxuXG4vL0Fhc2hpc2ggQ1NTXG4uY29udGFpbmVye21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDQ1MHB4KTt9XG4uZm9ybS1ncm91cCB7bWFyZ2luLWJvdHRvbTogMHJlbTsgfVxuLmRpc2FibGVDc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQgIWltcG9ydGFudDtcbn1cbi5zaWdudXAtcGFnZS0xIGZvcm0gaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNmZmRmYmJjNCAhaW1wb3J0YW50O1xufVxuLnNlbGVjdC1jdXN0b21lIHtcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGNhbGMoMi4yNXJlbSArIDRweCk7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuXG4uc2lnbnVwLXBhZ2UtMSBmb3JtIHNlbGVjdDpmb2N1cyB7XG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2ZmZGZiYmM0ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xufVxuc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xufVxuXG4uc2lnbnVwLXBhZ2UtMSBmb3JtIGlucHV0IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG4uc2lnbnVwLXBhZ2UtMSBmb3JtIHAgIHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnNpZ251cC1wYWdlLTEge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifyOTPComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verify-otp',
                templateUrl: './verify-otp.component.html',
                styleUrls: ['./verify-otp.component.scss']
            }]
    }], function () { return [{ type: src_app_providers_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: src_app_providers_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=before-signup-before-signup-module.js.map