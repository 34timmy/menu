package com.menu.project.service;

import com.menu.project.model.Restaurant;
import com.menu.project.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
@Service
public class RestaurantServiceImpl implements RestaurantService {

    private RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantServiceImpl(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }


    public Restaurant update(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant create(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant get(Integer id) {
        return restaurantRepository.get(id);
    }

    public List<Restaurant> getAll() {
        return restaurantRepository.getAll();
    }

    public void delete(Integer id) {
        restaurantRepository.delete(id);
    }
}
