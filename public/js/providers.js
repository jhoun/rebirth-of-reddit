angular.module('app')
  .provider('Reddit', function(){
    this.endpoint = '';
    this.setEndpoint = function(endpoint){
      this.endpoint = endpoint;
    };

    this.$get = ['$http', function($http){
      var endpoint = this.endpoint;
      return {
        getReddit : function(){
          return $http.get(endpoint).then(function(reddit){

            return reddit.data.data.children.map(function(post) {
              if (/gifv/i.test(post.data.url)) {
                post.data.url = post.data.url.replace(/gifv/i, 'gif');
                return post
              } else {
                return post;
              }
            })
          })
        }
      };
    }];
  }
);