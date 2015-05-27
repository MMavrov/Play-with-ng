/**
 * Created by Milen on 5/27/2015.
 */
(function(){ //Wrapping your JS in a closure is a good habit
    var app = angular.module('store-products', []);

    app.controller("ReviewController", function(){
        var vm = this;

        vm.review = {};

        vm.addReview = function(product){
            vm.review.createdOn = Date.now();

            product.reviews.push(vm.review);
            vm.review = {};
        };

    });

    app.directive('productReviews', function(){
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict:"A",
            templateUrl: "product-specs.html"
        };
    });

    app.directive("productDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
    });

    app.directive("productTabs", function(){
        return {
            restrict: 'E',
            templateUrl: "product-tabs.html",
            controller: function() {
                var vm = this;
                vm.tab = 1;

                vm.isSelected = function(checkTab) {
                    return vm.tab === checkTab;
                };

                vm.setTab = function(setTab) {
                    vm.tab = setTab;
                };
            },
            controllerAs: 'tabController'

        };
    });

})();
