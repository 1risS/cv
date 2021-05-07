(this.webpackJsonpsound_cv=this.webpackJsonpsound_cv||[]).push([[0],{135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),o=(t(58),t(47)),i=(t(59),t(4)),s=t(5);function m(e){var a=[];setInterval((function(){a.push(new n)}),100);var t=["I","R","I","S"];e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.textFont("monospace",24),e.textAlign(e.CENTER,e.CENTER)},e.draw=function(){e.background(80,10,65);for(var t=a.length-1;t>=0;t--)a[t].display(),a[t].move(),a[t].isOffScreen()&&a.splice(t,1)},e.windowResized=function(){e.resizeCanvas(e.windowWidth/window.devicePixelRatio,e.windowHeight/window.devicePixelRatio)};var n=function(){function a(){Object(i.a)(this,a),this.x=e.random(e.width),this.y=e.windowHeight/2,this.speed=1,this.l=e.random(t),this.alpha=e.random(128)}return Object(s.a)(a,[{key:"move",value:function(){this.y+=this.speed}},{key:"display",value:function(){e.fill(0,255,255,this.alpha),e.text(this.l,this.x,this.y)}},{key:"isOffScreen",value:function(){if(this.y>e.height)return!0}}]),a}()}var u=t(7),d=t(8),h=t(27),p=t.n(h),E=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.children;this.canvas=new p.a(e,this.container)}},{key:"componentDidUpdate",value:function(){var e=this.props.children;this.canvas.remove(),this.canvas=new p.a(e,this.container)}},{key:"componentWillUnmount",value:function(){this.canvas.remove()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(a){e.container=a}})}}]),t}(n.Component),g=t(16),b=t(18),f=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={lightboxIsOpen:!1},e.toggleLightbox=e.toggleLightbox.bind(Object(g.a)(e)),e}return Object(s.a)(t,[{key:"toggleLightbox",value:function(){var e=this,a=this.props.onChange;this.setState((function(e){return{lightboxIsOpen:!e.lightboxIsOpen}}),(function(){return a(e.state.lightboxIsOpen)}))}},{key:"renderGallery",value:function(e){var a=this;if(e){var t=e.map((function(e,t){return r.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:t},r.a.createElement("a",{className:"image fit thumb",href:e.source,onClick:function(e){e.preventDefault(),a.toggleLightbox()}},r.a.createElement("div",{className:"galleryContainer"},r.a.createElement("img",{className:"thumbnail",alt:"thumbnail",height:"250",src:e.source}))),r.a.createElement("h3",null,e.caption),r.a.createElement("p",null,e.description))}));return r.a.createElement("div",{className:"row"},t)}}},{key:"render",value:function(){var e=this.props,a=e.images,t=e.index,n=this.state.lightboxIsOpen;return r.a.createElement("div",null,this.renderGallery([a[0]]),r.a.createElement(b.b,null,n&&r.a.createElement(b.a,{onClose:this.toggleLightbox},r.a.createElement(b.c,{currentIndex:t,views:a}))))}}]),t}(n.Component);f.displayName="Gallery",f.defaultPropTypes={images:[]};var v=f,w=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.fixed;return r.a.createElement("nav",{className:e?"fixed":"",id:"navBar"},r.a.createElement("a",{href:"#about",className:"navBarContent"},"About"),r.a.createElement("a",{href:"#technician",className:"navBarContent"},"Technician"),r.a.createElement("a",{href:"#soundspace",className:"navBarContent"},"Sound Space"),r.a.createElement("a",{href:"#other",className:"navBarContent"},"Other projects"),r.a.createElement("a",{href:"#contact",className:"navBarContent"},"Contact"))}}]),t}(n.Component),k=t(13),N=t(14),C=[{id:"1",source:"/fauno/faunoConsola1.jpg"},{id:"2",source:"/fauno/faunoCCK1.jpg"},{id:"3",source:"/fauno/faunoCarlCraig.jpg"},{id:"4",source:"/fauno/faunoComposicion1.jpg"},{id:"6",source:"/fauno/faunoComposicion2.jpg"},{id:"7",source:"/fauno/faunoConsola.jpg"},{id:"8",source:"/fauno/fauno4.jpg"},{id:"9",source:"/fauno/faunoMardel.jpg"},{id:"10",source:"/fauno/faunoConsola1.jpg"}],y=[{id:"1",source:"/no-bounds/no-bounds_00.jpg"},{id:"2",source:"/no-bounds/no-bounds_01.jpg"},{id:"3",source:"/no-bounds/no-bounds_02.jpg"},{id:"4",source:"/no-bounds/no-bounds_03.jpg"},{id:"5",source:"/no-bounds/no-bounds_04.jpg"},{id:"6",source:"/no-bounds/no-bounds_05.jpg"}],j=[{id:"2",source:"/planetBogota/domolleno_01.jpg"},{id:"3",source:"/planetBogota/domolleno_02.jpg"},{id:"4",source:"/planetBogota/domolleno_03.jpg"},{id:"5",source:"/planetBogota/domolleno_04.png"}],A=[{id:"1",source:"/planetBA/planetba_00.jpg"},{id:"2",source:"/planetBA/planetba_01.jpg"},{id:"3",source:"/planetBA/planetba_02.jpg"},{id:"4",source:"/planetBA/planetba_03.jpg"}],O=[{id:"1",source:"/jack/jack_00.jpg"},{id:"2",source:"/jack/jack_01.jpg"}],x=[{id:"1",source:"/lipm/lipm_00.jpg"},{id:"2",source:"/lipm/lipm_01.jpg"}],B=[{id:"1",source:"/memory/memory_00.jpg"},{id:"2",source:"/memory/memory_01.jpg"}];var L=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1],c=function(e){l(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{fixed:!t}),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"bannerContainer"},r.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"myVideo"},r.a.createElement("source",{src:"/output.mp4",type:"video/mp4"}),r.a.createElement("source",{src:"/output.webm",type:"video/webm"}))),r.a.createElement("div",{className:"nameCont"},r.a.createElement("p",{className:"name"},"Iris Saladino"),r.a.createElement("p",{className:"sub"},"Sound programmer and designer"),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.instagram.com/1ri5.5/",target:"blank"},r.a.createElement(k.a,{icon:N.b,style:{color:"#61dafb"}})),r.a.createElement("a",{href:"https://www.youtube.com/channel/UC8SisRxGJhcy0LpZnWVgvfQ?view_as=subscriber",target:"blank"},r.a.createElement(k.a,{icon:N.d,style:{color:"#61dafb"}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/iris-saladino-986330ba/",target:"blank"},r.a.createElement(k.a,{icon:N.c,style:{color:"#61dafb"}})))),r.a.createElement("div",{className:"Container"},r.a.createElement("section",{id:"about"},r.a.createElement("p",{className:"title"},"About"),r.a.createElement("p",{className:"desc1"},"Buenos Aires based creative coder, sound oriented. Studied Music Composition and Electronic Arts in UNTreF. Loves to live code music with"," ",r.a.createElement("a",{href:"https://tidalcycles.org",target:"blank"},"TidalCycles")," ","and visuals with"," ",r.a.createElement("a",{href:"https://hydra.ojack.xyz/",target:"blank"},"Hydra")," ",". Wants to understand creative programming languages and softwares. Venerates the existence of internet. Needs creative environments for social interaction.",r.a.createElement("br",null),r.a.createElement("br",null),"Performed in:"," ",r.a.createElement("a",{href:"https://www.unsam.edu.ar/institutos/kagel/investigacion.asp?investigacion",target:"blank"},"UNSaM"),","," ",r.a.createElement("a",{href:"https://exactas.uba.ar/wp-content/uploads/2019/10/Programacion-EXACTAS-en-LNDLM-2019-1.pdf",target:"blank"},"UBA"),","," ",r.a.createElement("a",{href:"https://rolfart.com.ar/",target:"blank"},"Rolf art gallery"),","," ",r.a.createElement("a",{href:"https://www.buenosaires.gob.ar/museos/museo-sivori",target:"blank"},"S\xedvori Museum"),","," ",r.a.createElement("a",{href:"https://www.museomoderno.org/en",target:"blank"},"Museum of Modern Art"),","," ",r.a.createElement("a",{href:"http://elculturalsanmartin.org/"},"San Mart\xedn Cultural Center"),","," ",r.a.createElement("a",{href:"http://www.centroculturalrecoleta.org/",target:"blank"},"Recoleta Cultural Center"),","," ",r.a.createElement("a",{href:"http://ccciencia.gob.ar/",target:"blank"},"Cultural Center of Science"),","," ",r.a.createElement("a",{href:"https://planetario.buenosaires.gob.ar/",target:"blank"},"Planetarium of Buenos Aires"),","," ",r.a.createElement("a",{href:"https://planetariodebogota.gov.co/",target:"blank"},"Bogot\xe1 Planetarium"),", among others.",r.a.createElement("br",null),r.a.createElement("br",null),"Festivals:"," ",r.a.createElement("a",{href:"https://mutek.org/es/noticias/nano-mutek-ar-2019/",target:"blank"},"Amplify Nano Mutek 2019, BA"),","," ",r.a.createElement("a",{href:"https://www.idartes.gov.co/es/lineas-estrategicas/arte-ciencia-tecnologia",target:"blank"},"Festival Domo Lleno, CO"),","," ",r.a.createElement("a",{href:"https://networkmusicfestival.org/",target:"blank"},"Network Music Festival, DE"),",",r.a.createElement("a",{href:"http://noboundsfestival.co.uk/",target:"blank"},"No Bounds Festival, UK"),",",r.a.createElement("a",{href:"https://piksel.no/",target:"blank"},"Piksel, NO"),",",r.a.createElement("a",{href:"https://www.theoverkill.nl/",target:"blank"},"OverKill, NL"),",",r.a.createElement("a",{href:"https://spamarts.com/",target:"blank"},"SmapArts, BA"),".")),r.a.createElement("section",{id:"technician"},r.a.createElement("p",{className:"title"},"Technician"),r.a.createElement("p",{className:"desc"},r.a.createElement("b",null,"LA SIESTA DEL FAUNO ESTUDIO-LABORATORIO"),r.a.createElement("br",null),r.a.createElement("br",null),"Recording, editing and mixing assistant. ",r.a.createElement("br",null),"Analog synthesis designer.",r.a.createElement("br",null),r.a.createElement("br",null),"Worked with:",r.a.createElement("br",null),r.a.createElement("b",null,r.a.createElement("a",{href:"https://djmagla.com/ernesto-romeo-tengo-una-sensacion-de-total-gratitud-por-lo-que-significa-el-arte-y-la-musica-en-mi-vida/",target:"blank"},"Ernesto Romeo"),","," ",r.a.createElement("a",{href:"https://juanamolina.com/",target:"blank"},"Juana Molina"),","," ",r.a.createElement("a",{href:"https://www.lanacion.com.ar/espectaculos/mutek-el-festival-con-lo-que-no-hay-que-perderse-nid2287318",target:"blank"},"Gonzalo Solimano"),","," ",r.a.createElement("a",{href:"https://www.instagram.com/amandachangr/?hl=en",target:"blank"},"Amanda Chang"),","," ",r.a.createElement("a",{href:"https://carlcraig.net/about/",target:"blank"},"Carl Craig"),".")),r.a.createElement(v,{images:C,index:1,onChange:c})),r.a.createElement("section",{id:"soundspace"},r.a.createElement("p",{className:"title"},"Sound space ",r.a.createElement("br",null)," artist"),r.a.createElement("div",{className:"rowContainer"},r.a.createElement("div",{className:"cell"},r.a.createElement("p",{className:"desc"},r.a.createElement("b",null,"NO BOUNDS FESTIVAL"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=47BqQKsbSbg",target:"blank"}," ","Remote live coding performance with web-based collaborative editor for octophonic sound system")," ","in Hope Works, UK (binaural stream) ft."," ",r.a.createElement("a",{href:"https://slab.org/",target:"blank"},"Alex McLean")," ","and"," ",r.a.createElement("a",{href:"http://malitzincortes.net/",target:"blank"},"CNDSD"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(v,{images:y,index:1,onChange:c})),r.a.createElement("div",{className:"cell"},r.a.createElement("p",{className:"desc"},r.a.createElement("b",null,"PLANETARIO DE BOGOT\xc1"),r.a.createElement("br",null),r.a.createElement("br",null),"Live coding set in 5.1 sound system for fulldome livecoding performance.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(v,{images:j,index:1,onChange:c})),r.a.createElement("div",{className:"cell"},r.a.createElement("p",{className:"desc"},r.a.createElement("b",null,"PLANETARIO DE BUENOS AIRES"),r.a.createElement("br",null),r.a.createElement("br",null),"Live coding set for fulldome livecoding performance.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(v,{images:A,index:1,onChange:c}))),r.a.createElement("div",{className:"rowContainer"},r.a.createElement("div",{className:"cell"},r.a.createElement("p",{className:"desc"},r.a.createElement("b",null,"CENTRO CULTURAL GENERAL SAN MARTIN"),r.a.createElement("br",null),r.a.createElement("br",null),"Live coded processes over ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.jackadlermckean.eu/"},"Jack Adler-McKean")," ","for quadraphonic sound system.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(v,{images:O,index:1,onChange:c})),r.a.createElement("div",{className:"cell"},r.a.createElement("p",{className:"desc"},r.a.createElement("b",null,"L.I.P.M. (CENTRO CULTURAL RECOLETA)"),r.a.createElement("br",null),r.a.createElement("br",null),"Live coding experimental set for quadraphonic sound system.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(v,{images:x,index:1,onChange:c})),r.a.createElement("div",{className:"cell"},r.a.createElement("p",{className:"desc"},r.a.createElement("b",null,"MEMORY CANNOT BE READ"),r.a.createElement("br",null),r.a.createElement("br",null),"Binaural and located sound design for"," ",r.a.createElement("a",{href:"https://hubs.mozilla.com/9KV68Ve/spacex/",target:"blank"},"VR space")," ","created by graphic designer and artist"," ",r.a.createElement("a",{href:"https://veradg.com/",target:"blank"},"Vera DG"),",",r.a.createElement("br",null),"exhibited at"," ",r.a.createElement("a",{href:"https://madatac.es/",target:"blank"},"MATADAC"),", New Media Art Festival, Spain based.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(v,{images:B,index:1,onChange:c})))),r.a.createElement("section",{id:"other"},r.a.createElement("div",{className:"otherContainer"},r.a.createElement("div",{className:"title"},"Other projects"),r.a.createElement("div",{className:"desc2"},r.a.createElement("b",null,"BLACK CODED MIDI")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://blackcodedmidi.github.io/",target:"blank"},"Black Coded MIDI")," ","seeks for the upgrade and update of the new media art genre"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Black_Midi",target:"blank"},"Black MIDI")," ","by hybridizing it with live coding languages."),r.a.createElement("div",{className:"desc2"},r.a.createElement("b",null,"XPLORE")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://colectivo-de-livecoders.gitlab.io/xplore/",target:"blank"},"xplore")," ","is a collaborative web-based custom sound and visuals reproductor to show different explorations of TidalCycles made by students of"," ",r.a.createElement("a",{href:"http://www.cceba.org.ar/medialab/live-coding-con-tidalcycle",target:"blank"},"a course"),". Visuals are audioreactive, listening to the .mp3 directly through Web Audio."))),r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"contactContainer"},r.a.createElement("div",{className:"title"},"Contact"),r.a.createElement("div",{className:"mailCont"},r.a.createElement(k.a,{icon:N.a,style:{color:"#61dafb"}}),r.a.createElement("p",{className:"desc3"},"iris.r.saladino@gmail.com"))))),r.a.createElement(E,null,m)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,a,t){e.exports=t(135)},58:function(e,a,t){},59:function(e,a,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.cc081b47.chunk.js.map