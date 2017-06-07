(function(){

  angular.module('app').service('analayticsService', analayticsService)

  analayticsService.$inject = ['$http']
  function analayticsService($http){
    const vm = this

    vm.getApplicationData = function(){

      const appEndPoint = 'http://localhost:8080/applications'

      //get all applications
      return $http.get(appEndPoint)
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }

  }

}())
