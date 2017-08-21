package com.menu.repository.datajpa;

import com.menu.model.User;
import com.menu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
@Repository
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private CrudUserRepository crudUserRepository;

    public User save(User user) {
        return crudUserRepository.save(user);
    }

    public void delete(int id) {

        crudUserRepository.delete(id);
    }

    public User get(int id) {
        return crudUserRepository.getOne(id);
    }


    public List<User> getAll() {
        return crudUserRepository.findAll();
    }

    public User getByEmail(String email) {
        return crudUserRepository.getByEmail(email);
    }
}
