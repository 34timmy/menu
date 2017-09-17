import {Routes, RouterModule} from "@angular/router";
import {UserListComponent} from "./component/user/user-list.component";
import {ModuleWithProviders} from "@angular/core";
import {RestaurantModel} from "./model/restaurant.model";
import {RestaurantComponent} from "./component/restaurant/restaurant-list.component";

/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */


const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/user-list",
    },
    {
        path: "user-list",
        component: UserListComponent,
    },
    {
        path: "restaurant-list",
        component: RestaurantComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
