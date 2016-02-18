app.controller('loginCtrl',function($scope,$location,loginService){
    $scope.submit = function(){
        var emailId = $scope.emailId;
        var password = $scope.password;
        var data = new Data(emailId,password);
        loginService.login(data,$scope);
        // this.showPassword();
        // if($scope.emailId == 'admin@gmail.com' && $scope.password == 'admin' ){
        //     $location.path('/sellerHome');
        // }


    }

});

function Data(emailId, password){

   // Add object properties like this
           this.user = emailId;
        this.password = password;

}


