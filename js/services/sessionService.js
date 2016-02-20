app.factory('sessionService',['$http',function($http,$location){
	return{
		set: function(key,value){
			return sessionStorage.setItem(key,value);
		},
		get: function(key){
						console.log('sessionStorage = ');
			console.log(sessionStorage);


			return sessionStorage.getItem(key);
		},
		destroy: function(key){
			console.log('sessionStorage = ');
			console.log(sessionStorage);
			return sessionStorage.removeItem(key);
		}
	}


}]);