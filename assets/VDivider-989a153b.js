import{B as c,y as v,C as d,s as h,at as m,_ as u,O as g,K as C,aL as r,D as y,b as V}from"./index-ef41152b.js";const k=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),D=h()({name:"VDivider",props:k(),setup(e,a){let{attrs:t}=a;const{themeClasses:s}=m(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),i});return y(()=>V("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{D as V};
