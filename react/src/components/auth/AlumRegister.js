import React, {useEffect, useState, useRef} from "react";
import { Alert, Container, Form, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';


export default function AlumRegister() {


    return <>
        

        <Container>
            <Row>
                
                <Col>
                    
                    <h1>注册</h1>
                    <br></br>
                    <Alert variant="danger"><h4 style={{color: "#C5050C"}}>为保护数据隐私，此网站采用预创建制，每一位校友会被分配自己的账号密码。请联系学校负责人获取账号信息</h4></Alert>

                    
                </Col>
                
            </Row>
        </Container>

        
    </>
}