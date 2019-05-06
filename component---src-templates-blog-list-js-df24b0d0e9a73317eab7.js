(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(163),o=n(162),l=n(167),c=n(159),d=n(7),s=n.n(d),u=n(157),p=u.a.div.withConfig({displayName:"BlogPaginator__CenteredDiv",componentId:"sc-1r8me03-0"})(["text-align:center"]),m=Object(u.a)(c.a).withConfig({displayName:"BlogPaginator__StyledLink",componentId:"sc-1r8me03-1"})(["margin-right:3px;margin-left:3px;"]),g=u.a.div.withConfig({displayName:"BlogPaginator__StyledDiv",componentId:"sc-1r8me03-2"})(["display:inline-block;margin-right:3px;margin-left:3px;"]),h=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.createPageNumbers=function(){for(var e=[],t=0;t<this.props.numPages;t++)t===this.props.currentPage-1?e.push(r.a.createElement(g,null,t+1)):e.push(r.a.createElement(m,{key:"pagination-number"+(t+1),to:"/blog/"+(0===t?"":t+1)},t+1));return e},n.backButton=function(){var e=this.props.currentPage-1;return 1!==this.props.currentPage?r.a.createElement(m,{key:"back",to:"/blog/"+(1===e?"":e)},"<"):""},n.nextButton=function(){var e=this.props.currentPage+1;return this.props.currentPage!==this.props.numPages?r.a.createElement(m,{key:"next",to:"/blog/"+(1===e?"":e)},">"):""},n.render=function(){return r.a.createElement(p,null,this.backButton(),this.createPageNumbers(),this.nextButton())},t}(r.a.Component);n.d(t,"query",function(){return f});t.default=function(e){var t=e.data,n=e.pageContext,a=t.allMarkdownRemark.edges;return r.a.createElement(i.a,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,"Blog - Edgar Robles")),r.a.createElement(o.a,null,r.a.createElement("h1",null,"Blog"),a.map(function(e){var t=e.node.frontmatter;return r.a.createElement("div",{key:t.path},r.a.createElement("h2",null,r.a.createElement(c.a,{to:t.path},t.title)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.node.excerpt}}))}),r.a.createElement(h,{currentPage:n.currentPage,numPages:n.numPages})))};var f="2966710675"},158:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(158),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(55),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(157).a.div.withConfig({displayName:"Content",componentId:"sc-11mzz9m-0"})(['max-width:34em;margin:30px auto;font-family:"Merriweather Sans",sans-serif;font-size:100%;line-height:1.5;h1,h2,h3{font-family:"Fira Sans",sans-serif;}a a:focus,a:hover,a:visited,a:link,a:active{color:#000000;}a:hover{color:#6d6d6d;}img{width:100%;}']);t.a=function(e){var t=e.children;return r.a.createElement(i,null,t)}},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(157),c=n(160),d=l.a.div.withConfig({displayName:"TitleButton__Bar",componentId:"sc-1r8ug2u-0"})(["background:#eeeeee;width:100%;margin:0;@media (min-width:800px){display:none;}"]),s=l.a.div.withConfig({displayName:"TitleButton__Padding",componentId:"sc-1r8ug2u-1"})(["padding:5px;"]),u={border:"none",backgroundColor:"#dedede",padding:"5px 10px",fontSize:"16pt"},p=function(e){return o.a.createElement(d,null,o.a.createElement(s,null,o.a.createElement("button",{"aria-label":"Expand",style:u,onClick:e.onClick},o.a.createElement(c.a,{icon:"bars"}))))},m=n(164),g=n(165),h=n(166);m.b.add(g.a,h.a);var f=l.a.div.withConfig({displayName:"Sidebar__SideNav",componentId:"sc-1vqgvtb-0"})(["background-color:#eeeeee;z-index:1;top:0;left:0;@media (min-width:800px){position:fixed;height:100%;width:310px;overflow-x:hidden;padding-top:20px;display:block;}@media (max-width:800px){width:100%;display:",";}"],function(e){return e.open?"block":"none"});f.defaultProps={open:!0};var v=l.a.div.withConfig({displayName:"Sidebar__Content",componentId:"sc-1vqgvtb-1"})(["margin-left:310px;padding:0px 0px;@media (max-width:800px){margin-left:0px;}"]),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}r()(t,e);var n=t.prototype;return n.setSidebarOpen=function(e){this.setState({open:e})},n.toggleSidebarOpen=function(){this.setState({open:!this.state.open})},n.render=function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p,{onClick:function(){return e.toggleSidebarOpen()}}),o.a.createElement(f,{open:this.state.open},this.props.sidebar),o.a.createElement(v,null,this.props.children))},t}(i.Component),E=(n(147),n(159)),y=Object(l.a)(E.a).withConfig({displayName:"SidebarContents__StyledLink",componentId:"sc-15dadyb-0"})(["text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:#383C41;}font-size:16pt;"]),x=function(e){return o.a.createElement("div",{style:{padding:"1em 0em"}},o.a.createElement(y,{to:e.to},e.children))},w=function(){return o.a.createElement("div",{style:{fontSize:"30pt",paddingBottom:"1em"}},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",null,o.a.createElement(E.a,{to:"/"},"Edgar Robles")),o.a.createElement("a",{href:"http://github.com/erobl/"},o.a.createElement(c.a,{icon:["fab","github"],style:{padding:"0pt 12pt"}})),o.a.createElement("a",{href:"http://twitter.com/edgarobl"},o.a.createElement(c.a,{icon:["fab","twitter"],style:{padding:"0pt 12pt"}}))))},C=l.a.div.withConfig({displayName:"SidebarContents__Content",componentId:"sc-15dadyb-1"})(["padding:1em 2em;font-family:Lato,sans-serif"]),k=function(){return o.a.createElement(C,null,o.a.createElement(w,null),o.a.createElement(x,{to:"/blog"},"Blog"))};n.d(t,"a",function(){return _});var _=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(b,{sidebar:o.a.createElement(k,null)},this.props.children)},t}(i.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-df24b0d0e9a73317eab7.js.map