package com.menu.project.service;

import com.menu.project.model.Meal;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
public interface MealService {

    Meal create(Meal meal, int restId);
    Meal update(Meal meal, int restId);

    Meal get(Integer id, int restId);

    List<Meal> getAll(int restId);

    void delete(Integer id, int restId);


}
