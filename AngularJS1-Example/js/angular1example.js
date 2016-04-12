var myApp = angular.module('example1', []);
myApp.controller('myCtrl',function($scope, $http){
    $scope.name = 'Superhero';
    $scope.data = null;
    $http.get("http://api.openweathermap.org/data/2.5/weather?id=4781756&units=imperial&APPID=8b30e25b0299f4ffd354a318e139ca0d")
        .success(function(res){
            $scope.nameAlt = 'weather';
            $scope.data = res;
        });
});