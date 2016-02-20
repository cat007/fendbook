app.controller('successfulUploadCtrl',function($scope,$location,$rootScope,bookService){

	console.log("Are we here before ");
	$scope.finalBook = bookService.getUploadedBook();
	console.log($scope.finalBook);
	console.log("Finally !!!");
	
});