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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var i18n_enum_1 = require("../model/i18n.enum");
var Rx_1 = require("rxjs/Rx");
var config_1 = require("../shared/config");
require('rxjs/add/operator/toPromise');
var I18nService = (function () {
    function I18nService(http) {
        this.http = http;
        this.cachedMessages = null;
        this.activeLocale = null;
    }
    I18nService.prototype.getMessage = function (key) {
        if (this.cachedMessages) {
            return this.cachedMessages[key];
        }
    };
    I18nService.prototype.reloadLocale = function (locale) {
        var _this = this;
        this.activeLocale = locale;
        this.http.get(config_1.basePath + config_1.i18nPath + '/' + i18n_enum_1.I18Enum[locale]).subscribe(function (res) {
            _this.cachedMessages = res.json();
        });
    };
    I18nService.prototype.getCurrentLocale = function () {
        return i18n_enum_1.I18Enum[this.activeLocale];
    };
    I18nService.prototype.initMessages = function (locale) {
        var _this = this;
        this.activeLocale = locale;
        return new Promise(function (resolve, reject) {
            _this.http.get(config_1.basePath + config_1.i18nPath + '/' + i18n_enum_1.I18Enum[locale])
                .map(function (res) { return res.json(); }).catch(function (error) {
                reject(false);
                return Rx_1.Observable.throw(error.json().error || 'Server error');
            }).subscribe(function (callResult) {
                _this.cachedMessages = callResult;
                resolve(true);
            });
        });
    };
    I18nService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], I18nService);
    return I18nService;
}());
exports.I18nService = I18nService;
//# sourceMappingURL=i18n.service.js.map