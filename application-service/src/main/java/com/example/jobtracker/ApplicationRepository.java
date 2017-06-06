package com.example.jobtracker;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by danielbutts on 6/3/17.
 */
public interface ApplicationRepository extends JpaRepository<Application, Long> {

}

