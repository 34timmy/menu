package com.menu.repository.datajpa;

import com.menu.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
@Transactional(readOnly = true)
public interface CrudUserRepository extends JpaRepository<User,Integer> {
    @Transactional
    @Modifying
    @Query("DELETE FROM User u WHERE u.id=:id")
    void delete(@Param("id") int id);

    User getByEmail(String email);
 }
