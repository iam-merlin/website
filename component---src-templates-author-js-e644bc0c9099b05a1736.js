(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(30),a(93),a(61),a(40),a(2)),o=a.n(r),s=a(187),c=a(185),l=a(75),m=a(189),d=a(188),p=a(1),u=a(197),f=a.n(u),g=Object(p.a)(f.a).withConfig({displayName:"Next",componentId:"sc-17czh9a-0"})(["width:48px;fill:#ccd1db;"]),h=p.a.div.withConfig({displayName:"Next__Center",componentId:"sc-17czh9a-1"})(["text-align:center;margin-bottom:100px;"]),b=function(){return i.a.createElement(h,null,i.a.createElement(g,null))},x=a(180),w=p.a.section.withConfig({displayName:"Section",componentId:"nld09o-0"})(["position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0 0 68px 0;padding:0 0 68px 0;"]),v=p.a.div.withConfig({displayName:"Info",componentId:"sc-1l2dpse-0"})([""]),y=p.a.a.withConfig({displayName:"Url",componentId:"xw1ow4-0"})(["display:block;font-size:17px;font-weight:600;margin:0 0 20px;color:#99a0b3;"]),E=p.a.div.withConfig({displayName:"Bio",componentId:"l120ni-0"})(["p{font-size:17px;line-height:36px;margin:0 0 20px;color:#535763;}"]),R=function(e){return e.entries.map(function(e){return i.a.createElement(c.a,Object.assign({key:e.frontmatter.title},e.frontmatter,e.fields))})},C=function(e){var t=e.avatar,a=e.firstname,n=e.lastname,r=e.bio,o=e.title,c=e.social,p=void 0===c?{}:c,u=e.entries,f=void 0===u?[]:u;return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null,i.a.createElement(x.a,t),i.a.createElement(v,null,i.a.createElement(d.a,{size:s.a.EXTRA},o),i.a.createElement(m.a,{size:s.a.DEFAULT},a," ",n),i.a.createElement(y,{href:p.website},p.website),i.a.createElement(E,{dangerouslySetInnerHTML:{__html:r}}),i.a.createElement(l.a,{twitter:p.twitter,linkedin:p.linkedin,github:p.github,instagram:p.instagram,medium:p.medium}))),i.a.createElement(b,null),i.a.createElement(R,{entries:f}))};C.propTypes={avatar:o.a.shape({width:o.a.number.isRequired,height:o.a.number.isRequired,src:o.a.string.isRequired,srcSet:o.a.string.isRequired}),social:o.a.shape({website:o.a.string,twitter:o.a.string,linkedin:o.a.string,github:o.a.string,instagram:o.a.string,medium:o.a.string}),title:o.a.string.isRequired,firstname:o.a.string.isRequired,lastname:o.a.string.isRequired,bio:o.a.string.isRequired,entries:o.a.array.isRequired};var k=C;function I(e){var t=e.data,a=e.pageContext,n=t.markdownRemark,r=n.frontmatter,o=n.html,s=r.firstname,c=r.lastname,l=r.avatar,m=r.title,d=r.social,p=l.childImageSharp.resolutions,u=a.posts;return i.a.createElement(k,{bio:o,title:m,firstname:s,lastname:c,avatar:p,social:d,entries:u})}a.d(t,"default",function(){return I}),a.d(t,"pageQuery",function(){return q});var q="2722613009"},180:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a.n(i),o=n.a.img.withConfig({displayName:"Avatar",componentId:"sc-1thoghq-0"})(["display:inline-block;margin:0 9px 0 6px;vertical-align:-6px;width:","px;height:","px;border-radius:","px;"],function(e){return e.width},function(e){return e.height},function(e){return 2*e.height});o.propTypes={size:r.a.number,img:r.a.shape({width:r.a.number.isRequired,height:r.a.number.isRequired,src:r.a.string.isRequired,srcSet:r.a.string.isRequired})},t.a=o},181:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,[n.createElement("path",{d:"M189.156,0C84.858,0,0.001,84.858,0.001,189.155c0,104.298,84.857,189.155,189.155,189.155\n\t\t\tc104.304,0,189.154-84.857,189.154-189.155C378.31,84.858,293.46,0,189.156,0z M189.156,347.144\n\t\t\tc-87.117,0-157.988-70.87-157.988-157.988c0-87.115,70.871-157.988,157.988-157.988c87.117,0,157.986,70.873,157.986,157.988\n\t\t\tC347.142,276.273,276.272,347.144,189.156,347.144z",key:0}),n.createElement("path",{d:"M204.739,182.963V75.841c0-8.606-6.977-15.584-15.583-15.584c-8.605,0-15.582,6.978-15.582,15.584v113.314\n\t\t\tc0,4.839,2.25,9.101,5.703,11.962c0.146,0.176,0.245,0.373,0.397,0.546l58.438,66.354c3.082,3.49,7.381,5.279,11.701,5.279\n\t\t\tc3.652,0,7.33-1.276,10.289-3.888c6.461-5.692,7.084-15.537,1.398-21.998L204.739,182.963z",key:1})])}i.defaultProps={viewBox:"0 0 378.311 378.311"},e.exports=i,i.default=i},182:function(e,t,a){"use strict";var n=a(1);t.a=n.a.div.withConfig({displayName:"Tag",componentId:"d922z0-0"})(["display:inline-block;font-size:22px;font-weight:600;color:#c4c8d2;margin-right:20px;text-transform:capitalize;"])},183:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(2),o=a.n(r),s=a(20),c=a(1),l=c.a.span.withConfig({displayName:"Wrapper",componentId:"sc-1m3p3gc-0"})(["font-size:17px;color:#98a0b3;"]),m=c.a.span.withConfig({displayName:"Author",componentId:"sc-15caian-0"})(["font-size:17px;color:#98a0b3;"]),d=c.a.span.withConfig({displayName:"Published",componentId:"vqqcv9-0"})(["font-size:17px;color:#98a0b3;"]),p=c.a.time.withConfig({displayName:"PublishDate",componentId:"sc-1yx768v-0"})(["font-weight:600;color:#014fb0;"]),u=a(180),f=a(181),g=a.n(f),h=Object(c.a)(g.a).withConfig({displayName:"ReadingTime__StyledClock",componentId:"sc-18xjoan-0"})(["vertical-align:sub;padding:0 5px 0 20px;fill:#014fb0;width:20px;"]),b=c.a.time.withConfig({displayName:"ReadingTime__Time",componentId:"sc-18xjoan-1"})(["font-weight:600;color:#014fb0;"]),x=function(e){var t=e.duration;return i.a.createElement(b,null,i.a.createElement(h,null),"~ ",Math.round(t/1e3/60)," min")},w=Object(c.a)(s.a).withConfig({displayName:"Metadata__StyledLink",componentId:"sc-40gmgm-0"})(["text-decoration:none;color:#014fb0;"]),v=function(e){var t=e.path,a=e.time,n=e.img,r=e.firstname,o=e.lastname,s=e.published;return i.a.createElement(l,null,i.a.createElement(m,null,"Posted by",i.a.createElement(w,{to:t},i.a.createElement(u.a,n),r," ",o),i.a.createElement(d,null," on ",i.a.createElement(p,{dateTime:s},s)),i.a.createElement(x,{duration:a})))};v.propTypes={path:o.a.string.isRequired,img:o.a.shape({width:o.a.number.isRequired,height:o.a.number.isRequired,src:o.a.string.isRequired,srcSet:o.a.string.isRequired}),time:o.a.number.isRequired,firstname:o.a.string.isRequired,lastname:o.a.string.isRequired,published:o.a.string.isRequired};t.a=v},184:function(e){e.exports={data:{markdownRemark:{html:"<p>My nice description</p>",frontmatter:{path:"/authors/romain-dary",firstname:"Romain",lastname:"DARY",avatar:{childImageSharp:{resolutions:{width:24,height:24,src:"/static/742066026cbe6b91c6ab6d20218dea2c/80f52/avatar.jpg",srcSet:"/static/742066026cbe6b91c6ab6d20218dea2c/80f52/avatar.jpg 1x,\n/static/742066026cbe6b91c6ab6d20218dea2c/16de6/avatar.jpg 1.5x,\n/static/742066026cbe6b91c6ab6d20218dea2c/f84fe/avatar.jpg 2x,\n/static/742066026cbe6b91c6ab6d20218dea2c/05380/avatar.jpg 3x"}}}}}}}},185:function(e,t,a){"use strict";var n=a(184),i=a(0),r=a.n(i),o=a(20),s=a(1),c=s.a.h2.withConfig({displayName:"Title",componentId:"sc-1jfh59w-0"})(['font-family:"PT Serif","Times New Roman",serif;font-size:38px;font-weight:700;line-height:54px;position:relative;margin:0 0 38px 0;color:#1b1c1f;']),l=a(183),m=s.a.p.withConfig({displayName:"Excerpt__P",componentId:"suav2l-0"})(["font-size:18px;line-height:42px;margin:48px 0 0 0;"]),d=function(e){var t=e.children;return r.a.createElement(m,null,t,"...")},p=a(182),u=Object(s.a)(o.a).withConfig({displayName:"Link",componentId:"sc-1vpr7yc-0"})(["text-decoration:none;"]),f=s.a.article.withConfig({displayName:"Entry",componentId:"sc-196cdyv-0"})(["position:relative;margin:0 0 68px 0;padding:0 0 68px 0;&::before{position:absolute;top:38px;left:-65px;width:6px;height:6px;content:'';transition:border 0.2s ease-out,background 0.2s ease-out;border:6px solid #f2f6fa;border-radius:12px;background-color:#d2dbe5;}&::after{position:absolute;bottom:0;left:0;width:44%;height:1px;content:'';background-color:#e8e8ef;}"]);t.a=function(e){var t=e.readingTime,a=e.path,i=e.title,s=e.excerpt,m=e.date,g=e.tags,h=void 0===g?[]:g;return r.a.createElement(o.b,{query:"3153017582",render:function(e){var n=e.markdownRemark.frontmatter,o=n.path,g=n.avatar,b=n.firstname,x=n.lastname;return r.a.createElement(f,null,h[0]?r.a.createElement(u,{to:"/tags/"+h[0].toLowerCase(),key:h[0]},r.a.createElement(p.a,null,h[0])):null,r.a.createElement(u,{to:a},r.a.createElement(c,null,i)),r.a.createElement(l.a,{path:o,img:g.childImageSharp.resolutions,firstname:b,lastname:x,published:m,time:t.time}),r.a.createElement(d,null,s))},data:n})}},187:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={SMALL:"small",DEFAULT:"default",BIG:"big",EXTRA:"extra"}},188:function(e,t,a){"use strict";var n=a(1),i={small:14,default:22,big:28,extra:54};t.a=n.a.h2.withConfig({displayName:"H2",componentId:"bokjve-0"})(['font-family:"PT Serif","Times New Roman",serif;font-size:',"px;font-weight:700;line-height:54px;position:relative;margin:0 0 38px 0;color:#1b1c1f;"],function(e){var t=e.size;return i[t]?i[t]:i.default})},189:function(e,t,a){"use strict";a(93),a(61),a(40),a(190);var n=a(1),i={small:16,default:24,big:32};Object.keys(i);t.a=n.a.h1.withConfig({displayName:"H1",componentId:"sc-193ap7m-0"})(['font-family:"Muli","Arial",sans-serif;font-size:',"px;font-weight:700;margin:0 0 16px;color:#18191c;text-transform:",";"],function(e){var t=e.size;return i[t]?i[t]:i.default},function(e){return e.capitalize?"capitalize":"none"})},190:function(e,t,a){var n=a(31),i=a(41);a(191)("keys",function(){return function(e){return i(n(e))}})},191:function(e,t,a){var n=a(13),i=a(21),r=a(22);e.exports=function(e,t){var a=(i.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*r(function(){a(1)}),"Object",o)}},197:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,n.createElement("path",{d:"M334.63,532.15,605,126.61a18,18,0,0,0-15-28H49.26a18,18,0,0,0-15,28L304.64,532.15a18,18,0,0,0,30,0ZM206.12,319.39,319.64,149.11,433.15,319.39,319.64,489.66Zm248.7-32.49L353.32,134.65h203ZM286,134.65,184.45,286.9,82.94,134.65Z"}))}i.defaultProps={viewBox:"0 0 640 640"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-templates-author-js-e644bc0c9099b05a1736.js.map