var gitUserSearchController = function($scope, $http){
  
  var onUserComplete = function(response){
    $scope.user = response.data;
  };
  
  $http.get("https://api.github.com/users/giorgia-amici")
    .then(onUserComplete);
};
