(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={button:"custom-button_button__2FLF3",active:"custom-button_active__3hscQ"}},,,,function(e,t,a){e.exports={searchForm:"search-form_searchForm__3_XBN"}},function(e,t,a){e.exports={input:"input_input__yvQio"}},function(e,t,a){e.exports={imageContainer:"image-container_imageContainer__bJMXv"}},function(e,t,a){e.exports={img:"custom-image_img__1U9M1"}},function(e,t,a){e.exports={topButton:"top-button_topButton__11-dD"}},,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),o=(a(23),a(5)),i=a.n(o),l=a(9),u=a(6),h=a(1),m=a(2),p=a(7),g=a(4),d=a(3),f=(a(25),a(12)),b=a.n(f),v=a(17),x=a(13),y=a.n(x),E=function(e){var t=e.searchText,a=e.handleChange,n=Object(v.a)(e,["searchText","handleChange"]);return r.a.createElement("input",Object.assign({className:y.a.input,type:"search",value:t,onChange:a},n))},j=a(8),S=a.n(j),_=function(e){var t=e.children,a=e.active,n=e.searching,c=e.handleSubmit;return r.a.createElement("button",{className:"".concat(S.a.button," ").concat(a&&!n?S.a.active:""),onClick:a?c:function(){}},n?"wait...":t)},O=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchText:"",searching:!1,searched:!1,resultText:""},e.handleChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(){var t=Object(u.a)(i.a.mark((function t(a){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState((function(e){return{searching:!0,searched:!0,resultText:"'".concat(e.searchText,"' images")}})),n="https://image-buddy-baraja.herokuapp.com/api/search?q=".concat(e.state.searchText),t.prev=3,t.next=6,fetch(n);case 6:return r=t.sent,t.next=9,r.json();case 9:c=t.sent,e.setState({searching:!1}),e.props.loadImages(c),console.log(c),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=!!this.state.searchText.length;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e?this.handleSubmit:function(e){e.preventDefault()},className:b.a.searchForm},r.a.createElement(E,{searchText:this.state.searchText,handleChange:this.handleChange,placeholder:"search any image..."}),r.a.createElement(_,{handleSubmit:this.handleSubmit,active:e,searching:this.state.searching},"Search")),this.state.searched?r.a.createElement("h2",{style:{margin:"10px 0"}},this.state.resultText):"")}}]),a}(r.a.Component),k=a(14),w=a.n(k),C=a(15),T=a.n(C),N=function(e){var t=Object.assign({},e);return r.a.createElement("img",Object.assign({},t,{className:T.a.img}))},R=function(e){var t=e.images,a=e.children;return r.a.createElement("div",{className:w.a.imageContainer},t?t.map((function(e,t){return r.a.createElement(N,{src:e,key:t})})):"",a)},B=a(16),I=a.n(B),U=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"handleClick",value:function(){window.scroll(0,0)}},{key:"render",value:function(){var e,t,a=this.props.appRef;return a&&(e=a.offsetLeft+a.offsetWidth-70,t=window.innerHeight-60),r.a.createElement("button",{style:{left:"".concat(e,"px"),top:"".concat(t,"px")},onClick:this.handleClick,className:I.a.topButton},"Top")}}]),a}(r.a.Component),L=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleScroll=function(t){document.documentElement.scrollHeight-window.scrollY-window.innerHeight<100&&e.state.initialLoad&&!e.state.loading&&(console.log("handleScroll"),e.setState({loading:!0}),e.loadNextImages())},e.loadImages=function(t){console.log("loadimages"),t.err||e.setState((function(e){return{data:t,initialLoad:!0,page:2}}))},e.loadNextImages=Object(u.a)(i.a.mark((function t(){var a,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("loadnexttimages()"),a="https://image-buddy-baraja.herokuapp.com/api/page/".concat(e.state.page),t.prev=2,t.next=5,fetch(a);case 5:return n=t.sent,t.next=8,n.json();case 8:(r=t.sent).imageUrls.length>0&&e.setState((function(e){return{page:e.page+1,data:{imageUrls:[].concat(Object(l.a)(e.data.imageUrls),Object(l.a)(r.imageUrls))},loading:!1}})),console.log("iamges",r),t.next=15;break;case 13:t.prev=13,t.t0=t.catch(2);case 15:case"end":return t.stop()}}),t,null,[[2,13]])}))),e.state={data:{imageUrls:[]},appRef:null,initialLoad:!1,page:1,loading:!1},e.handleScroll=e.handleScroll.bind(Object(p.a)(e)),e.appRef=r.a.createRef(),window.addEventListener("scroll",e.handleScroll),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({appRef:this.appRef})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App",ref:this.appRef},r.a.createElement("h1",null,"Image Buddy"," ",r.a.createElement("small",{style:{fontSize:"0.5em"}},"By Baraja")),r.a.createElement("h2",{style:{marginTop:"-20px"}},r.a.createElement("small",{style:{fontSize:"0.5em"}},"Credits: pixabay.com |")," ",r.a.createElement("a",{href:"https://github.com/barajasss/image-buddy",target:"_blank",style:{color:"dodgerblue"}},r.a.createElement("small",{style:{fontSize:"0.5em"}},"Source Code"))),r.a.createElement(O,{loadImages:this.loadImages}),this.state.data.imageUrls.length>0?r.a.createElement(R,{images:this.state.data.imageUrls}):r.a.createElement(R,null,r.a.createElement(N,{src:"/search girl.png"})),this.state.loading?r.a.createElement("h3",{style:{textAlign:"center",margin:"10px 0"}},"Loading ..."):"",r.a.createElement(U,{appRef:this.state.appRef?this.state.appRef.current:null}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e54c4374.chunk.js.map