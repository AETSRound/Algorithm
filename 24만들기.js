// T.T.T.#2: Equal to 24

function equalTo24(a, b, c, d){
    let t =[a,b,c,d];
    // 1, 2, 3, 4, 6, 8, 12, 24
    const val = [1,2,3,4,6,8,12,24];
    const TF = 24;

    console.log(t);
    //더하기
    let sum = 0;
    for( let a of t ){
        sum += a;
    }
    if( sum === TF ){
        return t.join("+");
    }
    else if( sum > TF ){
        //빼기나 나누기 실행

    }
    else if( sum < TF ){
        //곱하기 실행
    }
    
}

console.log(equalTo24(6,6,6,6));