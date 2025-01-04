"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5854],{8325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"blind-75/reate-a-blog-post","title":"Merge Two Sorted Lists","description":"Documents are groups of pages connected through:","source":"@site/docs/blind-75/reate-a-blog-post.md","sourceDirName":"blind-75","slug":"/blind-75/reate-a-blog-post","permalink":"/docs/blind-75/reate-a-blog-post","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blind-75/reate-a-blog-post.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Congratulations!","permalink":"/docs/blind-75/congratulations"},"next":{"title":"Tutorial - Extras","permalink":"/docs/category/tutorial---extras"}}');var o=n(4848),i=n(8453);const r={},l="Merge Two Sorted Lists",a={},d=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Approch and Code",id:"approch-and-code",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"merge-two-sorted-lists",children:"Merge Two Sorted Lists"})}),"\n",(0,o.jsxs)(t.p,{children:["Documents are ",(0,o.jsx)(t.strong,{children:"groups of pages"})," connected through:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["a ",(0,o.jsx)(t.strong,{children:"sidebar"})]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"previous/next navigation"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"versioning"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"create-your-first-doc",children:"Create your first Doc"}),"\n",(0,o.jsxs)(t.p,{children:["Create a Markdown file at ",(0,o.jsx)(t.code,{children:"docs/hello.md"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-md",metastring:'title="docs/hello.md"',children:"# Hello\n\nThis is my **first Docusaurus document**!\n"})}),"\n",(0,o.jsxs)(t.p,{children:["A new document is now available at ",(0,o.jsx)(t.a,{href:"http://localhost:3000/docs/hello",children:"http://localhost:3000/docs/hello"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"approch-and-code",children:"Approch and Code"}),"\n",(0,o.jsxs)(t.p,{children:["Docusaurus automatically ",(0,o.jsx)(t.strong,{children:"creates a sidebar"})," from the ",(0,o.jsx)(t.code,{children:"docs"})," folder."]}),"\n",(0,o.jsx)(t.p,{children:"Add metadata to customize the sidebar label and position:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-md",metastring:'title="docs/hello.md" {1-4}',children:"---\nMerge Two Sorted Lists\nInsight: Merge two sorted linked lists into one sorted list iteratively.\n\nApproach:\n\nInitialize a dummy node and pointer curr.\nCompare the heads of both lists:\nAttach the smaller node to curr.\nMove the pointer of the list with the smaller node.\nAfter one list is exhausted, attach the remaining list.\nTime Complexity: \n\nO(n+m)\n# Hello\n\nThis is my **first Docusaurus document**!\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",metastring:'title="Solution.py"',children:"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode()\n        tail = dummy \n\n        while list1 and list2:\n            if list1.val < list2.val\n                tail.next = list1\n                list1 = list1.next\n            else\n                tail.next = list2\n                list2 = list2.next\n            tail = tail.next\n\n            if list1:\n                tail.next = list1\n            else if list2:\n                tail.next = list2\n            return dummy.next        \n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);