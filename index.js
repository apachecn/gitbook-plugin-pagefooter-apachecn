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
      /*
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
      var str = [
        '\n\n<footer class="page-footer">',
        '<div>',
        _copy,
        '<span class="footer-modification">',
        _label,
        '{{file.mtime | date("' + _format + '")}}',
        '</span>',
        '</div>',
        '</footer>'
      ].join('\n')
      */
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
      var footer = [
        '<hr/>',
        '<div align="center">',
        '<p><a href="http://www.apachecn.org/" target="_blank"><font face="KaiTi" size="6" color="red">我们一直在努力</font></a><p>',
        '<p><a href="https://github.com/apachecn/pytorch-doc-zh/" target="_blank">apachecn/pytorch-doc-zh</a></p>',
        '<p><iframe align="middle" src="https://ghbtns.com/github-btn.html?user=apachecn&repo=pytorch-doc-zh&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="100px" height="25px"></iframe>',
        '<iframe align="middle" src="https://ghbtns.com/github-btn.html?user=apachecn&repo=pytorch-doc-zh&type=star&count=true" frameborder="0" scrolling="0" width="100px" height="25px"></iframe>',
        '<iframe align="middle" src="https://ghbtns.com/github-btn.html?user=apachecn&repo=pytorch-doc-zh&type=fork&count=true" frameborder="0" scrolling="0" width="100px" height="25px"></iframe>',
        '<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=bcee938030cc9e1552deb3bd9617bbbf62d3ec1647e4b60d9cd6b6e8f78ddc03"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="ML | ApacheCN" title="ML | ApacheCN"></a></p>',
        ad,
        '</div>',
      ].join('\n')
      page.content = page.content + footer;
      return page;
    }
  },
  filters: {
    date: function(d, format) {
      return moment(d).format(format)
    }
  }
};
