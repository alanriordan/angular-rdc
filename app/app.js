'use strict';

// Declare app level module which depends on views, and components
angular.module('rdc', ['ui.router','ui.bootstrap','rdc.nitrates','rdc.bovine','rdc.ovine', 'rdc.main', 'rdc.tab', 'indexedDB']);

angular.module('rdc').value('appVersion', '1.0')


angular.module('rdc').config(function($stateProvider, $locationProvider, $urlRouterProvider,$indexedDBProvider){
    $stateProvider 
        .state('main',{url:'/main', templateUrl:'modules/main/main.html'})
        .state('tab',{url:'/tab/:herdId', templateUrl:'modules/tab/tab.html',  controller:'TabController'})
        .state('tab.bovine',{url:'/bovine', templateUrl:'modules/bovine/bovine.html', controller:'BovineController'})
        .state('tab.ovine',{url:'/ovine', templateUrl:'modules/ovine/ovine.html', controller:'OvineController'})
        .state('tab.nitrates',{url:'/nitrates', templateUrl:'modules/nitrates/nitrates.html', controller:'NitratesController'});
    
    $urlRouterProvider.otherwise('/main');
    
    // In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    
    var request = window.indexedDB.open("rdcDB", 3);
    
     $indexedDBProvider.connection('rdcDB').upgradeDatabase(5, function(event, db, tx){
        var objStore = db.createObjectStore('inspections', {keyPath: 'instanceNo'});
        objStore.createIndex('herdNo','herdNo',{unique: false});        
      });
});



