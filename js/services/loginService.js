app.factory('loginService',function($http,$location,sessionService,configService){

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