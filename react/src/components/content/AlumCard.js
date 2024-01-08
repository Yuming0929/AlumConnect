import React, {useEffect, useState} from "react";
import { Footer, Container, Row, Col, ListGroup, Card} from 'react-bootstrap';


export default function AlumCard(props){


    function isBlank(val){
        if(val === null || val ===undefined || val === ""){
            return true
        }else{
            return false
        }
    }

    return (
        <Card style={{margin: "0.5rem", padding: "1rem", height: "250px"}} className="text-center">
                <Card.Title>
                <h3>{props.alum.name} {props.alum.english} {props.alum.year}届</h3>
                </Card.Title>
                <Card.Text>


               
                
                <h5>专业：{props.alum.major}</h5>
                <h5>地区：{props.alum.location}</h5>
            
            {
                isBlank(props.alum.undergrad)?<></>:<><h5>本科院校: {props.alum.undergrad}</h5></>
            }
            {
                isBlank(props.alum.grad)?<></>:<><h5>研究生院校: {props.alum.grad}</h5></>
            }
            {
                isBlank(props.alum.phd)?<></>:<><h5>博士院校: {props.alum.phd}</h5></>
            }
            {
                isBlank(props.alum.work)?<></>:<><h5>工作领域: {props.alum.work}</h5></>
            }
            {
                isBlank(props.alum.email)?<></>:<><h5>联系邮箱: {props.alum.email}</h5></>
            }
             </Card.Text>
        </Card>
    )
}