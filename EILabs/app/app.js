var app = angular.module('EILabsWebApp', ['ngRoute', 'ui.bootstrap']);

app.constant('EILabsWEB_ENDPOINT_URI', 'http://localhost:54383/')


app.config(function ($routeProvider) {
    /*Start Web Routes*/

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "app/Home/home.html"
    });

    $routeProvider.when("/initiative", {
        controller: "initiativeController",
        templateUrl: "app/Initiative/initiative.html"
    });

    $routeProvider.when("/corporate_personal", {
        controller: "serviceController",
        templateUrl: "app/Service/corporate_personal.html"
    });

    $routeProvider.when("/pr_promotions", {
        controller: "serviceController",
        templateUrl: "app/Service/pr_promotions.html"
    });

    $routeProvider.when("/image_brand", {
        controller: "serviceController",
        templateUrl: "app/Service/image_brand.html"
    });

    $routeProvider.when("/expression_expert", {
        controller: "serviceController",
        templateUrl: "app/Service/expression_expert.html"
    });

    $routeProvider.when("/blog", {
        controller: "blogController",
        templateUrl: "app/Blog/blog.html"
    });

    $routeProvider.when("/team", {
        controller: "teamController",
        templateUrl: "app/Team/team.html"
    });

    $routeProvider.when("/project", {
        controller: "projectController",
        templateUrl: "app/Project/project.html"
    });

    $routeProvider.when("/contact", {
        controller: "contactController",
        templateUrl: "app/Contact/contact.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});
/*End Web Routes*/



