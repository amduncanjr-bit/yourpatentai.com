import{p as nt}from"./chunk-JWPE2WC7-BBauyUtm.js";import{A as it,p as st,q as ot,s as lt,g as ct,c as ut,b as gt,_ as d,l as B,r as dt,h as pt,B as ht,G as ft,Q as mt,j as vt}from"./index-CHvaWri0.js";import{p as xt}from"./cynefin-OW5HDTMX-CtyYtR5Y.js";import{d as Z}from"./arc-DA5MJHrD.js";import{f as T,t as P,u as St,v as yt}from"./index-x5f7zu3M.js";import"./purify.es-BnINGy_Y.js";function wt(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function At(t){return t}function Ct(){var t=At,n=wt,y=null,b=T(0),l=T(P),p=T(0);function i(e){var r,o=(e=St(e)).length,h,w,$=0,f=new Array(o),s=new Array(o),D=+b.apply(this,arguments),E=Math.min(P,Math.max(-P,l.apply(this,arguments)-D)),k,L=Math.min(Math.abs(E)/o,p.apply(this,arguments)),u=L*(E<0?-1:1),A;for(r=0;r<o;++r)(A=s[f[r]=r]=+t(e[r],r,e))>0&&($+=A);for(n!=null?f.sort(function(M,m){return n(s[M],s[m])}):y!=null&&f.sort(function(M,m){return y(e[M],e[m])}),r=0,w=$?(E-o*u)/$:0;r<o;++r,D=k)h=f[r],A=s[h],k=D+(A>0?A*w:0)+u,s[h]={data:e[h],index:r,value:A,startAngle:D,endAngle:k,padAngle:L};return s}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:T(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,y=null,i):n},i.sort=function(e){return arguments.length?(y=e,n=null,i):y},i.startAngle=function(e){return arguments.length?(b=typeof e=="function"?e:T(+e),i):b},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:T(+e),i):l},i.padAngle=function(e){return arguments.length?(p=typeof e=="function"?e:T(+e),i):p},i}var J=it.pie,I={sections:new Map,showData:!1,config:J},F=I.sections,V=I.showData,$t=structuredClone(J),Dt=d(()=>structuredClone($t),"getConfig"),Tt=d(()=>{F=new Map,V=I.showData,dt()},"clear"),bt=d(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);F.has(t)||(F.set(t,n),B.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),kt=d(()=>F,"getSections"),zt=d(t=>{V=t},"setShowData"),Et=d(()=>V,"getShowData"),K={getConfig:Dt,clear:Tt,setDiagramTitle:st,getDiagramTitle:ot,setAccTitle:lt,getAccTitle:ct,setAccDescription:ut,getAccDescription:gt,addSection:bt,getSections:kt,setShowData:zt,getShowData:Et},Mt=d((t,n)=>{nt(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Rt={parse:d(async t=>{const n=await xt("pie",t);B.debug(n),Mt(n,K)},"parse")},Lt=d(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Wt=Lt,_t=d(t=>{const n=[...t.values()].reduce((l,p)=>l+p,0),y=[...t.entries()].map(([l,p])=>({label:l,value:p})).filter(l=>l.value/n*100>=1);return Ct().value(l=>l.value).sort(null)(y)},"createPieArcs"),Ft=d((t,n,y,b)=>{var X;B.debug(`rendering pie chart
`+t);const l=b.db,p=pt(),i=ht(l.getConfig(),p.pie),e=40,r=18,o=4,h=450,w=h,$=ft(n),f=$.append("g");f.attr("transform","translate("+w/2+","+h/2+")");const{themeVariables:s}=p;let[D]=mt(s.pieOuterStrokeWidth);D??(D=2);const E=i.legendPosition,k=i.textPosition,L=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,u=Math.min(w,h)/2-e,A=Z().innerRadius(L*u).outerRadius(u),M=Z().innerRadius(u*k).outerRadius(u*k),m=f.append("g");m.append("circle").attr("cx",0).attr("cy",0).attr("r",u+D/2).attr("class","pieOuterCircle");const W=l.getSections(),Y=_t(W),tt=[s.pie1,s.pie2,s.pie3,s.pie4,s.pie5,s.pie6,s.pie7,s.pie8,s.pie9,s.pie10,s.pie11,s.pie12];let G=0;W.forEach(a=>{G+=a});const j=Y.filter(a=>(a.data.value/G*100).toFixed(0)!=="0"),H=yt(tt).domain([...W.keys()]);m.selectAll("mySlices").data(j).enter().append("path").attr("d",A).attr("fill",a=>H(a.data.label)).attr("class",a=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===a.data.label&&(c+=" highlighted"),c}),m.selectAll("mySlices").data(j).enter().append("text").text(a=>(a.data.value/G*100).toFixed(0)+"%").attr("transform",a=>"translate("+M.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const et=f.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-(h-50)/2).attr("class","pieTitleText"),R=[...W.entries()].map(([a,c])=>({label:a,value:c})),C=f.selectAll(".legend").data(R).enter().append("g").attr("class","legend");C.append("rect").attr("width",r).attr("height",r).style("fill",a=>H(a.label)).style("stroke",a=>H(a.label)),C.append("text").attr("x",r+o).attr("y",r-o).text(a=>l.getShowData()?`${a.label} [${a.value}]`:a.label);const z=Math.max(...C.selectAll("text").nodes().map(a=>(a==null?void 0:a.getBoundingClientRect().width)??0));let _=h,N=w+e;const g=r+o,O=R.length*g;switch(E){case"center":C.attr("transform",(a,c)=>{const v=g*R.length/2,x=-z/2-(r+o),S=c*g-v;return"translate("+x+","+S+")"});break;case"top":_+=O,C.attr("transform",(a,c)=>{const v=u,x=-z/2-(r+o),S=c*g-v;return`translate(${x}, ${S})`}),m.attr("transform",()=>`translate(0, ${O+g})`);break;case"bottom":_+=O,C.attr("transform",(a,c)=>{const v=-u-g,x=-z/2-(r+o),S=c*g-v;return"translate("+x+","+S+")"});break;case"left":N+=r+o+z,C.attr("transform",(a,c)=>{const v=g*R.length/2,x=-u-(r+o),S=c*g-v;return"translate("+x+","+S+")"}),m.attr("transform",()=>`translate(${z+r+o}, 0)`);break;case"right":default:N+=r+o+z,C.attr("transform",(a,c)=>{const v=g*R.length/2,x=12*r,S=c*g-v;return"translate("+x+","+S+")"});break}const U=((X=et.node())==null?void 0:X.getBoundingClientRect().width)??0,at=w/2-U/2,rt=w/2+U/2,q=Math.min(0,at),Q=Math.max(N,rt)-q;$.attr("viewBox",`${q} 0 ${Q} ${_}`),vt($,_,Q,i.useMaxWidth)},"draw"),Gt={draw:Ft},jt={parser:Rt,db:K,renderer:Gt,styles:Wt};export{jt as diagram};
