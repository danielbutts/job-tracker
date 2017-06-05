package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

/**
 * Created by danielbutts on 6/3/17.
 */

@RestController
@RequestMapping("/stage-types")
public class StageTypeController {

    private final StageTypeRepository repository;

    public StageTypeController(StageTypeRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<StageType> all() {
        return this.repository.findAll();
    }

    @PostMapping("")
    public StageType create(@RequestBody StageType stageType) {
        return this.repository.save(stageType);
    }

}
