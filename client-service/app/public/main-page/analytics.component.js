(function(){
  angular.module('app')
    .component('analytics', {
      templateUrl: './main-page/analytics.template.html',
      controller: analyticsController,
    })

  analyticsController.$inject = ['analayticsService']
  function analyticsController(analayticsService){
    const vm = this

    vm.$onInit = function(){

      analayticsService.getApplicationData()
        .then((response) => {
          console.log('data from analytics service!',response.data)
          //set the chart.js variables in here
            // vm.date = ; vm.labels =

          vm.applications = response.data
        })
        .catch((err) => console.error(err))
    }


  }
})()
