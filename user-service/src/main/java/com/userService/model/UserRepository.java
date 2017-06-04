package com.userService.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.userService.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

    public List<User> findByLastName(String lastName);

}
