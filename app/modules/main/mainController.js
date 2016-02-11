angular.module('rdc.main.controller',['rdc.main.service'])

.controller('MainController',["$scope", "$state", "$stateParams", "appVersion", "mainService", "$mdSidenav", function($scope, $state, $stateParams, appVersion, mainService, $mdSidenav){
    
      /*  var OBJECT_STORE_NAME = 'INSPECTIONS';  
        var inspectionsObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);*/
    
        $scope.go = function(route){
			$state.go(route);
		};

		$scope.active = function(route){
			return $state.is(route);
		};
		
		$scope.toggleUsersList = function() {
		      $mdSidenav('left').toggle();
		    }
    
      
		$scope.tabs = [
			{ heading: "Bovine", route:"tab.bovine", active:false },
			{ heading: "Nitrates", route:"tab.nitrates", active:false },
			{ heading: "Ovine", route:"tab.ovine", active:false },
		];

		$scope.$on("$stateChangeSuccess", function() {
			$scope.tabs.forEach(function(tab) {
				tab.active = $scope.active(tab.route);
			});
		});    
    
    $scope.version = appVersion;

    mainService.getHerds().then(function(data){
        $scope.herds = data;
        mainService.saveHerdDetails(data);
    });
    
    
    $scope.getHerdStatus = function(herdNo){
       mainService.getHerdDetails(); 
      // Update scope
     // console.log(results);
    
    }
    
  
 

}]);