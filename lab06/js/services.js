'use strict';

/* Services */

// Create a factory service that gets data with http
angular.module('bikeApp.services', [])
  .factory('bikeService', function($http){
      var bikes = [{"maker": "MZ", "model": "Tourist", "price": "3000", "horsePower": "20"}];
      $http.get("bikes.json")
         .then(function(response) {
            Array.prototype.push.apply(bikes, response.data);
         });
      return bikes;
  });
