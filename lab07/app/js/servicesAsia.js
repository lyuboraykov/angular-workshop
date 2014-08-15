'use strict';

/* Services */

angular.module('bikeApp')
	.value(	'bikeService',
	  			[{make: 'Honda', model:'VFR750F', price: 8450},
	             {make: 'YAMASAKI', model:'YM150-3D', price: 995},
	             {make: 'Hyosung', model:'GT250R', price: 2150}]
	);	
