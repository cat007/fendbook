app.factory('loginService',function($http,$location,sessionService){

	return {
		login:function(data,scope){
			console.log("$$$$$$$$$11111");
			//Ideally check whether the username and password exists in the backend or not
			// $http.get('/Users/luv.saxena/fendbook/json/user.txt').then(function(response){
			$http.get('http://localhost:3000/api/users/1').then(function(response){
				console.log("Whats happening");

                console.log("response = ");
				var res = response.data;
				console.log(res);

				if(res.active){
					console.log("response = COOLS");
					sessionService.set('user',data.user);
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