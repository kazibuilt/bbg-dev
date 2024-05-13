import{_ as P,A as te}from"./Logo.CuYfjzrw.js";import{s as pe,i as oe,_ as N,a as Z,b as _e,c as D,d as F,e as Q,f as le,A as me,S as fe,u as de,g as he,h as ve,j as ye}from"./useSeo.A6XmXDq9.js";import{L as X,M as ke,N as ge,i as C,r as u,e as f,x as B,q as y,h as l,z as S,p as i,d as a,C as z,A as G,f as w,n as L,P as Y,J as se,K as ne,_ as O,F as H,y as M,Q as U,T,b as j,m as q,v as ae,B as re,D as ie,I as be,u as Re,R as $e,k as Te,U as J,V as K,W as Ae,S as Ie,X as we}from"./entry.BWB0ivIq.js";import{_ as xe}from"./SectionHead.NVqCjZGs.js";import{_ as ce}from"./Image.vue.MFh1IFGc.js";import{_ as ue}from"./nuxt-link._i9Q8UJJ.js";import{s as E}from"./Storyblok.util.DtB1GmlR.js";import"./vue.f36acd1f.BYFxkCGD.js";const Le=e=>{const{items:o}=e||{};return{_uid:(e==null?void 0:e._uid)??"",component:(e==null?void 0:e.component)??"home_about",data:{items:(o??[]).map(n=>{var s;return{_uid:n._uid??"",title:n.title??"",subtitle:n.subtitle??"",copy:n.copy??null,subCopy:n.sub_copy??"",link:X((s=n.link)==null?void 0:s[0])}})}}},Se=e=>{const{_uid:o,component:n,core_business:s,domain:r,industries:p,items:c,services:m,services_title:_,title:d}=e||{};return{_uid:o??"",component:n??"home_company_details",data:{coreBusiness:s?E(s):"",domain:r?E(r):"",industries:p?E(p):"",items:(c??[]).map(ke),services:(m??[]).map(t=>({name:t.copy,shortName:t.title})),servicesTitle:_??"",title:d?E(d):""}}},Be=e=>{const{image:o,label:n,link:s,links:r,title:p}=e||{};return{image:oe(o),label:n??"",link:X(s==null?void 0:s[0]),links:r.map(X),title:p??""}},Ce=e=>{const{_uid:o,component:n,copy:s,copy_lines:r,link:p,title:c}=e||{};return{_uid:o??"",component:n??"home_intro",data:{copy:s??"",copyLines:(r.value??[]).map(m=>m)??[],link:X(p==null?void 0:p[0]),title:c?E(c):""}}},He=e=>{const{_uid:o,component:n,copy:s,label:r,images:p,items:c,sub_copy:m,subtitle:_,title:d}=e||{};return{_uid:o??"",component:n??"home_products",data:{copy:s??"",links:{_uid:`home-products-${o??""}`,label:r??"",items:(c??[]).map(X)},images:p.map(oe),subCopy:m??"",subtitle:_??"",title:d??""}}},Me=e=>{const{_uid:o,component:n,item:s}=e||{};return{_uid:o??"",component:n??"home_master_plan",data:ge(s==null?void 0:s[0],1)}},Oe=e=>{var n,s,r,p,c,m,_;const o=(n=e==null?void 0:e.hero)==null?void 0:n[0];return{blocks:[Ce((s=e==null?void 0:e.intro)==null?void 0:s[0]),Se((r=e==null?void 0:e.company_details)==null?void 0:r[0]),He((p=e==null?void 0:e.products)==null?void 0:p[0]),Le((c=e==null?void 0:e.about)==null?void 0:c[0]),Me((m=e==null?void 0:e.master_plan)==null?void 0:m[0])],hero:Be(o),seo:pe((_=e==null?void 0:e.seo)==null?void 0:_[0],o==null?void 0:o.title,"",o==null?void 0:o.image)}},We=e=>(se("data-v-af2b9c75"),e=e(),ne(),e),Pe={class:"head"},Ne=We(()=>l("span",null,"*",-1)),De=C({__name:"HomeAboutItem",props:{_uid:{},title:{},subtitle:{},hasSeparator:{type:Boolean,default:!0},copy:{},subCopy:{},link:{}},setup(e){const o=u(null),n=u(null),s=u(null),r=u(null),p=u(null),c=u(null),m=u(null);let _;const d=t=>{var v,A;if(t){if(_=L.timeline({paused:!0}),_.addLabel("start"),(v=o.value)!=null&&v.$el&&_.set(o.value.$el,{autoAlpha:1}),n.value&&_.fromTo(n.value,{autoAlpha:0},{autoAlpha:1,duration:1.2,ease:"power3.out"},"start"),s.value&&_.call(s.value.reveal,[],"start"),p.value&&_.call(p.value.reveal,[],"start+=0.15"),(A=r.value)!=null&&A.$el){const g=new Y(r.value.$el.children,{type:"lines"});_.fromTo(g.lines,{autoAlpha:0,y:50},{autoAlpha:1,duration:.6,ease:"power3.out",y:0,stagger:.05},"start+=0.1")}c.value&&_.fromTo(c.value,{autoAlpha:0},{autoAlpha:.4,duration:1.2},"start+=0.3"),m.value&&_.fromTo(m.value,{scaleX:0},{duration:2,ease:"power3.out",scaleX:1},"start+=0.7"),_.play()}};return(t,v)=>{const A=P;return f(),B(A,{ref_key:"elRef",ref:o,class:"home-about-item",once:!0,"on-intersecting":d},{default:y(()=>[l("h2",{ref_key:"titleRef",ref:n,class:"title"},S(t.title),513),l("div",Pe,[i(a(N),{ref_key:"subtitleRevealRef",ref:s,class:"subtitle",tag:"h3",copy:t.subtitle,manual:!0},null,8,["copy"]),i(a(Z),{ref_key:"linkRef",ref:p,class:"link",link:t.link},null,8,["link"])]),t.copy?(f(),B(a(_e),{key:0,ref_key:"copyRef",ref:r,class:"copy",copy:t.copy},null,8,["copy"])):z("",!0),l("p",{ref_key:"subCopyRef",ref:c,class:"sub-copy"},[Ne,G(" "+S(t.subCopy),1)],512),t.hasSeparator?(f(),w("div",{key:1,ref_key:"lineRef",ref:m,class:"line"},null,512)):z("",!0)]),_:1},512)}}}),Ee=O(De,[["__scopeId","data-v-af2b9c75"]]),Xe=C({__name:"HomeAbout",props:{items:{}},setup(e){return(o,n)=>{const s=Ee,r=D,p=F;return f(),B(p,{class:"home-about","logo-theme":{backgroundTheme:a(T).Blue,iconTheme:a(T).OffBlack},theme:a(T).OffBlack},{default:y(()=>[i(r,null,{default:y(()=>[(f(!0),w(H,null,M(o.items,(c,m)=>(f(),B(s,U({key:c._uid,class:"item","has-separator":m<o.items.length-1},c),null,16,["has-separator"]))),128))]),_:1})]),_:1},8,["logo-theme","theme"])}}}),Fe=O(Xe,[["__scopeId","data-v-4fe91e90"]]),Ve={class:"bracket-text"},ze={key:0,class:"sup"},Ge=C({__name:"BracketText",props:{label:{},sup:{}},setup(e){return(o,n)=>(f(),w("div",Ve,[G(S(o.label),1),o.sup?(f(),w("sup",ze,S(o.sup),1)):z("",!0)]))}}),Ue=O(Ge,[["__scopeId","data-v-dfccf8fa"]]),ee=e=>(se("data-v-10c219c9"),e=e(),ne(),e),je={class:"head"},qe={class:"top-items"},Je={class:"item-head-number"},Ke={class:"bottom-item"},Qe=ee(()=>l("div",{class:"bottom-item-title"},"Industries",-1)),Ye=["innerHTML"],Ze={class:"bottom-item"},et=ee(()=>l("div",{class:"bottom-item-title"},"Core Business",-1)),tt=["innerHTML"],ot={class:"bottom-item"},lt=ee(()=>l("div",{class:"bottom-item-title"},"Domain",-1)),st=["innerHTML"],nt={class:"item-head"},at={class:"item-head-number"},rt={class:"bottom-services-items"},it={class:"bottom-services-item-name"},ct=C({__name:"HomeCompanyDetails",props:{title:{},items:{},industries:{},coreBusiness:{},domain:{},services:{},servicesTitle:{}},setup(e){const o=u(null),n=u(null),s=u([]),r=u([]),p=u([]),c=u(null),m=u(null),_=u(null),d=u(null);let t,v;j(()=>{t&&t.kill(),v&&v.kill()});const A=R=>{var h,$,k,b;if(R){if(t=L.timeline({paused:!0}),t.addLabel("start"),(h=o.value)!=null&&h.$el&&t.set(o.value.$el,{autoAlpha:1}),n.value&&t.call(n.value.reveal,[],"start"),(($=s.value)==null?void 0:$.length)>0&&t.fromTo(s.value,{autoAlpha:0},{autoAlpha:1,duration:2,stagger:.15},"start+=0.5"),((k=r.value)==null?void 0:k.length)>0){let I=1;t.fromTo(r.value,{autoAlpha:0,y:40},{autoAlpha:x=>(I=x>0?I-.2:I,I),duration:1,ease:"power3.out",stagger:.15,y:0},"start+=0.5")}((b=p.value)==null?void 0:b.length)>0&&t.fromTo(p.value,{scaleX:0},{duration:1.5,ease:"power3.out",scaleX:1,stagger:.15},"start+=0.5"),t.play()}},g=R=>{var h,$;R&&(v=L.timeline({paused:!0}),v.addLabel("start"),(h=c.value)!=null&&h.$el&&v.set(c.value.$el,{autoAlpha:1}),($=m.value)!=null&&$.children&&m.value.children.length>0&&v.fromTo(m.value.children,{autoAlpha:0,y:40},{autoAlpha:1,duration:1,ease:"power3.out",stagger:.1,y:0},"start"),_.value&&v.fromTo(_.value,{scaleX:0},{duration:1.2,ease:"power3.out",scaleX:1,stagger:.05},"start+=0.15"),d.value&&v.fromTo(d.value,{autoAlpha:0,y:40},{autoAlpha:1,duration:1,ease:"power3.out",y:0},"start+=0.3"),v.play())};return(R,h)=>{const $=Ue,k=F;return f(),B(k,{id:"company-details",class:"home-company-details","logo-theme":{backgroundTheme:a(T).Blue,iconTheme:a(T).OffBlack},theme:a(T).OffBlack},{default:y(()=>[i(a(P),{class:"top",once:!0,"on-intersecting":A},{default:y(()=>[i(a(D),{ref_key:"topContainerRef",ref:o,class:"home-company-details-container"},{default:y(()=>[l("div",je,[i(a(N),{ref_key:"topTitleRevealRef",ref:n,class:"title",tag:"h3",copy:R.title,manual:!0},null,8,["copy"])]),l("ul",qe,[(f(!0),w(H,null,M(R.items,(b,I)=>(f(),w("li",{key:`home-company-details-top-item-${b}`,class:"top-item"},[l("div",{ref_for:!0,ref_key:"topItemHeadsRef",ref:s,class:"item-head"},[l("span",Je,"0."+S(I+1),1),l("span",null,S(b.title),1)],512),l("div",{ref_for:!0,ref_key:"topItemTitlesRef",ref:r,class:"item-head-title"},[G(S(b.copy)+" ",1),I<R.items.length-1?(f(),w("div",{key:0,ref_for:!0,ref_key:"topItemLinesRef",ref:p,class:"item-head-line"},null,512)):z("",!0)],512)]))),128))])]),_:1},512)]),_:1}),i(a(P),{class:"bottom",once:!0,"on-intersecting":g,options:{threshold:.5}},{default:y(()=>[i(a(D),{ref_key:"bottomContainerRef",ref:c,class:"home-company-details-container"},{default:y(()=>[l("ul",{ref_key:"bottomListRef",ref:m,class:"bottom-items"},[l("li",Ke,[Qe,l("div",{class:"bottom-item-copy",innerHTML:R.industries},null,8,Ye)]),l("li",Ze,[et,l("div",{class:"bottom-item-copy",innerHTML:R.coreBusiness},null,8,tt)]),l("li",ot,[lt,l("div",{class:"bottom-item-copy",innerHTML:R.domain},null,8,st)])],512),l("div",{ref_key:"bottomLineRef",ref:_,class:"bottom-line"},null,512),l("div",{ref_key:"bottomServicesRef",ref:d,class:"bottom-services"},[l("div",nt,[l("span",at,"0."+S(R.items.length+1),1),l("span",null,S(R.servicesTitle),1)]),l("div",rt,[(f(!0),w(H,null,M(R.services,b=>(f(),w("div",{key:`home-company-details-services-item-${b}`,class:"bottom-services-item"},[i($,{label:b.shortName},null,8,["label"]),l("div",it,S(b.name),1)]))),128))])],512)]),_:1},512)]),_:1})]),_:1},8,["logo-theme","theme"])}}}),ut=O(ct,[["__scopeId","data-v-10c219c9"]]),pt=window.setInterval,_t={class:"head"},mt={class:"content"},ft={class:"copy-lines-wrapper"},dt=C({__name:"HomeIntro",props:{title:{},copy:{},copyLines:{},link:{}},setup(e){const o=e,n=u(null),s=u(null),r=u(null),p=u(null),c=u(0);let m=!1,_=!0,d,t;q(()=>{d=pt(()=>{_||(c.value=(c.value+1)%o.copyLines.length)},3500)}),j(()=>{d&&clearInterval(d),t&&t.kill()});const v=h=>{_=!h,h&&!m&&(A(),m=!0)},A=()=>{var h;if(t=L.timeline({paused:!0}),(h=n.value)!=null&&h.$el&&t.set(n.value.$el,{autoAlpha:1}),s.value&&t.call(s.value.reveal,[],"start"),r.value){const $=new Y(r.value,{type:"lines"});t.fromTo($.lines,{autoAlpha:0,y:50},{autoAlpha:1,duration:.8,ease:"power3.out",y:0,stagger:.05},"start+=0.2")}p.value&&t.call(p.value.reveal,[],"start+=0.45"),t.play()},g=h=>{const $=new Y(h,{type:"words"});L.set(h,{autoAlpha:1}),L.fromTo($.words,{autoAlpha:0,filter:"blur(10px)"},{autoAlpha:1,duration:1.3,filter:"blur(0px)",stagger:.1,onComplete:()=>{$.revert()}})},R=(h,$)=>{L.to(h,{autoAlpha:0,clearProps:"all",duration:.5,onComplete:$})};return(h,$)=>{const k=P,b=F;return f(),B(b,{class:"home-intro","logo-theme":{backgroundTheme:a(T).Blue,iconTheme:a(T).OffWhite},theme:a(T).GreyLight},{default:y(()=>[i(k,{"on-intersecting":v,options:{threshold:0}},{default:y(()=>[i(a(D),{ref_key:"containerRef",ref:n,class:"home-intro-container"},{default:y(()=>[l("div",_t,[i(a(N),{ref_key:"titleRevealRef",ref:s,class:"title",tag:"h2",copy:h.title,manual:!0},null,8,["copy"])]),l("div",mt,[l("p",{ref_key:"copyRef",ref:r,class:"copy"},[G(S(h.copy)+" ",1),l("span",ft,[i(ae,{css:!1,name:"copyLineTransition",tag:"span",onEnter:g,onLeave:R},{default:y(()=>[(f(!0),w(H,null,M(h.copyLines,(I,x)=>re((f(),w("span",{key:`home-intro-${I}-${x}`,class:"line"},S(I),1)),[[ie,a(c)===x]])),128))]),_:1})])],512),i(a(Z),{ref_key:"linkRef",ref:p,class:"link",link:h.link},null,8,["link"])])]),_:1},512)]),_:1})]),_:1},8,["logo-theme","theme"])}}}),ht=O(dt,[["__scopeId","data-v-37730524"]]),vt={class:"content"},yt={class:"inner"},kt=C({__name:"HomeMasterPlan",props:{_uid:{},title:{},copy:{},index:{},link:{}},setup(e){const o=u(null),n=u(null),s=u(null),r=u(null),p=u(null);let c;const m=_=>{var d;_&&(c=L.timeline({paused:!0}),(d=o.value)!=null&&d.$el&&c.set(o.value.$el,{autoAlpha:1}),n.value&&c.call(n.value.reveal,[],"start"),s.value&&c.call(s.value.reveal,[],"start"),r.value&&c.call(r.value.reveal,[],"start+=0.2"),p.value&&c.call(p.value.reveal,[],"start+=0.55"),c.play())};return(_,d)=>{const t=P,v=F;return f(),B(v,{class:"home-master-plan","logo-theme":{backgroundTheme:a(T).Blue,iconTheme:a(T).OffWhite},theme:a(T).GreyLight},{default:y(()=>[i(t,{once:!0,"on-intersecting":m},{default:y(()=>[i(a(D),{ref_key:"containerRef",ref:o,class:"home-master-plan-container"},{default:y(()=>[l("div",vt,[i(a(N),{ref_key:"numberRevealRef",ref:n,class:"number",tag:"div",copy:`${_.index}.0`,manual:!0},null,8,["copy"]),l("div",yt,[i(a(N),{ref_key:"titleRevealRef",ref:s,class:"title",tag:"h2",copy:_.title,manual:!0},null,8,["copy"]),i(a(Q),{ref_key:"copyRevealRef",ref:r,class:"copy",tag:"p",copy:_.copy,opacity:.7,manual:!0},null,8,["copy"]),i(a(Z),{ref_key:"linkRef",ref:p,class:"link",icon:"ArrowDown",large:!0,link:_.link,theme:a(T).OffWhite},null,8,["link","theme"])])])]),_:1},512)]),_:1})]),_:1},8,["logo-theme","theme"])}}}),gt=O(kt,[["__scopeId","data-v-a3346ed5"]]),bt={class:"title-wrapper"},Rt={class:"title-inner"},$t={class:"images"},Tt={class:"content"},At={class:"copy"},It={class:"links-wrapper"},wt={class:"links-label"},xt={class:"links"},Lt=C({__name:"HomeProducts",props:{subtitle:{},title:{},copy:{},subCopy:{},links:{},images:{}},setup(e){const o=u(null),n=u(0),s=u(!1);let r;q(()=>{p()}),j(()=>{r&&r.kill()});const p=()=>{o.value&&(r=L.timeline({paused:!0}),r.fromTo(o.value,{y:-50},{y:50}))},c=({progress:t})=>{r&&r.progress(t)},m=t=>{s.value||(n.value=t)},_=async t=>{await be(),s.value=!0,L.fromTo(t,{autoAlpha:0,scale:1.15},{autoAlpha:1,duration:.4,delay:.3,ease:"power2.out",scale:1,onComplete:()=>{s.value=!1}})},d=(t,v)=>{L.fromTo(t,{autoAlpha:1,scale:1},{autoAlpha:0,duration:.4,ease:"power3.in",scale:.85,onComplete:v})};return(t,v)=>{const A=xe,g=N,R=ce,h=le,$=ue,k=D,b=P,I=F;return f(),B(I,{class:"home-products","logo-theme":{backgroundTheme:a(T).Blue,iconTheme:a(T).OffWhite},theme:a(T).OffWhite},{default:y(()=>[i(b,{"on-raf":c,options:{threshold:0}},{default:y(()=>[i(k,{class:"home-products-container"},{default:y(()=>[i(A,{class:"home-products-section-head",label:t.subtitle,theme:a(T).OffBlack},null,8,["label","theme"]),l("div",bt,[l("div",Rt,[i(g,{class:"title",tag:"h2",copy:t.title},null,8,["copy"])]),l("div",$t,[l("div",{ref_key:"imageWrapperRef",ref:o,class:"images-inner"},[i(ae,{name:"imageTransition",css:!1,onEnter:_,onLeave:d},{default:y(()=>[(f(!0),w(H,null,M(t.images,(x,W)=>re((f(),w("div",{key:x._uid,class:"image-wrapper"},[i(R,U({preload:!0,sizes:"xs:400px sm:450px md:500px lg:550px xl:600px xxl:700px"},x),null,16)])),[[ie,a(n)===W]])),128))]),_:1})],512)])]),l("div",Tt,[l("p",At,[i(a(Q),{tag:"span",copy:t.copy,opacity:.5},null,8,["copy"]),i(a(Q),{tag:"span",class:"sub-copy",copy:t.subCopy},null,8,["copy"])])]),l("div",It,[l("div",wt,S(t.links.label),1),l("div",xt,[(f(!0),w(H,null,M(t.links.items,(x,W)=>(f(),B($,{key:x._uid,to:x.href,onMouseenter:V=>m(W)},{default:y(()=>[i(h,{filled:a(n)===W,"has-hover":!0,label:x.label},null,8,["filled","label"])]),_:2},1032,["to","onMouseenter"]))),128))])])]),_:1})]),_:1})]),_:1},8,["logo-theme","theme"])}}}),St=O(Lt,[["__scopeId","data-v-d439d949"]]),Bt={class:"link-icon-wrapper"},Ct={class:"content"},Ht={class:"content-inner"},Mt={class:"category-label"},Ot={class:"categories"},Wt=C({__name:"HomeHero",props:{image:{},label:{},link:{},links:{},title:{}},setup(e){const{hooks:o}=Re(),n=u(null),s=u(null),r=u(null),p=u(null),c=u(null),m=u(null),_=u(null),d=u(null),t=u(null),v=u(null),A=u(null);let g;q(()=>{$()}),j(()=>{g&&g.kill()});const R=()=>{var k;if((k=n.value)!=null&&k.$el){const{bottom:b,top:I}=n.value.$el.getBoundingClientRect(),x=50;I<=x&&b>=x&&o.callHook("menu:setTheme",T.OffWhite)}},h=()=>{L.fromTo(t.value.$el,{x:0},{duration:.5,ease:"power3.inOut",x:25}),L.fromTo(v.value.$el,{autoAlpha:1,x:-25},{duration:.5,ease:"power3.inOut",x:0}),L.fromTo(A.value,{filter:"blur(0px)"},{duration:.4,filter:"blur(1px)"}),L.fromTo(A.value,{filter:"blur(1px)"},{duration:.4,delay:.4,filter:"blur(0px)"})},$=()=>{var k,b;g=L.timeline({paused:!0}),g.addLabel("start"),(k=s.value)!=null&&k.$el&&g.set(s.value.$el,{autoAlpha:1}),r.value&&g.fromTo(r.value,{autoAlpha:0,y:-50},{autoAlpha:1,duration:1.2,ease:"power3.out",y:0},"start+=1.3"),c.value&&g.fromTo(c.value,{autoAlpha:0,filter:"blur(10px)",scale:1.1},{autoAlpha:1,duration:2,ease:"power3.out",filter:"blur(0px)",scale:1},"start"),(b=p.value)!=null&&b.$el&&g.fromTo(p.value.$el,{autoAlpha:0,filter:"blur(10px)"},{autoAlpha:1,duration:1.5,filter:"blur(0px)"},"start+=0.1"),_.value&&g.call(_.value.reveal,[],"start+=0.4"),m.value&&g.fromTo(m.value,{autoAlpha:0},{autoAlpha:1,duration:1.1},"start+=1.2"),d.value&&g.call(d.value.reveal,[],"start+=1.3"),g.play()};return(k,b)=>{const I=ue,x=le,W=ce;return f(),B(a(P),{ref_key:"elRef",ref:n,class:"home-hero",tag:"header","on-raf":R,options:{threshold:0}},{default:y(()=>[i(a(D),{ref_key:"containerRef",ref:s,class:"home-hero-container"},{default:y(()=>[l("div",{ref_key:"headRef",ref:r,class:"head"},[i(I,{class:"link",to:k.link.href,onMouseenter:h},{default:y(()=>[l("span",{ref_key:"linkLabelRef",ref:A},S(k.link.label),513),l("span",Bt,[i(a(te),{ref_key:"linkFirstIconRef",ref:t,class:"link-icon"},null,512),i(a(te),{ref_key:"linkSecondIconRef",ref:v,"aria-hidden":"true",class:"link-icon"},null,512)])]),_:1},8,["to"])],512),l("div",Ct,[l("div",Ht,[i(a(me),{ref_key:"logoRef",ref:p,class:"logo"},null,512),i(a(N),{ref_key:"titleRevealRef",ref:_,class:"title",tag:"h1",copy:k.title,manual:!0},null,8,["copy"]),l("div",{ref_key:"categoriesWrapperRef",ref:m,class:"category-wrapper"},[l("span",Mt,S(k.label),1),l("div",Ot,[(f(!0),w(H,null,M(k.links,V=>(f(),B(I,{key:V._uid,to:V.href},{default:y(()=>[i(x,{"has-hover":!0,label:V.label},null,8,["label"])]),_:2},1032,["to"]))),128))])],512)]),i(a(fe),{ref_key:"scrollIndicatorRef",ref:d,class:"home-hero-scroll-indicator"},null,512)])]),_:1},512),l("div",{ref_key:"imageWrapperRef",ref:c,class:"image-wrapper"},[i(W,U({preload:!0,sizes:"xs:768px sm:900px md:1000px lg:1100px xl:1300px xxl:1600px"},k.image),null,16)],512)]),_:1},512)}}}),Pt=O(Wt,[["__scopeId","data-v-e5953a1b"]]),Ut=C({__name:"index",props:{siteSettings:{}},async setup(e){let o,n;const s=([o,n]=$e(()=>Ae(Ie.Homepage,Oe,{resolve_relations:["homepage_hero.categories","seo"]})),o=await o,n(),o),r=Te();q(()=>{r.setPageBackground(T.White)});const p=new Map([["home_about",Fe],["home_company_details",ut],["home_intro",ht],["home_master_plan",gt],["home_products",St]]);return de(s.seo),(c,m)=>{const _=Pt,d=ye,t=he,v=ve;return f(),w("div",null,[i(_,J(K(a(s).hero)),null,16),i(t,null,{default:y(()=>[(f(!0),w(H,null,M(a(s).blocks,A=>(f(),B(we(a(p).get(A.component)),U({key:A._uid},A.data),null,16))),128)),i(d,J(K(c.siteSettings.footer.textBlock)),null,16)]),_:1}),i(v,J(K(c.siteSettings.footer)),null,16)])}}});export{Ut as default};
