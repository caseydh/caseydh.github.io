(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{131:function(e,a,t){"use strict";t.r(a);var n=t(6),l=t.n(n),r=t(0),c=t.n(r),s=(t(139),t(140)),m=(t(169),t(143)),o=t(162),i=t.n(o),u=t(174),d=t(147),E=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.handleClick=function(){console.log("hi")},t.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{color:"#707070"}),c.a.createElement(d.a,{background:i.a,name:"BE RELENTLESS"}),c.a.createElement(u.a,null),c.a.createElement(m.a,null))},a}(r.Component);a.default=E},139:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return E});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(138),m=t.n(s);t.d(a,"Link",function(){return m.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var o=t(141),i=t.n(o);t.d(a,"PageRenderer",function(){return i.a});var u=t(27);t.d(a,"parsePath",function(){return u.a});var d=l.a.createContext({}),E=function(e){return l.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},140:function(e,a,t){"use strict";t.d(a,"a",function(){return f});var n=t(6),l=t.n(n),r=t(46),c=t.n(r),s=t(0),m=t.n(s),o=(t(145),t(146)),i=t.n(o),u=t(142),d=t.n(u),E=t(139),h=t(157),p=t(155),f=function(e){function a(a){var t;return(t=e.call(this,a)||this).toggle=t.toggle.bind(c()(c()(t))),t.state={isOpen:!1,brand:"",width:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(c()(c()(t))),t}l()(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",function(e){g()})},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},t.updateWindowDimensions=function(){this.setState({width:window.innerWidth})},t.render=function(){var e;return e=this.state.width<600?m.a.createElement("img",{src:d.a,className:"logo ml-3"}):m.a.createElement("img",{src:i.a,className:"logo ml-5"}),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{id:"overlay",onClick:g}),m.a.createElement("div",{id:"mySidenav",className:"sidenav"},m.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:g},"×"),m.a.createElement("div",{className:"ml-5 mr-4 faded"},m.a.createElement("h2",{className:"teko"},"CROSSFIT DELIVERANCE ",m.a.createElement("span",{className:"ml-2"},m.a.createElement("img",{src:d.a,height:"50px;",alt:""}))),m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-phone mr-2 my-2"})," 253.686.4898"),m.a.createElement("br",null),m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-map-marker mr-2 my-2"})," 4535 Union Bay Pl NE "),m.a.createElement("br",null),m.a.createElement("span",null,m.a.createElement("i",{className:"fa fa-clock-o  mr-2 my-2"})," Mon - Fri 5:00am - 7:30pm"),m.a.createElement("br",null),m.a.createElement("form",{className:"sidemenu-form"},m.a.createElement("input",{type:"text",placeholder:"Name"}),m.a.createElement("input",{type:"text",placeholder:"E-mail"}),m.a.createElement("textarea",{placeholder:"Comment",id:""}),m.a.createElement("button",{className:"primary-button-small my-2"},"SEND MESSAGE")),m.a.createElement("hr",null),m.a.createElement("br",null),m.a.createElement("h4",{className:"teko"},"FOLLOW US"),m.a.createElement("a",{href:"https://www.facebook.com/crossfitdeliverance/",target:"_blank",className:"social_media_button social_media_button--light",style:{marginLeft:"0px"}},m.a.createElement("i",{className:"fa fa-facebook"})),m.a.createElement("a",{href:"https://www.youtube.com/channel/UCJwsU2VvviHvzMa5lPWcIeg/videos",target:"_blank",className:"social_media_button social_media_button--light"},m.a.createElement("i",{className:"fa fa-youtube"})),m.a.createElement("a",{href:"https://www.instagram.com/crossfitdeliverance/",target:"_blank",className:"social_media_button social_media_button--light"},m.a.createElement("i",{className:"fa fa-instagram"})))),m.a.createElement("div",{id:"main"},m.a.createElement(p.k,{light:!0,expand:"md",className:"navbar"},m.a.createElement(p.l,null,e),m.a.createElement(p.m,{onClick:this.toggle}),m.a.createElement(p.e,{isOpen:this.state.isOpen,navbar:!0},m.a.createElement(p.h,{className:"ml-auto",navbar:!0},m.a.createElement(p.i,null,m.a.createElement(p.j,null,m.a.createElement(E.Link,{className:"navitem",to:"/",style:{color:""+this.props.color}},"HOME"))),m.a.createElement(p.n,{nav:!0,inNavbar:!0},m.a.createElement(p.g,{nav:!0,className:"navitem program",style:{color:""+this.props.color}},"PROGRAMS"),m.a.createElement(p.f,{right:!0},m.a.createElement(E.Link,{className:"navitem ml-3",to:"/crossfit",style:{color:"black"}},"CROSSFIT"),m.a.createElement("br",null),m.a.createElement(E.Link,{className:"navitem ml-3",to:"/training",style:{color:"black"}},"TRAINING"),m.a.createElement("br",null),m.a.createElement(E.Link,{className:"navitem ml-3",to:"/nutrition",style:{color:"black"}},"NUTRITION"),m.a.createElement("br",null),m.a.createElement(E.Link,{className:"navitem ml-3",to:"/seminars",style:{color:"black"}},"SEMINARS"))),m.a.createElement(p.i,null,m.a.createElement(p.j,null,m.a.createElement(E.Link,{className:"navitem",to:"/get_started",style:{color:""+this.props.color}},"GET STARTED"))),m.a.createElement(p.i,null,m.a.createElement(p.j,null,m.a.createElement(E.Link,{className:"navitem",to:"/schedule",style:{color:""+this.props.color}},"SCHEDULE"))),m.a.createElement(p.i,{onClick:N,className:"mr-5 mt-1 barmenu"},m.a.createElement(p.j,null,m.a.createElement(h.a,{style:{color:""+this.props.color}}))))))))},a}(m.a.Component);function N(){document.getElementById("mySidenav").style.width="400px",document.getElementById("overlay").style.display="block"}function g(){document.getElementById("mySidenav").style.width="0",document.getElementById("overlay").style.display="none"}},141:function(e,a,t){var n;e.exports=(n=t(144))&&n.default||n},142:function(e,a,t){e.exports=t.p+"static/logo-6a3edd35c6a535c5531410129fec092e.png"},143:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(148),t(158),t(149)),c=t.n(r);a.a=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"footer",className:"pt-5"},l.a.createElement("img",{src:c.a,alt:"logo",className:"logo_black"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row footerCol"},l.a.createElement("div",{className:"col-md-4 my-2"},l.a.createElement("h2",{className:"text-white teko"},"CROSSFIT DELIVERANCE"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-phone mr-2 my-2"})," 253.686.4898"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-map-marker mr-2 my-2"})," 4535 Union Bay Pl NE "),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-clock-o  mr-2 my-2"})," Mon - Fri 5:00am - 7:30pm")),l.a.createElement("div",{className:"col-md-4 my-2"},l.a.createElement("h2",{className:"text-white teko"},"USEFULL LINKS"),l.a.createElement("a",{href:"https://journal.crossfit.com/"},"Crossfit Journal"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://romwod.com/?gclid=EAIaIQobChMI5sO53MXN3gIVD6vsCh06wA_pEAAYASAAEgI_LvD_BwE"},"ROMWOD"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"www.crossfit.com"},"Crossfit.com")),l.a.createElement("div",{className:"col-md-4 my-2"},l.a.createElement("h2",{className:"text-white teko"},"CONTACT US"),l.a.createElement("form",{className:"footer-form"},l.a.createElement("input",{type:"text",placeholder:"Name"}),l.a.createElement("input",{type:"text",placeholder:"E-mail"}),l.a.createElement("textarea",{placeholder:"Comment",id:""}),l.a.createElement("button",{className:"primary-button-small"},"SEND MESSAGE")))))),l.a.createElement("div",{className:"py-2 footer"},l.a.createElement("div",{className:"footer-logo ml-5 "},l.a.createElement("img",{src:"img/logo.png",width:"30",alt:""}),l.a.createElement("p",{className:"d-inline copy_right"},"Copyrights 2017 © Crossfit Deliverance")),l.a.createElement("div",{className:"social mr-5"},l.a.createElement("a",{href:"https://www.facebook.com/crossfitdeliverance/",target:"_blank",className:"social_media_button social_media_button--dark"},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"https://www.youtube.com/channel/UCJwsU2VvviHvzMa5lPWcIeg/videos",target:"_blank",className:"social_media_button social_media_button--dark"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{href:"https://www.instagram.com/crossfitdeliverance/",target:"_blank",className:"social_media_button social_media_button--dark"},l.a.createElement("i",{className:"fa fa-instagram"})))))}},144:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(47),m=t(2),o=function(e){var a=e.location,t=m.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},145:function(e,a,t){},146:function(e,a,t){e.exports=t.p+"static/namelogo-538820d576473119860282a40395ac77.png"},147:function(e,a,t){"use strict";t(159);var n=t(0),l=t.n(n);t(139);a.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"showcase",className:"pt-5 showcase",style:{backgroundImage:"url("+e.background+")"}},l.a.createElement("div",{className:"showcaseOverlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"teko showCaseTitle"},e.name))))}},148:function(e,a,t){},149:function(e,a,t){e.exports=t.p+"static/logoblack-eba4326d20793638d3ba4b1e1e71a7f5.png"},162:function(e,a,t){e.exports=t.p+"static/showcase-165b828028a99b100b7c9e2e94c37358.jpg"},169:function(e,a,t){},174:function(e,a,t){"use strict";t.d(a,"a",function(){return u});t(66);var n=t(6),l=t.n(n),r=t(0),c=t.n(r),s=t(178),m=t.n(s),o=t(179),i=t.n(o),u=(t(176),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={schedule:"",loaded:!1,timeList:["05:00:00","06:00:00","08:00:00","09:00:00","10:00:00","10:15:00","12:00:00","16:00:00","17:30:00","19:00:00"],times:["5.00","6.00","8.00","9.00","10.00","10.15","12.00","16.00","17.30","19.00"]},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=new Date,a=e.getDate()-e.getDay(),t=new Date(e.setDate(a)),n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+parseInt(t.getDate()),l=m()(n);l=l.add(1,"days");for(var r=[],c=0;c<7;c++)r.push(l.format("L")),l=l.add(1,"days");var s=[],o={};r.forEach(function(e){s.push(i.a.get("https://app.wodify.com/API/Classes_v1.aspx",{params:{apiKey:"vtaR6x7gTaDT21oOgt4LDsHbd",date:e,type:"JSON"}}))});var u=this;i.a.all(s).then(function(e){e.forEach(function(e){var a=function(e){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e]}(new Date(e.data.RecordList.Class[0].StartDate).getDay());o[a]=e.data.RecordList.Class}),u.setState({schedule:o,loaded:!0})})},t.render=function(){var e=this;return console.log(this.state.schedule),this.state.loaded?c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{id:"schedule",className:"py-5"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"teko schedule_title mt-5 mb-2"},"CLASS ",c.a.createElement("br",null)," SCHEDULE"),c.a.createElement("div",{className:"decorative-line"}),c.a.createElement("h1",{className:"schedule_text teko"},"SCHEDULE")),c.a.createElement("table",{className:"mx-auto py-5"},c.a.createElement("thead",{id:"#thead"},c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",null,"MONDAY"),c.a.createElement("th",null,"TUESDAY"),c.a.createElement("th",null,"WEDNESDAY"),c.a.createElement("th",null,"THURSDAY"),c.a.createElement("th",null,"FRIDAY"),c.a.createElement("th",null,"SATURDAY"),c.a.createElement("th",null,"SUNDAY")),this.state.times.map(function(a,t){return c.a.createElement("tr",{key:a},["time","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(function(n){if("time"===n)return c.a.createElement("th",null,c.a.createElement("h3",{className:"time"},a));for(var l=0;l<e.state.schedule[n].length;l++){if(e.state.schedule[n][l].StartTime===e.state.timeList[t]){var r=e.state.schedule[n][l],s="",m="";return(m=(m=new Date(r.EndDateTime)).getHours()+"."+m.getMinutes()).length<=4&&(m+="0"),s=null==r.Coaches.APICoach.Name?"":r.Coaches.APICoach.Name,"CrossFit"==r.ProgramName?c.a.createElement("td",null,c.a.createElement("h3",{className:"crossfit"},"CrossFit"),c.a.createElement("h4",{className:"time"},a," - ",m," "),c.a.createElement("h4",{className:"coach"},s)):"OUTLAST"==r.ProgramName?c.a.createElement("td",null,c.a.createElement("h3",{className:"outlast"},"OUTLAST"),c.a.createElement("h4",{className:"time"},a," - ",m," "),c.a.createElement("h4",{className:"coach"},s)):"Open Gym"==r.ProgramName?c.a.createElement("td",null,c.a.createElement("h3",{className:"opengym"},"OPEN GYM"),c.a.createElement("h4",{className:"time"},a," - ",m," "),c.a.createElement("h4",{className:"coach"},s)):"Croga | CrossFit Yoga"==r.ProgramName?c.a.createElement("td",null,c.a.createElement("h3",{className:"yoga"},"CrossFit Yoga"),c.a.createElement("h4",{className:"time"},a," - ",m," "),c.a.createElement("h4",{className:"coach"},s)):c.a.createElement("td",null,c.a.createElement("h3",{className:"comp"},"COMPETITIVE"),c.a.createElement("h4",{className:"time"},a," - ",m," "),c.a.createElement("h4",{className:"coach"},s))}if(l===e.state.schedule[n].length-1)return c.a.createElement("td",null)}}))})))),c.a.createElement("section",{id:"mobileSchedule",className:"py-5 my-3"},c.a.createElement("h3",{className:"my-2 teko mx-5"},"CLASS ",c.a.createElement("br",null),"SCHEDULE"),c.a.createElement("div",{className:"decorative-line mx-5"}),c.a.createElement("div",{className:"listBox container py-3"},c.a.createElement("ul",{id:"mainList"},["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(function(a){return c.a.createElement("ul",null,c.a.createElement("li",{className:"teko day"},a),e.state.times.map(function(t,n){for(var l=0;l<e.state.schedule[a].length-1;l++)if(e.state.schedule[a][l].StartTime==e.state.timeList[n]){var r=e.state.schedule[a][l],s="";return(s=(s=new Date(r.EndDateTime)).getHours()+"."+s.getMinutes()).length<=4&&(s+="0"),"CrossFit"==r.ProgramName?c.a.createElement("li",null,c.a.createElement("h3",{className:"crossfit"},"CrossFit"),c.a.createElement("h4",{className:"time"},t," - ",s," ")):"OUTLAST"==r.ProgramName?c.a.createElement("li",null,c.a.createElement("h3",{className:"outlast"},"OUTLAST"),c.a.createElement("h4",{className:"time"},t," - ",s," ")):"Croga | CrossFit Yoga"==r.ProgramName?c.a.createElement("li",null,c.a.createElement("h3",{className:"yoga"},"CrossFit Yoga"),c.a.createElement("h4",{className:"time"},t," - ",s," ")):c.a.createElement("li",null,c.a.createElement("h3",{className:"comp"},"COMPETITIVE"),c.a.createElement("h4",{className:"time"},t," - ",s," "))}}))}))))):c.a.createElement("h1",null,"Loading")},a}(r.Component))},176:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-schedule-js-3f858ce45e6cfb5e20b3.js.map