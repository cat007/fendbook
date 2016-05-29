app.controller('loginCtrl',function($scope,$location,loginService){
    
    $scope.Math = window.Math;

    $scope.login = function(){
        var emailId = $scope.login_email;
        var password = $scope.login_password;
        var data = new Data(emailId,password);
        loginService.login(data,$scope);
    }

    $scope.registerUser = function(){
        var emailId = $scope.reg_email;
        var password = $scope.reg_password;
        loginService.registerUsers($scope);
    }

    $scope.clearOnSignupClick = function(){
        $scope.login_email = null;
        $scope.login_password = null;
    }

    $scope.clearOnSigninClick = function(){
        $scope.reg_fullname = null;
        $scope.reg_email = null;
        $scope.reg_contact = null;
        $scope.reg_password = null;
        $scope.reg_repassword = null;
        $scope.fpwd_email = null;
    }

    $scope.comparePasswords = function(){
        if ($scope.reg_password != $scope.reg_repassword) {
            return true;
        }else{
            return false;
        }
    }

    $scope.sendMail = function(){
        var email = $scope.fpwd_email;
        loginService.sendForgotPasswordInstruction($scope);
    }

    $scope.fbLogin = function(){
        loginService.fbLogin();
        // $location.path('/sellerHome');
    } 

    $scope.resetMailId = function(){
        loginService.deleteUser();
    }   

    $scope.moveToSellerHome = function(){
        $location.path('/sellerHome');
    }

    $scope.isLogin = function(){
        if(loginService.isLogged()){
            return true;
        }else{
            return false;
        }
    }   

});

function Data(user, password){
    this.user = user;
    this.password = password;    
    return this;
}

function validateemail(email) {  
var x = email;  
var atposition = x.indexOf("@");  
var dotposition = x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }
  return true;  
}