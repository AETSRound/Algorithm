function quickSort(arr){
    if(arr.length <=1){
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];

    for(let i=1; i< arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));

}

let ars = [1, 5, 29, 3, 11, 0, 5, 14, 41, 5, 42];
console.log(quickSort(ars));