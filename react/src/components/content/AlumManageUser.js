import React, { useEffect, useState, useRef,  } from "react";
import { ListGroup, Container, Col, Row, Button,Form, ListGroupItem, Modal, Toast } from "react-bootstrap";


import request from "../../utils/request";

export default function AlumManageUser(props){

    const [user, setUser] = useState([])

    const [input, setInput] = useState("")

    const usernameRef = useRef();
    const passwordRef = useRef();

    const searchRef = useRef();
    //for modal 新增
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    //for modal 编辑
    const [editShow, setEditShow] = useState(false);
    const handleEditShow = () => setEditShow(true);
    const handleEditClose = () => setEditShow(false);


    const [selectedUser, setSelectedUser] = useState("");
    useEffect(() => {
        request.get("/user/getUser").then(res => {
            if(res.code === '0'){
                setUser(res.data)
            }
            
        })
    }, [])

    function addUser(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if(username === "" || password === ""){
            alert("您必须提供有效的用户名和密码！")
            return ;
        }
        const addUser = {
            name: username,
            password: password,
            permission: "user"
            
        }
        request.post("/user/add", addUser            
        ).then(res => {
            if(res.code === '0'){
                usernameRef.current.value = ""
                passwordRef.current.value = ""
                setUser(res.data)

            }else if(res.code === '-1'){
                alert("添加错误, 用户名可能重复")

            }
            
        })
    }

    function deleteUser(id){
        request.delete("/user/delete/"+ id).then(res => {
            if(res.code === '0'){
                
                setUser(res.data)

            }else if(res.code === '-1'){
                alert("删除错误")

            }
            
        })

    }

    function editUser(user){
        setSelectedUser({id: user.id, name: user.name})
        setEditShow(true);
    }


    let filtered_users = user.filter(u => {
        const u_name = u.name.toString().toLowerCase()
        let filter_name = input;
        return u_name.includes(filter_name)
    })

    function submitEdit(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log("提交的username 为" + username)
        if(username === "" || password === ""){
            alert("您必须提供有效的用户名和密码！")
            return ;
        }
        const editUser = {
            id: selectedUser.id,
            name: username,
            password: password

        }

        request.post("/user/edit", editUser            
        ).then(res => {
            if(res.code === '0'){
                usernameRef.current.value = ""
                passwordRef.current.value = ""

                setUser(res.data)

            }else if(res.code === '-1'){
                
                alert("更改错误")
            }
        })
    }
    

  
    return (
        <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>新增用户</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control placeholder="用户名" ref={usernameRef}></Form.Control>
                <Form.Control placeholder="密码" ref={passwordRef}></Form.Control>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                关闭
            </Button>
            <Button variant="primary" onClick={addUser}>
                提交
            </Button>
            </Modal.Footer>
      </Modal>

        <Modal show={editShow} onHide={handleEditClose}>
            <Modal.Header closeButton>
            <Modal.Title>更改用户</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control placeholder="用户名" ref={usernameRef} defaultValue={selectedUser.name}></Form.Control>
                <Form.Control placeholder="密码" ref={passwordRef}></Form.Control>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
                关闭
            </Button>
            <Button variant="primary" onClick={submitEdit}>
                提交
            </Button>
            </Modal.Footer>
        </Modal>

        
    
        <Container fluid>
            <Row>
                <Col><Form.Control placeholder="查询用户名" value={input} onChange={e => setInput(e.target.value)}></Form.Control></Col>
                <Col><Button>搜索</Button> <Button variant="success" onClick={handleShow}>新增</Button></Col>
                
            </Row>
            <Row><Col>共有{filtered_users.length}条结果</Col></Row>
            <Row>
                <Col>
                    <ListGroup>
                        <Row>
                        <ListGroupItem><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Col>ID</Col>
                                <Col>用户名</Col>
                                <Col>权限</Col>
                                <Col></Col>
                                <Col>操作</Col>
                            </div></ListGroupItem>
                        </Row>
                        {
                        filtered_users.map(u => 
                            <Row key={u.id}>
                            <ListGroup.Item >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Col>{u.id}</Col>
                                <Col>{u.name}</Col>
                                <Col>{u.permission}</Col>
                                
                                
                                {u.permission === "admin"?<>
                                <Col></Col>
                                <Col>管理员</Col>
                                </>:<>
                                <Col></Col>
                                <Col>
                                    <Button variant="outline-primary" onClick={() => editUser(u)}>编辑</Button>
                                    <Button variant="outline-danger" onClick={() => deleteUser(u.id)}>删除</Button>
                                </Col>
                                
                                </>}
                                
                                
                            </div>
                            </ListGroup.Item>
                            </Row>
                            )   
                        }
                    </ListGroup>
                </Col>

                
            </Row>
        </Container>
        </>
    )

}