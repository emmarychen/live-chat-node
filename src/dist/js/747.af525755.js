"use strict";(self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[]).push([[747],{5747:function(o,t,n){n.r(t),n.d(t,{default:function(){return F}});var e=n(6252),a=n(3577),s=n(9963);const l=o=>((0,e.dD)("data-v-211f1ac0"),o=o(),(0,e.Cn)(),o),r={class:"d-flex text-center h-100"},i=l((()=>(0,e._)("p",{class:"mb-5 ft-30 login-ttl"},"Sign In",-1))),c={class:"mb-3"},u={for:"account"},m={class:"input-area"},d={class:"err-msg ft-12 text-color-red"},g={class:"mb-3"},b={for:"pwd"},f={class:"input-area"},p={class:"err-msg ft-12 text-color-red"},w=["disabled"],_=l((()=>(0,e._)("i",{class:"btn-icon sns-icon-google"},null,-1)));function v(o,t,n,l,v,S){const h=(0,e.up)("router-link"),k=(0,e.up)("el-input");return(0,e.wg)(),(0,e.iD)("div",r,[(0,e.Wm)(h,{to:{name:"Register"},class:"register-link"},{default:(0,e.w5)((()=>[(0,e.Uk)((0,a.zw)(o.$t("common.register")),1)])),_:1}),(0,e._)("form",{class:"login-form",onSubmit:t[3]||(t[3]=(0,s.iM)(((...t)=>o.onSubmit&&o.onSubmit(...t)),["prevent"]))},[i,(0,e._)("div",c,[(0,e._)("label",u,(0,a.zw)(o.$t("form.account")),1)]),(0,e._)("div",m,[(0,e.Wm)(k,{modelValue:o.form.account,"onUpdate:modelValue":t[0]||(t[0]=t=>o.form.account=t),id:"account"},null,8,["modelValue"]),(0,e._)("p",d,(0,a.zw)(o.errors.account),1)]),(0,e._)("div",g,[(0,e._)("label",b,(0,a.zw)(o.$t("form.password")),1)]),(0,e._)("div",f,[(0,e.Wm)(k,{modelValue:o.form.password,"onUpdate:modelValue":t[1]||(t[1]=t=>o.form.password=t),id:"pwd"},null,8,["modelValue"]),(0,e._)("p",p,(0,a.zw)(o.errors.password),1)]),(0,e._)("button",{type:"submit",class:"login-btn submit",disabled:o.isSubmitting},(0,a.zw)(o.$t("common.login")),9,w),(0,e._)("button",{class:"login-btn google",onClick:t[2]||(t[2]=(...t)=>o.googleLogin&&o.googleLogin(...t))},[_,(0,e._)("div",null,(0,a.zw)(o.$t("form.login_with_google")),1)])],32)])}var S=n(2262),h=n(2119),k=n(9499),z=n(1174),C=n(7258),V=n(2954),y=n(4231),$=n(9150);function Z(o={}){const{t:t}=(0,$.QT)(),n=(0,e.Fl)((()=>{const o={account:(0,y.Z_)().required().label(t("form.account")),password:(0,y.Z_)().required().label(t("form.password"))};return(0,y.Ry)(o)})),a={account:"",password:""},{values:s,errors:l,handleSubmit:r,isSubmitting:i,resetForm:c}=(0,V.cI)({initialValues:a,validationSchema:n});Object.keys(a).every((o=>(0,V.U$)(o)));const u=r((async t=>{const n=await z.X.login({account:t.account,password:t.password});o.onSubmitCallback&&o.onSubmitCallback(n)}));return{form:s,errors:l,onSubmit:u,handleSubmit:r,isSubmitting:i,resetForm:c}}var x=Z,L=(0,e.aZ)({name:"Login",setup(){const o=(0,C.Z)(),t=(0,h.tv)(),n=(0,S.iH)(),{form:e,errors:a,isSubmitting:s,onSubmit:l}=x({onSubmitCallback:n=>{n&&(o.login(n),t.push({name:"Home"}))}});async function r(){await(0,k.DJ)().then((o=>{n.value=o}));const e=await z.X.googleAuth(n.value,"login");e&&(o.login(e),t.push({name:"Home"}))}return{form:e,errors:a,isSubmitting:s,onSubmit:l,googleLogin:r}}}),U=n(3744);const D=(0,U.Z)(L,[["render",v],["__scopeId","data-v-211f1ac0"]]);var F=D}}]);