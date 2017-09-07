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
var core_1 = require("@angular/core");
var i18n_service_1 = require("../../service/i18n.service");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var I18nPipe = (function () {
    function I18nPipe(i18Service) {
        this.i18Service = i18Service;
    }
    I18nPipe.prototype.transform = function (value, args) {
        return this.i18Service.getMessage(value);
    };
    I18nPipe = __decorate([
        core_1.Pipe({ name: 'i18nPipe',
            pure: false }), 
        __metadata('design:paramtypes', [i18n_service_1.I18nService])
    ], I18nPipe);
    return I18nPipe;
}());
exports.I18nPipe = I18nPipe;
//# sourceMappingURL=i18n.pipe.js.map