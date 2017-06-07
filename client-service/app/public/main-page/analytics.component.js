(function(){
  angular.module('app')
    .component('analytics', {
      templateUrl: './main-page/analytics.template.html',
      controller: analyticsController,
    })

  analyticsController.$inject = ['analayticsService']
  function analyticsController(analayticsService){
    const vm = this

    analayticsService.getApplicationData()
      .then((response) => {
        vm.applications = response.data
      })
  }

})()
