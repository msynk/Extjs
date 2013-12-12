var $ = Ext,
    App, 
    appname = 'HelpDesk.Web';

$.new = $.create;
$.class = $.define;
$.cookie = $.util.Cookies;
//////////////////////////////////////////////////////////////
$.application({
  name: appname,
  appFolder: 'js/app',

  controllers: ['AccountController'],
  requires: [appname + '.utils.application.Application'],

  init: function () {
    App = $.new(appname + '.utils.application.Application', {});
  },

  launch: function () {
    $.defer(this.hideMask, 250);
    App.start();
  },

  hideMask: function () {
    $.get('loading').remove();
    $.fly('loading-mask').animate({
      opacity: 0,
      remove: true,
      callback: this.firebugWarning
    });
  },
  firebugWarning: function () {
    var cp = $.create('Ext.state.CookieProvider');

    if (window.console && window.console.firebug && !cp.get('hideFBWarning')) {
      var tpl = $.create('Ext.Template',
          '<div id="fb" style="border: 1px solid #FF0000; background-color:#FFAAAA; display:none; padding:15px; color:#000000;"><b>Warning: </b> Firebug is known to cause performance issues with Ext JS. <a href="#" id="hideWarning">[ Hide ]</a></div>'
      );
      var newEl = tpl.insertFirst('all-demos');

      $.fly('hideWarning').on('click', function () {
        $.fly(newEl).slideOut('t', { remove: true });
        cp.set('hideFBWarning', true);
      });
      $.fly(newEl).slideIn();
    }
  }
});