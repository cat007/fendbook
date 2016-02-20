app.factory('loginService',function($http,$location,sessionService){

	return {
		login:function(data,scope){
			console.log("$$$$$$$$$11111");
			//Ideally check whether the username and password exists in the backend or not
			// $http.get('/Users/luv.saxena/fendbook/json/user.txt').then(function(response){
				console.log("Users mail = ");
				console.log(scope.email);
			$http.get('http://localhost:3000/api/users?email='+scope.email).then(function(response){
				console.log("Whats happening");

                console.log("response = ");
				var res = response.data;
				console.log(res);

				if(res.active != null){
					console.log("response = COOLS");
					sessionService.set('user',res.id);
					$location.path('/sellerHome');
				}
				else{
					alert("Incorrect username and password");
					scope.msgtxt = 'incorrect information';
					$location.path('/signin');
				}



			});
		},
		logout:function(){
			console.log("WE ARE LOGGIN OUT");
			sessionService.destroy('user');
			$location.path('/home');
		},
		isLogged:function(){
			console.log("Is he logged in");
			if(sessionService.get('user')) return true;
		},
		getSessionId:function(){
			console.log("Get session Id");
			return sessionService.get('user');
		}

	}

});