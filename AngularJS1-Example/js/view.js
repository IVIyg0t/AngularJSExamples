//
// Simple AngularJS app that pulls weather data from the OpenWeatherMap API.
// Data is returned as a JSON object.
// Type: Single Day Weather
// City ID: 4781756 (Richmond)
// Params: units = imperial
//

// Define myApp as a module. (Used by ng-app directive)
var myApp = angular.module('example1', []);

// Functionality of myCtrl Controller which is a child of myApp Instance.
myApp.controller('myCtrl',function($scope, $http){
    $scope.data = null;
    $http.get("http://api.openweathermap.org/data/2.5/weather?id=4781756&units=imperial&APPID=8b30e25b0299f4ffd354a318e139ca0d")
        .success(function(res){
            $scope.data = res;
        });
});