app.factory('bookService',function($http,$location){

	return {
		getAllBooksForUserId:function(user_id,scope){

			var newArray;

		$http.get('http://localhost:3000/api/books?email_id=1@gmail.com').then(function(response){

				var res = response.data;
				console.log("response = In Book Service");
				console.log(res);

				// newArray = res.slice();
				scope.resBooks = res.slice();
				console.log("Check");
				console.log(scope.resBooks);
				console.log("Chanding location");
				$location.path("/viewuploadedBook");

				
			});
		}


	}

});