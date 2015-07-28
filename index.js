var app = angular.module('demoapp', ['openlayers-directive']);

app.controller('DemoController', [ '$scope', function($scope) {
    angular.extend($scope, {
        bern: {
            lat: 46.94,
            lon: 7.44,
            zoom: 7
        }
    });

    $scope.state = {
      rowObjectIdHovered: undefined,
      mapObjectIdHovered: undefined
    };

    // dummy data
    $scope.objects = [
          {
            "id": "1",
            "standort": "Bild",
            "beschreibung": "Aabachstrasse 16",
            "wochenpreis": "48",
            "format": "F4M",
            "ort": "Zug-Herti",
            "lat": 47.17717693671103,
            "lon": 8.506978072183173
        },
        {
            "id": "2",
            "standort": "Bild",
            "beschreibung": "Alte Landstrasse 192 - neben ZVB Abri",
            "wochenpreis": "240",
            "format": "F12",
            "ort": "Unterägeri",
            "lat": 47.1410163,
            "lon": 8.573110799999995
        },
        {
            "id": "3",
            "standort": "Bild",
            "beschreibung": "Florissant, Routede 52",
            "wochenpreis": "162",
            "format": "F12",
            "ort": "Genève-Champel",
            "lat": 46.1927354,
            "lon": 6.162045300000045
        },
        {
            "id": "4",
            "standort": "Bild",
            "beschreibung": "Fontaine, Chemin de la 5",
            "wochenpreis": "385",
            "format": "F12L",
            "ort": "Nyon",
            "lat": 46.3878733,
            "lon": 6.220048799999972
        }];

        // workaround for the angular-openlayers-driective
        // https://github.com/tombatossals/angular-openlayers-directive/issues/76#issuecomment-120605824
        angular.forEach($scope.objects, function(object) {
          object.label = {
            message: ' ',
            show: false,
            showOnMouseClick: false
          };
          object.onClick = function(event, properties) {
            $scope.state.mapObjectIdHovered = properties.id;
          };
        });
}]);
