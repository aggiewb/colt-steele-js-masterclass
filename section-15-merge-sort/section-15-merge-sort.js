function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const arrHalfLength = Math.floor(arr.length / 2);
    return merge(
        mergeSort(arr.slice(0, arrHalfLength)),
        mergeSort(arr.slice(arrHalfLength))
    );
}

function merge(arr1, arr2) {
    let [i, j] = [0, 0];
    let newArr = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i]);
        i++;
      } else {
        newArr.push(arr2[j]);
        j++;
      }
    }
    
    if (i < arr1.length) {
      newArr = newArr.concat(arr1.slice(i));
    } else if (j < arr2.length) {
      newArr = newArr.concat(arr2.slice(j));
    }
    
    return newArr;
  }