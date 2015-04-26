angular.module('myApp', [
  'ui.router'  
])

.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
    
  $urlRouterProvider.otherwise('/login');
    
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<h2>Provided by router</h2>' // templateUrl: ./views/login.html
    });
    
    
})

;

