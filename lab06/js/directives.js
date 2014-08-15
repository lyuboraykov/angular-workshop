'use strict';

/* Directives */


angular.module('bikeApp.directives', [])
   // Directive with a linking function messing with the DOM
   .directive('bikeDirective', function() {
      return {
         restrict: 'A',
         scope: { 
            bikes: '='
         },
         template: '<div><span>{{ motorcycles }}</span></div>',
         link: function(scope, element, attributes) {
            scope.$watch("bikes", function(newValue, oldValue) {
               if (newValue) {
                  var html = '<table><caption>Motorcycle listings</caption>';
                  html += '<thead><tr><th>#</th><th>Maker</th><th>Model</th><th>Payment</th></tr></thead><tbody>';
                  for (var i = 0, length = newValue.length; i < length; i++) {
                     html += '<tr>';
                     html += '<td>' + (i + 1).toString() + '</td>';
                     html += '<td>' + newValue[i].maker + '</td>';
                     html += '<td>' + newValue[i].model + '</td>';
                     html += '<td>$' + ((newValue[i].price / 24) | 0).toString() + '</td>';
                     html += '</tr>';
                  };
                  html += '</tbody></table>';
               }
               element.html(html);
            }, true);
         }
    };
   })


   // Directive with self-invoking function for a template
   .directive('bikeTemplateDirective', function() {
      return {
         restrict: 'A',
         scope: { 
            bikes: '='
         },
         template: (function() {
            var html = '<table><caption>Motorcycle listings</caption>';
            html += '<thead><tr><th>#</th><th>Maker</th><th>Model</th><th>Payment</th></tr></thead><tbody data-ng-repeat="bike in bikes">';
            html += '<tr>';
            html += '<td> {{ $index + 1 }}</td>';
            html += '<td>{{ bike.maker | uppercase}}</td>';
            html += '<td>{{ bike.model }}</td>';
            html += '<td> {{ bike.price / 24 | currency }}</td></tr>';
            html += '</tbody></table>';
            return html;      
         })()
      };
   });