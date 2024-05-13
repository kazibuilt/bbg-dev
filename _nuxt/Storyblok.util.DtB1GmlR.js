const n=s=>(s==null?void 0:s.split(`
`).filter(p=>!!p).map(p=>`<span>${p}</span>`).join(""))??"",i=s=>(s==null?void 0:s.replaceAll("{{","<span>").replaceAll("}}","</span>"))??"";export{i as h,n as s};
