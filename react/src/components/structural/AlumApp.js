import React, {useState, useEffect} from "react";
import {Route, BrowserRouter,Routes} from "react-router-dom";
import AlumLayout from "./AlumLayout";
import AlumLogin from "../auth/AlumLogin";
import AlumHome from "../content/AlumHome";
import AlumRegister from "../auth/AlumRegister";
import AlumManage from "../content/AlumManage";
import AlumAll from "../content/AlumAll";
import AlumManageUser from "../content/AlumManageUser";
import AlumManageAlum from "../content/AlumManageAlum";
import AlumInfo from "../content/AlumInfo";
import AlumHall from "../content/AlumHall";
import request from "../../utils/request";
function AlumApp() {


    const [loginStatus, setLoginStatus] = useState({
        state: false,
        username: "",
        permission: ""
    })

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if(user != null){
            setLoginStatus({
                state: true,
                username: user.name,
                permission: user.permission
            })
        }else{
            
        }
    },[]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AlumLayout loginStatus={loginStatus} setLoginStatus={setLoginStatus} />}>
                    <Route index element={<AlumHome loginStatus={loginStatus}/>}></Route>
                    <Route path="/login" element={<AlumLogin loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>}/>
                    <Route path="/register" element={<AlumRegister/>}/>
                    <Route path="/manage" element={<AlumManage loginStatus={loginStatus}/>}>
                        <Route path="/manage/user" element={<AlumManageUser loginStatus={loginStatus}/>}/>

                        <Route path="/manage/alum" element={<AlumManageAlum loginStatus={loginStatus}/>}/>
                    </Route>
                    <Route path="/myinfo" element={<AlumInfo loginStatus={loginStatus}/>} />
                    <Route path="/all" element={<AlumAll/>}/>
                    <Route path="/hall" element={<AlumHall/>}/>
                </Route>
                
            </Routes>
        
        </BrowserRouter>
    )
}

export default AlumApp;