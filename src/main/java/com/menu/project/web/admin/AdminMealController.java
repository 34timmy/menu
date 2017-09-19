package com.menu.project.web.admin;

import com.menu.project.model.Meal;
import com.menu.project.service.MealService;
import com.menu.project.util.ValidationUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Timur on 21.08.2017.
 */
@RestController
@RequestMapping("/profile/restaurants")
public class AdminMealController {

    @Autowired
    private MealService mealService;

    @Autowired
    public AdminMealController(MealService mealService) {
        this.mealService = mealService;
    }

    @PutMapping(value = "/{restId}/meals/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Meal update(@Valid @RequestBody Meal meal, @PathVariable int id,@PathVariable("restId") int restId) {

        ValidationUtil.checkId(meal, id);
        return mealService.update(meal, id);
    }

    @DeleteMapping(value = "/{restId}/meals/{id}")
    public void delete(@PathVariable("id") int id,@PathVariable("restId") int restId) throws NotFoundException {

        mealService.delete(id, restId);

    }

    @PostMapping(value = "/{restId}/meals",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Meal create(@Valid @RequestBody Meal meal,@PathVariable("restId") int restId) {

        return mealService.create(meal, restId);

    }

    @GetMapping("/{restId}/meals/{id}")
    public Meal get(@PathVariable("id") int id, @PathVariable("restId")int restId) throws NotFoundException {
        return mealService.get(id, restId);
    }

    @GetMapping(value = "/{restId}/meals", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Meal> getAll(@PathVariable("restId") int restId) {
        return mealService.getAll(restId);
    }


}
