app.controller('customerCtrl',function($scope,$location,$rootScope,bookService,loginService){

	console.log("Are we here before ");
	console.log("Finally !!!");
	var user_id = 1;
    console.log("User id = ");
    console.log(user_id);

    		bookService.getAllBooksForUserId(user_id,$scope).then(function(response){
			console.log("customerCtrl change  1");
			console.log(response);
			 $scope.resBooks = response.data;
             console.log("customerCtrl changed");
             console.log($scope.resBooks);
			// $location.path("/viewuploadedBook");


		});
});