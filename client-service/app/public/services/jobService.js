(function(){

  angular.module('app').service('jobService', jobService)

  jobService.$inject = ['$http', 'JOB_SERVICE_URL']
  function jobService($http, JOB_SERVICE_URL){
    const vm = this

    vm.getAlljobs = function() {
      const url = `${JOB_SERVICE_URL}/jobs`
      return $http.get(url)
    }

    vm.getJob = function(jobId) {
      const url =`${JOB_SERVICE_URL}/jobs/${jobId}`
      return $http.get(url)
    }

    vm.getAllCompanies = function() {
      const url =`${JOB_SERVICE_URL}/companies`
      return $http.get(url)      
    }

    vm.getCompanyDetail = function(companyId) {
      const url =`${JOB_SERVICE_URL}/companies/${companyId}`
      return $http.get(url)
    }
  }
}())
