# Event Tracker Project

## Individual portfolio project for Skill Distillery

## Overview
The backend and URI mapping to perform basic CRUD functions on a database of parks, intended for use in Java version 1.8

## REST Endpoints

| HTTP Verb | URI                      | Request Body            | Response Body  | Purpose |
|-----------|--------------------------|-------------------------|----------------|---------|
| GET       | `/api/parks`             |                         | List of Parks  | **List** or **collection** endpoint |
| GET       | `/api/recipes/{id}`      |                         | Single Park    | **Retrieve** endpoint |
| POST      | `/api/parks`             | JSON for a new Park     | Created Park   | **Create** endpoint |
| PUT       | `/api/parks/{id}`        | JSON for updating Park  | Updated Park   | **Replace** endpoint |
| DELETE    | `/api/parks/{id}`        |                         | Delete Park    | **Delete** route |

## How to Run
use the URI's listed in the above table on the following site to preforme basic CRUD Functions on a database of parks
### TODO!!! URL OF DEPLOYED APP

## Technologies Used

* Java
* Spring, Spring Boot
* REST
* Postman
* JPA, JPA repositories
* mySQL, mySQL work bench
* Eclipse
* JSON
* Gradle
* Junit 5
* Atom

## Lessons Learned
* Learned to use rest controllers for URI mappings, gained experience with path variables and request bodies
* Used JSON's to create and edit data via REST
* Practiced syntax using JPA repositories allowing my program to access a mySQL database
* Created a schema using mySQL work bench
* Used Postman to test URI mappings / JPA functionality
* Learned the applications of GET, POST, PUT, and DELETE HTTP verbs
