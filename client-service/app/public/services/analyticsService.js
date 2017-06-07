(function(){

  angular.module('app').service('analayticsService', analayticsService)

  analayticsService.$inject = ['$http']
  function analayticsService($http){
    const vm = this

    vm.getApplicationData = function(){

      // get all users, map over that list of users, call get all applications by user for each user in that list of users

      const allUsersURL = 'https://job-tracker-user-service.herokuapp.com/users'
      const allApplicationsURL = 'https://job-tracker-apps-service.herokuapp.com/applications'

      //get all applications -> wrangles data into useable format
      return Promise.all([$http.get(allUsersURL), $http.get('allApplicationsURL')])
        .then((response) => {
          console.log('inside analytics service', response)
          return response
        })
        .catch((err) => console.error(err))
    }

  }
}())
