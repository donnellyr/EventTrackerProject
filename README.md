# Event Tracker Project

## Individual portfolio project for Skill Distillery

## Overview
A site utilizing Java, spring-boot, REST, and JavaScript to perform basic CRUD functions on a database of parks, intended for use in Java version 1.8

## REST Endpoints

| HTTP Verb | URI                      | Request Body            | Response Body  | Purpose |
|-----------|--------------------------|-------------------------|----------------|---------|
| GET       | `/api/parks`             |                         | List of Parks  | **List** or **collection** endpoint |
| GET       | `/api/recipes/{id}`      |                         | Single Park    | **Retrieve** endpoint |
| POST      | `/api/parks`             | JSON for a new Park     | Created Park   | **Create** endpoint |
| PUT       | `/api/parks/{id}`        | JSON for updating Park  | Updated Park   | **Replace** endpoint |
| DELETE    | `/api/parks/{id}`        |                         | Delete Park    | **Delete** route |

## How to Run
use the URI's listed in the above table on the following site to perform basic CRUD Functions on a database of parks
### URL OF DEPLOYED APP
http://3.230.224.45:8080/ParkTracker/
## Technologies Used

* Java
* JavaScript
* Spring, Spring Boot
* REST
* Postman
* JPA, JPA repositories
* mySQL, mySQL work bench
* Eclipse, SpringToolSuite4
* JSON
* Gradle
* Junit 5
* Atom
* VS code
* TypeScript, Angular, Node JS
* HTML, CSS, Bootstrap

## Lessons Learned
* Learned to use rest controllers for URI mappings, gained experience with path variables and request bodies
* Used JSON's to create and edit data via REST
* Practiced syntax using JPA repositories allowing my program to access a mySQL database
* Created a schema using mySQL work bench
* Used Postman to test URI mappings / JPA functionality
* Learned the applications of GET, POST, PUT, and DELETE HTTP verbs
* Learned DOM manipulation using JavaScript to dynamically display web pages and perform CRUD functions
* Used event listeners to trigger functions when the right conditions were met
* Used XMLHttpRequest's to route to REST endpoints
* Learned to use angular / typescript to make a dynamic front end to my site
* Incorporated node js, used ng statements to dynamically display data
* Incorporated CSS and Bootstrap for frontend styling
