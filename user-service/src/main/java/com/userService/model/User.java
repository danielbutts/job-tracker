package com.userService.model;

import javax.persistence.*;


/**
 * Created by mike on 6/3/17.
 * https://spring.io/guides/gs/accessing-data-jpa/
 * http://briansjavablog.blogspot.com/2015/12/spring-boot-rest-tutorial.html
 */
@Entity
public class User {

    protected User() {}

    public User(String firstName, String lastName, String city, String state, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.email = email;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String city;
    private String state;
    private String email;



    public String listUsers() {
        return String.format("User[id=%d, firstName='%s', lastName='%s', email='%s']", id, firstName, lastName, email);
    }

}
