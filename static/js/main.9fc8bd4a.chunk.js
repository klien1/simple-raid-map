(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=n(8),l=n(2),s=n(3),u=n(5),p=n(4),h=n(6),m=n(28),f=n(27),v=n(7),g=n.n(v),d=(n(24),function(e){var t,n=e.square_value,a=e.clickFunction;return t=0===n?"black":1===n?"grey":2===n?"white":3===n?"green":4===n?"lightblue":5===n?"lightpink":6===n?"lightseagreen":7===n?"lightgreen":8===n?"yellow":9===n?"orange":-8===n?"salmon":"red",r.a.createElement("div",{className:"square",style:{backgroundColor:t},onClick:a})}),y=n(26),b=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,8,1,-8,1,1,1,-8,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,-8,0,0,0,0,0,0,0,-8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,10,8,1,-8,1,8,0,0,0,9,1,-8,1,1,1,-8,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,8,1,1,1,9,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,-8,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],[0,0,0,0,0,8,1,-8,1,8,0,0,0,8,0,0,0,1,0,0,0,8,0,0,0,0,0,0,0,-8,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,8,1,1,1,8,1,1,1,8,0,0,0,1,1,-8,1,8,1,-8,1,8,0,0,0,0],[0,8,1,-8,1,9,1,1,1,8,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,8,10,0],[0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,-8,0,0,0,0,0,0,0,-8,0,0,0,-8,0,0,0,0,0,1,0,0],[0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0],[0,9,1,-8,1,1,1,-8,1,8,1,-8,1,8,1,-8,1,2,1,-8,1,8,1,-8,1,1,1,1,1,9,1,-8,1,-8,1,8,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,-8,0,0,0,0,0,0,0,1,0,0,8,1,-8,1,8,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,-8,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,8,1,-8,1,8,1,1,1,1,1,-8,1,8,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,9,1,1,1,1,-8,1,8,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,-8,0,0,0,-8,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,8,1,-8,1,9,0,0,0,8,1,1,1,9,0,0,8,1,-8,1,8,1,-8,1,-8,1,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,10,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,-8,0,0,0,0,0,0,0,0,0,0,9,1,1,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],E=[15,17],M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).isValidMove=function(e){for(var t=n.props.index,a=[[-1,0],[1,0],[0,-1],[0,1]],r=0;r<a.length;++r)if(n.state.cur_position[t][0]+a[r][0]===e[0]&&n.state.cur_position[t][1]+a[r][1]===e[1]&&0!==n.state.map[e[0]][e[1]])return!0;return e[0]!==E[0]||e[1]!==E[1]||e[0]===n.state.cur_position[t][0]&&e[1]===n.state.cur_position[t][1]||n.teleport(),!1},n.movePosition=function(e){var t=n.props.index,a=e.split(" ").map(Number);if(n.isValidMove(a)){var r=1,o=n.state.map[a[0]][a[1]];o>7?r=8:-8===o&&(r=7);var i=n.state.cur_position[t],l=Object(c.a)(n.state.cur_position);l[t]=a,n.setState({map:n.displayCurrentPosition(a,i),cur_position:l}),n.props.changeMorale(r,"-",t)}},n.teleport=function(){var e=n.props.index,t=n.state.cur_position[e],a=Object(c.a)(n.state.cur_position);a[e]=E,n.setState({map:n.displayCurrentPosition(E,t),cur_position:a}),n.props.changeMorale(3,"-",e)},n.displayCurrentPosition=function(e,t){var a=n.props.index,r=Object(c.a)(n.state.map);return r[t[0]][t[1]]=4+a,r[e[0]][e[1]]=2,r},n.refreshMap=function(){n.setState({map:n.copyOriginalMap(),cur_position:[E,E,E,E]}),n.props.resetMorale()},n.copyOriginalMap=function(){return g.a.map(b,function(e){return Object(c.a)(e)})},n.drawMap=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},g.a.map(n.state.map,function(e,t){return r.a.createElement("div",{key:t,style:{display:"flex",flexDirection:"row"}},g.a.map(e,function(e,a){var o="".concat(t," ").concat(a);return r.a.createElement(d,{key:o,square_value:e,clickFunction:function(){return n.movePosition(o)}})}))}))},n.state={map:n.copyOriginalMap(),cur_position:[E,E,E,E]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,null,this.drawMap(),r.a.createElement("button",{onClick:function(){return e.teleport()}},"Teleport"),r.a.createElement("button",{onClick:function(){return e.refreshMap()}},"Reset Map"))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},n.handleChange=function(e){n.setState({value:Number(e.target.value)})},n.changeMorale=function(){n.props.changeMorale(n.state.value,"+",n.props.index)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginTop:"1em",backgroundColor:this.props.color}},r.a.createElement("div",null,"Morale: ",this.props.morale),r.a.createElement("input",{type:"number",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){return e.changeMorale()}},"Add Morale"))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).generateEntries=function(){return r.a.createElement(y.a,null,g.a.map(n.props.morale,function(e,t){return r.a.createElement(f.a,{key:t,onClick:function(){n.props.changeEntry(t)},style:{border:n.props.index===t?"2px solid black":""}},r.a.createElement(O,{index:t,morale:e,value:n.props.value[t],changeMorale:n.props.changeMorale,color:0===t?"lightblue":1===t?"lightpink":2===t?"lightseagreen":"lightgreen"}))}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement("h3",null,"Number of Entries: ",this.props.entries),this.generateEntries())}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).changeMorale=function(e,t,a){var r=Object(c.a)(n.state.morale);"+"===t?r[a]+=e:r[a]-=e,n.setState({morale:r})},n.resetMorale=function(){n.setState({morale:g.a.map(n.state.morale,function(){return 70})})},n.changeEntry=function(e){n.setState(function(t){return{prevEntry:t.currentEntry,currentEntry:e}})},n.state={morale:[70,70,70,70],value:[0,0,0,0],currentEntry:0,prevEntry:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{style:{marginTop:"2em"}},r.a.createElement(f.a,null,r.a.createElement(M,{changeMorale:this.changeMorale,index:this.state.currentEntry,resetMorale:this.resetMorale,prevIndex:this.state.prevEntry}),r.a.createElement(j,{morale:this.state.morale,value:this.state.value,changeMorale:this.changeMorale,entries:this.state.morale.length,index:this.state.currentEntry,changeEntry:this.changeEntry})))}}]),t}(a.Component),w=function(){return r.a.createElement("div",null,r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.9fc8bd4a.chunk.js.map