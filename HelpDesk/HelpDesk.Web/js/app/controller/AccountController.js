Ext.define(appname + '.controller.AccountController', {
  extend: 'Ext.app.Controller',
  //models: ['account.LogOnModel'],
  views: [
      'account.LogOnView',
      'account.AccountControlView'
  ],

  init: function () {
    this.control({
      'logon button[action=logon]': {
        click: this.logOn
      },
      'logon button[action=reset]': {
        click: this.reset
      },
      'accountcontrol button[action=logOff]': {
        click: this.logOff
      }
    });
  },

  logOn: function (button) {
    //console.log(this.views);
    var win = button.up('window'),
      form = win.down('form'),
      user = form.getForm().getValues(),
      options = {
        remember: user.remember,
        callback: function () {
          App.showView();
        },
        scope: this
      };
    App.security.signIn(user.username, user.password, options);
  },
  logOff: function (button) {
    App.security.signOut();
    App.showView();
  },
  reset: function (button) {
    var win = button.up('window'),
      form = win.down('form');
    form.getForm().reset();
  }
});