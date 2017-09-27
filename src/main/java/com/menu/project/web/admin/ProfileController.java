package com.menu.project.web.admin;
import com.menu.project.AuthorizedUser;
import com.menu.project.model.User;
import com.menu.project.service.UserService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * GKislin
 * 06.03.2015.
 */
@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private UserService service;

    ;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public User get() throws NotFoundException {
        User user = service.get(AuthorizedUser.id());
        user.setPassword("");
        return user;
    }

    @DeleteMapping
    public void delete() throws NotFoundException {
        service.delete(AuthorizedUser.id());
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void update(@Valid @RequestBody User user) throws NotFoundException {
        user.setId(AuthorizedUser.id());
        service.update(user);
    }
}