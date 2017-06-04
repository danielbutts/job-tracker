package com.userService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AppController {


    @GetMapping("/user")
    public String getAllUsers() {
        return "{ \"users\": [] }";
    }
}
