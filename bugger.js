function persistence(num) {
    let copy = [...String(num)];
    let count = 0;
    while(copy.length > 1){
        let temp = 1;
        for(let k of copy){
            temp *= Number(k);
        }
        count++;
        copy = [...String(temp)];
    }
    return count;
}

console.log(persistence(999))


// function persistence(num) {
//     var times = 0;
    
//     num = num.toString();
    
//     while (num.length > 1) {
//       times++;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
//  }