app.factory('bookService',function($http){
	var res = {};
	return {
		getAllBooksForUserId:function(user_id,scope){

		return $http.get('http://localhost:3000/api/books?user_id='+user_id);
		},

		getBooksFilterWise:function(funalUrl,scope){
           return $http.get('http://localhost:3000/api/books?'+funalUrl);
		},

		setUploadedBook:function(book){
			res['upload_book'] = book;
			return res;
		},
		getUploadedBook:function(){
			return res['upload_book'];
		},
		markBookAsSold:function(book_id){
			return $http.post('http://localhost:3000/api/books/'+book_id +'/is_sold');
		},
		getBookForId:function(book_id){
			return $http.get('http://localhost:3000/api/books/'+book_id);
		},
		updateNoOfViews:function(book_id){
			return $http.post('http://localhost:3000/api/books/'+book_id +'/update_views');

		},
		getUniqueSearchParams:function(){
			return $http.get("http://localhost:3000/api/books/search/get_unique_search_params");
		}
	}

});