package com.example.springboot.entity;


import javax.persistence.*;

@Table(name = "alum")
public class Alum {
    public Alum(String user_name, String name, String year, String major, String location) {
        this.user_name = user_name;
        this.name = name;
        this.year = year;
        this.major = major;
        this.location = location;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_name")
    private String user_name;

    @Column(name = "name")
    private String name;

    @Column(name = "english")
    private String english;

    @Column(name = "year")
    private String year;

    @Column(name = "major")
    private String major;

    @Column(name = "location")
    private  String location;

    @Column(name = "undergrad")
    private String undergrad;

    @Column(name = "grad")
    private String grad;

    @Column(name = "phd")
    private String phd;

    @Column(name = "work")
    private String work;

    @Column(name = "email")
    private String email;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getUndergrad() {
        return undergrad;
    }

    public void setUndergrad(String undergrad) {
        this.undergrad = undergrad;
    }

    public String getGrad() {
        return grad;
    }

    public void setGrad(String grad) {
        this.grad = grad;
    }

    public String getPhd() {
        return phd;
    }

    public void setPhd(String phd) {
        this.phd = phd;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
