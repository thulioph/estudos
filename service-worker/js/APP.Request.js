var APP = APP || {};
APP.Request = {
  setUp: function() {
    this.ajax();
  },

  ajax: function() {
    var that, query, language;

    that = this;
    query = 'frontend+framework';
    language = 'javascript';

    $.ajax({
      url: 'https://api.github.com/search/repositories?q=' + query + '+language:' + language + '&sort=stars&order=desc',
      type: 'GET',

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
    var source, template, gists, size, repoUrl, description, userName, 
        userImage, userProfile, homePage, projectName;

    source = document.getElementById('github-template').innerHTML;
    template = Handlebars.compile(source);
    gists = [];
    size = data.total_count;

    for (var i = 0; i < 30; i ++) {
      repoUrl = data.items[i].html_url;
      projectName = data.items[i].name;
      description = data.items[i].description;
      userName = data.items[i].owner.login;
      userImage = data.items[i].owner.avatar_url;
      userProfile = data.items[i].owner.html_url;
      homePage = data.items[i].homepage;

      gists.push({
        repoUrl: repoUrl,
        description: description,
        userName: userName,
        userImage: userImage,
        userProfile: userProfile,
        homePage: homePage,
        projectName: projectName
      });

      output = template({ 
        gist: gists 
      });

      document.getElementById('last-gists').innerHTML = output;
    }
  }
}