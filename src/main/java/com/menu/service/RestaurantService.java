package com.menu.service;

import com.menu.model.Restaurant;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
public interface RestaurantService {


    Restaurant save(Restaurant restaurant);

    Restaurant get(Integer id);

    List<Restaurant> getAll();

    void delete(Integer id);
}
