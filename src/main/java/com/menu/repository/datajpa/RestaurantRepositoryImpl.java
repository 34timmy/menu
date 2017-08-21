package com.menu.repository.datajpa;

import com.menu.model.Restaurant;
import com.menu.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
@Repository
public class RestaurantRepositoryImpl implements RestaurantRepository {

    @Autowired
    private CrudRestaurantRepository crudRestaurantRepository;

    public Restaurant save(Restaurant restaurant) {
        return crudRestaurantRepository.save(restaurant);
    }

    public Restaurant get(int id) {
        return crudRestaurantRepository.getOne(id);
    }

    public List<Restaurant> getAll() {
        return crudRestaurantRepository.findAll();
    }

    public void delete(int id) {
        crudRestaurantRepository.delete(id);
    }
}
