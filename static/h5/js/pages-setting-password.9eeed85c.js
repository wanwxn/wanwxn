import{d as s,u as a,c as e,e as o,w as t,f as n,h as r,m as i,t as u,k as d,l,_ as p}from"./index.cc005d8f.js";import{V as f}from"./vir-form-item.a1ccdef8.js";import{a as c,v as m}from"./login.a0545c0b.js";const w=s({name:"SettingPassword"}),v=p(s({...w,setup(s){const p=a();function w(s){return"OK"!==c(m(s))}return(s,a)=>{const c=l("v-uni-input"),m=l("v-uni-button"),v=l("v-uni-view"),b=l("v-uni-form"),g=l("vir-page");return e(),o(g,{class:"vir-setting-password-page"},{default:t((()=>[n(b,{class:"vir-setting-password-form",onSubmit:a[0]||(a[0]=s=>function({value:s}={}){if(!w(s.password0)&&!w(s.password1)&&!w(s.password2))return i.openLoading((()=>u("/manage/personnel/myInfo/password.json",s).then((s=>p.logout(s).then((()=>d("/pages/index")))))))}(s.detail))},{default:t((()=>[n(f,{label:"旧密码"},{default:t((()=>[n(c,{class:"uni-input",name:"password0",placeholder:"请输入旧密码",password:""})])),_:1}),n(f,{label:"新密码"},{default:t((()=>[n(c,{class:"uni-input",name:"password1",placeholder:"请输入新密码",password:""})])),_:1}),n(f,{label:"重复密码"},{default:t((()=>[n(c,{class:"uni-input",name:"password2",placeholder:"请重复密码",password:""})])),_:1}),n(v,{class:"vir-form-btn-group blue"},{default:t((()=>[n(m,{"form-type":"submit"},{default:t((()=>[r("确认")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-143bab72"]]);export{v as default};
