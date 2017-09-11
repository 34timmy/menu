package com.menu.project.web.admin;

import com.menu.project.model.Role;
import com.menu.project.model.User;
import com.menu.project.service.UserService;
import com.menu.project.util.ValidationUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import java.util.Set;

/**
 * Created by Timur on 13.08.2017.
 */

@RestController
@RequestMapping("/admin/users")
public class AdminUserController {

    @Autowired
    private UserService userService;

    @Autowired
    public AdminUserController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public User update(@Valid @RequestBody User user, @PathVariable int id) {
        user.setRoles(user.getRoles());
        user.setId(id);
        ValidationUtil.checkId(user, id);
        return userService.update(user);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") int id) throws NotFoundException {

        userService.delete(id);

    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public User create(@Valid @RequestBody User user) {
        user.setRoles(Collections.singleton(Role.ROLE_USER));

        return userService.create(user);

    }

    @GetMapping("/{id}")
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

    @PutMapping("/{id}/{enabled}")
    public void enable(@PathVariable("id") int id, @PathVariable("enabled") boolean enabled) throws NotFoundException {
        userService.enable(id,enabled);
    }

}
