$.class(appname + '.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        appname + '.view.home.IndexView',
        appname + '.view.account.AccountControlView',
        appname + '.view.shared.InfoView'
    ],
    layout: 'border',

    info: null,
    accountControl: null,

    initComponent: function () {
        this.items = this.buildItems();

        this.callParent();
    },

    beforeRender: function () {
        this.info = this.items.get(0).items.get(0);
        this.accountControl = this.items.get(0).items.get(1);
        
        this.callParent();
    },


    buildItems: function () {
        return [{
            region: 'north',
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'info'
            }, {
                xtype: 'accountcontrol'
            }],
        }, {
            region: 'west',
            xtype: 'index'
        }, {
            region: 'center',
            xtype: 'index'
        }, {
            region: 'south',
            xtype: 'index'
        }];
    }
});