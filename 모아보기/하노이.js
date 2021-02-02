function solution(n) {
    let arr = []
    function hanoi(n, start, swap, end){
        if(n===1) {
            // console.log(`${n}을 ${start}에서 ${end}로 이동`);
            // console.log(`[${start}, ${end}]`);
            arr.push([start, end]);
        }
        else {
            hanoi(n-1, start, end, swap);
            // console.log(`${n}을 ${start}에서 ${end}로 이동`);
            arr.push([start, end]);
            hanoi(n-1, swap, start, end);
            // console.log(`[${start}, ${end}]`);
        }
    }
    hanoi(n, '1', '2', '3');
    console.log(arr);
    return arr;
}



solution(2);