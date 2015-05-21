angular.module('myApp', [])
.directive('myDirective', function(){
  return {
    restrict: 'A',
    scope: {
      myUrl: '@',
      myLinkText: '@'
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  };
});