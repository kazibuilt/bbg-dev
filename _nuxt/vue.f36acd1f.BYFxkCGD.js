import{ao as o,r as u,$ as f,w as d,ag as v,ap as l,aq as i,g as h,ar as p}from"./entry.BWB0ivIq.js";function w(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:p(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),h()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{w as u};