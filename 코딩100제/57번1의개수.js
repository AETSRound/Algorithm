function countOne() {
    let count = 0;
    for(let i=0; i<1001; i++){
        for(let n of String(i).split('')){
            if(n == 1){
                count++;
            }
        }
    }
    console.log(count);
}

countOne();

let s = '';
for(let i = 0; i <= 1000; i++){
  s += i;
}
let count = 0;
for(let j of s){
  if (j == 1){
    count++;
  }
}
console.log(count);