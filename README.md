# menu 

## REST API application for restaurant management with English and Russian locales.

### Also app deployed on Docker on remote server.To access the application, go to: <a href="http://198.211.120.104:8081">App</a>


Frontend: <a href="https://angular.io/"> Angular 2</a>

Backend:
- 1)<a href="https://spring.io/">Spring (Data JPA, Security, MVC)</a>
- 2)<a href="http://hibernate.org/">Hibernate</a>
         
Default database - HSQLDB. Also, you can change profile and use PostgreSQL.

To start the project, you need: Java JDK 8, Tomcat 8+, Maven, NodeJS.

Set up:

         1)Create system environment "MENU_ROOT" with folder to directory with project. For example: MENU_ROOT = "C:\menu.
         2) Go to the project root path and launh command "mvn install" from console.
         3) Copy .war file in Tomcat's webapp folder and launch Tomcat
         4) Go to localhost:8080/
