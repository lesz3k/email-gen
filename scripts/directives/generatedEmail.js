EmailGen.directive('generatedEmail',['$compile', 'EmailOps', '$rootScope', function($compile, EmailOps, $rootScope) {
    return {
      restrict: 'E',
      template: '<div class="emailTopHead"><div ng-include="header" id="emailHeader"> </div></div>'+
	  			'<div id="emailBody"><div ng-repeat="template in templates" class="emailColumns">'+
					'<table ng-include="template.url" width="600">'+
					'</table>'+
				'</div></div>'+
				'<div class="emailFoot"><div ng-include="footer" ng-model="foot" id="emailFooter"></div></div>'	
    };			
  }]);
  
  
  
