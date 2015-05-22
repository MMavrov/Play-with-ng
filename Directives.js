angular
    .module('myApp', [])
    .directive('myDirective', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl: "=",
                myLinkText: "@"
            },
            template: '<div> ' +
            '<input type="text" ng-model="myUrl"/> ' +
            '<a href="{{myUrl}}">{{ myLinkText }}</a> ' +
            '</div>'
        };
    });