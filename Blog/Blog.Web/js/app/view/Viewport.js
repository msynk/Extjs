$.class(appname + '.view.Viewport', {
  extend: 'Ext.container.Viewport',
  requires: [
    'Ext.layout.container.Border',
    appname + '.view.shared.TopBarView',
    appname + '.view.blog.BlogView',
  ],
  layout: 'border',
  cls: 'viewport',

  initComponent: function () {
    this.items = this.buildItems();

    this.callParent();
  },


  buildItems: function () {
    return [{
      region: 'north',
      xtype: 'topbar',
    }, {
      region: 'center',
      xtype: 'blogs',
      autoScroll: true,
    }];
  }
});