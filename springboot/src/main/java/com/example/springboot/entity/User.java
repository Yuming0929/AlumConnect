package com.example.springboot.entity;

import javax.persistence.*;


@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "permission")
    private String permission;

    @Transient
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
//    public User(String name, String password, String sex, Integer age) {
//        this.name = name;
//        this.password = password;
//        this.sex = sex;
//        this.age = age;
//    }

    public User(String name, String password, String permission) {
        this.name = name;
        this.password = password;
        this.permission = permission;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public void setAsAdmin(User user){
        user.setPermission("admin");
    }
    public void setAsUser(User user){
        user.setPermission("user");
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }
}
