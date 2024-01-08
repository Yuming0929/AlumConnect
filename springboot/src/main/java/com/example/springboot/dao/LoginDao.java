package com.example.springboot.dao;


import com.example.springboot.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDao {

    User login();

}
