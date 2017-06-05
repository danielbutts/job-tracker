package com.job;

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

    @PostMapping("")
    public Job create(@RequestBody Job job) {
        return this.repository.save(job);
    }

}