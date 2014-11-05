'use strict';

/**
 * @ngdoc function
 * @name emailGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emailGeneratorApp 
 */

angular.module('emailGeneratorApp')
  .controller('mainCtrl', function ($scope, $rootScope, $http, EmailOps) {

	$http.get('json/included.json').success(function(data) {
		$scope.items = data;
	});

	
$rootScope.$on('templates.undo.reset', function() {  
			/*
			$scope.templates = angular.copy(EmailOps.templatesDeleted);				*/
			$scope.header = EmailOps.emailDeleted.headerTemplate;   
			$scope.footer = EmailOps.emailDeleted.footerTemplate;
			console.log ($scope.templates)		
  });	
	
$rootScope.$on('templates.revertDraft', function() {
   $scope.templates = EmailOps.showTemplates();
    })	
	
  })



angular.module('emailGeneratorApp')
  .controller('emailCtrl', function ($scope, $rootScope, $http, EmailOps) {
	$scope.$on('$includeContentLoaded', function(event) {
  		console.log('another include was loaded', event.targetScope);
		EmailOps.checkIfEmailIsFilled();
	});
})