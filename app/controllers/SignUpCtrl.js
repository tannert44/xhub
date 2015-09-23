app.controller("SignUpCtrl",[
  '$scope',
  '$firebaseObject',
  '$location',
  function($scope, $firebaseObject, $location) {
    console.log("Jesus is lord");

    //Keeps User Data
    var userObject = {};
    //Get Firebase reference
    var ref = new Firebase("https://xhub.firebaseio.com/users");
    //Logs the user in directly after creating an account is called in createUserProfile()
    //Creates a firebase array with reference
    var obj = $firebaseObject(ref);
    var createLogin = function(){
      ref.authWithPassword({
        email    : $scope.newEmail,
        password : $scope.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          console.log("authdata", authData.uid);
          console.log("USEROBJ", userObject);
          obj[authData.uid] = userObject;
          obj.$save().then(function(ref){
            $location.path('/profile');
          });
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