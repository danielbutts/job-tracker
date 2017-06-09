(function() {
  'use strict'

  angular.module('app')
  .constant('APPLICATION_SERVICE_URL', 'https://job-tracker-apps-service.herokuapp.com')
  .constant('JOB_SERVICE_URL', 'https://job-tracker-job-service.herokuapp.com')
  .constant('USER_SERVICE_URL', 'https://job-tracker-user-service.herokuapp.com')
  .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({name: 'homePage', url: '/', component: 'dashboard'})
      .state({name: 'loginPage', url: '/login', component: 'login'})
      .state({name: 'application', url: '/application', component: 'application'})
      .state({name: 'inspectApplication', url: '/inspect', component: 'inspectApplication'})
  }

}())
