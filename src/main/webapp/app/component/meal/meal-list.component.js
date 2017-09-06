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
var forms_1 = require("@angular/forms");
var meal_edit_component_1 = require("./meal-edit.component");
var meal_service_1 = require("../../service/meal.service");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var MealListComponent = (function () {
    function MealListComponent(mealService, formBuilder) {
        this.mealService = mealService;
        this.formBuilder = formBuilder;
    }
    MealListComponent.prototype.ngOnInit = function () {
        this.mealsHolder = this.mealService.loadAllMeals();
    };
    MealListComponent.prototype.updateList = function () {
        this.mealsHolder = this.mealService.loadAllMeals();
    };
    MealListComponent.prototype.deleteItem = function (meal) {
        var _this = this;
        this.mealService.deleteMeal(meal).subscribe(function (res) {
            _this.updateList();
        });
    };
    MealListComponent.prototype.showCreateModal = function () {
        this.editMealChild.resetForm();
        this.editMealChild.showToggle = true;
    };
    MealListComponent.prototype.selectMeal = function (meal) {
        this.editMealChild.showToggle = true;
        this.editMealChild.fillMyForm(meal.data);
    };
    MealListComponent.prototype.save = function (userMeal) {
        var _this = this;
        this.editMealChild.showToggle = false;
        this.mealService.save(userMeal).subscribe(function (res) {
            _this.updateList();
        });
    };
    MealListComponent.prototype.onFilter = function () {
        this.mealsHolder = this.mealService.getFilteredDataSet(this.startDate, this.endDate, this.startTime, this.endTime);
    };
    MealListComponent.prototype.clearFilters = function () {
        this.startDate = null;
        this.endDate = null;
        this.startTime = null;
        this.endTime = null;
        this.updateList();
    };
    MealListComponent.prototype.getRowClass = function (rowData, rowIndex) {
        return rowData.exceed ? "exceeded" : null;
    };
    __decorate([
        core_1.ViewChild(meal_edit_component_1.EditMealComponent), 
        __metadata('design:type', meal_edit_component_1.EditMealComponent)
    ], MealListComponent.prototype, "editMealChild", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            templateUrl: '../../../templates/meal/meal-list.html'
        }), 
        __metadata('design:paramtypes', [meal_service_1.MealService, forms_1.FormBuilder])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map