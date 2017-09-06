package com.menu.project.web;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

/**
 * Created by Timur on 21.08.2017.
 */
public class AuthorizedUser extends User {


    private com.menu.project.model.User user;

    public AuthorizedUser(com.menu.project.model.User user) {
        super(user.getEmail(), user.getPassword(), user.isEnabled(), true, true, true, user.getRoles());
        this.user = user;
    }

    public static AuthorizedUser get() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null) {
            return null;
        }
        Object principal = auth.getPrincipal();
        if (principal == null) {
            throw new NullPointerException("No authorized admin");
        }
        return (principal instanceof AuthorizedUser) ? (AuthorizedUser) principal : null;
    }

    public static int id() {
        return get().user.getId();
    }

}
