package com.userService.api;

import java.util.List;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by mike on 6/3/17.
 * http://briansjavablog.blogspot.com/2015/12/spring-boot-rest-tutorial.html
 */

import com.userService.model.User;
import com.userService.model.UserRepository;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/users")
    public List <User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @RequestMapping("/hello")
    public String listUsers() {
        return "listing users!";
    }

//   @RequestMapping(value = "/users/{userId}", method = RequestMethod.GET)
//    public User getUser(@PathVariable(""))
}
