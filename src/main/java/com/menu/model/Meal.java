package com.menu.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by Timur on 09.08.2017.
 */
@Entity
@SuppressWarnings("JpaQlInspection")
@Table(name = "meals")
public class Meal extends BaseEntity {

    @Column(name = "price", nullable = false)
    @NotBlank
    @Range(min = 0)
    private Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @NotNull
    private Restaurant restaurant;

    public Meal() {
    }

    public Meal(Integer id, String name, Double price) {
        super(id, name);
        this.price = price;
    }


    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Meal{" +
                "id=" + getId() +
                ", name=" + getName() +
                ", price=" + price +
                '}';
    }
}
