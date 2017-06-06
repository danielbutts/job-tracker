package com;

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

}