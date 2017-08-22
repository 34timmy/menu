package com.menu.web.admin;

import com.menu.model.User;
import com.menu.service.UserService;
import com.menu.util.ValidationUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Timur on 13.08.2017.
 */

@RestController
@RequestMapping("/admin/users/")
public class AdminUserController {

    @Autowired
    private UserService userService;

    @Autowired
    public AdminUserController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping(value = "{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public User update(User user, @PathVariable int id) {

        ValidationUtil.checkId(user, id);
        return userService.update(user);
    }

    @DeleteMapping(value = "{id}")
    public void delete(@PathVariable("id") int id) throws NotFoundException {

        userService.delete(id);

    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public User create(User user) {

        return userService.create(user);

    }

    @GetMapping("{id}")
    public User get(@PathVariable("id") int id) throws NotFoundException {
        return userService.get(id);
    }

    public User getByEmail(String email) throws NotFoundException {
        return userService.getByEmail(email);
    }


    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAll() {
        return userService.getAll();
    }

}
