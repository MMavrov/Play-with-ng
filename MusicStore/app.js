(function(){ //Wrapping your JS in a closure is a good habit
    var app = angular.module('musicStore', ['store-products']);

    app.controller('StoreController', ['$http', function($http){
        var vm = this;

        vm.products = [];
        $http.get('products.json').success(function(data){
            vm.products = data;
        });
    }]);
})();
