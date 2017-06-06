package com.userService.model;


import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
    User findById(Long id);
    User findByUsername(String username);

    void deleteById(long id);

}
