app.factory('sessionService',['$http','configService',function($http,configService){
	return{
		set: function(key,value){
			return sessionStorage.setItem(key,value);
		},

		createSession: function(sessionRequest){
			return $http.post(configService.getRestUrl() + '/sessions',sessionRequest, {
						transformRequest: sessionRequest,
						headers: {'Content-type' : undefined}	
					});
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
		},

		generateSessionToken: function(){
			var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			var length = 32;
			var sessionToken = '';
			for (var i = length; i > 0; --i) sessionToken += chars[Math.floor(Math.random() * chars.length)];
    		console.log('Session Token :' + sessionToken);
    		return sessionToken;
		}
	}
}]);