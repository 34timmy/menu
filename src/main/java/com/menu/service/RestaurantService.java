package com.menu.service;

import com.menu.model.Restaurant;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
public interface RestaurantService {


    Restaurant update(Restaurant restaurant);

    Restaurant create(Restaurant restaurant);

    Restaurant get(Integer id);

    List<Restaurant> getAll();

    void delete(Integer id);
}
