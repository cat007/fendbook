var app = angular.module('bookapp', ['ngRoute','ngCookies','angular-md5','ngMessages']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'partials/home.html', controller: 'loginCtrl'})
        .when('/sellerHome', { templateUrl: 'partials/sellerHome.html', controller: 'sellerHomeCtrl'})
        .when('/successUpload', { templateUrl: 'partials/SuccessfulUpload.html', controller: 'successfulUploadCtrl'})
        .when('/manageBooks', { templateUrl: 'partials/ManageBooks.html', controller: 'manageBookCtrl'})
        .when('/book/:id',{templateUrl : 'partials/FullBookView.html', controller: 'manageBookCtrl'})
        .when('/sellerBook/:id',{templateUrl : 'partials/SellerFullBookView.html', controller: 'manageSellerBookCtrl'})
        .when('/SideFilter',{templateUrl: 'partials/SideFilter.html',controller: 'customerCtrl'})
        .when('/viewuploadedBook', { templateUrl: 'partials/ViewUploadedBook.html', controller: 'sellerHomeCtrl'})
        .when('/forgotPassword/:serviceRequestId', { templateUrl: 'partials/forgotPassword.html', controller: 'forgotPwdCtrl'})
        .otherwise({ redirectTo: '/home', templateUrl : 'partials/home.html'});
});

//REMOVE ACCESS TO SELLER HOME PAGE WITHOUT SIGNIN/AUTHENTICATION
 
app.run(function($rootScope, $location, loginService) {
    var routeThatRequiresPermission = ['/sellerHome','/successUpload','/viewuploadedBook','/manageBooks'];
    console.log("CHECK IT OUT");
    $rootScope.$on('$routeChangeStart',function(){
        console.log("$location.path()");
        console.log($location.path());
        if(routeThatRequiresPermission.indexOf($location.path()) != -1 && !loginService.isLogged()){
            console.log("LETS CHECK THIS");
            $location.path("/login");
        }
    })
});

window.fbAsyncInit = function() {
    FB.init({
      appId      : '586511621499144',
      xfbml      : true,
      status     : true,
      cookie     : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));






