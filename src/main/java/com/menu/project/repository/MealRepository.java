package com.menu.project.repository;

import com.menu.project.model.Meal;

import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
public interface MealRepository {

    Meal save(Meal meal, int restId);

    Meal get(int id, int restId);

    List<Meal> getAll(int restId);

    void delete(int id, int restId);
}
