(function(){
  angular.module('app')
    .component('actions', {
      templateUrl: './main-page/actions.template.html',
      controller: controller,
    })
    controller.$inject = ['actionsService']

  function controller(actionsService){
    const vm = this
    vm.actions = []

  vm.$onInit = function () {
    vm.actions = actionsService.getActions()

    }

  }

})()
