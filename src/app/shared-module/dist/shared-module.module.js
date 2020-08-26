"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModuleModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_spinner_1 = require("ngx-spinner");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var http_service_1 = require("../providers/http/http.service");
var forms_1 = require("@angular/forms");
var shared_signup_component_1 = require("./shared-signup/shared-signup.component");
var shared_side_nav_component_1 = require("./shared-side-nav/shared-side-nav.component");
var match_details_component_1 = require("../modals/match-details/match-details.component");
var SharedModuleModule = /** @class */ (function () {
    function SharedModuleModule() {
    }
    SharedModuleModule = __decorate([
        core_1.NgModule({
            declarations: [
                shared_signup_component_1.SharedSignupComponent,
                shared_side_nav_component_1.SharedSideNavComponent,
                match_details_component_1.MatchDetailsComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                ngx_spinner_1.NgxSpinnerModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                shared_signup_component_1.SharedSignupComponent,
                shared_side_nav_component_1.SharedSideNavComponent,
                match_details_component_1.MatchDetailsComponent
            ],
            providers: [
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: http_service_1.httpModifierInterceptor,
                    multi: true
                }
            ],
            entryComponents: [
                match_details_component_1.MatchDetailsComponent
            ]
        })
    ], SharedModuleModule);
    return SharedModuleModule;
}());
exports.SharedModuleModule = SharedModuleModule;
