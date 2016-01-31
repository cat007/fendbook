var app = angular.module('bookapp', []);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {template: 'partials/home.html'})
        .when('/sellerHome', {template: 'partials/sellerHome.html'})
        .otherwise({ redirectTo: '/', template : 'partials/home.html'});
});

app.controller('loginCtrl',function($scope,$location){
    $scope.submit = function(){
        var emailId = $scope.emailId;
        var password = $scope.password;
        if($scope.emailId == 'admin@gmail.com' && $scope.password == 'admin' ){
            $location.path('/sellerHome');
        }


    }

});


