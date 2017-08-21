package com.menu.service;

import com.menu.model.User;
import javassist.NotFoundException;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
public interface UserService {

    User create(User user);

    User update(User user);

    void delete(int id) throws NotFoundException;

    User get(int id) throws NotFoundException;

    User getByEmail(String email) throws NotFoundException;

    List<User> getAll();

}