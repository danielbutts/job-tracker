package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

/**
 * Created by danielbutts on 6/3/17.
 */

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationRepository repository;

    public ApplicationController(ApplicationRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Application> all() {
        return this.repository.findAll();
    }

    @PostMapping("")
    public Application create(@RequestBody Application application) {
        return this.repository.save(application);
    }

}
