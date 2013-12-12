$.class(appname + '.utils.security.SecurityManager', {
  requires: [
    'Ext.util.Cookies',
    appname + '.utils.security.UserEntity'
  ],
  
  AUTHENTICATION_KEY: 'AUTHENTICATIONKEY',
  userClass: appname + '.utils.security.UserEntity',
  currentUser: null,
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor: function () {
    if (!$.cookie) {
      $.cookie = $.util.Cookies;
    }
    this.checkUserFromCookie();

    this.callParent();
  },
  
  isAuthenticated: function () {
    if (this.currentUser !== null) {
      return true;
    }
    this.checkUserFromCookie();
    return this.currentUser !== null;
  },

  signIn: function (username, password, options) {
    var url = App.urls.security.signIn,
      params = { username: username, password: password };
    App.ajax.call(url, params, this.signInSuccess, { scope: this, callbackArguments: [options] });
  },
  signInSuccess: function (result) {
    var options = result[0],
      userObj = result[1];

    var user = $.new(this.userClass, userObj);
    this.setAuthenticationCookie(this.toCookieObject(user), options.remember);
    this.currentUser = user;
    options.callback.call(options.scope);
  },

  signOut: function () {
    $.cookie.clear(this.AUTHENTICATION_KEY, "/");
    this.currentUser = null;
  },



  setAuthenticationCookie: function (obj, persist) {
    var exp = null;
    if (persist === true) {
      var date = new Date();
      date.setTime(date.getTime() + App.constants.GLOBAL_COOCKIE_EXP_TIME);
      exp = date;
    }
    $.cookie.set(this.AUTHENTICATION_KEY, obj, exp, "/", null, false);
  },
  toCookieObject: function (user) {
    return $.encode({
      username: user.username,
      password: user.password,
      state: user.state,
      permissions: user.permissions
    });
  },

  checkUserFromCookie: function () {
    var user = this.getUserFromCookie();
    this.currentUser = (user && user.username) 
                        ? $.new(this.userClass, user) 
                        : null;
  },
  getUserFromCookie: function () {
    var obj = $.cookie.get(this.AUTHENTICATION_KEY);
    if (!obj) return null;
    var user = $.decode(obj);
    if (!user.username) return null;
    return user;
  }
});