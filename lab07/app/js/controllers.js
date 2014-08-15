'use strict';

/* Controllers */

angular.module('bikeApp')
	.controller('bikeCtrl', ['bikeService', 'bikeSpecial', '$scope', 
		             function(bikeService,   bikeSpecial,   $scope) {
    	$scope.bikes = bikeService;
    	$scope.special = bikeSpecial;
		$scope.addBike = function(make, model, price) {
    		$scope.bikes.push({make: make, model: model, price: price});
    	};
	}])
   .controller('bikeLoadController', ['$resource', '$scope', function($resource, $scope) {
      var loadBike = $resource('http://localhost:8888/:verb', {'verb': 'bike', 'make': 'Honda'});
      $scope.bikes = [];
      $scope.getBikes = function(bikeMake) {
            loadBike.get({'make': bikeMake}, function(result) {
               $scope.bikes = angular.fromJson(result).data;
            })
      }
   }]);