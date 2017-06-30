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
          res.data.data.children.shift();
          var posts = res.data.data.children.map(function(post) {
            var redditDate = post.data.created;
            post.data.created = new Date( redditDate * 1000);
            if (/gifv/i.test(post.data.url)) {
              post.data.url = post.data.url.replace(/gifv/i, 'gif');
              return post;
            } else {
              return post;
            }
          })
        $scope.reddit = posts;

      });
  }])

}(window, angular));
