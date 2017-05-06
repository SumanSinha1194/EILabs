var app = angular.module('EILabsWebApp', ['ngRoute', 'ui.bootstrap']);

app.constant('EILabsWEB_ENDPOINT_URI', 'http://localhost:54383/')


app.config(function ($routeProvider) {
    /*Start Web Routes*/

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "app/Home/home.html"
    });

    $routeProvider.when("/about", {
        controller: "aboutController",
        templateUrl: "app/About/about.html"
    });

    $routeProvider.when("/service", {
        controller: "serviceController",
        templateUrl: "app/Service/service.html"
    });

    $routeProvider.when("/team", {
        controller: "teamController",
        templateUrl: "app/Team/team.html"
    });


    $routeProvider.otherwise({ redirectTo: "/home" });
});
/*End Web Routes*/



