(function(){
  angular.module('app').service('userService', userService)

  userService.$inject = ['$http']
  function userService($http){
    const vm = this

    //checks the database for where the emails match db emails
    vm.login = function(email){
      const userUrl = `http://localhost:8080/users`
      return $http.post(userUrl, {email: email})
    }

    vm.register = function(newUser){
      const userUrl = `http://localhost:8080/users`
      return $http.post(userUrl, newUser)
    }

    vm.getUsers = function(){
      const userUrl = 'http://localhost:8080/users'
      return $http.get(userUrl)
    }

  }

}())
