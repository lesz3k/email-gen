EmailGen.service('EmailOps', function ($rootScope) { 	
		var templates = []; 
		var templatesDeleted = [];
		var emailDraft = {};
		var emailDraftContent = [];     
		var emailDeleted = {};
		 
		$rootScope.$on('templates.reset', function() {   
			templates = [];	   	  
    	});
		
		$rootScope.$on('templates.undo.reset', function() {   
			templates = [];
    	}); 
		
		function checkIfEmailIsFilled() {
            
            function getElemLength(elemName){
                angular.element(elemName).text().length;
            };
            
            var emailHeaderLength = getElemLength('.emailTopHead');
            var emailColumnsLength = getElemLength('#emailBody');
            var emailFooterLength = getElemLength('.emailFoot');
                
				/*var emailHeaderLength = angular.element('.emailTopHead').text().length;
				var emailColumnsLength = angular.element('#emailBody').text().length;
				var emailFooterLength = angular.element('.emailFoot').text().length;*/
            
				if (emailHeaderLength!==0 && emailColumnsLength!==0 && emailFooterLength!==0){
					console.log("email is filled");
						$rootScope.emailNotFilled = false;
					}
			};	
		/*
		function saveDraft () {
			var emailColumns = angular.element('#emailColumns');
			var emailColumnsHtml = emailColumns.html();   
				emailDraft = {'headerTemplate':$rootScope.header, 'footerTemplate':$rootScope.footer, 'emailContent':emailColumnsHtml }
				emailDraftContent.push.apply(emailDraftContent,templates);
				console.log(emailDraft);	 
			}	
		function revertDraft () {
				$rootScope.header = emailDraft.headerTemplate;
				templates = [];
				templates.push.apply(templates,emailDraftContent);
				$rootScope.footer = emailDraft.footerTemplate;
				$rootScope.$emit( 'templates.revertDraft' );
				console.log(templates);
			}				
			*/
		function showTemplates () {
			return templates;
			}		
		 
        return {
			templates:templates,
			emailDeleted:emailDeleted,
			showTemplates:showTemplates,
			checkIfEmailIsFilled:checkIfEmailIsFilled
			/*saveDraft:saveDraft,
			revertDraft:revertDraft*/
     
        };
    })