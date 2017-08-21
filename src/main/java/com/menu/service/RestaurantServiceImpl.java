package com.menu.service;

import com.menu.model.Restaurant;
import com.menu.repository.RestaurantRepository;
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

    public Restaurant save(Restaurant restaurant) {
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
