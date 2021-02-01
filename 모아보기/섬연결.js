function solution(n, costs) {
    let answer = 0;
    let parent = Array.from([...new Array(n).keys()]);
    let s_costs = costs.sort((a,b) => a[2] - b[2]);
    for(let cost of s_costs){
        if(!findParent(parent, cost[0], cost[1])){
            answer += cost[2];
            unionParent(parent, cost[0], cost[1]);
        }
    }
    return answer;
}


function unionParent(arr, a, b){
    a = getParent(arr, a);
    b = getParent(arr, b);

    // 두 노드 중 작은 부모 노드값을 가진 값으로 합친다.
    if (a < b){
        arr[b] = a;
    }
    else{
        arr[a] = b;
    }
}

// 부모 노드를 찾는 재귀함수
function getParent(arr, x){
    if (arr[x] == x) {
        return x;
    }
    return arr[x] = getParent(arr, arr[x]);
}

// 같은 부모 노드를 갖는지 확인한다.
function findParent(arr, a, b)
{
    a = getParent(arr, a);
    b = getParent(arr, b);
    
    if (a === b){
        return true;
    }
    else{
        return false;
    }
}

solution(4,	[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]);