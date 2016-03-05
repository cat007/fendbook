app.factory('loginService',function($http,$location,$cookies,$cookieStore,sessionService,configService){

	return {
		login:function(data,scope){
			//Ideally check whether the username and password exists in the backend or not
			$http.get(configService.getRestUrl() + '/users?email=' + data.user + '&password=' + data.password).then(function(response){

				if(response.data != null){
					console.log("response = " + response.data);
					var loginResponse = response.data;
					console.log(loginResponse);
					console.log("User Name : " + loginResponse.first_name + ' ' + loginResponse.last_name);
					sessionService.set('user',loginResponse.id);

					/*
						Creation a Session for user
					*/
					var sessionRequest = new FormData();
					sessionRequest.append('user_id', loginResponse.id);
					sessionRequest.append('session_token', sessionService.generateSessionToken());
					sessionRequest.append('email', loginResponse.email);	
					console.log('sessionRequest : '+sessionRequest);	

					sessionService.createSession(sessionRequest).then(function(response){
						if(response.status == 201){
							console.log('status : ' + response.data);	
							alert("Login Successfully...!!!");

							//setting data into cookies
							$cookies.put('user',response.data.user_id);
							$cookieStore.put('token',response.data.session_token);

							console.log('user id : ' + $cookies.get('user'));
							console.log('token : ' + $cookieStore.get('token'));

							$location.path('/sellerHome');
						}else if (response.status == 422) {
							alert("User is already logged in")
						}
						 else {
							alert("Network Error...Please try again!!!");
						}		
					}); //session creation done.


				}
				else{
					alert("Incorrect Username and Password, Please try again!!!");
					$scope.msgtxt = 'incorrect information';
					$location.path('/signin');
				}
			});
		},

		logout:function(){
			console.log("Logging out");
			$cookies.remove('user');
			$cookieStore.remove('token');
			$location.path('/home');
		},

		isLogged:function(){

			console.log('check undefined : ' + angular.isUndefinedOrNull($cookies.get('user')));
			if(angular.isUndefinedOrNull($cookies.get('user'))) {
				return false;
			}else {
				return true;
			}
		},

		getSessionId:function(){
			console.log("Get session Id");
			return sessionService.get('user');
		},

		registerUsers:function(scope){
			/*
			Request Payload to create user
			*/
			userdata = new FormData();
        	userdata.append('first_name','testuser');
        	userdata.append('email',scope.reg_email);
        	userdata.append('contact_no',scope.reg_contact);
        	userdata.append('password',scope.reg_password);
        	userdata.append('confirm_password',scope.reg_repassword);
        	userdata.append('is_active',1);
        	userdata.append('temp_password','temp');

        	$http.post(configService.getRestUrl() + '/users',userdata, {
				transformRequest: userdata,
					headers: {'Content-type' : undefined}	
				}).then(function(response){
					if (response.status = 201) {
						console.log('response : ' + response.data);

						var sessionRequest = new FormData();
						sessionRequest.append('user_id', response.data.id);
						sessionRequest.append('session_token', sessionService.generateSessionToken());
						sessionRequest.append('email', response.data.email);	
						console.log('sessionRequest : '+sessionRequest);	

						sessionService.createSession(sessionRequest).then(function(response){
						
						if(response.status == 201){
								sessionService.set('user',response.data.id);

								$cookies.put('user',response.data.user_id);
								$cookieStore.put('token',response.data.session_token);

								alert("Register Successfully...!!!");
								console.log("i am signin");
								$location.path('/sellerHome');
						}
						 else {
							alert("Network Error...Please try again!!!");
						}		
					});

					} else if (response.scope = 422) {
						alert('User is already Registered');
					} else {
						alert("Network Error...Please try again!!!");		
					}
				});
		    }
	}

});