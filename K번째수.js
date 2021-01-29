// 프로그래머스 
// 정렬 - K번째수
function solution(array, commands) {
    let answer = [];

    for(let c of commands){
        let temp = array.slice(c[0] - 1 ,c[1] );
        answer.push(temp.sort((a,b)=>a-b)[c[2]-1]);
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4] ,	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));