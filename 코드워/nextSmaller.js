const nextSmaller = n => {
    let min = minify(n);
    while (--n >= min) {   // min 은 입력값이 최소값인 경우 -1을 return하기 위해 존재.
        console.log(`입력 값 감소중(n) : ${n}`);
        console.log(`최소값(minify) : ${minify(n)}`);
        
        if (minify(n) === min) {   //이게 같다. => 같은 숫자 구성으로 이루어져있다. => 가장 먼저 만나자마자 return  했으니, 이게 다음 작은 숫자.
            return n;
        }
    }
    return -1;
};
  
const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');
//$2 $1 은 앞의 replace 구문에서 () 로 묶인 패턴을 서로 교환 => 포획괄호(captureing parentheses)

console.log(nextSmaller(1324));

