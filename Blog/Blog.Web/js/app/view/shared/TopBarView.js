$.class(appname + '.view.shared.TopBarView', {
  extend: 'Ext.container.Container',
  alias: 'widget.topbar',

  initComponent: function () {
    this.html = this.buildHtml();

    this.callParent();
  },
  beforeRender: function () {
    this.currentDate = this.items.get(0);
    this.version = this.items.get(1);

    this.callParent();
  },

  buildHtml: function () {
    return '<div style="border-bottom: solid 2px #eeeeee">' +
            '<div class="header">' +
              '<div class="container">' +
                '<span class="siteTitle">' +
                  'وبلاگ من' +
                '</span>' +
                '<span style="font-family:consolas;font-weight:bold;font-size:40px;">' +
                  ' =>' +
                '</span>' +
              '</div>' +
            '</div>' +
           '</div>';
  }
});