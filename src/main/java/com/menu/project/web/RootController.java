package com.menu.project.web;

import com.menu.project.model.User;
import com.menu.project.service.UserService;
import com.menu.project.web.resources.CustomReloadableResourceBundleMessageSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Locale;
import java.util.Properties;

/**
 * Created by Timur on 13.08.2017.
 */
@RestController
public class RootController {


    @Autowired
    private UserService userService;

    @Autowired
    private CustomReloadableResourceBundleMessageSource reloadableResourceBundleMessageSource;

    @PostMapping("/register")
    public void saveRegister(@Valid @RequestBody User user) {
        userService.create(user);
    }

    @RequestMapping(value = "/i18n/{locale}", method = RequestMethod.GET)
    public Properties getLocal(@PathVariable String locale) {
        return reloadableResourceBundleMessageSource.getAllMessages(new Locale(locale));
    }

//    @GetMapping("/")
//    public String root() {
//        return "redirect:users";
//    }
//
//    @GetMapping("/login")
//    public String login() {
//        return "login";
//    }
//
//    @GetMapping("/users")
//    public String users(Model model) {
//        model.addAttribute("users", userService.getAll());
//        return "users";
//    }
//
//    @GetMapping("/restaurants")
//    public String restaurants(Model model) {
//        model.addAttribute("restaurants", restaurantService.getAll());
//        return "restaurants";
//    }
//
//    @GetMapping("/meals")
//    public String meals(Model model) {
//        return "meals";
//    }

//    @GetMapping("/register")
//    public String register() {
//        return "register";
//    }

//    @GetMapping("/profile")
//    public String profile() {
//        return "profile";
//    }
//
//    @PostMapping("/register")
//    public void saveRegister(Model model) {
//        model.addAttribute("user", new User());
//        model.addAttribute("register", true);
//        //TODO Modelmap , Session status, @Valid
//    }


}
