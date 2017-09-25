(function(w){
    var app =   angular.module('portfolio', ['ngRoute', 'skillset-directive']).config(function($routeProvider)
    {
        /*
         * ROUTER
         */
        $routeProvider
        .when('/', {
            templateUrl: 'app/template/home.html'
        })
        .when('/error', {
            templateUrl: 'app/template/error.html'
        })
        .otherwise({redirectTo : '/error'});
    });

    /*
     * CONSTANTS
     */
    app.constant('appConfig', {
        'menu': ['about', 'skills', 'experiences', 'educations', 'contact']
    });


    /*
     * DIRECTIVES
     */
    app.directive('header', function() {
        return {
            restrict : "E",
            templateUrl : "app/template/header.html",
            controller: "headerController",
            controllerAs: "headerCtrl"
        };
    });

    app.directive('aboutMe', function() {
        return {
            restrict : "E",
            templateUrl : "app/template/aboutme.html",
            controller: "aboutController",
            controllerAs: "aboutCtrl"
        };
    });

    app.directive('skills', function() {
        return {
            restrict : "E",
            templateUrl : "app/template/skills.html",
            controller: "skillsController",
            controllerAs: "skillsCtrl"
        };
    });

    app.directive('experiences', function() {
        return {
            restrict: "E",
            templateUrl: "app/template/experiences.html",
            controller: "experienceController",
            controllerAs: "expCtrl"
        };
    });

    app.directive('educations', function() {
        return {
            restrict: "E",
            templateUrl: "app/template/educations.html",
            controller: "educationController",
            controllerAs: "eduCtrl"
        };
    });

    /*
     * FILTERS
     */
     app.filter('monthYear', function() {
        return function(dateStr) {
            if(dateStr.length > 0)
            {
                var months  =   ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                var t       =   dateStr.split("/");
                var myDate  =   new Date(t[2], t[1] - 1, t[0]);

                return months[myDate.getMonth()] + " " + myDate.getFullYear();
            }
            else {
                return "Present";
            }
        };
    });

    w.app   =   app;
})(window);
