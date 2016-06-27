(function() {
    'use strict';

    angular
        .module('services')
        .service("StationsService", StationsService);

    function StationsService($http) {
        var self = this;

        // we houden de data netjes bij in de service
        // onze service is nu een 'model' voor onze app
        self.allStations = [
            {name:"Anton", age:18},
            {name:"Joris", age:29},
            {name:"Cees", age:19},
            {name:"Ryan", age:18},
            {name:"Jesse", age:18},
            {name:"Idris", age:20},
            {name:"Donovan", age:18}
        ];

        self.createStation = function(newStation){
            self.allStations.splice(0, 0, newStation);
        };

        $http.get('data/trainstations.json').then(function(stations){

            // we maken eerst de data leeg
            self.allStations.length = 0;
            // en stoppen vervolgens de geladen data in de allStudents array
            // dit zorgt ervoor dat we nog steds met dezelfde array werken
            angular.extend(self.allStations, stations.data);
        });
    }
})();
