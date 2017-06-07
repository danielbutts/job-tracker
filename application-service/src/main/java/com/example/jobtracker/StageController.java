package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Set;

/**
 * Created by danielbutts on 6/3/17.
 */

@RestController
@CrossOrigin
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

    @GetMapping("/{id}")
    public Stage getStageById(@PathVariable Long id) {
        return this.repository.findOne(id);
    }

    @GetMapping("/types")
    public Iterable<Stage.StageType> allTypes() {
        ArrayList<Stage.StageType> stageTypes = new ArrayList<Stage.StageType>();
        for(Stage.StageType e : Stage.StageType.values()) {
            stageTypes.add(e);
        }
        return stageTypes;
    }

    @GetMapping("application/{id}")
    public Set<Stage> getStagesByApplicationId(@PathVariable Long id) {
        return this.repository.findByApplicationId(id);
    }

    @PostMapping("")
    public Stage create(@RequestBody Stage stage) {
        return this.repository.save(stage);
    }

}
