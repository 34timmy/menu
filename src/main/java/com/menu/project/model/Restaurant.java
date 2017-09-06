package com.menu.project.model;

import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.SafeHtml;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Created by Timur on 09.08.2017.
 */
@Entity
@Table(name = "restaurant")
public class Restaurant extends BaseEntity {

    @Column(name = "address", nullable = false)
    @NotBlank
    @SafeHtml
    private String address;

    @Column(name = "site")
    private String site;

    @Column(name = "mark", nullable = false)
    @NotNull
    private Integer mark;

    @Column(name = "votequantity", nullable = false)
    @NotNull
    private Integer votequatity;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "restaurant")
    protected List<Meal> meals;

    public Restaurant() {
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public Integer getMark() {
        return mark;
    }

    public void setMark(Integer mark) {
        this.mark = mark;
    }

    public Integer getVotequatity() {
        return votequatity;
    }

    public void setVotequatity(Integer votequatity) {
        this.votequatity = votequatity;


    }


    @Override
    public String toString() {
        return "Restaurant{" +
                "id=" + getId() +
                ", name=" + getName() +
                ", address='" + address + '\'' +
                ",  site='" + site + '\'' +
                ", mark=" + mark +
                ", votequatity=" + votequatity +
                '}';
    }
}


