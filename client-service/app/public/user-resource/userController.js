(function(){
  angular.module('app')
    .component('login', {
      templateUrl: '/../user-resource',
      controller: userController,
    })

  userController.$inject = ['userService']

  function userController(userService){

  }
  
})
