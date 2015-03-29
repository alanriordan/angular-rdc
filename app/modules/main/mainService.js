angular.module('rdc.main.service',[])

.service('mainService', ['$http', '$q', function($http, $q){

    this.getHerds = function(){
        //return $http.get('http://localhost:8080/getHerds');
        var herds = [{herdNo:'A1234567', instanceNo:'456789', status:'Saved'},
                         {herdNo:'B1234567', instanceNo:'324322', status:'Finished'},
                         {herdNo:'C1234567', instanceNo:'786866', status:'Not Started'},
                         {herdNo:'D1234567', instanceNo:'6786786', status:'Not Started'},
                         {herdNo:'E1234567', instanceNo:'987978', status:'Not Started'}];
        var deferred =  $q.defer();
        
        deferred.resolve(herds);
        return deferred.promise;
    }
    
    
    this.getNotifications = function(){
     
        var notifications = [{text:'Can people plese finish inspections by 2013'},{text:'Rdc will be offline for the next three hours'}
                            ,{text:'Rdc is planning an upgrade on the system next year'}, {text:'Can all inspections please be finished come june'}];
        
         var deferred =  $q.defer();
        
        deferred.resolve(notifications);
        return deferred.promise;
    }

}])