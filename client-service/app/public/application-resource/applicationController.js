(function(){

  angular.module('app')
    .component('application', {
      templateUrl: '/../application-resource/new-application-form-template.html',
      controller: applicationController,
    })

  applicationController.$inject = ['applicationService', '$http', 'JOB_SERVICE_URL']
  function applicationController(applicationService, $http, JOB_SERVICE_URL){
    const vm = this

    vm.$onInit = function () {
      $http.get(`${JOB_SERVICE_URL}/companies`).then(function (response) {
        vm.companies = response.data
        $http.get(`${JOB_SERVICE_URL}/jobs`).then(function (response) {
          vm.jobs = response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
    }

    vm.create = function(){
      const {title, companyName, city, state, url, description} = vm.application
      const userId = 1

      let existingJob = false;
      let existingCompany = false;

      let company;
      let newJob;
console.log('HERE');
      vm.jobs.forEach((job) => {
        console.log('THERE');

        console.log('JOB-',job.url, url);
        if (url === job.url) {
          newJob = job;
          existingJob = true;
          console.log(`Job Found ${job.id}`);

          if (job.company !== undefined) {
            company = job.company
            existingCompany = true;
            console.log(`Company Found ${job.company}`);
          } else {
            console.log('Company not a match- ', job.company);
            vm.companies.forEach((el) => {
              if (companyName === el.name) {
                existingCompany = true;
                company = el;
              }
            })
          }
        } else {
          console.log('Job not a match- ', url, job.url);
        }
      })

      if (!existingCompany) {
        company = {
          name: companyName,
          city: city,
          state: state
        };
      }
      if (!existingJob) {
        newJob = {
          title: title,
          url: url,
          description: description,
          company: company
        };
      }


      if (existingJob) {
        console.log(existingJob, newJob.id,  '$http.patch(`${JOB_SERVICE_URL}/jobs`');
        $http.patch(`${JOB_SERVICE_URL}/jobs/${newJob.id}`, newJob).then(function (response) {
          console.log(response.data);
          // vm.editArticle = response.data
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        console.log(existingJob, '$http.post(`${JOB_SERVICE_URL}/jobs`');
        $http.post(`${JOB_SERVICE_URL}/jobs`, newJob).then(function (response) {
          console.log(response.data);
          // vm.editArticle = response.data
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
  }
}())
