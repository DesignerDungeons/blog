(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),s=n(170),u=n.n(s),c=n(151),l=(n(250),n(142)),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={markdown:[]},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=this.props.pageContext.post,n=Object(l.withPrefix)("/posts/"+t.category+"/"+t.url);fetch(n).then(function(e){if(!e.ok)throw Error(e.statusText);return e.text()}).then(function(t){return e.setState({markdown:t})}).catch(function(e){return console.warn(e)})},n.render=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"shadowed-container post"},o.a.createElement(u.a,{escapeHtml:!1,source:this.state.markdown})))},t}(i.Component);t.default=d},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(140),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(144),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),f=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},148:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(53),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(7),o=n.n(i),s=n(51),u=n.n(s),c=n(142),l=(n(149),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeId:null,responsive:!1},n.handleItemClick=n.handleItemClick.bind(u()(u()(n))),n}o()(t,e);var n=t.prototype;return n.handleItemClick=function(e){this.setState({activeId:e})},n.toggleHamburger=function(){this.state.responsive?this.setState({responsive:!1}):this.setState({responsive:!0})},n.render=function(){var e,t=this;e=this.state.responsive?"nav responsive":"nav";var n=this.props.breadCrumbs?a.a.createElement(c.Link,{to:this.props.breadCrumbs.id},this.props.breadCrumbs.title):void 0;return a.a.createElement("div",{className:e},a.a.createElement(c.Link,{to:"/"},"Designer Dungeons"),n,a.a.createElement("span",{className:"icon",onClick:function(){return t.toggleHamburger()}},"☰"))},t}(r.Component));n(150),t.a=function(e){var t=e.children,n=e.breadCrumbs;return a.a.createElement("div",null,a.a.createElement(l,{breadCrumbs:n}),a.a.createElement("div",{className:"content"},t))}},250:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-posts-post-jsx-b220e5a1742d2758e453.js.map