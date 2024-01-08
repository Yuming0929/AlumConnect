
import React, { useEffect, useState, useRef,  } from "react";
import { ListGroup, Container, Col, Row, Button,Form, Alert, Modal, Image, Dropdown } from "react-bootstrap";

import alum from "../../assets/alum.jpg";
import request from "../../utils/request";

export default function AlumInfo(props){
    
    let years = ["2018", "2019", "2020", "2021", "2022", "2023"]

    const passwordRef = useRef();

  
    //ref for 信息表单
    const nameRef = useRef("");
    const englishRef = useRef("");
    const yearRef = useRef("");
    const majorRef = useRef("");
    const locationRef = useRef("");
    const undergradRef = useRef("");
    const gradRef = useRef("");
    const phdRef = useRef("");
    const workRef = useRef("");
    const emailRef = useRef("");

    const [inAlum, setInAlum] = useState();

    const user = JSON.parse(sessionStorage.getItem("user"));
    useEffect(() => {

        //mybatis查询中文有点问题，所以我们先要把user_name变成一个js object
        const alum = {
            user_name: user.name
        }
        if(props.loginStatus.state===true){
            
            request.post("/alum/match", alum).then(res => {
                if(res.code === "0"){

                    setInAlum(res.data)
                }

            })
        }
    }, [])

    function submitEdit(){
        const password = passwordRef.current.value;
        if( password === ""){
            alert("您必须提供有效的用户名和密码！")
            return ;
        }
        const editUser = {
            id: user.id,
            name: user.name,
            password: password

        }

        request.post("/user/editmyself", editUser            
        ).then(res => {
            if(res.code === '0'){
                passwordRef.current.value = ""

                alert("更改成功")
                sessionStorage.setItem("user", JSON.stringify(res.data))

            }else if(res.code === '-1'){
                
                alert("更改错误")
            }
        })
    }


    const handleSave = () => {
        //检查必填项
        if(nameRef.current.value===""||yearRef.current.value===""||majorRef.current.value===""||locationRef.current.value===""){
            alert("请填写完必填项!")
            return
        }
        const alum = {
            user_name: user.name,
            name: nameRef.current.value,
            english: englishRef.current.value,
            year: yearRef.current.value,
            major: majorRef.current.value,
            location: locationRef.current.value,
            undergrad: undergradRef.current.value,
            grad: gradRef.current.value,
            phd: phdRef.current.value,
            work: workRef.current.value,
            email: emailRef.current.value
        }

        request.post("/alum/add", alum            
        ).then(res => {
            if(res.code === '0'){
                alert("更改成功")
                setInAlum(alum)

            }else if(res.code === '-1'){
                
                alert("更改错误")
            }
        })
    }

    const handleDelete = () => {
        const a = {
            user_name: user.name
        }
        request.post("/alum/delete", a            
        ).then(res => {
            if(res.code === '0'){
                alert("删除成功")
                setInAlum("")

            }else if(res.code === '-1'){
                
                alert("删除错误")
            }
        })
    }
    


    return (
        <>
        <Container>
            <Row>
                <Col>
                <h3>我的信息</h3>
                </Col>
            </Row>
            <Row>
                
                <Col md={2}>
                    <Image src={alum} roundedCircle fluid/>
                    
                </Col>
                <Col style={{}}>
                <h2>账户信息</h2>
                <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>用户名</Form.Label>
                    <Form.Control type="name" disabled placeholder={user.name}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>密码</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                    <Button onClick={submitEdit} >修改密码</Button>
                    </Form.Group>
                    
                </Row>
                
                <h2>校友信息</h2>
                
                <Row><Col><Alert variant="warning">请注意，以下信息收集用于主页校友展示并且所有校友可见。一切都是自愿填写，您的分享对我们的社区和网络发展有着重要的意义！</Alert></Col></Row>
                {inAlum!=null?<><Row><Col><i>您的信息目前已经展示到主页</i></Col></Row></>:<><Row><Col><i>您的信息目前并未展示到主页</i></Col></Row></>}
                

                {
                    (inAlum===undefined||inAlum==="")?<>
                    <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>姓名<a style={{color: "#C5050C"}}>*(必填)</a></Form.Label>
                            <Form.Control ref={nameRef}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>英文名</Form.Label>
                            <Form.Control ref={englishRef}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>毕业年份 (例如2024)<a style={{color: "#C5050C"}}>*(必填)</a></Form.Label>
                            <Form.Control ref={yearRef}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>专业<a style={{color: "#C5050C"}}>*(必填)</a>请填写英文名例如 Mathematics</Form.Label>
                            <Form.Control ref={majorRef}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>国家或地区<a style={{color: "#C5050C"}}>*(必填)</a></Form.Label>
                            <Form.Control ref={locationRef}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>本科院校 (以官方中文名为准)</Form.Label>
                            <Form.Control ref={undergradRef}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>研究生院校 (若无请留空)</Form.Label>
                            <Form.Control ref={gradRef}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>博士院校 (若无请留空)</Form.Label>
                            <Form.Control ref={phdRef}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>工作领域 (若无请留空)</Form.Label>
                            <Form.Control ref={workRef}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>联系邮箱 (若无请留空)</Form.Label>
                            <Form.Control ref={emailRef}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={handleSave}>
                            保存并展示我的信息！
                        </Button>
                    </Col>
                </Row>
                    </>:<>
                    
                    <Button variant="danger" onClick={handleDelete}>删除我的信息</Button>
                    
                    </>

                }
                
                </Form>
                </Col>

            </Row>
        </Container>
        </>

    )
}