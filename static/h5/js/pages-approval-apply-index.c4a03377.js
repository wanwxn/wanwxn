import{d as a,b as e,r as s,o as t,J as l,A as i,y as u,c,e as v,w as r,f as d,x as n,h as p,C as o,D as f,F as m,t as _,E as x,l as b,q as y,_ as g}from"./index.cc005d8f.js";import{A as h}from"./item.c4d64bbc.js";import{P as k}from"./page.2a11d509.js";import"./vir-enums-text.vue_vue_type_script_name_VirEnumsView_setup_true_lang.827dec80.js";const C=a({name:"ApprovalApplyIndex"}),j=g(a({...C,setup(a){const g=e(new k(1,15)),C=s("0,1,2,3");function j({uuid:a}={}){y("/pages/approval/view",{id:a})}function w(a,e="0"){g.ready(a,(()=>g.load(a,{approveState:e},(a=>_("/manage/sealapply/list.json",a).finally((()=>{x()}))))))}return t((a=>C.value=a.type||C.value)),l((()=>w(!1,C.value))),i((()=>w(!0,C.value))),u(C,(a=>w(!0,C.value)),{immediate:!0}),(a,e)=>{const s=b("v-uni-text"),t=b("v-uni-view"),l=b("vir-page");return c(),v(l,{class:"vir-approval-apply-index-page"},{default:r((()=>[d(t,{class:"vir-header-tab-list flex"},{default:r((()=>[d(t,{class:n(["vir-header-tab-item",{active:"0,1,2,3"===C.value}])},{default:r((()=>[d(s,{class:"text",onClick:e[0]||(e[0]=a=>C.value="0,1,2,3")},{default:r((()=>[p("全部")])),_:1})])),_:1},8,["class"]),d(t,{class:n(["vir-header-tab-item",{active:"0"===C.value}])},{default:r((()=>[d(s,{class:"text",onClick:e[1]||(e[1]=a=>C.value="0")},{default:r((()=>[p("待审批")])),_:1})])),_:1},8,["class"]),d(t,{class:n(["vir-header-tab-item",{active:"1"===C.value}])},{default:r((()=>[d(s,{class:"text",onClick:e[2]||(e[2]=a=>C.value="1")},{default:r((()=>[p("审批中")])),_:1})])),_:1},8,["class"]),d(t,{class:n(["vir-header-tab-item",{active:"2,3"===C.value}])},{default:r((()=>[d(s,{class:"text",onClick:e[3]||(e[3]=a=>C.value="2,3")},{default:r((()=>[p("已完成")])),_:1})])),_:1},8,["class"])])),_:1}),(c(!0),o(m,null,f(g.pageData,((a,e)=>(c(),v(h,{key:e,item:a,onClick:j},null,8,["item"])))),128))])),_:1})}}}),[["__scopeId","data-v-b719efc2"]]);export{j as default};
