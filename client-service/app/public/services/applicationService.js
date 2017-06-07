(function(){

  angular.module('app').service('applicationService', applicationService)

  applicationService.$inject = ['$http']
  function applicationService($http){
    const vm = this

    vm.getAllApplicationsForUser = function(userId){
      const url = `${process.env.APPLICATION_SERVICE_URL}/applications/${userId}`
      return $http.get(url)
    }

    vm.getApplication = function(userId){
      const url = `${process.env.APPLICATION_SERVICE_URL}/applications/user/${userId}`
      return $http.get(url)
    }

    vm.createApplication = function(application) {
      const url = `${process.env.APPLICATION_SERVICE_URL}/applications`
      return $http.post(url, application)
    }

    vm.updateApplication = function(appId, application) {
      const url = `${process.env.APPLICATION_SERVICE_URL}/applications/${appId}`
      return $http.patch(url, application)
    }
    
  }
}())
