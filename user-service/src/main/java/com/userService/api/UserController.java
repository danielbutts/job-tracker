package com.userService.api;

import java.util.List;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.userService.model.User;
import com.userService.model.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<User> all() {
        return this.repository.findAll();
    }

    @PostMapping("/new")
    public User create(@RequestBody User user) {
        return this.repository.save(user);
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "hello from the user db!";
    }

}

/*
{"id": "1", "firstName": "Mike", "lastName": "Hathaway", "city": "Seattle", "state": "WA", "email": "nope"}
 */