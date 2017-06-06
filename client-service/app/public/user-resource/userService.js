(function(){

  angular.module('app').service('userService', userService)

  userService.$inject = ['$http']
  function userService($http){
    const vm = this

    vm.login = function(user){
      const userUrl = `http://localhost:8080/users/${user.username}`
      user.status = false

      return $http.get(userUrl)
        .then((response) => {
          if(response.data.password === user.password){
            user.status = true
            return $http.post(userUrl, user)
          }
        })
        .catch((err) => console.error(err))
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
