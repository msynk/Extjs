$.class(appname + '.view.blog.BlogView', {
  extend: 'Ext.view.View',
  alias: 'widget.blogs',
  store: 'blog.BlogStore',

  tpl:
    '<div style="margin-top:100px" class="container">' +
      '<div class="blog-wrapper" style="padding:00px 50px 100px;font-family:byekan;font-weight:bold;font-size:80px;">ســــلام</div>' +
      '<tpl for=".">' +
        '<div class="blog-wrapper itemSelector">' +
          '<div class="title">{title}</div>' +
          '<span class="author">{author}</span>' +
          '<span class="upload-date">{uploadDate}</span>' +
          '<span class="views-count">{viewsCount}</span>' +
          '<div class="content">{content}</div>' +
        '</div>' +
      '</tpl>' +
    '</div>',
  itemSelector: 'div.itemSelector'
});