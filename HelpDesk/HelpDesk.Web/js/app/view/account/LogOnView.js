$.class(appname + '.view.account.LogOnView', {
  extend: 'Ext.window.Window',
  alias: 'widget.logon',

  requires: [
      'Ext.form.Panel',
      'Ext.form.field.Checkbox'
  ],

  title: 'LogOn',
  layout: 'fit',
  width: 285,
  closable: false,
  resizable: false,
  plain: false,
  border: false,

  initComponent: function () {
    this.items = this.buildItems();
    this.buttons = this.buildButtons();

    this.callParent(arguments);
  },

  buildItems: function () {
    return [{
      xtype: 'form',
      frame: true,
      defaultType: 'textfield',
      monitorValid: true,

      items: [{
        fieldLabel: 'Username',
        name: 'username',
        allowBlank: false,
        enableKeyEvents: true,
      }, {
        fieldLabel: 'Password',
        name: 'password',
        inputType: 'password',
        allowBlank: false,
        enableKeyEvents: true,
      }, {
        xtype: 'checkbox',
        fieldLabel: ' ',
        labelSeparator: '',
        boxLabel: 'Remember me',
        name: 'remember',
      }],

    }];
  },
  buildButtons: function() {
    return [{
        text: 'Reset',
        action: 'reset'
      },
      {
        text: 'LogOn',
        action: 'logon'
      }];
  },

  listeners: {
    afterrender: function () {
      var me = this;
      this.getEl().on('keypress', function (e) {
        if (e.getKey() == 13) {
          //console.log(me.dockedItems.get(1).items.get(1));
          var button = me.dockedItems.get(1).items.get(1);
          button.fireEvent('click', button);
        }
      });
    }
  },

  reset: function () {
    var form = this.items.get(0);
    form.getForm().reset();
    form.items.get(0).focus();
  },
});