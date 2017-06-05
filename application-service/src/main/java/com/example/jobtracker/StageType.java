package com.example.jobtracker;

import javax.persistence.*;

/**
 * Created by danielbutts on 6/3/17.
 */

@Entity
@Table(name = "stage_types")
public class StageType {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private Integer value;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
