var app = angular.module("demoapp", ['openlayers-directive']);

app.controller('DemoController', [ '$scope', function($scope) {
    angular.extend($scope, {
        bern: {
            lat: 46.94,
            lon: 7.44,
            zoom: 5
        }
    });

    // dummy data
    $scope.objects = [
          {
            "id": "1",
            "standort": "Bild",
            "beschreibung": "Aabachstrasse 16",
            "wochenpreis": "48",
            "format": "F4M",
            "ort": "Zug-Herti",
            "latitude": 47.17717693671103,
            "longitude": 8.506978072183173
        },
        {
            "id": "2",
            "standort": "Bild",
            "beschreibung": "Alte Landstrasse 192 - neben ZVB Abri",
            "wochenpreis": "240",
            "format": "F12",
            "ort": "Unterägeri",
            "latitude": 47.1410163,
            "longitude": 8.573110799999995
        },
        {
            "id": "3",
            "standort": "Bild",
            "beschreibung": "Florissant, Routede 52",
            "wochenpreis": "162",
            "format": "F12",
            "ort": "Genève-Champel",
            "latitude": 46.1927354,
            "longitude": 6.162045300000045
        },
        {
            "id": "4",
            "standort": "Bild",
            "beschreibung": "Fontaine, Chemin de la 5",
            "wochenpreis": "385",
            "format": "F12L",
            "ort": "Nyon",
            "latitude": 46.3878733,
            "longitude": 6.220048799999972
        }];
}]);
