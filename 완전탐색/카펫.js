// 완전탐색 - 카펫



function solution(brown, yellow) {
    let result = [];
    let full = brown + yellow;
    for(let i = Math.floor(Math.sqrt(full)); i>1; i--){
        if(full%i == 0){
            result.push( full/i >= i ? [full/i , i] : [i, full/i]);
        }

    }
    for(let r of result){
        let val = (r[0] - 1 + r[1] - 1)*2;
        if(brown == val){
            return r;
        }
    }
}


console.log(solution(50, 22));

