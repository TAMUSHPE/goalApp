// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.constant('_',
    window._
)

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
  $httpProvider.interceptors.push('BearerAuthInterceptor');
  $stateProvider

    .state('app', {

      url: '/app',
      abstract: true,
      templateUrl: 'app/menu/menu.html',
      controller: 'menuCtrl'
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: ''
        }
      }
    })
    .state('app.newOrg', {
      url: '/new/organization',
      views: {
        'menuContent': {
          templateUrl: 'app/organization/newOrg/newOrg.html',
        }
      }
    })
  .state('app.organizationView', {
      url: '/organizationView',
      views: {
        'menuContent': {
          templateUrl: 'app/organizationView/organizationView.html'
        }
      }
    })
  .state('login', {
    url: '/login',
    templateUrl: 'app/login/login.html'
  });;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
