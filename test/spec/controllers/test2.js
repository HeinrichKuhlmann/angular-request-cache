'use strict';

describe('Controller: Test2Ctrl', function() {

  // load the controller's module
  beforeEach(module('angularRequestCacheApp'));

  var Test2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Test2Ctrl = $controller('Test2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
