(function(window) {

  angular.module('app')
  //scope is the glue between models and the view(the stick we were holding)
  .controller('myController', [
    '$scope',
    'Reddit',
    function($scope, Reddit){
    $scope.reddit = [];
      Reddit.getReddit().then(function(reddit){
      $scope.reddit = reddit.data.data.children;
      console.log($scope.reddit);
      });
  }])

}(window, angular));