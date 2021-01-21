function eleb(N) {
    let i = Math.floor(N/7);
    let rest = 0;
    for(; i > 0; i--){
        rest = N - i*7;
        let j = rest%3;
        if(j == 0){
            return i + rest/3;
        }
    }
    return -1;
}

console.log(eleb(24));