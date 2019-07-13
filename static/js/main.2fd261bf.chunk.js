(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,i){e.exports=i(18)},16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r),a=i(9),o=i.n(a),s=(i(16),i(7)),u=i(1),c=i(2),l=i(4),p=i(3),d=i(5),h=i(6),f=(i(17),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Circle",style:{backgroundColor:this.props.backgroundColor,borderColor:this.props.borderColor,borderRadius:this.props.radius,width:this.props.radius,height:this.props.radius}},this.props.children)}}]),t}(r.Component));f.defaultProps={backgroundColor:"transparent",borderColor:"#000",radius:"100px"};var m=f,v=function(e){function t(e){var i;return Object(u.a)(this,t),(i=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){i.setState(function(t){var i=t.active.slice();if(i.includes(e)){var r=i.indexOf(e);i.splice(r,1)}else i.push(e),i.sort(function(e,t){return e-t});return Object(s.a)({},t,{active:i})})},i.audioContext=null,i.playing=!1,i.state=Object(s.a)({active:[]},e.initialState),i.playOrPause=i.playOrPause.bind(Object(h.a)(i)),i.scheduler=i.scheduler.bind(Object(h.a)(i)),i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.sound&&(this.audioContext=new AudioContext,this.soundBuffer=this.soundLoader(this.props.sound.url))}},{key:"soundLoader",value:function(e){var t=this,i={},r=new XMLHttpRequest;return r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){t.audioContext.decodeAudioData(r.response,function(e){i.soundToPlay=e})},r.send(),i.play=function(e){var r=t.audioContext.createGain();r.gain.value=t.props.sound.volume;var n=t.audioContext.createBufferSource();n.buffer=i.soundToPlay,n.connect(r),r.connect(t.audioContext.destination),n.start(e)},i}},{key:"scheduler",value:function(){for(;this.futureTickTime<this.audioContext.currentTime+.1;)this.playOrNot(),this.futureTick();this.timeout=window.setTimeout(this.scheduler,50)}},{key:"playOrNot",value:function(){this.state.active.includes(this.current)&&this.soundBuffer.play(this.futureTickTime)}},{key:"playOrPause",value:function(){this.playing=!this.playing,this.playing?(this.current=0,this.futureTickTime=this.audioContext.currentTime,this.scheduler()):window.clearTimeout(this.timeout)}},{key:"futureTick",value:function(){var e=60/this.props.bpm;this.futureTickTime+=.25*e,this.current=(this.current+1)%this.props.subdivisions}},{key:"pointCoords",value:function(e){var t=2*Math.PI/this.props.subdivisions*e;return{x:this.props.radius/2-2+Math.sin(t)*(this.props.radius+2)/2+10,y:this.props.radius/2-2+Math.cos(t)*(this.props.radius+2)/2+10}}},{key:"render",value:function(){var e=this,t=[],i=this.state.active.slice();i.push(i[0]);for(var r=1;r<i.length;r++){var a=this.pointCoords(i[r]),o=this.pointCoords(i[r-1]);t.push(n.a.createElement("line",{key:"line"+r,x1:a.x,y1:a.y,x2:o.x,y2:o.y,stroke:"black",strokeWidth:"2"}))}return n.a.createElement("div",{style:{position:"relative",padding:"10px",display:"inline-block"}},n.a.createElement("svg",{style:{pointerEvents:"none",position:"absolute",top:"5px",left:"5px",zIndex:100},width:this.props.radius+8,height:this.props.radius+8},t),n.a.createElement(m,{borderColor:"white",radius:this.props.radius+"px"},Array.from({length:this.props.subdivisions},function(t,i){var r=e.pointCoords(i);return n.a.createElement("div",{key:"refCircle"+i,style:{cursor:"pointer",position:"absolute",top:r.y+"px",left:r.x+"px"},onClick:e.handleClick.bind(e,i)},n.a.createElement(m,{borderColor:"white",backgroundColor:"white",radius:"4px"}))})),this.state.active.map(function(t){var i=e.pointCoords(t);return n.a.createElement("div",{key:"beatCircle"+t,style:{position:"absolute",top:i.y+"px",left:i.x+"px",pointerEvents:"none"}},n.a.createElement(m,{borderColor:"black",backgroundColor:"black",radius:"4px"}))}))}}]),t}(r.Component);v.defaultProps={subdivisions:16,radius:200};var b=v,y=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).handleClick=function(){e.setState(function(e){return Object(s.a)({},e,{playing:!e.playing})}),e.drums.hihat.current.playOrPause(),e.drums.kick.current.playOrPause(),e.drums.snare.current.playOrPause()},e.state={playing:!1},e.drums={hihat:n.a.createRef(),kick:n.a.createRef(),snare:n.a.createRef()},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{margin:"50px auto 0 auto",width:"800px",textAlign:"center"}},n.a.createElement(b,{ref:this.drums.kick,initialState:{active:[0,8]},bpm:120,sound:{volume:100,url:"/sounds/kick.mp3"}}),n.a.createElement(b,{ref:this.drums.snare,initialState:{active:[4,12]},bpm:120,sound:{volume:100,url:"/sounds/snare.mp3"}}),n.a.createElement(b,{ref:this.drums.hihat,initialState:{active:[0,2,4,6,8,10,12,14,16]},bpm:120,sound:{volume:80,url:"/sounds/hat.mp3"}}),n.a.createElement("button",{style:{clear:"both",display:"block",margin:"0 auto",position:"relative",top:"20px",fontSize:"20px"},onClick:this.handleClick},this.state.playing?"Pause":"Play"))}}]),t}(r.Component);var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.2fd261bf.chunk.js.map