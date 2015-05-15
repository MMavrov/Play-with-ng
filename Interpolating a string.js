// to see this example in action open in your browser, type
    // an email address into the email field. Then in the text area
    // box type: Hello __ to __.

angular
.module('myApp', ['emailParser'])
.controller('MyController', ['$scope', 'EmailParser', function($scope, EmailParser){
  $scope.to = 'm.mavrov@abv.bg';
  $scope.emailBody = 'Hello, __to__';
  
  $scope.$watch('emailBody', function(body){
    if (body){
      $scope.previewText = EmailParser.parse(body, {to: $scope.to});
    }
  });
  
  $scope.$watch('to', function(value){
    if (value){
      $scope.previewText = EmailParser.parse($scope.emailBody, {to: value});
    }
  });
}]);

angular
.module('emailParser', [])
.config(['$interpolateProvider',
  function($interpolateProvider) {
    $interpolateProvider.startSymbol('__');
    $interpolateProvider.endSymbol('__');
  }])
.factory('EmailParser', ['$interpolate',
  function($interpolate){
    return {
      parse: function(text, context){
        var template = $interpolate(text);
        return template(context);
      }
    };
  }]);
