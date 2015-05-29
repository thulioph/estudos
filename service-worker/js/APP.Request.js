var APP = APP || {};
APP.Request = function() {
  setUp: function() {
    this.ajax();
  },

  ajax: function() {
    $.ajax({
      url: 'https://github.com/thulioph/estudos/blob/master/service-worker/data.json',
      type: 'GET',

      beforeSend: function() {
        console.log('Loading...');
      },

      success: function(data) {
        console.log(data);
      },

      error: function(error) {
        console.warn('Error: ', error);
      }
    });
  }
}