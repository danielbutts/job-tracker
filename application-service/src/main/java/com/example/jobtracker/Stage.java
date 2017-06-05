package com.example.jobtracker;

import javax.persistence.*;

/**
 * Created by danielbutts on 6/3/17.
 */

@Entity
@Table(name = "stages")
public class Stage {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private Integer contact_id;

    @ManyToOne
    @JoinTable(name="stage_stage_type",
            joinColumns = @JoinColumn(name = "stage_id"),
            inverseJoinColumns = @JoinColumn(name = "stage_type_id"))
    private StageType stage_type;


//    @ManyToOne
//    @JoinTable(name="application_stage",
//            joinColumns = @JoinColumn(name = "stage_id"),
//            inverseJoinColumns = @JoinColumn(name = "application_id"))
//    Application application;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    public Application getApplication() {
//        return application;
//    }
//
//    public void setApplication(Application application) {
//        this.application = application;
//    }

    public Integer getContact_id() {
        return contact_id;
    }

    public void setContact_id(Integer contact_id) {
        this.contact_id = contact_id;
    }

    public StageType getStage_type() {
        return stage_type;
    }

    public void setStage_type(StageType stage_type) {
        this.stage_type = stage_type;
    }
}
