function solution(strings, arr){
    let temp = [];
    let copy = strings.split('\n');
    // console.log(copy);
    for(let mark of arr){
        // console.log(copy);
        for(let i in copy){
            let c = copy[i];
            let end = c.indexOf(mark);
            if(end === -1){
                copy[i] = c.trim();
            }else{
                copy[i] = c.substr(0, end).trim();
            }
        }
       
    }
    console.log(copy.join('\n'));
    return copy.join('\n')
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])