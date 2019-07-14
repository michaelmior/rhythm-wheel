(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){e.exports=r(33)},20:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(11),s=r.n(i),o=(r(20),r(12)),u=r.n(o),c=r(6),l=r(1),d=r(2),h=r(4),p=r(3),m=r(5),f=r(8),y=r.n(f),b=r(13),v=r(14),k=r.n(v),C=r(7),w=(r(29),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Circle",style:{backgroundColor:this.props.backgroundColor,borderColor:this.props.borderColor,borderRadius:this.props.radius,width:this.props.radius,height:this.props.radius,position:"relative"}},this.props.children)}}]),t}(a.Component));w.defaultProps={backgroundColor:"transparent",borderColor:"#000",radius:"100px"};var x=w,g=(r(30),function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){r.setState(function(t){var r=t.active.slice();if(r.includes(e)){var a=r.indexOf(e);r.splice(a,1)}else r.push(e),r.sort(function(e,t){return e-t});return Object(c.a)({},t,{active:r})})},r.audioContext=null,r.playing=!1,r.state=Object(c.a)({active:[]},e.initialState),r.playOrPause=r.playOrPause.bind(Object(C.a)(r)),r.scheduler=r.scheduler.bind(Object(C.a)(r)),r.bounce=n.a.createRef(),r.refCircle=n.a.createRef(),r}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.soundBuffer=this.soundLoader(this.props.sound.url)}},{key:"exportTrack",value:function(){var e=0,t=new y.a.Track;t.setTempo(this.props.bpm);for(var r=0;r<this.props.subdivisions;r++)this.state.active.includes(r)?(t.addEvent(new y.a.NoteEvent({channel:10,pitch:this.props.sound.instrument,duration:"16",wait:Array(e).fill("16")})),e=0):e+=1;return t}},{key:"soundLoader",value:function(e){var t=this,r={},a=new XMLHttpRequest;return a.open("GET",e,!0),a.responseType="arraybuffer",a.onload=function(){r.response=a.response},a.send(),r.play=function(e){var a=t.audioContext.createGain();a.gain.value=t.props.sound.volume;var n=t.audioContext.createBufferSource();n.buffer=r.soundToPlay,n.connect(a),a.connect(t.audioContext.destination),n.start(e)},r}},{key:"scheduler",value:function(){var e=this;for(window.requestAnimationFrame(function(){return e.updateBounce()});this.futureTickTime<this.audioContext.currentTime+.1;)this.playOrNot(),this.futureTick();this.timeout=window.setTimeout(this.scheduler,50)}},{key:"playOrNot",value:function(){var e=this;this.state.active.includes(this.current)&&(this.refCircle.current.setAttribute("class","pulse-anim"),window.setTimeout(function(){e.refCircle.current.setAttribute("class","")},100),this.soundBuffer.play(this.futureTickTime))}},{key:"preparePlay",value:function(){var e=this;this.props.sound&&!this.audioContext&&(this.audioContext=new AudioContext,this.audioContext.decodeAudioData(this.soundBuffer.response,function(t){e.soundBuffer.soundToPlay=t,e.soundBuffer.response=null}))}},{key:"playOrPause",value:function(){this.playing=!this.playing,this.startTickTime=this.audioContext.currentTime,this.playing?(this.current=0,this.futureTickTime=this.audioContext.currentTime,this.scheduler(),this.bounce.current.style.webkitAnimationPlayState="running",this.bounce.current.style.display="block"):(this.bounce.current.style.webkitAnimationPlayState="paused",this.bounce.current.style.display="none",this.updateBounce(),window.clearTimeout(this.timeout))}},{key:"updateBounce",value:function(){var e=this.pointCoords((this.audioContext.currentTime-this.startTickTime)*(this.props.bpm/15)%this.props.subdivisions);this.bounce.current.style.top=e.y+"px",this.bounce.current.style.left=e.x+"px"}},{key:"futureTick",value:function(){var e=60/this.props.bpm;this.futureTickTime+=.25*e,this.current=(this.current+1)%this.props.subdivisions}},{key:"pointCoords",value:function(e){var t=2*Math.PI/this.props.subdivisions*e;return{x:this.props.radius/2-2+Math.sin(t)*(this.props.radius+2)/2+10,y:this.props.radius-(this.props.radius/2-2+Math.cos(t)*(this.props.radius+2)/2)+5}}},{key:"render",value:function(){var e=this,t=[],r=this.state.active.slice();r.push(r[0]);for(var a=1;a<r.length;a++){var i=this.pointCoords(r[a]),s=this.pointCoords(r[a-1]);t.push(n.a.createElement("line",{key:"line"+a,x1:i.x,y1:i.y,x2:s.x,y2:s.y,stroke:"black",strokeWidth:"2"}))}var o=this.pointCoords(0);return n.a.createElement("div",{className:"Wheel",style:{padding:"10px"}},n.a.createElement("svg",{className:"beat-lines",style:{top:"5px",left:"5px"},width:this.props.radius+8,height:this.props.radius+8},t),n.a.createElement("div",{ref:this.bounce,className:"bounce",style:{top:o.y+"px",left:o.x+"px"}},n.a.createElement(x,{borderColor:"goldenrod",backgroundColor:"goldenrod",radius:"4px"})),n.a.createElement("div",{ref:this.refCircle},n.a.createElement(x,{borderColor:"white",radius:this.props.radius+"px"},Array.from({length:this.props.subdivisions},function(t,r){var a=e.pointCoords(r);return n.a.createElement("div",{key:"refCircle"+r,style:{cursor:"pointer",position:"absolute",top:a.y-10-3.2+"px",left:a.x-10-3+"px"},onClick:e.handleClick.bind(e,r)},n.a.createElement(x,{borderColor:"white",backgroundColor:"white",radius:"4px"}))}))),this.state.active.map(function(t){var r=e.pointCoords(t);return n.a.createElement("div",{key:"beatCircle"+t,style:{position:"absolute",top:r.y+"px",left:r.x+"px",pointerEvents:"none"}},n.a.createElement(x,{borderColor:"black",backgroundColor:"black",radius:"4px"}))}),n.a.createElement("div",{className:"name"},this.props.sound.name))}}]),t}(a.Component));g.defaultProps={subdivisions:16,radius:200};var E=g,O=(r(31),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).handleExportClick=function(){var t=Object.keys(e.drums).map(function(t){return e.drums[t].current.exportTrack()}),r=new y.a.Writer(t);e.download("groove.mid",r.dataUri())},e.handleBpmChange=function(t){var r=parseInt(t.target.value);e.setState(function(e){return Object(c.a)({},e,{bpm:r})})},e.handlePlayClick=function(){e.setState(function(e){return Object(c.a)({},e,{playing:!e.playing})}),e.hasPlayed?e.play():(e.drums.crash.current.preparePlay(),e.drums.hihat.current.preparePlay(),e.drums.kick.current.preparePlay(),e.drums.snare.current.preparePlay(),window.setTimeout(e.play,100))},e.play=function(){e.hasPlayed=!0,e.drums.crash.current.playOrPause(),e.drums.hihat.current.playOrPause(),e.drums.kick.current.playOrPause(),e.drums.snare.current.playOrPause()},e.hasPlayed=!1,e.state={bpm:120,playing:!1},e.drums={crash:n.a.createRef(),hihat:n.a.createRef(),kick:n.a.createRef(),snare:n.a.createRef()},e}return Object(m.a)(t,e),Object(d.a)(t,[{key:"download",value:function(e,t){var r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}},{key:"render",value:function(){return n.a.createElement("div",{className:"Player",style:{width:"1000px",textAlign:"center",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},n.a.createElement(E,{ref:this.drums.crash,initialState:{active:[0]},bpm:this.state.bpm,sound:{name:"Crash",volume:10,instrument:49,url:"/rhythm-wheel/sounds/crash.mp3"}}),n.a.createElement(E,{ref:this.drums.kick,initialState:{active:[0,8]},bpm:this.state.bpm,sound:{name:"Kick",volume:10,instrument:35,url:"/rhythm-wheel/sounds/kick.mp3"}}),n.a.createElement(E,{ref:this.drums.snare,initialState:{active:[4,12]},bpm:this.state.bpm,sound:{name:"Snare",volume:10,instrument:38,url:"/rhythm-wheel/sounds/snare.mp3"}}),n.a.createElement(E,{ref:this.drums.hihat,initialState:{active:[0,2,4,6,8,10,12,14,16]},bpm:this.state.bpm,sound:{name:"Hi-Hat",volume:8,instrument:42,url:"/rhythm-wheel/sounds/hat.mp3"}}),n.a.createElement("div",{className:"bpm"},n.a.createElement("input",{maxLength:3,defaultValue:this.state.bpm,disabled:this.state.playing,onChange:this.handleBpmChange}),"bpm"),n.a.createElement("button",{onClick:this.handlePlayClick},this.state.playing?"Stop":"Play"),n.a.createElement("div",{style:{cursor:"pointer",float:"right"},onClick:this.handleExportClick},n.a.createElement(b.Icon,{icon:k.a,color:"white"})))}}]),t}(a.Component));r(32);var T=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,{href:"https://github.com/michaelmior/rhythm-wheel"}),n.a.createElement(O,null),n.a.createElement("footer",null,"Inspired by ",n.a.createElement("a",{href:"https://www.amazon.com/Geometry-Musical-Rhythm-Makes-Second/dp/0815370970/"},'The Geometry of Musical Rhythm: What Makes a "Good" Rhythm Good?')))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.0f9cc034.chunk.js.map