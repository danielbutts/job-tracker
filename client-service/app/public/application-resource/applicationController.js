(function(){

  angular.module('app')
    .component('application', {
      templateUrl: '/../application-resource/new-application-form-template.html',
      controller: applicationController,
    })

  applicationController.$inject = ['applicationService', '$http', '$cookies', 'JOB_SERVICE_URL', 'APPLICATION_SERVICE_URL','$location']
  function applicationController(applicationService, $http, $cookies, JOB_SERVICE_URL, APPLICATION_SERVICE_URL, $location){
    const vm = this

    const userId = $cookies.get('id')

    vm.$onInit = function () {
      $http.get(`${JOB_SERVICE_URL}/companies`).then(function (response) {
        vm.companies = response.data
        $http.get(`${JOB_SERVICE_URL}/jobs`).then(function (response) {
          vm.jobs = response.data
          $http.get(`${APPLICATION_SERVICE_URL}/stages/types`).then(function (response) {
            vm.stageTypes = response.data
          })
        })
      })
      .catch(err => {
        console.log(err);
      })
    }

    vm.create = function(){
      const {title, companyName, city, state, url, description, notes, stage} = vm.application
      const firstName = vm.application.firstName
      const lastName = vm.application.lastName

      let jobExists = false;
      let companyExists = false;

      let newCompany;
      let newJob;

      vm.companies.forEach((company) => {
        if (company.name === companyName && company.city === city && company.state === state) {
          companyExists = true;
          newCompany = company;

          if (company.jobs !== undefined) {
            company.jobs.forEach((job) => {
              if (job.url === url || (job.url === undefined && job.title === title)) {
                jobExists = true;
                newJob = job;
              }
            })
          }
        }
      })

      let application = {
        userId: userId,
        notes: notes,
        stages: [{stageType:stage}]
      }

      if (jobExists && companyExists) {
        application.jobId = newJob.id;
        $http.post(`${APPLICATION_SERVICE_URL}/application`, application).then(function (response) {
          console.log('Created new Application for existing Job and Company.');
          console.log(response.data);
          $location.path('/').replace()
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        if (companyExists) {
          console.log('companyExists');
          let newJob = {
            title: title,
            url: url,
            description: description,
          }
          let oldJobIds = []
          if (newCompany.jobs !== undefined) {
            console.log(`existing company had jobs`, newCompany.jobs);
            oldJobIds = newCompany.jobs.map((job) => {
              console.log(`Existing job id: ${job.id}`);
              return job.id;
            })
          } else {
            console.log(`existing company didn't have jobs`);
            newCompany.jobs = [];
          }
          console.log(newCompany.jobs);
          newCompany.jobs.push(newJob)
          $http.patch(`${JOB_SERVICE_URL}/companies/${newCompany.id}`, newCompany).then(function (response) {
            console.log('Updated Company with new Job.');
            // console.log(response.data);
            newId = response.data.jobs.filter((job) => {
              // console.log(`job id: ${job.id}`,!oldJobIds.includes(job.id));
              return !oldJobIds.includes(job.id)
            })[0].id
            // console.log(newId);
            application.jobId = newId;
            $http.post(`${APPLICATION_SERVICE_URL}/applications`, application).then(function (response) {
              console.log('Created new Application for new Job and existing Company.');
              // console.log(response.data);
              $location.path('/').replace()
            })
          })
          .catch(err => {
            console.log(err);
          })

        } else {
          newJob = {
            title: title,
            url: url,
            description: description
          };
          newCompany = {
            name: companyName,
            city: city,
            state: state,
            jobs: [newJob]
          };

          $http.post(`${JOB_SERVICE_URL}/companies`, newCompany).then(function (response) {
            console.log('Created new Company with new Job.');
            const jobId = response.data.jobs[0].id;
            // console.log(response.data);
            application.jobId = jobId;
            // console.dir("APPLICATION:",application);
            $http.post(`${APPLICATION_SERVICE_URL}/applications`, application).then(function (response) {
              console.log('Created new Application for new Job and new Company.');
              // console.log(response.data);
              $location.path('/').replace()
            })
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
    }
  }
}())
