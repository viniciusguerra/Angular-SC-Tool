//IIFE
(function(){
	'use strict'
	
	angular.module('SCAccess')
	.controller('RequestController', RequestController)

	RequestController.$inject = ['$scope', '$http'];
	function RequestController($scope, $http)
	{
		//Star Citizen API documentation at
		//https://bitbucket.org/sc-api/star-citizen-api/wiki/Usage%20Documentation

		$scope.http = $http;	

		$scope.getOrgsResponse = {
			test: 'value'
		};	

		$scope.getOrgsConfig = {
			method: 'GET',
			url: 'http://sc-api.com/',
			params: {
				api_source: 'live',
				data_source: 'RSI',
				system: 'organizations',
				action: 'all_organizations',
				start_page: '1',
				end_page: '1',
				items_per_page: '10'
			}
		}

		$scope.GetOrgs = function(){

			console.log("Getting organizations");

			$scope.http($scope.getOrgsConfig)
			.then(function successCallback(response)
			{
				$scope.GetOrgsSuccess(response);
			}, function errorCallback(response)
			{
				$scope.GetOrgsFail(response);
			});
		}

		$scope.GetOrgsSuccess = function(response){

			console.log("GetOrgs Successful");

			$scope.getOrgsResponse = response;

		}

		$scope.GetOrgsFail = function(response){

			console.log("GetOrgs Failed");
			
		}

		//Run GetOrgs request as soon as Controller loads
		$scope.GetOrgs();
	}

})();