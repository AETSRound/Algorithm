// 완전탐색 - 소수 찾기

function solution(numbers) {
    let arr = numbers.split('');
    let at = new Set();;
    for(let i=arr.length; i>0; i--){
        let t = permutation(arr, i);
        for(let j of t){
            at.add(parseInt(j));
        }
    }
    let count = 0;
    for(let k of at){
        if(thatPrime(k)){
            count++;
        }
    }
    return count;
}

function permutation(arr, selectNum) {
    let result = [];
    if (selectNum == 1) return arr;
    arr.forEach((v, idx, arr) => {
        const fixer = v;
        const restArr = arr.filter((_, index) => index !== idx);
        const permuationArr = permutation(restArr, selectNum - 1);
        const combineFixer = permuationArr.map((v) => fixer + v);
        result.push(...combineFixer);
    });
    return result;
}

function thatPrime(num){
    if (num <= 1)
        return false;
    else if (num == 2 || num == 3)
        return true;
    else if (num % 2 == 0 || num % 3 == 0)
        return false;
    for (let i = 5; i <= Math.floor(Math.sqrt(num)); i+=2)
    {
        if (num % i == 0 || num % (i + 2) == 0)
            return false;
    }
    return true;
}

console.log(solution("011"));