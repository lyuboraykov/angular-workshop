'use strict';

/* The Application Module */

angular.module('bikeApp',['ngRoute', 'ngResource'])
    .config(function($routeProvider){
        $routeProvider
        .when("/bike_make", {
            controller:  "bikeCtrl",
            templateUrl: "partials/make_view.html"
        })
        .when("/bike_model", {
            controller:  "bikeCtrl",
            templateUrl: "partials/model_view.html"
        })
        .when("/add_bike", {
            controller:  "bikeCtrl",
            templateUrl: "partials/add_bike_view.html"
        })
        .when('/load_bike', {
            controller: "bikeLoadController",
            templateUrl: "partials/load_bike_view.html"
        })
        .otherwise({ redirectTo: "/bike_make" });
    });