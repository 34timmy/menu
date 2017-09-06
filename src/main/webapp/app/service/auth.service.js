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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var exception_service_1 = require("./exception.service");
var config_1 = require("../shared/config");
var profile_service_1 = require("./profile.service");
var AuthService = (function () {
    function AuthService(http, router, profileService, exceptionService) {
        this.http = http;
        this.router = router;
        this.profileService = profileService;
        this.exceptionService = exceptionService;
        this._authenticatedAs = null;
    }
    AuthService.prototype.login = function (token) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new http_1.RequestOptions({
            headers: headers,
            withCredentials: true
        });
        this.http.post(config_1.basePath + config_1.loginPath, "username=" + token.login +
            "&password=" + token.password, options).map(function (res) {
            return res;
        }).subscribe(function (res) {
            _this.router.navigate(["meal-list"]);
        }, function (error) {
            _this.exceptionService.onError(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "authenticatedAs", {
        get: function () {
            return this._authenticatedAs;
        },
        set: function (value) {
            this._authenticatedAs = value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.hasAdminRole = function () {
        return this._authenticatedAs.roles.includes("ROLE_ADMIN");
    };
    AuthService.prototype.logout = function () {
        this.http.get(config_1.basePath + "/logout").subscribe();
        this._authenticatedAs = null;
    };
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        if (this._authenticatedAs == null) {
            return this.profileService.getOwnProfile().map(function (res) {
                _this._authenticatedAs = res.json();
                return true;
            }).catch(function (error) {
                _this._authenticatedAs = null;
                _this.exceptionService.onError(error);
                return Rx_1.Observable.of(false);
            });
        }
        else {
            return Rx_1.Observable.of(true);
        }
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, profile_service_1.ProfileService, exception_service_1.ExceptionService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map