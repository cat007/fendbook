app.controller('loginCtrl',function($scope,$location,loginService){
    $scope.submit = function(){
        var emailId = $scope.emailId;
        var password = $scope.password;
        var data = new Data(emailId,password);
        loginService.login(data,$scope);
        console.log("Whats happening here 123");
        // if($scope.emailId == 'admin@gmail.com' && $scope.password == 'admin' ){
            // $location.path('/sellerHome');
        // }


    }

});

function Data(user, password){

   // Add object properties like this
           this.user = user;
        this.password = password;
        return this;

}
