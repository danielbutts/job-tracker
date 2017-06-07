(function(){

  angular.module('app').service('actionsService', actionsService)

  actionsService.$inject = ['$http']
  function actionsService($http){
    const vm = this

    // vm.login = function(user){
    //   const userLoginUrl = `http://localhost:5000/api/auth/login`
    //   return $http.post(userLoginUrl, user)
    // }
    //
    // vm.logout = function(){
    //   const userLogout = `http://localhost:5000/api/auth/logout`
    //   return $http.delete(userLogout)
    // }

    vm.updateAction = function(keyUpdating,id) {
      const actionsUrl = 'https://job-tracker-apps-service.herokuapp.com/actions/' + id
      let bool
      if (keyUpdating === 'complete') {
        bool = true
      } else {
        bool = false
      }
      const data = `{"${keyUpdating}": ${bool}}`
      console.log('data', data);
      return $http.patch(actionsUrl,data)
    }

    vm.getActions = function() {
      const actionsUrl = 'https://job-tracker-apps-service.herokuapp.com/actions'
      return $http.get(actionsUrl)
    }

  }
})()
