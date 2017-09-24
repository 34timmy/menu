package com.menu.project.repository.datajpa;

import com.menu.project.model.Meal;
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
public interface CrudMealRepository extends JpaRepository<Meal, Integer> {

    @Query("SELECT m FROM Meal m WHERE m.restaurant.id=:restId ORDER BY m.name DESC")
    List<Meal> getAll(@Param("restId") int restId);

    @Modifying
    @Transactional
    @Query("DELETE FROM Meal m WHERE m.id=:id AND m.restaurant.id=:restId")
    void delete(@Param("id") int id, @Param("restId") int restId);

//    @Modifying
//    @Transactional
//    @Query("UPDATE TABLE Meal m SET  m.name=meal.name, m.price=meal.price WHERE m.id=:id AND m.restaurant.id=:restId")
//    Meal save(@Param("meal") Meal meal,@Param("id") int id, @Param("restId") int restId);
}
