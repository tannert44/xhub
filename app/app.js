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
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/repo', {
        templateUrl: 'partials/createrepo.html',
        controller: 'CreateRepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);