package com.userService.api;

import java.util.List;

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

    @GetMapping("/users")
    public List <User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @RequestMapping


//    public String listUsers() {
//        return "listing users!";
//    }





//    @RequestMapping(value = "/users/{userId}", method = RequestMethod.GET)
//    public User getUser(@PathVariable(""))
}
