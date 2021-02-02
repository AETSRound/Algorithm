function maxNum(arr){
    let copy = [];
    Object.assign(copy, arr);
    // console.log(arr);
    if(copy.length <= 1){
        return 1;
    }
    let num = copy.length;
    copy.splice(copy.length-1,1);
    return num * maxNum(copy);
}

// console.log(maxNum([1,2,3,0]));


// 4* 3* 2* 1  / arr.length
// 3* 3* 2* 1 


function test(arr){
    if(arr.includes(0)){
        let numbs = arr.filter((a)=> a!==0).length;
        return parseInt(maxNum(arr)/arr.length)*numbs;
    }else{
        return maxNum(arr);
    }
}

console.log(test([1,2,3,4]))
console.log(test([1,0,3,0]))

// 4 3 2 1 

// 3 3 2 1 