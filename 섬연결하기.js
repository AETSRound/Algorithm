function solution(n, costs) {
    let answer = 0;
    const linkCost = new Map();
    const linkBridge = new Map();
    for(let b of costs){
        linkCost.set([b[0], b[1]], b[2]);
        // if(linkBridge.get(b[0])){
        //     linkBridge.set(b[0], [...linkBridge.get(b[0]), b[1]]);
        // }else{
        //     linkBridge.set(b[0], [b[1]]);
        // }
        // if(linkBridge.get(b[1])){
        //     linkBridge.set(b[1], [...linkBridge.get(b[1]), b[0]]);
        // }else{
        //     linkBridge.set(b[1], [b[0]]);
        // }
    }
    //각 link 별 가격
    
    
    linkCost[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    
    console.log(linkCost);

    // console.log(linkBridge);
    //연결되어있는지에 대한 정보

    
    return answer;
}


solution(4	,[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]);


// https://programmers.co.kr/learn/courses/30/lessons/42861?language=javascript