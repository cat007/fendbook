app.factory('bookService',function($http,$location){

	return {
		getAllBooksForUserId:function(user_id,scope){

			var newArray;

		return $http.get('http://localhost:3000/api/books?user_id=1');
		}


	}

});