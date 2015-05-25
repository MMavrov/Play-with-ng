/**
 * Created by Milen on 5/25/2015.
 */
angular
.module('app')

.directive('ngFocus', function() {
    var FOCUS_CLASS = "ng-focused";
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$focused = false;
            element.bind('focus', function(evt) {
                element.addClass(FOCUS_CLASS);
                scope.$apply(function() {ctrl.$focused = true;});
            }).bind('blur', function(evt) {
                element.removeClass(FOCUS_CLASS);
                scope.$apply(function() {ctrl.$focused = false;});
            });
        }
    }
})

.controller('MainController', function(){
        var vm = this;

        vm.new = {};
        vm.addShow = function() {
            vm.shows.push(vm.new);
            vm.new = {};
        };

        vm.title = 'Simple list manipulator';
        vm.searchInput = '';
        vm.shows = [
            {
                title: 'Game of Thrones',
                year: 2011,
                favorite: true
            },
            {
                title: 'Walking Dead',
                year: 2010,
                favorite: false
            },
            {
                title: 'Firefly',
                year: 2002,
                favorite: true
            },
            {
                title: 'Banshee',
                year: 2013,
                favorite: true
            },
            {
                title: 'Greys Anatomy',
                year: 2005,
                favorite: false
            }
        ];

        vm.orders = [
            {
                id: 1,
                title: 'Year Ascending',
                key: 'year',
                reverse: false
            },
            {
                id: 2,
                title: 'Year Descending',
                key: 'year',
                reverse: true
            },
            {
                id: 3,
                title: 'Title Ascending',
                key: 'title',
                reverse: false
            },
            {
                id: 4,
                title: 'Title Descending',
                key: 'title',
                reverse: true
            }
        ];
        vm.order = vm.orders[0];
    });