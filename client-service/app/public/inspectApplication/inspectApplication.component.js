(function(){
  angular.module('app')
    .component('inspectApplication', {
      templateUrl: './inspectApplication/inspectApplication.template.html',
      controller: controller,
    })

  controller.$inject = ['applicationService', '$cookies', 'jobService','$stateParams']

  function controller(applicationService, $cookies, jobService, $stateParams){
    const vm = this



    vm.$onInit = function () {
      const userId = $cookies.get('id')
      console.log('userId =', userId);
      console.log('stateParams', $stateParams.id);
      console.log('connected')

    }

  }

})()
