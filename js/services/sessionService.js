app.factory('sessionService',['$http','$q','configService',function($http,$q,configService){
	// var deferred = $q.defer();
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

		updateSession: function(sessionRequest){
			return $http.post(configService.getRestUrl() + '/sessions/update_session_token', sessionRequest, {
				transformRequest: sessionRequest,
				headers: {'Content-type' : undefined}	
			});
		},

		getSessionDetails: function(key){
			var deferred = $q.defer();
			return $http.get(configService.getRestUrl() + '/sessions?user_id=' + key).then(function(response){
					console.log('Response : ' + response.data.session_token);
					deferred.resolve(response.data);
					return deferred.promise;
				}, function(response){
					deferred.reject(response);
        			return deferred.promise;
				});
		},

		destroy: function(key){
			console.log('sessionStorage = ');
			console.log(sessionStorage);
			return sessionStorage.removeItem(key);
		},

		deleteSession: function(sessionToken){
			return $http.post(configService.getRestUrl() + '/sessions/' + sessionToken + '/delete', '',{
					transformRequest: '',
					headers: {'Content-type': undefined}
			});
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