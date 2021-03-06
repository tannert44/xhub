app.controller( 'ProfileCtrl', [
  '$scope',
  '$firebaseArray',
  function($scope, $firebaseArray){
    //Get Firebase reference
    var ref = new Firebase("https://xhub.firebaseio.com/users");
    //creates firebase reference
    $scope.arr = $firebaseArray(ref);
    //Once data is loaded set variable to Object attribute to auto contrusct profile with profile.html
    $scope.arr.$loaded().then(function(data){
    console.log("DATA", data);
    $scope.name = data[0].userName;
    $scope.about = data[0].about;
    $scope.business = data[0].business;
    });

  }

]);