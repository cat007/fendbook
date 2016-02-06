var app = angular.module('bookapp', []);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { template: 'partials/home.html', controller: 'loginCtrl'})
        .when('/sellerHome', { template: 'partials/sellerHome.html'})
        .otherwise({ redirectTo: '/', template : 'partials/home.html'});
});






