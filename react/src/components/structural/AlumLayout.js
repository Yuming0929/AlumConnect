import React, {useEffect, useState} from "react";
import { Button, Container, Navbar, Nav, Offcanvas, Form, NavDropdown} from 'react-bootstrap';
import { Link, Outlet, useNavigate } from "react-router-dom";
import crest from "../../assets/uw-crest.svg";
import request from "../../utils/request";

function AlumLayout(props){



    //const loginUser = JSON.parse(sessionStorage.getItem("user"))

    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("user")
        props.setLoginStatus({
            state: false,
            username: "",
            permission: ""
        })
        navigate("/")
    }


    return (
        <>
        <div >
            <Navbar  style={{ backgroundColor: '#C5050C' }} variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="BadgerChat Logo"
                            src={crest}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        校友Connect
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" color="white">主页</Nav.Link>
                        <Nav.Link as={Link} to="/all" color="white">毕业生名册</Nav.Link>
                        {
                            props.loginStatus.permission==="admin"?
                            <>
                            <Nav.Link as={Link} to="manage/user">管理后台</Nav.Link>
                            </>:
                            <>
                            {props.loginStatus.state===true?<>
                            <Nav.Link as={Link} to="/myinfo">我的信息</Nav.Link>
                            </>:<>
                            </>}
                            
                            </>
                        }
                        {
                            props.loginStatus.state?(
                                <>
                                    
                                    
                                    
                                </>
                                
                            )
                            :(
                                <>
                                <Nav.Link as={Link} to="login">登录</Nav.Link>
                                <Nav.Link as={Link} to="register">注册</Nav.Link>
                                </>
                            )


                        }
                    </Nav>
                    {
                        props.loginStatus.state?<>
                            <Nav className="justify-content-end">
                            
                            <Navbar.Text>
                                登录为:
                                <a >  {props.loginStatus.username}</a>
                                {props.loginStatus.permission==="admin"?
                                <><a>  (管理员)|</a>
                                
                                
                                </>:
                                <></>}
                                </Navbar.Text>
                                <Nav.Link  onClick={handleLogout} >(退出登录)</Nav.Link>

                                
                            
                            
                        </Nav>
                        
                        </>
                        :
                        <>
                        
                        
                        </>
                    }
                    
                    
                </Container>

            </Navbar>
            <div >
                <Outlet />
            </div>
        </div>
        
        </>

    )
}

export default AlumLayout;