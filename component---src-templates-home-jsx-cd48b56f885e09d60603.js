(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(154),n(155)),o=n(151);t.default=function(e){var t=e.pageContext.posts;return r.a.createElement(o.a,null,t.map(function(e){return r.a.createElement(i.a,{post:e})}))}},140:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(146)),i=a(n(147)),o=a(n(7)),s=a(n(51)),c=a(n(52)),u=a(n(4)),l=a(n(0)),p=n(23),d=n(142);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/blog/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var n;n=e.call(this,t)||this,(0,c.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,c=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=f(n);return l.default.createElement(p.Link,(0,i.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:h})),!0}},m))},t}(l.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=l.default.forwardRef(function(e,t){return l.default.createElement(m,(0,i.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(140),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(144),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},147:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(53),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=n(51),c=n.n(s),u=n(142),l=(n(149),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeId:null,responsive:!1},n.handleItemClick=n.handleItemClick.bind(c()(c()(n))),n}o()(t,e);var n=t.prototype;return n.handleItemClick=function(e){this.setState({activeId:e})},n.toggleHamburger=function(){this.state.responsive?this.setState({responsive:!1}):this.setState({responsive:!0})},n.render=function(){var e,t=this;e=this.state.responsive?"nav responsive":"nav";var n=this.props.breadCrumbs?r.a.createElement(u.Link,{to:this.props.breadCrumbs.id},this.props.breadCrumbs.title):void 0;return r.a.createElement("div",{className:e},r.a.createElement(u.Link,{to:"/"},"Designer Dungeons"),n,r.a.createElement("span",{className:"icon",onClick:function(){return t.toggleHamburger()}},"☰"))},t}(a.Component));n(150),t.a=function(e){var t=e.children,n=e.breadCrumbs;return r.a.createElement("div",null,r.a.createElement(l,{breadCrumbs:n}),r.a.createElement("div",{className:"content"},t))}},154:function(e,t,n){},155:function(e,t,n){"use strict";n(156);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(142),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post;return o.a.createElement("div",{className:"headline-container shadowed-container"},o.a.createElement(s.Link,{className:"headline",to:"/"+e.category+"/"+e.path+"/"},o.a.createElement("img",{className:"headline",src:e.cardImage,alt:"post.name"})),o.a.createElement("img",{className:"topic-icon",src:Object(s.withPrefix)(e.icon),alt:e.categoryTitle}),o.a.createElement("div",{className:"headline-text"},o.a.createElement("h1",{className:"topic-name"},e.categoryTitle),o.a.createElement(s.Link,{className:"headline",to:"/"+e.category+"/"+e.path+"/"},o.a.createElement("h2",{className:"post-name"},e.name)),o.a.createElement("p",{className:"snipit"},e.snipit," ",o.a.createElement(s.Link,{className:"headline",to:"/"+e.category+"/"+e.path+"/"},"Read More"))),o.a.createElement("span",{className:"published-date"},new Date(e.date).toDateString()),this.props.icon)},t}(i.Component);t.a=c},156:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-home-jsx-cd48b56f885e09d60603.js.map