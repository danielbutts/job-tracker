package com.example.jobtracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by danielbutts on 6/3/17.
 */

@RestController
public class ApplicationsController {


    @GetMapping("/apps")
    public String getAllApps() {
        return "{ \"apps\": [] }";
    }
}
