package com.example.springboot.service;


import com.example.springboot.common.Result;
import com.example.springboot.dao.AlumDao;
import com.example.springboot.entity.Alum;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class AlumService {

    @Resource
    private AlumDao alumDao;



    public List<Alum> getAlum(){
        return alumDao.getAlum();
    }

    public Result matchAlum(Alum user_name){

        Alum alum = alumDao.selectByUser(user_name.getUser_name());
        //System.out.println(user_name.getUser_name());
        if(alum != null){
            return Result.success(alum);
        }else{
            return Result.error("no match");
        }


    }

    public Result add(Alum alum){

        alumDao.insertSelective(alum);

        return Result.success();

    }

    public Result delete(Alum alum){

        alumDao.deleteAlum(alum.getUser_name());

        return Result.success();
    }

}
