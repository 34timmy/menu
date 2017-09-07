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
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var DateTimeTransformer = (function () {
    function DateTimeTransformer() {
    }
    DateTimeTransformer.prototype.serializeDateTime = function (date) {
        return this.serializeDate(date) + 'T' + this.serializeTime(date);
    };
    DateTimeTransformer.prototype.serializeDate = function (date) {
        return date.getFullYear()
            + '-' + this.addZero((date.getMonth() + 1))
            + '-' +
            this.addZero(date.getDate());
    };
    DateTimeTransformer.prototype.serializeTime = function (time) {
        return this.addZero(time.getHours())
            + ':' + this.addZero(time.getMinutes())
            + ':' + this.addZero(time.getSeconds());
        // + '.' + String( (time.getMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        // + 'Z';
    };
    DateTimeTransformer.prototype.addZero = function (day) {
        if (day < 10) {
            return '0' + day;
        }
        return day;
    };
    DateTimeTransformer.prototype.deserializeDateTime = function (date) {
        var parsed = new Date();
        var dateTimeString = date.split('T');
        var dateString = dateTimeString[0].split('-');
        parsed.setFullYear(+dateString[0]);
        parsed.setMonth(((+dateString[1]) - 1));
        parsed.setDate(+dateString[2]);
        var timeString = dateTimeString[1].split(':');
        parsed.setHours(+timeString[0]);
        parsed.setMinutes(+timeString[1]);
        parsed.setSeconds(0, 0);
        return parsed;
    };
    DateTimeTransformer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DateTimeTransformer);
    return DateTimeTransformer;
}());
exports.DateTimeTransformer = DateTimeTransformer;
//# sourceMappingURL=date-time.transformer.js.map