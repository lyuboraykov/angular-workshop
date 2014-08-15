'use strict';

/* Directives */

angular.module('bikeApp')
.directive("bikeTable", function() {
  	return {
  		restrict: 'E',
  		scope: {
  			data: '='
  		},
  		link: function(scope, element, attrs) {
  			scope.$watch("data", function(newVal, oldVal){
  				if (newVal) {
		   			var html = "<table>";
		    		for (var index in newVal) {
		      	 		var bike = newVal[index];
		      	 		console.log(bike);
		      	 		html += "<tr><td>" + bike.make + "</td><td>" + 
		      	 			bike.model + "</td><td>" + bike.price + "</td><tr>";
		    		}
		    		html += "</table>";
		    		element.html(html);      					
  				}
  			}, true);
  		}
  	};
});

