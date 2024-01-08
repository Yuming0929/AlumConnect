import axios from "axios";

//创建axios对象
const request = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000
})

//request 拦截
//可以自请发送钱对请求做一些处理
//比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';

    //设置请求头
    const user = sessionStorage.getItem("user");
    if(user){
        config.headers['token'] = JSON.parse(user).token;
    }
    
    return config
}, error => {
    return Promise.reject(error);
});

//response拦截器
request.interceptors.response.use(
    response => {
        //response.data即为后端返回的Result
        let res = response.data;
        //兼容服务端返回的string
        if(typeof res === 'string'){
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err ' + error)
        return Promise.reject(error)
    }
)

export default request;