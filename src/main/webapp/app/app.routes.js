"use strict";
var router_1 = require("@angular/router");
var user_list_component_1 = require("./component/user/user-list.component");
var restaurant_list_component_1 = require("./component/restaurant/restaurant-list.component");
var meal_list_component_1 = require("./component/meal/meal-list.component");
var auth_activate_guard_1 = require("./shared/auth.activate.guard");
var profile_component_1 = require("./component/user/profile.component");
var register_component_1 = require("./component/auth/register.component");
var auth_component_1 = require("./component/auth/auth.component");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var appRoutes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/restaurant-list",
    },
    {
        path: "login",
        component: auth_component_1.AuthComponent,
    },
    {
        path: "register",
        component: register_component_1.RegisterComponent
    },
    {
        path: "user-list",
        component: user_list_component_1.UserListComponent,
        canActivate: [auth_activate_guard_1.AuthActivateGuard],
    },
    {
        path: "restaurant-list",
        component: restaurant_list_component_1.RestaurantComponent,
        canActivate: [auth_activate_guard_1.AuthActivateGuard],
    },
    {
        path: "profile",
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_activate_guard_1.AuthActivateGuard]
    },
    {
        path: "meal-list",
        component: meal_list_component_1.MealListComponent,
        canActivate: [auth_activate_guard_1.AuthActivateGuard],
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map