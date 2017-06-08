# Job - tracker
job tracking app for anyone in the market.




# Jobs

#### GET Request
HTTP GET https://job-tracker-job-service.herokuapp.com/jobs

HTTP GET https://job-tracker-job-service.herokuapp.com/:id

#### POST Request
  `curl -i -X POST -H 'Content-Type: application/json' -d '{"title": "taco maker", "url": "www.google.com", "description": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas.", "company":{"id":"43","name": "CNN", "city": "Fake News", "state": "TX", "note": "It be a cool company", "url": "CNN.com"} }' https://job-tracker-job-service.herokuapp.com/jobs`

  `curl -i -X POST -H 'Content-Type: application/json' -d '{"title": "Software Engineer", "url": "www.google.com", "description": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas.", "company":{ "id": "3", "name": "nyTimes", "city": "New York", "state": "NY", "note": "It be a cool company", "url": "nytimes.com"}}' https://job-tracker-job-service.herokuapp.com/jobs`

#### PATCH Request
  `curl -i -X PATCH -H 'Content-Type: application/json' -d '{"title": "taco maker", "url": "www.google.com", "description": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas."}' https://job-tracker-job-service.herokuapp.com/jobs/45`


# Companies

#### GET Request
HTTP GET https://job-tracker-job-service.herokuapp.com/companies

#### POST Request
  curl -i -X POST -H 'Content-Type: application/json' -d '{ "name": "Google", "city": "Seattle", "state": "WA", "note": "They own the universe", "jobs": [{"description":"looking for someone who works with Nodejs, JavaScript and Knex ", "title":"Web Dev", "url":"https://google.com"}] }' https://job-tracker-job-service.herokuapp.com/companies

  curl -i -X POST -H 'Content-Type: application/json' -d '{ "name": "PackageIt", "city": "Seattle", "state": "WA", "note": "oriented around providing users with go to market package solutions", "jobs": [{"description":"Testing oriented, detail oriented and a desire to fix the big problems", "title":"QA Tester", "url":"packageit.com"}] }' https://job-tracker-job-service.herokuapp.com/companies

  curl -i -X POST -H 'Content-Type: application/json' -d '{ "name": "GroupOn", "city": "Seattle", "state": "WA", "note": "Group Coupon app that allows users to save money by teaming up together", "jobs": [{"description":"looking for someone who works with Java primarily and Spring", "title":"Backend Software engineer", "url":"https://groupon.com"}] }' https://job-tracker-job-service.herokuapp.com/companies

  curl -i -X POST -H 'Content-Type: application/json' -d '{ "name": "Facebook", "city": "Seattle", "state": "WA", "note": "Social networking app that has been a global phenominon", "jobs": [{"description":"looking for someone who works with Nodejs, JavaScript and Knex ", "title":"Web Dev supervisor", "url":"https://facebook.com"}] }' https://job-tracker-job-service.herokuapp.com/companies

# Contacts

#### GET Request
HTTP GET localhost:0000/contacts

#### POST Request
  `curl -i -X POST -H 'Content-Type: application/json' -d '{"first_name": "Ian","last_name": "Harvey","title":"Junior Web Dev", "email": "itharvey@gmail.com", "phone_number":"206-914-2323", "note": "Stand up guy, loves good times", "company":{"id":"43","name": "CNN", "city": "Fake News", "state": "TX", "note": "It be a cool company", "url": "CNN.com"} }' localhost:8080/contacts`

  `curl -i -X POST -H 'Content-Type: application/json' -d '{"first_name": "Sam","last_name": "Harness","title":"Senior Dev", "email": "sharness@gmail.com", "phone_number":"206-922-2323", "note": "OOP oriented, really into indy games", "company":{ "city": "Fake News", "id": 43, "name": "CNN", "note": "It be a cool company", "state": "TX", "url": "CNN.com"} }' localhost:8080/contacts`



# Actions

#### GET Request
  HTTP GET localhost:0000/actions

#### POST Request
  `curl -i -X POST -H 'Content-Type: application/json' -d '{"createDate": "2017-06-05 05:44:26.718", "activeDate": "2017-06-05 05:44:26.718", "applicationId": 1, "active": true, "complete": false, "message": "Congratulations on getting a phone screen. Be sure to follow up with Jeff Besos by 6/5/17.", "userId":1}' https://job-tracker-apps-service.herokuapp.com/actions`

  `curl -i -X POST -H 'Content-Type: application/json' -d '{"createDate": "2017-07-05 05:44:26.718", "activeDate": "2017-07-05 05:44:26.718", "applicationId": 2, "isActive": true, "isComplete": false, "message": "Congratulations on slaying the interview. Be sure to follow up with Samantha nerds by 10/5/17.", "userId":1}' https://job-tracker-apps-service.herokuapp.com/actions`

#### PATCH Request

  `curl -i -X PATCH -H 'Content-Type: application/json' -d '{"active": true}' https://job-tracker-apps-service.herokuapp.com/actions/1`

   or

  `curl -i -X PATCH -H 'Content-Type: application/json' -d '{"complete": false}' localhost:8080/actions76`




# Applications

#### GET Request
    HTTP GET localhost:0000/applications

#### POST Request
  `curl -i -X POST -H 'Content-Type: application/json' -d '{"job_id": 1, "user_id": 1, "notes": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas.", "stages": [{"contact_id": 1, "stage_type": 2}] }' https://job-tracker-apps-service.herokuapp.com/applications`

  `curl -i -X POST -H 'Content-Type: application/json' -d '{"jobId": 1, "userId": 1, "notes": "Really great app, put my lifes work into this thing", "stages": [{"contactId": 1, "stageType": 2}] }' https://job-tracker-apps-service.herokuapp.com/applications`

  `curl -i -X POST -H 'Content-Type: application/json' -d '{"jobId": 1, "userId": 2, "notes": "Really great app, user 2", "stages": [{"contactId": 1, "stageType": 2}] }' https://job-tracker-apps-service.herokuapp.com/applications`
