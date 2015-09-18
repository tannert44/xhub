app.controller( 'CreateRepoCtrl', [
  '$scope',
  '$firebaseArray',
  function($scope, $firebaseArray){
    //Get Firebase reference
    var ref = new Firebase("https://xhub.firebaseio.com/users");
    //creates firebase reference
    $scope.repoArr = $firebaseArray(ref);
    //Once data is loaded set variable to Object attribute to auto contrusct profile with profile.html
    $scope.repoArr.$loaded().then(function(data){
      console.log("DATA", data);
      // var skills
      // data[0].skillArr = 
    });

  }

]);