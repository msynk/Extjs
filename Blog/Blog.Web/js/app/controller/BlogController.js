$.class(appname + '.controller.BlogController', {
  extend: 'Ext.app.Controller',

  models: ['blog.BlogModel'],
  stores: ['blog.BlogStore'],
  views: ['blog.BlogView'],

  init: function () {

  },

});