package com.menu.project.repository;

import com.menu.project.model.Restaurant;

import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
public interface RestaurantRepository {

    Restaurant save(Restaurant restaurant);

    Restaurant get(int id);

    List<Restaurant> getAll();

    void delete(int id);
}
