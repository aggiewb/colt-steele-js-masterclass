// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }

    const str1LetterCount = {};
    const str2LetterCount = {};

    for (const letter of str1) {
        str1LetterCount[letter] = (str1LetterCount[letter] || 0) + 1;
    }

    for (const letter of str2) {
        str2LetterCount[letter] = (str2LetterCount[letter] || 0) + 1;
    }

    for (const letter in str1LetterCount) {
        if (str1LetterCount[letter] !== str2LetterCount[letter]) {
            return false;
        }
    }
    
    return true;
}