(function(){
  angular.module('app').service('userService', userService)

  userService.$inject = ['$http']
  function userService($http){
    const vm = this

    vm.getUsers = function(){
      const userUrl = 'http://localhost:8080/users'
      return $http.get(userUrl)
    }

    vm.getUser = function(id){
      const userUrl = `http://localhost:8080/users/${id}`
      return $http.get(userUrl)
    }

  }

}())
