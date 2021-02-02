function duplicateCount(text){
    let copy = text.toLowerCase();
    let tlist = [...copy];
    let cMap = new Map();
    let count = 0;
    let result = 0;
    for(let c of tlist){
        if(cMap.has(c)){
            count = cMap.get(c) + 1;
            console.log(count);
            cMap = cMap.set(c,count);
        }else{
            cMap = cMap.set(c,0);
        }
    }
    console.log(cMap);
    for(let i of cMap.values()){
        console.log(i);
        if(i != 0){
            result ++;
        }
    }
    return result;
}

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//   }
// console.log(duplicateCount(""));
// console.log(duplicateCount("abcde"));
// console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
// console.log(duplicateCount("Indivisibility"));
// console.log(duplicateCount("Indivisibilities"));

