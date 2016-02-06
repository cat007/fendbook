app.controller('sellerHomeCtrl',function($scope,loginService){
	$scope.txt = 'Page Home';
	$scope.logout = function(){
		loginService.logout();
	}


})
