(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(64),s=a.n(r),o=(a(72),a(9)),i=a(10),l=a(12),h=a(11),u=a(13),m=(a(73),a(65)),p=a.n(m),d=function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col App-logo-container"},c.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),c.a.createElement("h1",null,"Gif Search")))))},f=a(23),b=a(6),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleInputEnterPress",value:function(e){"Enter"===e&&this.props.search()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"SearchField row"},c.a.createElement("input",{type:"text",placeholder:"Search...",value:this.props.searchText,onChange:function(t){return e.props.handleSearchTextChange(t.target.value)},className:"col-8 col-md-10",onKeyPress:function(t){return e.handleInputEnterPress(t.key)}}),c.a.createElement("button",{onClick:this.props.search,className:"col-4 col-md-2"},"Search"))}}]),t}(c.a.Component),g=a(66),j=a.n(g),v=function(e){return c.a.createElement(j.a,{updateOnEachImageLoad:!0,options:{}},e.results.map(function(t,a){return c.a.createElement("div",{className:"grid-item",key:a},c.a.createElement("img",{src:t,className:"result-image",alt:e.searchText}))}))},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={searchText:"",results:[]},a.handleSearchTextChange=a.handleSearchTextChange.bind(Object(b.a)(Object(b.a)(a))),a.search=a.search.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSearchTextChange",value:function(e){this.setState(function(t){return Object(f.a)({},t,{searchText:e})})}},{key:"search",value:function(){var e=this;this.state.searchText.length>0&&fetch("".concat(y,"search?q=").concat(this.state.searchText,"&api_key=").concat(T),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState(function(e){return Object(f.a)({},e,{results:[]})});var a=[];t.data.map(function(e){return a.push(e.images.downsized_medium.url)}),e.setState(function(e){return Object(f.a)({},e,{results:a})})})}},{key:"render",value:function(){return c.a.createElement("main",{className:"App-main"},c.a.createElement("div",{className:"container"},c.a.createElement(E,{searchText:this.state.searchText,handleSearchTextChange:this.handleSearchTextChange,search:this.search}),c.a.createElement(v,{results:this.state.results,searchText:this.state.searchText})))}}]),t}(c.a.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(O,null))}}]),t}(n.Component),T="UEf49JA3Xnc8KTcjMpUNZOUt7i2ZbOiD",y="https://cors-anywhere.herokuapp.com/api.giphy.com/v1/gifs/";Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},67:function(e,t,a){e.exports=a(192)},72:function(e,t,a){},73:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.2887d3ec.chunk.js.map