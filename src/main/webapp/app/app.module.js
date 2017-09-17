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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var i18n_service_1 = require("./service/i18n.service");
var i18n_enum_1 = require("./model/i18n.enum");
var datatable_1 = require("primeng/components/datatable/datatable");
var common_1 = require("@angular/common");
var date_time_transformer_1 = require("./shared/date-time.transformer");
var growl_1 = require("primeng/components/growl/growl");
var primeng_1 = require('primeng/primeng');
var calendar_1 = require("primeng/components/calendar/calendar");
var user_list_component_1 = require("./component/user/user-list.component");
var user_edit_component_1 = require("./component/user/user-edit.component");
var i18n_pipe_1 = require("./shared/pipe/i18n.pipe");
var user_service_1 = require("./service/user.service");
var profile_service_1 = require("./service/profile.service");
var restaurant_list_component_1 = require("./component/restaurant/restaurant-list.component");
var restaurant_edit_component_1 = require("./component/restaurant/restaurant-edit.component");
var restaurant_service_1 = require("./service/restaurant.service");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var Menu = (function () {
    function Menu() {
    }
    Menu = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing, calendar_1.CalendarModule, datatable_1.DataTableModule, growl_1.GrowlModule, primeng_1.ButtonModule],
            declarations: [app_component_1.AppComponent,
                user_list_component_1.UserListComponent,
                user_edit_component_1.UserEditComponent,
                restaurant_list_component_1.RestaurantComponent, restaurant_edit_component_1.RestaurantEditComponent,
                i18n_pipe_1.I18nPipe
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService, profile_service_1.ProfileService, restaurant_service_1.RestaurantService,
                i18n_service_1.I18nService, date_time_transformer_1.DateTimeTransformer, common_1.DatePipe,
                {
                    provide: core_1.APP_INITIALIZER,
                    // useFactory: (i18NService: I18nService) => () => i18NService.initMessages(I18Enum.ru),
                    // or
                    useFactory: initApp,
                    deps: [i18n_service_1.I18nService],
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Menu);
    return Menu;
}());
exports.Menu = Menu;
function initApp(i18nService) {
    // Do initing of services that is required before app loads
    // NOTE: this factory needs to return a function (that then returns a promise)
    return function () { return i18nService.initMessages(i18n_enum_1.I18Enum.ru); }; // + any other services...
}
exports.initApp = initApp;
//# sourceMappingURL=app.module.js.map