//Binomial Expansion


function expand(expr) {
    if(!expr.includes('^')){
        return expr;
    }
    let spt = expr.split('^');
    if(spt[1] <= 1){
        return spt[0];
    }
    return spt[0] + "*" + expand(spt[0].concat('^').concat(parseInt(spt[1]) -1));
}

function calculator(expr) {
    if(!expr.includes('*')){
        return expr;
    }
    let spt = expr.split('*');
    // spt[0] //앞의 식
    // spt[1] //또다른 뒤의 식
    return spt;
}

function 곱해놓기(expr){
    if(!expr.includes('^')){
        return expr;
    }
    let spt = expr.split('^');
    let result = '';
    for(let i of spt){
        console.log(i);
    }
}


console.log((expand("(-x-1)^3")));
