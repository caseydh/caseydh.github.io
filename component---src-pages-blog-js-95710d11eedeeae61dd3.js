(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(6),r=a.n(n),c=a(0),o=a.n(c),s=(a(163),a(162)),l=(a(183),a(166)),i=a(175),p=a.n(i),u=(a(184),a(168)),d=a(192),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={postPerPage:6,pages:0},a}r()(t,e);var a=t.prototype;return a.componentWillMount=function(){var e=Math.ceil(this.props.data.allContentfulBlog.edges.length/this.state.postPerPage);this.setState({pages:e})},a.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{color:"black"}),o.a.createElement(u.a,{background:p.a,name:"BE RELENTLESS"}),o.a.createElement("section",{id:"blog-grid",className:"mx-5 py-5 my-5"},this.props.data.allContentfulBlog.edges.map(function(e){return o.a.createElement(d.a,{photo:e.node.photo.file.url,url:e.node.slug,category:e.node.category,excerpt:e.node.excerpt,title:e.node.title,subTitle:e.node.subTitle})})),o.a.createElement(l.a,null))},t}(c.Component);t.default=m;var g="502880877"},175:function(e,t,a){e.exports=a.p+"static/showcase-165b828028a99b100b7c9e2e94c37358.jpg"},183:function(e,t,a){},184:function(e,t,a){e.exports=a.p+"static/stairs-678367ec4438b8a1bd05146cb9c8cf73.jpg"},192:function(e,t,a){"use strict";var n=a(6),r=a.n(n),c=a(0),o=a.n(c),s=(a(193),a(163)),l=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(s.Link,{class:"blog-item",to:this.props.url},o.a.createElement("header",{class:"card__thumb"},o.a.createElement("img",{src:this.props.photo,class:"cover"})),o.a.createElement("div",{class:"card__body"},o.a.createElement("div",{class:"card__category"},this.props.category),o.a.createElement("div",{class:"card__title"},this.props.title),o.a.createElement("div",{class:"card__subtitle"},this.props.subTitle),o.a.createElement("p",{class:"card__description"},this.props.excerpt)))},t}(o.a.Component);t.a=l},193:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-blog-js-95710d11eedeeae61dd3.js.map