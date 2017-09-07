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
var ProfileService = (function () {
    function ProfileService(http, dateTimeTransformer) {
        this.http = http;
        this.dateTimeTransformer = dateTimeTransformer;
    }
    ProfileService.prototype.getOwnProfile = function () {
        return this.http.get(config_1.basePath + config_1.profilePath, config_1.reqOptions);
    };
    ProfileService.prototype.saveOwnProfle = function (value) {
        return this.http.put(config_1.basePath + config_1.profilePath, JSON.stringify(value), config_1.reqOptionsJson);
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, date_time_transformer_1.DateTimeTransformer])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map