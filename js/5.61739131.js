(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{291:function(n,t,s){"use strict";s.r(t);var e=s(3),a=s.n(e),r=s(4),i=s.n(r),m=s(2),o=s.n(m),p=s(5),c=s.n(p),l=function(n){function t(){var n,e,r,m;i()(this,t);for(var p=arguments.length,c=Array(p),l=0;l<p;l++)c[l]=arguments[l];return e=r=o()(this,(n=t.__proto__||a()(t)).call.apply(n,[this].concat(c))),r.document=function(){return{document:s(726),className:"quick-start-page"}},m=e,o()(r,m)}return c()(t,n),t}(s(486).a);t.default=l},486:function(n,t,s){"use strict";var e=s(3),a=s.n(e),r=s(4),i=s.n(r),m=s(6),o=s.n(m),p=s(2),c=s.n(p),l=s(5),g=s.n(l),h=s(0),u=s.n(h),d=s(489),z=s.n(d),b=s(490),v=s.n(b),f=(s(491),s(487),function(n){function t(){return i()(this,t),c()(this,(t.__proto__||a()(t)).apply(this,arguments))}return g()(t,n),o()(t,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=n.document,s=n.className;if("string"==typeof t){var e=new z.a.Renderer;e.table=function(n,t){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+t+"</tbody></table></div>"},e.code=function(n,t){return'<pre><code class="hljs '+t+'">'+(!(!t||!v.a.getLanguage(t))?v.a.highlight(t,n).value:n)+"</code></pre>"};var a=z()(t,{renderer:e});return u.a.createElement("div",{className:s,dangerouslySetInnerHTML:{__html:a}})}return u.a.createElement("span",null)}}]),t}(h.Component));t.a=f},487:function(n,t,s){},726:function(n,t){n.exports='<p align="center">\n  <a href="http://zarm.design">\n    <img width="200" src="https://zarm.design/images/logo.ce68565d.svg">\n  </a>\n</p>\n\n<h1 align="center">Zarm</h1>\n\n<div align="center">\n  \n  [![Build Status](https://www.travis-ci.org/ZhonganTechENG/zarm.svg?branch=master)](https://www.travis-ci.org/ZhonganTechENG/zarm)\n  [![Coverage Status](https://img.shields.io/coveralls/ZhonganTechENG/zarm/master.svg)](https://coveralls.io/github/ZhonganTechENG/zarm?branch=master) \n  [![npm package](https://img.shields.io/npm/v/zarm.svg)](https://www.npmjs.org/package/zarm)\n  [![NPM downloads](http://img.shields.io/npm/dm/zarm.svg)](https://npmjs.org/package/zarm) \n  ![JS gzip size](http://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.js?compression=gzip&label=gzip%20size:%20JS)\n  ![CSS gzip size](http://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.css?compression=gzip&label=gzip%20size:%20CSS)\n\n  众安科技移动端UI组件库，基于React、React-Native。\n</div>\n\n## Version 版本\n\n- 稳定版：[![npm package](https://img.shields.io/npm/v/zarm.svg)](https://www.npmjs.org/package/zarm)\n- 开发版：[![npm package](https://img.shields.io/npm/v/zarm/alpha.svg)](https://www.npmjs.org/package/zarm)\n\n\n## Install 安装\n\n\n使用npm安装：\n```bash\nnpm install zarm --save\n```\n\n或者通过cdn引入umd模块：\n```html\n<link rel="stylesheet" href="https://unpkg.com/zarm@latest/dist/zarm.min.css">\n<script type="text/javascript" src="https://unpkg.com/zarm@latest/dist/zarm.min.js"><\/script>\n```\n\n## Usage 使用\n\n#### 全组件引入\n\n```js\nimport { Button, Cell } from \'zarm\';\nimport \'zarm/dist/zarm.min.css\';\n```\n\n#### 按需加载\n\n* 方法一（推荐）\n\n> 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 自动加载Sass文件\n\n```js\n  // .babelrc or babel-loader option\n  {\n    "plugins": [\n      [\'import\', {\n        libraryName: \'zarm\',\n        style: true,\n      }],\n    ]\n  }\n```\n```js\nimport { Button, Cell } from \'zarm\';\n```\n\n* 方法二：\n\n```js\nimport Button from \'zarm/lib/Button\';\nimport \'zarm/lib/Button/style\';\n```\n\n#### 定制主题\n\n通过覆盖Sass变量定义达到定制主题的效果\n\n```css\n@import "~zarm/lib/style/index.scss";  // 引入官方提供的Sass基础样式文件\n@import "your-theme-file.scss";  // 用于覆盖上面定义的变量\n@import "~zarm/lib/style/components.scss";  // 引入官方提供的组件样式文件\n```\n\n`your-theme-file.scss` 示例如下：\n\n```css\n$theme-primary: #108ee9;\n```\n变量名可参考 [default.scss](https://github.com/ZhonganTechENG/zarm/blob/master/components/style/themes/default.scss)\n\n> 注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。\n\n## Changelog 更新日志\n[CHANGELOG.md](https://github.com/ZhonganTechENG/zarm/blob/master/CHANGELOG.md)\n\n## License\nMIT\n'}}]);