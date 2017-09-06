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
var http_1 = require("@angular/http");
var date_time_transformer_1 = require("../shared/date-time.transformer");
var config_1 = require("../shared/config");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var MealService = (function () {
    function MealService(http, dateTimeTransformer) {
        this.http = http;
        this.dateTimeTransformer = dateTimeTransformer;
    }
    MealService.prototype.loadAllMeals = function () {
        var _this = this;
        return this.http.get(config_1.basePath + config_1.mealPath, config_1.reqOptions)
            .map(function (res) {
            return _this.mapResponse(res);
        });
    };
    MealService.prototype.deleteMeal = function (meal) {
        return this.http.delete(config_1.basePath + config_1.mealPath + '/' + meal.id, config_1.reqOptions);
    };
    MealService.prototype.mapResponse = function (resp) {
        var _this = this;
        var mealsList = resp.json();
        mealsList.forEach(function (meal) {
            meal.dateTime = _this.dateTimeTransformer.deserializeDateTime(meal.dateTime);
        });
        return mealsList;
    };
    MealService.prototype.save = function (userMeal) {
        userMeal.dateTime = this.dateTimeTransformer.serializeDateTime(userMeal.dateTime);
        if (userMeal.id) {
            return this.update(userMeal);
        }
        else {
            return this.http.post(config_1.basePath + config_1.mealPath, JSON.stringify(userMeal), config_1.reqOptionsJson);
        }
    };
    MealService.prototype.update = function (userMeal) {
        return this.http.put(config_1.basePath + config_1.mealPath + '/' + userMeal.id, JSON.stringify(userMeal), config_1.reqOptionsJson);
    };
    MealService.prototype.getFilteredDataSet = function (startDate, endDate, startTime, endTime) {
        var _this = this;
        var getParams = new http_1.URLSearchParams();
        if (startDate != null) {
            getParams.set('startDate', this.dateTimeTransformer.serializeDate(startDate));
        }
        if (endDate != null) {
            getParams.set('endDate', this.dateTimeTransformer.serializeDate(endDate));
        }
        if (startTime != null) {
            getParams.set('startTime', this.dateTimeTransformer.serializeTime(startTime));
        }
        if (endTime != null) {
            getParams.set('endTime', this.dateTimeTransformer.serializeTime(endTime));
        }
        var clone = Object.assign({}, config_1.reqOptions);
        clone.search = getParams;
        return this.http.get(config_1.basePath + config_1.mealPath + '/' + 'filter', clone).map(function (res) {
            return _this.mapResponse(res);
        });
    };
    MealService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, date_time_transformer_1.DateTimeTransformer])
    ], MealService);
    return MealService;
}());
exports.MealService = MealService;
//# sourceMappingURL=meal.service.js.map