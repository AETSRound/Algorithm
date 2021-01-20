// function sumStrings(a,b) { 
//     // let maxLen = (a.length > b.length) ? a.length + 1 : b.length + 1;
//     return String(BigInt(a) + BigInt(b));
// }


function sumStrings(a, b) {
    var aa = Array.from(a, Number),
        bb = Array.from(b, Number),
        result = [],
        carry = 0,
        i = Math.max(a.length, b.length);
        
    while (i--) {
        carry += (aa.pop() || 0) + (bb.pop() || 0);
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    while (carry) {
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    while(result[0] == 0){
        result = result.slice(1);
    }

    console.log(result);
    return result.join('');
}

// console.log(sumStrings('050095301248058391139327916261', '081055900096023504197206408605'));
console.log(sumStrings('00103', '08567'));


// function sumStrings(a, b) {
//     var res = '', c = 0;
//     a = a.split('');
//     b = b.split('');
//     while (a.length || b.length || c) {
//       c += ~~a.pop() + ~~b.pop();
//       res = c % 10 + res;
//       c = c > 9;
//     }
//     return res.replace(/^0+/, '');
//   }