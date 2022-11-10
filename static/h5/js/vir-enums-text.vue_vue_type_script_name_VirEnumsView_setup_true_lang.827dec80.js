import{d as e,n as s,c as _,e as t,w as a,h as n,v as u,B as m,x as p,l as r}from"./index.cc005d8f.js";const l={log_type:{0:"系统日志",1:"用户登录",2:"用户操作",3:"删除用户"},log_level:{0:"trace",1:"debug",2:"info",3:"warn",4:"error"},resource_type:{button:"按钮",menu:"菜单",api:"接口"},file_info_enum:{0:"干部任免附件",1:"政工推送附件",2:"文件推送附件",3:"意见反馈附件",4:"用印申请附件",5:"政工简讯附件"},push_type_enum:{0:"全局接收",1:"推送给指定民警"},sys_state_enum:{0:"无效",1:"有效"},wxma_user_type:{0:"司机",1:"企业",2:"稽查"},dict_type_enum:{WELFARE_TYPE:"福利政策类型",CONDOLE_TYPE:"慰问类型",OPINION_TYPE:"意见反馈类型"},user_type_enum:{0:"民警",1:"辅警"},push_state_enum:{0:"未发布",1:"已发布",2:"已撤销"},buss_state_enum:{0:"无效",1:"有效"},user_gender_enum:{0:"男",1:"女"},wxmp_spread_type:{last:"永久二维码",temp:"临时二维码"},first_login_enum:{0:"是",1:"否"},record_state_enum:{0:"未发布",1:"已推送",2:"已查阅",3:"已回复"},message_type_enum:{100:"个人消息提醒",101:"职级提醒",102:"组织关系提醒",103:"警衔提醒",104:"工资提醒",105:"表彰提醒",106:"干部任免",200:"审批结果提醒",300:"反馈回复提醒",400:"生日党龄提醒"},wxmp_message_type:{text:"文本消息",news:"图文消息",image:"图片消息",voice:"语音消息",video:"视频消息",music:"音乐消息",event:"事件推送"},opinion_state_enum:{0:"待回复",1:"待处理",2:"已处理"},wxmp_message_state:{0:"未读",1:"已读"},wxmp_message_match:{0:"全匹配",1:"模糊匹配"},message_state_enum:{0:"未推送",1:"未读",2:"已读"},push_file_read_enum:{0:"未阅读",1:"已阅读"},seal_apply_type_enum:{1:"用印申请"},seal_apply_state_enum:{0:"待审批",1:"审批中",2:"通过",3:"未通过",4:"撤销"},question_required_enum:{0:"选填",1:"必填"},opinion_anonymous_enum:{0:"实名",1:"匿名"},seal_approve_state_enum:{0:"审核中",1:"等待审核",2:"通过",3:"未通过",4:"已撤销"},message_param_type_enum:{yysp:"用印审批",yjfk:"意见反馈",gbrm:"干部任免"},welfare_police_state_enum:{0:"未发布",1:"已发布",2:"已撤销"}},i=e({name:"VirEnumsView"}),o=e({...i,props:{value:null,type:null},setup(e){const i=e,o=s((()=>{return e=i.type,null!=(s=i.value)&&l[e]?l[e][String(s)]:null;var e,s})),y=s((()=>`${i.type}-${i.value}`));return(e,s)=>{const l=r("v-uni-text");return _(),t(l,{class:p(["vir-enums-view",m(y)])},{default:a((()=>[n(u(m(o)),1)])),_:1},8,["class"])}}});export{o as _};
