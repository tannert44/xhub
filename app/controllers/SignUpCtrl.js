app.controller("SignUpCtrl",[
  '$scope',
  '$firebaseArray',
  '$location',
  function($scope, $firebaseArray, $location) {
    console.log("Jesus is lord");

    //Keeps User Data
    var userObject = {};
    //Get Firebase reference
    var ref = new Firebase("https://xhub.firebaseio.com/users");
    //Creates a firebase array with reference
    var obj = $firebaseArray(ref);
    //Logs the user in directly after creating an account is called in createUserProfile()
    var createLogin = function(){
      ref.authWithPassword({
        email    : $scope.newEmail,
        password : $scope.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);

          console.log("USEROBJ", userObject);
          obj.$add(userObject); 
          $location.path('/profile');
          $scope.$apply();
        }
      });
    };
    //Creates User Profile with information from inputs on signup.html
    $scope.createUserProfile = function(){
      console.log("clickfired");
      if($scope.password === $scope.confirmPass){

        userObject = {
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
            createLogin();
          }
        });


      } else{
        alert("Passwords do not match");
      }

    };  

  }
]);