(function(){
  angular.module('app')
    .component('actions', {
      templateUrl: './main-page/actions.template.html',
      controller: controller,
    })
    controller.$inject = ['actionsService']

  function controller(actionsService) {
    const vm = this
    vm.noRemaningActions = false

    vm.$onInit = function () {
       loadActions().then( response => {
         vm.actions = response

       })

    }

    vm.updateAction = function (action,keyUpdating,id) {

      if(keyUpdating === 'complete') {
        action[keyUpdating] = true
      } else {
        action[keyUpdating] = false
      }
      console.log('prior to load actions call',vm.actions);
      actionsService.updateAction(keyUpdating,id).then( response => {
        console.log('this is the response', response);
        loadActions().then( response => {
          vm.actions = response
        })
      })


      console.log('post to load actions call',vm.actions);

    }

    function loadActions() {
      return actionsService.getActions().then( response => {
          return response.data.filter( action => {
            if(action.active && !action.complete) {
              return action
            }
          })
        })
    }

  }



})()
