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
          return $http.get(endpoint);
        }
      };
    }];
  }
);