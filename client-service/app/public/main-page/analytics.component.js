(function(){
  angular.module('app')
    .component('analytics', {
      templateUrl: './main-page/analytics.template.html',
      controller: analyticsController,
    })

  analyticsController.$inject = ['analayticsService', '$scope']
  function analyticsController(analayticsService, $scope){
    const vm = this

    vm.$onInit = function(){
      vm.chartType = 'applications'
      renderChart()
    }

    function renderChart(){
      if(vm.chartType === 'applications'){
        renderApplicationChart()
      }
      else{
        renderActionChart()
      }
    }


    function renderApplicationChart(){
      analayticsService.getApplicationData()
        .then((response) => {
          console.log('data from analytics service!',response)
          const userApps = response.userApplications

          vm.labels = ["January", "February", "March", "April", "May", "June", "July"]
          vm.data = [genAverage(response.averageAppsAllUsers, 7), [28, 48, 40, 19, 86, 27, 90]]
          vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }]
          // [65, 59, 80, 81, 56, 55, 40]

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

          // vm.series ['Average', 'SingleUser']
          // vm.labels = ['All Time']

            function genAverage(average, length){
              const averageArray = []
              let i = 0
              while(i++ < length){
                averageArray.push(average)
              }
              return averageArray
            }

          // vm.data = [
          //   genAverage(response.averageAppsAllUsers, userApps.length),
          //   [userApps.length]
          // ]
          $scope.$digest()
        })
        .catch((err) => console.error(err))
    }

    function renderActionChart(){
      
    }


  }
})()
