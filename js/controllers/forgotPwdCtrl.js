app.controller('forgotPwdCtrl',function($scope,$location,$routeParams,loginService){

	$scope.forgotPassword = function(){
		$scope.service_token = $routeParams.serviceRequestId;
		loginService.changePassword($scope);
	}

	$scope.comparePasswords = function(){
        if ($scope.fp_password != $scope.fp_rpassword) {
            return true;
        }else{
            return false;
        }
    }
});