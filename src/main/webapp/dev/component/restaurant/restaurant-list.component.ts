
import {Component, ViewChild} from "@angular/core";
import {RestaurantModel} from "../../model/restaurant.model";
import {Observable} from "rxjs/Observable";
import {I18nService} from "../../service/i18n.service";
import {RestaurantEditComponent} from "./restaurant-edit.component";
import {RestaurantService} from "../../service/restaurant.service";

@Component({
    templateUrl: "templates/restaurant/restaurant-list.html",
    selector: 'restaurant-list'
})

export class RestaurantComponent
{
    restaurantsHolder: Observable<RestaurantModel[]>;

    @ViewChild(RestaurantEditComponent)
    private restaurantEditChild: RestaurantEditComponent;

    constructor(private restaurantService: RestaurantService,
                private i18Service: I18nService) {
    }

    ngOnInit(): void {
        this.reloadRestaurants();
    }

    sendIdRModel(restaurant : RestaurantModel){
        this.restaurantService.sendIdModel(restaurant.id);
    }

    private reloadRestaurants() {
        this.restaurantsHolder = this.restaurantService.getRestaurants();
    }

    showRestCreateModal() {
        this.restaurantEditChild.resetForm();
        this.restaurantEditChild.showToggle = true;
    }

    onRestEdit(restaurant) {
        this.showRestCreateModal();
        this.restaurantEditChild.fillRestaurantForm(restaurant.data);
    }

    onRestSave(restaurant: RestaurantModel) {
        this.restaurantService.saveRestaurant(restaurant)
            .subscribe(
                res => {
                    this.reloadRestaurants();
                }
            );
    }

    onRestDelete(restaurant: RestaurantModel) {
        this.restaurantService.deleteRest(restaurant).subscribe(
            res => {
                this.reloadRestaurants();
            }
        );
    }

    // onChangeActiveStatus(restaurant: RestaurantModel) {
    //     restaurant.enabled = !restaurant.enabled;
    //     this.restaurantService.changeActiveStatus(restaurant)
    //         .subscribe(
    //             res => {
    //                 this.reloadRestaurants();
    //             },
    //         );
    // }

}