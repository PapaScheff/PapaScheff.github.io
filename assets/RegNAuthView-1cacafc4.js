import{_ as G,u as H,a as J,b as K,o as M,r as o,s as g,c as R,d as h,e as v,f as t,t as s,g as _,h as a,i as r,j as C,w as n,k as E,F as O,l as F}from"./index-cfb685aa.js";const Q={key:0,class:"step s0"},X={key:1,class:"step s1"},Y={action:""},Z={class:"controls"},x={key:2,class:"step s2"},ee={action:""},te={class:"input"},le={class:"input"},ae={class:"controls"},oe={key:3,class:"auth"},se={action:""},ne={class:"controls"},ie={__name:"RegNAuthView",setup(re){const b=H(),{locale:y,t:f}=J({}),B=K();M(()=>{localStorage.getItem("locale")?(y.value=localStorage.getItem("locale"),B.value=f("titles.place")):(y.value=navigator.language.slice(0,2),B.value=f("titles.place"),localStorage.setItem("locale",y.value))});const N=o(!0),u=o(!1),k=o(!1),$=o(!1),w=o(null),I=o(null),S=o(null),A=o(null),L=o(null),T=o(null),c=o(null),i=o(null);M(()=>{D().then(e=>{e.session!=null?b.push("mobile"):setTimeout(()=>{N.value=!1,u.value=!0},3e3)})});async function D(){const{data:e,error:l}=await g.auth.getSession();return e}function U(){$.value=!1,u.value=!0}function V(){$.value=!0,u.value=!1,k.value=!1}function j(){w.value.input.value.length!=0&&I.value.input.value.length!=0&&(localStorage.setItem("name",w.value.input.value),localStorage.setItem("bday",I.value.input.value),u.value=!1,k.value=!0)}function P(e,l){return Math.floor(Math.random()*(l-e+1)+e)}async function q(){const{data:e,error:l}=await g.from("profile").select("friend_code");let p=Math.floor(Math.random()*(1e7-0+1)+0);if(Number(e[0].friend_code)!=p)return p;q()}async function W(){const{data:e,error:l}=await g.auth.signUp({email:S.value.input.value,password:L.value.input.value,options:{data:{name:localStorage.getItem("name"),bday:localStorage.getItem("bday"),language:localStorage.getItem("locale"),profile_image_number:P(1,10),friend_code:q(),email:S.value.input.value}}});e.user!=null?(b.push("mobile"),localStorage.removeItem("name"),localStorage.removeItem("bday")):l=="AuthApiError: User already registered"&&(c.value.textContent=f("mobile.errors.user_exist"),setTimeout(()=>{c.value.classList.add("anim")},5e3),setTimeout(()=>{c.value.classList.add("hide"),c.value.classList.remove("anim")},6e3))}async function z(){const{data:e,error:l}=await g.auth.signInWithPassword({email:A.value.input.value,password:T.value.input.value});e.user!=null?b.push("mobile"):(i.value.classList.remove("hide"),l=="AuthApiError: Invalid login credentials"&&(i.value.textContent=f("mobile.errors.invalid_login"),setTimeout(()=>{i.value.classList.add("anim")},5e3),setTimeout(()=>{i.value.classList.add("hide"),i.value.classList.remove("anim")},6e3)))}return(e,l)=>{const p=R("router-link"),m=R("i18n-t");return h(),v(O,null,[N.value?(h(),v("section",Q,[t("p",null,s(e.$t("mobile.hello")),1)])):_("",!0),u.value?(h(),v("section",X,[t("h1",null,s(e.$t("mobile.letsmeet")),1),t("form",Y,[a(r,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.name"),ref_key:"name",ref:w,type:"text",required:""},null,8,["placeholder"]),a(r,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.bday"),ref_key:"bday",ref:I,type:"text",isDate:"",required:""},null,8,["placeholder"]),t("div",Z,[a(C,{value:e.$t("mobile.inputs.buttons.next"),onClick:l[0]||(l[0]=d=>j()),width:"222",height:"54"},null,8,["value"]),t("section",null,[a(m,{keypath:"mobile.misc.agreement.1",tag:"p",scope:"global"},{default:n(()=>[a(p,{to:"/terms"},{default:n(()=>[F(s(e.$t("mobile.misc.agreement.2")),1)]),_:1})]),_:1}),a(m,{keypath:"mobile.misc.account.1",tag:"p",scope:"global"},{default:n(()=>[t("span",{onClick:l[1]||(l[1]=d=>V())},s(e.$t("mobile.misc.account.2")),1)]),_:1})])])])])):_("",!0),k.value?(h(),v("section",x,[t("h1",null,s(e.$t("mobile.few_more")),1),t("form",ee,[t("div",te,[a(r,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.email"),ref_key:"email_reg",ref:S,type:"email",required:""},null,8,["placeholder"]),t("span",null,s(e.$t("mobile.inputs.hints.mail")),1)]),t("div",le,[a(r,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.password"),ref_key:"pass_reg",ref:L,type:"password",required:""},null,8,["placeholder"]),t("span",null,s(e.$t("mobile.inputs.hints.pass")),1),t("span",{class:"error",ref_key:"error_span_reg",ref:c},null,512)]),t("div",ae,[a(C,{value:e.$t("mobile.inputs.buttons.complete"),onClick:l[2]||(l[2]=E(d=>W(),["prevent"])),width:"222",height:"54"},null,8,["value"]),t("section",null,[a(m,{keypath:"mobile.misc.agreement.1",tag:"p",scope:"global"},{default:n(()=>[a(p,{to:"/terms"},{default:n(()=>[F(s(e.$t("mobile.misc.agreement.2")),1)]),_:1})]),_:1}),a(m,{keypath:"mobile.misc.account.1",tag:"p",scope:"global"},{default:n(()=>[t("span",{onClick:l[3]||(l[3]=d=>V())},s(e.$t("mobile.misc.account.2")),1)]),_:1})])])])])):_("",!0),$.value?(h(),v("section",oe,[t("h1",null,s(e.$t("mobile.auth")),1),t("form",se,[a(r,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.email"),ref_key:"email_auth",ref:A,type:"email",required:""},null,8,["placeholder"]),a(r,{borderBottom:"",placeholder:e.$t("mobile.inputs.placeholders.password"),ref_key:"pass_auth",ref:T,type:"password",required:""},null,8,["placeholder"]),t("span",{class:"error",ref_key:"error_span_auth",ref:i},null,512),t("div",ne,[a(C,{value:e.$t("mobile.inputs.buttons.signin"),onClick:l[4]||(l[4]=E(d=>z(),["prevent"])),width:"222",height:"54"},null,8,["value"]),t("section",null,[a(m,{keypath:"mobile.misc.account.3",scope:"global",tag:"p"},{default:n(()=>[t("span",{onClick:l[5]||(l[5]=d=>U())},s(e.$t("mobile.misc.account.4")),1)]),_:1})])])])])):_("",!0)],64)}}},ce=G(ie,[["__scopeId","data-v-529888a2"]]);export{ce as default};
