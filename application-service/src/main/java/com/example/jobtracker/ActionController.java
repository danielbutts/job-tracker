package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

/**
 * Created by danielbutts on 6/4/17.
 */

@RestController
@RequestMapping("/actions")
public class ActionController {

    private final ActionRepository repository;

    public ActionController(ActionRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Action> all() {
        return this.repository.findAll();
    }

    @GetMapping("/{id}")
    public Action getActionById(@PathVariable Long id) {
        return this.repository.findOne(id);
    }

    @PostMapping("")
    public Action create(@RequestBody Action action) {
        return this.repository.save(action);
    }

}
