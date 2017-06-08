(function(){
  angular.module('app')
    .component('analytics', {
      templateUrl: './main-page/analytics.template.html',
      controller: analyticsController,
    })

  analyticsController.$inject = ['analayticsService', '$cookies']
  function analyticsController(analayticsService, $cookies){
    const vm = this

    vm.$onInit = function(){

      analayticsService.getApplicationData()
        .then((response) => {
          console.log('data from analytics service!',response)

          // vm.series ['Average', 'SingleUser']
          // vm.labels = ['All Time']
          // vm.data = [[response.averageAppsAllUsers],[response.userApplications.length]]

          vm.labels = ["January", "February", "March", "April", "May", "June", "July"]
          vm.data = [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]
          vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }]
          vm.options = {
            scales: {
              yAxes: [
                {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
                },
                {
                  id: 'y-axis-2',
                  type: 'linear',
                  display: true,
                  position: 'right'
                }
              ]
            }
          }
          //vm.date = Object.keys(response[1]).filter(application => application.)
        })
        .catch((err) => console.error(err))
    }


  }
})()
