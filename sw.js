if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const o=e=>i(e,c),f={module:{uri:c},exports:n,require:o};s[c]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2a1e9d3f410500c5c6656e19351fce91"},{url:"android-chrome-192x192.png",revision:"6f9a61d206ff85cb92a8e6142e357558"},{url:"android-chrome-512x512.png",revision:"ca176230aa5be1f4338cb8b456a803b8"},{url:"assets/graphicElements/chevron_down.svg",revision:"934b96c441706627bbb984f81b898d9d"},{url:"assets/index-54677fec.css",revision:null},{url:"assets/index-acdc878d.js",revision:null},{url:"assets/logo.png",revision:"423e41d0ab5fea22260e93e8a11f056c"},{url:"assets/og/thumbnail.png",revision:"799a29f3eea9bb8b6ba6f72bbb649e8c"},{url:"assets/og/vk_thumbnail.png",revision:"8e6e9f1cdd840e3e30e448665c6f2c71"},{url:"assets/profileImages/image1.svg",revision:"f1879b48fc4a3b0861f755cc0b2755b9"},{url:"assets/profileImages/image10.svg",revision:"3eeb876bfe3aeecb962d829b9e1c169d"},{url:"assets/profileImages/image11.svg",revision:"e9fc3d3d51bac8839f9d525caed7b572"},{url:"assets/profileImages/image2.svg",revision:"fcfb431112630271eafff390567a708d"},{url:"assets/profileImages/image3.svg",revision:"9635f3cf2ba3e2eb7e7b423af54428ed"},{url:"assets/profileImages/image4.svg",revision:"11ce3bee48966113bb17cf63f1a37120"},{url:"assets/profileImages/image5.svg",revision:"064f7301cad0d93cf854137f5b423517"},{url:"assets/profileImages/image6.svg",revision:"59358df4facd1a0e0259c87819d08cec"},{url:"assets/profileImages/image7.svg",revision:"81b69368acaf7ad70b4564c027dbe386"},{url:"assets/profileImages/image8.svg",revision:"f3485ed926b0d9fee73c4dd03a9a638c"},{url:"assets/profileImages/image9.svg",revision:"29c416fc87cf1ee672b0ec4888e34fca"},{url:"assets/RegNAuthView-bfd26217.js",revision:null},{url:"assets/RegNAuthView-ca0782ed.css",revision:null},{url:"assets/settingsIcons/achievements.svg",revision:"943f82fa77ad85c3c31e7eb3a062101f"},{url:"assets/settingsIcons/edit.svg",revision:"3d36602efdc07dec7227f9cf89417fc5"},{url:"assets/settingsIcons/favourites.svg",revision:"880d99a8a0c03caf72326d49222dfd05"},{url:"assets/settingsIcons/friends.svg",revision:"81076a06ac6ab8d853da925c18a9b76d"},{url:"assets/settingsIcons/history.svg",revision:"2ad4a2c5c5bcd4df6d112c62ca48a241"},{url:"assets/settingsIcons/language.svg",revision:"29a83b15d02532b8f0f426807ab29652"},{url:"assets/settingsIcons/tos.svg",revision:"b9e4b157eb498e46d6d8a4f3232a4f1e"},{url:"assets/socials/telegram.svg",revision:"10f5aa9420ed7115c41174436d1ebfd1"},{url:"assets/socials/tiktok.svg",revision:"427cb9bac93785e61813ce074a724444"},{url:"assets/socials/vk.svg",revision:"d1e0aab39d73116592453e087f4548f4"},{url:"favicon.ico",revision:"d32f6bda63b44f950795c0e74b184147"},{url:"img/icons/android-chrome-192x192.png",revision:"6f9a61d206ff85cb92a8e6142e357558"},{url:"img/icons/android-chrome-512x512.png",revision:"ca176230aa5be1f4338cb8b456a803b8"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"6f9a61d206ff85cb92a8e6142e357558"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"ca176230aa5be1f4338cb8b456a803b8"},{url:"img/icons/apple-touch-icon.png",revision:"6f9a61d206ff85cb92a8e6142e357558"},{url:"img/icons/favicon-32x32.png",revision:"ae09e2409339b12b8468169da1656908"},{url:"img/icons/maskable_icon_x128.png",revision:"36cced83b1a1c5933525e05ce22d73fe"},{url:"img/icons/maskable_icon_x384.png",revision:"0795e2ff26a2bda834637a2def46c7fa"},{url:"img/icons/maskable_icon_x72.png",revision:"01c8d9c40b3f018a43f63a65cea7ec88"},{url:"img/icons/maskable_icon_x96.png",revision:"26976ffddc03bb025d67d3306645c8ff"},{url:"index.html",revision:"c18fecfd1e4f2795015f4b6eda67c597"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"d32f6bda63b44f950795c0e74b184147"},{url:"android-chrome-192x192.png",revision:"6f9a61d206ff85cb92a8e6142e357558"},{url:"android-chrome-512x512.png",revision:"ca176230aa5be1f4338cb8b456a803b8"},{url:"manifest.webmanifest",revision:"3cfd45e1a67c73e8d5c381b2c6087d24"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
