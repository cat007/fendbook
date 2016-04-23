var app = angular.module('bookapp', ['ngRoute','ngCookies']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'partials/home.html', controller: 'loginCtrl'})
        .when('/sellerHome', { templateUrl: 'partials/sellerHome.html', controller: 'sellerHomeCtrl'})
        .when('/successUpload', { templateUrl: 'partials/SuccessfulUpload.html', controller: 'successfulUploadCtrl'})
        .when('/manageBooks', { templateUrl: 'partials/ManageBooks.html', controller: 'manageBookCtrl'})
        .when('/book/:id',{templateUrl : 'partials/FullBookView.html', controller: 'manageBookCtrl'})
        .when('/SideFilter',{templateUrl: 'partials/SideFilter.html',controller: 'customerCtrl'})
        
        
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






