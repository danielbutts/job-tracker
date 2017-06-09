(function(){

  angular.module('app').service('userService', userService)

  userService.$inject = ['$http','USER_SERVICE_URL', '$cookies']
  function userService($http, USER_SERVICE_URL, $cookies){
    const vm = this

    vm.login = function(user){
      const userLoginUrl = `/api/auth/login`
      return $http.post(userLoginUrl, user)
    }

    vm.logout = function(){
      const userLogout = `/api/auth/logout`
      $cookies.remove('id')
      return $http.delete(userLogout)
    }

    vm.register = function(newUser){
      const userUrl = `${USER_SERVICE_URL}/users`
      return $http.post(userUrl, newUser)
    }

    vm.getUsers = function(){
      const userUrl = `${USER_SERVICE_URL}/users`
      return $http.get(userUrl)
    }

    vm.getUserById = function(id){
      const userUrl = `${USER_SERVICE_URL}/users/${id}`
      return $http.get(userUrl)
    }
  }
})()
