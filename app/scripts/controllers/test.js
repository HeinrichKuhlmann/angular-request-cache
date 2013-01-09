'use strict';

angularRequestCacheApp.controller('TestCtrl', function($scope, ajax) {
  $scope.controllerUrl = "/";
  $scope.now = "...";
  $scope.cached = {'value': 'init'}
  $scope.get = function() {
	$scope.now = ajax($scope.controllerUrl).get();
  }
  
  $scope.getc = function() {
	var fn = function(val){
		$scope.cached = val;
	}
	ajax($scope.controllerUrl,fn).getc();
  }
});
