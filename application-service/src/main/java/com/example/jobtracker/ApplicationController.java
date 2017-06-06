package com.example.jobtracker;

import org.springframework.web.bind.annotation.*;

import java.util.Set;

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

    @GetMapping("/{id}")
    public Application getApplicationById(@PathVariable Long id) {
        return this.repository.findOne(id);
    }

    @GetMapping("/{id}/stages")
    public Set<Stage> getApplicationStagesById(@PathVariable Long id) {
        return this.repository.findOne(id).getStages();
    }

    @PatchMapping("/{id}")
    public Application update(@RequestBody Application application, @PathVariable Long id) {
        Application app = this.repository.findOne(id);
        if (application.getNotes() != null) {
            app.setNotes(application.getNotes());
        }
        if (application.getJob_id() != null) {
            app.setJob_id(application.getJob_id());
        }
        if (application.getUser_id() != null) {
            app.setUser_id(application.getUser_id());
        }
        if (application.getStages() != null) {
            app.setStages(application.getStages());
        }

        return this.repository.save(app);
    }

    @PostMapping("")
    public Application create(@RequestBody Application application) {
        return this.repository.save(application);
    }



}
