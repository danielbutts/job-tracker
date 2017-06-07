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
      console.log(vm.actions)
      actionsService.getActions().then( response => {
        console.log(response.data);
        vm.actions = response.data
      })
    }

    vm.updateAction = function (action,keyUpdating,id) {
      console.log('this is the key', action[keyUpdating]);

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
