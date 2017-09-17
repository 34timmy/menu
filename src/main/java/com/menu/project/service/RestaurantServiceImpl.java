package com.menu.project.service;

import com.menu.project.model.Restaurant;
import com.menu.project.repository.RestaurantRepository;
import com.menu.project.util.ValidationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public Restaurant update(Restaurant restaurant) {

        Restaurant restaurantFromDB=get(restaurant.getId());
        restaurantFromDB = ValidationUtil.validateRestaurant(restaurantFromDB,restaurant);
        return restaurantRepository.save(restaurantFromDB);
    }

    @Transactional
    public Restaurant create(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant get(Integer id) {
        return restaurantRepository.get(id);
    }

    public List<Restaurant> getAll() {
        return restaurantRepository.getAll();
    }

    @Transactional
    public void delete(Integer id) {
        restaurantRepository.delete(id);
    }
}
