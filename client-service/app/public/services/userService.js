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
      const userUrl = `https://job-tracker-user-service.herokuapp.com/users`
      return $http.post(userUrl, newUser)
    }

    vm.getUsers = function(){
      const userUrl = 'https://job-tracker-user-service.herokuapp.com/users'
      return $http.get(userUrl)
    }

    vm.getUserById = function(id){
      const userUrl = `https://job-tracker-user-service.herokuapp.com/users/${id}`
      return $http.get(userUrl)
    }


  }
})()
