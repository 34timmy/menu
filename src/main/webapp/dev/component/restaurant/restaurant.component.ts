
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

    private reloadRestaurants() {
        this.restaurantsHolder = this.restaurantService.getRestaurants();
    }

    showCreateModal() {
        this.restaurantEditChild.resetForm();
        // this.restaurantEditChild.showToggle = true;
    }

    onEdit(restaurant) {
        this.showCreateModal();
        this.restaurantEditChild.fillRestaurantForm(restaurant.data);
    }

    onSave(restaurant: RestaurantModel) {
        this.restaurantService.saveRestaurant(restaurant)
            .subscribe(
                res => {
                    this.reloadRestaurants();
                }
            );
    }

    onDelete(restaurant: RestaurantModel) {
        this.restaurantService.delete(restaurant).subscribe(
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