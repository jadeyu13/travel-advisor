(this["webpackJsonptravel-advisor"]=this["webpackJsonptravel-advisor"]||[]).push([[0],{99:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(7),c=n.n(i),s=n(13),r=n(139),o=n(137),l=n(133),j=n(134),d=n(135),u=n(141),b=n(11),h=n(131),p=n(40),x=Object(h.a)((function(e){return{title:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),O=n(6);var m=function(){var e=x();return Object(O.jsx)("div",{children:Object(O.jsx)(l.a,{position:"static",children:Object(O.jsxs)(j.a,{className:e.toolbar,children:[Object(O.jsx)(d.a,{variant:"h5",className:"classes.title",children:"Travel Advisor"}),Object(O.jsx)(u.a,{display:"flex",children:Object(O.jsx)(d.a,{variant:"h6",className:"classes.title",children:"Explore new places"})})]})})})},g=n(136),v=n(143),f=n(140),C=n(142);var w=function(e){var t=e.places;return Object(O.jsx)("div",{children:t.name})},y=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}}));var k=function(e){var t=e.places,n=Object(a.useState)("restaurants"),i=Object(s.a)(n,2),c=i[0],r=i[1],l=Object(a.useState)(""),j=Object(s.a)(l,2),u=j[0],b=j[1],h=y();return Object(O.jsx)("div",{className:h.container,children:Object(O.jsxs)(d.a,{variant:"h4",children:["Restaurant, Hotels & Attractions around you",Object(O.jsxs)(g.a,{className:h.formcontrol,children:[Object(O.jsx)(v.a,{children:"Type"}),Object(O.jsxs)(f.a,{value:c,onChange:function(e){return r(e.target.value)},children:[Object(O.jsx)(C.a,{value:"restaurants",children:"Restaurant"}),Object(O.jsx)(C.a,{value:"hotels",children:"Hotels"}),Object(O.jsx)(C.a,{value:"attractions",children:"Attractions"})]})]}),Object(O.jsxs)(g.a,{className:h.formcontrol,children:[Object(O.jsx)(v.a,{children:"Rating"}),Object(O.jsxs)(f.a,{value:u,onChange:function(e){return b(e.target.value)},children:[Object(O.jsx)(C.a,{value:0,children:"All"}),Object(O.jsx)(C.a,{value:3,children:"Above 3.0 "}),Object(O.jsx)(C.a,{value:4,children:"Above 4.0"}),Object(O.jsx)(C.a,{value:4.5,children:"Above 4.5"})]})]}),Object(O.jsx)(o.a,{container:!0,spacing:3,className:h.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)(o.a,{item:!0,xs:12,children:Object(O.jsx)(w,{place:e})},t)}))})]})})},N=n(61),R=n(138),A=Object(h.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",transform:"translate(-50%, -50%)",zIndex:1,"&:hover":{zIndex:2}},pointer:{cursor:"pointer"}}}));var B=function(e){var t=e.setCoordinates,n=e.setBounds,a=e.coordinates,i=A();return Object(R.a)("(mid-width: 600px)"),Object(O.jsx)("div",{className:i.mapContainer,children:Object(O.jsx)(N.a,{bootstrapURLKeys:{key:"AIzaSyCxRwuM1go_CzH2KLJNn_dHjWlHsPgQjmg"},defaultCenter:a,center:a,defaultZoom:14,margin:[50,50,50,50],options:"",onChange:function(e){console.log(e),t({lat:e.center.lat,lng:e.center.lng}),n({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:""})})};n(44),n(59),n(60);function I(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=(t[1],Object(a.useState)({})),c=Object(s.a)(i,2),l=c[0],j=c[1],d=Object(a.useState)(null),u=Object(s.a)(d,2),b=(u[0],u[1]);return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;j({lat:n,lng:a})}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(r.a,{}),Object(O.jsx)(m,{}),Object(O.jsxs)(o.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(O.jsx)(o.a,{item:!0,xs:12,md:4,children:Object(O.jsx)(k,{places:n})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:8,children:Object(O.jsx)(B,{setCoordinates:j,setBounds:b,coordinates:l})})]})]})}c.a.render(Object(O.jsx)(I,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.de458cc9.chunk.js.map