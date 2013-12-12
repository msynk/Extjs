$.class(appname + '.utils.Utils', {

  getCurrentDate: function () {
    return new Date().toGMTString();
  },
  getVersion: function () {
    return '0.1.0.0';
  },
  getUsername: function () {
    if (App.security.isAuthenticated())
      return App.security.currentUser.username;
    else
      return '';
  },


});