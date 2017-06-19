# Job Search Tracker Application Service
#### Created by Daniel Butts (https://github.com/danielbutts), Ian Harvey (https://github.com/ith-harvey), and Michael Hathaway (https://github.com/MikeHathaway)
* * *

### *Application Service*
The Application Service is as RESTful API responsible for actions related to the Application, Stage, and Action entities (e.g. tracking individual progress for a job posting in the system).

### *Technologies*
The service was built using Java Spring utilizing Spring Data JPA and backed by a postgres database.

### *REST API Endpoints*

#### Index Applications:
*[GET] http://{host}/applications*

curl -i http://localhost:8080/applications

#### Show Single Application:
*[GET] http://{host}/applications/{id}*

curl -i http://localhost:8080/applications/1

#### Create Application:
*[POST] http://{host}/applications*

curl -i -X POST -H 'Content-Type: application/json' -d '{"jobId": 2, "userId": 1, "notes": "Saw a posting for a software development lead. I have friend that works there. Company is building Uber-for-umbrellas." }' http://localhost:8080/applications

#### Update Application:
*[PATCH] http://{host}/applications/{id}*

curl -i -X PATCH -H 'Content-Type: application/json' -d '{"jobId": 1, "userId": 2, "notes": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas.", "stages": [{"contactId": 3, "stageType": 4}]}' http://localhost:8080/applications/1

#### Index Actions:
*[GET] http://{host}/actions*

curl -i http://localhost:8080/actions

#### Show Single Action:
*[GET] http://{host}/actions/{id}*

curl -i http://localhost:8080/actions/1

#### Create Action:
*[POST] http://{host}/applications*

curl -i -X POST -H 'Content-Type: application/json' -d '{"createDate": "2017-06-05 05:44:26.718", "activeDate": "2017-06-05 05:44:26.718", "applicationId": 1, "isActive": true, "isComplete": false, "message": "Congratulations on getting a phone screen. Be sure to follow up with Bob Smith by 6/5/17.", "userId":1}' http://localhost:8080/actions

#### Update Action:
*[PATCH] http://{host}/actions/{id}*

curl -i -X PATCH -H 'Content-Type: application/json' -d -d '{"isActive": false}'  http://localhost:8080/applications/1

#### Index Stages:
*[GET] http://{host}/stages*

curl -i http://localhost:8080/stages

#### Index Stage Types:
*[GET] http://{host}/stages/types*

curl -i http://localhost:8080/stages/types

#### Show Single Stage:
*[GET] http://{host}/stages/{id}*

curl -i http://localhost:8080/stages/1

### *Future Work*
- The service itself has no security so requests can be made directly to the services API rather than through the Company Service where authentication is implemented.
- Additional server-side validation is required to ensure required fields are presenting on all API requests.
- Implement Contact entity to track different points of contact within a Company.
