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

    $scope.showPassword = function(){
        var key_attr = $('#key').attr('type');
    
        if(key_attr != 'text') {
            $('.checkbox').addClass('show');
            $('#key').attr('type', 'text');
        
        } else {
            $('.checkbox').removeClass('show');
            $('#key').attr('type', 'password');
        
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

function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }  
}