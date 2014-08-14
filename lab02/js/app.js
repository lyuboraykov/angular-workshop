var bikeApp = angular.module('bikeApp', ['ngRoute']);

bikeApp.config(function($routeProvider) {
   $routeProvider
      .when("/bike-maker", {
         controller: "bikeController",
         templateUrl: "partials/maker-view.html"
      })
      .when("/bike-model", {
         controller: "bikeModelController",
         templateUrl: "partials/model-view.html"
      })
      .otherwise({
         redirectTo: "/bike-maker"
      })
});