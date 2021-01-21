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

//2번 답안 - 정규표현식 사용
let s = '';
for(let i = 0; i <= 1000; i++){
  s += i;
}
console.log(s);
console.log(s.match(/1/g).length);