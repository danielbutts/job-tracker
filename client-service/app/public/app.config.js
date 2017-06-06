(function() {
  'use strict'

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({name: 'homePage', url: '/', component: 'mains'})
      .state({name: 'loginPage', url: '/login', component: 'login'})

  }

}())
