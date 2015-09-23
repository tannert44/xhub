app.controller( 'CulinaryRepoCtrl', [
  '$scope',
  '$firebaseObject',
  '$compile',
  function($scope, $firebaseObject, $compile){
    //Recipe Array to push to firebase
    var recipeRepoArr = [];
    //Recipe Object to be added to Recipe Array
    var recipeRepoObj = {};
    //Get Firebase reference
    var mainRef = new Firebase("https://xhub.firebaseio.com/users");
    //Get Firebase reference
    var authProvider = mainRef.getAuth().uid;
    var ref = new Firebase("https://xhub.firebaseio.com/users/" + authProvider);
    //creates firebase reference
    var obj = $firebaseObject(ref);

    $scope.recipeName = "";
    $scope.cuisineName = "";
    $scope.cookingInstructions = "";
    $scope.techniqueName = "";
    $scope.difficulty = "";
    $scope.techniqueInstructions = "";
    $scope.availability = "";
    
    $scope.addIngredient = function(){
      console.log('clicked');
      var nextIngredient = angular.element( document.querySelector( '.container-ingredient' ) );
      console.log(nextIngredient);
      var appendedIngredient = '<div class="input-group">';
          appendedIngredient += '<input type="text" class="form-control ingredient-name" placeholder="Celery 1/4 Cup">';
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
          appendedUtensil += '<input type="text" class="form-control utensil-name" placeholder="12-inch non-stick Skillet">';
          appendedUtensil += '<span class="input-group-btn">';
          appendedUtensil += '<button class="btn btn-default" type="button" ng-click="addUtensil()">';
          appendedUtensil += '<span class="glyphicon glyphicon-plus" aria-hidden="true">';
          appendedUtensil += '</span></button></span>';
          appendedUtensil += '</div>';
        var compiledUtensil = $compile(appendedUtensil)($scope);
        nextUtensil.append(compiledUtensil);
    };

    $scope.saveAndClear = function(){

      recipeRepoObj = {
        recipeName: $scope.recipeName,
        cuisineName: $scope.cuisineName,
        cookingInstructions: $scope.cookingInstructions,
        techniqueName: $scope.techniqueName,
        difficulty: $scope.difficulty,
        techniqueInstructions: $scope.techniqueInstructions,
        availability: $scope.availability
      };

      var ingredientNameInput = angular.element( '.ingredient-name' );

      var ingredientsArray = [];

      var utensilNameInput = angular.element( '.utensil-name' );

      var utensilArray = [];

      var appendedIngredient = '<div class="input-group">';
          appendedIngredient += '<input type="text" class="form-control ingredient-name" placeholder="Celery 1/4 Cup">';
          appendedIngredient += '<span class="input-group-btn">';
          appendedIngredient += '<button class="btn btn-default" type="button" ng-click="addIngredient()">';
          appendedIngredient += '<span class="glyphicon glyphicon-plus" aria-hidden="true">';
          appendedIngredient += '</span></button></span>';
          appendedIngredient += '</div>';

      var appendedUtensil = '<div class="input-group">';
          appendedUtensil += '<input type="text" class="form-control utensil-name" placeholder="12-inch non-stick Skillet">';
          appendedUtensil += '<span class="input-group-btn">';
          appendedUtensil += '<button class="btn btn-default" type="button" ng-click="addUtensil()">';
          appendedUtensil += '<span class="glyphicon glyphicon-plus" aria-hidden="true">';
          appendedUtensil += '</span></button></span>';
          appendedUtensil += '</div>';


      angular.forEach(ingredientNameInput, function(value, key){
        var ingredientForPush = angular.element(value).val();
        ingredientsArray.push(ingredientForPush);
      });

      angular.forEach(utensilNameInput, function(value, key){
        var utensilForPush = angular.element(value).val();
        utensilArray.push(utensilForPush);
      });

      console.log("INGREDIENTSARRAY", ingredientsArray);
      console.log("UTENSILARRAY", utensilArray);

      recipeRepoObj.ingredients = ingredientsArray;
      recipeRepoObj.utensils = utensilArray;

      console.log("RECIPEREPOOBJI", recipeRepoObj);

      recipeRepoArr.push(recipeRepoObj);

      console.log("RECIPEREPOARR", recipeRepoArr);
      //save recipRepoArr to userObject
      obj.$bindTo($scope, "data").then(function(){
        console.log("DATA", $scope.data);
        $scope.data.recipe = recipeRepoArr;
        });

      $scope.recipeName = "";
      $scope.cuisineName = "";
      $scope.cookingInstructions = "";
      $scope.techniqueName = "";
      $scope.difficulty = "";
      $scope.techniqueInstructions = "";
      $scope.availability = "";

      var ingredientContainer = angular.element('.container-ingredient');
      var compiledIngredient = $compile(appendedIngredient)($scope);
      var techniqueContainer = angular.element('.container-technique');
      var compiledUtensil = $compile(appendedUtensil)($scope);
      ingredientContainer.html(compiledIngredient);
      techniqueContainer.html(compiledUtensil);

    };

    $scope.createToProfile = function(){

    };

    $scope.createToCulPort = function(){

    };

  }

]);