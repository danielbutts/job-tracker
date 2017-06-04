package com.userService;

import com.userService.model.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by mike on 6/3/17.
 * https://spring.io/guides/gs/accessing-data-rest/
 */
@SpringBootApplication
public class AppController {

    public static void main(String[] args) {
        SpringApplication.run(AppController.class, args);
    }

}
