const r=(r,e={})=>{let n={},t=(r.innerHTML||"").trim();if(t.length>0)try{n=new Function(t)(),r.innerHTML=""}catch(r){console.error("Error parsing the JS to get the properties."),console.error(t)}for(let r in e)null==n[r]&&(n[r]=e[r]);return n};export{r as a};