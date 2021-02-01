function solution(operations) {
    let q = [];
    for(let op of operations){
        op = op.trim()
        let dt = op.split(" ");
        if(dt[0] =='I'){
            q.push(parseInt(dt[1]));
            q.sort((a,b) => a-b);
        }else if(dt[0] =='D'){
            if(q.length >= 1){
                
                if(dt[1] == '1'){
                    q.pop();
                }else if(dt[1] == '-1'){
                    q.shift();
                }
            }
        }
        console.log(q);
    }
    if(!q.length){
        return [0, 0];
    }else{
        return [q[q.length-1],q[0]];
    }
}

// console.log(solution(['I -9999']));
console.log(solution(['I 16', 'D 1']));
// console.log(solution(['I 7','I 5','I -5','D -1']));
// console.log(solution(['I 1', 'I 2', 'I 3', 'I 4', 'I 5',' I 6', 'I 7', 'I 8', 'I 9', 'I 10', 'D 1', 'D -1', 'D 1', 'D -1', 'I 1', 'I 2', 'I 3', 'I 4', 'I 5', 'I 6', 'I 7', 'I 8', 'I 9', 'I 10', 'D 1', 'D -1', 'D 1', 'D -1']));
// console.log(solution(['I 4', 'I 3', 'I 2', 'I 1', 'D 1','D 1', 'D -1', 'D -1', 'I 5', 'I 6'] ));