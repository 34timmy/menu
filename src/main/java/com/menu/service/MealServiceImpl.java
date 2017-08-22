package com.menu.service;

import com.menu.model.Meal;
import com.menu.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
@Service
public class MealServiceImpl implements MealService {

    private MealRepository mealRepository;

    @Autowired
    public MealServiceImpl(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }

    public Meal create(Meal meal, int restId) {
        return mealRepository.save(meal, restId);
    }

    public Meal update(Meal meal, int restId) {
        return mealRepository.save(meal, restId);
    }

    public Meal get(Integer id, int restId) {
        return mealRepository.get(id, restId);
    }

    public List<Meal> getAll(int restId) {
        return mealRepository.getAll(restId);
    }

    public void delete(Integer id, int restId) {
        mealRepository.delete(id, restId);

    }
}
