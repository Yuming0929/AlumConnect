package com.example.springboot.common;

import cn.hutool.core.util.StrUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.example.springboot.entity.User;
import com.example.springboot.exception.CustomException;
import com.example.springboot.service.UserService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class JwtInterceptor implements HandlerInterceptor {

    private static final Logger log = LoggerFactory.getLogger(JwtInterceptor.class);

    @Resource
    private UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){
        //1 获取token
        String token = request.getHeader("token");

        if(StrUtil.isBlank(token)){
            token = request.getParameter("token");
        }
        //2 开始执行认证
        if(StrUtil.isBlank(token)){
            throw new CustomException("无token，请重新验证");
        }
        //获取token中的userId
        String userId;
        User user;


        try{
            userId = JWT.decode(token).getAudience().get(0);
            //System.out.println("获取的user id是" + userId);
            //根据token中的userid查询数据库
            user = userService.findById(Integer.parseInt(userId));
        }catch (Exception e){
            String errMsg = "token验证失败，请重新登录";
            log.error(errMsg + ", token=" + token, e);
            throw new CustomException(errMsg);
        }
        if(user == null){
            throw new CustomException("用户不存在,请重新登录");
        }
        try{
            //用户密码加签验证
            JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(user.getPassword())).build();
            jwtVerifier.verify(token);
        }catch (JWTVerificationException e){
            throw new CustomException("token验证失败，请重新登录");
        }
        return true;
    }

}
