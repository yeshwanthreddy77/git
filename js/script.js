// create the module and name it scotchApp
    var rigwinApp = angular.module('rigwinApp', ['ngRoute']);


    // configure our routes
    rigwinApp.config(['$routeProvider', function($routeProvider){
        
        "use strict";
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                title: 'Rigwin :: Home',
                controller  : 'mainController'
            })
            // route for the service page
            .when('/services', {
                templateUrl : 'pages/services.html',
                title: 'Rigwin :: Services',
                controller  : 'servicesController'
            })
            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                title: 'Rigwin :: About',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                title: 'Rigwin :: Contact',
                controller  : 'contactController'
            });
    }]);

    //change page title accordingly to the routing
    rigwinApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
        });
    }]);

    // create the controller and inject Angular's $scope
    rigwinApp.controller('mainController', function($scope) {
        $scope.message = 'Home';
    });

   rigwinApp.controller('servicesController', function($scope) {
        $scope.message = 'Services';
    });

    rigwinApp.controller('aboutController', function($scope) {
        $scope.message = 'About';
    });

    rigwinApp.controller('contactController', function($scope) {
        $scope.message = 'Contact';
    });

                