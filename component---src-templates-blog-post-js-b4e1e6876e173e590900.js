(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(0),i=n.n(a),r=n(163),o=n(162),l=n(167),c=n(159);n(149),n(150),t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return i.a.createElement(r.a,null,i.a.createElement(l.Helmet,null,i.a.createElement("title",null,"Blog - Edgar Robles")),i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(c.a,{to:"/blog"},"< Blog")),i.a.createElement("div",null,i.a.createElement("h1",null,n.title),i.a.createElement("h3",null," ",n.date," "),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))))};var d="336125013"},158:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},159:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(158),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(55),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},162:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(157).a.div.withConfig({displayName:"Content",componentId:"sc-11mzz9m-0"})(['max-width:34em;margin:30px auto;font-family:"Merriweather Sans",sans-serif;font-size:100%;line-height:1.5;h1,h2,h3{font-family:"Fira Sans",sans-serif;}a a:focus,a:hover,a:visited,a:link,a:active{color:#000000;}a:hover{color:#6d6d6d;}img{width:100%;}']);t.a=function(e){var t=e.children;return i.a.createElement(r,null,t)}},163:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(157),c=n(160),d=l.a.div.withConfig({displayName:"TitleButton__Bar",componentId:"sc-1r8ug2u-0"})(["background:#CCCCCC;width:100%;margin:0;@media (min-width:800px){display:none;}"]),s=l.a.div.withConfig({displayName:"TitleButton__Padding",componentId:"sc-1r8ug2u-1"})(["padding:5px;"]),u={border:"none",backgroundColor:"#BBBBBB",padding:"5px 10px",fontSize:"16pt"},p=function(e){return o.a.createElement(d,null,o.a.createElement(s,null,o.a.createElement("button",{"aria-label":"Expand",style:u,onClick:e.onClick},o.a.createElement(c.a,{icon:"bars"}))))},m=n(164),f=n(165),h=n(166);m.b.add(f.a,h.a);var g=l.a.div.withConfig({displayName:"Sidebar__SideNav",componentId:"sc-1vqgvtb-0"})(["background-color:#CCCCCC;z-index:1;top:0;left:0;@media (min-width:800px){position:fixed;height:100%;width:310px;overflow-x:hidden;padding-top:20px;display:block;}@media (max-width:800px){width:100%;display:",";}"],function(e){return e.open?"block":"none"});g.defaultProps={open:!0};var v=l.a.div.withConfig({displayName:"Sidebar__Content",componentId:"sc-1vqgvtb-1"})(["margin-left:310px;padding:0px 0px;@media (max-width:800px){margin-left:0px;}"]),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}i()(t,e);var n=t.prototype;return n.setSidebarOpen=function(e){this.setState({open:e})},n.toggleSidebarOpen=function(){this.setState({open:!this.state.open})},n.render=function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p,{onClick:function(){return e.toggleSidebarOpen()}}),o.a.createElement(g,{open:this.state.open},this.props.sidebar),o.a.createElement(v,null,this.props.children))},t}(r.Component),E=(n(147),n(159)),C=Object(l.a)(E.a).withConfig({displayName:"SidebarContents__StyledLink",componentId:"sc-15dadyb-0"})(["text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:#383C41;}font-size:16pt;"]),y=function(e){return o.a.createElement("div",{style:{padding:"1em 0em"}},o.a.createElement(C,{to:e.to},e.children))},w=function(){return o.a.createElement("div",{style:{fontSize:"30pt",paddingBottom:"1em"}},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",null,o.a.createElement(E.a,{to:"/"},"Edgar Robles")),o.a.createElement("a",{href:"http://github.com/erobl/"},o.a.createElement(c.a,{icon:["fab","github"],style:{padding:"0pt 12pt"}})),o.a.createElement("a",{href:"http://twitter.com/edgarobl"},o.a.createElement(c.a,{icon:["fab","twitter"],style:{padding:"0pt 12pt"}}))))},x=l.a.div.withConfig({displayName:"SidebarContents__Content",componentId:"sc-15dadyb-1"})(["padding:1em 2em;font-family:Lato,sans-serif"]),S=function(){return o.a.createElement(x,null,o.a.createElement(w,null),o.a.createElement(y,{to:"/blog"},"Blog"))};n.d(t,"a",function(){return k});var k=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(b,{sidebar:o.a.createElement(S,null)},this.props.children)},t}(r.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b4e1e6876e173e590900.js.map