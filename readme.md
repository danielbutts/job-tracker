# Job - tracker
job tracking app for anyone in the market.




# Jobs

#### GET Request
HTTP GET localhost:0000/jobs

HTTP GET localhost:0000/:id

#### POST Request
  `curl -i -X POST -H 'Content-Type: application/json' -d '{"title": "taco maker", "url": "www.google.com", "description": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas.", "company":{"id":"43","name": "CNN", "city": "Fake News", "state": "TX", "note": "It be a cool company", "url": "CNN.com"} }' localhost:8080/jobs`

  `curl -i -X POST -H 'Content-Type: application/json' -d '{"title": "taco maker", "url": "www.google.com", "description": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas.", "company":{"id":"43","name": "CNN", "city": "Fake News", "state": "TX", "note": "It be a cool company", "url": "CNN.com"}}' localhost:8080/jobs`

#### PATCH Request
  `curl -i -X PATCH -H 'Content-Type: application/json' -d '{"title": "taco maker", "url": "www.google.com", "description": "Saw a posting for a software development intern. I have friend that works there. Company is building Uber-for-umbrellas."}' localhost:8080/jobs/45`


# Companies

#### GET Request
HTTP GET localhost:0000/companies

#### POST Request
  `curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "nyTimes", "city": "New York", "state": "NY", "note": "It be a cool company", "url": "nytimes.com"}' localhost:8080/companies`

  `curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "CNN", "city": "Fake News", "state": "TX", "note": "It be a cool company", "url": "CNN.com"}' localhost:8080/companies`


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
  `curl -i -X POST -H 'Content-Type: application/json' -d '{"createDate": "2017-06-05 05:44:26.718", "activeDate": "2017-06-05 05:44:26.718", "applicationId": 1, "isActive": true, "isComplete": false, "message": "Congratulations on getting a phone screen. Be sure to follow up with Jeff Besos by 6/5/17.", "userId":1}' localhost:8080/actions`

#### PATCH Request

  `curl -i -X PATCH -H 'Content-Type: application/json' -d '{"isActive": false}' localhost:8080/actions/76`

   or

  `curl -i -X PATCH -H 'Content-Type: application/json' -d '{"isComplete": true}' localhost:8080/actions76`
