app.controller( 'ProfileSidebarCtrl', [
  '$scope',
  '$firebaseObject',
  function($scope, $firebaseObject){
    $scope.templates =
    [ { name: 'partials/profilesidebar.html', url: 'partials/profilesidebar.html'} ];
    $scope.template = $scope.templates[0];
  }

]);