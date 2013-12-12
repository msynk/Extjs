$.class(appname + '.view.account.AccountControlView', {
    extend: 'Ext.container.Container',
    alias: 'widget.accountcontrol',
    layout: 'hbox',
    //height:50,
    defaults: {
        xtype: 'button'
    },

    username: null,

    initComponent: function () {
        this.items = this.buildItems();
        

        this.callParent();
    },
    beforeRender: function () {
        this.username = this.items.get(1);
        
        this.callParent();
    },

    buildItems: function () {
        return [{
            name: 'logoff',
            action: 'logOff',
            text: 'Log Off'
        }, {
            name: 'username',
            text: '',
            action: 'viewProfile'
        }, {
            name: 'changepassword',
            text: 'Change Password',
            action: 'changePassword'
        }];
    },
});