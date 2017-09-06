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
var Rx_1 = require("rxjs/Rx");
var error_model_1 = require("../model/error.model");
var core_1 = require("@angular/core");
var i18n_service_1 = require("./i18n.service");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var ExceptionService = (function () {
    function ExceptionService(i18Service) {
        this.i18Service = i18Service;
        this._errorStream = new Rx_1.Subject();
    }
    Object.defineProperty(ExceptionService.prototype, "errorStream", {
        get: function () {
            return this._errorStream;
        },
        enumerable: true,
        configurable: true
    });
    ExceptionService.prototype.onError = function (e) {
        var error;
        try {
            error = e.json();
        }
        catch (e) {
            console.log("Parsing error object was failed", e);
        }
        var errorModel = null;
        if (error) {
            if (error.cause === 'BadCredentialsException') {
                errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.login'), null);
            }
            else if (error.cause === 'DisabledException') {
                errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.disabled'), null);
            }
            else if (error.cause === 'DataIntegrityViolationException') {
                errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.duplicate_email'), null);
            }
            else if (error.cause === 'InsufficientAuthenticationException') {
                errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.sessionExpired'), null);
            }
        }
        if (!errorModel) {
            errorModel = new error_model_1.ErrorModel(this.i18Service.getMessage('exception.unavailable'), null);
        }
        this._errorStream.next(errorModel);
        console.log(e);
    };
    ExceptionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [i18n_service_1.I18nService])
    ], ExceptionService);
    return ExceptionService;
}());
exports.ExceptionService = ExceptionService;
//# sourceMappingURL=exception.service.js.map