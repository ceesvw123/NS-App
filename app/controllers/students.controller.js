(function() {
    'use strict';

    angular
        .module('controllers', ['uiGmapgoogle-maps'])
        .controller('StationsController', StationsController);

    function StationsController(StationsService) {

        var vm = this;

        //vm.newStudent = {};

        vm.allStations = StationsService.allStations;
        vm.map = { center: { latitude: 52.3702, longitude: 4.8952 }, zoom: 12 };



        vm.setStation = function(currentStation){
            if(vm.currentStation != currentStation)
                vm.currentStation = currentStation;
            else
                vm.currentStation = undefined;

           // console.log(vm.currentStudent);
            //vm.map = { center: { latitude: 52.3702, longitude: 4.5952 }, zoom: 12 };
            vm.map.center.longitude = vm.currentStation.geoLong;
            vm.map.center.latitude = vm.currentStation.geoLat;
        };

        vm.createStation = function(){
            var newStation = {
                name: vm.newStation.name,
                age: vm.newStation.age
            }

            vm.allStations.splice(0, 0, newStation);
            //vm.allStations.push(newStudent);

            vm.newStation = {};
        }





    }




})();