(function(){

  angular.module('app').service('analayticsService', analayticsService)

  analayticsService.$inject = ['$http', '$cookies']
  function analayticsService($http, $cookies){
    const vm = this

    // responsible for wrangling data into useable format
    vm.getApplicationData = function(){

      const userId = $cookies.get('id')
      const allUsersURL = 'https://job-tracker-user-service.herokuapp.com/users'
      const allApplicationsURL = 'https://job-tracker-apps-service.herokuapp.com/applications'
      const allApplicationsPerUser = `https://job-tracker-apps-service.herokuapp.com/applications/user/${userId}`


      return Promise.all([$http.get(allUsersURL), $http.get(allApplicationsURL), $http.get(allApplicationsPerUser)])
        .then((response) => {
          const userApplications = response[2].data
          const averageAppsAllUsers = response[1].data.length / response[0].data.length

          return {averageAppsAllUsers, userApplications}
        })
        .catch((err) => console.error(err))
    }

  }
}())
