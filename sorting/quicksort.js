// Average Time Complexity: O(N*log(N))

function quicksort(arr){
    if(arr.length <= 1) return arr

    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr[pivotIndex];
    let before = [];
    let after = [];

    for(var i=0; i< arr.length; i++){
        if(i !== pivotIndex){
            if(arr[i] <= pivot){
                before.push(arr[i])
            }
            else{
                after.push(arr[i])
            }
        }
    }

    return quicksort(before).concat(pivot).concat(quicksort(after))
    
}
