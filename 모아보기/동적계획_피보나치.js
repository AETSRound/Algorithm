//피보나치의 동적계획법
const d = [];
function solution(x){
    if(x == 1 || x ==2){
        return d[x] = 1;
    }
    if(d[x]){
        return d[x];
    }

    return d[x] = solution(x-1) + solution(x-2);
}


//피보나치의 재귀함수 구현.
function dp(x){
    if(x == 1 || x ==2){
        return 1;
    }
    return dp(x-1) + dp(x-2);
}
//개선해야된다 숫자가 커지면 오래걸린다.

// console.log(dp(10))
console.log(solution(50));
console.log(d);