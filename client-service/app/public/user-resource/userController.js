(function(){
  angular.module('app')
    .component('login', {
      templateUrl: '/../user-resource/user-template.html',
      controller: userController,
    })

  userController.$inject = ['userService']
  function userController(userService){
    const vm = this

    vm.login = function(e){
      e.preventDefault()
      console.log(vm.email, vm.password)
    }

    vm.getUsers = function(){
      userService.getUsers()
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }

    vm.getSingleUser = function(){
      userService.getUser()
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }



  }

}())
