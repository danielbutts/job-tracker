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
      actionsService.getActions().then( response => {
        vm.actions = response.data
      })
    }

    vm.updateAction = function (action,keyUpdating,id) {

      if(keyUpdating === 'complete') {
        action[keyUpdating] = true
      } else {
        action[keyUpdating] = false
      }

      actionsService.updateAction(keyUpdating,id).then( response => {
        console.log('this is the response', response);
      })
    }

  }

})()
