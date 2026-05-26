        // ─── DATA ────────────────────────────────────────────────────────────────────
        const TOPICS = [
            // ═══ LEFT SIDE ═══
            {
                id: 'array', label: 'Arrays', color: '#c0531a', bg: '#fff5ef', border: '#f0c4a0', side: 'left',
                algos: [
                    {
                        name: 'Binary Search', imp: 'must', time: 'O(log n)', space: 'O(1)',
                        sit: 'Sorted array — find element or boundary faster than linear scan.',
                        when: 'Sorted array, rotated array, answer-space search (min speed, capacity, etc.).',
                        how: 'Maintain lo/hi. Compute mid. Eliminate half. Choose strict vs ≤ by problem variant.',
                        rec: '🔥 Asked at every company (Systems, FAANG, startups). Know all 4 variants: exact, first occurrence, last occurrence, rotated.',
                        code: `int lo=0, hi=n-1;
while(lo<=hi){
  int mid=lo+(hi-lo)/2;
  if(arr[mid]==target) return mid;
  else if(arr[mid]<target) lo=mid+1;
  else hi=mid-1;
}
return -1; // not found`},
                    {
                        name: 'Two Pointers', imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'Replace O(n²) nested loops with O(n) using two indices moving toward each other.',
                        when: 'Sorted array pair sum, 3Sum, container with most water, palindrome, remove duplicates.',
                        how: 'l=0, r=n-1. Move toward each other based on comparison result.',
                        rec: '🔥 Covers ~25% of array problems. Know opposite-end AND slow/fast (same direction) variants.',
                        code: `int l=0, r=n-1;
while(l<r){
  int s=arr[l]+arr[r];
  if(s==target) return {l,r};
  else if(s<target) l++;
  else r--;
}`},
                    {
                        name: 'Sliding Window', imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'Max/min over contiguous subarray — fixed or variable size, O(n) not O(n²).',
                        when: 'Max sum k-elements, longest substring without repeat, min window substring, at most k distinct.',
                        how: 'Expand right pointer. Shrink left when constraint is violated. Track answer at each valid state.',
                        rec: '🔥 Extremely common at FAANG and Pakistani product companies. Variable window + freq map is top pattern.',
                        code: `int l=0, ans=0;
unordered_map<char,int> mp;
for(int r=0;r<n;r++){
  mp[s[r]]++;
  while(mp[s[r]]>1){ mp[s[l]]--; l++; }
  ans=max(ans,r-l+1);
}
return ans;`},
                    {
                        name: 'Prefix Sum', imp: 'high', time: 'O(1) query', space: 'O(n)',
                        sit: 'Answer range-sum queries in O(1) after O(n) preprocessing.',
                        when: 'Multiple range queries, subarray sum equals k (with hash map), 2D range sums.',
                        how: 'pre[i]=pre[i-1]+arr[i]. Range[L..R] = pre[R+1]−pre[L]. Combine with map for sum=k.',
                        rec: '⭐ Paired with hash map for "subarray sum = k" — extremely common at TikTok, Google.',
                        code: `vector<int> pre(n+1,0);
for(int i=0;i<n;i++) pre[i+1]=pre[i]+arr[i];

// Sum of arr[L..R]:
int rangeSum=pre[R+1]-pre[L];

// Subarray sum = k:
unordered_map<int,int> cnt; cnt[0]=1;
int res=0, s=0;
for(int x:arr){
  s+=x;
  res+=cnt[s-k];
  cnt[s]++;
}`},
                    {
                        name: "Kadane's", imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'Maximum sum contiguous subarray — most iconic DP/array problem.',
                        when: 'Max subarray sum. Extend: max product subarray, max circular subarray.',
                        how: 'curr=max(arr[i], curr+arr[i]). Track global best. Product variant: track min too.',
                        rec: '🔥 Warm-up at every interview. If asked "max subarray" → Kadane. Product variant is harder.',
                        code: `int curr=arr[0], best=arr[0];
for(int i=1;i<n;i++){
  curr=max(arr[i], curr+arr[i]);
  best=max(best, curr);
}
return best;

// Product variant: track cMin too
// cMax=max(arr[i], arr[i]*cMax, arr[i]*cMin)`},
                    {
                        name: 'Dutch National Flag', imp: 'high', time: 'O(n)', space: 'O(1)',
                        sit: 'Sort array of 3 values (0s, 1s, 2s) in single pass without counting.',
                        when: 'Sort colors/categories in-place; partition for 3-way quicksort.',
                        how: '3 pointers: lo, mid, hi. Swap based on arr[mid] value.',
                        rec: '⭐ Classic interview question at Systems Ltd, Arbisoft, Folio3.',
                        code: `int lo=0, mid=0, hi=n-1;
while(mid<=hi){
  if(arr[mid]==0) swap(arr[lo++],arr[mid++]);
  else if(arr[mid]==1) mid++;
  else swap(arr[mid],arr[hi--]);
}`},
                ]
            },
            {
                id: 'linked', label: 'Linked Lists', color: '#1560a8', bg: '#eef5fd', border: '#a8cce8', side: 'left',
                algos: [
                    {
                        name: "Floyd's Cycle", imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'Detect cycle without extra space. Find cycle entry point too.',
                        when: 'Cycle detection, find duplicate number (LC287), find cycle start.',
                        how: 'Slow +1, Fast +2. If meet → cycle. Reset slow to head, both +1 → entry point.',
                        rec: '🔥 Top-10 linked list question. Know cycle entry variant — asked by Google, Microsoft.',
                        code: `ListNode *s=head, *f=head;
while(f&&f->next){
  s=s->next; f=f->next->next;
  if(s==f){                    // cycle detected
    s=head;
    while(s!=f){ s=s->next; f=f->next; }
    return s; // entry point
  }
}
return nullptr;`},
                    {
                        name: 'Reverse List', imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'Reverse singly linked list in-place — foundation for many problems.',
                        when: 'Palindrome check, reverse k-group, reorder list, reverse between i and j.',
                        how: 'prev=null, curr=head. Re-link curr→prev. Advance all three pointers.',
                        rec: '🔥 Must know iterative AND recursive. Know reverse-k-group (LC25) variant.',
                        code: `// Iterative
ListNode *prev=nullptr, *curr=head;
while(curr){
  ListNode *nxt=curr->next;
  curr->next=prev;
  prev=curr; curr=nxt;
}
return prev;

// Recursive
ListNode* rev(ListNode* h){
  if(!h||!h->next) return h;
  ListNode* rest=rev(h->next);
  h->next->next=h; h->next=nullptr;
  return rest;
}`},
                    {
                        name: 'Merge Sorted Lists', imp: 'must', time: 'O(n+m)', space: 'O(1)',
                        sit: 'Merge two sorted lists — core step of merge sort and merge-k-sorted.',
                        when: 'Merge two sorted, merge k sorted lists (with priority queue).',
                        how: 'Compare heads. Link the smaller. Advance that pointer. Recursively.',
                        rec: '🔥 Direct interview question + building block for merge-k-sorted-lists (harder variant).',
                        code: `ListNode* merge(ListNode* a, ListNode* b){
  if(!a) return b; if(!b) return a;
  if(a->val<=b->val){
    a->next=merge(a->next,b); return a;
  }
  b->next=merge(a,b->next); return b;
}
// Merge K: use min-heap of (val, node)`},
                    {
                        name: 'Find Middle', imp: 'high', time: 'O(n)', space: 'O(1)',
                        sit: 'Middle of list in one pass — foundation for palindrome check and sort.',
                        when: 'Split for merge sort on list, palindrome linked list check.',
                        how: 'Slow +1, Fast +2. When fast ends, slow = middle. Two variants (1st vs 2nd middle).',
                        rec: '⭐ Common sub-problem. Ensure you know first-middle vs second-middle difference.',
                        code: `ListNode *s=head, *f=head;
while(f->next && f->next->next){
  s=s->next; f=f->next->next;
}
return s; // first middle (for even: prefer this)
// Change to: while(f && f->next) for 2nd middle`},
                    {
                        name: 'LRU Cache', imp: 'must', time: 'O(1)', space: 'O(n)',
                        sit: 'Design cache that evicts Least Recently Used in O(1) get and put.',
                        when: 'Cache design, any LRU/LFU system design question.',
                        how: 'Hash map (key→node) + Doubly Linked List. Move accessed to front. Remove from tail.',
                        rec: '🔥 Classic design question asked at every Pakistani product company and FAANG.',
                        code: `class LRUCache{
  int cap;
  list<pair<int,int>> dll; // {key,val}
  unordered_map<int,list<pair<int,int>>::iterator> mp;
public:
  LRUCache(int c):cap(c){}
  int get(int k){
    if(!mp.count(k)) return -1;
    dll.splice(dll.begin(),dll,mp[k]);
    return mp[k]->second;
  }
  void put(int k,int v){
    if(mp.count(k)) dll.erase(mp[k]);
    else if((int)dll.size()==cap){
      mp.erase(dll.back().first); dll.pop_back();
    }
    dll.push_front({k,v}); mp[k]=dll.begin();
  }
};`},
                ]
            },
            {
                id: 'stack', label: 'Stack', color: '#1f6b2e', bg: '#edf8ef', border: '#9ed4a8', side: 'left',
                algos: [
                    {
                        name: 'Monotonic Stack', imp: 'must', time: 'O(n)', space: 'O(n)',
                        sit: 'Next Greater/Previous Smaller for every element in O(n) instead of O(n²).',
                        when: 'NGE, NSE, Largest Rectangle in Histogram, Trapping Rain Water, Stock Span.',
                        how: 'Stack stores indices. Pop when element violates monotonic order. Current element = answer for popped.',
                        rec: '🔥 Histogram + Trapping Water are top-10. This single pattern solves 5+ interview problems.',
                        code: `// Next Greater Element
vector<int> nge(n,-1);
stack<int> st;
for(int i=0;i<n;i++){
  while(!st.empty()&&arr[st.top()]<arr[i]){
    nge[st.top()]=arr[i]; st.pop();
  }
  st.push(i);
}

// Trapping Rain Water (two-pass prefix max variant):
// left[i]=max(arr[0..i]), right[i]=max(arr[i..n-1])
// water += min(left[i],right[i]) - arr[i]`},
                    {
                        name: 'Balanced Brackets', imp: 'must', time: 'O(n)', space: 'O(n)',
                        sit: 'Validate bracket nesting — most common intro stack problem.',
                        when: 'Syntax validation, valid expression, HTML/XML matching.',
                        how: 'Push openers. On closer, check stack top matches. Empty at end = valid.',
                        rec: '🔥 Asked in almost every junior-level interview in Pakistan as a screener question.',
                        code: `stack<char> st;
for(char c:s){
  if(c=='('||c=='['||c=='{') st.push(c);
  else{
    if(st.empty()) return false;
    char t=st.top(); st.pop();
    if(c==')'&&t!='(') return false;
    if(c==']'&&t!='[') return false;
    if(c=='}'&&t!='{') return false;
  }
}
return st.empty();`},
                    {
                        name: 'Min Stack', imp: 'high', time: 'O(1)', space: 'O(n)',
                        sit: 'Stack supporting O(1) getMin() at all times — design pattern.',
                        when: 'Design minimum stack, design problems requiring constant-time minimum.',
                        how: 'Auxiliary stack only pushes when new val ≤ current min.',
                        rec: '⭐ Standard design question. Often extended to "max stack" or "min queue".',
                        code: `stack<int> ms, mn;
void push(int x){
  ms.push(x);
  if(mn.empty()||x<=mn.top()) mn.push(x);
}
void pop(){
  if(ms.top()==mn.top()) mn.pop();
  ms.pop();
}
int getMin(){ return mn.top(); }`},
                    {
                        name: 'Daily Temperatures', imp: 'high', time: 'O(n)', space: 'O(n)',
                        sit: 'Days until warmer temperature — classic monotonic stack application.',
                        when: 'Waiting time problems, next greater with distance, stock span problem.',
                        how: 'Stack of indices. Pop when curr temp > stack top temp. Diff of indices = answer.',
                        rec: '⭐ Tests monotonic stack understanding cleanly. Very popular at product companies.',
                        code: `vector<int> ans(n,0);
stack<int> st;
for(int i=0;i<n;i++){
  while(!st.empty()&&T[st.top()]<T[i]){
    ans[st.top()]=i-st.top(); st.pop();
  }
  st.push(i);
}
return ans;`},
                ]
            },
            {
                id: 'hashing', label: 'Hashing', color: '#1a7a1a', bg: '#f0faf0', border: '#88d488', side: 'left',
                algos: [
                    {
                        name: 'Two Sum Pattern', imp: 'must', time: 'O(n)', space: 'O(n)',
                        sit: 'Find pair/complement in O(n) — most fundamental hash map technique.',
                        when: 'Pair sum, subarray sum = k, group anagrams, 4Sum, two-diff.',
                        how: 'For each element check if complement exists in map. Store element as you scan.',
                        rec: '🔥 LeetCode #1. Most asked problem across all companies worldwide and in Pakistan.',
                        code: `unordered_map<int,int> mp;
for(int i=0;i<n;i++){
  int comp=target-arr[i];
  if(mp.count(comp)) return {mp[comp],i};
  mp[arr[i]]=i;
}
// Subarray sum=k: use prefix sum + hashmap
// Group anagrams: sorted string as key`},
                    {
                        name: 'Frequency Count', imp: 'must', time: 'O(n)', space: 'O(n)',
                        sit: 'Count occurrences to detect duplicates, anagrams, majority element.',
                        when: 'Anagram check, group anagrams, top-k frequent, majority element, first non-repeat.',
                        how: 'unordered_map to count. Query or sort by frequency. Boyer-Moore for majority.',
                        rec: '🔥 Used in dozens of problems. Group Anagrams and Top-K Frequent are extremely common.',
                        code: `// Group Anagrams
unordered_map<string,vector<string>> mp;
for(string& s:strs){
  string key=s; sort(key.begin(),key.end());
  mp[key].push_back(s);
}

// Top-K frequent (bucket sort O(n)):
vector<vector<int>> bucket(n+1);
for(auto& [v,f]:freq) bucket[f].push_back(v);
// scan bucket right to left for top-k`},
                    {
                        name: 'Window + HashMap', imp: 'must', time: 'O(n)', space: 'O(k)',
                        sit: 'Sliding window combined with frequency map for complex substring problems.',
                        when: 'Longest without repeat, k distinct chars, min window substring, permutation in string.',
                        how: 'Expand right, track freq in map, shrink left when constraint breaks. Count "valid" chars.',
                        rec: '🔥 Minimum Window Substring is a must-know hard problem. Asked at Google, Microsoft.',
                        code: `// Min Window Substring
unordered_map<char,int> need,window;
for(char c:t) need[c]++;
int l=0,valid=0,minLen=INT_MAX,start=0;
for(int r=0;r<s.size();r++){
  if(need.count(s[r])){
    window[s[r]]++;
    if(window[s[r]]==need[s[r]]) valid++;
  }
  while(valid==(int)need.size()){
    if(r-l+1<minLen){minLen=r-l+1;start=l;}
    if(need.count(s[l])&&--window[s[l]]<need[s[l]]) valid--;
    l++;
  }
}`},
                ]
            },
            {
                id: 'sorting', label: 'Sorting', color: '#444', bg: '#f5f5f5', border: '#ccc', side: 'left',
                algos: [
                    {
                        name: 'Merge Sort', imp: 'must', time: 'O(n log n)', space: 'O(n)',
                        sit: 'Stable sort guaranteed O(n log n); also used to count inversions.',
                        when: 'Stable sort, sort linked list (O(1) space), count inversions.',
                        how: 'Split in half, recurse, merge two sorted halves. Count inversions during merge.',
                        rec: '🔥 Know implementation cold. Count Inversions variant asked by Goldman Sachs, Amazon.',
                        code: `void mergeSort(vector<int>&a, int l, int r){
  if(l>=r) return;
  int m=l+(r-l)/2;
  mergeSort(a,l,m); mergeSort(a,m+1,r);
  // merge
  vector<int> tmp(a.begin()+l,a.begin()+r+1);
  int i=0,j=m-l+1,k=l;
  while(i<=m-l&&j<=r-l)
    a[k++]=(tmp[i]<=tmp[j])?tmp[i++]:tmp[j++];
  while(i<=m-l) a[k++]=tmp[i++];
}`},
                    {
                        name: 'Quick Sort', imp: 'must', time: 'O(n log n)', space: 'O(log n)',
                        sit: 'Fastest in practice for arrays — in-place with O(log n) stack space.',
                        when: 'General sort. QuickSelect for kth largest in O(n) average.',
                        how: 'Partition around pivot (Lomuto or Hoare). Recurse both sides.',
                        rec: '⭐ Know partition cold. QuickSelect for Kth Largest (LC215) is very commonly asked.',
                        code: `int partition(vector<int>&a, int l, int r){
  int pivot=a[r], i=l-1;
  for(int j=l;j<r;j++)
    if(a[j]<=pivot) swap(a[++i],a[j]);
  swap(a[i+1],a[r]); return i+1;
}
// QuickSelect (kth largest):
// call partition, only recurse into side containing k`},
                    {
                        name: 'Counting/Radix Sort', imp: 'good', time: 'O(n+k)', space: 'O(n+k)',
                        sit: 'Sort integers in O(n) when range is bounded — beats comparison sorts.',
                        when: 'Keys in range [0..k], k small — chars, grades, small integers.',
                        how: 'Count frequencies. Prefix sum for positions. Place stably. Radix: digit by digit.',
                        rec: '✓ Good for theory. Radix sort used in database internals questions.',
                        code: `// Counting Sort
vector<int> cnt(k+1,0);
for(int x:arr) cnt[x]++;
for(int i=1;i<=k;i++) cnt[i]+=cnt[i-1];
vector<int> out(n);
for(int i=n-1;i>=0;i--)
  out[--cnt[arr[i]]]=arr[i];`},
                    {
                        name: 'Custom Comparator', imp: 'high', time: 'O(n log n)', space: 'O(1)',
                        sit: 'Sort by custom key — intervals, strings as numbers, multi-key sort.',
                        when: 'Merge intervals, largest number, sort by frequency, task scheduler.',
                        how: 'Provide lambda or overload < operator. Know stable_sort for ties.',
                        rec: '⭐ "Largest Number" (sort as strings) and merge-intervals sort are very commonly asked.',
                        code: `// Largest Number: sort strings s.t. a+b > b+a
sort(nums.begin(),nums.end(),[](string a,string b){
  return a+b > b+a;
});

// Sort intervals by start
sort(intervals.begin(),intervals.end(),[](auto&a,auto&b){
  return a[0]<b[0];
});`},
                ]
            },
            {
                id: 'strings', label: 'Strings', color: '#7b2d8b', bg: '#f8eefb', border: '#d4a0e4', side: 'left',
                algos: [
                    {
                        name: 'KMP Algorithm', imp: 'must', time: 'O(n+m)', space: 'O(m)',
                        sit: 'Find all occurrences of pattern in text — O(n+m) vs O(nm) brute force.',
                        when: 'Pattern matching, repeated string check, shortest period of string.',
                        how: 'Build LPS (failure function). On mismatch use LPS to skip characters intelligently.',
                        rec: '🔥 Must know for SDE roles. Frequently asked at Arbisoft, 10Pearls, NetSol.',
                        code: `// Build LPS array
vector<int> lps(m,0);
int len=0, i=1;
while(i<m){
  if(pat[i]==pat[len]) lps[i++]=++len;
  else if(len) len=lps[len-1];
  else lps[i++]=0;
}
// Search
int j=0;
for(int i=0;i<n;){
  if(txt[i]==pat[j]){i++;j++;}
  if(j==m){/* found at i-j */; j=lps[j-1];}
  else if(i<n&&txt[i]!=pat[j]){
    if(j) j=lps[j-1]; else i++;
  }
}`},
                    {
                        name: 'Anagram / Palindrome', imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'Check if strings are anagrams or if string can be palindrome — O(n) with counting.',
                        when: 'Valid anagram, group anagrams, palindrome permutation, longest palindrome.',
                        how: 'Count char frequencies. Anagram: same counts. Palindrome: at most 1 odd count.',
                        rec: '🔥 Foundational string problem — asked at nearly every company as warm-up.',
                        code: `// Valid Anagram
int freq[26]={};
for(char c:s) freq[c-'a']++;
for(char c:t) freq[c-'a']--;
for(int x:freq) if(x) return false;
return true;

// Can form palindrome:
int odd=0;
for(int x:freq) odd+=(x%2);
return odd<=1;`},
                    {
                        name: 'Expand Around Center', imp: 'must', time: 'O(n²)', space: 'O(1)',
                        sit: 'Find longest palindromic substring without O(n²) space (Manacher is O(n)).',
                        when: 'Longest palindrome substring, count palindrome substrings, palindrome partitioning.',
                        how: 'For each center (n odd + n-1 even), expand while chars match. Track max.',
                        rec: '🔥 Longest Palindromic Substring (LC5) is asked constantly. Know this approach cold.',
                        code: `string longestPalin(string s){
  int st=0, maxLen=1;
  auto expand=[&](int l,int r){
    while(l>=0&&r<(int)s.size()&&s[l]==s[r])
      {l--;r++;}
    if(r-l-1>maxLen){maxLen=r-l-1;st=l+1;}
  };
  for(int i=0;i<(int)s.size();i++){
    expand(i,i);   // odd
    expand(i,i+1); // even
  }
  return s.substr(st,maxLen);
}`},
                    {
                        name: 'String Hashing', imp: 'good', time: 'O(n)', space: 'O(n)',
                        sit: 'Hash substrings for O(1) equality checks — Rabin-Karp rolling hash.',
                        when: 'Repeated substring detection, longest duplicate substring, string matching.',
                        how: 'Hash = Σ(s[i] * base^i) mod prime. Rolling: subtract left, shift, add right.',
                        rec: '✓ Know the concept. Rabin-Karp mentioned in system design and algorithm discussions.',
                        code: `// Polynomial rolling hash
long long hashStr(string& s){
  long long h=0, base=31, mod=1e9+7, pow=1;
  for(char c:s){
    h=(h+(c-'a'+1)*pow)%mod;
    pow=pow*base%mod;
  }
  return h;
}
// Rabin-Karp: slide window, update hash in O(1)`},
                ]
            },
            // ═══ RIGHT SIDE ═══
            {
                id: 'tree', label: 'Trees', color: '#8a4800', bg: '#fdf6ec', border: '#e0c078', side: 'right',
                algos: [
                    {
                        name: 'DFS Traversals', imp: 'must', time: 'O(n)', space: 'O(h)',
                        sit: 'Visit all nodes — foundation of virtually all tree problems.',
                        when: 'Inorder for sorted BST, preorder for serialize/copy, postorder for delete/height.',
                        how: 'Inorder: L→root→R. Iterative uses explicit stack — interviewers specifically request this.',
                        rec: '🔥 Must know ITERATIVE traversal. Interviewers often say "no recursion" to test this.',
                        code: `// Iterative Inorder
stack<TreeNode*> st; TreeNode* cur=root;
while(cur||!st.empty()){
  while(cur){st.push(cur);cur=cur->left;}
  cur=st.top();st.pop();
  process(cur->val);
  cur=cur->right;
}

// Iterative Preorder: push right then left`},
                    {
                        name: 'Level Order (BFS)', imp: 'must', time: 'O(n)', space: 'O(w)',
                        sit: 'Process tree level by level — needed for height, right view, zigzag.',
                        when: 'Height, right side view, zigzag, level averages, connect next pointers.',
                        how: 'Queue-based BFS. Snapshot queue size at level start. Process all nodes at that level.',
                        rec: '🔥 Many tree problems reduce to level order. The "size snapshot" trick is essential.',
                        code: `queue<TreeNode*> q; q.push(root);
while(!q.empty()){
  int sz=q.size();          // snapshot level size
  while(sz--){
    TreeNode* n=q.front();q.pop();
    process(n->val);
    if(n->left) q.push(n->left);
    if(n->right) q.push(n->right);
  }
  // one level done
}`},
                    {
                        name: 'LCA', imp: 'must', time: 'O(n)', space: 'O(h)',
                        sit: 'Lowest Common Ancestor — deepest node that is ancestor of both p and q.',
                        when: 'LCA of binary tree, distance between nodes, path between two nodes.',
                        how: 'Return node if null or equals p/q. If both children return non-null → LCA found.',
                        rec: '🔥 Top-5 tree problem. Know BST variant (O(log n) by value comparison) too.',
                        code: `TreeNode* lca(TreeNode* r,TreeNode* p,TreeNode* q){
  if(!r||r==p||r==q) return r;
  TreeNode* L=lca(r->left,p,q);
  TreeNode* R=lca(r->right,p,q);
  if(L&&R) return r;   // p and q on different sides
  return L?L:R;
}
// BST variant: go left if both < root, right if both > root`},
                    {
                        name: 'BST Validate', imp: 'must', time: 'O(n)', space: 'O(h)',
                        sit: 'Validate BST using min/max bounds — most common BST interview question.',
                        when: 'Validate BST, kth smallest (inorder count), floor/ceiling, BST from sorted array.',
                        how: 'Pass valid range [min,max] to each node. Left narrows upper bound, right narrows lower.',
                        rec: '🔥 "Validate BST" asked constantly. Know kth smallest via inorder Morris traversal too.',
                        code: `bool valid(TreeNode* r,long lo,long hi){
  if(!r) return true;
  if(r->val<=lo||r->val>=hi) return false;
  return valid(r->left,lo,r->val)&&
         valid(r->right,r->val,hi);
}
// Call: valid(root, LONG_MIN, LONG_MAX)

// Kth smallest: inorder with counter
void inorder(TreeNode* r,int& k,int& ans){
  if(!r) return;
  inorder(r->left,k,ans);
  if(--k==0){ans=r->val;return;}
  inorder(r->right,k,ans);
}`},
                    {
                        name: 'Diameter / Max Path', imp: 'high', time: 'O(n)', space: 'O(h)',
                        sit: 'Longest path between any two nodes — may not pass through root.',
                        when: 'Diameter of binary tree, binary tree maximum path sum (harder variant).',
                        how: 'At each node: left_height + right_height = path through it. Update global max.',
                        rec: '⭐ Max Path Sum (LC124) is a hard variant asked at top companies. Know both.',
                        code: `int dia=0;
int height(TreeNode* r){
  if(!r) return 0;
  int l=height(r->left), ri=height(r->right);
  dia=max(dia, l+ri);        // path through this node
  return 1+max(l,ri);
}
// Max Path Sum variant:
// at each node: max(0,L) + max(0,R) + val
// can be negative — take max with 0`},
                ]
            },
            {
                id: 'graph', label: 'Graphs', color: '#0a6e62', bg: '#eaf7f5', border: '#8ed4cc', side: 'right',
                algos: [
                    {
                        name: 'DFS Graph', imp: 'must', time: 'O(V+E)', space: 'O(V)',
                        sit: 'Explore all reachable nodes, detect cycles, find connected components.',
                        when: 'Number of islands, cycle detection, topo sort (DFS), path existence, SCC.',
                        how: 'Mark visited. Recurse into unvisited neighbors. Post-order exit = topological order.',
                        rec: '🔥 Number of Islands is a top-5 graph problem worldwide. Know grid DFS cold.',
                        code: `// Grid DFS (Number of Islands)
void dfs(vector<vector<char>>&g,int i,int j){
  if(i<0||i>=(int)g.size()||
     j<0||j>=(int)g[0].size()||
     g[i][j]!='1') return;
  g[i][j]='0';              // mark visited
  dfs(g,i+1,j);dfs(g,i-1,j);
  dfs(g,i,j+1);dfs(g,i,j-1);
}
// Cycle detection: track visiting (grey) vs visited (black)`},
                    {
                        name: 'BFS Shortest Path', imp: 'must', time: 'O(V+E)', space: 'O(V)',
                        sit: 'Shortest path in unweighted graph — level-order traversal on graph.',
                        when: 'Shortest path, word ladder, 0-1 BFS, multi-source BFS (walls & gates).',
                        how: 'Enqueue source. Dequeue, process, enqueue unvisited neighbors. Distance = level.',
                        rec: '🔥 Grid BFS (shortest path) asked at FAANG and Pakistani product companies. Know multi-source.',
                        code: `queue<int> q; vector<int> dist(n,INT_MAX);
dist[src]=0; q.push(src);
while(!q.empty()){
  int u=q.front();q.pop();
  for(int v:adj[u])
    if(dist[v]==INT_MAX){
      dist[v]=dist[u]+1; q.push(v);
    }
}
// Multi-source: push all sources first with dist=0`},
                    {
                        name: "Dijkstra's", imp: 'must', time: 'O((V+E)log V)', space: 'O(V)',
                        sit: 'Shortest path in weighted non-negative graph.',
                        when: 'GPS routing, cheapest flights within k stops, network delay time.',
                        how: 'Min-heap. Always expand closest. Relax edges. Skip stale (outdated) entries.',
                        rec: '🔥 Must know. "Cheapest Flights Within K Stops" variant asks Dijkstra with constraint.',
                        code: `priority_queue<pair<int,int>,
  vector<pair<int,int>>,greater<>> pq;
vector<int> dist(n,INT_MAX);
dist[src]=0; pq.push({0,src});
while(!pq.empty()){
  auto[d,u]=pq.top();pq.pop();
  if(d>dist[u]) continue;    // stale
  for(auto[v,w]:adj[u])
    if(dist[u]+w<dist[v]){
      dist[v]=dist[u]+w;
      pq.push({dist[v],v});
    }
}`},
                    {
                        name: 'Topological Sort', imp: 'must', time: 'O(V+E)', space: 'O(V)',
                        sit: 'Order tasks with dependencies — only valid for DAGs.',
                        when: 'Course prerequisites (LC207/210), build order, task scheduling, compilation.',
                        how: "Kahn's BFS: process in-degree 0 nodes. DFS: push after all neighbors visited.",
                        rec: '🔥 Course Schedule is one of the most asked graph problems. Know cycle detection too.',
                        code: `// Kahn's Algorithm (BFS)
vector<int> indeg(n,0);
for(auto[u,v]:edges) indeg[v]++;
queue<int> q;
for(int i=0;i<n;i++) if(!indeg[i]) q.push(i);
vector<int> order;
while(!q.empty()){
  int u=q.front();q.pop();
  order.push_back(u);
  for(int v:adj[u]) if(!--indeg[v]) q.push(v);
}
// If order.size()<n → cycle exists (no valid topo)`},
                    {
                        name: 'Union-Find (DSU)', imp: 'high', time: 'α(n)≈O(1)', space: 'O(n)',
                        sit: 'Track connected components and merge sets in near-constant time.',
                        when: 'Connected components, Kruskal MST, accounts merge, redundant connection.',
                        how: 'parent[]+rank[]. Find with path compression. Union by rank.',
                        rec: '⭐ Cleanest solution for connected-components problems. Know path compression cold.',
                        code: `vector<int> par(n),rnk(n,0);
iota(par.begin(),par.end(),0);
function<int(int)> find=[&](int x)->int{
  return par[x]==x?x:par[x]=find(par[x]); // path compression
};
auto unite=[&](int a,int b)->bool{
  a=find(a);b=find(b);
  if(a==b) return false; // already connected
  if(rnk[a]<rnk[b]) swap(a,b);
  par[b]=a;
  if(rnk[a]==rnk[b]) rnk[a]++;
  return true;
};`},
                ]
            },
            {
                id: 'dp', label: 'Dynamic Prog.', color: '#a81818', bg: '#fdf0f0', border: '#e0a0a0', side: 'right',
                algos: [
                    {
                        name: 'Memoization (Top-Down)', imp: 'must', time: 'varies', space: 'O(n)',
                        sit: 'Cache overlapping subproblems — converts exponential to polynomial.',
                        when: 'Top-down DP: Fibonacci, climbing stairs, grid paths, any repeated recursion.',
                        how: 'Write naive recursion. Identify repeated states. Cache in map/array. Check before computing.',
                        rec: "🔥 Entry point to all DP. Master this before bottom-up. If you can't memoize, you can't do DP.",
                        code: `// Fibonacci with memoization
unordered_map<int,long long> memo;
long long f(int n){
  if(n<=1) return n;
  if(memo.count(n)) return memo[n];
  return memo[n]=f(n-1)+f(n-2);
}

// Climb Stairs (1 or 2 steps):
// f(n) = f(n-1) + f(n-2), same Fibonacci pattern`},
                    {
                        name: '0/1 Knapsack', imp: 'must', time: 'O(nW)', space: 'O(W)',
                        sit: 'Max value under weight limit — each item at most once. Core DP template.',
                        when: 'Subset sum, partition equal subset, target sum, 0/1 item selection.',
                        how: 'Include or exclude each item. dp[w]=max(skip, val+dp[w-wt]). Reverse loop for 1D.',
                        rec: '🔥 Template for ALL DP problems. Subset Sum and Partition Equal Subset are direct variants.',
                        code: `// Space-optimised 1D (iterate weight in reverse!)
vector<int> dp(W+1,0);
for(int i=0;i<n;i++)
  for(int w=W;w>=wt[i];w--)
    dp[w]=max(dp[w], val[i]+dp[w-wt[i]]);

// Subset Sum (boolean variant):
// vector<bool> dp(target+1,false); dp[0]=true;
// for each item: for w=target..item: dp[w]|=dp[w-item]`},
                    {
                        name: 'LCS', imp: 'must', time: 'O(nm)', space: 'O(nm)',
                        sit: 'Longest Common Subsequence — characters need not be contiguous.',
                        when: 'Diff tools, DNA matching, edit distance, shortest common supersequence.',
                        how: 'Match: 1+diagonal. Mismatch: max(skip-row, skip-col). Build bottom-up table.',
                        rec: '🔥 Foundation of string DP. Edit Distance and SCS build directly on this.',
                        code: `vector<vector<int>> dp(n+1,vector<int>(m+1,0));
for(int i=1;i<=n;i++)
  for(int j=1;j<=m;j++){
    if(s1[i-1]==s2[j-1]) dp[i][j]=1+dp[i-1][j-1];
    else dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
  }
return dp[n][m];

// Edit Distance: add +1 for insert/delete/replace`},
                    {
                        name: 'Coin Change', imp: 'must', time: 'O(n×amt)', space: 'O(amt)',
                        sit: 'Min coins to make amount; coins reusable — unbounded knapsack.',
                        when: 'Minimum cost/steps with reusable choices. Count of ways variant too.',
                        how: 'dp[a]=min over all coins of (1+dp[a-coin]). For count-ways: dp[a]+=dp[a-coin].',
                        rec: '🔥 Two variants: min count AND count of ways. Both are must-know. Very commonly asked.',
                        code: `// Min coins
vector<int> dp(amt+1,INT_MAX); dp[0]=0;
for(int a=1;a<=amt;a++)
  for(int c:coins)
    if(c<=a&&dp[a-c]!=INT_MAX)
      dp[a]=min(dp[a],1+dp[a-c]);

// Count ways (unbounded, order doesn't matter):
vector<long long> ways(amt+1,0); ways[0]=1;
for(int c:coins)
  for(int a=c;a<=amt;a++) ways[a]+=ways[a-c];`},
                    {
                        name: 'LIS', imp: 'high', time: 'O(n log n)', space: 'O(n)',
                        sit: 'Longest Increasing Subsequence — O(n log n) with patience sorting.',
                        when: 'LIS length, Russian doll envelopes, minimum number of chains.',
                        how: 'Maintain tails array. Binary search for position to insert/replace. tails.size()=LIS length.',
                        rec: '⭐ O(n log n) solution impresses. Russian Doll (sort by width, LIS on height) is a hard extension.',
                        code: `vector<int> tails;
for(int x:nums){
  auto it=lower_bound(tails.begin(),tails.end(),x);
  if(it==tails.end()) tails.push_back(x);
  else *it=x;
}
return (int)tails.size();

// Russian Doll: sort by width ASC, height DESC
// then LIS on heights only`},
                ]
            },
            {
                id: 'heap', label: 'Heap / Priority Q', color: '#5a3a9a', bg: '#f3eefb', border: '#c0a0e8', side: 'right',
                algos: [
                    {
                        name: 'Top-K Elements', imp: 'must', time: 'O(n log k)', space: 'O(k)',
                        sit: 'Find k largest/smallest in O(n log k) without full sort.',
                        when: 'Kth largest, top-k frequent, k closest points, stream median.',
                        how: 'Min-heap of size k. If new element > heap top, pop and push. Heap = top-k largest.',
                        rec: '🔥 LC215 (Kth Largest) is extremely common. Know min-heap for largest, max-heap for smallest.',
                        code: `// Kth Largest using min-heap of size k
priority_queue<int,vector<int>,greater<int>> pq;
for(int x:nums){
  pq.push(x);
  if((int)pq.size()>k) pq.pop();
}
return pq.top();

// K Closest Points: heap by distance
// Top-K Frequent: count freq, then heap by freq`},
                    {
                        name: 'Merge K Sorted', imp: 'must', time: 'O(n log k)', space: 'O(k)',
                        sit: 'Merge k sorted lists/arrays efficiently using a min-heap.',
                        when: 'Merge k sorted lists, merge k sorted arrays, external sort.',
                        how: 'Push first element of each list into min-heap with list index. Pop, push next from same list.',
                        rec: '🔥 Classic heap problem asked at Google, Microsoft, Uber. Know both heap and divide-and-conquer.',
                        code: `// Min-heap: {val, listIdx, elemIdx}
using T=tuple<int,int,int>;
priority_queue<T,vector<T>,greater<T>> pq;
for(int i=0;i<k;i++)
  if(!lists[i].empty())
    pq.push({lists[i][0],i,0});
vector<int> res;
while(!pq.empty()){
  auto[v,i,j]=pq.top();pq.pop();
  res.push_back(v);
  if(j+1<(int)lists[i].size())
    pq.push({lists[i][j+1],i,j+1});
}`},
                    {
                        name: 'Median Finder', imp: 'high', time: 'O(log n)', space: 'O(n)',
                        sit: 'Find median of a running data stream in O(log n) per insert.',
                        when: 'Running median, sliding window median (harder variant).',
                        how: 'Two heaps: max-heap (lower half) and min-heap (upper half). Balance sizes. Median = tops.',
                        rec: '⭐ LC295. Elegant two-heap solution. Sliding window median is a hard extension.',
                        code: `priority_queue<int> lo;                      // max-heap
priority_queue<int,vector<int>,greater<int>> hi; // min-heap
void addNum(int n){
  lo.push(n);
  hi.push(lo.top()); lo.pop();
  if(hi.size()>lo.size()+1){
    lo.push(hi.top()); hi.pop();
  }
}
double getMedian(){
  if(hi.size()>lo.size()) return hi.top();
  return (lo.top()+hi.top())/2.0;
}`},
                ]
            },
            {
                id: 'backtrack', label: 'Backtracking', color: '#8a6a00', bg: '#fdfaec', border: '#e0cc80', side: 'right',
                algos: [
                    {
                        name: 'Subsets', imp: 'must', time: 'O(n×2ⁿ)', space: 'O(n)',
                        sit: 'Generate all 2ⁿ subsets of a set — template for all backtracking.',
                        when: 'Power set, sum subsets, target subsets, subsequences.',
                        how: 'At each index: include or skip. Recurse. Add current state to result at each call.',
                        rec: '🔥 Core backtracking template. Understand this and permutations/combinations follow naturally.',
                        code: `vector<vector<int>> res;
void bt(int start, vector<int>& curr, vector<int>& nums){
  res.push_back(curr);           // add at every node
  for(int i=start;i<(int)nums.size();i++){
    curr.push_back(nums[i]);     // choose
    bt(i+1,curr,nums);           // explore
    curr.pop_back();             // unchoose
  }
}
// Call: bt(0, curr, nums)`},
                    {
                        name: 'Permutations', imp: 'must', time: 'O(n×n!)', space: 'O(n)',
                        sit: 'Generate all n! arrangements — swap-based, no extra visited array.',
                        when: 'All permutations, next permutation, permutation sequence (LC60).',
                        how: 'Swap current index with each subsequent. Recurse. Swap back (backtrack).',
                        rec: '🔥 Direct interview question. Also know "next permutation" in-place algorithm.',
                        code: `void perm(vector<int>& a, int start){
  if(start==(int)a.size()){
    res.push_back(a); return;
  }
  for(int i=start;i<(int)a.size();i++){
    swap(a[start],a[i]);
    perm(a,start+1);
    swap(a[start],a[i]);   // backtrack
  }
}

// Next Permutation (O(n) in-place):
// 1) Find rightmost a[i]<a[i+1]
// 2) Swap with smallest larger to its right
// 3) Reverse everything to the right of i`},
                    {
                        name: 'Combination Sum', imp: 'high', time: 'O(2ⁿ)', space: 'O(n)',
                        sit: 'Find all combinations summing to target — elements reusable.',
                        when: 'Combination sum, coin change combos, factor combinations.',
                        how: 'At each step: include current (reuse: pass same i) or skip to next (i+1).',
                        rec: '⭐ Classic. Extend with deduplication (sort + skip same adjacent) for Combo Sum II.',
                        code: `void bt(int start, int remain, vector<int>& curr){
  if(remain==0){res.push_back(curr);return;}
  if(remain<0) return;
  for(int i=start;i<n;i++){
    // skip duplicates for Combination Sum II:
    // if(i>start&&cands[i]==cands[i-1]) continue;
    curr.push_back(candidates[i]);
    bt(i,remain-candidates[i],curr); // i for reuse
    curr.pop_back();
  }
}`},
                    {
                        name: 'N-Queens / Sudoku', imp: 'high', time: 'O(n!)', space: 'O(n)',
                        sit: 'Constraint-satisfaction backtracking with aggressive pruning.',
                        when: 'N-Queens, Sudoku solver, word search, crossword fill.',
                        how: 'Place one element per row/cell. Check constraints. Backtrack on violation. Prune early.',
                        rec: '⭐ N-Queens is a classic backtracking showcase. Sudoku solver is asked at senior roles.',
                        code: `// N-Queens
vector<bool> col(n),diag1(2*n),diag2(2*n);
void solve(int row){
  if(row==n){res.push_back(board);return;}
  for(int c=0;c<n;c++){
    if(col[c]||diag1[row-c+n]||diag2[row+c]) continue;
    col[c]=diag1[row-c+n]=diag2[row+c]=true;
    board[row][c]='Q';
    solve(row+1);
    board[row][c]='.';
    col[c]=diag1[row-c+n]=diag2[row+c]=false;
  }
}`},
                ]
            },
            {
                id: 'greedy', label: 'Greedy', color: '#0a6e3a', bg: '#eafaf3', border: '#7dd8a8', side: 'right',
                algos: [
                    {
                        name: 'Activity Selection', imp: 'must', time: 'O(n log n)', space: 'O(1)',
                        sit: 'Maximum non-overlapping intervals — greedy by earliest end time.',
                        when: 'Non-overlapping intervals, meeting rooms, task scheduling, free time.',
                        how: 'Sort by end time. Greedily pick if start >= last end. Classic exchange argument.',
                        rec: '🔥 LC435 Non-overlapping Intervals, Meeting Rooms II — asked everywhere.',
                        code: `// Max non-overlapping intervals (sort by end)
sort(intervals.begin(),intervals.end(),
  [](auto&a,auto&b){return a[1]<b[1];});
int count=1, lastEnd=intervals[0][1];
for(int i=1;i<n;i++){
  if(intervals[i][0]>=lastEnd){
    count++; lastEnd=intervals[i][1];
  }
}
// Meeting Rooms II: min rooms = max overlapping
// → sort events, use priority queue / two-pointer`},
                    {
                        name: 'Jump Game', imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'Can you reach end? What is minimum jumps? Both are greedy.',
                        when: 'Jump Game I (can reach), Jump Game II (min jumps).',
                        how: 'Track farthest reachable. Greedily advance. For min jumps, track current level end.',
                        rec: '🔥 Two variants (reach + min jumps) both commonly asked. LC45 and LC55.',
                        code: `// Can reach end (LC55)
int reach=0;
for(int i=0;i<n;i++){
  if(i>reach) return false;
  reach=max(reach,i+nums[i]);
}
return true;

// Minimum jumps (LC45) — BFS-style greedy
int jumps=0, curEnd=0, farthest=0;
for(int i=0;i<n-1;i++){
  farthest=max(farthest,i+nums[i]);
  if(i==curEnd){jumps++;curEnd=farthest;}
}
return jumps;`},
                    {
                        name: 'Interval Merge', imp: 'must', time: 'O(n log n)', space: 'O(n)',
                        sit: 'Merge all overlapping intervals into minimal set.',
                        when: 'Merge intervals, insert interval, employee free time.',
                        how: 'Sort by start. If curr start ≤ prev end, merge by taking max of ends.',
                        rec: '🔥 LC56. Very commonly asked as part of scheduling/calendar problems.',
                        code: `sort(v.begin(),v.end());
vector<vector<int>> res;
for(auto& iv:v){
  if(res.empty()||res.back()[1]<iv[0])
    res.push_back(iv);
  else
    res.back()[1]=max(res.back()[1],iv[1]);
}
return res;`},
                ]
            },
            {
                id: 'trie', label: 'Trie', color: '#5a1a5a', bg: '#f8eef8', border: '#d0a0d0', side: 'left',
                algos: [
                    {
                        name: 'Trie Insert/Search', imp: 'must', time: 'O(L)', space: 'O(L×A)',
                        sit: 'Prefix-based string lookup in O(L) — far faster than hash for prefix queries.',
                        when: 'Autocomplete, word search, prefix count, longest word, IP routing.',
                        how: 'Each node has children[26]. Mark isEnd. Insert: follow/create path. Search: follow path.',
                        rec: '🔥 Trie questions appear frequently at product companies. Know implement from scratch.',
                        code: `struct TrieNode{
  TrieNode* ch[26]={};
  bool end=false;
};
class Trie{
  TrieNode* root=new TrieNode();
public:
  void insert(string s){
    TrieNode* c=root;
    for(char x:s){
      if(!c->ch[x-'a']) c->ch[x-'a']=new TrieNode();
      c=c->ch[x-'a'];
    }
    c->end=true;
  }
  bool search(string s){
    TrieNode* c=root;
    for(char x:s){
      if(!c->ch[x-'a']) return false;
      c=c->ch[x-'a'];
    }
    return c->end;
  }
};`},
                    {
                        name: 'Word Search II', imp: 'high', time: 'O(M×N×4^L)', space: 'O(L×A)',
                        sit: 'Find all words from list in 2D grid — Trie prunes search efficiently.',
                        when: 'Word search in board, multiple word matching, wildcard word match.',
                        how: 'Build Trie from word list. DFS on board. Prune when prefix not in Trie. Mark found.',
                        rec: '⭐ Classic hard Trie+DFS combination. Asked at Google, Bytedance.',
                        code: `// Build trie from words, then DFS grid
void dfs(vector<vector<char>>& b,
         TrieNode* node,int i,int j,string& word){
  if(i<0||i>=M||j<0||j>=N||b[i][j]=='#') return;
  char c=b[i][j];
  if(!node->ch[c-'a']) return;
  node=node->ch[c-'a'];
  word+=c;
  if(node->end){res.push_back(word);node->end=false;}
  b[i][j]='#'; // mark visited
  for(auto[di,dj]:dirs) dfs(b,node,i+di,j+dj,word);
  b[i][j]=c; word.pop_back(); // backtrack
}`},
                ]
            },
            {
                id: 'bits', label: 'Bit Manipulation', color: '#1a4a8a', bg: '#eef4ff', border: '#a0c4f4', side: 'left',
                algos: [
                    {
                        name: 'XOR Tricks', imp: 'must', time: 'O(n)', space: 'O(1)',
                        sit: 'XOR cancels paired elements — find single/missing number in O(1) space.',
                        when: 'Single number, missing number, two non-duplicate numbers, swap without temp.',
                        how: 'a^a=0, a^0=a. XOR all → paired cancel, single remains.',
                        rec: '🔥 "Single Number" and "Missing Number" are must-knows. XOR is the O(1) space trick.',
                        code: `// Single Number (all others appear twice)
int single=0;
for(int x:nums) single^=x;
return single;

// Missing Number in [0..n]
int miss=n;
for(int i=0;i<n;i++) miss^=i^nums[i];
return miss;

// Two non-duplicates: XOR all, find set bit,
// partition by bit, XOR each partition separately`},
                    {
                        name: 'Bit Counting', imp: 'high', time: 'O(1)', space: 'O(1)',
                        sit: 'Count set bits, check power of 2, extract/manipulate individual bits.',
                        when: 'Hamming weight, single-bit checks, bit manipulation in DP states.',
                        how: 'n&(n-1) removes lowest set bit. __builtin_popcount(n) counts all. n&(-n) isolates LSB.',
                        rec: '⭐ Bit tricks come up in number theory problems and bitmask DP.',
                        code: `// Count set bits (Kernighan)
int count=0;
while(n){ n&=(n-1); count++; }

// Power of 2: (n>0)&&!(n&(n-1))
// Isolate LSB: n & (-n)
// Check kth bit: (n>>k)&1
// Set kth bit: n|(1<<k)
// Clear kth bit: n&~(1<<k)

// Counting Bits for 0..n:
dp[i]=dp[i>>1]+(i&1);`},
                    {
                        name: 'Bitmask DP', imp: 'high', time: 'O(n×2ⁿ)', space: 'O(2ⁿ)',
                        sit: 'DP over subsets — traveling salesman, minimum cover, assignment problems.',
                        when: 'TSP, minimum cost to visit all nodes, set cover, bitfield states in DP.',
                        how: 'State = bitmask of visited. Transition: add next unvisited node.',
                        rec: '⭐ Asked at senior/competitive level. Good to know for ICPC background candidates.',
                        code: `// TSP-style: dp[mask][i] = min cost to visit
// all nodes in mask, ending at i
int dp[1<<n][n]; // initialize to INF
dp[1][0]=0;      // start at node 0
for(int mask=1;mask<(1<<n);mask++)
  for(int u=0;u<n;u++) if((mask>>u)&1)
    for(int v=0;v<n;v++) if(!((mask>>v)&1))
      dp[mask|(1<<v)][v]=min(
        dp[mask|(1<<v)][v],
        dp[mask][u]+cost[u][v]);`},
                ]
            },
            {
                id: 'math', label: 'Math & Numbers', color: '#6b3a00', bg: '#fdf5ec', border: '#e0c090', side: 'right',
                algos: [
                    {
                        name: 'GCD / LCM', imp: 'must', time: 'O(log n)', space: 'O(1)',
                        sit: 'Euclidean GCD is foundation of all number theory — O(log n) and elegant.',
                        when: 'GCD, LCM, simplify fractions, count coprime pairs, array divisibility.',
                        how: 'gcd(a,b) = gcd(b, a%b). Recurse until b=0. LCM = a/gcd(a,b)*b.',
                        rec: '🔥 Asked at every company as number theory foundation. Know extended Euclidean too.',
                        code: `int gcd(int a,int b){ return b?gcd(b,a%b):a; }
int lcm(int a,int b){ return a/gcd(a,b)*b; } // div first to prevent overflow

// Extended Euclidean (ax+by=gcd):
int extGCD(int a,int b,int&x,int&y){
  if(!b){x=1;y=0;return a;}
  int x1,y1,g=extGCD(b,a%b,x1,y1);
  x=y1; y=x1-(a/b)*y1;
  return g;
}`},
                    {
                        name: 'Sieve of Eratosthenes', imp: 'high', time: 'O(n log log n)', space: 'O(n)',
                        sit: 'Find all primes up to n efficiently — O(n log log n) preprocessing.',
                        when: 'Count primes, prime factorization, prime sum queries.',
                        how: 'Mark all multiples of each prime as composite starting from p².',
                        rec: '⭐ "Count Primes" (LC204) is a standard question. Know the optimization starting at p².',
                        code: `vector<bool> sieve(int n){
  vector<bool> isPrime(n+1,true);
  isPrime[0]=isPrime[1]=false;
  for(int p=2;(long long)p*p<=n;p++)
    if(isPrime[p])
      for(int m=p*p;m<=n;m+=p)
        isPrime[m]=false;
  return isPrime;
}
// Count primes: count(isPrime.begin(),isPrime.end(),true)`},
                    {
                        name: 'Fast Power', imp: 'high', time: 'O(log n)', space: 'O(1)',
                        sit: 'Compute aⁿ mod m in O(log n) — essential for modular arithmetic.',
                        when: 'Large exponents, matrix exponentiation for Fibonacci, modular inverse.',
                        how: 'If n even: (a^(n/2))². If n odd: a*(a^(n-1)). Halve exponent each step.',
                        rec: '⭐ "Pow(x,n)" (LC50) is directly asked. Modular fast power used in cryptography questions.',
                        code: `long long power(long long base,long long exp,long long mod){
  long long result=1;
  base%=mod;
  while(exp>0){
    if(exp&1) result=result*base%mod;
    base=base*base%mod;
    exp>>=1;
  }
  return result;
}
// Modular inverse: power(a, MOD-2, MOD) when MOD is prime`},
                ]
            },
            {
                id: 'queue', label: 'Queue / Deque', color: '#6a1a8a', bg: '#f5eef8', border: '#c8a0e0', side: 'right',
                algos: [
                    {
                        name: 'Monotonic Deque', imp: 'high', time: 'O(n)', space: 'O(k)',
                        sit: 'Maximum/minimum in every sliding window of size k in O(n).',
                        when: 'Sliding window max, sliding window min, jump game variants.',
                        how: 'Deque stores indices in decreasing order of values. Front = max. Remove stale indices from front.',
                        rec: '⭐ "Sliding Window Maximum" (LC239) is a classic. Harder than monotonic stack for many.',
                        code: `deque<int> dq; vector<int> res;
for(int i=0;i<n;i++){
  // remove stale (out of window)
  while(!dq.empty()&&dq.front()<i-k+1)
    dq.pop_front();
  // remove smaller elements (useless)
  while(!dq.empty()&&arr[dq.back()]<arr[i])
    dq.pop_back();
  dq.push_back(i);
  if(i>=k-1) res.push_back(arr[dq.front()]);
}
return res;`},
                    {
                        name: 'Circular Queue', imp: 'good', time: 'O(1)', space: 'O(k)',
                        sit: 'Design queue using fixed-size array — efficient use of circular indexing.',
                        when: 'Design circular queue, implement queue with arrays, buffering.',
                        how: 'front and rear pointers. (rear+1)%capacity for next position. Track size.',
                        rec: '✓ LC622. Common design question to test understanding of modular indexing.',
                        code: `class CircularQueue{
  vector<int> q; int front,rear,sz,cap;
public:
  CircularQueue(int k):q(k),front(0),rear(-1),sz(0),cap(k){}
  bool enqueue(int v){
    if(sz==cap) return false;
    rear=(rear+1)%cap; q[rear]=v; sz++; return true;
  }
  bool dequeue(){
    if(!sz) return false;
    front=(front+1)%cap; sz--; return true;
  }
  int Front(){return sz?q[front]:-1;}
  int Rear() {return sz?q[rear]:-1;}
};`},
                ]
            },
        ];

        // ─── LAYOUT ──────────────────────────────────────────────────────────────────
        const LEFT = TOPICS.filter(t => t.side === 'left');
        const RIGHT = TOPICS.filter(t => t.side === 'right');
        const V_GAP = 80, LEAF_VGAP = 32, LEAF_XGAP = 185;
        const CX = 900, CY_PAD = 60;

        function totalH(topics) {
            return topics.reduce((a, t) => a + Math.max(36, t.algos.length * LEAF_VGAP) + V_GAP, 0);
        }
        const leftH = totalH(LEFT), rightH = totalH(RIGHT);
        const worldH = Math.max(leftH, rightH) + CY_PAD * 2 + 100;
        const worldW = CX * 2;

        function assignY(topics, total) {
            const startY = (worldH - total) / 2;
            let y = startY;
            return topics.map(t => {
                const blockH = Math.max(36, t.algos.length * LEAF_VGAP);
                const ty = y + blockH / 2;
                const leafStartY = y + blockH / 2 - (t.algos.length - 1) * LEAF_VGAP / 2;
                y += blockH + V_GAP;
                return { topic: t, ty, leafStartY };
            });
        }
        const leftLayout = assignY(LEFT, leftH);
        const rightLayout = assignY(RIGHT, rightH);
        const LEFT_TX = CX - 280, RIGHT_TX = CX + 280;
        const LEFT_LX = CX - 280 - LEAF_XGAP, RIGHT_LX = CX + 280 + LEAF_XGAP;

        // ─── STATE ────────────────────────────────────────────────────────────────────
        let activeId = null;
        const nodeMap = {}, leafMap = {};
        let dynPaths = [];
        const world = document.getElementById('world');
        world.style.width = worldW + 'px';
        world.style.height = worldH + 'px';
        const svg = document.getElementById('lines');

        // ─── PAN/ZOOM ─────────────────────────────────────────────────────────────────
        const vp = document.getElementById('viewport');
        let scale = 1, tx = 0, ty = 0, drag = false, sx, sy, stx, sty;
        function applyT() { world.style.transform = `translate(${tx}px,${ty}px) scale(${scale})` }
        function fit() {
            const vw = vp.offsetWidth, vh = vp.offsetHeight - 80;
            scale = Math.min(vw / worldW, vh / worldH) * 0.88;
            tx = (vp.offsetWidth - worldW * scale) / 2;
            ty = (vp.offsetHeight - worldH * scale) / 2 + 48;
            applyT();
        }
        vp.addEventListener('mousedown', e => {
            if (e.target.closest('.branch-node') || e.target.closest('.leaf-node') || e.target.closest('.center-node')) return;
            drag = true; sx = e.clientX; sy = e.clientY; stx = tx; sty = ty;
            vp.classList.add('dragging');
        });
        window.addEventListener('mousemove', e => { if (!drag) return; tx = stx + (e.clientX - sx); ty = sty + (e.clientY - sy); applyT() });
        window.addEventListener('mouseup', () => { drag = false; vp.classList.remove('dragging') });
        vp.addEventListener('wheel', e => {
            e.preventDefault();
            const f = e.deltaY < 0 ? 1.1 : .91;
            const r = vp.getBoundingClientRect();
            tx = (e.clientX - r.left) - (e.clientX - r.left - tx) * f;
            ty = (e.clientY - r.top) - (e.clientY - r.top - ty) * f;
            scale = Math.max(.15, Math.min(3, scale * f)); applyT();
        }, { passive: false });
        document.getElementById('bi').onclick = () => { scale = Math.min(3, scale * 1.2); applyT() };
        document.getElementById('bo').onclick = () => { scale = Math.max(.15, scale / 1.2); applyT() };
        document.getElementById('bf').onclick = fit;

        // ─── SVG LINE ─────────────────────────────────────────────────────────────────
        function hLine(x1, y1, x2, y2, color, dashed) {
            const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const mx = (x1 + x2) / 2;
            p.setAttribute('d', `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`);
            p.setAttribute('fill', 'none'); p.setAttribute('stroke', color);
            p.setAttribute('stroke-width', dashed ? '1.2' : '1.8');
            p.setAttribute('stroke-opacity', dashed ? '.5' : '.35');
            p.setAttribute('stroke-linecap', 'round');
            if (dashed) p.setAttribute('stroke-dasharray', '5,6');
            return p;
        }

        // ─── NODE FACTORY ─────────────────────────────────────────────────────────────
        function mkEl(cls, x, y, html) {
            const el = document.createElement('div');
            el.className = cls; el.style.left = x + 'px'; el.style.top = y + 'px';
            el.innerHTML = html; world.appendChild(el); return el;
        }
        function impStar(imp) {
            if (imp === 'must') return '<span class="leaf-imp">🔥</span>';
            if (imp === 'high') return '<span class="leaf-imp">⭐</span>';
            return '';
        }

        // ─── PANEL ────────────────────────────────────────────────────────────────────
        const panel = document.getElementById('panel');
        function openPanel(algo, topic) {
            document.getElementById('ph-bc').textContent = topic.label + ' › Algorithm';
            document.getElementById('ph-title').textContent = algo.name;
            let rc = 'rec-good', rl = '✓ GOOD TO KNOW';
            if (algo.imp === 'must') { rc = 'rec-must'; rl = '🔥 MUST KNOW — Asked in almost every interview'; }
            else if (algo.imp === 'high') { rc = 'rec-high'; rl = '⭐ HIGH PRIORITY — Very commonly tested'; }
            document.getElementById('ph-badges').innerHTML =
                `<span class="${rc}">${rl}</span>
     <span class="ph-badge" style="background:${topic.bg};border-color:${topic.border};color:${topic.color}">⏱ ${algo.time}</span>
     <span class="ph-badge" style="background:${topic.bg};border-color:${topic.border};color:${topic.color}">💾 ${algo.space}</span>`;
            document.getElementById('pb').innerHTML = `
    <div class="rec-tip" style="background:${topic.bg};border-left:3px solid ${topic.color}">
      <div class="rec-tip-lbl" style="color:${topic.color}">Why This Matters</div>${algo.rec}
    </div>
    <div class="p-sit" style="border-left:3px solid ${topic.color}">${algo.sit}</div>
    <div class="p-lbl">When to Use</div><div class="p-txt">${algo.when}</div>
    <div class="p-lbl">How It Works</div><div class="p-txt">${algo.how}</div>
    <div class="p-lbl">C++ Implementation</div>
    <div class="p-code">${algo.code}</div>
  `;
            panel.classList.add('open');
        }
        document.getElementById('ph-close').onclick = () => panel.classList.remove('open');

        // ─── EXPAND ───────────────────────────────────────────────────────────────────
        function clearDyn() { dynPaths.forEach(p => p.remove()); dynPaths = [] }
        function expand(id) {
            const same = activeId === id;
            Object.values(leafMap).flat().forEach(l => l.el.classList.remove('visible'));
            clearDyn();
            document.querySelectorAll('.branch-node').forEach(n => n.classList.remove('active'));
            panel.classList.remove('open');
            if (same) { activeId = null; return; }
            activeId = id;
            const ti = nodeMap[id]; if (ti) ti.el.classList.add('active');
            (leafMap[id] || []).forEach(lf => {
                lf.el.classList.add('visible');
                const p = hLine(ti.x, ti.y, lf.x, lf.y, ti.topic.color, true);
                svg.appendChild(p); dynPaths.push(p);
            });
        }

        // ─── BUILD ────────────────────────────────────────────────────────────────────
        function build() {
            mkEl('center-node', CX, worldH / 2, 'DSA');
            function addTopic(t, txp, lxp, side) {
                // computed in layout arrays
            }
            [[leftLayout, LEFT_TX, LEFT_LX], [rightLayout, RIGHT_TX, RIGHT_LX]].forEach(([layout, txp, lxp]) => {
                layout.forEach(({ topic, ty, leafStartY }) => {
                    const el = mkEl('branch-node', txp, ty, `<span>${topic.label}</span>`);
                    el.style.background = topic.bg; el.style.borderColor = topic.border; el.style.color = topic.color;
                    nodeMap[topic.id] = { el, x: txp, y: ty, topic };
                    const p = hLine(CX, worldH / 2, txp, ty, topic.color, false); svg.appendChild(p);
                    el.addEventListener('click', () => expand(topic.id));
                    leafMap[topic.id] = topic.algos.map((algo, ai) => {
                        const lx = lxp, ly = leafStartY + ai * LEAF_VGAP;
                        const lel = mkEl('leaf-node', lx, ly, `${impStar(algo.imp)}<span>${algo.name}</span>`);
                        lel.style.background = topic.bg; lel.style.borderColor = topic.border; lel.style.color = topic.color;
                        lel.addEventListener('click', e => { e.stopPropagation(); openPanel(algo, topic) });
                        return { el: lel, x: lx, y: ly, algo };
                    });
                });
            });
            // stats
            let must = 0, high = 0, good = 0, algos = 0;
            TOPICS.forEach(t => { t.algos.forEach(a => { algos++; if (a.imp === 'must') must++; else if (a.imp === 'high') high++; else good++; }) });
            document.getElementById('s-must').textContent = must;
            document.getElementById('s-high').textContent = high;
            document.getElementById('s-good').textContent = good;
            document.getElementById('s-topics').textContent = TOPICS.length;
            document.getElementById('s-algos').textContent = algos;
            fit();
        }

        // ─── SEARCH ───────────────────────────────────────────────────────────────────
        const inp = document.getElementById('searchinput');
        const srBox = document.getElementById('search-results');
        inp.addEventListener('input', () => {
            const q = inp.value.trim().toLowerCase();
            if (!q) { srBox.style.display = 'none'; return; }
            const hits = [];
            TOPICS.forEach(t => {
                t.algos.forEach(a => {
                    if (a.name.toLowerCase().includes(q) || t.label.toLowerCase().includes(q))
                        hits.push({ topic: t, algo: a });
                });
            });
            if (!hits.length) { srBox.style.display = 'none'; return; }
            srBox.innerHTML = hits.slice(0, 8).map(h =>
                `<div class="sr-item" data-tid="${h.topic.id}" data-aid="${h.algo.name}">
      <div class="sr-topic" style="color:${h.topic.color}">${h.topic.label}</div>
      <div class="sr-name">${impStar(h.algo.imp)} ${h.algo.name}</div>
    </div>`).join('');
            srBox.style.display = 'block';
            srBox.querySelectorAll('.sr-item').forEach(el => {
                el.addEventListener('click', () => {
                    const tid = el.dataset.tid, aid = el.dataset.aid;
                    const topic = TOPICS.find(t => t.id === tid);
                    const algo = topic.algos.find(a => a.name === aid);
                    expand(tid);
                    setTimeout(() => openPanel(algo, topic), 50);
                    srBox.style.display = 'none'; inp.value = '';
                });
            });
        });
        document.addEventListener('click', e => { if (!e.target.closest('#topbar')) srBox.style.display = 'none' });

        build();
    