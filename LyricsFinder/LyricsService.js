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

                $http.jsonp('http://api.musixmatch.com/ws/1.1/artist.get?artist_id=118') // add &apikey='your_api_key'
                    .success(function (data){
                        response.body = data;
                    })
                    .error(function (data) {
                        response.body = data;
                    });

                return response;
            }
        });
})();