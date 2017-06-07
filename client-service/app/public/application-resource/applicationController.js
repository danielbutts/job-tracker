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
        console.log(response.data);
        vm.companies = response.data
        $http.get(`${JOB_SERVICE_URL}/jobs`).then(function (response) {
          console.log(response.data);
          vm.jobs = response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
    }

    vm.create = function(e){
      e.preventDefault()

      const {title, companyName, city, state, url, description} = vm.application
      const userId = 1

      let company;
      let newJob;
      vm.jobs.forEach((job) => {
        if (url === job.url) {
          newJob = job;
          console.log(`Job Found ${job.id}`);

          if (job.company !== undefined) {
            company = job.company
            console.log(`Company Found ${job.company}`);
          }
        }
      })

      if (company === undefined) {
        company = {
          name: companyName,
          city: city,
          state: state
        };

        $http.post(`${JOB_SERVICE_URL}/companies`, company).then(function (response) {
          console.log(response.data);
          // vm.editArticle = response.data
        })
        .catch(err => {
          console.log(err);
        })
      }
    }

    // vm.companies.forEach((el) => {
    //   if (companyName === el.name) {
    //     companyId = el.id;
    //   }
    // })

    // if (companyId === undefined) {
    //   let company = {
    //     name: companyName,
    //     city: city,
    //     state: state
    //   };


    // } else {
    //   $http.get(`${JOB_SERVICE_URL}/companies/${companyId}`).then(function (response) {
    //     console.log(response.data);
    //     // vm.editArticle = response.data
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // }
    //
    // const application = {
    //   companyId: vm.application.companyId,
    //   title: vm.application.title,
    //   userId: userId,
    //
    //
    // }

  }
}())
