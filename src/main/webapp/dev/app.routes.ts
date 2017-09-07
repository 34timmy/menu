import {Routes, RouterModule} from "@angular/router";
import {UserListComponent} from "./component/user/user-list.component";
import {ModuleWithProviders} from "@angular/core";

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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
