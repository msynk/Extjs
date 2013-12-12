$.class(appname + '.utils.application.Application', {
  requires: [
    appname + '.utils.security.SecurityManager',
    appname + '.utils.security.UserEntity',
    appname + '.utils.Constants',
    appname + '.utils.Utils',
    appname + '.utils.Urls',
    appname + '.utils.Strings',
    appname + '.utils.connection.Ajax',
    appname + '.utils.application.ViewManager'
  ],

  security: null,
  constants: null,
  utils: null,
  urls: null,
  strings: null,
  ajax: null,
  viewManager: null,
  
  constructor: function (config) {
    $.apply(this, config || { });
    
    this.initializeComponents();
  },

  initializeComponents: function () {

    this.security = $.new(appname + '.utils.security.SecurityManager');
    this.constants = $.new(appname + '.utils.Constants');
    this.utils = $.new(appname + '.utils.Utils');
    this.urls = $.new(appname + '.utils.Urls');
    this.strings = $.new(appname + '.utils.Strings');
    this.ajax = $.new(appname + '.utils.connection.Ajax');
    this.viewManager = $.new(appname + '.utils.application.ViewManager');
  },
  
  start: function () {
    this.ajax.initialize();
    this.showView();
    this.startTaskCheckUser();
  },

  startTaskCheckUser: function () {
    var task = {
      run: function () {
        this.showView();
      },
      interval: this.constants.GLOBAL_COOCKIE_EXP_TIME,
      scope: this
    };
    $.TaskManager.start(task);
  },
  
  showView: function () {
    //if (!this.security.isAuthenticated()) {
    //  this.viewManager.hideViewport();
    //  this.viewManager.showLogonView();
    //} else {
    //  this.viewManager.hideLogonView();
    //  this.viewManager.showViewport();
    //}
    this.viewManager.hideViewport();
    this.viewManager.showViewport();
  }
});