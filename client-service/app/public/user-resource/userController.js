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
      const user = {username: vm.user.username, password: vm.user.password}
      console.log(user)

      userService.login(user)
        .then((response) => {
          if(response){
            user.status = response.data.status
          }
          console.log('username or password are incorrect')
        })
        .catch((err) => console.error(err))

      delete vm.user
    }

    vm.register = function(){
      const newUser = {email: vm.user.email, password: vm.user.password, username: vm.user.username}
      console.log(newUser)

      userService.register(newUser)
        .then((response) => console.log(response))
        .catch((err) => console.error(err))

      delete vm.user
    }

    vm.getUsers = function(){
      userService.getUsers()
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
    }

  }
}())
