angular
.module('MyModule', [])
.controller('MyController', function($scope, $parse){
  $scope.person = {
        name: "Penata",
        age: 102
    };

  $scope.$watch('expr', function(newVal, oldVal, scope){
    if(newVal!==oldVal){
      var parseFun = $parse(newVal);
      $scope.parsedValue = parseFun(scope);
    }
  });
});