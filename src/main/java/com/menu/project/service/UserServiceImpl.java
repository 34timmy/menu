package com.menu.project.service;

import com.menu.project.model.User;
import com.menu.project.repository.UserRepository;
import com.menu.project.util.PasswordUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Timur on 11.08.2017.
 */
@Service("userService")
public class UserServiceImpl implements UserService, UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CacheEvict(value = "users", allEntries = true)
    @Transactional
    public User create(User user) {
        user.setId(null);
        return userRepository.save(user);
    }

    @CacheEvict(value = "users", allEntries = true)
    @Transactional
    public User update(User user) throws NotFoundException {
        User userFromDB=get(user.getId());
        userFromDB.setPassword(PasswordUtil.encode(user.getPassword()));
        userFromDB.setEmail(user.getEmail().toLowerCase());
        return userRepository.save(user);
    }

    @CacheEvict(value = "users", allEntries = true)
    @Transactional
    public void delete(int id) throws NotFoundException {
        userRepository.delete(id);
    }

    @CacheEvict(value = "users", allEntries = true)
    @Transactional
    public void enable(int id, boolean enabled) throws NotFoundException {
        User user = get(id);
        user.setEnabled(enabled);
        userRepository.save(user);
    }

    @CacheEvict(value = "users", allEntries = true)
    public void evictCache() {
        // only for evict cache
    }

    public User get(int id) throws NotFoundException {
        return userRepository.get(id);
    }

    public User getByEmail(String email) throws NotFoundException {
        return userRepository.getByEmail(email);
    }

    @Cacheable("users")
    public List<User> getAll() {
        return userRepository.getAll();
    }

    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return null;
    }
}
