angular
.module('myApp', ['myApp.filters'])
.controller('MyController', function($scope){
  $scope.car = {
        brand: "Moskvich",
        price: 102
    };

  $scope.persons = [{
        'name': 'Bob',
        'City': 'San Francisco',
        'favorite food': 'Pizza'
        }, {
        'name': 'Alice',
        'City': 'San Francisco',
        'favorite food': 'indian food'
        }];
});

angular
.module('myApp.filters', [])
.filter('capitalize', function() {
  return function(input){
    if(input){
      return input[0].toUpperCase() + input.slice(1);
    }
  }
});