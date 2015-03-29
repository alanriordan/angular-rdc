angular.module('rdc.bovine.controller', [])

.controller('BovineController', ['$scope',function($scope, notifications){
    
    $scope.showError = function () {
    notifications.showError({message: 'Oops! Something bad just happend!'});
  };
  $scope.showWarning = function () {
    notifications.showWarning({message: 'Hey! Take a look here..'});
  };
  $scope.showSuccess = function () {
    notifications.showSuccess({message: 'Congrats! Life is great!'});
  };


}]);