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
var validate_util_1 = require("../../validators/validate.util");
var EditMealComponent = (function () {
    function EditMealComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.showToggle = false;
        this.onSaveEvent = new core_1.EventEmitter();
    }
    EditMealComponent.prototype.ngOnInit = function () {
        this.mealForm = this.formBuilder.group({
            id: [''],
            dateTime: [null, forms_1.Validators.required],
            description: ["", forms_1.Validators.required],
            calories: ["", forms_1.Validators.compose([forms_1.Validators.required, validate_util_1.ValidateUtil.validateMealCalories])]
        });
    };
    EditMealComponent.prototype.fillMyForm = function (userMeal) {
        this.mealForm.patchValue(userMeal);
    };
    EditMealComponent.prototype.resetForm = function () {
        this.mealForm.reset();
    };
    EditMealComponent.prototype.onSave = function () {
        var value = this.mealForm.value;
        this.onSaveEvent.emit(value);
        this.mealForm.reset();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EditMealComponent.prototype, "onSaveEvent", void 0);
    EditMealComponent = __decorate([
        core_1.Component({
            templateUrl: '../../templates/meal/meal-edit.html',
            selector: 'edit-meal'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=meal-edit.component.js.map