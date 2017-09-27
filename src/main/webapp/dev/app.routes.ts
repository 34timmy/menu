import {Routes, RouterModule} from "@angular/router";
import {UserListComponent} from "./component/user/user-list.component";
import {ModuleWithProviders} from "@angular/core";
import {RestaurantModel} from "./model/restaurant.model";
import {RestaurantComponent} from "./component/restaurant/restaurant-list.component";
import {MealListComponent} from "./component/meal/meal-list.component";
import {AuthActivateGuard} from "./shared/auth.activate.guard";
import {ProfileComponent} from "./component/user/profile.component";
import {RegisterComponent} from "./component/auth/register.component";
import {AuthComponent} from "./component/auth/auth.component";

/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */


const appRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/restaurant-list",
    },
    {
        path: "login",
        component: AuthComponent,
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "user-list",
        component: UserListComponent,
        canActivate: [AuthActivateGuard],
    },
    {
        path: "restaurant-list",
        component: RestaurantComponent,
        canActivate: [AuthActivateGuard],
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthActivateGuard]
    },
    {
        path: "meal-list",
        component: MealListComponent,
        canActivate: [AuthActivateGuard],
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
