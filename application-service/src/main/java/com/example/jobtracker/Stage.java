package com.example.jobtracker;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by danielbutts on 6/3/17.
 */

@Entity
@Table(name = "stages")
public class Stage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer contact_id;
    private StageType stage_type;

    @ManyToOne
    @JoinTable(name="application_stage",
            joinColumns = @JoinColumn(name = "stage_id"),
            inverseJoinColumns = @JoinColumn(name = "application_id"))
    @JsonIgnore
    Application application;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

    public Integer getContact_id() {
        return contact_id;
    }

    public void setContact_id(Integer contact_id) {
        this.contact_id = contact_id;
    }

    public StageType getStage_type() {
        return stage_type;
    }

    public void setStage_type(Integer stage_type_id) {
        this.stage_type = StageType.getById(stage_type_id);
    }

    public enum StageType {
        closed(-1),
        target(0),
        outreach(1),
        response(2),
        informational(3),
        coffee(3),
        call(3),
        apply(4),
        screening(5),
        in_person(6),
        technical(7),
        takehome(8),
        offer(9);

        private Integer id;

        StageType(Integer id) {
            this.id = id;
        }

        public static StageType getById(Integer id) {
            for(StageType e : values()) {
                if(e.id.equals(id)) return e;
            }
            return null;
        }
    }
}
