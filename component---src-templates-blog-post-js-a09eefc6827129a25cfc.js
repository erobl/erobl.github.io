(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});var a=n(0),i=n.n(a),r=n(164),o=n(163),l=n(168),d=n(160);n(150),n(151),t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return i.a.createElement(r.a,null,i.a.createElement(l.Helmet,null,i.a.createElement("title",null,"Blog - Edgar Robles")),i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(d.a,{to:"/blog"},"< Blog")),i.a.createElement("div",null,i.a.createElement("h1",null,n.title),i.a.createElement("h3",null," ",n.date," "),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))))};var c="336125013"},159:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},160:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(33),d=n.n(l);n.d(t,"a",function(){return d.a});n(159),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},162:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(55),d=n(2),c=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(158).a.div.withConfig({displayName:"Content",componentId:"sc-11mzz9m-0"})(['max-width:34em;margin:30px auto;font-family:"Merriweather Sans",sans-serif;font-size:100%;line-height:1.5;h1,h2,h3{font-family:"Fira Sans",sans-serif;}a a:focus,a:hover,a:visited,a:link,a:active{color:#000000;}a:hover{color:#6d6d6d;}img{width:100%;}']);t.a=function(e){var t=e.children;return i.a.createElement(r,null,t)}},164:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(158),d=n(161),c=l.a.div.withConfig({displayName:"TitleButton__Bar",componentId:"sc-1r8ug2u-0"})(["background:#eeeeee;width:100%;margin:0;@media (min-width:800px){display:none;}"]),s=l.a.div.withConfig({displayName:"TitleButton__Padding",componentId:"sc-1r8ug2u-1"})(["padding:5px;"]),u={border:"none",backgroundColor:"#dedede",padding:"5px 10px",fontSize:"16pt"},m=function(e){return o.a.createElement(c,null,o.a.createElement(s,null,o.a.createElement("button",{"aria-label":"Expand",style:u,onClick:e.onClick},o.a.createElement(d.a,{icon:"bars"}))))},p=n(165),f=n(166),h=n(167);p.default.config={autoAddCss:!1},p.default.library.add(f.a,h.a,f.b);var g=l.a.div.withConfig({displayName:"Sidebar__SideNav",componentId:"sc-1vqgvtb-0"})(["background-color:#eeeeee;z-index:1;top:0;left:0;@media (min-width:800px){position:fixed;height:100%;width:310px;overflow-x:hidden;padding-top:20px;display:block;}@media (max-width:800px){width:100%;display:",";}"],function(e){return e.open?"block":"none"});g.defaultProps={open:!0};var b=l.a.div.withConfig({displayName:"Sidebar__Content",componentId:"sc-1vqgvtb-1"})(["margin-left:310px;padding:0px 0px;@media (max-width:800px){margin-left:0px;}"]),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}i()(t,e);var n=t.prototype;return n.setSidebarOpen=function(e){this.setState({open:e})},n.toggleSidebarOpen=function(){this.setState({open:!this.state.open})},n.render=function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m,{onClick:function(){return e.toggleSidebarOpen()}}),o.a.createElement(g,{open:this.state.open},this.props.sidebar),o.a.createElement(b,null,this.props.children))},t}(r.Component),E=(n(148),n(160)),y=Object(l.a)(E.a).withConfig({displayName:"SidebarContents__StyledLink",componentId:"sc-15dadyb-0"})(["text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:#383C41;}font-size:16pt;"]),w=l.a.a.withConfig({displayName:"SidebarContents__PaddedLink",componentId:"sc-15dadyb-1"})(["padding:0pt 12pt;"]),x=function(e){return o.a.createElement("div",{style:{padding:"1em 0em"}},o.a.createElement(y,{to:e.to},e.children))},C=function(){return o.a.createElement("div",{style:{fontSize:"30pt",paddingBottom:"1em"}},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",null,o.a.createElement(E.a,{to:"/"},"Edgar Robles")),o.a.createElement(w,{href:"http://github.com/erobl/"},o.a.createElement(d.a,{icon:["fab","github"]})),o.a.createElement(w,{href:"http://twitter.com/edgarobl"},o.a.createElement(d.a,{icon:["fab","twitter"]})),o.a.createElement(w,{href:"http://erobl.xyz/blog/rss.xml"},o.a.createElement(d.a,{icon:"rss-square"}))))},S=l.a.div.withConfig({displayName:"SidebarContents__Content",componentId:"sc-15dadyb-2"})(["padding:1em 2em;font-family:Lato,sans-serif"]),k=function(){return o.a.createElement(S,null,o.a.createElement(C,null),o.a.createElement(x,{to:"/blog"},"Blog"))};n.d(t,"a",function(){return _});var _=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(v,{sidebar:o.a.createElement(k,null)},this.props.children)},t}(r.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a09eefc6827129a25cfc.js.map