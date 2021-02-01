function kruskal(nodes){
    let edges = nodes.sort((a,b)=> a[2] - b[2]);

    let parent = [0, 1,2,3,4,5,6,7];
    //인덱스를 맞추기 위해 첫번째 요소는 0으로 setting

    //노드 갯수 -1 개의 간선이 발견되면 끝.
    //Cycle 이 발생하면 해당 간선은 연결 하지 않음
    //작은 값부터 하나씩 연결하면서 진행.

    let sum = 0; //비용값을 더한다.

    for(let node of edges){
        console.log(node)
        if(!findParent(parent, node[0]  , node[1])){
            sum += node[2];
            unionParent(parent, node[0], node[1]);
        }
        console.log(parent);

    }
    console.log(sum);
}


// 두 개의 노드를 같은 부모 노드로 합친다.
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

let arr = [[1,7,12], [1,4,28], [1,2,67], [1,5,17], [2,4,24], [2,5,62], [3,5,20], [3,6,37], [4,7,13], [5,6,45], [5,7,73]];
kruskal(arr);