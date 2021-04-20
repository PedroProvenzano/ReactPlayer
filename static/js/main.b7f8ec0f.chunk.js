(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(12),s=n.n(r),i=n(4),o=n.n(i),u=n(6),l=n(3),j=n(8),d=(n(18),n(7)),b=n(5),p=n(0),O=function(e){var t=e.currentSong,n=e.setCurrentSong,a=e.isPlaying,c=e.setIsPlaying,r=e.audioRef,s=e.songInfo,i=e.setSongInfo,j=e.songs,O=e.setSongs,g=function(e){var t=j.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));O(t)},h=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},f=function(){var e=Object(u.a)(o.a.mark((function e(c){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.findIndex((function(e){return e.id===t.id}));case 2:if(s=e.sent,"skip-back"!==c){e.next=11;break}return(s-1)%j.length===-1&&(s=j.length),e.next=7,n(j[s-1]);case 7:g(j[s-1]),a&&r.current.play(),e.next=15;break;case 11:return e.next=13,n(j[(s+1)%j.length]);case 13:g(j[(s+1)%j.length]),a&&r.current.play();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={transform:"translateX(".concat(s.animationPercentage,"%)")};return Object(p.jsxs)("div",{className:"player",children:[Object(p.jsxs)("div",{className:"time-control",children:[Object(p.jsx)("p",{children:h(s.currentTime)}),Object(p.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],",").concat(t.color[1],")")},className:"track",children:[Object(p.jsx)("input",{onChange:function(e){r.current.currentTime=e.target.value,i(Object(l.a)(Object(l.a)({},s),{},{currentTime:e.target.value}))},min:0,max:s.duration||0,type:"range",name:"",id:"",value:s.currentTime}),Object(p.jsx)("div",{style:m,className:"animate-track"})]}),Object(p.jsx)("p",{children:s.duration?h(s.duration):"0:00"})]}),Object(p.jsxs)("div",{className:"play-control",children:[Object(p.jsx)(d.a,{onClick:function(){return f("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(p.jsx)(d.a,{onClick:function(){a?(r.current.pause(),c(!a)):(r.current.play(),c(!a))},className:"play",size:"2x",icon:a?b.d:b.e}),Object(p.jsx)(d.a,{onClick:function(){return f("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},g=function(e){var t=e.currentSong;return Object(p.jsxs)("div",{className:"song-container",children:[Object(p.jsx)("img",{alt:t.name,src:t.cover}),Object(p.jsx)("h2",{children:t.name}),Object(p.jsx)("h3",{children:t.artist})]})},h=function(e){var t=e.song,n=e.songs,a=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,s=e.setSongs,i=function(){var e=Object(u.a)(o.a.mark((function e(){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:i=n.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),s(i),r&&c.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{onClick:i,className:"library-song ".concat(t.active?"selected":""),children:[Object(p.jsx)("img",{alt:t.name,src:t.cover}),Object(p.jsxs)("div",{className:"song-description",children:[Object(p.jsx)("h3",{children:t.name}),Object(p.jsx)("h4",{children:t.artist})]})]})},f=function(e){var t=e.songs,n=e.setCurrentSong,a=e.audioRef,c=e.isPlaying,r=e.setSongs,s=e.isLibraryOpen;return Object(p.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(p.jsx)("h2",{children:"Library"}),Object(p.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(p.jsx)(h,{setCurrentSong:n,song:e,songs:t,audioRef:a,isPlaying:c,setSongs:r},e.id)}))})]})},m=function(e){var t=e.isLibraryOpen,n=e.setIsLibraryOpen;return Object(p.jsxs)("nav",{children:[Object(p.jsx)("h1",{children:"Waves"}),Object(p.jsxs)("button",{className:"".concat(t?"button-active":""),onClick:function(){return n(!t)},children:["Library",Object(p.jsx)(d.a,{icon:b.c})]})]})},v=n(27);var x=function(){return[{name:"Lonely Waves",cover:"https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-1024x1024.jpg",artist:"C Y G N",audio:"https://mp3.chillhop.com/serve.php/?mp3=14980",color:["#0C112E","#E482F5"],id:Object(v.a)(),active:!0},{name:"Cascade",cover:"https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",artist:"Knowmadic",audio:"https://mp3.chillhop.com/serve.php/?mp3=13091",color:["#EF8462","#E09843"],id:Object(v.a)(),active:!1},{name:"Runaway",cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/604b79c66576a156c11c72f5_80Runaway---Square-Spring21-p-2000.jpeg",artist:"Blue Wednesday",audio:"https://mp3.chillhop.com/serve.php/?mp3=12135",color:["#D54C46","#F7B78B"],id:Object(v.a)(),active:!1}]};var y=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(x()),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(c[0]),i=Object(j.a)(s,2),d=i[0],b=i[1],h=Object(a.useState)(!1),v=Object(j.a)(h,2),y=v[0],S=v[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),C=Object(j.a)(k,2),w=C[0],N=C[1],P=Object(a.useState)(!1),I=Object(j.a)(P,2),L=I[0],T=I[1],R=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);N(Object(l.a)(Object(l.a)({},w),{},{currentTime:t,duration:n,animationPercentage:r}))},F=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.findIndex((function(e){return e.id===d.id}));case 2:return n=t.sent,t.next=5,b(c[(n+1)%c.length]);case 5:e.current.play();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App ".concat(L?"library-active":""),children:[Object(p.jsx)(m,{isLibraryOpen:L,setIsLibraryOpen:T}),Object(p.jsx)(g,{currentSong:d}),Object(p.jsx)(O,{audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:d,setCurrentSong:b,setSongInfo:N,songInfo:w,songs:c,setSongs:r}),Object(p.jsx)(f,{isLibraryOpen:L,audioRef:e,songs:c,setCurrentSong:b,isPlaying:y,setSongs:r}),Object(p.jsx)("audio",{onTimeUpdate:R,onLoadedMetadata:R,ref:e,src:d.audio,onEnded:F})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.b7f8ec0f.chunk.js.map