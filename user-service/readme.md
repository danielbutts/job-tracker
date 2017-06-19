# Job Search Tracker User Service
#### Created by Daniel Butts (https://github.com/danielbutts), Ian Harvey (https://github.com/ith-harvey), and Michael Hathaway (https://github.com/MikeHathaway)
* * *

### *User Service*
The User Service is as RESTful API responsible for actions related to the User entity (e.g. creating and maintaining user accounts within the system as well as verifying if a provided clear-text password is valid a given user).

### *Technologies*
The service was built using Java Spring utilizing Spring Data JPA and backed by a postgres database.

### *REST API Endpoints*

#### Index Users:
*[GET] http://{host}/users*

curl -i http://localhost:8080/users

#### Show Single User:
*[GET] http://{host}/users/{id}*

curl -i http://localhost:8080/users/1

#### Create User:
*[POST] http://{host}/users*

curl -i -X POST -H 'Content-Type: application/json' -d '{ "username": "testuser", "city": "Seattle", "state": "WA", "email": "test@user.com", "password": "password" }' http://localhost:8080/users

#### Update User:
*[PUT] http://{host}/users/{id}*

curl -i -X PUT -H 'Content-Type: application/json' -d '{ "username": "testuser", "city": "Seattle", "state": "WA", "email": "test@user.com", "password": "password" }' http://localhost:8080/users/1

#### Delete User:
*[DELTE] http://{host}/users/{id}*

curl -i -X DELETE -H 'Content-Type: application/json' http://localhost:8080/users/1

#### Authenticate User:
*[POST] http://{host}/users/login*

curl -i -X POST -H 'Content-Type: application/json'  -d '{ "username": "testuser", "password": "password" }' http://localhost:8080/users/login

### *Future Work*
- The service itself has no security so requests can be made directly to the services API rather than through the Client Service where authentication is implemented.
- Additional server-side validation is required to ensure required fields are presenting on all API requests.
