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
        response.data.forEach( application => {
          jobService.getJob(application.jobId).then( job => {
            if (job.data === "") {
              console.log("broken job hit");
            } else {
              vm.applications.push(job.data)
              console.log(vm.applications);
             }
          })

        })
        console.log('this is the array = ', vm.applications);
      })
    }

  }

})()
