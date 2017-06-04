package com.userService.api;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import com.userService.model.User;
import com.userService.model.UserRepository;

/*
helpful guide:
    http://websystique.com/spring-boot/spring-boot-rest-api-example/
 */

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

// ********** Get ALL Users **********
    @GetMapping("")
    public Iterable<User> all() {
        return this.repository.findAll();
    }

// ********** Get Single User **********
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@PathVariable("id") long id) {
        User user = this.repository.findById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);

    }

// ********** Add User **********
    @PostMapping("/new")
    public User create(@RequestBody User user) {
        System.out.println("Creating User " + user.getFirstName());
        return this.repository.save(user);
    }


// ********** Delete A User **********
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
        User user = this.repository.findById(id);
        this.repository.deleteById(id);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }


// ********** Test User **********
    @GetMapping("/hello")
    public String sayHello() {
        return "hello from the user db!";
    }

}

/*
'{"id": "1", "firstName": "Mike", "lastName": "Hathaway", "city": "Seattle", "state": "WA", "email": "nope"}'
 */