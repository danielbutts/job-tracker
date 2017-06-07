(function(){

  angular.module('app').service('userService', userService)

  userService.$inject = ['$http']
  function userService($http){
    const vm = this

    vm.login = function(user){
      const userLoginUrl = `http://localhost:5000/api/auth/login`
      return $http.post(userLoginUrl, user)
    }

    vm.logout = function(){
      const userLogout = `http://localhost:5000/api/auth/logout`
      return $http.delete(userLogout)
    }

    vm.register = function(newUser){
      const userUrl = `http://localhost:8082/users`
      return $http.post(userUrl, newUser)
    }

    vm.getUsers = function(){
      const userUrl = 'http://localhost:8082/users'
      return $http.get(userUrl)
    }

  }
})()
