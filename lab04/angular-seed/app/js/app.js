'use strict';


// Declare app level module which depends on filters, and services
angular.module('bikeApp', [
  'ngRoute',
  'bikeApp.filters',
  'bikeApp.services',
  'bikeApp.directives',
  'bikeApp.controllers',
  'firebase'
]).
config(function($routeProvider) {
   $routeProvider
      .when("/bike-maker", {
         controller: "bikeController",
         templateUrl: "partials/maker-view.html"
      })
      .when("/bike-model", {
         controller: "bikeController",
         templateUrl: "partials/model-view.html"
      })
      .when("/add-bike", {
         controller: "bikeController",
         templateUrl: "partials/add-bike-view.html"
      })
      .otherwise({
         redirectTo: "/bike-maker"
      })
});