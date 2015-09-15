app.controller("LoginCtrl",[
  '$scope',
  '$location',
  function($scope, $location) {
    var ref = new Firebase("https://xhub.firebaseio.com");

    $scope.loginUser = function(){
      ref.authWithPassword({
        email    : $scope.userEmail,
        password : $scope.userPass
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $location.path('/profile');
          $scope.$apply();
        }
      });
      
    };

  }
]);