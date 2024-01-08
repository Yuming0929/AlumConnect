import React, {useEffect, useState, useRef} from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import request from "../../utils/request";


export default function AlumLogin(props) {


    const usernameRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    function handle_login() {

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if(username === "" || password === ""){
            alert("您必须提供有效的用户名和密码！")
            return ;
        }
        const user = {
            name: username,
            password: password
        }
        request.post("/user/login", user            
        ).then(res => {
            if(res.code === '0'){
                alert("登录成功")

                props.setLoginStatus({state: true, username: username, permission: res.data.permission});
                sessionStorage.setItem("user", JSON.stringify(res.data))
                navigate('/')
            }else if(res.code === '-1'){
                console.log(username)
                alert("账号或密码错误")
            }
            
        })

    }
    return <>
        

        <Container>
            <Row></Row>
            <Row>
                <Col></Col>
                
                <Col md={6}>
                <h1>登录</h1>
                <p>此网站为校园私有平台，请联系学校负责人创建登录</p>
                <Form.Label htmlFor="username">用户名</Form.Label>
                <Form.Control id="username" ref={usernameRef}></Form.Control>
                <Form.Label htmlFor="password">密码</Form.Label>
                <Form.Control id="password" ref={passwordRef} type='password'></Form.Control>
                <Button onClick={handle_login}>Log me in!</Button>
                
                </Col>
                <Col></Col>
            </Row>

        </Container>
        
    </>
}