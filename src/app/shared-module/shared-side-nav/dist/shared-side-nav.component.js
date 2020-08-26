"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedSideNavComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var SharedSideNavComponent = /** @class */ (function () {
    function SharedSideNavComponent(router, httpService, commonService) {
        this.router = router;
        this.httpService = httpService;
        this.commonService = commonService;
    }
    SharedSideNavComponent.prototype.ngOnInit = function () {
        this.selectedUrl = this.router.url;
        console.log(this.router.url);
    };
    SharedSideNavComponent.prototype.navigationFunc = function (url) {
        var _this = this;
        if (localStorage.getItem('isLoggedIn')) {
            // $('.collapse-2').toggleClass('newClass');
            this.router.navigateByUrl(url);
            this.selectedUrl = url;
        }
        else {
            sweetalert2_1["default"].fire({
                title: 'Wedding App',
                text: 'Please login to access these features!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Okay',
                cancelButtonText: 'Leave'
            }).then(function (result) {
                if (result.value) {
                    // Swal.fire(
                    //   'Thankyou!',
                    //   '',
                    //   'success'
                    // )
                    // $('.collapse-2').toggleClass('newClass');
                    _this.router.navigateByUrl('visitor/login');
                }
                else if (result.dismiss === sweetalert2_1["default"].DismissReason.cancel) {
                    $('.collapse-2').toggleClass('newClass');
                    sweetalert2_1["default"].fire('Thankyou!', '', 'success');
                }
            });
        }
    };
    SharedSideNavComponent.prototype.logoutFunc = function () {
        localStorage.clear();
        // $('.collapse-2').toggleClass('newClass');
        // this.commonService.changeLoginSub(false);  
        this.commonService.showSuccessToast('Logged out Successfully!', false, 'center');
        this.router.navigateByUrl('visitor/home');
    };
    SharedSideNavComponent = __decorate([
        core_1.Component({
            selector: 'app-shared-side-nav',
            templateUrl: './shared-side-nav.component.html',
            styleUrls: ['./shared-side-nav.component.scss']
        })
    ], SharedSideNavComponent);
    return SharedSideNavComponent;
}());
exports.SharedSideNavComponent = SharedSideNavComponent;
