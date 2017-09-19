import {APP_INITIALIZER, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {I18nService} from "./service/i18n.service";
import {I18Enum} from "./model/i18n.enum";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DatePipe} from "@angular/common";
import {DateTimeTransformer} from "./shared/date-time.transformer";
import {GrowlModule} from "primeng/components/growl/growl";
import {ButtonModule} from 'primeng/primeng';
import {CalendarModule} from "primeng/components/calendar/calendar";
import {UserListComponent} from "./component/user/user-list.component";
import {UserEditComponent} from "./component/user/user-edit.component";
import {I18nPipe} from "./shared/pipe/i18n.pipe";
import {UserService} from "./service/user.service";
import {ProfileService} from "./service/profile.service";
import {RestaurantComponent} from "./component/restaurant/restaurant-list.component";
import {RestaurantEditComponent} from "./component/restaurant/restaurant-edit.component";
import {RestaurantService} from "./service/restaurant.service";
import {MealListComponent} from "./component/meal/meal-list.component";
import {MealEditComponent} from "./component/meal/meal-edit.component";
import {MealService} from "./service/meal.service";

/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing, CalendarModule, DataTableModule, GrowlModule, ButtonModule],
    declarations: [AppComponent,
        UserListComponent,
        UserEditComponent,
        RestaurantComponent, RestaurantEditComponent,MealListComponent,MealEditComponent,
        I18nPipe
    ],
    bootstrap: [AppComponent],
    providers: [UserService, ProfileService, RestaurantService,MealService,
        I18nService, DateTimeTransformer, DatePipe,
        {
            provide: APP_INITIALIZER,
            // useFactory: (i18NService: I18nService) => () => i18NService.initMessages(I18Enum.ru),
            // or
            useFactory: initApp,
            deps: [I18nService],
            multi: true
        }
    ]
})
export class Menu {

}

export function initApp(i18nService: I18nService) {
    // Do initing of services that is required before app loads
    // NOTE: this factory needs to return a function (that then returns a promise)
    return () => i18nService.initMessages(I18Enum.ru);  // + any other services...
}