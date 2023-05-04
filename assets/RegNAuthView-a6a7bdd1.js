import{_ as z,u as G,a as H,b as J,o as q,r as s,s as w,c as R,d,e as h,f as t,t as o,g,h as a,i as u,j as I,w as n,k as M,F as K,l as E}from"./index-58c829e1.js";const O={key:0,class:"step s0"},Q={key:1,class:"step s1"},X={action:""},Y={class:"controls"},Z={key:2,class:"step s2"},x={action:""},ee={class:"input"},te={class:"input"},le={class:"controls"},ae={key:3,class:"auth"},se={action:""},oe={class:"controls"},ne={__name:"RegNAuthView",setup(ie){const f=G(),{locale:b,t:v}=H({}),S=J();q(()=>{localStorage.getItem("locale")?(b.value=localStorage.getItem("locale"),S.value=v("titles.place")):(b.value=navigator.language.slice(0,2),S.value=v("titles.place"),localStorage.setItem("locale",b.value))});const C=s(!0),r=s(!1),_=s(!1),y=s(!1),k=s(null),$=s(null),B=s(null),N=s(null),A=s(null),L=s(null),c=s(null),i=s(null);q(()=>{D().then(e=>{e.session!=null?f.push("mobile"):setTimeout(()=>{C.value=!1,r.value=!0},3e3)})});async function D(){const{data:e,error:l}=await w.auth.getSession();return e}function F(){y.value=!1,r.value=!0}function T(){y.value=!0,r.value=!1,_.value=!1}function U(){k.value.input.value.length!=0&&$.value.input.value.length!=0&&(localStorage.setItem("name",k.value.input.value),localStorage.setItem("bday",$.value.input.value),r.value=!1,_.value=!0)}function j(e,l){return Math.floor(Math.random()*(l-e+1)+e)}async function P(){const{data:e,error:l}=await w.auth.signUp({email:B.value.input.value,password:A.value.input.value,options:{data:{name:localStorage.getItem("name"),bday:localStorage.getItem("bday"),language:localStorage.getItem("locale"),profileImageNumber:j(1,10)}}});e.user!=null?(f.push("mobile"),localStorage.removeItem("name"),localStorage.removeItem("bday")):l=="AuthApiError: User already registered"&&(c.value.textContent=v("mobile.errors.user_exist"),setTimeout(()=>{c.value.classList.add("anim")},5e3),setTimeout(()=>{c.value.classList.add("hide"),c.value.classList.remove("anim")},6e3))}async function W(){const{data:e,error:l}=await w.auth.signInWithPassword({email:N.value.input.value,password:L.value.input.value});e.user!=null?f.push("mobile"):(i.value.classList.remove("hide"),l=="AuthApiError: Invalid login credentials"&&(i.value.textContent=v("mobile.errors.invalid_login"),setTimeout(()=>{i.value.classList.add("anim")},5e3),setTimeout(()=>{i.value.classList.add("hide"),i.value.classList.remove("anim")},6e3)))}return(e,l)=>{const V=R("router-link"),p=R("i18n-t");return d(),h(K,null,[C.value?(d(),h("section",O,[t("p",null,o(e.$t("mobile.hello")),1)])):g("",!0),r.value?(d(),h("section",Q,[t("h1",null,o(e.$t("mobile.letsmeet")),1),t("form",X,[a(u,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.name"),ref_key:"name",ref:k,type:"text",required:""},null,8,["placeholder"]),a(u,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.bday"),ref_key:"bday",ref:$,type:"text",isDate:"",required:""},null,8,["placeholder"]),t("div",Y,[a(I,{value:e.$t("mobile.inputs.buttons.next"),onClick:l[0]||(l[0]=m=>U()),width:"222",height:"54"},null,8,["value"]),t("section",null,[a(p,{keypath:"mobile.misc.agreement.1",tag:"p",scope:"global"},{default:n(()=>[a(V,{to:"/terms"},{default:n(()=>[E(o(e.$t("mobile.misc.agreement.2")),1)]),_:1})]),_:1}),a(p,{keypath:"mobile.misc.account.1",tag:"p",scope:"global"},{default:n(()=>[t("span",{onClick:l[1]||(l[1]=m=>T())},o(e.$t("mobile.misc.account.2")),1)]),_:1})])])])])):g("",!0),_.value?(d(),h("section",Z,[t("h1",null,o(e.$t("mobile.few_more")),1),t("form",x,[t("div",ee,[a(u,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.email"),ref_key:"email_reg",ref:B,type:"email",required:""},null,8,["placeholder"]),t("span",null,o(e.$t("mobile.inputs.hints.mail")),1)]),t("div",te,[a(u,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.password"),ref_key:"pass_reg",ref:A,type:"password",required:""},null,8,["placeholder"]),t("span",null,o(e.$t("mobile.inputs.hints.mail")),1),t("span",{class:"error",ref_key:"error_span_reg",ref:c},null,512)]),t("div",le,[a(I,{value:e.$t("mobile.inputs.buttons.complete"),onClick:l[2]||(l[2]=M(m=>P(),["prevent"])),width:"222",height:"54"},null,8,["value"]),t("section",null,[a(p,{keypath:"mobile.misc.agreement.1",tag:"p",scope:"global"},{default:n(()=>[a(V,{to:"/terms"},{default:n(()=>[E(o(e.$t("mobile.misc.agreement.2")),1)]),_:1})]),_:1}),a(p,{keypath:"mobile.misc.account.1",tag:"p",scope:"global"},{default:n(()=>[t("span",{onClick:l[3]||(l[3]=m=>T())},o(e.$t("mobile.misc.account.2")),1)]),_:1})])])])])):g("",!0),y.value?(d(),h("section",ae,[t("h1",null,o(e.$t("mobile.auth")),1),t("form",se,[a(u,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.email"),ref_key:"email_auth",ref:N,type:"email",required:""},null,8,["placeholder"]),a(u,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.password"),ref_key:"pass_auth",ref:L,type:"password",required:""},null,8,["placeholder"]),t("span",{class:"error",ref_key:"error_span_auth",ref:i},null,512),t("div",oe,[a(I,{value:e.$t("mobile.inputs.buttons.signin"),onClick:l[4]||(l[4]=M(m=>W(),["prevent"])),width:"222",height:"54"},null,8,["value"]),t("section",null,[a(p,{keypath:"mobile.misc.account.3",scope:"global",tag:"p"},{default:n(()=>[t("span",{onClick:l[5]||(l[5]=m=>F())},o(e.$t("mobile.misc.account.4")),1)]),_:1})])])])])):g("",!0)],64)}}},re=z(ne,[["__scopeId","data-v-bc0997a0"]]);export{re as default};
