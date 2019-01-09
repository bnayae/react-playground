(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),c=n.n(r),o=(n(16),n(1)),u=n(2),i=n(5),m=n(3),s=n(4),h=(n(18),function(e){return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Hello ",e.Name," (Lambda with specific name)"),e.children)}),d=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Welcome ",this.props.Name,"(class component)"),this.props.children)}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={count:0,label:"Start imcrementing"},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"increment",value:function(){var e=this;this.setState(function(e,t){return{label:(t.Name||"")+": Continue incrementing",count:e.count+1}},function(){return console.log("continuation: value = "+e.state.count)})}},{key:"increment5",value:function(){this.increment(),this.increment(),this.increment(),this.increment(),this.increment()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Count: ",this.state.count),l.a.createElement("button",{onClick:function(){return e.increment5()}},this.state.label))}}]),t}(a.Component),E=n(6),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).safeLambdaClickHandler=function(){return n.setState({message:"Safe Click"})},n.state={message:"Hello"},n.ctorBindClickHandler=n.ctorBindClickHandler.bind(Object(E.a)(Object(E.a)(n))),n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"clickHandler",value:function(){console.log(this),this.setState({message:"Next time "})}},{key:"ctorBindClickHandler",value:function(){console.log(this),this.setState({message:"Ctor Bind"})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,this.state.message),l.a.createElement("button",{name:"Safe Lambda",onClick:this.safeLambdaClickHandler},"Class Lambda"),l.a.createElement("button",{name:"Ctor Bind",onClick:this.ctorBindClickHandler},"Ctor Bind"),l.a.createElement("button",{name:"Bind",onClick:this.clickHandler.bind(this)},"Bind"),l.a.createElement("button",{name:"Lambda",onClick:function(){return e.clickHandler()}},"Lambda"),l.a.createElement("button",{onClick:function(){e.setState({message:"Goodby"})}},"Nested Lambda"))}}]),t}(a.Component),f=function(e){return l.a.createElement("button",{onClick:function(){return e.handler("child")}},"Click Me")},v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).greet=function(e){return alert("Hello ".concat(n.state.message," from ").concat(e))},n.state={message:"mike"},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Parent Child"),l.a.createElement(f,{handler:this.greet}),l.a.createElement("hr",null))}}]),t}(a.Component);var g=function(){var e=["Bnaya","John","Ken"].map(function(e,t){return l.a.createElement("p",{key:t},t,": ",e)});return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"indexed (only for static not sortable list)"),e,l.a.createElement("hr",null))},y=(n(20),n(7)),C=n.n(y),O={fontSize:"20pt",color:"indianred"};var j=function(e){var t=e.useStyle?"primary":"",n=e.useStyle?"":"primary";return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"".concat(t," font-xl")},"A"),l.a.createElement("h1",{className:n},"B"),l.a.createElement("h1",{style:O},"C"),l.a.createElement("h1",{className:C.a.success},"Success"),l.a.createElement("h1",{className:C.a.error},"Error"),l.a.createElement("hr",null))},k=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:""};return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this,n))).handleUserChanged=function(t){e.setState({userName:t.target.value})},e.handleCommentChanged=function(t){e.setState({comment:t.target.value})},e.handleTopicChanged=function(t){e.setState({topic:t.target.value})},e.onSubmitHandler=function(t){alert("".concat(e.state.userName,": ").concat(e.state.topic,", ").concat(e.state.comment)),t.preventDefault()},e.state={userName:e.props.message,topic:"react"},e}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.comment,a=e.topic;e.summary;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Form (",this.props.message,")"),l.a.createElement("form",{action:"",onSubmit:this.onSubmitHandler},l.a.createElement("div",null,l.a.createElement("label",null,"user name:"),l.a.createElement("input",{type:"text",value:t,onChange:this.handleUserChanged}),l.a.createElement("label",null,t)),l.a.createElement("div",null,l.a.createElement("label",null,"comment:"),l.a.createElement("textarea",{value:n,onChange:this.handleCommentChanged}),l.a.createElement("label",null,n)),l.a.createElement("div",null,l.a.createElement("label",null,"Topic:"),l.a.createElement("select",{value:a,onChange:this.handleTopicChanged},l.a.createElement("option",{value:"react"},"React"),l.a.createElement("option",{value:"angular"},"Angular"),l.a.createElement("option",{value:"vue"},"Vue")),l.a.createElement("label",null,a)),l.a.createElement("button",{type:"submit"},"Submit"),l.a.createElement("hr",null)))}}]),t}(l.a.Component);k.defaultProps={message:"default"};var S=k,B=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log('Pure render "'.concat(this.props.name,'"')),l.a.createElement("div",null,"Pure ",this.props.name)}}]),t}(l.a.PureComponent),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).shouldComponentUpdate=function(e,t){return"ignore"!=e.name},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log('Regular render "'.concat(this.props.name,'"')),l.a.createElement("div",null,"Regular ",this.props.name)}}]),t}(l.a.Component);var x=l.a.memo(function(e){var t=e.name;return console.log('Memo render "'.concat(t,'"')),l.a.createElement("h3",null,"Memo component")}),L=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={name:"Ben",index:1},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.state.index%4===0||e.state.index%4===1?e.setState({name:"Arik",index:e.state.index+1}):e.state.index%3===1?e.setState({name:"Mike",index:e.state.index+1}):e.setState({name:"ignore",index:e.state.index+1})},2e3)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,"Parent ",this.state.name,l.a.createElement(B,{name:this.state.name}),l.a.createElement(x,{name:this.state.name}),l.a.createElement(N,{name:this.state.name}),l.a.createElement("hr",null))}}]),t}(l.a.Component),H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={title:n.props.head},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("Life-cycle B: componentDidMount")}},{key:"shouldComponentUpdate",value:function(){return console.log("Life-cycle B: shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Life-cycle B: getSnapshotBeforeUpdate"),"Hello from snapshot"}},{key:"componentDidUpdate",value:function(e,t,n){console.log('Life-cycle B: componentDidUpdate "'.concat(n,'"'))}},{key:"render",value:function(){return console.log("Life-cycle B: render"),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Life-cycle B: ",this.state.title," = ",this.state.value),l.a.createElement("hr",null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.value=e.size||42,console.log("Life-cycle B: getDerivedStateFromProps"),null}}]),t}(l.a.Component),F=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={title:n.props.head},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("Life-cycle A: componentDidMount")}},{key:"shouldComponentUpdate",value:function(){return console.log("Life-cycle A: shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Life-cycle A: getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(e,t,n){console.log("Life-cycle A: componentDidUpdate")}},{key:"render",value:function(){var e=this;return console.log("Life-cycle A: render"),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Life-cycle A: ",this.state.title," = ",this.state.value),l.a.createElement("button",{onClick:function(t){return e.setState({value:100})}},"Change State"),l.a.createElement(H,{head:"#".concat(this.state.title)}),l.a.createElement("hr",null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.value=e.size,console.log("Life-cycle A: getDerivedStateFromProps"),null}}]),t}(l.a.Component),D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.onSubmitHandler=function(e){alert("".concat(n.state.userName,": ").concat(n.state.topic,", ").concat(n.state.comment)),e.preventDefault()},n.state={userName:"bnaya",comment:"",topic:"react",summary:""},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.comment,a=e.topic;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"General Form Handler"),l.a.createElement("form",{action:"",onSubmit:this.onSubmitHandler},l.a.createElement("div",null,l.a.createElement("label",null,"user name:"),l.a.createElement("input",{name:"userName",type:"text",value:t,onChange:this.handleChange}),l.a.createElement("label",null,t)),l.a.createElement("div",null,l.a.createElement("label",null,"comment:"),l.a.createElement("textarea",{name:"comment",value:n,onChange:this.handleChange}),l.a.createElement("label",null,n)),l.a.createElement("div",null,l.a.createElement("label",null,"Topic:"),l.a.createElement("select",{name:"topic",value:a,onChange:this.handleChange},l.a.createElement("option",{value:"react"},"React"),l.a.createElement("option",{value:"angular"},"Angular"),l.a.createElement("option",{value:"vue"},"Vue")),l.a.createElement("label",null,a)),l.a.createElement("button",{type:"submit"},"Submit"),l.a.createElement("hr",null)))}}]),t}(a.Component),w=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:""};return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this,n))).handleChange=function(t){var n={};n[t.target.name]=t.target.value,e.setState(n)},e.onSubmitHandler=function(t){alert("".concat(e.state.userName,": ").concat(e.state.topic,", ").concat(e.state.comment)),t.preventDefault()},e.state={userName:e.props.message,topic:"react"},e}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.comment,a=e.topic;e.summary;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Form Central (",this.props.message,")"),l.a.createElement("form",{action:"",onSubmit:this.onSubmitHandler},l.a.createElement("div",null,l.a.createElement("label",null,"user name:"),l.a.createElement("input",{name:"userName",type:"text",value:t,onChange:this.handleChange}),l.a.createElement("label",null,t)),l.a.createElement("div",null,l.a.createElement("label",null,"comment:"),l.a.createElement("textarea",{name:"comment",value:n,onChange:this.handleChange}),l.a.createElement("label",null,n)),l.a.createElement("div",null,l.a.createElement("label",null,"Topic:"),l.a.createElement("select",{name:"topic",value:a,onChange:this.handleChange},l.a.createElement("option",{value:"react"},"React"),l.a.createElement("option",{value:"angular"},"Angular"),l.a.createElement("option",{value:"vue"},"Vue")),l.a.createElement("label",null,a)),l.a.createElement("button",{type:"submit"},"Submit"),l.a.createElement("hr",null)))}}]),t}(l.a.Component);w.defaultProps={message:"default"};var A=w,U=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=(new Date).getTime()%2==0;return l.a.createElement("div",{className:"App"},l.a.createElement(F,{head:"Some Title",size:10}),l.a.createElement(L,null),l.a.createElement(A,null),l.a.createElement(D,null),l.a.createElement(S,null),l.a.createElement(S,{message:"Hi"}),l.a.createElement(j,{useStyle:e}),l.a.createElement(g,null),l.a.createElement(v,null),l.a.createElement(p,null),l.a.createElement(p,{Name:"John"}),l.a.createElement("hr",null),l.a.createElement(b,null),l.a.createElement("hr",null),l.a.createElement(h,null,l.a.createElement("p",null,"This is children tag")),l.a.createElement(h,{Id:"1"},l.a.createElement("button",null,"Action")),l.a.createElement(h,{Id:"2",Name:"Bnaya"}),l.a.createElement("hr",null),l.a.createElement(d,null,l.a.createElement("h3",null,"Child Data")),l.a.createElement(d,{Name:"Bnaya"}),l.a.createElement(d,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports={error:"my_error__2nfx3",success:"my_success__1OJ58"}}},[[10,2,1]]]);
//# sourceMappingURL=main.48f2948e.chunk.js.map