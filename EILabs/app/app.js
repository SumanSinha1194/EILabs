var app = angular.module('EILabsWebApp', ['ngRoute', 'ui.bootstrap']);

app.constant('EILabsWEB_ENDPOINT_URI', 'http://localhost:54383/')


app.config(function ($routeProvider) {
    /*Start Web Routes*/

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "app/Home/home.html"
    });


    $routeProvider.otherwise({ redirectTo: "/home" });
});
/*End Web Routes*/



