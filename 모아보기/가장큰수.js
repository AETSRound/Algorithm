// 정렬 - 가장 큰 수

function solution(numbers) {
    let answer = '';
    let sorts = [];
    numbers.sort();
    let sort = [];
    let before = '';
    for(let j = numbers.length-1; j>=0; j--){
        let head = String(numbers[j]).split("")[0]; //string head
        if(sort.length >0){
            before = String(sort[0]).split("")[0];
        }
        if(head != before && sort.length>0){
            sorts.push(sort);
            sort = [];
        }
        sort.push(numbers[j]);
    }
    if(sort.length>0){
        sorts.push(sort);
        sort = [];
    }
    console.log(sorts);
    
    for(let words of sorts){
        for(let i = words.length-1 ; i>= 0; i--){
            answer +=String(words[i]);
        }
    }
    return answer;
}