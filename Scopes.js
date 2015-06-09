(function(){
    angular.module('myApp', [])
        .controller('SomeCtrl', function($scope) {
            // the controller is actually a directive with scope: true
        })
        .directive('withoutScope', function(){
        })
        .directive('withScope', function() {
            return {
                restrict: 'A',
                scope: true
            }
        })
        .directive('withIsolateScope', function(){
            return {
                restrict: 'A',
                scope: {}
            }
        })
})();