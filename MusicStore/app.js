(function(){ //Wrapping your JS in a closure is a good habit
    var app = angular.module('musicStore', []);

    app.controller('StoreController', function(){
        var vm = this;

        vm.products = instruments;
    });

    var instruments = [
        {
            name: 'Drums',
            price: 1200.95,
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Guitar',
            price: 2200.99,
            canPurchase: false,
            soldOut: false
        }];

})();
