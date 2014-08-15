'use strict';

angular.module('newProjectApp')
  .controller('VolumeCtrl', function ($scope, $http) {
    $http.get("http://localhost:9000/api/totalCurrency").success(function (data) {
                    $scope.agents = data;
                    $scope.getTotal = function(){
   
    

    var total = 0;
    var gtotal = 0;


    for(var i = 0; i < $scope.agents.length; i++)

    	if($scope.agents[i].currency == 'USA') 
    	

    		{
        		var agent = $scope.agents[i];
        		total = parseFloat(agent.balance);
        		gtotal += total;
			}

    return Math.abs(gtotal);
}

 $scope.getTotalTwo = function(){
   
    

    var total = 0;
    var gtotal = 0;


    for(var i = 0; i < $scope.agents.length; i++)

    	if($scope.agents[i].account == 'rU9rfWQURS5TXukVySMp583vo1wNNUeJeF' && $scope.agents[i].currency == 'USA') 
    	

    		{
        		var agent = $scope.agents[i];
        		total = parseFloat(agent.balance);
        		gtotal += total;
			}

    return Math.abs(gtotal);
}
					




                });
  });
