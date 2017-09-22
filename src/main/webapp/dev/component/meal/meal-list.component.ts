import {Component, Input, ViewChild} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {MealModel} from "../../model/meal.model";
import {MealEditComponent} from "./meal-edit.component";
import {I18nService} from "../../service/i18n.service";
import {MealService} from "../../service/meal.service";
import {RestaurantModel} from "../../model/restaurant.model";
import {RestaurantService} from "../../service/restaurant.service";

@Component(
    {
        templateUrl: "templates/meal/meal-list.html",
        selector: "meal-list"

    })

export class MealListComponent {

    restaurant: number;
    mealsHolder: Observable<MealModel[]>;
    @ViewChild(MealEditComponent)
    private mealEditChild: MealEditComponent;

    constructor(private mealService: MealService,
                private i18Service: I18nService,private restService:RestaurantService) {
    }


    ngOnInit(): void {
        this.setRModel();
        this.reloadMeals();
    }


    @Input()
    setRModel(){
        this.restaurant = this.restService.getIdRModel();
    }

    private reloadMeals() {
        this.mealsHolder = this.mealService.getMeals(this.restaurant);
    }

    showMealCreateModal() {
        this.mealEditChild.resetForm();
        this.mealEditChild.showToggle = true;
    }

    onMealEdit(meal) {
        this.showMealCreateModal();
        this.mealEditChild.fillMealForm(meal.data);
    }

    onMealSave( meal: MealModel) {
        this.mealService.saveMeal(this.restaurant, meal)
            .subscribe(
                res => {
                    this.reloadMeals();
                }
            );
    }

    onMealDelete( meal: MealModel) {
        this.mealService.deleteMeal(this.restaurant, meal).subscribe(
            res => {
                this.reloadMeals();
            }
        );
    }
}