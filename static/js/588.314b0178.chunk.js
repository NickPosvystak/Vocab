/*! For license information please see 588.314b0178.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[588],{7588:(e,r,o)=>{o.r(r),o.d(r,{default:()=>Q});var t=o(5043),a=o(9190),s=o(8988),i=o(3193),n=o(4691),d=o(6446),l=o(5795),c=o(6360),g=o(7972),u=o(675),h=o(4791),p=o(7111),x=o(8931),A=o(1906),v=o(44),C=o(6328),j=o(3336),b=o(5622),P=o(75),m=o(7642),y=o(4969),E=o(579);function w(e){let{value:r,onEdit:o,onDelete:a}=e;const[i,n]=t.useState(!1),d=t.useRef(null),l=e=>{d.current&&d.current.contains(e.target)||n(!1)},c=e=>{e.preventDefault(),o(r),l(e)},g=e=>{e.preventDefault(),a(r),l(e)};function u(e){"Tab"===e.key?(e.preventDefault(),n(!1)):"Escape"===e.key&&n(!1)}const h=t.useRef(i);return t.useEffect((()=>{!0===h.current&&!1===i&&d.current.focus(),h.current=i}),[i]),(0,E.jsx)(m.A,{direction:"row",spacing:2,children:(0,E.jsxs)("div",{children:[(0,E.jsx)(A.A,{ref:d,id:"composition-button","aria-controls":i?"composition-menu":void 0,"aria-expanded":i?"true":void 0,"aria-haspopup":"true",onClick:()=>{n((e=>!e))},children:"Edit"}),(0,E.jsx)(b.A,{open:i,anchorEl:d.current,role:void 0,placement:"bottom-start",transition:!0,children:e=>{let{TransitionProps:r,placement:o}=e;return(0,E.jsx)(C.A,{...r,style:{transformOrigin:"bottom-start"===o?"left top":"left bottom"},children:(0,E.jsx)(j.A,{children:(0,E.jsx)(v.x,{onClickAway:l,children:(0,E.jsxs)(P.A,{autoFocusItem:i,id:"composition-menu","aria-labelledby":"composition-button",onKeyDown:u,children:[(0,E.jsxs)(s.A,{onClick:c,children:[(0,E.jsx)("svg",{className:"icon-edit",width:"16",height:"16",children:(0,E.jsx)("use",{href:y.A+"#icon-edit"})}),"Edit"]}),(0,E.jsxs)(s.A,{onClick:g,children:[(0,E.jsx)("svg",{className:"icon-trash",width:"16",height:"16",children:(0,E.jsx)("use",{href:y.A+"#icon-trash"})}),"Delete"]})]})})})})}})]})})}var T=o(286),W=o(1970),f=o(4505);const N=function(e){let{searchValue:r,category:o}=e;const[a,s]=(0,t.useState)(null),[i,n]=(0,t.useState)([]);(0,t.useEffect)((()=>{(async()=>{try{const e=await(0,f.g)();console.log("wordsData: ",e),n(e)}catch(e){console.log(e.message)}})()}),[]);const d=(0,t.useMemo)((()=>i.filter((e=>{const t=(e.word||"").toLowerCase().includes((r||"").toLowerCase()),a=!o||e.category===o;return t&&a}))),[r,o,i]),l=(0,p.FB)(),c=t.useMemo((()=>[l.accessor("word",{id:"Word",header:"Word",cell:e=>{const r=e.getValue();return(0,E.jsx)("p",{children:r})}}),l.accessor("translation",{id:"Translation",header:"Translation",cell:e=>{const r=e.getValue();return(0,E.jsx)("p",{children:r})}}),l.accessor("category",{id:"Category",header:"Category",cell:e=>{const r=e.getValue();return(0,E.jsx)("p",{children:r})}}),l.accessor("progress",{id:"Progress",header:"Progress",cell:e=>{const r=e.getValue();return(0,E.jsx)("p",{children:r})}}),l.accessor("edit",{id:"Edit",header:"Edit",cell:e=>(0,E.jsx)(w,{onEdit:()=>(e=>{const r=e.row.original.word;s(r),T.Confirm.show("Confirm","Do you want to edit?","Yes","No",(()=>{W.Report.warning("Wait for update","Come back soon","Okay")}),(()=>{W.Report.info("Wait for update","Come back soon","Okay")}),{}),console.log("Click on edit",{wordValue:r})})(e),onDelete:()=>{return r=e.row.original.word,T.Confirm.show("Confirm","Do you want to edit?","Yes","No",(()=>{W.Report.warning("Wait for update","Come back soon","Okay")}),(()=>{W.Report.info("Wait for update","Come back soon","Okay")}),{}),void console.log("Click on Delete",{value:r});var r}})})]),[l]),g=(0,x.N4)({data:d,columns:c,getCoreRowModel:(0,p.HT)(),getFilteredRowModel:(0,p.hM)(),getSortedRowModel:(0,p.h5)(),getPaginationRowModel:(0,p.kW)()});return(0,E.jsxs)("div",{className:"container-table",children:[(0,E.jsxs)("table",{children:[(0,E.jsx)("thead",{children:g.getHeaderGroups().map((e=>(0,E.jsx)("tr",{children:e.headers.map((e=>(0,E.jsx)("th",{children:e.isPlaceholder?null:(0,x.Kv)(e.column.columnDef.header,e.getContext())},e.id)))},e.id)))}),(0,E.jsx)("tbody",{children:g.getRowModel().rows.map((e=>(0,E.jsx)("tr",{children:e.getVisibleCells().map((e=>(0,E.jsx)("td",{children:(0,x.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]}),(0,E.jsxs)("div",{className:"h-2",children:[(0,E.jsxs)("div",{className:"b-1",children:[(0,E.jsx)("button",{className:"border rounded p-1",onClick:()=>g.setPageIndex(0),disabled:!g.getCanPreviousPage(),children:"<<"}),(0,E.jsx)("button",{className:"border rounded p-1",onClick:()=>g.previousPage(),disabled:!g.getCanPreviousPage(),children:"<"}),(0,E.jsx)("button",{className:"border rounded p-1",onClick:()=>g.nextPage(),disabled:!g.getCanNextPage(),children:">"}),(0,E.jsx)("button",{className:"border rounded p-1",onClick:()=>g.setPageIndex(g.getPageCount()-1),disabled:!g.getCanNextPage(),children:">>"}),(0,E.jsxs)("div",{className:"h-3",children:[(0,E.jsx)("h3",{children:"Page"}),(0,E.jsxs)("strong",{children:[g.getState().pagination.pageIndex+1," of"," ",g.getPageCount()]})]}),(0,E.jsxs)("div",{className:"h-4",children:[(0,E.jsx)("h3",{children:"Go to page:"}),(0,E.jsx)("input",{type:"number",defaultValue:g.getState().pagination.pageIndex+1,onChange:e=>{const r=e.target.value?Number(e.target.value)-1:0;g.setPageIndex(r)},className:"i-last"})]}),(0,E.jsx)("select",{value:g.getState().pagination.pageSize,onChange:e=>{g.setPageSize(Number(e.target.value))},children:[10,20,30,40,50].map((e=>(0,E.jsxs)("option",{value:e,children:["Show ",e]},e)))})]}),(0,E.jsxs)("div",{children:[g.getPrePaginationRowModel().rows.length," Rows"]})]})]})},R=()=>{const[e,r]=(0,t.useState)(""),[o,p]=(0,t.useState)(""),[x,A]=(0,t.useState)("");return(0,E.jsxs)("div",{children:[(0,E.jsxs)("div",{className:"container-select",children:[(0,E.jsx)("label",{className:"label",children:(0,E.jsx)("div",{className:"input-container",children:(0,E.jsx)(d.A,{component:"form",sx:{"& .MuiOutlinedInput-root":{borderRadius:"15px","&:hover fieldset":{borderColor:"rgb(133, 170, 159)",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"},"&.Mui-focused fieldset":{boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",borderColor:"rgb(133, 170, 159)"},"&.MuiInputBase fieldset":{border:"none"}}},noValidate:!0,autoComplete:"off",children:(0,E.jsx)(l.A,{id:"outlined-basic",label:"Find the word",variant:"outlined",sx:{"& .MuiInputLabel-root":{fontWeight:"500",fontSize:"16px",color:"#121417"},"& .MuiInputLabel-root.Mui-focused":{color:"rgb(133, 170, 159)"},width:"100%"},value:o,onChange:e=>{p(e.target.value)},InputProps:{endAdornment:(0,E.jsx)(c.A,{sx:{color:"action.active",cursor:"pointer"}})}})})})}),(0,E.jsx)("label",{className:"label",children:(0,E.jsx)("div",{className:"input-container",children:(0,E.jsxs)(i.A,{className:"input-category",sx:{borderRadius:"15px",fontSize:"16px","& .MuiOutlinedInput-root":{borderColor:"rgb(133, 170, 159)","&:hover fieldset":{borderColor:"rgb(133, 170, 159)",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"},"&.Mui-focused fieldset":{borderColor:"rgb(133, 170, 159)"}}},children:[(0,E.jsx)(a.A,{sx:{fontWeight:"500",color:"#121417",fontSize:"16px","&.Mui-focused":{color:"rgb(133, 170, 159)"}},id:"demo-select-small-label",children:"Category"}),(0,E.jsxs)(n.A,{labelId:"demo-select-small-label",id:"demo-select-small",value:e,label:"Category",onChange:e=>{r(e.target.value),"Verb"!==e.target.value&&A("")},sx:{borderRadius:"15px"},children:[(0,E.jsx)(s.A,{className:"input-label",value:"",children:(0,E.jsx)("em",{children:"All"})}),(0,E.jsx)(s.A,{value:"Verb",children:"Verb"}),(0,E.jsx)(s.A,{value:"Participle",children:"Participle"}),(0,E.jsx)(s.A,{value:"Adjective",children:"Adjective"}),(0,E.jsx)(s.A,{value:"Pronoun",children:"Pronoun"}),(0,E.jsx)(s.A,{value:"Numerals",children:"Numerals"}),(0,E.jsx)(s.A,{value:"Adverb",children:"Adverb"}),(0,E.jsx)(s.A,{value:"Preposition",children:"Preposition"}),(0,E.jsx)(s.A,{value:"Conjuction",children:"Conjuction"}),(0,E.jsx)(s.A,{value:"Phrasal verb",children:"Phrasal verb"}),(0,E.jsx)(s.A,{value:"Functional phrase",children:"Functional phrase"})]})]})})}),"Verb"===e&&(0,E.jsx)(i.A,{component:"fieldset",sx:{"& .MuiFormGroup-root":{display:"flex",flexDirection:"row"}},children:(0,E.jsxs)(g.A,{value:x,onChange:e=>{A(e.target.value)},children:[(0,E.jsx)(u.A,{value:"Regular",control:(0,E.jsx)(h.A,{}),label:"Regular"}),(0,E.jsx)(u.A,{value:"Irregular",control:(0,E.jsx)(h.A,{}),label:"Irregular"})]})})]}),(0,E.jsx)("div",{children:(0,E.jsx)(N,{searchValue:o,category:e,verbType:x})})]})},U="data:image/png;base64,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";var B=o(4809);const k=[{Word:"Care",Translation:"\u0422\u0443\u0440\u0431\u043e\u0442\u0430, \u0434\u043e\u0433\u043b\u044f\u0434",Category:"Verb",Progress:90,Edit:"edit"},{Word:"Until",Translation:"\u041f\u0440\u043e\u0442\u044f\u0433\u043e\u043c, \u043f\u0456\u0434 \u0447\u0430\u0441",Category:"Preposition",Progress:90,Edit:"edit"},{Word:"Happy",Translation:"\u0429\u0430\u0441\u043b\u0438\u0432\u0438\u0439",Category:"Adjective",Progress:70,Edit:"edit"},{Word:"Travel",Translation:"\u041f\u043e\u0434\u043e\u0440\u043e\u0436\u0443\u0432\u0430\u0442\u0438",Category:"Verb",Progress:85,Edit:"edit"},{Word:"Book",Translation:"\u041a\u043d\u0438\u0433\u0430",Category:"Noun",Progress:95,Edit:"edit"},{Word:"Dog",Translation:"\u0421\u043e\u0431\u0430\u043a\u0430",Category:"Noun",Progress:80,Edit:"edit"},{Word:"Run",Translation:"\u0411\u0456\u0433\u0442\u0438",Category:"Verb",Progress:75,Edit:"edit"},{Word:"Friend",Translation:"\u0414\u0440\u0443\u0433",Category:"Noun",Progress:90,Edit:"edit"},{Word:"Quickly",Translation:"\u0428\u0432\u0438\u0434\u043a\u043e",Category:"Adverb",Progress:85,Edit:"edit"},{Word:"Idea",Translation:"\u0406\u0434\u0435\u044f",Category:"Noun",Progress:88,Edit:"edit"},{Word:"Think",Translation:"\u0414\u0443\u043c\u0430\u0442\u0438",Category:"Verb",Progress:82,Edit:"edit"},{Word:"Blue",Translation:"\u0421\u0438\u043d\u0456\u0439",Category:"Adjective",Progress:77,Edit:"edit"},{Word:"Under",Translation:"\u041f\u0456\u0434",Category:"Preposition",Progress:90,Edit:"edit"},{Word:"Eat",Translation:"\u0407\u0441\u0442\u0438",Category:"Verb",Progress:80,Edit:"edit"},{Word:"Sleep",Translation:"\u0421\u043f\u0430\u0442\u0438",Category:"Verb",Progress:85,Edit:"edit"},{Word:"Beautiful",Translation:"\u041a\u0440\u0430\u0441\u0438\u0432\u0438\u0439",Category:"Adjective",Progress:78,Edit:"edit"},{Word:"Above",Translation:"\u041d\u0430\u0434",Category:"Preposition",Progress:82,Edit:"edit"},{Word:"Table",Translation:"\u0421\u0442\u0456\u043b",Category:"Noun",Progress:92,Edit:"edit"},{Word:"Write",Translation:"\u041f\u0438\u0441\u0430\u0442\u0438",Category:"Verb",Progress:87,Edit:"edit"},{Word:"Read",Translation:"\u0427\u0438\u0442\u0430\u0442\u0438",Category:"Verb",Progress:85,Edit:"edit"},{Word:"Slowly",Translation:"\u041f\u043e\u0432\u0456\u043b\u044c\u043d\u043e",Category:"Adverb",Progress:80,Edit:"edit"},{Word:"Red",Translation:"\u0427\u0435\u0440\u0432\u043e\u043d\u0438\u0439",Category:"Adjective",Progress:75,Edit:"edit"},{Word:"Window",Translation:"\u0412\u0456\u043a\u043d\u043e",Category:"Noun",Progress:88,Edit:"edit"},{Word:"During",Translation:"\u041f\u0440\u043e\u0442\u044f\u0433\u043e\u043c",Category:"Preposition",Progress:90,Edit:"edit"},{Word:"Love",Translation:"\u041b\u044e\u0431\u0438\u0442\u0438",Category:"Verb",Progress:85,Edit:"edit"},{Word:"Car",Translation:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c",Category:"Noun",Progress:89,Edit:"edit"},{Word:"Black",Translation:"\u0427\u043e\u0440\u043d\u0438\u0439",Category:"Adjective",Progress:77,Edit:"edit"},{Word:"Help",Translation:"\u0414\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0442\u0438",Category:"Verb",Progress:83,Edit:"edit"},{Word:"Before",Translation:"\u041f\u0435\u0440\u0435\u0434",Category:"Preposition",Progress:85,Edit:"edit"},{Word:"Quick",Translation:"\u0428\u0432\u0438\u0434\u043a\u0438\u0439",Category:"Adjective",Progress:82,Edit:"edit"},{Word:"Eat",Translation:"\u0407\u0441\u0442\u0438",Category:"Verb",Progress:90,Edit:"edit"},{Word:"Mountain",Translation:"\u0413\u043e\u0440\u0430",Category:"Noun",Progress:88,Edit:"edit"},{Word:"Fast",Translation:"\u0428\u0432\u0438\u0434\u043a\u043e",Category:"Adverb",Progress:85,Edit:"edit"},{Word:"Kind",Translation:"\u0414\u043e\u0431\u0440\u0438\u0439",Category:"Adjective",Progress:80,Edit:"edit"},{Word:"Below",Translation:"\u041d\u0438\u0436\u0447\u0435",Category:"Preposition",Progress:82,Edit:"edit"},{Word:"Chair",Translation:"\u0421\u0442\u0456\u043b\u0435\u0446\u044c",Category:"Noun",Progress:90,Edit:"edit"},{Word:"Work",Translation:"\u041f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438",Category:"Verb",Progress:87,Edit:"edit"},{Word:"See",Translation:"\u0411\u0430\u0447\u0438\u0442\u0438",Category:"Verb",Progress:85,Edit:"edit"},{Word:"Never",Translation:"\u041d\u0456\u043a\u043e\u043b\u0438",Category:"Adverb",Progress:80,Edit:"edit"},{Word:"Yellow",Translation:"\u0416\u043e\u0432\u0442\u0438\u0439",Category:"Adjective",Progress:75,Edit:"edit"},{Word:"Phone",Translation:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Category:"Noun",Progress:88,Edit:"edit"},{Word:"Between",Translation:"\u041c\u0456\u0436",Category:"Preposition",Progress:90,Edit:"edit"},{Word:"Run",Translation:"\u0411\u0456\u0433\u0442\u0438",Category:"Verb",Progress:85,Edit:"edit"},{Word:"Child",Translation:"\u0414\u0438\u0442\u0438\u043d\u0430",Category:"Noun",Progress:89,Edit:"edit"},{Word:"Green",Translation:"\u0417\u0435\u043b\u0435\u043d\u0438\u0439",Category:"Adjective",Progress:77,Edit:"edit"},{Word:"Teach",Translation:"\u0412\u0447\u0438\u0442\u0438",Category:"Verb",Progress:83,Edit:"edit"},{Word:"After",Translation:"\u041f\u0456\u0441\u043b\u044f",Category:"Preposition",Progress:85,Edit:"edit"},{Word:"Bright",Translation:"\u042f\u0441\u043a\u0440\u0430\u0432\u0438\u0439",Category:"Adjective",Progress:82,Edit:"edit"},{Word:"Food",Translation:"\u0407\u0436\u0430",Category:"Noun",Progress:90,Edit:"edit"},{Word:"Jump",Translation:"\u0421\u0442\u0440\u0438\u0431\u0430\u0442\u0438",Category:"Verb",Progress:88,Edit:"edit"},{Word:"Always",Translation:"\u0417\u0430\u0432\u0436\u0434\u0438",Category:"Adverb",Progress:85,Edit:"edit"},{Word:"Soft",Translation:"\u041c'\u044f\u043a\u0438\u0439",Category:"Adjective",Progress:80,Edit:"edit"},{Word:"With",Translation:"\u0417",Category:"Preposition",Progress:82,Edit:"edit"}],Q=((0,B.zD)("/words",(async(e,r)=>{try{const e=k;return console.log("===>",e),e}catch(o){return r.rejectWithValue(o.message)}})),()=>(0,E.jsxs)("section",{className:"home-container",children:[(0,E.jsx)(R,{}),(0,E.jsxs)("div",{className:"logo-box",children:[(0,E.jsx)("img",{src:U,alt:"logo",className:"App-logo-spin"}),(0,E.jsx)("p",{className:"logo-title-example",children:"under development"}),(0,E.jsx)("img",{src:U,alt:"logo",className:"App-logo-spin-1"})]})]}))},4505:(e,r,o)=>{o.d(r,{g:()=>a});const t=o(6213).A.create({baseURL:"https://65ccd3f8dd519126b83fa909.mockapi.io/"}),a=async()=>{const{data:e}=await t.get("/words/");return console.log("data: ",e),e}}}]);
//# sourceMappingURL=588.314b0178.chunk.js.map