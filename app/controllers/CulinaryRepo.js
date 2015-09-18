app.controller( 'CulinaryRepoCtrl', [
  '$scope',
  '$firebaseArray',
  '$compile',
  function($scope, $firebaseArray, $compile){
    //Get Firebase reference
    var ref = new Firebase("https://xhub.firebaseio.com/users");
    //creates firebase reference
    $scope.repoArr = $firebaseArray(ref);
    
    $scope.addIngredient = function(){
      console.log('clicked');
      var nextIngredient = angular.element( document.querySelector( '.container-ingredient' ) );
      console.log(nextIngredient);
      var appendedIngredient = '<div class="input-group">';
          appendedIngredient += '<input type="text" class="form-control" placeholder="Celery 1/4 Cup">';
          appendedIngredient += '<span class="input-group-btn">';
          appendedIngredient += '<button class="btn btn-default" type="button" ng-click="addIngredient()">';
          appendedIngredient += '<span class="glyphicon glyphicon-plus" aria-hidden="true">';
          appendedIngredient += '</span></button></span>';
          appendedIngredient += '</div>';
        var compiledIngredient = $compile(appendedIngredient)($scope);
        nextIngredient.append(compiledIngredient);
    };

    $scope.addTechnique = function(){
      console.log('clicked');
      var nextTechnique = angular.element( document.querySelector( '.container-technique' ) );
      console.log(nextTechnique);
      var appendedTechnique = '<div class="input-group">';
          appendedTechnique += '<input type="text" class="form-control" placeholder="12-inch non-stick Skillet">';
          appendedTechnique += '<span class="input-group-btn">';
          appendedTechnique += '<button class="btn btn-default" type="button" ng-click="addTechnique()">';
          appendedTechnique += '<span class="glyphicon glyphicon-plus" aria-hidden="true">';
          appendedTechnique += '</span></button></span>';
          appendedTechnique += '</div>';
        var compiledTechnique = $compile(appendedTechnique)($scope);
        nextTechnique.append(compiledTechnique);
    };

  }

]);