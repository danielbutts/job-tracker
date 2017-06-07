(function(){

  angular.module('app').service('analayticsService', analayticsService)

  analayticsService.$inject = ['$http']
  function analayticsService($http){
    const vm = this

    vm.getApplicationData = function(){

      // get all users, map over that list of users, call get all applications by user for each user in that list of users

      const allUsersURL = 'https://job-tracker-user-service.herokuapp.com/users'
      const applicationsURL = 'https://job-tracker-apps-service.herokuapp.com/'

      //get all applications -> wrangles data into useable format
      return $http.get(applicationsURL)
        .then((response) => {
          return response.data
        })
        .catch((err) => console.error(err))
    }

    vm.renderApplicationChart = function(){

    }

  }
}())
