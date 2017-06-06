package com.example.jobtracker;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

/**
 * Created by danielbutts on 6/4/17.
 */
public interface ActionRepository extends JpaRepository<Action, Long> {

    Set<Action> findByUserId(Integer id);
}
