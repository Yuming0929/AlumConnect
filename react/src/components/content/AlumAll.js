import React from "react";
import { Accordion, Container, Col, Row } from "react-bootstrap";



export default function AlumAll(){

    //所有毕业生数据可以传入，也可以手段录入
    //此模板为假数据

    return (
        <>
        <div style={{height: 100}}>

        </div>
        <div style={{width: "auto"}}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                    <Accordion defaultActiveKey={["0"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>2018届（毕业年份）</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>1班</Accordion.Header>
                                        <Accordion.Body>(随机生成)
                                            张瑞雪
                                            李嘉宁
                                            王梓涵
                                            刘思宇
                                            陈文慧
                                            杨晨曦
                                            赵子轩
                                            周雅琪
                                            许家豪
                                            郭心怡
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>2班</Accordion.Header>
                                        <Accordion.Body>
                                            冯梦洁
                                            沈韵宁
                                            谢文博
                                            韩思淇
                                            孙晨辰
                                            袁嘉颖
                                            蒋佳琳
                                            朱雨萱
                                            柳子涵
                                            许睿哲
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>2019届</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>2020届</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>2021届</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>2022届</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>2023届</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                    </Col>
                    <Col></Col>
                </Row>

            </Container>
            

        </div>
        
        </>
        
      );
}