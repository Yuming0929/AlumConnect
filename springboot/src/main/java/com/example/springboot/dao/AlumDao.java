package com.example.springboot.dao;


import com.example.springboot.entity.Alum;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface AlumDao extends Mapper<Alum>{


    @Select("select * from alum")
    List<Alum> getAlum();


    @Select("select * from alum where user_name = #{user_name} limit 1")
    Alum selectByUser(@Param("user_name") String user_name);


    @Delete("delete from alum where user_name = #{user_name}")
    void deleteAlum(@Param("user_name") String user_name);
    //void insert(@Param("user_name") String user_name,@Param("name") String name, @Param("english") String english)
}
