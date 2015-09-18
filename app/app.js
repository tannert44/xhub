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
      .when('/chooseskill', {
        templateUrl: 'partials/chooseskill.html',
        controller: 'ChooseSkillCtrl'
      })
      .when('/culinaryrepo', {
        templateUrl: 'partials/culinaryrepo.html',
        controller: 'CulinaryRepoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);