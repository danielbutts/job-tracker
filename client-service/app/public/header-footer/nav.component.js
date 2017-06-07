(function(){
  angular.module('app')
    .component('navbar', {
      templateUrl: '/../header-footer/nav.template.html',
      controller: navController,
    })

  navController.$inject = ['userService']
  function navController(){
    const vm = this

    vm.loggedIn = true

    vm.logout = function(){
      vm.loggedIn = false
      
      userService.logout()
        .catch((err) => console.error(err))
    }
  }
}())
