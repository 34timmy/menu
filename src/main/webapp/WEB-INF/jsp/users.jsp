<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
<script type="text/javascript" src="resources/js/userTable.js" defer></script>

<section>
    <table border="1" cellpadding="8" cellspacing="0">
        <thead>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>registered</th>
            <th>enabled</th>
            <th>votetime</th>
        </tr>
        </thead>
        <c:forEach var="user" items="${users}">
            <jsp:useBean id="user" scope="page" type="com.menu.model.User"/>
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.registered} </td>
                <td>${user.enabled} </td>
                <td>${user.votetime} </td>

                <td><a href="${pageContext.request.contextPath}/users/${user.id}">update</a></td>
                <td><a href="${pageContext.request.contextPath}/users/${user.id}">delete</a></td>
                <td></td>

            </tr>
        </c:forEach>
    </table>
</section>
</body>
</html>
