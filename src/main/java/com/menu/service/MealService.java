package com.menu.service;

import com.menu.model.Meal;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
public interface MealService {

    Meal save(Meal meal, int restId);

    Meal get(Integer id, int restId);

    List<Meal> getAll(int restId);

    void delete(Integer id, int restId);
}
