angular.module('rdc.tab.controller',[])
    
.controller('TabController',["$scope", "$stateParams", function($scope, $stateParams){

      $scope.selectedHerdId = $stateParams.herdId;
      $scope.selectedTab = $stateParams.smr;

}]);