package com.menu.service;

import com.menu.model.User;
import com.menu.repository.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public User update(User user) {
        return userRepository.save(user);
    }

    @Transactional
    public void delete(int id) throws NotFoundException {
        userRepository.delete(id);
    }

    public User get(int id) throws NotFoundException {
        return userRepository.get(id);
    }

    public User getByEmail(String email) throws NotFoundException {
        return userRepository.getByEmail(email);
    }

    public List<User> getAll() {
        return userRepository.getAll();
    }
}
