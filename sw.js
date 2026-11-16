var C="parkpilot-v1.7.0",F=["./","./index.html","./firebase-config.js","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-maskable-512.png"];
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf("parkpilot-")===0&&x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
/* Sofort aus dem Speicher starten (offline spielbar), im Hintergrund aktualisieren */
self.addEventListener("fetch",function(e){if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
 e.respondWith(caches.open(C).then(function(c){return c.match(e.request,{ignoreSearch:true}).then(function(hit){var net=fetch(e.request).then(function(r){if(r&&r.ok)c.put(e.request,r.clone());return r}).catch(function(){return hit||c.match("./index.html")});return hit||net})}))});
