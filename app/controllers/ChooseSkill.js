app.controller( 'ChooseSkillCtrl', [
  '$scope',
  '$firebaseObject',
  function($scope, $firebaseObject){
    var mainRef = new Firebase("https://xhub.firebaseio.com/users");
    //Get Firebase reference
    var authProvider = mainRef.getAuth().uid;
    var ref = new Firebase("https://xhub.firebaseio.com/users/" + authProvider);
    //creates firebase reference
    var obj = $firebaseObject(ref);
    $scope.skillToUserObj = function(arg){
      obj.skillName = arg;
      obj.$save();
    };
  }
]);