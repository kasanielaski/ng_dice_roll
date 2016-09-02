document.addEventListener("DOMContentLoaded",function(){
	
	//модель
	var model = {
		name: 'Username',
		diceResults: []
	};

	//модуль
	var DiceRoll = angular.module('DiceRoll', []); 

	//контроллер
	DiceRoll.controller('DiceRollCtrl', function($scope){
		$scope.data = model;
		$scope.addResults = function () {
			var value = Math.floor(Math.random()*6)+1;
			$scope.data.diceResults.push({
				name: $scope.data.name,
				value: value
			});
		};
	});
})