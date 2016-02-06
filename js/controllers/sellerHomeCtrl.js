app.controller('sellerHomeCtrl',function($scope,loginService){
	$scope.txt = 'Page Home';

	$scope.logout = function(){
		loginService.logout();
	},

	$scope.oldBook = function(){
		$scope.type = "old";

	},
	$scope.newBook = function(){
		$scope.type = "new";

	}



});
