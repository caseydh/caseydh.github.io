(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(e,a,t){"use strict";t.r(a);var n=t(6),l=t.n(n),s=t(0),r=t.n(s),c=(t(163),t(162)),m=(t(183),t(165)),o=t(175),i=t.n(o),u=t(195),E=t(167),h=function(e){function a(){return e.apply(this,arguments)||this}l()(a,e);var t=a.prototype;return t.handleClick=function(){console.log("hi")},t.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{color:"#707070"}),r.a.createElement(E.a,{background:i.a,name:"BE RELENTLESS"}),r.a.createElement(u.a,null),r.a.createElement(m.a,null))},a}(s.Component);a.default=h},175:function(e,a,t){e.exports=t.p+"static/showcase-165b828028a99b100b7c9e2e94c37358.jpg"},183:function(e,a,t){},195:function(e,a,t){"use strict";t.d(a,"a",function(){return u});t(72);var n=t(6),l=t.n(n),s=t(0),r=t.n(s),c=t(200),m=t.n(c),o=t(201),i=t.n(o),u=(t(197),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={schedule:"",loaded:!1,timeList:["05:00:00","06:00:00","08:00:00","09:00:00","10:00:00","10:15:00","12:00:00","16:00:00","17:30:00","19:00:00"],times:["5.00","6.00","8.00","9.00","10.00","10.15","12.00","16.00","17.30","19.00"]},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=new Date,a=e.getDate()-e.getDay(),t=new Date(e.setDate(a)),n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+parseInt(t.getDate()),l=m()(n);l=l.add(1,"days");for(var s=[],r=0;r<7;r++)s.push(l.format("L")),l=l.add(1,"days");var c=[],o={};s.forEach(function(e){c.push(i.a.get("https://app.wodify.com/API/Classes_v1.aspx",{params:{apiKey:"vtaR6x7gTaDT21oOgt4LDsHbd",date:e,type:"JSON"}}))});var u=this;i.a.all(c).then(function(e){e.forEach(function(e){var a=function(e){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e]}(new Date(e.data.RecordList.Class[0].StartDate).getDay());o[a]=e.data.RecordList.Class}),u.setState({schedule:o,loaded:!0})})},t.render=function(){var e=this;return console.log(this.state.schedule),this.state.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"schedule",className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"teko schedule_title mt-5 mb-2"},"CLASS ",r.a.createElement("br",null)," SCHEDULE"),r.a.createElement("div",{className:"decorative-line"}),r.a.createElement("h1",{className:"schedule_text teko"},"SCHEDULE")),r.a.createElement("table",{className:"mx-auto py-5"},r.a.createElement("thead",{id:"#thead"},r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"MONDAY"),r.a.createElement("th",null,"TUESDAY"),r.a.createElement("th",null,"WEDNESDAY"),r.a.createElement("th",null,"THURSDAY"),r.a.createElement("th",null,"FRIDAY"),r.a.createElement("th",null,"SATURDAY"),r.a.createElement("th",null,"SUNDAY")),this.state.times.map(function(a,t){return r.a.createElement("tr",{key:a},["time","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(function(n){if("time"===n)return r.a.createElement("th",null,r.a.createElement("h3",{className:"time"},a));for(var l=0;l<e.state.schedule[n].length;l++){if(e.state.schedule[n][l].StartTime===e.state.timeList[t]){var s=e.state.schedule[n][l],c="",m="";return(m=(m=new Date(s.EndDateTime)).getHours()+"."+m.getMinutes()).length<=4&&(m+="0"),c=s.Coaches?s.Coaches.APICoach.Name:"","CrossFit"==s.ProgramName?r.a.createElement("td",null,r.a.createElement("h3",{className:"crossfit"},"CrossFit"),r.a.createElement("h4",{className:"time"},a," - ",m," "),r.a.createElement("h4",{className:"coach"},c)):"OUTLAST"==s.ProgramName?r.a.createElement("td",null,r.a.createElement("h3",{className:"outlast"},"OUTLAST"),r.a.createElement("h4",{className:"time"},a," - ",m," "),r.a.createElement("h4",{className:"coach"},c)):"Open Gym"==s.ProgramName?r.a.createElement("td",null,r.a.createElement("h3",{className:"opengym"},"OPEN GYM"),r.a.createElement("h4",{className:"time"},a," - ",m," "),r.a.createElement("h4",{className:"coach"},c)):"Croga | CrossFit Yoga"==s.ProgramName?r.a.createElement("td",null,r.a.createElement("h3",{className:"yoga"},"CrossFit Yoga"),r.a.createElement("h4",{className:"time"},a," - ",m," "),r.a.createElement("h4",{className:"coach"},c)):r.a.createElement("td",null,r.a.createElement("h3",{className:"comp"},"COMPETITIVE"),r.a.createElement("h4",{className:"time"},a," - ",m," "),r.a.createElement("h4",{className:"coach"},c))}if(l===e.state.schedule[n].length-1)return r.a.createElement("td",null)}}))})))),r.a.createElement("section",{id:"mobileSchedule",className:"py-5 my-3"},r.a.createElement("h3",{className:"my-2 teko mx-5"},"CLASS ",r.a.createElement("br",null),"SCHEDULE"),r.a.createElement("div",{className:"decorative-line mx-5"}),r.a.createElement("div",{className:"listBox container py-3"},r.a.createElement("ul",{id:"mainList"},["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(function(a){return r.a.createElement("ul",null,r.a.createElement("li",{className:"teko day"},a),e.state.times.map(function(t,n){for(var l=0;l<e.state.schedule[a].length-1;l++)if(e.state.schedule[a][l].StartTime==e.state.timeList[n]){var s=e.state.schedule[a][l],c="";return(c=(c=new Date(s.EndDateTime)).getHours()+"."+c.getMinutes()).length<=4&&(c+="0"),"CrossFit"==s.ProgramName?r.a.createElement("li",null,r.a.createElement("h3",{className:"crossfit"},"CrossFit"),r.a.createElement("h4",{className:"time"},t," - ",c," ")):"OUTLAST"==s.ProgramName?r.a.createElement("li",null,r.a.createElement("h3",{className:"outlast"},"OUTLAST"),r.a.createElement("h4",{className:"time"},t," - ",c," ")):"Croga | CrossFit Yoga"==s.ProgramName?r.a.createElement("li",null,r.a.createElement("h3",{className:"yoga"},"CrossFit Yoga"),r.a.createElement("h4",{className:"time"},t," - ",c," ")):r.a.createElement("li",null,r.a.createElement("h3",{className:"comp"},"COMPETITIVE"),r.a.createElement("h4",{className:"time"},t," - ",c," "))}}))}))))):r.a.createElement("h1",null,"Loading")},a}(s.Component))},197:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-schedule-js-b9f827504424576e335d.js.map