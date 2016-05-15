app.controller('forgotPwdCtrl',function($scope,$location,$routeParams,loginService){

	$scope.forgotPassword = function(){
		$scope.service_token = $routeParams.serviceRequestId;
		loginService.changePassword($scope);
	}
});