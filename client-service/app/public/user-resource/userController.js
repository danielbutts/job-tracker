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
      // could use bcrypt as hashed here to compare a hashed version of the password versus the version retreived from the database
        //this would require hashing the password prior to registering it in the database
      userService.login(user)
        .then((response) => console.log(response))
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
