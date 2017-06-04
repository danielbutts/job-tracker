package com.userService.data;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.userService.model.User;

@Component
public class DataBuilder {

    public List <User> createUser() {

        User user1 = new User("Mike", "Hathaway", "Seattle", "Washington", "Surprise!@haha.com");

        User user2 = new User("Bill", "Murry", "LA", "California", "IDKYO!@haha.com");

        return Arrays.asList(user1, user2);
    }
}
