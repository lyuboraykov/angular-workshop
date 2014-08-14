bikeApp.controller('bikeController', ['$firebase', '$scope', function($firebase, $scope){
   var ref = new Firebase('https://motorcycledata.firebaseio.com');
   var sync = $firebase(ref);
   $scope.motorcycles = sync.$asArray();
   
   $scope.addBike = function(maker, model, price, horsePower) {
      var newBike = {
         maker: $scope.maker,
         model: $scope.model,
         price: $scope.price,
         horsePower: $scope.horsePower
      }
      $scope.motorcycles.$add(newBike)
   };
}]);