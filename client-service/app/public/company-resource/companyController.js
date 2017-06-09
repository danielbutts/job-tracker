(function(){

  angular.module('app')
    .component('companies', {
      templateUrl: '/../company-resource/company-detail-template.html',
      controller: companyController,
    })

  companyController.$inject = ['jobService', '$http', '$cookies', 'JOB_SERVICE_URL']
  function companyController(jobService, $http, $cookies, JOB_SERVICE_URL){
    const vm = this

    const userId = $cookies.get('id')

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
  }
}())
