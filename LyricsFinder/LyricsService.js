(function () {
    angular
        .module('app.service', [])
        .service('LyricsService', function ($http) {
            var that = this;

            that.getLyricsOf = getLyricsOf;

            function getLyricsOf() {
                var response = {
                    body: 'dummy'
                }

                $http.get('http://api.musixmatch.com/ws/1.1/')
                    .success(function (data){
                        response.body = data;
                    })
                    .error(function (data, status) {
                        response.body =data;
                    });

                return response;
            }
        });
})();