package com.example.jobtracker;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

/**
 * Created by danielbutts on 6/3/17.
 */
public interface StageRepository extends JpaRepository<Stage, Long> {

    Set<Stage> findByApplicationId(Long id);
}

