package com.menu.web.admin;

import com.menu.model.Restaurant;
import com.menu.model.User;
import com.menu.service.RestaurantService;
import com.menu.service.UserService;
import com.menu.util.ValidationUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Timur on 21.08.2017.
 */
@RestController
@RequestMapping("/admin/restaurants/")
public class AdminRestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    public AdminRestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @PutMapping(value = "{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Restaurant update(Restaurant restaurant, @PathVariable int id) {

        ValidationUtil.checkId(restaurant, id);
        return restaurantService.update(restaurant);
    }

    @DeleteMapping(value = "{id}")
    public void delete(@PathVariable("id") int id) throws NotFoundException {

        restaurantService.delete(id);

    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Restaurant create(Restaurant restaurant) {

        return restaurantService.create(restaurant);

    }

    @GetMapping("{id}")
    public Restaurant get(@PathVariable("id") int id) throws NotFoundException {
        return restaurantService.get(id);
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Restaurant> getAll() {
        return restaurantService.getAll();
    }
}
