var app = angular.module('GitUserSearch', ['ngResource']);




// To define an AngularJS app, we first need to define an angular.module. An Angular module is simply a collection of functions that are run when the application is “booted.” (We’re not going to discuss configuration and run blocks in this series, but we’ll address them in future sections.)
var gitUserSearchController = function($scope, $http){
  
  var onUserComplete = function(response){
    $scope.user = response.data;
  };
  
  $http.get("https://api.github.com/users/giorgia-amici")
    .then(onUserComplete);
};