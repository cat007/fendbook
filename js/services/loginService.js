app.factory('loginService',function($http,$location,$cookies,$cookieStore,sessionService,configService,promiseService,md5){

	return {
		login:function(data,scope){
			//Ideally check whether the username and password exists in the backend or not
			$http.get(configService.getRestUrl() + '/users?email=' + data.user + '&hash=true').then(function(response){

				if(response.data != null){
					// console.log("response = " + response.data);
					var loginResponse = response.data;
					// console.log(loginResponse);
					// console.log("User Name : " + loginResponse.first_name + ' ' + loginResponse.last_name);
					var curr_hash = md5.createHash(data.password || '');

					if (angular.stringCompare(curr_hash, loginResponse.hash_value) && loginResponse.authorize) {
						sessionService.set('user',loginResponse.id);

						/*
							Creation a Session for user
						*/
						var sessionRequest = new FormData();
						sessionRequest.append('user_id', loginResponse.id);
						sessionRequest.append('session_token', sessionService.generateSessionToken());
						sessionRequest.append('email', loginResponse.email);
						sessionRequest.append('is_fb_user', false);		
						// console.log('sessionRequest : '+sessionRequest);	

						sessionService.createSession(sessionRequest).then(function(response){
							if(response.status == 201){
								// console.log('status : ' + response.data);	
								alert("Login Successfully...!!!");

								//setting data into cookies
								$cookies.put('user',response.data.user_id);
								$cookieStore.put('token',response.data.session_token);

								// console.log('user id : ' + $cookies.get('user'));
								// console.log('token : ' + $cookieStore.get('token'));

								$location.path('/sellerHome');
							}else if (response.status == 422) {
								alert("User is already logged in")
							}
							 else {
								alert("Network Error...Please try again!!!");
							}		
						}); //session creation done.
					}else{
						alert("Incorrect Username and Password, Please try again!!!");
					}	
				}
				else{
					alert("Invalid Username and Password, Please try again!!!");
					$location.path('/signin');
				}
			});
		},

		deleteUser:function(){
			
		},	

		changePassword : function(scope){
				promiseService.getUserDetailsWithServiceToken(scope.service_token).then(function(response){
					if (response.status == 200 && !angular.isUndefinedOrNull(response.data)) {

						if (angular.isUndefinedOrNull(scope.fp_password)) {
							alert("Password is Empty!");
						}else {
							var curr_hash = md5.createHash(scope.fp_password || '');	

							var resetPasswordRequest = new FormData();
							resetPasswordRequest.append('email', response.data.email);
							resetPasswordRequest.append('password', curr_hash);

							promiseService.updatePassword(resetPasswordRequest).then(function(response){
								if (response.status == 200) {
									alert("Password Changed Successfully. Please login Now.");
									$location.path('/home');
								};	
							});	
						}
					}else{
						alert("Service request doesn't exists. Please raise reset password Instructions again");
					}
				});
		},


		logout:function(){
			// console.log("Logging out");
			sessionService.deleteSession($cookieStore.get('token')).then(function(response){
				if (response.status == 200) {
					alert("Logged Out");
					$cookies.remove('user');
					$cookieStore.remove('token');
					$location.path('/home');
				}else{
					$location.path('/sellerHome');
					alert("Network Error...Please try again");	
				}
			});
		},


		isLogged:function(){
			var sessionToken = $cookies.get('token');
			if(angular.isUndefinedOrNull($cookies.get('user'))) {
				return false;
			}else {
				var request;
        		if (window.XMLHttpRequest) {
            		request = new XMLHttpRequest();
        		} else if (window.ActiveXObject) {
            		request = new ActiveXObject("Microsoft.XMLHTTP");
        		} else {
            		throw new Error("Your browser don't support XMLHttpRequest");
        		}

        		var url = configService.getRestUrl() + '/sessions?user_id=' + $cookies.get('user');
        		request.open('GET', url, false);
        		request.send(null);

        		// console.log('condition : ' + angular.isNull(request.responseText));
        		if (request.status === 200) {
            		// console.log ('response : ' + request.responseText);
        		

        		var jsonResponse = JSON.parse(request.responseText);
        		// console.log('token : ' + jsonResponse["session_token"]);
        		// console.log('condition : ' + sessionToken, angular.toJson(jsonResponse["session_token"]));
        		if (angular.equals(sessionToken, angular.toJson(jsonResponse["session_token"]))){
						// console.log("here");
						return true;
					}	
        		return false;
        		}
        		return false;
			}
		},

		sendForgotPasswordInstruction:function(scope){
			$http.get(configService.getRestUrl() + '/users?email=' + scope.fpwd_email).then(function(response){

				if (!angular.isNull(response.data)) {
					var service_token = angular.generateRandomNumberOfLength(12);
					angular
					var link = configService.getUiServiceUrl() + '/forgotpassword/' + service_token;

					var fpRequest = new FormData();
					fpRequest.append('email', scope.fpwd_email);
					fpRequest.append('service_token', service_token);

					promiseService.updateServiceToken(fpRequest).then(function(response){
						if (response.status != 200) {
							alert("Error Occured...Please try after sometimes");
						}else{
							// console.log("inside else")
							promiseService.sendMail(fpRequest).then(function(response){
								if (response.status == 200) {
									alert("Password Reset Instructions has been sent to your mail id");
								}else{
									console.log("Error Occured...Please try again later");		
								}
							});
						}
					});							

				}else {
					alert("User Doesn't exists. Please enter a Valid User!!!");
				}	
			});
		},

		getSessionId:function(){
			// console.log("Get session Id");
			return sessionService.get('user');
		},

		registerUsers:function(scope){
			/*
			Request Payload to create user
			*/
			var curr_hash = md5.createHash(scope.reg_password || '');	

			userdata = new FormData();
        	userdata.append('first_name',scope.reg_fullname);
        	userdata.append('email',scope.reg_email);
        	userdata.append('contact_no',scope.reg_contact);
        	userdata.append('password',curr_hash);
        	userdata.append('is_active',1);
        	userdata.append('is_authorize',1);

        	$http.post(configService.getRestUrl() + '/users',userdata, {
				transformRequest: userdata,
					headers: {'Content-type' : undefined}	
				}).then(function(response){
					if (response.status = 201) {
						// console.log('response : ' + response.data);

						var sessionRequest = new FormData();
						sessionRequest.append('user_id', response.data.id);
						sessionRequest.append('session_token', sessionService.generateSessionToken());
						sessionRequest.append('email', response.data.email);
						sessionRequest.append('is_fb_user', false);	
						// console.log('sessionRequest : '+sessionRequest);	

						sessionService.createSession(sessionRequest).then(function(response){
						
						if(response.status == 201){
								sessionService.set('user',response.data.id);

								$cookies.put('user',response.data.user_id);
								$cookieStore.put('token',response.data.session_token);

								alert("Register Successfully...!!!");
								// console.log("i am signin");
								// console.log('user : ' + $cookies.get('user'));
								// console.log('token : ' + $cookieStore.get('token'));
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
		    },

		    fbLogin:function(){

		    	FB.getLoginStatus(function(response) {
				  if (response.status === 'connected') {
				    var uid = response.authResponse.userID;
				    var accessToken = response.authResponse.accessToken;
				    /*
						Creation a Session for user
					*/
					var sessionRequest = new FormData();
					sessionRequest.append('user_id', uid);
					sessionRequest.append('new_session_token', accessToken);

					// console.log('here');
					// console.log(uid + '-->' + accessToken);
					sessionService.updateSession(sessionRequest).then(function(response){
						if(response.status == 200){
							console.log('status : ' + response.data);	
							alert("Login Successfully...!!!");

							//setting data into cookies
							$cookies.put('user',uid);
							$cookieStore.put('token',accessToken);

							// console.log('user id : ' + $cookies.get('user'));
							// console.log('token : ' + $cookieStore.get('token'));

							$location.path('/sellerHome');
						}else if (response.status == 422) {
							alert("User is already logged in")
						}
						else {
							alert("Network Error...Please try again!!!");
						}		
					});

				  } else {
		    	FB.login(function(response) {
    				if (response.authResponse) {
    					// console.log('loginResponse');
    					// console.log(response.authResponse.grantedScopes);
	     			// 	console.log('Welcome!  Fetching your information.... ');
	     				FB.api('/me', { locale: 'en_US', fields: 'name, email, first_name, last_name' }, function(response) {
	       					// console.log('Good to see you, ' + response.name + '.');
	       					var accessToken = FB.getAuthResponse();
	       					

							sessionService.set('user',response.id);

							/*
								Creation a Session for user
							*/
							var sessionRequest = new FormData();
							sessionRequest.append('user_id', response.id);
							sessionRequest.append('session_token', accessToken.accessToken);
							if(angular.isUndefinedOrNull(response.email)) {
								sessionRequest.append('email', 'fbuser@test.com');	
							}else{
								sessionRequest.append('email', response.email);	
							}
							sessionRequest.append('is_fb_user',true);
								
							// console.log('sessionRequest : '+sessionRequest);	

							sessionService.createSession(sessionRequest).then(function(response){
								if(response.status == 201){
									// console.log('status : ' + response.data);	
									alert("Login Successfully...!!!");

									//setting data into cookies
									$cookies.put('user',response.data.user_id);
									$cookieStore.put('token',response.data.session_token);

									// console.log('user id : ' + $cookies.get('user'));
									// console.log('token : ' + $cookieStore.get('token'));

									$location.path('/sellerHome');
								}else if (response.status == 422) {
									alert("User is already logged in")
								}
								 else {
									alert("Network Error...Please try again!!!");
								}		
							}); //session creation done.	
     					});
    				} else {
     					console.log('User cancelled login or did not fully authorize.');
    				}
				}
				,{
					scope: 'email,public_profile',
					return_scopes: true,
				});
			  }
			});
		}
	}

});