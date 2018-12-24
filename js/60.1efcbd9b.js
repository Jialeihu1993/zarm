(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{469:function(n,e,s){"use strict";s.r(e);var o=s(3),r=s.n(o),a=s(4),t=s.n(a),c=s(2),i=s.n(c),m=s(5),d=s.n(m),g=s(492),l=(s(758),function(n){function e(){var n,o,a,c;t()(this,e);for(var m=arguments.length,d=Array(m),g=0;g<m;g++)d[g]=arguments[g];return o=a=i()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(d))),a.document=function(){return{document:s(518),className:"message-page"}},c=o,i()(a,c)}return d()(e,n),e}(g.a));e.default=l},518:function(n,e){n.exports="# 消息 Message\n\n\n\n## 基本用法\n```jsx\nimport { Message, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Message>普通</Message>\n        <Message theme=\"error\">自定义主题</Message>\n        <Message icon={<Icon type=\"wrong-round\" />}>自定义图标</Message>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 可操作\n```jsx\nimport { Message } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Message hasArrow onClick={() => alert('click this message!')}>链接样式的</Message>\n        <Message closable>可关闭的</Message>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'primary' | 主题，可选值 `default`、`primary`、`info`、`success`、`warning`、`error` |\n| size | string | 'md' | 设置大小，可选值为 `md`、`lg` |\n| icon | ReactNode | - | 设置图标 |\n| closable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n"},758:function(n,e,s){}}]);