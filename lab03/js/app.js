var bikeApp = angular.module('bikeApp', ['ngRoute', 'firebase']);

bikeApp.config(function($routeProvider) {
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