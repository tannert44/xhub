var app = angular.module("xhubApp", ["ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignUpCtrl'
      })
      .when('/uploadphoto',{
        templateUrl: 'partials/uploadphoto.html',
        controller: 'PhotoCtrl'
      })
      .when('/profile',{
        redirectTo: '/uploadphoto'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);