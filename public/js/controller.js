(function(window) {

  angular.module('app')
  //scope is the glue between models and the view(the stick we were holding)
  .controller('myController', [
    '$scope',
    'Reddit',
    function($scope, Reddit){
    $scope.reddit = [];
      Reddit.getReddit().then(function(posts){

        // var posts = reddit.data.data.children.map(function(post) {
        //   if (/gifv/i.test(post.data.url)) {
        //     post.data.url = post.data.url.replace(/gifv/i, 'gif');
        //     return post
        //   } else {
        //     return post;
        //   }
        // })


        $scope.reddit = posts;

      });
  }])

}(window, angular));