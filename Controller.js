angular
.module('MyModule', [])
.controller('MyController', function($scope){
    $scope.counter = {
        count : 0,
        add : function(amount){
          this.count += amount;
        }
    };
});