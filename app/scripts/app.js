'use strict';

var angularRequestCacheApp = angular.module('angularRequestCacheApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .when('/test2', {
        templateUrl: 'views/test2.html',
        controller: 'Test2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .factory('ajax', function($http, $timeout, $rootScope) {
	var store = new Persist.Store('RequestCacheStore');
	return function(url, fn, cache){
		
        if(!cache)cache=false;
        return {
            get: function(item) {
				var promise  = $http.get(url,{},{cache:cache}).then(function (response) {
                    return response.data;
                });
                return promise;
            },
			
            getc: function(item) {
				store.get(url, function(ok, val) {
				  if (ok) {
					fn(val);
				  }
				});
				$http.get(url,{},{cache:cache}).then(function (response) {
                    fn(response);
					store.set(url,response);
					$rootScope.$apply();
                });
                return null;
            },
			
			getTest: function(item) {
				store.get(url, function(ok, val) {
				  if (ok) {
					fn(val);
				  }
				});
				
				var callback = function(response){
					response = Math.random();
					fn(response);
					store.set(url,response);
					$rootScope.$apply();
				}
				
				$timeout(callback,2000);
				/**
                var promise = $http.get(url,{},{cache:cache}).then(function (response) {
                    obj = response;
                });**/
                return null;
            }
        }
    };
})
