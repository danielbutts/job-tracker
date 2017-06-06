package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

import java.util.Set;

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

    @GetMapping("/user/{id}")
    public Set<Action> getActionsByUserId(@PathVariable Integer id) {
        return this.repository.findByUserId(id);
    }

    @PostMapping("")
    public Action create(@RequestBody Action action) {
        return this.repository.save(action);
    }

    @PatchMapping("/{id}")
    public Action update(@RequestBody Action action, @PathVariable Long id) {
        Action existingAction = this.repository.findOne(id);
        existingAction.setActive(action.isActive());
        existingAction.setComplete(action.isComplete());
        return this.repository.save(existingAction);
    }

}
