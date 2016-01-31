        angular.module('rdc.main.service', [])

        .service('mainService', ['$http', '$q', '$indexedDB', function ($http, $q, $indexedDB) {
            
            var OBJECT_STORE_NAME = 'inspections';
            
            this.getHerds = function () {
                    //return $http.get('http://localhost:8080/getHerds');
                    var herds = [{
                            herdNo: 'A1234567',
                            instanceNo: '456789',
                            status: 'Not Started',
                            farmerName: 'John Ryan',
                            smrs: [{
                                name: 'bovine',
                                status: 'Not Started'
                        }, {
                                name: 'ovine',
                                status: 'Not Started'
                        }, {
                                name: 'nitrates',
                                status: 'Not Started'
                        }]
                    },
                        {
                            herdNo: 'B1234567',
                            instanceNo: '324322',
                            status: 'Not Started',
                            farmerName: 'Paul Ryan',
                            smrs: [{
                                name: 'bovine',
                                status: 'Not Started'
                        }, {
                                name: 'ovine',
                                status: 'Not Started'
                        }, {
                                name: 'nitrates',
                                status: 'Not Started'
                        }]
                    },
                        {
                            herdNo: 'C1234567',
                            instanceNo: '786866',
                            status: 'Not Started',
                            farmerName: 'Igor Smith',
                            smrs: [{
                                name: 'bovine',
                                status: 'Not Started'
                        }, {
                                name: 'ovine',
                                status: 'Not Started'
                        }, {
                                name: 'nitrates',
                                status: 'Not Started'
                        }]
                    },
                        {
                            herdNo: 'D1234567',
                            instanceNo: '6786786',
                            status: 'Not Started',
                            farmerName: 'Noreen Ryan',
                            smrs: [{
                                name: 'bovine',
                                status: 'Not Started'
                        }, {
                                name: 'ovine',
                                status: 'Not Started'
                        }, {
                                name: 'nitrates',
                                status: 'Not Started'
                        }]
                    },
                        {
                            herdNo: 'E1234567',
                            instanceNo: '987978',
                            status: 'Not Started',
                            farmerName: 'Pink Floyd',
                            smrs: [{
                                name: 'bovine',
                                status: 'Not Started'
                        }, {
                                name: 'ovine',
                                status: 'Not Started'
                        }, {
                                name: 'nitrates',
                                status: 'Not Started'
                        }]
                    }];
                    var deferred = $q.defer();

                    deferred.resolve(herds);
                    return deferred.promise;
                };


               this.getHerdDetails = function(){
                   /* var myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);
                     myObjectStore.getAll().then(function (results) {
                         // Update scope
                       // console.log(results);
                     });*/
            
                };


                this.saveHerdDetails = function (inspectionData) {
                   
                        /*$indexedDB.openStore(OBJECT_STORE_NAME, function (store) {
                            store.upsert(inspectionData).then(function(e) {
                                console.log(e);
                            });
                        });       */            
            
                    };
}]);