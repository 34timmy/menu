package com.menu.project.util;

import com.menu.project.model.BaseEntity;
import com.menu.project.model.Restaurant;
import jdk.nashorn.internal.runtime.regexp.joni.exception.ValueException;

/**
 * Created by Timur on 16.08.2017.
 */
public class ValidationUtil {

    public static void checkId(BaseEntity baseEntity, int id) {
        if (baseEntity.getId() == null) {
            baseEntity.setId(id);
        } else if (baseEntity.getId() != id) {
            throw new IllegalArgumentException(baseEntity + " must be with id = " + id);
        }
    }

    public static Restaurant validateRestaurant(Restaurant restaurantFromDB, Restaurant restaurant) {
        if (! restaurant.getName().isEmpty()) {
            restaurantFromDB.setName(restaurant.getName());
        }else   {
            throw new ValueException("Name can't be empty");
        }
        restaurantFromDB.setAddress(restaurant.getAddress());
        restaurantFromDB.setSite(restaurant.getSite());
        return restaurantFromDB;
    }
    //TODO методы для проверки id у delete, create...
}
