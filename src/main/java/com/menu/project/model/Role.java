package com.menu.project.model;

import org.springframework.security.core.GrantedAuthority;

/**
 * Created by Timur on 09.08.2017.
 */

public enum Role implements GrantedAuthority {
    ROLE_USER,
    ROLE_ADMIN;

    public String getAuthority() {
        return name();
    }
}