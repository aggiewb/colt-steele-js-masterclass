// First try at naive search with pseudocode.
function naiveSearch(str, tarStr) {
    let tarStrCounter = 0;
    let j = 0;
    
    for (let i = 0; i < str.length; i++) {
      const currLetter = str[i];
    
      if (currLetter === tarStr[j]) {
        j++;
        if (j === tarStr.length) {
          tarStrCounter++;
          j = 0;
        }
      } 
      
      else if (j > 0) {
          i--;
          j = 0;
      }
      
    }
    return tarStrCounter;
}

// Second simplier implementation after course video explanation
function naiveSearch2(str, tarStr) {
    let tarStrCounter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < tarStr.length; j++) {
            if (str[i + j] !== tarStr[j]) {
                break;
            } else if (j === tarStr.length - 1) {
                tarStrCounter++;
            } 
        }
    }
    return tarStrCounter;
}