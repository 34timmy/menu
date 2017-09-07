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
var UserEditComponent = (function () {
    function UserEditComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.showToggle = false;
        this.onSaveEvent = new core_1.EventEmitter();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            id: [''],
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        });
    };
    UserEditComponent.prototype.fillUserForm = function (user) {
        this.userForm.patchValue({
            id: user.id,
            name: user.name,
            email: user.email,
        });
    };
    UserEditComponent.prototype.onSave = function () {
        this.onSaveEvent.emit(this.userForm.value);
        this.userForm.reset();
        this.closeModal();
    };
    UserEditComponent.prototype.closeModal = function () {
        this.showToggle = false;
    };
    UserEditComponent.prototype.resetForm = function () {
        this.userForm.reset();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserEditComponent.prototype, "onSaveEvent", void 0);
    UserEditComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/user/user-edit.html',
            selector: 'user-edit'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map