app.controller( 'CulinaryRepoCtrl', [
  '$scope',
  '$firebaseArray',
  '$compile',
  function($scope, $firebaseArray, $compile){
    //Recipe Array to push to firebase
    var recipeRepoArr = [];
    //Recipe Object to be added to Recipe Array
    var recipeRepoObj = {};
    //Dynamically adds recipe number
    var ingredientCounter = 0;
    //Dynamicall adds utensil number
    var utensilCounter = 0;
    //Get Firebase reference
    var ref = new Firebase("https://xhub.firebaseio.com/users");
    //creates firebase reference
    $scope.repoArr = $firebaseArray(ref);
    
    $scope.addIngredient = function(){
      console.log('clicked');
      var nextIngredient = angular.element( document.querySelector( '.container-ingredient' ) );
      console.log(nextIngredient);
      var appendedIngredient = '<div class="input-group">';
          appendedIngredient += '<input type="text" class="form-control ingredientName" placeholder="Celery 1/4 Cup">';
          appendedIngredient += '<span class="input-group-btn">';
          appendedIngredient += '<button class="btn btn-default" type="button" ng-click="addIngredient()">';
          appendedIngredient += '<span class="glyphicon glyphicon-plus" aria-hidden="true">';
          appendedIngredient += '</span></button></span>';
          appendedIngredient += '</div>';
        var compiledIngredient = $compile(appendedIngredient)($scope);
        nextIngredient.append(compiledIngredient);
    };

    $scope.addUtensil = function(){
      var nextUtensil = angular.element( document.querySelector( '.container-technique' ) );
      console.log(nextUtensil);
      var appendedUtensil = '<div class="input-group">';
          appendedUtensil += '<input type="text" class="form-control utensilName" placeholder="12-inch non-stick Skillet">';
          appendedUtensil += '<span class="input-group-btn">';
          appendedUtensil += '<button class="btn btn-default" type="button" ng-click="addUtensil()">';
          appendedUtensil += '<span class="glyphicon glyphicon-plus" aria-hidden="true">';
          appendedUtensil += '</span></button></span>';
          appendedUtensil += '</div>';
        var compiledUtensil = $compile(appendedUtensil)($scope);
        nextUtensil.append(compiledUtensil);
    };

    $scope.saveAndClear = function(){

      var ingredientsArray = angular.element( document.querySelector( '.ingredient-name' ) ).val();

      console.log("INGREDIENTSARRAY", ingredientsArray);

      recipeRepoObj = {
        recipeName: $scope.recipeName,
        cuisineName: $scope.cuisineName,
        cookingInstructions: $scope.cookingInstructions
      };

      console.log("RECIPEREPOOBJI", recipeRepoObj);

    };

    $scope.createToProfile = function(){

    };

    $scope.createToCulPort = function(){

    };

  }

]);