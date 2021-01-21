// Hamming Numbers

function hamming (n) {
    let two = -1;
    let three = -1;
    let five = -1;
    let i = 0;
    let j = 0;
    let k = 0;
    // 각 배열의 [0]은 내가 곱해야할 origin value.
    // 각 배열의 [1]은 return array에 밀어넣을 최소값.
    let ret = [1];
    while(ret.length < n){
        if(two < 0){
            two = ret[i]*2;
        }       
        if(three < 0){
            three = ret[j]*3;
        } 
        if(five < 0 ){
            five = ret[k]*5;
        }
        let min = Math.min(two, three, five);
        if(!ret.includes(min)){
            ret.push(min);
        }
        if(min == two){
            two = -1;
            i++;
        }else if(min == three){
            three = -1;
            j++;
        }else if(min == five){
            five = -1;
            k++;
        }
    }
    console.log(ret);
    return(ret[n-1]);
}

console.log(hamming(6));

