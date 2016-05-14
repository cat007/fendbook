angular.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null 
}

angular.isNull = function(val){
	return val == null
}

angular.generateRandomNumberOfLength = function(length){
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var length = length;
	var sessionToken = '';
	for (var i = length; i > 0; --i) sessionToken += chars[Math.floor(Math.random() * chars.length)];
    console.log('Session Token :' + sessionToken);
    return sessionToken;
}

