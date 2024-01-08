package com.example.springboot.dao;


import com.example.springboot.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface UserDao extends Mapper<User> {

    @Select("select * from user")
    List<User> getUser();

    @Select("select * from user where name = #{name} limit 1")
    User findByName(@Param("name") String name);

    @Select("select * from user where name = #{name} and password = #{password} limit 1")
    User findByNameAndPassword(@Param("name") String name, @Param("password") String password);

    @Insert("insert into user values()")
    void insertUser(@Param("name") String name, @Param("password") String password, @Param("permission") String permission);
}
