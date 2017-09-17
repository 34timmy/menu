package com.menu.project.service;

import com.menu.project.model.Meal;
import com.menu.project.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public Meal create(Meal meal, int restId) {
        return mealRepository.save(meal, restId);
    }

    @Transactional
    public Meal update(Meal meal, int restId) {
        return mealRepository.save(meal, restId);
    }

    public Meal get(Integer id, int restId) {
        return mealRepository.get(id, restId);
    }

    public List<Meal> getAll(int restId) {
        return mealRepository.getAll(restId);
    }

    @Transactional
    public void delete(Integer id, int restId) {
        mealRepository.delete(id, restId);

    }
}
