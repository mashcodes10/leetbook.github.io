"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7802],{5625:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"blind-75/Design Add and Search Words Data Structure","title":"Design Add and Search Words Data Structure","description":"Problem Link https://leetcode.com/problems/design-add-and-search-words-data-structure/description/.","source":"@site/docs/blind-75/Design Add and Search Words Data Structure.md","sourceDirName":"blind-75","slug":"/blind-75/Design Add and Search Words Data Structure","permalink":"/docs/blind-75/Design Add and Search Words Data Structure","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blind-75/Design Add and Search Words Data Structure.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Create a Page","permalink":"/docs/blind-75/create-a-page"},"next":{"title":"Group Anagrams","permalink":"/docs/blind-75/Group Anagrams"}}');var a=r(4848),o=r(8453);const d={sidebar_position:2},s="Design Add and Search Words Data Structure",i={},c=[{value:"Approch and Code",id:"approch-and-code",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"design-add-and-search-words-data-structure",children:"Design Add and Search Words Data Structure"})}),"\n",(0,a.jsxs)(n.p,{children:["Problem Link ",(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/design-add-and-search-words-data-structure/description/",children:"https://leetcode.com/problems/design-add-and-search-words-data-structure/description/"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"approch-and-code",children:"Approch and Code"}),"\n",(0,a.jsxs)(n.p,{children:["Please look at the ",(0,a.jsx)(n.strong,{children:"approach"})," and the ",(0,a.jsx)(n.code,{children:"solution"})," below."]}),"\n",(0,a.jsx)(n.p,{children:"Add metadata to customize the sidebar label and position:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",metastring:'title="memo" {1-4}',children:"---\nProblem: Word Dictionary with Search Including Wildcard\nObjective: Design a data structure to store words and support fast lookups, including words with the wildcard character . that can match any single letter.\nKey Operations:\naddWord(word): Adds a word to the dictionary.\nsearch(word): Searches for a word, where . matches any character.\nInsight\nTrie (Prefix Tree): A tree-like data structure where each node represents a single character. It is efficient for prefix-based searches.\nEach node contains:\nA children dictionary to store subsequent characters.\nA flag is_end_of_word to indicate the end of a valid word.\nDFS (Depth-First Search): Enables efficient traversal to handle the wildcard character.\n\nApproach\nData Structure Design:\n\nImplement a TrieNode class:\nchildren: A dictionary to store child nodes keyed by character.\nis_end_of_word: A boolean flag to mark the end of a word.\nImplement the WordDictionary class:\nroot: The root of the trie.\nAdding a Word (addWord):\n\nTraverse the trie starting from the root.\nFor each character in the word:\nIf the character doesn\u2019t exist in the current node\u2019s children, create a new TrieNode.\nMove to the child node corresponding to the character.\nMark the final node as is_end_of_word = True.\nSearching for a Word (search):\n\nUse a recursive DFS to traverse the trie.\nFor each character in the word:\nIf the character is a . (wildcard), recursively search all child nodes.\nIf the character is not a wildcard, follow the corresponding child node.\nIf the traversal reaches the end of the word, check if the current node is marked as is_end_of_word.\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",metastring:'title="Solution.py"',children:"class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end_of_word = False\n\nclass WordDictionary:\n\n    def __init__(self):\n        self.root = TrieNode()\n\n    def addWord(self, word: str) -> None:\n        node = self.root\n        for char in word:\n            if char not in node.children:\n                node.children[char] = TrieNode()\n            node = node.children[char]\n        node.is_end_of_word = True\n\n    def search(self, word: str) -> bool:\n        def dfs(index, node):\n            if index == len(word):\n                return node.is_end_of_word\n\n            char = word[index]\n            if char == '.':\n                for child in node.children.values():\n                    if dfs(index + 1, child):\n                        return True\n                return False\n            else:\n                if char not in node.children:\n                    return False\n                return dfs(index + 1, node.children[char])\n\n        return dfs(0, self.root)\n\n        \n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",metastring:'title="Rundown"',children:'Examples of addWord and search\nAdding Words\nInput: addWord("car"), addWord("cat"), addWord("cart"), addWord("bat")\n\nTrie Structure After Adding Words:\n\ngraphql\nCopy code\nroot\n\u251c\u2500\u2500 b\n\u2502   \u2514\u2500\u2500 a\n\u2502       \u2514\u2500\u2500 t (is_end_of_word = True)\n\u2514\u2500\u2500 c\n    \u2514\u2500\u2500 a\n        \u251c\u2500\u2500 r\n        \u2502   \u251c\u2500\u2500 t (is_end_of_word = True)\n        \u2502   \u2514\u2500\u2500 (is_end_of_word = True)\n        \u2514\u2500\u2500 t (is_end_of_word = True)\nSearching Words\nExact Match Search (search("cat"))\n\nProcess:\nStart at root.\nTraverse:\nc \u2192 a \u2192 t.\nAt t, check is_end_of_word = True.\nResult: True\nWildcard Search (search("ca."))\n\nProcess:\nStart at root.\nTraverse:\nc \u2192 a.\nAt ., explore all children of a:\nCheck r \u2192 is_end_of_word = False.\nCheck t \u2192 is_end_of_word = True. Match found.\nResult: True\nWildcard at Start (search(".at"))\n\nProcess:\nStart at root.\nAt ., explore all children of root:\nCheck b:\nTraverse b \u2192 a \u2192 t \u2192 is_end_of_word = True. Match found.\nCheck c:\nTraverse c \u2192 a \u2192 t \u2192 is_end_of_word = True. Match found.\nResult: True\nNo Match Search (search("cap"))\n\nProcess:\nStart at root.\nTraverse:\nc \u2192 a.\np not found in a.children.\nResult: False\nDetailed Walkthrough of addWord\nInput: addWord("car")\n\nStart at the root.\nTraverse the word:\nAdd c to root.children.\nAdd a to c.children.\nAdd r to a.children.\nMark the node for r as is_end_of_word = True.\nInput: addWord("cart")\n\nStart at the root.\nTraverse the word:\nc already exists in root.children.\na already exists in c.children.\nr already exists in a.children.\nAdd t to r.children.\nMark the node for t as is_end_of_word = True.\nDetailed Walkthrough of search\nWildcard Search (search("ca."))\nStart at the root.\nTraverse c \u2192 a.\nAt ., explore all children of the a node:\nOption 1: Traverse r \u2192 is_end_of_word = False.\nOption 2: Traverse t \u2192 is_end_of_word = True. Match found.\nSearch for Non-Existent Word (search("dog"))\nStart at the root.\nTraverse:\nd not found in root.children. No match.\nEdge Cases\nEmpty Word:\nAdding or searching for "" would only affect the is_end_of_word flag of the root node.\nWords with Repeated Characters:\naddWord("aaa") and search("a..") would traverse the same node repeatedly.\nComplexity Analysis\nTime Complexity:\naddWord(word):\n\n\ud835\udc42\n(\n\ud835\udc3f\n)\nO(L), where \n\ud835\udc3f\nL is the length of the word.\nTraverses each character in the word once.\nsearch(word):\n\nWorst case \n\ud835\udc42\n(\n\ud835\udc3f\n\u22c5\n\ud835\udc41\n)\nO(L\u22c5N), where \n\ud835\udc3f\nL is the word length and \n\ud835\udc41\nN is the branching factor.\nWildcard . can explore all children of a node, increasing traversal.\nSpace Complexity:\nTotal number of nodes in the trie is proportional to the sum of all characters in the added words.\n\nStep-by-Step Traversal for Specific Queries\nExample 1: search("ca.")\nInitial State:\n\nTrie Structure:\ncss\nCopy code\nroot\n\u251c\u2500\u2500 b\n\u2502   \u2514\u2500\u2500 a\n\u2502       \u2514\u2500\u2500 t (is_end_of_word = True)\n\u2514\u2500\u2500 c\n    \u2514\u2500\u2500 a\n        \u251c\u2500\u2500 r\n        \u2502   \u2514\u2500\u2500 t (is_end_of_word = True)\n        \u2514\u2500\u2500 t (is_end_of_word = True)\nInput: "ca."\nTraversal Steps:\n\nStart at the root node.\nStep 1: Match \'c\' in root.children. Move to the child node for \'c\'.\nStep 2: Match \'a\' in c.children. Move to the child node for \'a\'.\nStep 3: At \'.\', explore all children of \'a\':\nTraverse to the \'r\' child:\nContinue traversal to \'t\', which is marked is_end_of_word = True. Match found!\nResult: True\n\nExample 2: search(".at")\nInitial State:\n\nInput: ".at"\nTraversal Steps:\n\nStart at the root node.\nStep 1: At \'.\', explore all children of the root:\nTraverse to \'b\':\nMatch \'a\' in b.children. Move to the \'a\' child.\nMatch \'t\' in a.children. Node marked is_end_of_word = True.\nTraverse to \'c\':\nMatch \'a\' in c.children. Move to the \'a\' child.\nMatch \'t\' in a.children. Node marked is_end_of_word = True.\nResult: True\n\nExample 3: search("dog")\nInitial State:\n\nInput: "dog"\nTraversal Steps:\n\nStart at the root node.\nStep 1: \'d\' not found in root.children. Return False.\nResult: False\n\nComparison with Alternative Solutions\n1. HashMap-Based Solution\nApproach:\n\nUse a HashMap to store words as keys.\nFor wildcard search, iterate through all keys in the HashMap and compare character by character.\nAdvantages:\n\nSimple implementation for exact match queries.\nNo complex tree structures required.\nDisadvantages:\n\nWildcard searches require \n\ud835\udc42\n(\n\ud835\udc41\n\u22c5\n\ud835\udc3f\n)\nO(N\u22c5L), where \n\ud835\udc41\nN is the number of stored words and \n\ud835\udc3f\nL is the word length. Every word must be checked.\nSpace usage is higher because duplicates are not consolidated (e.g., prefixes are stored separately for each word).\n2. Set-Based Solution\nApproach:\n\nUse a Set to store unique words.\nFor wildcard searches, iterate through the Set.\nAdvantages:\n\nSimple to implement for exact matches.\nEnsures no duplicate words.\nDisadvantages:\n\nWildcard search is inefficient, similar to HashMap.\nNo support for structured storage of prefixes.\n3. Trie-Based Solution (Current Implementation)\nApproach:\n\nUse a Trie to consolidate prefixes and facilitate efficient traversal.\nSupport wildcards with DFS.\nAdvantages:\n\nExact matches: \n\nO(L), where  L is the word length.\nWildcard searches are efficient for small branching factors.\nReduces space usage by consolidating prefixes (e.g., "cat", "cart", and "car" share common nodes).\nDisadvantages:\n\nImplementation complexity is higher.\nWildcard searches can still be inefficient if the branching factor is high.\nWhen to Use Each Approach\nUse Case\tPreferred Solution\nExact match queries only\tHashMap or Set\nWildcard queries with small dataset\tHashMap or Set\nWildcard queries with large dataset\tTrie\nPrefix-based operations (e.g., autocomplete)\tTrie\n\n'})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var t=r(6540);const a={},o=t.createContext(a);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);