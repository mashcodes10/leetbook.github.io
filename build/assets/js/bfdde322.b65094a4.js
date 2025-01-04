"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5071],{4755:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"blind-75/Group Anagrams","title":"Group Anagrams","description":"Problem Link https://leetcode.com/problems/group-anagrams/.","source":"@site/docs/blind-75/Group Anagrams.md","sourceDirName":"blind-75","slug":"/blind-75/Group Anagrams","permalink":"/docs/blind-75/Group Anagrams","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blind-75/Group Anagrams.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Design Add and Search Words Data Structure","permalink":"/docs/blind-75/Design Add and Search Words Data Structure"},"next":{"title":"LRU Chache","permalink":"/docs/blind-75/LRU Cache"}}');var r=e(4848),o=e(8453);const s={sidebar_position:2},i="Group Anagrams",d={},c=[{value:"Approch and Code",id:"approch-and-code",level:2}];function l(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"group-anagrams",children:"Group Anagrams"})}),"\n",(0,r.jsxs)(n.p,{children:["Problem Link ",(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/group-anagrams/",children:"https://leetcode.com/problems/group-anagrams/"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"approch-and-code",children:"Approch and Code"}),"\n",(0,r.jsxs)(n.p,{children:["Please look at the ",(0,r.jsx)(n.strong,{children:"approach"})," and the ",(0,r.jsx)(n.code,{children:"solution"})," below."]}),"\n",(0,r.jsx)(n.p,{children:"Add metadata to customize the sidebar label and position:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",metastring:'title="memo" {1-4}',children:'---\nApproach and Insight\nProblem: Group Anagrams\nObjective: Given a list of strings, group them into categories where all strings in a group are anagrams of each other.\nKey Operations:\nGroup words by their sorted character sequence (canonical form).\nUse a hash map to store groups of anagrams.\nInsight\nCanonical Form of Anagrams:\nSorting the characters of each word transforms all anagrams into the same canonical form.\nExample: For "eat", "tea", and "ate", their sorted form is "aet".\nEfficient Grouping:\nUse a dictionary where:\nThe key is the canonical form.\nThe value is a list of all words matching that canonical form.\nApproach\nSort and Map:\n\nFor each word, compute its sorted form.\nUse the sorted form as a key in a dictionary.\nAppend the original word to the list corresponding to that key.\nReturn Groups:\n\nReturn all the lists from the dictionary as the grouped anagrams.\n\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:'title="Solution.py"',children:"from collections import defaultdict\n\nclass Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        anagramMap = defaultdict(list)\n        res = []\n\n        for s in strs:\n            sorted_str = tuple(sorted(s))\n            #now all anagrams are same\n            # we will append the anagrams with this key \n            anagramMap[sorted_str].append(s)\n\n            #defaultdict(<class 'list'>, {('a', 'e', 't'): ['eat', 'tea', 'ate'], ('a', 'n', 't'): ['tan', 'nat'], ('a', 'b', 't'): ['bat']})\n        \n        # we wil append the values i.e. the grouped anagrams\n        for value in anagramMap.values():\n            res.append(value)\n        \n        return res        \n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",metastring:'title="Rundown"',children:'Visual Explanation\nExample Input\nInput:\n\ncss\nCopy code\n["eat", "tea", "tan", "ate", "nat", "bat"]\nExecution\nInitialization:\n\nCreate an empty dictionary: anagram_map = {}.\nProcess Each Word:\n\nFor "eat":\nSorted form: "aet".\nAdd "eat" to anagram_map["aet"].\nmakefile\nCopy code\nanagram_map = {"aet": ["eat"]}\nFor "tea":\nSorted form: "aet".\nAdd "tea" to anagram_map["aet"].\nmakefile\nCopy code\nanagram_map = {"aet": ["eat", "tea"]}\nFor "tan":\nSorted form: "ant".\nAdd "tan" to anagram_map["ant"].\nmakefile\nCopy code\nanagram_map = {"aet": ["eat", "tea"], "ant": ["tan"]}\nFor "ate":\nSorted form: "aet".\nAdd "ate" to anagram_map["aet"].\nmakefile\nCopy code\nanagram_map = {"aet": ["eat", "tea", "ate"], "ant": ["tan"]}\nFor "nat":\nSorted form: "ant".\nAdd "nat" to anagram_map["ant"].\nmakefile\nCopy code\nanagram_map = {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"]}\nFor "bat":\nSorted form: "abt".\nAdd "bat" to anagram_map["abt"].\nmakefile\nCopy code\nanagram_map = {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"]}\nReturn Groups:\n\nCollect all values from anagram_map:\ncss\nCopy code\n[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]\nComplexity Analysis\nTime Complexity\nSorting Words:\nSorting each word takes \n\ud835\udc42\n(\n\ud835\udc3f\nlog\n\u2061\n\ud835\udc3f\n)\nO(LlogL), where \n\ud835\udc3f\nL is the average length of a word.\nTotal complexity: \n\nO(N\u22c5LlogL), where \n\nN is the number of words.\nGrouping Words:\nInsertion into the dictionary is \n\nO(1) per word.\nTotal complexity: \n\nO(N).\nSpace Complexity\nThe dictionary requires \n\nO(N\u22c5L) space to store all words.\nComparison with Alternative Solutions\n1. Counting Characters\nApproach:\nUse the frequency of each character (e.g., [2, 1, 0, 0, ...]) as the key instead of sorting.\nAdvantages:\nAvoids the \n\nO(LlogL) sorting step.\nDisadvantages:\nHandling frequency arrays adds complexity.\nSpace usage is higher due to the character frequency arrays.\n2. Current Approach (Sorting)\nAdvantages:\nSimple to implement.\nIntuitive canonical form for anagrams.\nDisadvantages:\nSorting can be expensive for very long strings.\nEdge Cases\nEmpty Input:\n\nInput: []\nOutput: []\nSingle Word:\n\nInput: ["word"]\nOutput: [["word"]]\nAll Identical Words:\n\nInput: ["aaa", "aaa", "aaa"]\nOutput: [["aaa", "aaa", "aaa"]]\n'})})]})}function p(a={}){const{wrapper:n}={...(0,o.R)(),...a.components};return n?(0,r.jsx)(n,{...a,children:(0,r.jsx)(l,{...a})}):l(a)}},8453:(a,n,e)=>{e.d(n,{R:()=>s,x:()=>i});var t=e(6540);const r={},o=t.createContext(r);function s(a){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function i(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:s(a.components),t.createElement(o.Provider,{value:n},a.children)}}}]);