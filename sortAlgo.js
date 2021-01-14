function selectionSort(arr){
    let result = [];
    while(arr.length > 0){
        result.push(Math.min.apply(null, arr));
        arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    }
    return result;
}


console.log(selectionSort([13, 23, 44, 9, 10, 7]));

function insertionSort(arr){
    let result = [];
   
    function getIndex(array, value){
        for(let i in array){
            if(value < array[i]){
                return i;
            }
        }
        return array.length;
    }
    
    while(arr.length > 0){
        let insertV = arr.shift();
        let idx = getIndex(result, insertV);
        result.splice(idx, 0, insertV);
    }
    return result;
}

console.log(insertionSort([1, 3 , 10, 7, 55, 13]));