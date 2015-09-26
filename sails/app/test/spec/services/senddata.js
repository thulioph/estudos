'use strict';

describe('Service: sendData', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var sendData;
  beforeEach(inject(function (_sendData_) {
    sendData = _sendData_;
  }));

  it('should do something', function () {
    expect(!!sendData).toBe(true);
  });

});
