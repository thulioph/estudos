var APP = APP || {};
APP.Request = {
  setUp: function() {
    this.ajax();
  },

  ajax: function() {
    var that;

    that = this;

    $.ajax({
      url: 'https://api.github.com/gists?callback=?',
      type: 'GET',
      dataType: 'jsonp',

      beforeSend: function() {
        console.log('Loading...');
      },

      success: function(data) {
        that.templateGist(data);
      },

      error: function(error) {
        console.warn('Error: ', error);
      }
    });
  },

  templateGist: function(data) {
    var source, template, gists, dataLengh, gistLink, owner, userImage, profile;

    source = document.getElementById('gist-template').innerHTML;
    template = Handlebars.compile(source);
    gists = [];
    dataLengh = data.length;

    for (var i = 0; i <= dataLengh; i++) {
      gistLink = data[i].html_url, 
      owner = data[i].owner.login,
      userImage = data[i].owner.avatar_url,
      profile = data[i].owner.url;
    }
  }
}