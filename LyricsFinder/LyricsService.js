(function () {
    angular
        .module('app.service', [])
        .service('LyricsService', function ($q, $http) {
            var that = this;

            that.getLyricsOf = getLyricsOf;

            function getLyricsOf() {
                var deferred = $q.defer();

                $http.get('https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.lyrics.get', {
                    params: {
                        'track_id': '15449912'
                    },
                    headers: {
                        'X-Mashape-Key': 'uZyAnIbTjSmshqIhYaDsWZG2KNJzp1QX8onjsnhWVxqDv60PhW',
                        'Accept': 'application/json;charset=UTF-8'
                    }
                }).success(function (data, status, headers, config){
                    deferred.resolve(data);
                }).error(function (data, status, headers, config){
                    deferred.reject(data);
                });

                return deferred.promise;
            }
        });
})();