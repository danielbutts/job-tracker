package com;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
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
        return this.repository.save(job);
    }

    @PatchMapping("/{id}")
    public Job update(@RequestBody Job job, @PathVariable Long id) {
        Job existingJob = this.repository.findOne(id);
        if (job.getTitle() != null) {
            existingJob.setTitle(job.getTitle());
        }
        if (job.getUrl() != null) {
            existingJob.setUrl(job.getUrl());
        }
        if (job.getDescription() != null) {
            existingJob.setDescription(job.getDescription());
        }
        return this.repository.save(existingJob);
    }

}