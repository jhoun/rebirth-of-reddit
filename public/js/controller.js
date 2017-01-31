(function(window) {

  angular.module('app')
  //scope is the glue between models and the view(the stick we were holding)
  .controller('myController', [
    '$scope',
    'Posts',
    function($scope, Posts){
    $scope.res = [];
      Posts.getPosts()
        .then(function(res){
          var posts = res.data.data.children.map(function(post) {
            if (/gifv/i.test(post.data.url)) {
              post.data.url = post.data.url.replace(/gifv/i, 'gif');
              return post
            } else {
              return post;
            }
          })
        $scope.reddit = posts;

      });
  }])

}(window, angular));