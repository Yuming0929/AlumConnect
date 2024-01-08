
import React, {useEffect, useState} from "react";
import { Button, Container, Row, Col, Nav, Form, NavDropdown} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

export default function AlumManage(props){



    return (
        <>
        {
            props.loginStatus.permission==="admin"?
            <>

            <Container className="flex">
                <div ><h3>管理</h3></div>
                <Row>
                    <Col md={2}>
                        <Nav variant="underline" defaultActiveKey="/manage/user" className="flex-column" style={{ width: '150px', background: '#f0f0f0', textAlign: "center" }}>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/manage/user">用户管理</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/manage/alum">校友管理</Nav.Link>
                            </Nav.Item>

                            
                        </Nav>
                    </Col>
                    <Col>
                    
                        <Outlet />
                    </Col>

                </Row>
                
            </Container>
            
            </>:
            <><h1>您没有权限访问此页面</h1></>
        }
        </>
    )

}