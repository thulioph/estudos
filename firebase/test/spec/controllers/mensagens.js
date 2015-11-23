'use strict';

describe('Controller: MensagensCtrl', function () {

  // load the controller's module
  beforeEach(module('firebaseAppApp'));

  var MensagensCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MensagensCtrl = $controller('MensagensCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MensagensCtrl.awesomeThings.length).toBe(3);
  });
});
