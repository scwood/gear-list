(window["webpackJsonpgear-list"]=window["webpackJsonpgear-list"]||[]).push([[0],{10:function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),i=o(2),r=o.n(i);function c(e){var n=e.section,o=e.items;return a.a.createElement("div",{className:"fl w-100"},a.a.createElement("div",{className:"fl w-100"},a.a.createElement("h1",null,n.name)),o.map((function(e){return a.a.createElement("div",{className:"fl pa2 w-100 bb",key:e.id},a.a.createElement("div",{className:"fl w-30"},e.name),a.a.createElement("div",{className:"fl w-40"},e.description),a.a.createElement("div",{className:"fl w-10"},e.quantity),a.a.createElement("div",{className:"fl w-10"},e.weight),a.a.createElement("div",{className:"fl w-10"},e.unit))})))}var s=o(3),l=o.n(s).a.parse('Item Name,Category,desc,qty,weight,unit\nV1 Atom Packs Atom+,Pack,pack,1,24,ounce\nTrash compactor bag,Pack,liner,1,0.7,ounce\nAtom Packs Atom+,Pack,pack minus hip belt and frame,0,19,ounce\nTarpTent Stratospire 2,Shelter,"inner, fly, stuff sack, stakes",1,44.6,ounce\nMonoprice Carbon Cork Trekking poles,Shelter,trekking poles / tent poles,1,15.2,ounce\nKatabatic Alsek,Sleep,quilt,1,24,ounce\nKelty Cosmic down 20,Sleep,sleeping bag,0,45,ounce\nThermarest Xlite,Sleep,sleeping pad,1,12,ounce\nAeros UL pillow,Sleep,pillow,1,2.9,ounce\nMountain Hardware Canyon Shirt,Clothes,button up shirt,1,0,ounce\nNike Pro Running Shorts,Clothes,shorts,1,5.1,ounce\nInjinji running socks,Clothes,socks,2,2,ounce\nAltra Lone Peak,Clothes,shoes,1,0,ounce\nAltra Gaitors,Clothes,gaitors,1,0,pound\nFrogg Toggs,Clothes,rain jacket,1,5.6,ounce\nAliexpress Down jacket,Clothes,down jacket,1,5,ounce\nDance pants,Clothes,wind pant,1,3.7,ounce\nGeneric Beanie,Clothes,warm hat,1,1.6,ounce\nCanon g7xii,Electronics,camera,1,11.2,ounce\niPhone 8 w/case,Electronics,"phone, camera, gps",1,7.9,ounce\nApple Earpods,Electronics,earbuds,1,0.5,ounce\nFoxelli headlamp,Electronics,headlamp,1,2.4,ounce\nAnker 10000,Electronics,powerbank,1,6.3,ounce\nLightning Cable,Electronics,to charge phone,1,0.7,ounce\nUSB2 cable,Electronics,to charge headlamp / powerbank / camera,1,0,ounce\nZiplock Bag,Electronics,to hold the stuff,1,0.2,ounce\nZpacks Food Bag,Food and Water,bag for food,1,3.3,ounce\nSea to summit long handled spoon,Food and Water,utensil,1,0.5,ounce\nTalenti Gelato Container,Food and Water,cold soaking container,1,0,pound\nSmartwater 1L,Food and Water,water bottle,2,37.5,gram\nKatadyn BeFree,Food and Water,water filter,1,2.2,ounce\nEVA foam pad,Misc,sit pad,1,1,ounce\nHillsound Crampon Ultra,Misc,microspikes,0,16,ounce\nBV500,Misc,bear can,0,41,ounce',{header:!0}),u={items:{},sections:{},sectionOrder:[]},d={};l.data.forEach((function(e,n){var o="i"+n;u.items[o]={name:e["Item Name"],description:e.desc,quantity:e.qty,weight:e.weight,unit:e.unit};var t,a=e.Category;a in d?t=d[a]:(t="s"+Object.keys(d).length,d[a]=t,u.sectionOrder.push(t),u.sections[t]={name:a,itemIds:[]}),u.sections[t].itemIds.push(o)})),console.log(u);var m=u;function p(){return a.a.createElement("div",null,m.sectionOrder.map((function(e){var n=m.sections[e],o=n.itemIds.map((function(e){return m.items[e]}));return a.a.createElement(c,{key:e,section:n,items:o})})))}o(9);var h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement((function(){return a.a.createElement("section",{className:"sans-serif mw8 center black-80 ph3"},a.a.createElement(p,null))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gear-list",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/gear-list","/service-worker.js");h?(!function(e,n){fetch(e).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(n,e)}))}}()},4:function(e,n,o){e.exports=o(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.97b8d2c6.chunk.js.map