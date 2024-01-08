package com.example.springboot.service;


import com.example.springboot.common.JwtTokenUtils;
import com.example.springboot.common.Result;
import com.example.springboot.dao.UserDao;
import com.example.springboot.entity.User;
import com.example.springboot.exception.CustomException;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Resource
    private UserDao userDao;

    public List<User> getUser(){

        return userDao.getUser();
    }

    public Result register(User user){
        User registerUser = userDao.findByName(user.getName());
        //如果用户存在，返回失败 -1
        if(registerUser != null){

            throw new CustomException("用户名已存在");

        }

        return null;
    }

    public Result login(User user){
        //1. 非空判断, 可以交给前端

        //2. 从数据里面根据这个用户名，密码查询对于信息，如果存在
        User loginUser= userDao.findByNameAndPassword(user.getName(), user.getPassword());
        //生成该登录用户对应的token

        if(loginUser == null){
            return Result.error("用户不存在");
        }else{
            //返回用户权限
            String token = JwtTokenUtils.genToken(loginUser.getId().toString(), loginUser.getPassword());
            loginUser.setToken(token);
            return Result.success(loginUser);
        }

    }

    public Result add(User user){

        User addUser = userDao.findByName(user.getName());
        //System.out.println(user.getName());
        if(addUser != null){
            return Result.error("用户已存在");
        }
        if (user.getPassword() == null) {
            user.setPassword("123456");
        }
        userDao.insertSelective(user);

        return Result.success();
    }

    public void delete(Integer id){
        userDao.deleteByPrimaryKey(id);
    }

    public void update(User user){
        userDao.updateByPrimaryKeySelective(user);

    }

    public User updateMyself(User user){
        userDao.updateByPrimaryKeySelective(user);
        User loginUser  = userDao.findByName(user.getName());
        String token = JwtTokenUtils.genToken(loginUser.getId().toString(), loginUser.getPassword());
        loginUser.setToken(token);
        return loginUser;
    }

    public User findById(Integer id) {
        return userDao.selectByPrimaryKey(id);
    }
}
