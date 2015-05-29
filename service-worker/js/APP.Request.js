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
    var source, template, gists, dataLengh, gistLink, owner, userImage, profile, filename;

    source = document.getElementById('gist-template').innerHTML;
    template = Handlebars.compile(source);
    gists = [];
    dataLengh = data.length;

    for (var i = 0; i <= dataLengh; i++) {
      gistLink = data[i].html_url, 
      owner = data[i].owner.login,
      profile = data[i].owner.html_url,
      userImage = data[i].owner.avatar_url,
      filename = data[i].files[0].filename;

      gists.push(
        link: gistLink,
        filename: filename,
        name: owner,
        image: userImage,
        profileUrl: profile
      );

      output = template({ 
        gist: gist 
      });

      document.getElementById('last-gists').innerHTML = output;
    }
  }
}