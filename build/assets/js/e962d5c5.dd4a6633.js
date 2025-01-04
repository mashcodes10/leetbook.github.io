"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1880],{8470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"blind-75/LRU Cache","title":"LRU Chache","description":"Problem Link https://leetcode.com/problems/lru-cache/description/.","source":"@site/docs/blind-75/LRU Cache.md","sourceDirName":"blind-75","slug":"/blind-75/LRU Cache","permalink":"/docs/blind-75/LRU Cache","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blind-75/LRU Cache.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Group Anagrams","permalink":"/docs/blind-75/Group Anagrams"},"next":{"title":"Merge K Sorted List","permalink":"/docs/blind-75/Merge K Sorted List"}}');var s=t(4848),a=t(8453);const r={sidebar_position:2},c="LRU Chache",i={},l=[{value:"Approch and Code",id:"approch-and-code",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"lru-chache",children:"LRU Chache"})}),"\n",(0,s.jsxs)(n.p,{children:["Problem Link ",(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/lru-cache/description/",children:"https://leetcode.com/problems/lru-cache/description/"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"approch-and-code",children:"Approch and Code"}),"\n",(0,s.jsxs)(n.p,{children:["Please look at the ",(0,s.jsx)(n.strong,{children:"approach"})," and the ",(0,s.jsx)(n.code,{children:"solution"})," below."]}),"\n",(0,s.jsx)(n.p,{children:"Add metadata to customize the sidebar label and position:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="memo" {1-4}',children:"---\nLRU Cache\nInsight: Combine a doubly linked list with a hash map for efficient operations.\n\nApproach:\n\nUse a hash map to store key-to-node mappings.\nUse a doubly linked list to manage LRU order:\nOn access, move the node to the front.\nOn capacity breach, remove the least recently used node (tail).\nTime Complexity: \n\nO(1)\n\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",metastring:'title="Solution.py"',children:"class Node:\n    def __init__(self, key,val):\n        self.key, self.val = key, val\n         \n        self.prev = self.next = None\nclass LRUCache:\n\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.cache = {} # maps key to values \n        self.left, self.right = Node(0,0), Node(0,0)\n        self.left.next, self.right.prev = self.right, self.left\n    \n    def remove(self, node):\n        prev, nxt = node.prev, node.next\n        prev.next, nxt.prev = nxt, prev\n    def insert(self, node):\n        #we get the prev and nxt by using our rightmost pointer\n        prev, nxt = self.right.prev, self.right\n        prev.next = nxt.prev = node\n        node.prev, node.next = prev, nxt \n    def get(self, key: int) -> int:\n        if key in self.cache:\n            #We wnat to make it most recently used\n            self.remove(self.cache[key])\n            self.insert(self.cache[key])\n            return self.cache[key].val\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.remove(self.cache[key])\n        \n        self.cache[key] = Node(key, value)\n        self.insert(self.cache[key])\n\n        if len(self.cache) > self.capacity:\n            lru = self.left.next\n            self.remove(lru)\n            del self.cache[lru.key]\n\n\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)\n        \n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="Rundown"',children:"Key Operations\nInitialization:\n\nCreate a hash map (cache) to store key-node mappings.\nCreate two dummy nodes (left and right) to represent the boundaries of the DLL.\nleft points to the least recently used node.\nright points to the most recently used node.\nInsert Node:\n\nAdd a node just before the right dummy node to make it the MRU.\nAdjust the prev and next pointers of the involved nodes:\nExample:\nrust\nCopy code\nBefore: ... <-> nodeA <-> right\nAfter:  ... <-> nodeA <-> newNode <-> right\nRemove Node:\n\nRemove a node by linking its prev and next neighbors directly.\nExample:\nvbnet\nCopy code\nBefore: prev <-> nodeToRemove <-> next\nAfter:  prev <-> next\nGet Key (get):\n\nIf the key exists:\nRemove the node from its current position in the DLL.\nReinsert the node before the right dummy to mark it as MRU.\nReturn the node\u2019s value.\nIf the key doesn\u2019t exist, return -1.\nPut Key (put):\n\nIf the key already exists:\nRemove the existing node.\nInsert a new node with the key-value pair.\nIf the cache exceeds its capacity:\nRemove the node just after the left dummy (LRU).\nDelete its entry from the hash map.\nExecution Trace Example\nOperations:\npython\nCopy code\ncache = LRUCache(2)  # Capacity = 2\ncache.put(1, 1)\ncache.put(2, 2)\nprint(cache.get(1))  # Returns 1\ncache.put(3, 3)      # Evicts key 2\nprint(cache.get(2))  # Returns -1 (not found)\ncache.put(4, 4)      # Evicts key 1\nprint(cache.get(1))  # Returns -1 (not found)\nprint(cache.get(3))  # Returns 3\nprint(cache.get(4))  # Returns 4\nProcess:\nInitial State:\n\nDLL: left <-> right\ncache = {}\nput(1, 1) and put(2, 2)\n\nDLL: left <-> (1, 1) <-> (2, 2) <-> right\ncache = {1: node1, 2: node2}\nget(1)\n\nMove (1, 1) to MRU position.\nDLL: left <-> (2, 2) <-> (1, 1) <-> right\ncache unchanged.\nput(3, 3) (Evicts LRU, key 2)\n\nDLL: left <-> (1, 1) <-> (3, 3) <-> right\ncache = {1: node1, 3: node3}\nget(2)\n\nKey 2 not found. Return -1.\nput(4, 4) (Evicts LRU, key 1)\n\nDLL: left <-> (3, 3) <-> (4, 4) <-> right\ncache = {3: node3, 4: node4}\nget(3) and get(4)\n\nBoth keys exist. Return their values.\nComplexity\nTime Complexity: \n\nO(1) for all operations (get, put).\nSpace Complexity: \n\nO(capacity) for the cache and DLL.\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);