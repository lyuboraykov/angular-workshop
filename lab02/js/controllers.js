bikeApp.controller('bikeController', ['$scope', function($scope){
   $scope.motorcycles = [
      { maker: 'Honda', model: 'VFR750F', price: 8450 },
      { maker: 'Ducati', model: 'Paso 907', price: 3200 },
      { maker: 'BMW', model: 'R1200RT', price: 7699 },
      { maker: 'Yamaha', model: 'Super Tenere', price: 10000 }
   ];
}]);

bikeApp.controller('bikeModelController', ['$scope', function($scope){
   $scope.motorcycles = [
      { maker: 'Honda', model: 'VFR750F', price: 8450, horsePower: 80 },
      { maker: 'Ducati', model: 'Paso 907', price: 3200, horsePower: 60 },
      { maker: 'BMW', model: 'R1200RT', price: 7699, horsePower: 90 },
      { maker: 'Yamaha', model: 'Super Tenere', price: 10000, horsePower: 70 }
   ];
}]);