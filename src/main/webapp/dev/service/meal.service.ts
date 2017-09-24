import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {basePath, mealPath, reqOptions, reqOptionsJson, restaurantPath} from "../shared/config";
import {Observable} from "rxjs/Observable";
import {MealModel} from "../model/meal.model";
import {RestaurantModel} from "../model/restaurant.model";
import {DateTimeTransformer} from "../shared/date-time.transformer";

@Injectable()
export class MealService {


    constructor(private http: Http, private dateTimeTransformer: DateTimeTransformer) {
    }


    getMeals(restaurantId: number): Observable<MealModel[]> {
        return this.http.get(basePath + restaurantPath + '/' + restaurantId + mealPath, reqOptions).map(res => res.json())
    }

    deleteMeal(restaurantId:number, meal: MealModel): Observable<Response> {
        return this.http.delete(basePath + restaurantPath + '/' + restaurantId + mealPath + '/' + meal.id, reqOptions)
    }

    saveMeal(restaurantId:number, meal: MealModel): Observable<Response> {
        // meal.restaurant=restaurantId;

        if (meal.id) {

            return this.updateMeal(restaurantId, meal);
        }
        else {
            return this.createMeal(restaurantId,meal);
        }
    }


    private updateMeal(restaurantId:number ,meal: MealModel): Observable<Response> {

        return this.http.put(basePath + restaurantPath + '/' + restaurantId + mealPath + '/' + meal.id, JSON.stringify(meal), reqOptionsJson)
    }

    private createMeal(restaurantId:number, meal: MealModel): Observable<Response> {
        return this.http.post(basePath + restaurantPath + '/' + restaurantId + mealPath, JSON.stringify(meal), reqOptionsJson);
    }

}