(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{179:function(i,t,e){"use strict";e.r(t);e(30),e(93),e(61),e(40);var a=e(0),n=e.n(a),r=e(2),o=e.n(r),p=e(186),d=e(189),x=e(1).a.section.withConfig({displayName:"Section",componentId:"sc-1kvcj75-0"})(["position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0 0 68px 0;padding:0 0 68px 0;"]),m=e(180),l=function(i){var t=i.title,e=i.description,a=i.image;return n.a.createElement(x,null,n.a.createElement(m.a,a),n.a.createElement(d.a,{capitalize:!0},t),n.a.createElement(p.a,{content:e}))};l.propTypes={image:o.a.shape({width:o.a.number.isRequired,height:o.a.number.isRequired,src:o.a.string.isRequired,srcSet:o.a.string.isRequired}),title:o.a.string.isRequired,description:o.a.string.isRequired};var g=l,c=e(185);e.d(t,"default",function(){return s}),e.d(t,"pageQuery",function(){return f});var h=function(i){return i.entries.map(function(i){return n.a.createElement(c.a,Object.assign({key:i.id},i.frontmatter,i.fields))})};function s(i){var t=i.data,e=i.pageContext,a=e.posts,r=t.markdownRemark,o=r?r.frontmatter.title:e.tag,p=r?r.html:"",d=r?r.frontmatter.icon.childImageSharp.resolutions:null;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{title:o,description:p,entries:a,image:d}),n.a.createElement(h,{entries:a}))}var f="3183438656"},180:function(i,t,e){"use strict";var a=e(1),n=e(2),r=e.n(n),o=a.a.img.withConfig({displayName:"Avatar",componentId:"sc-1thoghq-0"})(["display:inline-block;margin:0 9px 0 6px;vertical-align:-6px;width:","px;height:","px;border-radius:","px;"],function(i){return i.width},function(i){return i.height},function(i){return 2*i.height});o.propTypes={size:r.a.number,img:r.a.shape({width:r.a.number.isRequired,height:r.a.number.isRequired,src:r.a.string.isRequired,srcSet:r.a.string.isRequired})},t.a=o},181:function(i,t,e){var a=e(0);function n(i){return a.createElement("svg",i,[a.createElement("path",{d:"M189.156,0C84.858,0,0.001,84.858,0.001,189.155c0,104.298,84.857,189.155,189.155,189.155\n\t\t\tc104.304,0,189.154-84.857,189.154-189.155C378.31,84.858,293.46,0,189.156,0z M189.156,347.144\n\t\t\tc-87.117,0-157.988-70.87-157.988-157.988c0-87.115,70.871-157.988,157.988-157.988c87.117,0,157.986,70.873,157.986,157.988\n\t\t\tC347.142,276.273,276.272,347.144,189.156,347.144z",key:0}),a.createElement("path",{d:"M204.739,182.963V75.841c0-8.606-6.977-15.584-15.583-15.584c-8.605,0-15.582,6.978-15.582,15.584v113.314\n\t\t\tc0,4.839,2.25,9.101,5.703,11.962c0.146,0.176,0.245,0.373,0.397,0.546l58.438,66.354c3.082,3.49,7.381,5.279,11.701,5.279\n\t\t\tc3.652,0,7.33-1.276,10.289-3.888c6.461-5.692,7.084-15.537,1.398-21.998L204.739,182.963z",key:1})])}n.defaultProps={viewBox:"0 0 378.311 378.311"},i.exports=n,n.default=n},182:function(i,t,e){"use strict";var a=e(1);t.a=a.a.div.withConfig({displayName:"Tag",componentId:"d922z0-0"})(["display:inline-block;font-size:22px;font-weight:600;color:#c4c8d2;margin-right:20px;text-transform:capitalize;"])},183:function(i,t,e){"use strict";var a=e(0),n=e.n(a),r=e(2),o=e.n(r),p=e(20),d=e(1),x=d.a.span.withConfig({displayName:"Wrapper",componentId:"sc-1m3p3gc-0"})(["font-size:17px;color:#98a0b3;"]),m=d.a.span.withConfig({displayName:"Author",componentId:"sc-15caian-0"})(["font-size:17px;color:#98a0b3;"]),l=d.a.span.withConfig({displayName:"Published",componentId:"vqqcv9-0"})(["font-size:17px;color:#98a0b3;"]),g=d.a.time.withConfig({displayName:"PublishDate",componentId:"sc-1yx768v-0"})(["font-weight:600;color:#014fb0;"]),c=e(180),h=e(181),s=e.n(h),f=Object(d.a)(s.a).withConfig({displayName:"ReadingTime__StyledClock",componentId:"sc-18xjoan-0"})(["vertical-align:sub;padding:0 5px 0 20px;fill:#014fb0;width:20px;"]),u=d.a.time.withConfig({displayName:"ReadingTime__Time",componentId:"sc-18xjoan-1"})(["font-weight:600;color:#014fb0;"]),w=function(i){var t=i.duration;return n.a.createElement(u,null,n.a.createElement(f,null),"~ ",Math.round(t/1e3/60)," min")},b=Object(d.a)(p.a).withConfig({displayName:"Metadata__StyledLink",componentId:"sc-40gmgm-0"})(["text-decoration:none;color:#014fb0;"]),v=function(i){var t=i.path,e=i.time,a=i.img,r=i.firstname,o=i.lastname,p=i.published;return n.a.createElement(x,null,n.a.createElement(m,null,"Posted by",n.a.createElement(b,{to:t},n.a.createElement(c.a,a),r," ",o),n.a.createElement(l,null," on ",n.a.createElement(g,{dateTime:p},p)),n.a.createElement(w,{duration:e})))};v.propTypes={path:o.a.string.isRequired,img:o.a.shape({width:o.a.number.isRequired,height:o.a.number.isRequired,src:o.a.string.isRequired,srcSet:o.a.string.isRequired}),time:o.a.number.isRequired,firstname:o.a.string.isRequired,lastname:o.a.string.isRequired,published:o.a.string.isRequired};t.a=v},184:function(i){i.exports={data:{markdownRemark:{html:"<p>My nice description</p>",frontmatter:{path:"/authors/romain-dary",firstname:"Romain",lastname:"DARY",avatar:{childImageSharp:{resolutions:{width:24,height:24,src:"/static/742066026cbe6b91c6ab6d20218dea2c/80f52/avatar.jpg",srcSet:"/static/742066026cbe6b91c6ab6d20218dea2c/80f52/avatar.jpg 1x,\n/static/742066026cbe6b91c6ab6d20218dea2c/16de6/avatar.jpg 1.5x,\n/static/742066026cbe6b91c6ab6d20218dea2c/f84fe/avatar.jpg 2x,\n/static/742066026cbe6b91c6ab6d20218dea2c/05380/avatar.jpg 3x"}}}}}}}},185:function(i,t,e){"use strict";var a=e(184),n=e(0),r=e.n(n),o=e(20),p=e(1),d=p.a.h2.withConfig({displayName:"Title",componentId:"sc-1jfh59w-0"})(['font-family:"PT Serif","Times New Roman",serif;font-size:38px;font-weight:700;line-height:54px;position:relative;margin:0 0 38px 0;color:#1b1c1f;']),x=e(183),m=p.a.p.withConfig({displayName:"Excerpt__P",componentId:"suav2l-0"})(["font-size:18px;line-height:42px;margin:48px 0 0 0;"]),l=function(i){var t=i.children;return r.a.createElement(m,null,t,"...")},g=e(182),c=Object(p.a)(o.a).withConfig({displayName:"Link",componentId:"sc-1vpr7yc-0"})(["text-decoration:none;"]),h=p.a.article.withConfig({displayName:"Entry",componentId:"sc-196cdyv-0"})(["position:relative;margin:0 0 68px 0;padding:0 0 68px 0;&::before{position:absolute;top:38px;left:-65px;width:6px;height:6px;content:'';transition:border 0.2s ease-out,background 0.2s ease-out;border:6px solid #f2f6fa;border-radius:12px;background-color:#d2dbe5;}&::after{position:absolute;bottom:0;left:0;width:44%;height:1px;content:'';background-color:#e8e8ef;}"]);t.a=function(i){var t=i.readingTime,e=i.path,n=i.title,p=i.excerpt,m=i.date,s=i.tags,f=void 0===s?[]:s;return r.a.createElement(o.b,{query:"3153017582",render:function(i){var a=i.markdownRemark.frontmatter,o=a.path,s=a.avatar,u=a.firstname,w=a.lastname;return r.a.createElement(h,null,f[0]?r.a.createElement(c,{to:"/tags/"+f[0].toLowerCase(),key:f[0]},r.a.createElement(g.a,null,f[0])):null,r.a.createElement(c,{to:e},r.a.createElement(d,null,n)),r.a.createElement(x.a,{path:o,img:s.childImageSharp.resolutions,firstname:u,lastname:w,published:m,time:t.time}),r.a.createElement(l,null,p))},data:a})}},186:function(i,t,e){"use strict";var a=e(0),n=e.n(a),r=e(1),o=e(2),p=e.n(o),d=r.a.div.withConfig({displayName:"PostContent__Content",componentId:"sc-1gg0ini-0"})(['hr{width:100%;height:1px;margin:58px 0;border:0;background:#d8d8d8}@media (max-width:720px){hr{margin:48px 0}}@media (max-width:480px){hr{margin:38px 0}}p{font-size:18px;line-height:38px;margin:38px 0;color:#535763}@media (max-width:720px){p{font-size:17px;line-height:34px;margin:28px 0}}@media (max-width:480px){p{font-size:16px;line-height:30px;margin:22px 0}}h1,h2{font-size:33px;font-weight:700;line-height:43px;margin:48px 0 44px;color:#212228}@media (max-width:720px){h1,h2{font-size:28px;line-height:38px;margin:38px 0 34px}}@media (max-width:480px){h1,h2{font-size:26px;line-height:38px;margin:34px 0 30px}}h3{font-size:28px;font-weight:700;line-height:38px;margin:48px 0 44px;color:#212228}@media (max-width:720px){h3{font-size:24px;line-height:34px;margin:38px 0 34px}}@media (max-width:480px){h3{font-size:22px;line-height:32px;margin:34px 0 30px}}h4{font-family:"Muli","Arial",Sans-Serif;font-size:24px;font-weight:600;line-height:34px;margin:48px 0 44px;color:#a6a9b3}@media (max-width:720px){h4{font-size:21px;line-height:31px;margin:38px 0 34px}}@media (max-width:480px){h4{font-size:19px;line-height:29px;margin:34px 0 30px}}h5,h6{font-family:"Muli","Arial",Sans-Serif;font-size:22px;font-weight:600;line-height:32px;margin:48px 0 44px;color:#a6a9b3}@media (max-width:720px){h5,h6{font-size:20px;line-height:30px;margin:38px 0 34px}}@media (max-width:480px){h5,h6{font-size:18px;line-height:28px;margin:34px 0 30px}}a{font-weight:600;color:#535763;-webkit-text-decoration-color:#e7ecf1;text-decoration-color:#e7ecf1}a:hover{-webkit-text-decoration-color:#014fb0;text-decoration-color:#014fb0}code{font-family:"PT Mono","Monaco","Courier New",sans-serif;font-size:16px;font-weight:600;display:inline-block;margin:0 5px;padding:0 8px;color:#2c3034;background:#f4f4f6}@media (max-width:720px){code{font-size:15px}}@media (max-width:480px){code{font-size:14px}}mark{color:#19191b;background-color:#d4e7ff}img{display:block;max-width:120%;margin:58px 0;margin-right:-10%;margin-left:-10%;border-radius:2px}@media (max-width:1040px){img{max-width:100vw;margin-left:calc((100vw - 100%) / -2);border-radius:0}}@media (max-width:720px){img{margin-top:48px;margin-bottom:48px}}@media (max-width:480px){img{margin-top:38px;margin-bottom:38px}}figure{max-width:120%;margin:58px 0;margin-right:-10%;margin-left:-10%;padding:0}figure img{max-width:100%;height:auto;margin:0 0 44px}@media (max-width:1040px){figure img{max-width:100vw;margin-left:calc((100vw - 100%) / -2);border-radius:0}}@media (max-width:720px){figure{margin-top:48px;margin-bottom:48px}}@media (max-width:480px){figure{margin-top:38px;margin-bottom:38px}figure img{margin-bottom:24px}}.kg-image-card{max-width:100%;margin:58px 0;margin-right:0;margin-left:0;padding:0}.kg-image-card.kg-width-full img{width:100vw}@media (max-width:720px){.kg-image-card{margin-top:48px;margin-bottom:48px}}@media (max-width:480px){.kg-image-card{margin-top:38px;margin-bottom:38px}}.kg-width-wide{max-width:120%;margin-right:-10%;margin-left:-10%}@media (max-width:1040px){.kg-width-wide{max-width:100vw;margin-left:calc((100vw - 100%) / -2);border-radius:0}}.kg-width-full{width:100vw;max-width:100vw;margin-left:calc((100vw - 100%) / -2)}figcaption{font-size:15px;font-weight:600;line-height:24px;max-width:80%;margin:0 auto;text-align:center;letter-spacing:0;color:#a6a9b3}figcaption a{color:#a6a9b3}@media (max-width:480px){figcaption{font-size:14px}}blockquote{font-size:26px;font-weight:600;font-style:italic;line-height:44px;max-width:660px;margin:58px 0 58px 54px;padding:10px 0 10px 54px;color:#34373e;border-left:5px solid #e8eef3}blockquote p{font-size:26px;font-weight:600;font-style:italic;line-height:44px;margin:0 0 15px;color:#34373e}blockquote footer,blockquote cite{font-size:17px;font-weight:600;font-style:normal;line-height:38px;color:#a0a7ac}blockquote footer a,blockquote cite a{text-decoration:none;color:#a0a7ac}@media (max-width:720px){blockquote{font-size:20px;line-height:34px;margin:48px 0 48px 32px;padding:10px 0 10px 32px}blockquote p{font-size:20px;line-height:34px;margin:0 0 10px}blockquote footer,blockquote cite{font-size:15px;line-height:32px}}@media (max-width:480px){blockquote{font-size:18px;line-height:32px;margin:38px 0 38px 22px;padding:10px 0 10px 28px}blockquote p{font-size:18px;line-height:32px;margin:0 0 10px}}ul{margin:48px 0 48px 44px;padding:0}@media (max-width:720px){ul{margin:38px 0 38px 24px}}@media (max-width:480px){ul{margin:30px 0 30px 24px}}li,ol{line-height:38px;max-width:660px;margin-bottom:28px;padding-left:24px}@media (max-width:720px){li,ol{margin-bottom:22px}}@media (max-width:720px){li,ol{font-size:17px;line-height:34px}}@media (max-width:480px){li,ol{font-size:16px;line-height:30px}}dl{margin:48px 0 48px 34px;padding:0}@media (max-width:720px){dl{margin:38px 0 38px 0}}@media (max-width:480px){dl{font-size:16px;margin:28px 0 28px 0}}dt{font-weight:600;margin:24px 0 18px;padding:0;color:#403f44}@media (max-width:720px){dt{margin:22px 0 16px}}dd{font-size:17px;line-height:34px;max-width:640px;margin:24px 0 34px 34px;padding:0 0 0 34px;color:#535763;border-left:2px solid #eee}@media (max-width:720px){dd{margin:18px 0 28px 24px}}@media (max-width:720px){dd{font-size:16px;line-height:32px;padding:0 0 0 28px}}@media (max-width:480px){dd{font-size:15px;line-height:28px}}pre{max-width:120%;margin:58px 0;margin-right:-10%;margin-left:-10%;padding:57px 80px;border-radius:2px;background:#0f0f10}@media (max-width:1040px){pre{width:100vw;max-width:100vw;margin-left:calc((100vw - 100%) / -2);border-radius:0}}@media (max-width:720px){pre{margin-top:48px;margin-bottom:48px;padding:48px 7.5%}}@media (max-width:480px){pre{margin-top:38px;margin-bottom:38px;padding:38px 7.5%}}pre code{font-family:"PT Mono","Monaco","Courier New",sans-serif;font-size:15px;font-weight:600;line-height:32px;overflow-x:auto;color:#f1f4f6;background:transparent}@media (max-width:720px){pre code{font-size:14px;line-height:30px}}@media (max-width:480px){pre code{font-size:13px;line-height:28px}}table{font-family:"Muli","Arial",sans-serif;font-size:15px;font-weight:600;position:relative;width:120%;max-width:120%;height:auto;margin:50px 0;margin-right:-10%;margin-left:-10%;border-collapse:collapse;border-radius:2px}@media (max-width:1060px){table{width:100%;margin:40px 0}}@media (max-width:720px){table{left:0;width:100%;margin:40px 0}}@media (max-width:460px){table{margin:35px 0}}@media (max-width:680px){table{border:0}table caption{font-size:13px}table thead{position:absolute;overflow:hidden;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;padding:0;border:none}table tr{display:block;height:auto;margin-bottom:30px;border-bottom:3px solid #ddd}table tr td:first-child{padding:7px 0}table tr:last-child{margin-bottom:0}table td{font-size:15px;display:block;padding:10px 0;text-align:right;border-bottom:1px solid #ddd}table td:before{font-weight:700;float:left;content:attr(data-label)}table td:last-child{border-bottom:0}}tr{height:75px}tr>td:first-child,tr>th:first-child{padding-left:30px}th{font-size:15px;font-weight:600;color:#171718;background:#f4f5f9}td,th{padding:8px;text-align:left}td{font-size:15px;font-weight:400;color:#464646;border-bottom:2px solid #fafafb}iframe,twitterwidget{margin:0 auto}.fluid-width-video-wrapper{margin:58px 0}@media (max-width:720px){.fluid-width-video-wrapper{margin:48px 0}}@media (max-width:480px){.fluid-width-video-wrapper{margin:38px 0}}']),x=function(i){var t=i.content;return n.a.createElement(d,{dangerouslySetInnerHTML:{__html:t}})};x.propTypes={content:p.a.string.isRequired},t.a=x},189:function(i,t,e){"use strict";e(93),e(61),e(40),e(190);var a=e(1),n={small:16,default:24,big:32};Object.keys(n);t.a=a.a.h1.withConfig({displayName:"H1",componentId:"sc-193ap7m-0"})(['font-family:"Muli","Arial",sans-serif;font-size:',"px;font-weight:700;margin:0 0 16px;color:#18191c;text-transform:",";"],function(i){var t=i.size;return n[t]?n[t]:n.default},function(i){return i.capitalize?"capitalize":"none"})},190:function(i,t,e){var a=e(31),n=e(41);e(191)("keys",function(){return function(i){return n(a(i))}})},191:function(i,t,e){var a=e(13),n=e(21),r=e(22);i.exports=function(i,t){var e=(n.Object||{})[i]||Object[i],o={};o[i]=t(e),a(a.S+a.F*r(function(){e(1)}),"Object",o)}}}]);
//# sourceMappingURL=component---src-templates-tag-js-40e073b648ba284348a3.js.map