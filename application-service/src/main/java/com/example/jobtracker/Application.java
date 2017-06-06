package com.example.jobtracker;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by danielbutts on 6/4/17.
 */

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "application_id")
    private Long id;

    private Integer userId;
    private Integer jobId;
    private String notes;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "application_stage",
            joinColumns = @JoinColumn(name = "application_id"),
            inverseJoinColumns = @JoinColumn(name = "stage_id")
    )
    private Set<Stage> stages;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getJobId() {
        return jobId;
    }

    public void setJobId(Integer jobId) {
        this.jobId = jobId;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Set<Stage> getStages() {
        return stages;
    }

    public void setStages(Set<Stage> stages) {
        this.stages = stages;
    }
}
