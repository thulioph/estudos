var APP = APP || {};
APP.Request = {
  setUp: function() {
    this.ajax();
  },

  ajax: function() {
    $.ajax({
      url: 'https://raw.githubusercontent.com/thulioph/estudos/gh-pages/service-worker/data.json?callback=?',
      type: 'GET',
      dataType: 'JSONP',

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