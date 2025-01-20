import{_ as u,C as V}from"./common-D9Uyyynd.js";import{L as p}from"./LoginInput-B4g-LYdb.js";import{T as m}from"./Tooltip-QXFJsAbi.js";import{B as c}from"./Base-BkRnk7Bb.js";import"./vendor-BxVxoXnP.js";const N={name:"PasswordLogin",extends:c,components:{Check:V,Tooltip:m,LoginInput:p},data(){return{phone:"",password:"",code:"",notice:""}},computed:{disabled(){return!(this.phone&&this.password)}},created(){},methods:{async login(){await this.check()&&(this.loading=!0)}}},g={class:"PasswordLogin"},v={class:"content"},k={class:"left"},C={class:"right"},f={key:0,class:"notice"},w={class:"options"};function E(o,e,y,T,n,s){const r=Vue.resolveComponent("BaseHeader"),l=Vue.resolveComponent("LoginInput"),d=Vue.resolveComponent("Tooltip"),i=Vue.resolveComponent("Check"),a=Vue.resolveComponent("dy-button");return Vue.openBlock(),Vue.createElementBlock("div",g,[Vue.createVNode(r,{mode:"light",backMode:"dark",backImg:"back"},{right:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"f14",onClick:e[0]||(e[0]=t=>o.$router.push("/login/help"))},"帮助与设置")]),_:1}),Vue.createElementVNode("div",v,[e[12]||(e[12]=Vue.createElementVNode("div",{class:"desc"},[Vue.createElementVNode("div",{class:"title"},"手机号密码登录")],-1)),Vue.createVNode(l,{autofocus:"",type:"phone",modelValue:n.phone,"onUpdate:modelValue":e[1]||(e[1]=t=>n.phone=t),placeholder:"请输入手机号"},null,8,["modelValue"]),Vue.createVNode(l,{autofocus:"",class:"mt1r",type:"password",modelValue:n.password,"onUpdate:modelValue":e[2]||(e[2]=t=>n.password=t),placeholder:"请输入密码"},null,8,["modelValue"]),Vue.createElementVNode("div",{class:Vue.normalizeClass(["protocol",o.showAnim?"anim-bounce":""])},[Vue.createVNode(d,{style:{top:"-150%",left:"-10rem"},modelValue:o.showTooltip,"onUpdate:modelValue":e[3]||(e[3]=t=>o.showTooltip=t)},null,8,["modelValue"]),Vue.createElementVNode("div",k,[Vue.createVNode(i,{modelValue:o.isAgree,"onUpdate:modelValue":e[4]||(e[4]=t=>o.isAgree=t)},null,8,["modelValue"])]),Vue.createElementVNode("div",C,[e[8]||(e[8]=Vue.createTextVNode(" 已阅读并同意 ")),Vue.createElementVNode("span",{class:"link",onClick:e[5]||(e[5]=t=>o.$router.push("/service-protocol",{type:"“抖音”用户服务协议"}))},"用户协议"),e[9]||(e[9]=Vue.createTextVNode(" 和 ")),Vue.createElementVNode("span",{class:"link",onClick:e[6]||(e[6]=t=>o.$router.push("/service-protocol",{type:"“抖音”隐私政策"}))},"隐私政策"),e[10]||(e[10]=Vue.createTextVNode(" ，同时登录并使用抖音火山版（原“火山小视频”）和抖音 "))])],2),n.notice?(Vue.openBlock(),Vue.createElementBlock("div",f,Vue.toDisplayString(n.notice),1)):Vue.createCommentVNode("",!0),Vue.createVNode(a,{type:"primary",loading:o.loading,active:!1,disabled:s.disabled,onClick:s.login},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(o.loading?"登录中":"登录"),1)]),_:1},8,["loading","disabled","onClick"]),Vue.createElementVNode("div",w,[Vue.createElementVNode("span",null,[e[11]||(e[11]=Vue.createTextVNode(" 忘记了？")),Vue.createElementVNode("span",{class:"link",onClick:e[7]||(e[7]=t=>o.$router.push("/login/retrieve-password"))},"找回密码")])])])])}const U=u(N,[["render",E],["__scopeId","data-v-249d4909"]]);export{U as default};
