// CORS Tutorial Ionic App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'corstutorial' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'corstutorial.controllers' is found in controllers.js
angular.module('corstutorial', ['ionic', 'ngCookies', 'corstutorial.controllers', 'corstutorial.services'])

.constant('APIEndpoint', {
  root: 'http://localhost:8000/api',
  version: 1
})

.constant('ClientID', {
  raw: 'dn6e9eTrg3zXIIkQoNn7jVREu0srJ7rVwIyIQq0j',
  base64: 'ZG42ZTllVHJnM3pYSUlrUW9ObjdqVlJFdTBzcko3clZ3SXlJUXEwajo='
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');


  // Configuring CSRF to match server's implementation
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

  // Add token to request if available, redirect to login if access is denied.
  $httpProvider.interceptors.push(['$q', '$location', 'tokenService', function($q, $location, tokenService) {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        var token_type = tokenService.get_token_type();
        var token = tokenService.get_access_token();

        if (token) {
          config.headers.Authorization = token_type + ' ' + token;
        }

        return config;
      }
    };
  }]);
});
