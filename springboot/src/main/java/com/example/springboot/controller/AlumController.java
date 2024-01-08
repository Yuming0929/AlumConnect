package com.example.springboot.controller;


import com.example.springboot.common.Result;
import com.example.springboot.entity.Alum;
import com.example.springboot.service.AlumService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alum")
@CrossOrigin(origins = "http://localhost:3000")//来于react前端对接
public class AlumController {


    @Resource
    private AlumService alumService;

    @GetMapping("/getAlum")
    public Result getAlum(){

        List<Alum> list = alumService.getAlum();
        return Result.success(list);
    }

    @PostMapping("/match")
    public Result match(@RequestBody Alum user_name){

        return alumService.matchAlum(user_name);

    }

    @PostMapping("/add")
    public Result add(@RequestBody Alum alum){

        return alumService.add(alum);
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Alum alum){
        return alumService.delete(alum);
    }
}
