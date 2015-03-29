angular.module('rdc.main.controller',['rdc.main.service'])

.controller('MainController',["$scope", "$state", "$stateParams", "appVersion", "mainService", "notifications", function($scope, $state, $stateParams, appVersion, mainService, notifications){
        $scope.go = function(route){
			$state.go(route);
		};

		$scope.active = function(route){
			return $state.is(route);
		};
    
      
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
    });
    
    mainService.getNotifications().then(function(data){
        $scope.notifications = data;
    });
    
    $scope.getHerdStatus = function(status){
        var inspStatus = "";
        if (status === 'Finished'){
            inspStatus = 'success';
        }else if (status === 'Saved'){
            inspStatus = 'warning';
        }
        return inspStatus;
    }
    
      
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