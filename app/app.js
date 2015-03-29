'use strict';

// Declare app level module which depends on views, and components
angular.module('rdc', ['ui.router','ui.bootstrap','rdc.nitrates','rdc.bovine','rdc.ovine', 'rdc.main', 'rdc.tab', 'ngAnimate', 'ngNotificationsBar']);

angular.module('rdc').value('appVersion', '1.0')


angular.module('rdc').config(function($stateProvider, $locationProvider, $urlRouterProvider){
    $stateProvider 
        .state('main',{url:'/main', templateUrl:'modules/main/main.html'})
        .state('tab',{url:'/tab/:herdId', templateUrl:'modules/tab/tab.html',  controller:'TabController'})
        .state('tab.bovine',{url:'/bovine', templateUrl:'modules/bovine/bovine.html', controller:'BovineController'})
        .state('tab.ovine',{url:'/ovine', templateUrl:'modules/ovine/ovine.html', controller:'OvineController'})
        .state('tab.nitrates',{url:'/nitrates', templateUrl:'modules/nitrates/nitrates.html', controller:'NitratesController'});
    
    $urlRouterProvider.otherwise('/main');
});

