(function () {

    angular
        .module('app.controller', ['app.service'])
        .controller('LyricsController', function (LyricsService) {
            var vm = this;

            vm.obj = {};

            vm.obj = LyricsService.getLyricsOf();
        });
})();
