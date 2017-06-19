# Job Search Tracker Job Service
#### Created by Daniel Butts (https://github.com/danielbutts), Ian Harvey (https://github.com/ith-harvey), and Michael Hathaway (https://github.com/MikeHathaway)
* * *

### *Job Service*
The Job Service is as RESTful API responsible for actions related to the Job and Company entities (e.g. adding new companies and job postings to the system).

### *Technologies*
The service was built using Java Spring utilizing Spring Data JPA and backed by a postgres database.

### *REST API Endpoints*

#### Index Jobs:
*[GET] http://{host}/jobs*

curl -i http://localhost:8080/jobs

#### Show Single Job:
*[GET] http://{host}/jobs/{id}*

curl -i http://localhost:8080/jobs/1

#### Index Companies:
*[GET] http://{host}/jobs*

curl -i http://localhost:8080/companies

#### Show Single Company:
*[GET] http://{host}/jobs/{id}*

curl -i http://localhost:8080/companies/1

#### Create Company (without jobs):
*[POST] http://{host}/users*

curl -i -X POST -H 'Content-Type: application/json' -d '{ "name": "Microsoft", "city": "Seattle", "state": "WA", "note": "They make software" }' http://localhost:8080/companies

#### Create Company (with jobs):
*[POST] http://{host}/users*

curl -i -X POST -H 'Content-Type: application/json' -d '{ "name": "Microsoft", "city": "Seattle", "state": "WA", "note": "They make software", "jobs": [{"description":"This is a developer job", "title":"Software Developer", "url":"https://microsoft.com"}] }' http://localhost:8080/companies

#### Update Company:
*[PATCH] http://{host}/users/{id}*

curl -i -X PATCH -H 'Content-Type: application/json' -d '{ "name": "Microsoft", "city": "Seattle", "state": "WA", "note": "They make software", "jobs": [] }' http://localhost:8080/companies

### *Future Work*
- The service itself has no security so requests can be made directly to the services API rather than through the Company Service with authentication is implemented.
- Additional server-side validation is required to ensure required fields are presenting on all API requests.
- Implement Contact entity to track different points of contact within a Company.
