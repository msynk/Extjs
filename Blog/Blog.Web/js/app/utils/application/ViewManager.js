$.class(appname + '.utils.application.ViewManager', {
  requires:[
    //appname + '.view.account.LogOnView',
    appname + '.view.Viewport'
  ],
  
  viewport: null,
  logonView: null,

  constructor: function () {
    //this.logonView = $.new(appname + '.view.account.LogOnView');
  },

  showViewport: function () {
    this.viewport = $.new(appname + '.view.Viewport');
    //this.viewport.accountControl.username.setText(App.security.currentUser.username);
    //this.viewport.info.currentDate.setText(App.utils.getCurrentDate());
    //this.viewport.info.version.setText(App.utils.getVersion());
  },
  hideViewport: function () {
    if (this.viewport) {
      this.viewport.destroy();
    }
  },
  showLogonView: function () {
    this.logonView.show();
  },
  hideLogonView: function () {
    this.logonView.hide();
  },
});