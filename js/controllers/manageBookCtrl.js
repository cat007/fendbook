app.controller('manageBookCtrl',function($scope,$location,$cookies,sessionService,bookService){

        var user_id = $cookies.get('user');
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

		$scope.markBookSold = function(bookId){

			bookService.markBookAsSold(bookId).then(function(response){
				console.log("Book is Sold");
				if(response.status == 200){
					console.log("Book is Finally Sold :)");
					for(var i = 0; i < $scope.resBooks.length; i++ ){
						var obj = $scope.resBooks[i];
						if(obj.id == bookId){
							$scope.resBooks.splice(i,1);
							$location.path('/manageBooks');
							
						}
					}



				}


			})


		}


});


