import{H as n,B as e}from"./iframe-ByM1xzBM.js";import"./preload-helper-DsaTGXN_.js";const C=["Easy","Medium","Hard"],E=["solved","attempted","unsolved"];function M(t){const s=new URLSearchParams;return t.search&&s.set("search",t.search),t.difficulty&&s.set("difficulty",t.difficulty),t.status&&s.set("status",t.status),t.tag&&s.set("tag",t.tag),s.set("page",String(t.page??1)),s.toString()}function j({initialProblems:t,initialMeta:s,initialFilters:v,onSelectProblem:F}){const[u,w]=n.useState(t),[i,T]=n.useState(s),[r,_]=n.useState(v),[p,m]=n.useState(!1),[g,h]=n.useState(null);async function b(a){m(!0),h(null);const f=M(a);try{const x=await fetch(`/api/problems?${f}`);if(!x.ok)throw new Error("Request failed");const y=await x.json();w(y.data),T(y.meta),_(a),window.history.pushState({},"",`/problems?${f}`)}catch{h("Failed to load problems. Please try again.")}finally{m(!1)}}function l(a){b({...r,...a,page:1})}function P(a){b({...r,page:a})}return e.jsxs("section",{className:"problems-page","aria-label":"Problems list",children:[e.jsx("h1",{children:"Problems"}),e.jsxs("div",{className:"problems-page__filters",children:[e.jsx("input",{type:"search","aria-label":"Search problems",placeholder:"Search problems...",defaultValue:r.search??"",onChange:a=>l({search:a.target.value||void 0})}),e.jsxs("select",{"aria-label":"Filter by difficulty",value:r.difficulty??"",onChange:a=>l({difficulty:a.target.value||void 0}),children:[e.jsx("option",{value:"",children:"All difficulties"}),C.map(a=>e.jsx("option",{value:a,children:a},a))]}),e.jsxs("select",{"aria-label":"Filter by status",value:r.status??"",onChange:a=>l({status:a.target.value||void 0}),children:[e.jsx("option",{value:"",children:"All statuses"}),E.map(a=>e.jsx("option",{value:a,children:a},a))]}),e.jsx("input",{type:"text","aria-label":"Filter by tag",placeholder:"Tag...",defaultValue:r.tag??"",onChange:a=>l({tag:a.target.value||void 0})})]}),g&&e.jsx("p",{role:"alert",className:"problems-page__error",children:g}),p&&e.jsx("p",{"aria-live":"polite",children:"Loading problems..."}),e.jsxs("table",{role:"table","aria-label":"Problems",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Title"}),e.jsx("th",{scope:"col",children:"Difficulty"}),e.jsx("th",{scope:"col",children:"Tags"}),e.jsx("th",{scope:"col",children:"Status"})]})}),e.jsx("tbody",{children:u.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:4,children:"No problems found."})}):u.map(a=>e.jsxs("tr",{onClick:()=>F?.(a.id),className:"problems-page__row",children:[e.jsx("td",{children:a.title}),e.jsx("td",{children:a.difficulty}),e.jsx("td",{children:a.tags.join(", ")}),e.jsx("td",{children:a.status??"—"})]},a.id))})]}),e.jsxs("nav",{className:"problems-page__pagination","aria-label":"Pagination",children:[e.jsx("button",{type:"button",disabled:i.page<=1||p,onClick:()=>P(i.page-1),children:"Previous"}),e.jsxs("span",{"aria-live":"polite",children:["Page ",i.page," of ",i.totalPages]}),e.jsx("button",{type:"button",disabled:i.page>=i.totalPages||p,onClick:()=>P(i.page+1),children:"Next"})]})]})}j.__docgenInfo={description:"",methods:[],displayName:"ProblemsPage",props:{initialProblems:{required:!0,tsType:{name:"Array",elements:[{name:"Problem"}],raw:"Problem[]"},description:""},initialMeta:{required:!0,tsType:{name:"ProblemListResponse['meta']",raw:"ProblemListResponse['meta']"},description:""},initialFilters:{required:!0,tsType:{name:"ProblemFilters"},description:""},onSelectProblem:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: number) => void",signature:{arguments:[{type:{name:"number"},name:"id"}],return:{name:"void"}}},description:""}}};const L={title:"Components/ProblemsPage",component:j},S=[{id:1,title:"Two Sum",difficulty:"Easy",tags:["array","hash-table"],status:"solved"},{id:2,title:"Add Two Numbers",difficulty:"Medium",tags:["linked-list"],status:"attempted"},{id:3,title:"Median of Two Sorted Arrays",difficulty:"Hard",tags:["array","binary-search"]}],o={args:{initialProblems:S,initialMeta:{page:1,pageSize:20,total:3,totalPages:1},initialFilters:{}}},c={args:{initialProblems:S,initialMeta:{page:2,pageSize:3,total:9,totalPages:3},initialFilters:{page:2}}},d={args:{initialProblems:[],initialMeta:{page:1,pageSize:20,total:0,totalPages:0},initialFilters:{search:"nonexistent"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const q=["Default","WithPagination","Empty"];export{o as Default,d as Empty,c as WithPagination,q as __namedExportsOrder,L as default};
