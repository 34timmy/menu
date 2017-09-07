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
var user_edit_component_1 = require("./user-edit.component");
var user_service_1 = require("../../service/user.service");
var i18n_service_1 = require("../../service/i18n.service");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var UserListComponent = (function () {
    function UserListComponent(userService, i18Service) {
        this.userService = userService;
        this.i18Service = i18Service;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.reloadUsers();
    };
    UserListComponent.prototype.reloadUsers = function () {
        this.usersHolder = this.userService.getUsers();
    };
    UserListComponent.prototype.showCreateModal = function () {
        this.userEditChild.resetForm();
        this.userEditChild.showToggle = true;
    };
    UserListComponent.prototype.onEdit = function (user) {
        this.showCreateModal();
        this.userEditChild.fillUserForm(user.data);
    };
    UserListComponent.prototype.onSave = function (user) {
        var _this = this;
        this.userService.saveUser(user)
            .subscribe(function (res) {
            _this.reloadUsers();
        });
    };
    UserListComponent.prototype.onDelete = function (user) {
        var _this = this;
        this.userService.delete(user).subscribe(function (res) {
            _this.reloadUsers();
        });
    };
    UserListComponent.prototype.onChangeActiveStatus = function (user) {
        var _this = this;
        user.enabled = !user.enabled;
        this.userService.changeActiveStatus(user)
            .subscribe(function (res) {
            _this.reloadUsers();
        });
    };
    __decorate([
        core_1.ViewChild(user_edit_component_1.UserEditComponent), 
        __metadata('design:type', user_edit_component_1.UserEditComponent)
    ], UserListComponent.prototype, "userEditChild", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            templateUrl: "templates/user/user-list.html",
            selector: 'user-list'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, i18n_service_1.I18nService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map