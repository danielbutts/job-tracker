(function(){
  angular.module('app')
    .component('applications', {
      templateUrl: './main-page/applications.template.html',
      controller: controller,
    })

  controller.$inject = ['applicationService']

  function controller(applicationService){
    const vm = this
      vm.applications = []

    vm.$onInit = function () {
      const userId = 1
      applicationService.getAllApplicationsForUser(userId).then( response => {
        vm.applications = response.data
        console.log('this is the array = ',vm.applications);
      })
    }

  }

})()
