var moment = require('moment');
module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function(page) {
      var _label = 'File Modify: ',
          _format = 'YYYY-MM-DD HH:mm:ss',
          _copy = '由 ApacheCN 团队提供支持'
      if(this.options.pluginsConfig['tbfed-pagefooter']) {
        _label = this.options.pluginsConfig['tbfed-pagefooter']['modify_label'] || _label;
        _format = this.options.pluginsConfig['tbfed-pagefooter']['modify_format'] || _format;

        var _c = this.options.pluginsConfig['tbfed-pagefooter']['copyright'];
        _copy = _c ? _c + ' all right reserved，' + _copy : _copy;
      }
      var _copy = '<span class="copyright">'+_copy+'</span>'
      var ad = [
        '<div>',
        '<!-- google ads -->',
        '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>',
        '<ins class="adsbygoogle"',
        '     style="display:inline-block;width:728px;height:90px"',
        '     data-ad-client="ca-pub-3565452474788507"',
        '     data-ad-slot="2543897000"></ins>',
        '<script>(adsbygoogle = window.adsbygoogle || []).push({})</script>',
        '</div>'
      ].join('\n')
      var str = [
        '\n\n<footer class="page-footer">',
        '<div>',
        _copy,
        '<span class="footer-modification">',
        _label,
        '{{file.mtime | date("' + _format + '")}}',
        '</span>',
        '</div>',
        ad,
        '</footer>'
      ].join('\n')
      page.content = page.content + str;
      return page;
    }
  },
  filters: {
    date: function(d, format) {
      return moment(d).format(format)
    }
  }
};
