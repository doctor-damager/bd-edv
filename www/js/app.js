// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.empfehlungen', {
    url: "/empfehlungen",
    views: {
      'menuContent': {
        templateUrl: "templates/empfehlungen.html"
      }
    }
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })
    .state('app.impressum', {
      url: "/impressum",
      views: {
        'menuContent': {
          templateUrl: "templates/impressum.html",
        }
      }
    })
    .state('app.fotografie', {
      url: "/fotografie",
      views: {
        'menuContent': {
          templateUrl: "templates/fotografie.html",
        }
      }
    })
    .state('app.wendesign', {
      url: "/webdesign",
      views: {
        'menuContent': {
          templateUrl: "templates/webdesign.html",
        }
      }
    })
    .state('app.appentwicklung', {
      url: "/appentwicklung",
      views: {
        'menuContent': {
          templateUrl: "templates/appentwicklung.html",
        }
      }
    })
     .state('app.kontakt', {
      url: "/kontakt",
      views: {
        'menuContent': {
          templateUrl: "templates/kontakt.html",
        }
      }
    })

  .state('app.shopware', {
    url: "/shopware",
    views: {
      'menuContent': {
        templateUrl: "templates/shopware.html",
        
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
