(this["webpackJsonpxavierperez21.github.io"]=this["webpackJsonpxavierperez21.github.io"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(2),n=i.n(s),a=i(10),r=i.n(a),o=(i(17),i(3)),l=i(4),j=i(6),d=i(5),b=(i(18),function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=document.querySelector(".App"),t=document.querySelector(".hamburger"),i=document.querySelector(".navbar__items"),c=document.querySelectorAll(".navbar__items li"),s=document.querySelectorAll(".hamburger div"),n=document.getElementById("nav"),a=!0;t.addEventListener("click",(function(){if(s.forEach((function(e){e.classList.toggle("active")})),i.classList.toggle("open"),c.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navItemFade 0.5s ease forwards ".concat(t/c.length+.4,"s")})),a)console.log(window.scrollY),e.style.top="-".concat(window.scrollY,"px"),e.style.position="fixed",a=!1,console.log(window.scrollY);else{var t=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),console.log(window.scrollY),e.style.paddingRight="0",a=!0}})),c.forEach((function(t){t.addEventListener("click",(function(){if(window.innerWidth<=768){var t=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),e.style.paddingRight="0",a=!0,i.classList.remove("open"),c.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navItemFade 0.5s ease forwards ".concat(t/c.length+.4,"s")})),s.forEach((function(e){e.classList.toggle("active")}))}}))}));var r=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;r>=e?0===window.pageYOffset?(n.style.height="100px",n.style.background="",n.style.boxShadow=""):(n.style.height="80px",n.style.top="0",n.style.background="#030335",n.style.boxShadow="0px 5px 10px 0px rgba(0,0,0,0.94)"):n.style.top="-100px",r=e}}},{key:"render",value:function(){return Object(c.jsxs)("nav",{id:"nav",children:[Object(c.jsxs)("div",{className:"hamburger",children:[Object(c.jsx)("div",{className:"line1"}),Object(c.jsx)("div",{className:"line2"}),Object(c.jsx)("div",{className:"line3"})]}),Object(c.jsxs)("ul",{className:"navbar__items",children:[Object(c.jsx)("li",{className:"navbar__items-item",children:Object(c.jsx)("a",{href:"/",children:"Home"})}),Object(c.jsx)("li",{className:"navbar__items-item",children:Object(c.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(c.jsx)("li",{className:"navbar__items-item",children:Object(c.jsx)("a",{href:"#education",children:"Education"})}),Object(c.jsx)("li",{className:"navbar__items-item",children:Object(c.jsx)("a",{href:"#about",children:"About"})}),Object(c.jsx)("li",{className:"navbar__items-item",children:Object(c.jsx)("a",{href:"#contact",children:"Contact"})}),Object(c.jsx)("li",{className:"navbar__items-item resume",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("span",{className:"resume-text",children:"Resume"})})})]})]})}}]),i}(n.a.Component)),u=(i(19),function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("p",{className:"footer__author",children:"Designed and built by Luis Xavier P\xe9rez"}),Object(c.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 All rights reserved"})]})}}]),i}(n.a.Component)),h=(i(20),function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})}}]),i}(n.a.Component)),m=(i(21),i.p+"static/media/github_icon.b26201c0.svg");var p=function(e){var t=e.background_image,i=e.orientation,n=e.technologies,a=e.object_position,r=e.github_link,o=e.project_link,l=Object(s.useRef)(null),j=Object(s.useRef)(null),d=Object(s.useRef)(null),b=Object(s.useRef)(null),u=Object(s.useRef)(null),h=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.style.background=t,j.style.objectPosition=a,"left"===i&&(l.className+=" project-image__left",d.className+=" project-title__left",b.className+=" project-description__left",u.className+=" project-technologies__list-left",h.className+=" project-icons__left")}),[t,i,a]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"project-image",ref:function(e){l=e},children:[Object(c.jsx)("a",{href:o,target:"_blank",rel:"noreferrer"}),Object(c.jsx)("img",{ref:function(e){j=e},src:e.image,alt:"project_image"})]}),Object(c.jsx)("h2",{className:"project-title",ref:function(e){d=e},children:e.title}),Object(c.jsx)("div",{className:"project-description",ref:function(e){b=e},children:e.description}),Object(c.jsx)("ul",{className:"project-technologies__list",ref:function(e){u=e},children:n.map((function(e){return Object(c.jsx)("li",{className:"technologies__list-item",children:e.name},e.id)}))}),Object(c.jsxs)("div",{className:"project-icons",ref:function(e){h=e},children:[Object(c.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"github-icon",src:m,alt:"github-icon"})}),Object(c.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"link-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACNUlEQVR4nO2aO24UQRRFz0N8vAMkiw3wi5yY2JEFIkEjImAbLIDECXuwbCe2sJAFGQsgQSKBDSAZ7wB7Al+CGYuR6J6qGdfn9ahOOFP1+t1bVV2fLmg0Go1Go9EIIOmRpANJZ0pIz7MOc8af5Wak+JfALnBnMdv8cyNUQNJjVlQ8RBgAvGVFxUOcAVvZs6iIhQpIuuwo9x74miQBs6OOZz4B7gWqPgXeRMQPapxLz8t1dK2g10TStqQ/KWaBmCHgCknbwDGwliLeoAxILR4GZICkZ8BHusWPmUzVCzMIA6YtfwTc7vh7DIyAz8vEdm9AoNuPgZGZnSwb37UBucWDYwNKiAenBpQSDw4NKCkenBlQWjw4MqCGeIg8EMnNdJHzgf55/oWZfQqE+cVkrZCW3JuhwMbmQtLzVM9aNsFsBrgXP00yiwGDEA95DBiMeEhvwKDEQ1oDcoqXNOoKGqpXbB2gSvN8iCIGeBUPBQzwLB4yG+BdPGQ0YAjiIe9eYIN+8TFr+yJk6wFm9o7Jd8VZrlrehXjI/A4wsx3+meCm28+SfTtsZjuSbgHfPbX8FUXOA6bDwSVuToRq0QyonUBtmgG1E6hNM6B2ArWJWQeI/y9JbUYctpRms+O3y1ClmFtiZ8DdZTJywG8zW59XIGYIfEmUTA2Cucf0gIfAN4Z3W/Qc2DCzn/MKBXuAmf0AXgMXiRIrwTnwKiR+ISQ9kLQv6bTnWNsDp5L2JN1PJrzRaDQajcbK8hclzpxJucX27gAAAABJRU5ErkJggg==",alt:"link-icon"})})]})]})},g=i(9),O=i.n(g),x=i(11),f=(i(23),function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"lds-grid",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}}]),i}(s.Component));i(24);var v=function(){return Object(c.jsx)("div",{className:"PageLoading",children:Object(c.jsx)(f,{})})},_=(i(25),i.p+"static/media/internal_error.563fe8e6.svg");var y=function(e){return Object(c.jsx)("div",{className:"PageError",children:Object(c.jsx)("img",{className:"PageError__img",src:_,alt:"Internal Error"})})},N=(i(26),function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(o.a)(this,i);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,data:void 0},e.fetchData=Object(x.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),"https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@xavier_perez21",t.next=4,fetch("https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@xavier_perez21").then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,data:t.userData.courses})}),(function(t){e.setState({loading:!0,error:t})}));case 4:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){if(!0===this.state.loading&&!this.state.data)return Object(c.jsx)(v,{});if(this.state.error)return Object(c.jsx)(y,{error:this.state.error});var e=this.state.data;return Object(c.jsxs)("div",{className:"education__container",children:[Object(c.jsx)("div",{className:"courses__title",children:Object(c.jsx)("h2",{children:"JavaScript, Frontend and Backend"})}),Object(c.jsx)("div",{className:"education__courses javascript-courses",children:e.map((function(e){return"Arquitectura Frontend"===e.career||"JavaScript"===e.career||"Backend con JavaScript"===e.career?e.title.includes("Prework")?null:Object(c.jsx)("a",{className:"courses-item__link",href:"https://platzi.com".concat(e.diploma_link),target:"_blank",rel:"noreferrer",children:Object(c.jsxs)("div",{className:"courses-item",children:[Object(c.jsx)("img",{src:e.badge,alt:"course"}),Object(c.jsx)("p",{children:e.title})]})},e.id):null}))}),Object(c.jsx)("div",{className:"courses__title",children:Object(c.jsx)("h2",{children:"Python"})}),Object(c.jsx)("div",{className:"education__courses python-courses",children:e.map((function(e){return"Big Data y Data Science"===e.career||"Desarrollo Backend con Python y Django"===e.career?e.title.includes("Prework")?null:Object(c.jsx)("a",{className:"courses-item__link",href:"https://platzi.com".concat(e.diploma_link),target:"_blank",rel:"noreferrer",children:Object(c.jsxs)("div",{className:"courses-item",children:[Object(c.jsx)("img",{src:e.badge,alt:"course"}),Object(c.jsx)("p",{children:e.title})]})},e.id):null}))}),Object(c.jsx)("div",{className:"courses__title",children:Object(c.jsx)("h2",{children:"PHP"})}),Object(c.jsx)("div",{className:"education__courses php-courses",children:e.map((function(e){return e.title.includes("PHP")?e.title.includes("Prework")?null:Object(c.jsx)("a",{className:"courses-item__link",href:"https://platzi.com".concat(e.diploma_link),target:"_blank",rel:"noreferrer",children:Object(c.jsxs)("div",{className:"courses-item",children:[Object(c.jsx)("img",{src:e.badge,alt:"course"}),Object(c.jsx)("p",{children:e.title})]})},e.id):null}))}),Object(c.jsx)("div",{className:"courses__title",children:Object(c.jsx)("h2",{children:"Basics, tools and more"})}),Object(c.jsx)("div",{className:"education__courses tools_and_more-courses",children:e.map((function(e){return"Desarrollo Backend con Ruby"===e.career?e.title.includes("Prework")?null:Object(c.jsx)("a",{className:"courses-item__link",href:"https://platzi.com".concat(e.diploma_link),target:"_blank",rel:"noreferrer",children:Object(c.jsxs)("div",{className:"courses-item",children:[Object(c.jsx)("img",{src:e.badge,alt:"course"}),Object(c.jsx)("p",{children:e.title})]})},e.id):null}))})]})}}]),i}(n.a.Component)),k=i.p+"static/media/linkedin_icon.7364c1a7.svg",w=i.p+"static/media/instagram_icon.8c714732.svg",A=i.p+"static/media/twitter_icon.810277de.svg",S=i(7),I=i(1);i(27);var z=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),i=Object(s.useRef)(null);return Object(s.useEffect)((function(){S.a.fromTo(e,1,{opacity:0,y:40},{opacity:1,y:0,ease:I.b.easeInOut}),S.a.fromTo(t,1.4,{opacity:0,y:20},{opacity:1,y:0,ease:I.b.easeInOut}),S.a.fromTo(i,1.8,{opacity:0,y:20},{opacity:1,y:0,ease:I.b.easeInOut})}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(b,{}),Object(c.jsxs)("section",{className:"hero",children:[Object(c.jsxs)("div",{className:"hero-headline",children:[Object(c.jsx)("p",{className:"headline__greeting",ref:function(t){e=t},children:"Hello!, my name is"}),Object(c.jsx)("h1",{className:"headline__name",ref:function(e){t=e},children:"Luis Xavier P\xe9rez"}),Object(c.jsx)("h2",{className:"headline__career",ref:function(e){i=e},children:" Software Developer and Mechatronics Engineer"})]}),Object(c.jsx)(h,{})]})]}),Object(c.jsxs)("section",{id:"portfolio",className:"portfolio",children:[Object(c.jsx)("h1",{className:"section-title",children:"Projects"}),Object(c.jsx)(p,{title:"Sorting Visualizer",description:Object(c.jsxs)("div",{children:["A visual project to see graphically the 4 main sorting algorithms: ",Object(c.jsx)("strong",{children:" merge-sort"}),", ",Object(c.jsx)("strong",{children:" heap-sort"}),", ",Object(c.jsx)("strong",{children:" quick-sort"}),", and ",Object(c.jsx)("strong",{children:" bubble-sort."})]}),image:"https://i.imgur.com/F3VthR8.png",technologies:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"JavaScript"},{id:4,name:"React.js"},{id:5,name:"Algorithms"}],background_image:"#15036d",orientation:"right",github_link:"https://github.com/xavierperez21/Sorting_visualizer",project_link:"https://sorting-visualizer-lxpm.web.app/"}),Object(c.jsx)(p,{title:"Todo List",description:"You can Create, Read, Update, and Delete tasks (CRUD) using Python, Flask, and Firestore as Database. Authentication system: Log In, Log Out and register of users.",image:"https://i.imgur.com/aoHoQFR.png",technologies:[{id:6,name:"HTML5"},{id:7,name:"CSS3"},{id:8,name:"Python"},{id:9,name:"Flask"},{id:10,name:"Firebase"}],background_image:"#099CA9",orientation:"left",object_position:"left",github_link:"https://github.com/xavierperez21/Flask_webapp_ToDolis",project_link:"https://platzi-flask-task-list.ue.r.appspot.com/"}),Object(c.jsx)(p,{title:"Personal Portfolio",description:"Design, build and development of my personal website using React.js",image:"https://i.imgur.com/x5gUvXs.png",technologies:[{id:11,name:"HTML5"},{id:12,name:"CSS3"},{id:13,name:"JavaScript"},{id:14,name:"React.js"}],background_image:"#004346",orientation:"right",object_position:"left",github_link:"https://github.com/xavierperez21/xavierperez21.github.io",project_link:"https://xavierperez21.github.io/"}),Object(c.jsx)(p,{title:"Simon Says Game",description:"Development of a Simon Says game using HTML, CSS3, and JavaScript.",image:"https://i.imgur.com/xl0smYx.png",technologies:[{id:15,name:"HTML5"},{id:16,name:"CSS3"},{id:17,name:"JavaScript"}],background_image:"#3C1642",orientation:"left",github_link:"https://github.com/xavierperez21/simon_says",project_link:"https://xavierperez21.github.io/simon_says/"})]}),Object(c.jsxs)("section",{id:"education",className:"education",children:[Object(c.jsx)("h1",{className:"section-title",children:"Education"}),Object(c.jsx)("div",{className:"education__description",children:"Some courses I've acomplished during my professional career:"}),Object(c.jsx)(N,{})]}),Object(c.jsxs)("section",{id:"about",className:"about",children:[Object(c.jsx)("h1",{className:"section-title",children:"About me"}),Object(c.jsxs)("div",{className:"about__container",children:[Object(c.jsxs)("div",{className:"about__description",children:[Object(c.jsxs)("p",{children:["Hello! I'm Luis Xavier, a ",Object(c.jsx)("strong",{children:"Software Developer"})," and ",Object(c.jsx)("strong",{children:"Mechatronics Engineer "}),"based in Guadalajara, Jalisco, M\xe9xico. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," I love to build things for the web and solve problems through programming. In my free time I study more about Artificial Intelligence and Web technologies. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," Here are a few technologies I've been working with recently: ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}),Object(c.jsxs)("ul",{className:"description__list",children:[Object(c.jsx)("li",{children:"HTML5 & CSS3"}),Object(c.jsx)("li",{children:"JavaScript"}),Object(c.jsx)("li",{children:"React.js"}),Object(c.jsx)("li",{children:"Vue.js"}),Object(c.jsx)("li",{children:"Python, Django"}),Object(c.jsx)("li",{children:"PHP, Laravel"})]}),Object(c.jsx)("p",{children:"Take a look at my portfolio work and let's see if we can work together on your next project!"}),Object(c.jsx)("div",{className:"description__buttons"})]}),Object(c.jsx)("div",{className:"about__image",children:Object(c.jsx)("img",{src:"https://i.imgur.com/zhhuLwo.jpg",alt:"my_image"})})]})]}),Object(c.jsxs)("section",{id:"contact",className:"contact",children:[Object(c.jsx)("div",{className:"contact__title",children:Object(c.jsx)("h1",{children:"Let's work together!"})}),Object(c.jsxs)("div",{className:"contact__links",children:[Object(c.jsx)("p",{children:"If you want to build amazing things, contact me in the following links."}),Object(c.jsxs)("ul",{className:"contact__links-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/luisxavierpm/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"linkedin_icon",src:k,alt:"github-icon"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/xavierperez21",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"github-icon",src:m,alt:"github-icon"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.instagram.com/luisxavperez/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"instagram_icon",src:w,alt:"github-icon"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://twitter.com/luisxavperez",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"twitter_icon",src:A,alt:"github-icon"})})})]})]}),Object(c.jsxs)("div",{className:"contact__say_hi",children:[Object(c.jsx)("p",{children:"Or just say hi! to:"}),Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("p",{className:"contact__mail",children:"hello@xavierpm.com"})})]})]}),Object(c.jsx)(u,{})]})},P=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,29)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),c(e),s(e),n(e),a(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),P()}],[[28,1,2]]]);
//# sourceMappingURL=main.ff2fcc4c.chunk.js.map