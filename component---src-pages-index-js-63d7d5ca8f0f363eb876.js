(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(34),r=n.n(o),c=n(7),d=n.n(c),l=n(194),s=(n(184),n(4)),p=n.n(s),u=n(33),m=n.n(u);n(191),i.a.createContext({});p.a.object,p.a.string.isRequired,p.a.func,p.a.func;var h=n(189),f=h.a.div.withConfig({displayName:"logo__Logo",componentId:"sc-3zqmxl-0"})(["font-size:3.75vw;margin:auto;text-align:center;padding:0.5em 0em;"]),b=Object(h.a)(m.a).withConfig({displayName:"logo__StyledLink",componentId:"sc-3zqmxl-1"})(["text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:#383C41;}"]),g=function(){return i.a.createElement(f,null,i.a.createElement(b,{to:"/"},"erobl.xyz"))},C=n(190),E=Object(h.a)(m.a).withConfig({displayName:"SidebarContents__StyledLink",componentId:"j2xpwh-0"})(["text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:#383C41;}font-size:16pt;"]),v=function(e){return i.a.createElement("div",{style:{padding:"1em 0em"}},i.a.createElement(E,{to:e.to},e.children))},S=h.a.div.withConfig({displayName:"SidebarContents__BioStyle",componentId:"j2xpwh-1"})(["font-size:30pt;padding-bottom:1em;"]),w=function(){return i.a.createElement(S,null,"Edgar Robles",i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("a",{href:"http://github.com/erobl/"},i.a.createElement(C.a,{icon:["fab","github"],style:{padding:"0pt 12pt"}})),i.a.createElement("a",{href:"http://twitter.com/edgarobl"},i.a.createElement(C.a,{icon:["fab","twitter"],style:{padding:"0pt 12pt"}}))))},y=function(){var e=h.a.div.withConfig({displayName:"SidebarContents__Content",componentId:"j2xpwh-2"})(["padding:1em 2em;"]);return i.a.createElement(e,null,i.a.createElement(g,null),i.a.createElement(w,null),i.a.createElement(v,{to:"/"},"Seccion"),i.a.createElement(v,{to:"/"},"Seccion"),i.a.createElement(v,{to:"/"},"Seccion"),i.a.createElement(v,{to:"/"},"Seccion"))},x=h.a.div.withConfig({displayName:"TitleButton__Bar",componentId:"sc-5l110v-0"})(["background:#CCCCCC;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;width:100%;height:40px;"]),k=h.a.button.withConfig({displayName:"TitleButton__BurgButton",componentId:"sc-5l110v-1"})(["border:none;background-color:#BBBBBB;padding:5px 10px;font-size:16pt;"]),O=function(e){return i.a.createElement(x,null,i.a.createElement(k,{onClick:e.onClick},i.a.createElement(C.a,{icon:"bars"})))},_="undefined"!=typeof window?window.matchMedia("(min-width: 800px)"):{addListener:function(){},removeListener:function(){},matches:!0},B=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={sidebarDocked:_.matches,sidebarOpen:!1},n.mediaQueryChanged=n.mediaQueryChanged.bind(r()(n)),n.onSetSidebarOpen=n.onSetSidebarOpen.bind(r()(n)),n}d()(t,e);var n=t.prototype;return n.componentWillMount=function(){_.addListener(this.mediaQueryChanged)},n.componentWillUnmount=function(){this.state.mql.removeListener(this.mediaQueryChanged)},n.onSetSidebarOpen=function(e){this.setState({sidebarOpen:e})},n.mediaQueryChanged=function(){this.setState({sidebarDocked:_.matches,sidebarOpen:!1})},n.onSetSidebarOpen=function(e){this.setState({sidebarOpen:e})},n.render=function(){var e=this;return i.a.createElement(l.a,{sidebar:i.a.createElement(y,null),open:this.state.sidebarOpen,docked:this.state.sidebarDocked,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"#CCCCCC"}},shadow:!1},this.state.sidebarDocked?"":i.a.createElement(O,{onClick:function(){return e.onSetSidebarOpen(!0)}},"open"),this.props.children)},t}(a.Component),N=n(185),j=n.n(N),z=function(e){var t=e.children;return i.a.createElement("div",{className:j.a.content},t)},I=n(186),L=n.n(I),q=function(){return i.a.createElement("div",{className:L.a.splashscreen},"erobl.xyz")},R=n(193),Q=n(205),D=n(206);R.b.add(Q.a,D.a);t.default=function(){return i.a.createElement(B,null,i.a.createElement(z,null,i.a.createElement(q,null)))}},191:function(e,t,n){var a;e.exports=(a=n(196))&&a.default||a},196:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=n(79),d=n(2),l=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-63d7d5ca8f0f363eb876.js.map