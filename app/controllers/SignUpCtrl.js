app.controller("SignUpCtrl",[
  '$scope',
  function($scope) {
    console.log("Jesus is lord");
    var ref = new Firebase("https://xhub.firebaseio.com");

    $scope.createUserProfile = function(){
      
      console.log("clickfired");
      if($scope.password === $scope.confirmPass){

        var userObject = {
          userName: $scope.userName,
          about: $scope.aboutYou,
          business: $scope.aboutBusiness
        };

        ref.createUser({
          email    : $scope.newEmail,
          password : $scope.password
        }, function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
          }
        });

        console.log("USEROBJECT", userObject);

      } else{
        alert("Passwords do not match");
      }

    };  

  }
]);