(function () {

    angular
        .module('app.controller', ['app.service'])
        .controller('LyricsController', function (LyricsService) {
            var vm = this;

            LyricsService.getLyricsOf().then(function (data) {
                vm.obj = data;
            },
                function (data) {
                    vm.obj = data;
                });
        });
})();
