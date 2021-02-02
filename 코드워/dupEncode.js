function duplicateEncode(word){
    let copy = [...word.toLowerCase()];
    let encode = new Map();
    console.log(copy)
    for(let i of copy){
        console.log(i);
        if(!encode.has(i)){
            encode = encode.set(i, '(');
        }else{
            encode = encode.set(i, ')');
        }
        
    }
    let result = '';
    for(let i in copy){
        result += encode.get(copy[i]);
    }
    return result;
}

// duplicateEncode('din')
console.log(duplicateEncode('Success'))



// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
// }