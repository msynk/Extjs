$.class(appname + '.view.shared.InfoView', {
    extend: 'Ext.container.Container',
    alias: 'widget.info',
    requires: [
        'Ext.form.Label'
    ],
    layout: 'hbox',
    //height: 50,
    defaults: {
        xtype: 'label'
    },

    currentDate: null,
    version: null,

    initComponent: function () {
        this.items = this.buildItems();
        

        this.callParent();
    },
    beforeRender: function () {
        this.currentDate = this.items.get(0);
        this.version = this.items.get(1);
        
        this.callParent();
    },

    buildItems: function () {
        return [{
            name: 'currentdate',
            text: ''
        }, {
            name: 'version',
            text: ''
        }];
    },
});