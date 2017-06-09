(function(){
  angular.module('app')
    .component('analytics', {
      templateUrl: './main-page/analytics.template.html',
      controller: analyticsController,
    })

  analyticsController.$inject = ['analayticsService', '$scope', '$window']
  function analyticsController(analayticsService, $scope, $window){
    const vm = this

    vm.$onInit = function(){
      vm.chartHeight = `${Math.floor($window.innerHeight * .1)}px`
      vm.chartWidth = `${Math.floor($window.innerWidth * .2)}px`

      console.log($window.innerHeight * .1,  $window.innerWidth * .2)
      console.log(vm.chartHeight, vm.chartWidth)

      vm.chartType = 'applications'
      renderChart()
    }

    //potentially want to hide or display button
    vm.changeChartType = function(chartType){
      return vm.chartType = chartType
    }

    function renderChart(){
      if(vm.chartType === 'applications'){
        vm.renderApplicationChart()
      }
      else{
        vm.renderActionChart()
      }
    }


    vm.renderApplicationChart = function(){
      analayticsService.getApplicationData()
        .then((response) => {
          console.log('data from analytics service!',response)
          const userApps = response.userApplications

          vm.series = ['Average','Single']
          vm.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
          vm.data = [genAverage(response.averageAppsAllUsers, 7), [4, 3, 5, 6, 2, 5, 8]]

          vm.datasetOverride = [{ yAxisID: 'y-axis-1' }]//, { yAxisID: 'y-axis-2' }]
          vm.options = {
            scales: {
              yAxes: [
                {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: {
                    beginAtZero: true
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Applications',
                    fontColor: "#546372"
                  }
                }
              ]
            }
          }


          function genAverage(average, length){
            const averageArray = []
            let i = 0
            while(i++ < length){
              averageArray.push(average)
            }
            return averageArray
          }
          $scope.$digest()
        })
        .catch((err) => console.error(err))
    }


    vm.renderActionChart = function(){
      analayticsService.getActionData()
      .then((response) => {

        vm.series = ['Average','Yours']
        vm.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        vm.data = [[4,4,4,4,4,4,4], [8, 2, 4, 7, 4, 6, 3]]

        vm.datasetOverride = [{ yAxisID: 'y-axis-1' }]
        vm.options = {
          scales: {
            yAxes: [
              {
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Actions taken',
                  fontColor: "#546372"
                }
              }
            ]
          }
        }

        $scope.$digest()
      })
      .catch((err) => console.error(err))
    }
  }
})()
