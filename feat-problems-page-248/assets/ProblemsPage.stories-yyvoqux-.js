import{H as n,B as a}from"./iframe-dCz7l3le.js";import"./preload-helper-DsaTGXN_.js";const E=["Easy","Medium","Hard"],M=["solved","attempted","unsolved"];function N(t){const s=new URLSearchParams;return t.search&&s.set("search",t.search),t.difficulty&&s.set("difficulty",t.difficulty),t.status&&s.set("status",t.status),t.tag&&s.set("tag",t.tag),s.set("page",String(t.page??1)),s.toString()}function S({initialProblems:t,initialMeta:s,initialFilters:w,onSelectProblem:u}){const[m,F]=n.useState(t),[i,T]=n.useState(s),[r,_]=n.useState(w),[p,g]=n.useState(!1),[h,b]=n.useState(null);async function f(e){g(!0),b(null);const x=N(e);try{const y=await fetch(`/api/problems?${x}`);if(!y.ok)throw new Error("Request failed");const j=await y.json();F(j.data),T(j.meta),_(e),window.history.pushState({},"",`/problems?${x}`)}catch{b("Failed to load problems. Please try again.")}finally{g(!1)}}function l(e){f({...r,...e,page:1})}function P(e){f({...r,page:e})}function C(e){if(u){u(e);return}window.location.href=`/problems/${e}`}return a.jsxs("section",{className:"problems-page","aria-label":"Problems list",children:[a.jsx("h1",{children:"Problems"}),a.jsxs("div",{className:"problems-page__filters",children:[a.jsx("input",{type:"search","aria-label":"Search problems",placeholder:"Search problems...",value:r.search??"",onChange:e=>l({search:e.target.value||void 0})}),a.jsxs("select",{"aria-label":"Filter by difficulty",value:r.difficulty??"",onChange:e=>l({difficulty:e.target.value||void 0}),children:[a.jsx("option",{value:"",children:"All difficulties"}),E.map(e=>a.jsx("option",{value:e,children:e},e))]}),a.jsxs("select",{"aria-label":"Filter by status",value:r.status??"",onChange:e=>l({status:e.target.value||void 0}),children:[a.jsx("option",{value:"",children:"All statuses"}),M.map(e=>a.jsx("option",{value:e,children:e},e))]}),a.jsx("input",{type:"text","aria-label":"Filter by tag",placeholder:"Tag...",value:r.tag??"",onChange:e=>l({tag:e.target.value||void 0})})]}),h&&a.jsx("p",{role:"alert",className:"problems-page__error",children:h}),p&&a.jsx("p",{"aria-live":"polite",children:"Loading problems..."}),a.jsxs("table",{role:"table","aria-label":"Problems",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",children:"Title"}),a.jsx("th",{scope:"col",children:"Difficulty"}),a.jsx("th",{scope:"col",children:"Tags"}),a.jsx("th",{scope:"col",children:"Status"})]})}),a.jsx("tbody",{children:m.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:4,children:"No problems found."})}):m.map(e=>a.jsxs("tr",{onClick:()=>C(e.id),className:"problems-page__row",children:[a.jsx("td",{children:e.title}),a.jsx("td",{children:e.difficulty}),a.jsx("td",{children:e.tags.join(", ")}),a.jsx("td",{children:e.status??"—"})]},e.id))})]}),a.jsxs("nav",{className:"problems-page__pagination","aria-label":"Pagination",children:[a.jsx("button",{type:"button",disabled:i.page<=1||p,onClick:()=>P(i.page-1),children:"Previous"}),a.jsxs("span",{"aria-live":"polite",children:["Page ",i.page," of ",i.totalPages]}),a.jsx("button",{type:"button",disabled:i.page>=i.totalPages||p,onClick:()=>P(i.page+1),children:"Next"})]})]})}S.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{initialProblems:{required:!0,tsType:{name:"Array",elements:[{name:"Problem"}],raw:"Problem[]"},description:""},initialMeta:{required:!0,tsType:{name:"ProblemListResponse['meta']",raw:"ProblemListResponse['meta']"},description:""},initialFilters:{required:!0,tsType:{name:"ProblemFilters"},description:""},onSelectProblem:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};const q={title:"Components/ProblemsPage",component:S},v=[{id:1,title:"Two Sum",difficulty:"Easy",tags:["array","hash-table"],status:"solved"},{id:2,title:"Add Two Numbers",difficulty:"Medium",tags:["linked-list"],status:"attempted"},{id:3,title:"Median of Two Sorted Arrays",difficulty:"Hard",tags:["array","binary-search"]}],o={args:{initialProblems:v,initialMeta:{page:1,pageSize:20,total:3,totalPages:1},initialFilters:{}}},c={args:{initialProblems:v,initialMeta:{page:2,pageSize:3,total:9,totalPages:3},initialFilters:{page:2}}},d={args:{initialProblems:[],initialMeta:{page:1,pageSize:20,total:0,totalPages:0},initialFilters:{search:"nonexistent"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initialProblems: mockProblems,
    initialMeta: {
      page: 1,
      pageSize: 20,
      total: 3,
      totalPages: 1
    },
    initialFilters: {}
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialProblems: mockProblems,
    initialMeta: {
      page: 2,
      pageSize: 3,
      total: 9,
      totalPages: 3
    },
    initialFilters: {
      page: 2
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialProblems: [],
    initialMeta: {
      page: 1,
      pageSize: 20,
      total: 0,
      totalPages: 0
    },
    initialFilters: {
      search: 'nonexistent'
    }
  }
}`,...d.parameters?.docs?.source}}};const z=["Default","WithPagination","Empty"];export{o as Default,d as Empty,c as WithPagination,z as __namedExportsOrder,q as default};
