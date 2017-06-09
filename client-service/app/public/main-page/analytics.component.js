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
      vm.chartType = 'applications'
      renderChart()
    }

    vm.changeChartType = function(chartType){
      return vm.chartType = chartType
    }

    function renderChart(){
      if(vm.chartType === 'Applications over time'){
        vm.renderApplicationChart()
      }
      else{
        vm.renderActionChart()
      }
    }


    vm.renderApplicationChart = function(){
      vm.chartType = 'Applications over time'
      vm.chartHeight = `${Math.floor($window.innerHeight * .3)}px`
      vm.chartWidth = `${Math.floor($window.innerWidth * .4)}px`

      analayticsService.getApplicationData()
        .then((response) => {
          const userApps = response.userApplications

          vm.series = ['Average','Single']
          vm.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
          vm.data = [genAverage(response.averageAppsAllUsers, 7), [4, 3, 5, 6, 2, 5, 8]]
          vm.colors = ['#80b2f7', '#f45f42']
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
              averageArray.push(Math.floor(average))
            }
            return averageArray
          }
          $scope.$digest()
        })
        .catch((err) => console.error(err))
    }


    vm.renderActionChart = function(){
      vm.chartType = 'Actions over time'
      vm.chartHeight = `${Math.floor($window.innerHeight * .1)}px`
      vm.chartWidth = `${Math.floor($window.innerWidth * .2)}px`

      analayticsService.getActionData()
        .then((response) => {

          vm.series = ['Average','Yours']
          vm.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
          vm.data = [[4,4,4,4,4,4,4], [8, 2, 4, 7, 4, 6, 3]]
          vm.colors = ['#80b2f7', '#f45f42']
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
