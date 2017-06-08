(function(){
  angular.module('app')
    .component('applications', {
      templateUrl: './main-page/applications.template.html',
      controller: controller,
    })

  controller.$inject = ['applicationService', '$cookies', 'jobService']

  function controller(applicationService, $cookies, jobService){
    const vm = this
      vm.applications = []


//This is where
    vm.$onInit = function () {
      const userId = $cookies.get('id')
      applicationService.getAllApplicationsForUser(userId).then( response => {
        console.log('response', response)
        response.data.forEach( application => {
          console.log('application',application);
          jobService.getJob(application.jobId).then( job => {
            console.log('this is job', job);
            vm.applications = response.data
          })

        })
        console.log('this is the array = ', response);
      })
    }

  }

})()
