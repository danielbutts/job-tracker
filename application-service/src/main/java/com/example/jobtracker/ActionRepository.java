package com.example.jobtracker;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by danielbutts on 6/4/17.
 */
public interface ActionRepository extends JpaRepository<Action, Long> {
}
