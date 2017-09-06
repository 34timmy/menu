package com.menu.project.web.admin;

import com.menu.project.model.Meal;
import com.menu.project.service.MealService;
import com.menu.project.util.ValidationUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Timur on 21.08.2017.
 */
@RestController
@RequestMapping("/admin/meals/")
public class AdminMealController {

    @Autowired
    private MealService mealService;

    @Autowired
    public AdminMealController(MealService mealService) {
        this.mealService = mealService;
    }

    @PutMapping(value = "{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Meal update(Meal meal, @PathVariable int id) {

        ValidationUtil.checkId(meal, id);
        return mealService.update(meal, id);
    }

    @DeleteMapping(value = "{id}")
    public void delete(@PathVariable("id") int id, int restId) throws NotFoundException {

        mealService.delete(id, restId);

    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Meal create(Meal meal, int restId) {

        return mealService.create(meal, restId);

    }

    @GetMapping("{id}")
    public Meal get(@PathVariable("id") int id, int restId) throws NotFoundException {
        return mealService.get(id, restId);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Meal> getAll(int restId) {
        return mealService.getAll(restId);
    }


}
