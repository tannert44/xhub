app.controller( 'ProfileCtrl', [
  '$scope',
  '$firebaseArray',
  '$firebaseObject',
  function($scope, $firebaseArray, $firebaseObject){
    
    var ref = new Firebase("https://xhub.firebaseio.com/users");

    $scope.arr = $firebaseArray(ref);

    $scope.arr.$loaded().then(function(data){
    console.log("DATA", data);
    $scope.name = data[0].userName;
    $scope.about = data[0].about;
    $scope.business = data[0].business;
    });

  }

]);