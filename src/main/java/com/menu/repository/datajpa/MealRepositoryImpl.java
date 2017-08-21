package com.menu.repository.datajpa;

import com.menu.model.Meal;
import com.menu.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
@Repository
public class MealRepositoryImpl implements MealRepository {

    @Autowired
    private CrudMealRepository crudMealRepository;

    @Autowired
    private CrudRestaurantRepository crudRestaurantRepository;


    public Meal save(Meal meal, int restId) {
        if (meal.getId() != null && get(meal.getId(), restId) == null) {
            return null;
        }
        meal.setRestaurant(crudRestaurantRepository.getOne(restId));
        return crudMealRepository.save(meal);
    }

    public Meal get(int id, int restId) {
        Meal meal = crudMealRepository.findOne(id);
        return meal.getId() != null && meal.getRestaurant().getId() != null ? meal : null;
    }

    public List<Meal> getAll(int restId) {
        return crudMealRepository.getAll(restId);
    }

    public void delete(int id, int restId) {
        crudMealRepository.delete(id, restId);
    }
}
