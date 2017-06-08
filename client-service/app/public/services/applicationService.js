(function(){

  angular.module('app').service('applicationService', applicationService)

  applicationService.$inject = ['$http', 'APPLICATION_SERVICE_URL']
  function applicationService($http, APPLICATION_SERVICE_URL){
    const vm = this

    vm.getAllApplicationsForUser = function(userId){
      const url = `${APPLICATION_SERVICE_URL}/applications/user/${userId}`
      return $http.get(url)
    }

    vm.getApplication = function(appId) {
      const url = `${APPLICATION_SERVICE_URL}/applications/${appId}`
      return $http.get(url)
    }

    vm.createApplication = function(application) {
      const url = `${APPLICATION_SERVICE_URL}/applications`
      return $http.post(url, application)
    }

    vm.updateApplication = function(appId, application) {
      const url = `${APPLICATION_SERVICE_URL}/applications/${appId}`
      return $http.patch(url, application)
    }

    vm.getJob = function (jobId) {
      const url =`localhost:8080/jobs/${jobId}`
      return $http.get(url)
    }

  }
}())
