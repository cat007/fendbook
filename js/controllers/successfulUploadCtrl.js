app.controller('successfulUploadCtrl',function($scope,$location,$rootScope,bookService,loginService){

	console.log("Are we here before ");
	$scope.finalBook = bookService.getUploadedBook();
	console.log($scope.finalBook);
	console.log("Finally !!!");

				$scope.logout = function(){
			loginService.logout();
			}

	
});