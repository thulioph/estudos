var APP = APP || {};
APP.Request = {
  setUp: function() {
    this.ajax();
  },

  ajax: function() {
    $.ajax({
      url: 'https://api.github.com/gists?callback=?',
      type: 'GET',
      dataType: 'jsonp',

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