var app = angular.module("demoapp", ['openlayers-directive']);

app.controller('DemoController', [ '$scope', function($scope) {
    angular.extend($scope, {
        bern: {
            lat: 46.94,
            lon: 7.44,
            zoom: 5
        }
    });
}]);
