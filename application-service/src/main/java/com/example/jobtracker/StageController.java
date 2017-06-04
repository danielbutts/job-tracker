package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

/**
 * Created by danielbutts on 6/3/17.
 */

@RestController
@RequestMapping("/stages")
public class StageController {

    private final StageRepository repository;

    public StageController(StageRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Stage> all() {
        return this.repository.findAll();
    }

    @PostMapping("")
    public Stage create(@RequestBody Stage stage) {
        return this.repository.save(stage);
    }

}
