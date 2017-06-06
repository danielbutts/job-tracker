package com;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobRepository repository;

    public JobController(JobRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Job> all() {
        return this.repository.findAll();
    }

    @GetMapping("/{id}")
    public Job getSomething(@PathVariable("id") Long id) {
        return this.repository.findOne(id);
    }

    @PostMapping("")
    public Job create(@RequestBody Job job) {
        System.out.print("in Post");

        return this.repository.save(job);
    }

    @PatchMapping("/{id}")
    public Job update(@RequestBody Job job, @PathVariable Long id) {
        Job app = this.repository.findOne(id);
        if (job.getTitle() != null) {
            app.setTitle(job.getTitle());
        }
        if (job.getUrl() != null) {
            app.setUrl(job.getUrl());
        }
        if (job.getDescription() != null) {
            app.setDescription(job.getDescription());
        }
        if (job.getCompany() != null) {
            app.setCompany(job.getCompany());
        }

        return this.repository.save(app);
    }

}