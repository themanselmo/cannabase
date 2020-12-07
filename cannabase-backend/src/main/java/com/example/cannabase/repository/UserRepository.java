package com.example.cannabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cannabase.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
