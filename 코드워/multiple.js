function solution(number){
    //number 보다 작은 3과 5의 배수.
    let tot = 0;
    let nset = new Set();
    
    for(let i = 3; i< number ; i++){
      if(i%3 == 0 || i%5 == 0){
        nset = nset.add(i);
      }  
    }
    for(let r of nset){
        tot += r;
    }
    return tot;
}

console.log(solution(10));