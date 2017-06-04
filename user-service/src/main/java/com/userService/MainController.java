package com.userService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.userService.model.UserRepository;


@SpringBootApplication
public class MainController {
    public static void main(String[] args) {
        SpringApplication.run(MainController.class, args);
    }
}

