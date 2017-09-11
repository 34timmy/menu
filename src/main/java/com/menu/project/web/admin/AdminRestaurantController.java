package com.menu.project.web.admin;

import com.menu.project.model.Restaurant;
import com.menu.project.service.RestaurantService;
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
@RequestMapping("/admin/restaurants")
public class AdminRestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    public AdminRestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Restaurant update(@Valid @RequestBody Restaurant restaurant, @PathVariable int id) {

        ValidationUtil.checkId(restaurant, id);
        return restaurantService.update(restaurant);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") int id) throws NotFoundException {

        restaurantService.delete(id);

    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Restaurant create(@Valid @RequestBody Restaurant restaurant) {

        return restaurantService.create(restaurant);

    }

    @GetMapping("/{id}")
    public Restaurant get(@PathVariable("id") int id) throws NotFoundException {
        return restaurantService.get(id);
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Restaurant> getAll() {
        return restaurantService.getAll();
    }
}
