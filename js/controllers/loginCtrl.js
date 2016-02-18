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