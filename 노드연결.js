function solution(n, edge) {
    let answer = 0;

    const node = new Map();
    for(let e of edge){
        if(node.get(e[0])){
            let temp = Array.from(node.get(e[0]));
            node.set(e[0], [...temp, e[1]]);
        }else{
            node.set(e[0],[ e[1] ]);
        }
    }
    //후보자 배열
    let arr = [];
    for(let i = 0 ; i<n-1; i++){
        arr[i] = i+2;
    }
    
    
    let start = node.get(1);
    let res = [];
    while(arr.length > 0){
        res = start;
        for(let r of res){
            arr.splice(arr.indexOf(r), 1);
            start = node.get(r);
        }
        console.log(arr);
    }
    return res;
}


solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	);