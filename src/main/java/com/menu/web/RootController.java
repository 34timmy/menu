package com.menu.web;

import com.menu.model.User;
import com.menu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Created by Timur on 13.08.2017.
 */
@Controller
public class RootController {

    @Autowired
    private UserService userService;

    @Autowired
    public RootController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String root() {
        return "redirect:users";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/users")
    public String users(Model model) {
        model.addAttribute("users", userService.getAll());
        return "users";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @GetMapping("/profile")
    public String profile() {
        return "profile";
    }

    @PostMapping("/register")
    public void saveRegister(Model model) {
        model.addAttribute("user", new User());
        model.addAttribute("register", true);
        //TODO Modelmap , Session status, @Valid
    }


}
