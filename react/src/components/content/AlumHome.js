import React, {useEffect, useState} from "react";
import { Button, Container, Row, Col, Carousel, Form} from 'react-bootstrap';
import { Link, Outlet, useNavigate } from "react-router-dom";
import madison1 from "../../assets/madison1.jpg";
import madison from "../../assets/madison.jpg";
import request from "../../utils/request";
import AlumCard from "./AlumCard";

function AlumHome(props) {


    const list = props.alum;
    const [alum, setAlum] = useState([])


    useEffect(() => {
        if(props.loginStatus.state===true){
            request.get("/alum/getAlum").then(res => {
                if(res.code === "0"){
                    setAlum(res.data)
                }
            })
        }
        

    }, [])

    return (<>
    <Container>
        <Row style={{height: "600px"}}>
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img src={madison1} />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={madison} />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>        
            
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={{width: "auto", textAlign:"center", margin: "1rem"}}>
                <h2>欢迎来到校友Connect!</h2>
                <h4>Welcome to AlumConnect!</h4>

                </div>
            </Col>


        </Row>
        
        
            <hr></hr>
            {
                //此处通过判断登录来展示信息
                props.loginStatus.state?<>
                <Row>
                    <Col></Col>
                    <Col md={8}>
                    <Form.Control placeholder="搜索关键字"></Form.Control>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <br></br>
                <Row>
                {alum===null?<></>:
                alum.map(a => {
                    return <Col md={4} key={a.id}>
                        <AlumCard alum={a}>
                        </AlumCard>
                    </Col>
                })}

                </Row>
                </>:
                <><h2>**请先登录以查看校友信息**</h2>
                <hr></hr>
                
                </>
                }


    </Container>
    

    </>
    )
}

export default AlumHome;