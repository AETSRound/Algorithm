function mergeSort(arrays){
    if(arrays.length <= 1){
        return arrays;
    }

    let mid = Math.floor(arrays.length/2);
    let left = arrays.slice(0,mid);
    let right = arrays.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];

    while(left.length >0 && right.length >0){
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    console.log(result);
    return result;
}



let ar = [1, 6,4,8, 10, 4, 5, 2, 69, 10, 44];

mergeSort(ar);