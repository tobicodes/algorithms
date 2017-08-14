function merge(arr1, arr2){
  var result = [];
  var pointer1 = 0;
  var pointer2 = 0;

  if(arr1.length < 1 || arr2.length < 1) return "one of the input arrays is empty";
  
  function traverse(pointer1, pointer2){
    if(pointer1 >= arr1.length){
        result.push(...arr2.splice(pointer2));
        return;
    }
    if(pointer2 >= arr2.length){
        result.push(...arr1.splice(pointer1));
        return;
    }

    if (arr1[pointer1] < arr2[pointer2]){
        result.push(arr1[pointer1])
        traverse(pointer1+1, pointer2)
    }
    else {
        result.push(arr2[pointer2])
        traverse(pointer1, pointer2+1)
    }
  }

  traverse(pointer1, pointer2)
  return result;
}

// merge([1,2,3], [2,10,12, 15])


function mergesort(arr){
  if(arr.length === 0 ) return arr;
  if(arr.length === 1) return arr;

  var middle = Math.floor(arr.length/2);
  var left = arr.slice(0,middle)
  var right = arr.slice(middle)
  return merge(mergesort(left), mergesort(right))
  
}
