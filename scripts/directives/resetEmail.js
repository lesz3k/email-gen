//reset email button directive
EmailGen.directive('resetEmailButton', ['$compile', 'EmailOps', '$rootScope', function($compile, EmailOps, $rootScope){
    return {
        restrict: 'A',
        link: function( scope, element, attrs ) {
       element.bind( "click", function() {
		  scope.$apply(function(){
		   EmailOps.emailDeleted.emailTemplates = null;
		   EmailOps.emailDeleted.emailContent = null;
		   
			 var emailTemplates = EmailOps.templates;
		  	 var emailHeader = angular.element('#emailHeader').html();
			 var emailFooter = angular.element('#emailFooter').html();
			 var emailColumns = angular.element('#emailBody').html();
				EmailOps.emailDeleted = {};
				EmailOps.emailDeleted.emailContent = null;
		   		EmailOps.emailDeleted = {'headerTemplate':scope.header, 'headerContent': emailHeader,'footerTemplate':scope.footer, 'footerContent': emailFooter, 'emailTemplates':emailTemplates, 'emailContent':emailColumns};
				EmailOps.templatesDeleted = angular.copy(emailTemplates);
				
				EmailOps.templates = [];
				scope.$parent.templates = [];
				scope.header = scope.footer = undefined;
				
				angular.element('#emailHeader').empty();
				angular.element('#emailFooter').empty();
				angular.element('.emailColumns').empty();
				$rootScope.$emit( 'templates.reset' );	 
				console.log(EmailOps.emailDeleted.emailContent);
		  })
      })
      }
    }
 }])
 
//revert reset email button directive 
.directive('undoResetEmail', ['$compile', 'EmailOps', '$rootScope', function($compile, EmailOps, $rootScope){
    return {
        restrict: 'A',
        link: function( scope, element, attrs ) {
       element.bind( "click", function() {
		    scope.$apply(function(){
				EmailOps.templates = [];
				
				/*EmailOps.templates = angular.copy(EmailOps.templatesDeleted);*/

				scope.$parent.templates = EmailOps.templates;
				
				var emailHeader = angular.element('#emailHeader');
				var emailFooter = angular.element('#emailFooter');
				var emailColumns = angular.element('#emailBody');
				
	   			scope.header = EmailOps.emailDeleted.headerTemplate;   
				scope.footer = EmailOps.emailDeleted.footerTemplate;
				
				emailHeader.html(EmailOps.emailDeleted.headerContent);	 
				emailFooter.html(EmailOps.emailDeleted.footerContent);
				angular.element('.emailColumns').empty();
				emailColumns.prepend(EmailOps.emailDeleted.emailContent);
				
				$rootScope.$emit( 'templates.undo.reset' );
				console.log(EmailOps.templates);
			})
      });
      }
    }
 }]);