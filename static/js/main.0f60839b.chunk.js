(this["webpackJsonpthe-weather"]=this["webpackJsonpthe-weather"]||[]).push([[0],[,,,function(e,t,n){e.exports={wrapper:"Loader_wrapper__17SLr",inner:"Loader_inner__14k4Y",rotation:"Loader_rotation__2LbWg",icon:"Loader_icon__359Vs",front:"Loader_front__2Z-fq",back:"Loader_back__1kZ5N",first:"Loader_first__26bn3","first-image":"Loader_first-image__3oKj-",second:"Loader_second__2ANI5","second-image":"Loader_second-image__3EeM2"}},function(e){e.exports=JSON.parse('{"db_version":1,"api_key":"ac833396f31ab96aa2f77a6edb2a49aa","default_coords":{"lat":55.751244,"lon":37.618423},"refresh_rate":600000}')},,,,,,,,function(e,t,n){e.exports={app:"App_app__2vcKC"}},function(e,t,n){e.exports={wrapper:"Tab_wrapper__3_Myh"}},,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),o=n(5),s=n(1),i=n.n(s),u=n(2),m=n(9),f=n(12),d=n.n(f),h=n(7),p=n(8),v=n(14),w=function(e){return e-273.15},E=function(e){var t,n,a=e.clouds,r=e.main,c=r.temp,l=r.feels_like,o=r.pressure,s=r.humidity,i=e.rain,u=e.weather,m=e.wind,f=e.name;return{measures:{temp:w(c).toFixed(0),feels_like:w(l).toFixed(0),pressure:(n=o,100*n/133.3223684).toFixed(0),humidity:s},rain:i,clouds:a,weather_description:(t=u,t.map((function(e){var t,n=e.main;return{Clear:"\u042f\u0441\u043d\u043e",Clouds:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e",Thunderstorm:"\u0413\u0440\u043e\u0437\u0430",Rain:"\u0414\u043e\u0436\u0434\u044c"}[t=n]||t})).join(", ")),name:f,wind:m}},b=n(4),g=b.db_version,_=b.refresh_rate,x=new(function(){function e(){var t=this;Object(h.a)(this,e),this.openConnection=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(v.a)("the-weather-db",g,{upgrade:function(e){0!==e.version&&e.objectStoreNames.contains("store")?g!==e.version&&(e.close(),document.location.reload()):e.createObjectStore("store",{keyPath:"timestamp"})}}));case 1:case"end":return e.stop()}}),e)}))),this.readFromDb=function(){var e=Object(u.a)(i.a.mark((function e(n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.openConnection();case 3:return a=e.sent,r=a.transaction("store").objectStore("store"),e.abrupt("return",r.get(n));case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject());case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),this.writeToDb=Object(u.a)(i.a.mark((function e(){var n,a,r,c,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,e.next=4,t.openConnection();case 4:return a=e.sent,r=a.transaction("store","readwrite").objectStore("store"),c=Object(o.a)({},n,{timestamp:Date.now()}),e.next=9,r.add(c);case 9:return t.state=Object(o.a)({},t.state,{lastUpdate:c}),a.close(),e.abrupt("return",Promise.resolve());case 14:return e.prev=14,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",Promise.reject());case 18:case"end":return e.stop()}}),e,null,[[1,14]])}))),this.state={lastUpdate:null}}return Object(p.a)(e,[{key:"getLastUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,c,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.length>0&&void 0!==l[0]?l[0]:Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),n=this.state.lastUpdate,a=Date.now(),r=null,!n){e.next=8;break}r=n,e.next=11;break;case 8:return e.next=10,this.readFromDb(IDBKeyRange.bound(a-_,a,!0,!0));case 10:r=e.sent;case 11:if(r&&!(r&&a-r.timestamp>=_)){e.next=18;break}return e.next=14,t();case 14:return c=e.sent,e.next=17,this.writeToDb(E(c));case 17:return e.abrupt("return",this.state.lastUpdate);case 18:return e.abrupt("return",r);case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),j=b.api_key,k=b.default_coords,y=new(function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,[{key:"weather",get:function(){return{load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=e.lat,n=e.lon;return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(n,"&appid=").concat(j)).then((function(e){try{return Promise.resolve(e.json())}catch(t){return Promise.reject()}})).then((function(e){return e}))}}}},{key:"geolocation",get:function(){return{getPosition:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=2;break}return e.abrupt("return",new Promise((function(e,t){return navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,a=n.longitude,r=n.latitude;return e({lon:a,lat:r})}),(function(){return t()}),{timeout:6e4})})));case 2:return e.abrupt("return",Promise.reject());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}}]),e}()),O=n(13),z=n.n(O),N=function(e){var t=e.children;return r.a.createElement("div",{className:z.a.wrapper},t)},L=n(6),S={WIND:"wind",SUN:"sun",RAINDROP:"raindrop"},P=function(e){return r.a.createElement("svg",Object.assign({id:"Layer_1",enableBackground:"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},e),r.a.createElement("path",{d:"m227.286 50.489c-22.126 7.231-41.936 19.644-57.977 35.82h-146.809c-8.284 0-15 6.716-15 15s6.716 15 15 15h80c8.284 0 15 6.716 15 15s-6.716 15-15 15h-50c-8.284 0-15 6.716-15 15s6.716 15 15 15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15h-40c-8.284 0-15 6.716-15 15s6.716 15 15 15h26.315c-2.783 7.689-4.315 15.995-4.315 24.692 0 40.073 32.485 72.558 72.557 72.558h173.531z",fill:"#d4d4d5"}),r.a.createElement("path",{d:"m504.5 236.816c0-53.64-43.366-96.059-95.292-96.747v-.007c-19.926-56.354-73.663-96.732-136.841-96.732-15.724 0-30.877 2.517-45.082 7.159-22.513 31.241-35.784 69.586-35.784 111.035 0 76.018 44.616 141.606 109.086 172.035h107.169c53.431 0 96.744-43.313 96.744-96.743z",fill:"#efedee"}),r.a.createElement("g",{fill:"#b9f0ff"},r.a.createElement("path",{d:"m254.43 304.06c-5.327-6.557-13.904-11.036-21.362-10.498-16.272.994-19.731 9.949-25.618 22.16-6.597 13.058-18.053 23.714-32.133 28.903-9.154 3.425-19.219 4.369-28.643 2.697-13.216-2.271-24.739-8.996-34.76-21.815-6.526-9.133-17.752-11.569-16.752-11.255-4.431-1.392-6.895-6.112-5.503-10.543.952-3.032 3.475-5.144 6.385-5.729 11.247-2.234 23.848.129 34.975 8.281 6.388 4.784 13.411 6.499 19.164 5.97 17.296-1.691 19.291-18.346 21.902-23.869 4.015-9.625 10.232-16.976 16.979-23.214 19.258-16.652 42.683-18.074 54.519-15.499 30.489 5.281 52.056 31.459 54.506 58.326 1.767 33.423-18.694 55.379-40.642 61.946-7.987 2.428-16.373 2.886-24.063 1.292-4.562-.946-7.493-5.41-6.547-9.972.653-3.15 2.984-5.522 5.866-6.378 27.648-8.205 34.444-35.256 21.727-50.803z"}),r.a.createElement("path",{d:"m56.493 415.32c45.363-3.145 60.748-18.096 83.646-17.342 28.203 1.169 41.33 19.313 45.627 23.999 27.347 29.747 70.193 36.444 104.46 19.314 17.756-8.878 23.068-17.616 29.472-21.889 14.267-9.983 39.497-.313 43.442 24.147.599 5.607.017 9.662-.587 12.836-.828 4.358-.328 9.193 3.668 11.387 4.068 2.234 8.319.143 12.013-4.596 2.078-2.666 3.963-5.816 5.548-8.746 18.94-39.519-16.675-80.491-56.186-80.943-26.359-.302-40.342 16.265-47.895 22.706-17.898 15.302-48.442 18.586-71.105 1.586-7.975-5.623-31.6-27.655-73.014-22.25-26.035 4.002-39.415 17.574-70.433 23.066-3.306.585-6.632 1.03-9.971 1.351-3.956.38-6.975 3.701-6.975 7.675-.001 4.487 3.813 8.009 8.29 7.699z"}),r.a.createElement("path",{d:"m330.197 329.583c11.585-17.465 34.903-22.155 56.625-6.703 10.459 7.37 27.081 11.78 38.893 6.53 13.444-6.562 14.126-17.088 8.425-23.016-8.148-8.471-21.025-2.082-20.023-2.451-4.621 1.703-9.748-.663-11.451-5.285-4.771-12.95 26.438-34.986 53.516-16.898 30.456 19.813 24.844 68.247-15.389 84.477-31.697 12.399-63.283-4.979-74.803-18.54-3.738-4.536-8.743-8.548-14.563-8.307-4.704.115-10.856 3.591-9.856 3.096-8.137 4.031-16.363-5.341-11.374-12.903z"})),r.a.createElement("ellipse",{cx:"237.331",cy:"207.322",fill:"#ff8e9e",rx:"29.212",ry:"23.263",transform:"matrix(1 .003 -.003 1 .651 -.743)"}),r.a.createElement("ellipse",{cx:"395.669",cy:"207.818",fill:"#ff8e9e",rx:"29.212",ry:"23.263",transform:"matrix(-1 -.003 .003 -1 790.686 416.875)"}),r.a.createElement("path",{d:"m512 236.816c0-27.763-10.782-53.874-30.36-73.524-18.146-18.212-41.824-28.937-67.147-30.525-22.799-58.194-79.273-96.937-142.126-96.937-39.936 0-77.502 15.239-106.138 42.979h-143.729c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5h80c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-50c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5h20c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-40c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5h16.351c-4.149 18.852-1.369 38.689 8.046 55.772 2 3.627 6.562 4.948 10.188 2.948 3.628-1.999 4.948-6.562 2.948-10.188-8.187-14.854-10.173-32.272-5.713-48.532h3.33c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-8.836-26.314c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5h40c12.407 0 22.5-10.094 22.5-22.5s-10.093-22.5-22.5-22.5h-20c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5h50c12.407 0 22.5-10.094 22.5-22.5s-10.093-22.5-22.5-22.5h-80c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5h146.81c2 0 3.917-.799 5.326-2.219 26.064-26.285 60.773-40.76 97.731-40.76 58.141 0 110.228 36.763 129.69 91.509.951 3 3.738 5.186 7.051 5.229 48.464.642 87.892 40.68 87.892 89.248 0 20.916-7.071 40.588-20.111 56.461-3.874-7.052-9.478-13.15-16.581-17.779-19.733-13.157-41.738-8.666-54.797 1.627-8.974 7.072-12.76 16.316-9.883 24.125 3.356 9.112 13.498 12.764 21.081 9.73h.001c.333-.123.653-.267.958-.43 10.863-4.272 18.824 5.171 4.882 12.058-9.272 4.037-23.084.008-31.381-5.839-26.657-18.964-55.513-10.824-67.598 9.29h-19.175c1.099-5.9 1.521-12.08 1.183-18.479-.005-.096-.012-.19-.021-.285-2.922-32.048-28.372-59.362-60.542-65.008-29.73-6.331-66.371 11.081-79.793 43.043-3.043 6.61-3.918 18.279-15.73 19.433-4.512.419-9.604-1.227-14.043-4.551-12.258-8.981-26.771-12.39-40.885-9.583-5.702 1.146-10.324 5.297-12.062 10.833-2.963 9.431 3.56 18.663 11.192 20.137 4.721 1.366 8.849 4.101 12.31 8.528 10.826 13.849 23.713 21.892 39.358 24.58 10.676 1.895 22.249.81 32.547-3.044 6.678-2.461 12.935-6.081 18.501-10.604h46.941c-3.503 2.876-7.821 5.143-12.783 6.615-10.28 3.05-14.631 15.134-8.793 24.025 4.451 6.779 11.983 7.963 20.975 7.963 14.042 0 28.321-5.339 39.761-15.164 7.586-6.515 13.392-14.467 17.308-23.439h22.782c4.163 9.365 15.386 12.293 22.792 7.865 1.078-.571 4.207-1.941 6.342-2.041 3.255-.108 6.7 3.441 8.467 5.584.023.028.047.057.071.085 14.1 16.6 49.248 33.972 83.323 20.641 27.581-11.126 42.954-37.594 38.827-63.648 19.102-19.562 29.576-45.222 29.576-72.729zm-418.061 84.825c1.036.164 2.072.105 3.049-.15-1.03.273-2.083.321-3.049.15zm116.122 4.418c1.492-2.233 2.867-4.548 4.083-6.955.021-.041.042-.083.062-.125l.872-1.817c5.226-10.919 7.388-15.438 18.529-16.119 4.757-.356 11.077 2.915 15.018 7.767 3.827 4.678 5.261 10.984 4.023 17.25h-42.587zm62.679 27.061c-10.922 9.378-25.064 13.397-37.833 10.75-.251-.053-.45-.188-.591-.402s-.186-.451-.134-.703c.106-.51.529-.673.656-.71 15.786-4.686 27.289-15.339 31.56-29.229 3.636-11.823 1.332-24.352-6.147-33.493-6.684-8.229-16.703-13.317-25.9-13.317-.583 0-1.165.021-1.74.062-19.866 1.214-25.558 13.108-31.063 24.61l-.825 1.72c-5.89 11.617-16.092 20.794-28.033 25.195-7.858 2.938-16.631 3.768-24.745 2.329-11.802-2.028-21.626-8.22-30.032-18.928-3.239-4.479-7.824-8.31-13.271-11.088-3.262-1.663-5.638-2.488-7.358-2.87-.397-.193-.605-.655-.469-1.088.153-.488.616-.604.69-.619 9.925-1.971 20.253.505 29.018 6.927 7.313 5.477 16.186 8.184 24.39 7.432 19.09-1.866 24.349-17.588 26.876-25.144.397-1.188.808-2.415 1.077-2.983.05-.105.097-.212.142-.319 3.04-7.287 7.825-13.806 15.056-20.508 17.736-15.271 39.098-15.682 47.926-13.764.104.023.209.044.314.062 25.213 4.367 45.955 26.483 48.304 51.476.917 18.079-5.425 33.916-17.868 44.602zm165.32 6.133c-29.4 11.5-57.821-6.406-66.321-16.375-7.785-9.419-15.476-11.173-20.561-10.984-5.097.145-11.258 2.823-13.203 3.985-.987.354-2.32-.949-1.528-2.15 4.321-6.514 10.769-10.856 18.155-12.226 8.873-1.651 18.771 1.015 27.899 7.508 11.659 8.216 31.106 13.989 46.261 7.252.081-.036.162-.074.242-.113 18.251-8.908 19.645-25.489 10.541-34.955-9.424-9.799-23.021-6.723-28.298-4.217-.612.1-1.293-.235-1.544-.913-.198-.538.537-3.569 5.093-7.159 6.574-5.18 21.811-11.201 37.22-.909.025.018.051.034.076.051 25.152 16.361 20.761 57.168-14.032 71.205z"}),r.a.createElement("path",{d:"m370.153 390.439c-3.141 2.701-3.497 7.437-.796 10.577 23.322 27.119 6.858 56.129.477 59.971-.228-.922-.092-2.259.087-3.199 5.707-29.989-16.28-49.772-37.305-49.772-20.717 0-21.336 14.361-45.744 26.567-33.637 16.816-73.714 7.617-96.748-19.007-5.652-6.533-20.666-23.888-49.738-25.094-25.055-.827-39.639 14.254-84.442 17.357-.308 0-.316-.401-.049-.427 44.108-4.244 57.635-25.23 92.458-25.23 30.705 0 48.658 16.576 55.829 21.662 25.006 18.692 59.403 15.996 80.385-1.944 8.013-6.829 19.67-21.058 42.943-20.912 6.959.079 13.883 1.577 20.581 4.451 3.81 1.636 8.218-.128 9.85-3.934 1.634-3.807-.127-8.217-3.934-9.85-9.104-3.908-17.961-5.616-27.121-5.672-29.014 0-44.859 18.375-52.059 24.509-15.56 13.304-42.21 15.932-61.731 1.287-18.132-13.486-35.857-24.598-64.743-24.598-39.064 0-52.65 21.328-93.891 25.299-7.844.751-13.76 7.261-13.76 15.141 0 8.881 7.608 15.818 16.309 15.181 25.607-1.775 42.055-7.189 55.271-11.54 13.419-4.418 40.757-15.625 66.498 14.127 27.258 31.525 74.704 42.658 114.8 22.609 26.464-13.232 26.134-24.983 39.036-24.983 9.703 0 20.717 7.395 23.087 21.532.777 7.661-.988 10.004-.988 15.246 0 10.501 7.44 16.377 14.859 16.377 19.131 0 43.372-47.472 11.156-84.936-2.701-3.14-7.436-3.495-10.577-.795z"}),r.a.createElement("path",{d:"m252 190.059c4.142 0 7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5z"}),r.a.createElement("path",{d:"m387.5 182.559v-10c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5z"}),r.a.createElement("path",{d:"m316.5 203.059c9.687 0 18.623-5.599 22.766-14.265 1.787-3.737.206-8.215-3.531-10.001-3.737-1.789-8.215-.206-10.001 3.531-1.666 3.484-5.291 5.735-9.234 5.735s-7.568-2.251-9.234-5.735c-1.787-3.737-6.266-5.317-10.001-3.531-3.737 1.787-5.318 6.265-3.531 10.001 4.143 8.666 13.079 14.265 22.766 14.265z"}))},D=function(e){return r.a.createElement("svg",Object.assign({enableBackground:"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},e),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"m503.494 258.27-53.529 47.996c-.9.807-1.238 2.07-.862 3.219l22.388 68.327c.566 1.727-.495 3.562-2.273 3.934l-70.394 14.718c-1.186.248-2.112 1.174-2.36 2.36l-14.718 70.394c-.372 1.779-2.207 2.839-3.934 2.273l-68.326-22.389c-1.149-.377-2.412-.038-3.219.862l-47.996 53.529c-1.212 1.351-3.328 1.351-4.54 0l-47.996-53.529c-.807-.9-2.07-1.238-3.219-.862l-68.327 22.388c-1.727.566-3.562-.495-3.934-2.273l-14.718-70.394c-.248-1.186-1.175-2.112-2.36-2.36l-70.394-14.718c-1.779-.372-2.839-2.207-2.273-3.934l22.389-68.326c.377-1.149.038-2.412-.862-3.219l-53.531-47.996c-1.351-1.212-1.351-3.328 0-4.54l53.529-47.996c.9-.807 1.238-2.07.862-3.219l-22.388-68.327c-.566-1.727.495-3.562 2.273-3.934l70.394-14.718c1.186-.248 2.112-1.175 2.36-2.36l14.718-70.394c.372-1.779 2.207-2.839 3.934-2.273l68.326 22.389c1.149.377 2.412.038 3.219-.862l47.997-53.53c1.212-1.351 3.328-1.351 4.54 0l47.996 53.529c.807.9 2.07 1.238 3.219.862l68.327-22.388c1.727-.566 3.562.495 3.934 2.273l14.718 70.394c.248 1.186 1.174 2.112 2.36 2.36l70.394 14.718c1.779.372 2.839 2.207 2.273 3.934l-22.389 68.326c-.377 1.149-.038 2.412.862 3.219l53.529 47.996c1.353 1.213 1.353 3.329.001 4.541z",fill:"#fece85"})),r.a.createElement("g",null,r.a.createElement("path",{d:"m172.683 54.272-41.049-13.457c.729-.45 1.658-.599 2.557-.31l41.049 13.447c-.759.479-1.688.599-2.557.32z",fill:"#fec165"})),r.a.createElement("g",null,r.a.createElement("path",{d:"m282.174 439.577 26.444 9.391c-.879-.04-1.748.32-2.348.999l-48.002 53.527c-1.209 1.349-3.327 1.349-4.536 0l-16.364-18.252 41.588-44.805c.81-.9 2.069-1.24 3.218-.86z",fill:"#fec165"})),r.a.createElement("g",null,r.a.createElement("path",{d:"m373.692 108.587-13.636-62.267 17.752-5.814c1.728-.559 3.566.5 3.936 2.278l14.715 70.39c.1.5.33.949.649 1.319l-21.059-3.546c-1.178-.252-2.107-1.171-2.357-2.36z",fill:"#fec165"})),r.a.createElement("g",null,r.a.createElement("path",{d:"m449.966 306.27c-.899.799-1.239 2.068-.859 3.217l22.388 68.322c.559 1.728-.5 3.566-2.278 3.936l-70.39 14.715c-1.189.25-2.118 1.179-2.368 2.368l-14.715 70.39c-.37 1.778-2.208 2.837-3.936 2.278l-21.808-7.144c.579-.43 1.009-1.059 1.169-1.828l15.654-81.279c.25-1.189 1.169-2.118 2.358-2.368l61.928-11.718c1.778-.37 2.837-2.208 2.268-3.926l-20.1-62.378c-.38-1.149-.04-2.408.859-3.217l46.034-39.371c1.349-1.209 1.349-3.327 0-4.535l-47.632-47.792c-.899-.809-1.239-2.068-.869-3.217l23.996-77.163c.11-.35.16-.699.15-1.039l27.403 5.734c1.778.37 2.837 2.208 2.278 3.936l-22.388 68.322c-.38 1.149-.04 2.418.859 3.217l53.527 48.002c1.349 1.209 1.349 3.327 0 4.535z",fill:"#fec165"})),r.a.createElement("g",null,r.a.createElement("circle",{cx:"256",cy:"256",fill:"#fdb441",r:"156.241"})),r.a.createElement("g",null,r.a.createElement("path",{d:"m412.244 256c0 86.294-69.95 156.244-156.244 156.244-17.532 0-34.386-2.887-50.12-8.222 10.17 2.088 20.699 3.177 31.488 3.177 86.294 0 156.244-69.95 156.244-156.234 0-68.761-44.416-127.143-106.124-148.032 71.199 14.565 124.756 77.562 124.756 153.067z",fill:"#fea613"})),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("circle",{cx:"173.076",cy:"274.124",fill:"#fb8801",r:"21.787"})),r.a.createElement("g",null,r.a.createElement("circle",{cx:"338.924",cy:"274.124",fill:"#fb8801",r:"21.787"}))),r.a.createElement("g",null,r.a.createElement("path",{d:"m130.751 336.278c-2.236-3.482-6.872-4.49-10.353-2.255-3.482 2.237-4.491 6.872-2.255 10.353 30.31 47.186 81.845 75.357 137.857 75.357 90.283 0 163.734-73.451 163.734-163.733s-73.451-163.733-163.734-163.733-163.733 73.45-163.733 163.733c0 19.163 3.282 37.936 9.754 55.795 1.411 3.89 5.706 5.9 9.597 4.491 3.89-1.41 5.901-5.707 4.491-9.597-5.878-16.217-8.858-33.271-8.858-50.689 0-82.02 66.728-148.748 148.748-148.748 82.021 0 148.749 66.728 148.749 148.748s-66.727 148.748-148.748 148.748c-50.887 0-97.709-25.596-125.249-68.47z"}),r.a.createElement("path",{d:"m508.496 248.151-51.369-46.059 21.485-65.57c.933-2.845.608-5.964-.89-8.556-1.498-2.593-4.039-4.432-6.97-5.045l-67.549-14.124-2.21-10.572c-.848-4.051-4.824-6.646-8.867-5.801-4.051.847-6.648 4.816-5.802 8.867l2.807 13.423c.859 4.098 4.063 7.3 8.16 8.156l65.535 13.702-20.842 63.608c-1.302 3.97-.133 8.339 2.979 11.132l49.839 44.688-49.839 44.687c-3.112 2.791-4.282 7.16-2.98 11.131l20.842 63.609-65.536 13.702c-4.1.857-7.303 4.061-8.16 8.161l-13.703 65.535-63.608-20.842c-3.971-1.302-8.343-.132-11.13 2.98l-44.688 49.84-44.687-49.839c-2.79-3.112-7.161-4.282-11.131-2.98l-63.609 20.842-13.702-65.535c-.857-4.101-4.061-7.305-8.161-8.162l-65.535-13.702 20.842-63.608c1.302-3.972.132-8.342-2.98-11.132l-49.84-44.687 49.839-44.687c3.112-2.79 4.282-7.159 2.98-11.131l-20.842-63.609 65.535-13.702c4.101-.857 7.305-4.061 8.162-8.161l13.702-65.535 63.608 20.842c3.975 1.302 8.342.132 11.132-2.98l44.687-49.84 44.688 49.841c2.791 3.112 7.162 4.282 11.13 2.978l63.61-20.842 3.789 18.134c.848 4.051 4.827 6.65 8.867 5.801 4.051-.847 6.648-4.817 5.802-8.867l-4.806-22.992c-.613-2.932-2.451-5.472-5.044-6.971-2.591-1.498-5.711-1.823-8.557-.89l-65.571 21.485-46.059-51.37c-1.997-2.227-4.858-3.504-7.849-3.504s-5.852 1.277-7.849 3.504l-46.059 51.37-65.57-21.485c-2.844-.932-5.964-.608-8.556.89-2.593 1.498-4.431 4.038-5.045 6.969l-14.123 67.549-67.55 14.123c-2.931.614-5.472 2.452-6.97 5.045-1.498 2.592-1.822 5.711-.89 8.556l21.485 65.57-51.37 46.06c-2.226 1.997-3.503 4.858-3.503 7.849s1.277 5.852 3.504 7.849l51.37 46.059-21.485 65.57c-.933 2.845-.608 5.964.89 8.556 1.498 2.593 4.038 4.431 6.97 5.045l67.549 14.123 14.123 67.55c.614 2.931 2.452 5.472 5.045 6.969 2.593 1.498 5.711 1.822 8.556.89l65.57-21.485 46.06 51.37c1.997 2.226 4.857 3.503 7.848 3.503s5.852-1.277 7.849-3.504l46.06-51.37 65.568 21.485c2.847.932 5.966.608 8.558-.89s4.431-4.039 5.043-6.969l14.125-67.549 67.55-14.124c2.931-.613 5.471-2.452 6.969-5.044 1.498-2.593 1.823-5.711.89-8.556l-21.484-65.57 51.367-46.058c2.228-1.997 3.506-4.858 3.506-7.85s-1.279-5.853-3.505-7.849z"}),r.a.createElement("path",{d:"m210.436 238.161v-18.886c0-4.138-3.355-7.492-7.492-7.492s-7.493 3.354-7.493 7.492v18.886c0 4.138 3.355 7.492 7.493 7.492s7.492-3.354 7.492-7.492z"}),r.a.createElement("path",{d:"m316.549 238.161v-18.886c0-4.138-3.354-7.492-7.493-7.492s-7.492 3.354-7.492 7.492v18.886c0 4.138 3.354 7.492 7.492 7.492s7.493-3.354 7.493-7.492z"}),r.a.createElement("path",{d:"m256 337.991c19.033 0 35.877-12.12 41.913-30.159 1.313-3.924-.804-8.17-4.728-9.483-3.92-1.313-8.17.803-9.483 4.728-3.989 11.92-15.122 19.929-27.703 19.929-12.582 0-23.715-8.01-27.702-19.931-1.313-3.924-5.559-6.041-9.483-4.729-3.924 1.313-6.041 5.558-4.729 9.483 6.037 18.041 22.881 30.162 41.915 30.162z"})))))},R=function(e){return r.a.createElement("svg",Object.assign({enableBackground:"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},e),r.a.createElement("path",{d:"m279.77 18.855c-.899-.901-1.797-1.801-2.688-2.688l-.118-.119c-11.644-11.442-30.465-11.395-42.042.119-71.625 71.233-170.854 197.071-170.854 297.624v.008h.118c0 108.353 86.324 190.701 191.81 190.701 29.498.002 57.431-6.62 82.391-18.438z",fill:"#7ce3ff"}),r.a.createElement("path",{d:"m447.814 313.795h.118c0-101.406-95.708-222.266-168.162-294.939-46.163 66.306-95.702 156.099-95.702 237.248h.154c0 106.371 63.877 193.489 154.166 229.958 64.717-30.645 109.426-96.269 109.426-172.267z",fill:"#b9f0ff"}),r.a.createElement("ellipse",{cx:"176.831",cy:"391.805",fill:"#ff8e9e",rx:"29.212",ry:"23.263",transform:"matrix(1 .003 -.003 1 1.228 -.552)"}),r.a.createElement("ellipse",{cx:"335.169",cy:"392.302",fill:"#ff8e9e",rx:"29.212",ry:"23.263",transform:"matrix(-1 -.003 .003 -1 669.108 785.651)"}),r.a.createElement("path",{d:"m255.996 512c-50.341 0-98.232-18.233-134.854-51.342-3.072-2.778-3.311-7.521-.533-10.594 2.778-3.071 7.521-3.309 10.594-.533 33.858 30.611 78.176 47.469 124.793 47.469 101.634 0 184.318-82.186 184.318-183.205 0-101.369-97.649-220.988-168.676-292.465-8.524-8.375-22.654-8.571-31.428.155-69.806 69.424-168.524 193.685-168.524 292.314 0 42.673 13.756 82.371 39.781 114.804 2.593 3.231 2.075 7.951-1.155 10.544-3.231 2.592-7.952 2.074-10.544-1.155-29.193-36.381-43.2-80.213-43.2-124.192 0-103.189 100.084-230.365 173.065-302.949 7.035-6.998 16.4-10.851 26.368-10.851 10.3 0 19.694 4.14 26.406 10.887 74.657 74.15 173.025 198.062 173.025 302.908.001 108.733-89.14 198.205-199.436 198.205z"}),r.a.createElement("path",{d:"m192 349.542c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"}),r.a.createElement("path",{d:"m320 349.542c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"}),r.a.createElement("path",{d:"m275.735 363.276c-3.737-1.789-8.215-.206-10.001 3.531-1.666 3.484-5.291 5.735-9.234 5.735s-7.568-2.251-9.234-5.735c-1.787-3.737-6.266-5.317-10.001-3.531-3.737 1.787-5.318 6.265-3.531 10.001 4.144 8.666 13.08 14.265 22.766 14.265s18.623-5.599 22.766-14.265c1.787-3.736.206-8.214-3.531-10.001z"}))},U=function(e){var t=e.type,n=e.className;try{var a=function(e){var t;return(t={},Object(L.a)(t,S.WIND,P),Object(L.a)(t,S.SUN,D),Object(L.a)(t,S.RAINDROP,R),t)[e]}(t);return r.a.createElement(a,{className:n})}catch(c){return console.error("icon with type ".concat(t," has no appropriate component")),null}},W=n(3),C=n.n(W),A=function(){return r.a.createElement("div",{className:C.a.wrapper},r.a.createElement("div",{className:C.a.inner},r.a.createElement("div",{className:C.a.front},r.a.createElement(U,{type:S.SUN,className:"".concat(C.a.first," ").concat(C.a.icon)}),r.a.createElement(U,{type:S.RAINDROP,className:"".concat(C.a.second," ").concat(C.a.icon)})),r.a.createElement("div",{className:C.a.back},r.a.createElement(U,{type:S.WIND,className:"".concat(C.a.icon," ")}))))},T=function(e){var t=e.forecast;return r.a.createElement(N,null,r.a.createElement("h1",null,t.name),r.a.createElement("h2",null,t.measures.temp," \u2103"),r.a.createElement("span",null,t.weather_description,", \u043e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",t.measures.feels_like," \u2103"))},B=function(e){var t=e.forecast;return r.a.createElement(N,null,r.a.createElement("h1",null,"\u0410/\u0434"),r.a.createElement("h2",null,t.measures.pressure),r.a.createElement("span",null,"\u043c\u043c \u0440\u0442 \u0441\u0442"))},I=function(e){var t=e.forecast;return r.a.createElement(N,null,r.a.createElement("h1",null,"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"),r.a.createElement("h2",null,t.measures.humidity,"%"))},F=b.refresh_rate,M=function(e){return e.changedTouches?e.changedTouches[0]:e},J=function(){var e=Object(a.useState)(1),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),s=Object(m.a)(l,2),f=s[0],h=s[1],p=Object(a.useState)(null),v=Object(m.a)(p,2),w=v[0],E=v[1],b=Object(a.useRef)({}),g=Object(a.useRef)({}),_=Object(a.useCallback)(Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,x.getLastUpdate(Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.geolocation.getPosition();case 3:return t=e.sent,e.abrupt("return",y.weather.load(t));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",y.weather.load());case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 3:t=e.sent,h(!1),E(t);case 6:case"end":return e.stop()}}),e)}))),[]),j=function(e){g.current.value=M(e).clientX},k=function(e){var t=g.current.value;if(t||0===t){var a=M(e).clientX-t,r=Math.sign(a);if(console.log(r),0===n&&r>0||2===n&&r<0)return console.log("here"),g.current.value=null;c(n-r),g.current.value=null}};if(Object(a.useEffect)((function(){return _(),b.current={id:setTimeout(_,F)},function(){return clearTimeout(b.current.id)}}),[]),Object(a.useEffect)((function(){return document.addEventListener("mousedown",j),document.addEventListener("touchstart",j),document.addEventListener("mouseup",k),document.addEventListener("touchend",k),function(){document.removeEventListener("mousedown",j),document.removeEventListener("touchstart",j),document.removeEventListener("mouseup",k),document.removeEventListener("touchend",k)}})),!w&&f)return r.a.createElement(N,null,r.a.createElement(A,null));if(!w)return null;var O={transform:"translate(".concat(-100*n,"%)")};return r.a.createElement("div",{className:d.a.app,style:Object(o.a)({},O)},r.a.createElement(B,{forecast:w}),r.a.createElement(T,{forecast:w}),r.a.createElement(I,{forecast:w}))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(21);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/the-weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/the-weather","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.0f60839b.chunk.js.map