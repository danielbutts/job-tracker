(function() {
  'use strict'

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state(
        {name: 'postList', url: '/', component: 'post'},
        {name: 'singlePost', url: '/singlePost', component: 'reddit'},

      )

  }

}())
