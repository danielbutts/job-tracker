package com.userService.model;


import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
    User findById(Long id);

    void deleteById(long id);
}
