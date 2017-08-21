package com.menu.repository;

import com.menu.model.User;

import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
public interface UserRepository {

    User save(User user);

    void delete(int id);

    User get(int id);

    List<User> getAll();

    User getByEmail(String email);
}
