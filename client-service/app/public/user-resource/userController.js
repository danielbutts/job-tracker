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
      const email = vm.email
      const password = vm.password

      userService.login()
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }

    vm.register = function(){
      const newUser = {email: vm.email, password: vm.password, firstName: vm.firstName}
      console.log(newUser)

      userService.register(newUser)
        .then((response) => console.log(response))
        .catch((err) => console.error(err))

      delete newUser
    }

    vm.getUsers = function(){
      userService.getUsers()
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }

  }

}())
