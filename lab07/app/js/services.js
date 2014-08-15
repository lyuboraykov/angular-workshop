'use strict';

/* Services */

angular.module('bikeApp')
	.factory('bikeService', function($http) {
		var bikes=[];
		$http.get("bikes.json")
        .then(function(res){
          	Array.prototype.push.apply(bikes, res.data);
        });
        return bikes;
	})
	.factory('bikeSpecial', function() {
  		return {make: 'Bimota', model:'Tesi', price: 25995};
	});

