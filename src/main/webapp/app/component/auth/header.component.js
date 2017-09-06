"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../service/auth.service");
var router_1 = require("@angular/router");
var i18n_service_1 = require("../../service/i18n.service");
var i18n_enum_1 = require("../../model/i18n.enum");
var exception_service_1 = require("../../service/exception.service");
var HeaderComponent = (function () {
    function HeaderComponent(authService, router, formBuilder, i18Service, exceptionService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.i18Service = i18Service;
        this.exceptionService = exceptionService;
        this.errors = [];
        this.loginForm = this.formBuilder.group({
            "login": ["", forms_1.Validators.required],
            "password": ["", forms_1.Validators.required]
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exceptionService.errorStream.subscribe(function (e) {
            _this.errors.push(e);
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(["login"]);
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.authService.login(this.loginForm.value);
    };
    HeaderComponent.prototype.chooseEng = function () {
        this.i18Service.reloadLocale(i18n_enum_1.I18Enum.en);
    };
    HeaderComponent.prototype.chooseRu = function () {
        this.i18Service.reloadLocale(i18n_enum_1.I18Enum.ru);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../templates/auth/header.html',
            selector: 'header-component',
            styleUrls: ["../../../resources/css/i18n.css"]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, forms_1.FormBuilder, i18n_service_1.I18nService, exception_service_1.ExceptionService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map