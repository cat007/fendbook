app.factory('loginService',function($http,$location,sessionService){

	return {
		login:function(data,scope){
			//Ideally check whether the username and password exists in the backend or not
			var obj = {content:null};

			$http.get('json/user.txt').then(function(response){
				obj.content = response;

			});
			

				if(obj.content.id != null){
					sessionService.set('user',uid);
					$location.path('/sellerhome');

				}
				else{
					scope.msgtxt = 'incorrect information';
					$location.path('/signin');

				}


		},
		logout:function(){
			sessionService.destroy('user');
			$location.path('/home');
		}

	}

});