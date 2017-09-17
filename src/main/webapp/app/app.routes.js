"use strict";
var router_1 = require("@angular/router");
var user_list_component_1 = require("./component/user/user-list.component");
var restaurant_list_component_1 = require("./component/restaurant/restaurant-list.component");
/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
var appRoutes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/user-list",
    },
    {
        path: "user-list",
        component: user_list_component_1.UserListComponent,
    },
    {
        path: "restaurant-list",
        component: restaurant_list_component_1.RestaurantComponent,
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map