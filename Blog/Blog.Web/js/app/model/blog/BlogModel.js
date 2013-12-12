$.class(appname + '.model.blog.BlogModel', {
  extend: 'Ext.data.Model',
  fields: [
    'title',
    'author',
    'uploadDate',
    'viewsCount',
    'content'
  ]
});