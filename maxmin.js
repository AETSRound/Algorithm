function maxVal(arrs){
    return arrs.sort((a,b) => a - b)[arrs.length -1];
}

console.log(maxVal([1,10, 30, 4, 9, 28]));

function maxFor(arrs){
    let mval = arrs[0];
    for(let v of arrs){
        if(mval < v){
            mval = v;
        }
    }
    return mval;
}

console.log(maxFor([1,10, 30, 4, 9, 28]));