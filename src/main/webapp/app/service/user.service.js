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
var date_time_transformer_1 = require("../shared/date-time.transformer");
var config_1 = require("../shared/config");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var UserService = (function () {
    function UserService(http, dateTimeTransformer) {
        this.http = http;
        this.dateTimeTransformer = dateTimeTransformer;
    }
    UserService.prototype.registerUser = function (value) {
        return this.http.post(config_1.basePath + config_1.registerPath, JSON.stringify(value), config_1.reqOptionsJson);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(config_1.basePath + config_1.usersPath, config_1.reqOptions).map(function (res) { return res.json(); });
    };
    UserService.prototype.delete = function (user) {
        return this.http.delete(config_1.basePath + config_1.usersPath + '/' + user.id, config_1.reqOptions);
    };
    UserService.prototype.saveUser = function (user) {
        if (user.id) {
            return this.updateUser(user);
        }
        else {
            return this.createUser(user);
        }
    };
    UserService.prototype.changeActiveStatus = function (user) {
        return this.http.patch(config_1.basePath + config_1.usersPath + '/' + user.id + '/' + user.enabled, null);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(config_1.basePath + config_1.usersPath + '/' + user.id, JSON.stringify(user), config_1.reqOptionsJson);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(config_1.basePath + config_1.usersPath, JSON.stringify(user), config_1.reqOptionsJson);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, date_time_transformer_1.DateTimeTransformer])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map