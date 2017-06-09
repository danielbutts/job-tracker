package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

import java.util.Set;

/**
 * Created by danielbutts on 6/4/17.
 */

@RestController
@RequestMapping("/actions")
@CrossOrigin
public class ActionController {

    private final ActionRepository actionRepository;

    public ActionController(ActionRepository actionRepository) {
        this.actionRepository = actionRepository;
    }

    @GetMapping("")
    public Iterable<Action> all() {
        return this.actionRepository.findAll();
    }

    @GetMapping("/{id}")
    public Action getActionById(@PathVariable Long id) {
        return this.actionRepository.findOne(id);
    }

    @GetMapping("/user/{id}")
    public Set<Action> getActionsByUserId(@PathVariable Integer id) {
        return this.actionRepository.findByUserId(id);
    }

    @PostMapping("")
    public Action create(@RequestBody Action action) {
        return this.actionRepository.save(action);
    }

    @PatchMapping("/{id}")
    public Action update(@RequestBody Action action, @PathVariable Long id) {
        Action existingAction = this.actionRepository.findOne(id);
        existingAction.setActive(action.isActive());
        existingAction.setComplete(action.isComplete());
        return this.actionRepository.save(existingAction);
    }

}
