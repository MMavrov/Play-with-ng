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
            vm.tab = tab;
        };
        vm.isSelected = function(tab){
            return vm.tab === tab;
        };
    });

    app.controller('ReviewController', function() {
        var vm = this;

        vm.review = {};

        vm.addReview = function(product) {
            vm.review.createdOn = Date.now();

            product.reviews.push(vm.review);

            vm.review = {};
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
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxh0QPteFAVRKNDCoAohIQMDuQL9p9yW4erQo3T0jOBEHBTyXM3Q',
            reviews: [{
                stars: 5,
                body: "I love this guitar!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This guitar sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        }, {
            name: 'Drums',
            price: 1200.95,
            canPurchase: true,
            soldOut: false,
            description: 'TAMA',
            styles: ['country', 'metal'],
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStZWObF8wU0BFg6WPiQ5mc1R6d1BdNVirC5TC_KoBh1KJHbdfN',
            reviews: [{
                stars: 3,
                body: "I think those drums were just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Those drums are for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }]
        }];
})();
