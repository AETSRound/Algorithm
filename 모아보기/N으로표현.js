function solution(N, number){
    const MAX = 8;
    const set = new Array(MAX).fill().map(() => new Set());
    //각 셋의 의미는 숫자 N을 한번, N을 두번, N을 세번, ... N을 8번까지.

    //1번 사용시
    // 나올 수 있는 숫자는 단 하나.

    //2번 사용시
    // 두개를 이어붙인 값 과
    // + 1번 셋의 요소 끼리의 사칙연산을

    //3번 사용시
    // 세개를 이어 붙인 값
    // + 1번 셋의 요소 와 2번 셋의 요소의 사칙연산
    // + 2번 셋의 요소 와 1번 셋의 요소의 사칙연산


    //DP는 하나의 셋을 두고 있어야 값을 저장해서 다음번의 중복 계산에서 값을 가져다 쓸수 있다.
    // [set() for x in range(8)]
    //8번을 넘기면 -1로 리턴을 하라고 했으니, 각 숫자를 쓸수 있는 최대 횟수는 8번.

    for(let i=0; i<MAX; i++){
        set[i].add(Number(N.toString().repeat(i+1)));
        console.log(set[-1])
        for (let j=0; j < i; j++) {
            for(const arg1 of set[j]){
                for(const arg2 of set[i-j-1]){
                    set[i].add(arg1+arg2);
                    set[i].add(arg1-arg2);
                    set[i].add(arg1*arg2);
                    set[i].add(arg1/arg2); 
                }
            }
        }
        if(set[i].has(number)){
            return i+1;
        }
    }
    return -1;
}


solution(1, 3);
//이거 동적계획법 하나도모른다...ㅠㅠ



//이건 쭉 모아서 다시 정리하기.