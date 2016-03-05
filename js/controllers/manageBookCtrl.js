app.controller('manageBookCtrl',function($scope,sessionService,bookService){

        var user_id = sessionService.get('user');
        console.log("User id = ");
        console.log(user_id);

		bookService.getAllBooksForUserId(user_id,$scope).then(function(response){
			console.log("COOL the things changed 1");
			console.log(response);
			 $scope.resBooks = response.data;
             console.log("COOL the things changed");
             console.log($scope.resBooks);
			// $location.path("/viewuploadedBook");


		});


});


