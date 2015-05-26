(function(){ //Wrapping your JS in a closure is a good habit
    var app = angular.module('musicStore', []);

    app.controller('StoreController', function(){
        var vm = this;

        vm.products = instruments;
    });

    app.controller('TabController', function(){
        var vm = this;

        vm.tab = 1;

        vm.setTab = function(tab){
            this.tab = tab;
        };
        vm.isSelected = function(tab){
            return this.tab === tab;
        };
    });

    var instruments = [
        {
            name: 'Guitar',
            price: 2200.99,
            canPurchase: false,
            soldOut: false,
            description: 'Fender',
            styles: ['metal', 'jazz'],
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxh0QPteFAVRKNDCoAohIQMDuQL9p9yW4erQo3T0jOBEHBTyXM3Q'
        },
        {
            name: 'Drums',
            price: 1200.95,
            canPurchase: true,
            soldOut: false,
            description: 'TAMA',
            styles: ['country', 'metal'],
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStZWObF8wU0BFg6WPiQ5mc1R6d1BdNVirC5TC_KoBh1KJHbdfN'
        }];
})();
