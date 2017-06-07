(function(){

  angular.module('app')
    .component('application', {
      templateUrl: '/../application-resource/new-application-form-template.html',
      controller: applicationController,
    })

  applicationController.$inject = ['applicationService', '$http']
  function applicationController(applicationService, $http){
    const vm = this

    vm.$onInit = function () {
      $http.get(`http://localhost:8081/companies`).then(function (response) {
        console.log(response.data);
        vm.companies = response.data
      })
      .catch(err => {
        console.log(err);
      })
    }

    vm.create = function(e){
      e.preventDefault()

      const {title, company, city, state, url, description} = vm.application
      const userId = 1

      $http.get(`http://localhost:8081/companies`).then(function (response) {
        console.log(response.data);
        // vm.editArticle = response.data
      })
      .catch(err => {
        console.log(err);
      })



      const application = {
        companyId: vm.application.companyId,
        title: vm.application.title,
        userId: userId,


      }

      userService.login(user)
        .catch((err) => console.error(err))

      delete vm.user
    }

    vm.logout = function(){
      userService.logout()
        .catch((err) => console.error(err))
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
