function solution(strings, arr){
    let temp = [];
    let copy = strings.split('\n');
    // console.log(copy);
    for(let mark of arr){
        // console.log(copy);
        for(let i in copy){
            let c = copy[i];
            let end = c.indexOf(mark);
            console.log("====")
            console.log(temp)
            console.log("====")
            if(end === -1){
                temp.push(c);
            }else{
                temp.push(c.substr(0, end));
            }
            copy[i] = c;
        }
       
    }
    console.log(temp);
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])