package com.example.springboot.service;


import com.example.springboot.dao.LoginDao;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Resource
    private LoginDao loginDao;
}
