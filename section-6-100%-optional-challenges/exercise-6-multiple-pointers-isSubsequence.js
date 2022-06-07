// Write a function called isSubsequence which takes two strings and checks whether
// the characters in the first string form a subsequence of the characters in the
// second string. In other words, the function should check whether the characters in
// the first string appear somewhere in the second string, without their order changing.

// Your solutions must have at least the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    let [start, end] = [0, 0];
    while (end < str2.length) {
      if (str1[start] === str2[end]) {
          start++;
          if (str1.length === start) {
              return true;
          }
      } 
      end++;
    }
    return false;
}