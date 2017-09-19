import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {basePath, mealPath, reqOptions, restaurantPath} from "../shared/config";
import {Observable} from "rxjs/Observable";
import {MealModel} from "../model/meal.model";
import {RestaurantModel} from "../model/restaurant.model";

@Injectable()
export class MealService {


    constructor(private http: Http) {
    }


    getMeals(restaurant: RestaurantModel): Observable<MealModel[]> {
        return this.http.get(basePath + restaurantPath + '/' + restaurant.id + mealPath, reqOptions).map(res => res.json())
    }

    deleteMeal(restaurant:RestaurantModel, meal: MealModel): Observable<Response> {
        return this.http.delete(basePath + restaurantPath + '/' + restaurant.id + mealPath + '/' + meal.id, reqOptions)
    }

    saveMeal(restaurant:RestaurantModel, meal: MealModel): Observable<Response> {
        if (meal.id) {

            return this.updateMeal(restaurant, meal);
        }
        else {
            return this.createMeal(restaurant,meal);
        }
    }


    private updateMeal(restaurant:RestaurantModel ,meal: MealModel): Observable<Response> {
        return this.http.put(basePath + restaurantPath + '/' + restaurant.id + mealPath + '/' + meal.id, JSON.stringify(meal), reqOptions)
    }

    private createMeal(restaurant:RestaurantModel, meal: MealModel): Observable<Response> {
        return this.http.post(basePath + restaurantPath + '/' + restaurant.id + mealPath + '/' + meal.id, JSON.stringify(meal), reqOptions);
    }

}