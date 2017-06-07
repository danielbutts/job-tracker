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
    //
    // vm.register = function(newUser){
    //   const userUrl = `http://localhost:8080/users`
    //   return $http.post(userUrl, newUser)
    // }


    vm.getActions = function() {
      const actionsUrl = 'http://localhost:8080/actions'
      return $http.get(actionsUrl)
    }

  }
})()
