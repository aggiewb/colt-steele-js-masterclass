function findLongestSubstring(str){
    let longest = 0;
    let letterSeen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (letterSeen[char]) {
          start = Math.max(start, letterSeen[char]);
      }
      longest = Math.max(longest, i - start + 1);
      letterSeen[char] = i + 1;
    }
    return longest;
}
  