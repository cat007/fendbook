app.factory('configService',function(){

	var configDetails = {
	APP_NAME: 'My App',
  	APP_VERSION: '0.1',
  	REST_URL: 'http://localhost:3000/api'
}

	var configFactory = {};

	configFactory.getRestUrl = function() {
		return configDetails.REST_URL;
	}

	configFactory.getAppName = function() {
		return configDetails.APP_NAME;
	}

	configFactory.getAppVersion = function() {
		return configDetails.APP_VERSION;
	}

	return configFactory;

});