(function(){
  angular.module('app')
    .component('analytics', {
      templateUrl: './main-page/analytics.template.html',
      controller: analyticsController,
    })

  analyticsController.$inject = ['analayticsService', '$location']
  function analyticsController(analayticsService, $location){
    const vm = this

    vm.$onInit = function(){

      analayticsService.getApplicationData()
        .then((response) => {
          console.log('data from analytics service!',response[1])
          //set the chart.js variables in here
            // vm.date = ; vm.labels =

            //vm.date = Object.keys(response[1]).filter(application => application.)

          vm.applications = response.data
        })
        .catch((err) => console.error(err))
    }


  }
})()
