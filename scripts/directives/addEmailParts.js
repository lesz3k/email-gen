//include content to email body

// ADDING HEADER
EmailGen.directive('addHeader', ['$compile', 'EmailOps', '$rootScope', function($compile,EmailOps, $rootScope){
    return {	
        restrict: 'E',
		 template: '<button type="button" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok"></span> ADD</button>',
		 controller: 'mainCtrl',
		link: function( scope, element, attrs, controller) {
       		element.bind( "click", function() {
				scope.$apply(function(){
	   				scope.$parent.header = "partials/email_parts/headers/header" + scope.item.id + ".html";  
				 
				});	
	   })}
    };
 }])

// ADDING FOOTER
.directive('addFooter', ['$compile', 'EmailOps', '$rootScope', function($compile, EmailOps, $rootScope){
    return {
		
     restrict: 'E',
		 template: '<button type="button" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-ok"></span> ADD</button>',
		 controller: 'mainCtrl',
		link: function( scope, element, attrs, controller) {
       		element.bind( "click", function() {
	   			scope.$apply(function(){
             	scope.$parent.footer = "partials/email_parts/footers/footer" + scope.item.id + ".html";
		
          });			
	   })}
    };
 }])

//ADDING CONTENTS
.directive('addEmailColumn', ['$compile', 'EmailOps', '$rootScope', function($compile, EmailOps, $rootScope){
    return {
		
     restrict: 'E',
		 template:'<button type="button" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-ok"></span> ADD</button>',
		 controller: 'mainCtrl',
		link: function( scope, element, attrs, controller) {
       		element.bind( "click", function() {
	   			scope.$apply(function(){
					var i = "partials/email_parts/content/column" + scope.column.id + ".html";
					var template={url:i};
               		EmailOps.templates.push(template);
					scope.$parent.templates = EmailOps.templates;	
					console.log (EmailOps.templates);
					
          });		
	   })}
    };
 }])

//REMOVING CONTENTS
 .directive('removeEmailColumn', ['$compile', 'EmailOps', '$rootScope', function($compile, EmailOps, $rootScope){
    return {
	     restrict: 'E',
		 template:'<button type="button" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> DEL</button>',
		 controller: 'mainCtrl',
		link: function( scope, element, attrs, controller) {
       		element.bind( "click", function() {
	   			scope.$apply(function(){
					
					var elements = scope.$parent.templates;
					var url = "partials/email_parts/content/column" + scope.column.id + ".html";

					elements.forEach(function(element,index){
						if(element.url===url){
						  elements.splice(index,1);
						}
					  })
          });			
	   })}
    };
 }]);