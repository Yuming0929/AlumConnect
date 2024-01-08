package com.example.springboot.common;

import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.StrUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.springboot.entity.User;
import com.example.springboot.service.UserService;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.Date;

@Component
public class JwtTokenUtils {

    private static UserService staticUserService;
    private static final Logger log = LoggerFactory.getLogger(JwtTokenUtils.class);

    @Resource
    private UserService userService;

    @PostConstruct
    private void userService(){
        staticUserService = userService;
    };

    //generate token


    public static String genToken(String userId, String password){
        return JWT.create().withAudience(userId) //将user id保存到 token里面 作为载荷
                .withExpiresAt(DateUtil.offsetHour(new Date(), 2))
                .sign(Algorithm.HMAC256(password));  //以password作为密钥

    }

    /*
    *
    * */
    public static User getCurrentUser(){
        String token = null;
        try{
            HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
            token = request.getHeader("token");
            if (StrUtil.isBlank(token)) {
                token = request.getParameter("token");

            }
            if(StrUtil.isBlank(token)){
                log.error("获取当前token 失败， token：", token);
                return null;
            }
            //解析token
            String userId = JWT.decode(token).getAudience().get(0);
            return staticUserService.findById(Integer.valueOf(userId));
        }catch (Exception e){
            log.error("获取当前用户信息失败， token: ", token, e);
            return null;
        }
    }
}
