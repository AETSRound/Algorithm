function high(x){
    let copy = x.toLowerCase().split(' ');
    let result = '';
    let max = 0;
    console.log(copy);
    for(let i of copy){
        let score = 0;
        for(let k in i){
            score += (Number(i.charCodeAt(k)) - 96);
        }
        if(max < score){
            max = score;
            result = i
        }
        console.log(i);
        console.log(score);
    }
    return result;
}

high('what time are we climbing up the volcano');
// high('abc')


// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }