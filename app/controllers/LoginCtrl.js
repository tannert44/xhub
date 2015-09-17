app.controller("LoginCtrl",[
  '$scope',
  '$location',
  function($scope, $location) {
    var ref = new Firebase("https://xhub.firebaseio.com");

    $scope.deleteUser = function(){
      ref.removeUser({
        email: $scope.userEmail,
        password: $scope.userPass
      }, function(error) {
        if (error) {
          switch (error.code) {
            case "INVALID_USER":
              console.log("The specified user account does not exist.");
              break;
            case "INVALID_PASSWORD":
              console.log("The specified user account password is incorrect.");
              break;
            default:
              console.log("Error removing user:", error);
          }
        } else {
          console.log("User account deleted successfully!");
        }
      });
    };

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