app.factory('promiseService',function($http,$location,$cookies,$cookieStore,configService){

	return {
		updateServiceToken : function(fpRequest){
			return $http.post(configService.getRestUrl() + '/users/update_service_token',fpRequest, {
						transformRequest: fpRequest,
						headers: {'Content-type' : undefined}	
					});
		},

		sendMail : function(fpRequest){
			return $http.post(configService.getRestUrl() + '/users/send_mail',fpRequest, {
							transformRequest: fpRequest,
							headers: {'Content-type' : undefined}	
						});
		},

		getUserDetailsWithServiceToken : function(serviceToken){
			return $http.get(configService.getRestUrl() + '/users?password_confirmation_token=' + serviceToken);
		},

		updatePassword : function(resetPasswordRequest){
			return $http.post(configService.getRestUrl() + '/users/update_password',resetPasswordRequest, {
						transformRequest: resetPasswordRequest,
						headers: {'Content-type' : undefined}	
					});
		}
	}

});