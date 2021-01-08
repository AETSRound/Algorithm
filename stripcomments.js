function solution(strings, arr){
    let temp = [];
    let copy = strings.split('\n');
    console.log(copy);
    for(let mark of arr){
        // console.log(copy);
        for(let c of copy){
            let end = c.indexOf(mark);
            if(end === -1){
                temp.push(c);
            }else{
                temp.push(c.substr(0, end));
            }
        }
        
    }
    console.log(temp);
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])