app.controller('manageBookCtrl',function($scope,$cookies,$routeParams,loginService,bookService){

        var user_id = $cookies.get('user');
        console.log("User id = ");
        console.log(user_id);
        // $scope.book = null;


		bookService.getAllBooksForUserId(user_id,$scope).then(function(response){
			console.log("COOL the things changed 1");
			console.log(response);
			 $scope.resBooks = response.data;
             console.log("COOL the things changed");
             console.log($scope.resBooks);
			// $location.path("/viewuploadedBook");


		});

									$scope.$on('$routeChangeSuccess', function() {
    		// $routeParams should be populated here
    					// alert($routeParams);
    		$scope.id = $routeParams.id;
    		console.log("Param = ");
			console.log($scope.id);
			if($scope.id != null){
			$scope.displayFullBook($scope.id);
		}
  		});




			$scope.logout = function(){
			loginService.logout();
			},


		$scope.markBookSold = function(bookId){

			bookService.markBookAsSold(bookId).then(function(response){
				console.log("Book is Sold");
				if(response.status == 200){
					console.log("Book is Finally Sold :)");
					for(var i = 0; i < $scope.resBooks.length; i++ ){
						var obj = $scope.resBooks[i];
						if(obj.id == bookId){
							$scope.resBooks.splice(i,1);
						}
					}



				}


			});


		},


		$scope.displayFullBook = function(id){



			bookService.getBookForId(id).then(function(response){
				$scope.book = response.data;
			});
			bookService.updateNoOfViews(id);



		}







});


