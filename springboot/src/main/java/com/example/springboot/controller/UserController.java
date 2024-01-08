package com.example.springboot.controller;


import com.example.springboot.common.Result;
import com.example.springboot.dao.UserDao;
import com.example.springboot.entity.User;
import com.example.springboot.service.LoginService;
import com.example.springboot.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")//来于react前端对接
public class UserController {

    @Resource
    private UserService userService;




    @GetMapping("/getUser")
    public Result getUser(){
        List<User> list = userService.getUser();
        return Result.success(list);

        //or simply use tk.mybatis
        // return userDao.selectAll();
    }

    @PostMapping("/login")
    public Result login(@RequestBody User user){

        Result loginUser= userService.login(user);
        return loginUser;
    }

    @PostMapping("/add")
    public Result add(@RequestBody User user){

        Result addUserResult = userService.add(user);
        List<User> list = userService.getUser();
        if(!addUserResult.getCode().equals("0")){
            return Result.error("");
        }
        return Result.success(list);
    }

    @DeleteMapping("/delete/{id}")
    public Result del(@PathVariable Integer id){
        userService.delete(id);
        List<User> list = userService.getUser();
        return Result.success(list);

    }


    @PostMapping("/edit")
    public Result update(@RequestBody User user){

        userService.update(user);
        List<User> list = userService.getUser();
        return Result.success(list);
    }

    @PostMapping("/editmyself")
    public Result edit(@RequestBody User user){

        User returnUser = userService.updateMyself(user);

        return Result.success(returnUser);
    }





}


