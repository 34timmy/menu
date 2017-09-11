import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {DateTimeTransformer} from "../shared/date-time.transformer";
import {reqOptions, basePath, reqOptionsJson, registerPath, restaurantPath} from "../shared/config";
import {RestaurantModel} from "../model/restaurant.model";

@Injectable()
export class RestaurantService
{

    constructor(private http: Http,
                private dateTimeTransformer: DateTimeTransformer) {
    }

    registerRestaurant(value: RestaurantModel): Observable<Response> {
        return this.http.post(basePath + registerPath, JSON.stringify(value), reqOptionsJson)
    }


    getRestaurants(): Observable<RestaurantModel[]> {
        return this.http.get(basePath + restaurantPath, reqOptions).map(res => res.json());
    }

    delete(restaurant: RestaurantModel): Observable<Response> {
        return this.http.delete(basePath + restaurantPath + '/' + restaurant.id, reqOptions);
    }

    saveRestaurant(restaurant: RestaurantModel): Observable<Response> {
        if (restaurant.id) {
            return this.updateRestaurant(restaurant);
        } else {

            return this.createRestaurant(restaurant);
        }
    }

    // changeActiveStatus(restaurant: RestaurantModel): Observable<Response> {
    //     return this.http.patch(basePath + restaurantPath + '/' + restaurant.id + '/' + restaurant.enabled, null);
    // }

    private updateRestaurant(restaurant: RestaurantModel): Observable<Response> {
        return this.http.put(basePath + restaurantPath + '/' + restaurant.id, JSON.stringify(restaurant), reqOptionsJson);
    }

    private createRestaurant(restaurant: RestaurantModel): Observable<Response> {

        return this.http.post(basePath + restaurantPath, JSON.stringify(restaurant), reqOptionsJson);
    }
}