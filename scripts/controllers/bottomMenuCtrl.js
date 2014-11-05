'use strict';

/**
 * @ngdoc function
 * @name emailGeneratorApp.controller:MainCtrl
 * @description
 * # bottomMenuCtrl
 * Controller of the emailGeneratorApp
 */

angular.module('emailGeneratorApp')
  .controller('exportCtrl', function ($rootScope, $scope, EmailOps, $http) {
		
		$http.get('partials/email_styles.html').success(function(data) {
			$scope.emailStyles = data;
		});
			
    	$scope.exportData = function () {
			//check if header, foo ter and content are added
			var emailHeaderLength = angular.element('.emailTopHead').text().length;
			var emailColumnsLength = angular.element('#emailBody').text().length;
			var emailFooterLength = angular.element('.emailFoot').text().length;
			if (emailHeaderLength==0 || emailColumnsLength==0 || emailFooterLength==0){
				$rootScope.emailNotFilled = true;
				}
			else{$rootScope.emailNotFilled = false;}
			
			
			var emailStyles = $scope.emailStyles;

			var emailHeader = angular.element('#emailHeader').html().replace('contenteditable="true"', ' ');
				
			var emailFooter = angular.element('#emailFooter').html().replace('contenteditable="true"', ' ');	
			
			var email_inner = [];
				var all_elems = angular.element('.emailColumns');
					for (var i = 0; i < all_elems.length; ++i) {
						var item = all_elems[i];  
						var item_content = item.innerHTML;
						email_inner.push(item_content);
					}
					
			var email_inner_content =  email_inner.join(" ").replace('contenteditable="true"', ' ');	//contents of email columns stripped from unneccessary tags
	
			var content = emailHeader + email_inner_content + emailFooter;	
			var emailTitle;
			
				if (!$scope.emailTitle){
						emailTitle = 'Exported email';
					}
				else{
						emailTitle = $scope.emailTitle;
				}	
			var emailContentTop ='<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 auto;"><tbody><tr><td><table border="0" cellpadding="0" cellspacing="0" width="600" style="margin:0 auto;" class="mainTable"><tbody><tr><td class="emailContent">';	
			var emailContentBottom ='</td></tr></tbody></table></td></tr></tbody></table>';
			var htmlHeadTop = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+
									'<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+
									'<meta name="viewport" content="width=device-width, initial-scale=1.0"/>'+
									'<title>'+ emailTitle +'</title>' + emailStyles + '</head><body yahoo="fix">';						
			var htmlDocBottom = '</body></html>';
			var blob = new Blob([htmlHeadTop+emailContentTop+content+emailContentBottom+htmlDocBottom], {
				type: "text/html;charset=utf-8"
			});
			
			var saveAsName = emailTitle + '.html';
			saveAs(blob, saveAsName);
			
			
				
				
	
    };
  });
  
  