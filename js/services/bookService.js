app.factory('bookService',function($http,$location){
	var res = {};
	return {
		getAllBooksForUserId:function(user_id,scope){

		return $http.get('http://localhost:3000/api/books?user_id=1');
		},
		setUploadedBook:function(book){
			res['upload_book'] = book;
			return res;
		},
		getUploadedBook:function(){
			return res['upload_book'];
		}


	}

});