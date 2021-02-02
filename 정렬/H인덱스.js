function solution(citations) {
    citations.sort((a,b)=> a-b);
    // h번 이상 인용 val >= h
    // h편 이상      citations.filter(c[i] >= val).length >= h
    let vals = [];
    let max = citations.length;

    let h = 0;

    while(max > h && max > 0){
        h = citations.filter(a => a >= max).length;
        console.log(`max         ${max}`);
        console.log(`h           ${h}`);
        vals.push(h);
        max--;
    }


    
    console.log(vals);
    return vals.pop()
}


// console.log(solution([3, 0, 6, 1, 5]))
// console.log(solution([6, 6, 6, 6, 6, 1]))
// console.log(solution([12, 11, 10, 9, 8, 1]))
// console.log(solution([4,4,4]))
console.log(solution([4, 4, 4, 5, 0, 1, 2, 3] ))
// console.log(solution([3, 1, 4, 2, 5]))
// console.log(solution([0, 1, 0, 2, 7]))