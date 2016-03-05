app.factory('bookService',function($http,$location){
	var res = {};
	return {
		getAllBooksForUserId:function(user_id,scope){

		return $http.get('http://localhost:3000/api/books?user_id='+user_id);
		},
		setUploadedBook:function(book){
			res['upload_book'] = book;
			return res;
		},
		getUploadedBook:function(){
			return res['upload_book'];
		},
		markBookAsSold:function(book_id){
			return $http.delete('http://localhost:3000/api/books/'+book_id);
		}


	}

});