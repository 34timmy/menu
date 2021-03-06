package com.menu.project.web.handler;

import com.menu.project.util.exception.ErrorInfo;
import com.menu.project.web.json.JsonUtil;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Dreval Viacheslav on 10.12.2016.
 */
public class CustomRestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {

//        As we don't need Tomcat HTML Exception we override behavior
//        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");

        //new behavior produces JSON Exception
        ErrorInfo errorDTO = new ErrorInfo(authException.getClass().getSimpleName(), authException);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.getWriter().print(JsonUtil.writeValue(errorDTO));
    }
}
